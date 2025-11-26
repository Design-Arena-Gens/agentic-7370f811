import { Gauge, LineChart, Radar } from "lucide-react";

const INSIGHTS = [
  {
    icon: LineChart,
    title: "Forecast de cargas",
    description:
      "Predicción de demanda y disponibilidad basada en aprendizaje automático. Ajustes automáticos cuando la varianza supera el 3%."
  },
  {
    icon: Gauge,
    title: "Indicadores de confiabilidad",
    description:
      "MTBF y MTTR integrados con telemetría en vivo. Alertas tempranas con 97% de precisión para activos críticos."
  },
  {
    icon: Radar,
    title: "Mapa de riesgos operacionales",
    description:
      "Cruza vulnerabilidades OT con criticidad eléctrica para priorizar mantenimiento y contingencias."
  }
];

const COMPARISON = [
  { label: "Sello dinámico", odigo: 98, legacy: 74 },
  { label: "Automatización", odigo: 95, legacy: 61 },
  { label: "Evidencias auditables", odigo: 99, legacy: 68 },
  { label: "Integración OT/IT", odigo: 92, legacy: 57 }
];

export function OperationalInsights() {
  return (
    <section className="grid gap-8 rounded-3xl border border-slate-800 bg-slate-950/45 p-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h2 className="text-3xl font-semibold text-slate-50">Monitoreo y analítica operacional</h2>
        <p className="mt-3 text-base text-slate-400">
          Paneles en tiempo real combinan telemetría de subestaciones, registros de mantenimiento y expedientes
          digitales. Los equipos de operaciones anticipan incidentes con hasta 12 horas de antelación.
        </p>
        <div className="mt-8 grid gap-4">
          {INSIGHTS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-5"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-500">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm text-slate-400">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
        <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Benchmark Certificación</h3>
        <p className="mt-3 text-sm text-slate-500">
          ODIGO-RCS frente a plataformas heredadas en 2024 (muestra: 18 utilities latinoamericanas).
        </p>
        <div className="mt-6 grid gap-4">
          {COMPARISON.map((item) => (
            <div key={item.label}>
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>{item.label}</span>
                <span>{item.odigo}%</span>
              </div>
              <div className="mt-1 h-2 rounded-full bg-slate-800">
                <div
                  className="h-2 rounded-full bg-gradient-to-r from-primary-500 via-primary-400 to-accent-500"
                  style={{ width: `${item.odigo}%` }}
                />
              </div>
              <div className="mt-1 flex items-center justify-between text-[0.65rem] text-slate-500">
                <span>ODIGO-RCS</span>
                <span>Legado {item.legacy}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
