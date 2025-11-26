"use client";

import { useMemo } from "react";
import useSWR from "swr";
import { motion } from "framer-motion";
import { jsonFetcher } from "@/lib/fetcher";
import type { TickerPayload } from "@/lib/types";

const STATUS_STYLES: Record<string, string> = {
  Certificado: "bg-emerald-500/20 text-emerald-200 border border-emerald-500/30",
  "En Proceso": "bg-primary-500/10 text-primary-100 border border-primary-500/30",
  "En Cola": "bg-accent-500/10 text-amber-100 border border-accent-500/30",
  Observado: "bg-rose-500/10 text-rose-200 border border-rose-500/30"
};

const formatConfidence = (value: number) => `${(value * 100).toFixed(1)}%`;

export function TickerMarquee() {
  const { data } = useSWR<TickerPayload>("/api/ticker", jsonFetcher, {
    refreshInterval: 5000,
    revalidateOnFocus: false
  });

  const entries = useMemo(
    () => data?.entries ?? [],
    [data?.entries]
  );

  if (!entries.length) {
    return (
      <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
        <p className="text-sm text-slate-400">Iniciando ticker en tiempo real…</p>
      </div>
    );
  }

  const marqueeContent = [...entries, ...entries];

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-950/50">
      <div className="flex items-center gap-3 border-b border-slate-800 bg-slate-900/60 px-4 py-2 text-xs uppercase tracking-[0.3em] text-slate-400">
        <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.7)]" />
        <span>Ticker Certificaciones</span>
        <span className="ml-auto text-[0.6rem] text-slate-500">
          {data?.updatedAt ? new Date(data.updatedAt).toLocaleTimeString("es-ES") : ""}
        </span>
      </div>

      <div className="relative flex overflow-hidden">
        <motion.div
          className="flex min-w-full gap-4 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 18, repeat: Infinity }}
        >
          {marqueeContent.map((item, index) => (
            <article
              key={`${item.id}-${index}`}
              className={`min-w-[240px] rounded-xl px-4 py-3 text-sm shadow-lg shadow-slate-950/40 ${
                STATUS_STYLES[item.status] ?? STATUS_STYLES["En Proceso"]
              }`}
            >
              <header className="mb-2 flex items-center justify-between text-xs text-slate-300">
                <span className="font-semibold tracking-wide">{item.id}</span>
                <span className="text-slate-400">{new Date(item.updatedAt).toLocaleTimeString("es-ES")}</span>
              </header>
              <h3 className="text-base font-semibold">{item.asset}</h3>
              <p className="mt-1 text-xs text-slate-400">Hash: {item.hash}</p>
              <footer className="mt-3 flex items-center justify-between text-xs">
                <span className="font-medium uppercase tracking-wider text-slate-200">{item.status}</span>
                <span className="text-slate-300">{formatConfidence(item.confidence)}</span>
              </footer>
            </article>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
