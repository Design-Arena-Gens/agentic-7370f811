import { GlobeLock, HardDriveDownload, Network, ShieldCheck } from "lucide-react";

const ELEMENTS = [
  {
    icon: Network,
    title: "Red ODIGO Mesh",
    description:
      "Topología mesh con canales TLS 1.3 y segmentación zero-trust. Latencia determinística < 40 ms entre nodos."
  },
  {
    icon: HardDriveDownload,
    title: "Preservación WORM",
    description:
      "Almacenamiento WORM certificado ISO 14641 con verificación diaria y respaldo multi-región cada 15 minutos."
  },
  {
    icon: GlobeLock,
    title: "Cadenas Regionales",
    description:
      "Sidechains regionales sincronizadas bajo consenso BFT: 4096 validadores, promedio 2.1 s por bloque firmado."
  },
  {
    icon: ShieldCheck,
    title: "Conformidad y Auditoría",
    description:
      "Cumplimiento IEC 62443, NERC CIP y ENS. Trails completos exportables en formato Eviden para fiscalización."
  }
];

export function InfrastructureSection() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-950/70 via-slate-950/30 to-primary-900/20 p-8">
      <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <h2 className="text-3xl font-semibold text-slate-50">Infraestructura Operativa</h2>
          <p className="mt-4 text-base text-slate-400">
            ODIGO-RCS orquesta la preservación digital con redundancia geográfica, trazabilidad criptográfica y
            monitoreo proactivo. Cada certificado se replica en nodos perimetrales y centros de datos certificados
            Tier IV con soporte 24/7.
          </p>
          <p className="mt-3 text-sm text-slate-500">
            Integración lista para escalar a 1500 expedientes simultáneos y API REST/GraphQL para ERPs industriales.
          </p>
        </div>

        <div className="grid gap-4">
          {ELEMENTS.map(({ icon: Icon, title, description }) => (
            <article
              key={title}
              className="flex gap-4 rounded-2xl border border-slate-800 bg-slate-950/40 p-5 shadow-lg shadow-slate-950/40"
            >
              <div className="mt-1 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10 text-primary-200">
                <Icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
