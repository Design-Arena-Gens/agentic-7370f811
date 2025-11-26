export type TickerStatus = "Certificado" | "En Proceso" | "En Cola" | "Observado";

export interface TickerEntry {
  id: string;
  asset: string;
  hash: string;
  status: TickerStatus;
  confidence: number;
  updatedAt: string;
}

export interface TickerPayload {
  updatedAt: string;
  entries: TickerEntry[];
}
