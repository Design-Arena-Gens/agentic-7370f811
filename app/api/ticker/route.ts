import { NextResponse } from "next/server";
import { formatISO } from "date-fns";
import type { TickerEntry, TickerPayload, TickerStatus } from "@/lib/types";

const STATUS_POOL: TickerStatus[] = ["Certificado", "En Proceso", "En Cola", "Observado"];
const DATASET = [
  { asset: "Contrato Energético", hash: "f3a2-9b8d-4411", id: "ODG-2045" },
  { asset: "Informe Geotécnico", hash: "c8b9-11ad-09fa", id: "ODG-7612" },
  { asset: "Planos Subestación", hash: "b6de-3cf2-998a", id: "ODG-8722" },
  { asset: "Matriz de Riesgo", hash: "d4aa-179c-39ba", id: "ODG-1186" },
  { asset: "Protocolo Mantenimiento", hash: "ab27-55d0-ef90", id: "ODG-9011" },
  { asset: "Certificado RCM", hash: "fe01-97de-af22", id: "ODG-4410" }
];

const getConfidence = (status: TickerStatus) => {
  switch (status) {
    case "Certificado":
      return 0.99;
    case "En Proceso":
      return 0.87;
    case "En Cola":
      return 0.73;
    case "Observado":
      return 0.52;
    default:
      return 0.5;
  }
};

const buildPayload = (): TickerPayload => {
  const now = new Date();
  const entries: TickerEntry[] = DATASET.map((item, index) => {
    const status = STATUS_POOL[(index + now.getSeconds()) % STATUS_POOL.length];
    const fluctuation = Math.random() / 100;
    return {
      ...item,
      status,
      confidence: Math.min(0.99, Math.max(0.45, getConfidence(status) + fluctuation)),
      updatedAt: formatISO(now)
    };
  });

  return {
    updatedAt: formatISO(now),
    entries
  };
};

export async function GET() {
  return NextResponse.json(buildPayload(), {
    headers: {
      "Cache-Control": "no-store"
    }
  });
}
