import { BadgeCheck, CircuitBoard, FileDigit } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-primary-950 p-12 shadow-xl shadow-slate-950/50">
      <div className="absolute -top-32 -right-24 h-64 w-64 rounded-full bg-primary-500/20 blur-3xl" />
      <div className="absolute bottom-0 left-10 h-40 w-40 rounded-full bg-accent-500/10 blur-2xl" />

      <div className="relative z-10 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary-500/40 bg-primary-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.3em] text-primary-100">
          <BadgeCheck className="h-4 w-4" /> ODIGO-RCS v1.0.0
        </span>
        <h1 className="mt-8 text-4xl font-semibold leading-tight text-slate-50 md:text-5xl">
          Sistema de Certificación y Preservación Digital con Ticker en Tiempo Real
        </h1>
        <p className="mt-6 text-lg text-slate-300">
          Automatiza la emisión de certificados y la preservación de evidencias críticas para infraestructura
          electromecánica. Monitoriza el estado de cada activo con telemetría en vivo y trazabilidad auditable.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            className="inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary-900/50 transition hover:bg-primary-400"
            href="#demo"
          >
            Solicitar despliegue piloto
          </a>
          <a
            className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-primary-400 hover:text-primary-200"
            href="#arquitectura"
          >
            Ver arquitectura
          </a>
        </div>
      </div>

      <div className="relative z-10 mt-12 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <CircuitBoard className="h-6 w-6 text-primary-200" />
          <h3 className="mt-4 text-sm font-semibold text-slate-200">Integración OT</h3>
          <p className="mt-2 text-xs text-slate-400">OPC-UA, IEC 61850, MQTT y modulación SCADA en un orquestador.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <FileDigit className="h-6 w-6 text-primary-200" />
          <h3 className="mt-4 text-sm font-semibold text-slate-200">Firma distribuida</h3>
          <p className="mt-2 text-xs text-slate-400">Firmas PQC con respaldo en ledger BFT + registro notarizado.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-5">
          <BadgeCheck className="h-6 w-6 text-primary-200" />
          <h3 className="mt-4 text-sm font-semibold text-slate-200">Cumplimiento normativo</h3>
          <p className="mt-2 text-xs text-slate-400">IEC 62443, ENS, ISO 22301, NERC CIP con auditoría continua.</p>
        </div>
      </div>
    </section>
  );
}
