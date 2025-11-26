import { CheckCircle2, Cpu, Database, LockKeyhole, ShieldHalf, UploadCloud } from "lucide-react";

const STEPS = [
  {
    icon: UploadCloud,
    title: "Ingreso de Evidencias",
    description:
      "Normaliza documentos técnicos, planos y registros sensoriales con verificación automática de metadatos."
  },
  {
    icon: ShieldHalf,
    title: "Preservación Criptográfica",
    description:
      "Generación de huellas SHA-512 y notarización distribuida en la red ODIGO para garantizar inmutabilidad."
  },
  {
    icon: Database,
    title: "Indexación Semántica",
    description:
      "Motor vectorial cataloga activos por criticidad, tecnología y contexto operativo para búsquedas avanzadas."
  },
  {
    icon: Cpu,
    title: "Validación Inteligente",
    description:
      "Modelos ML evalúan integridad de series temporales, correlacionan alarmas y detectan desviaciones."
  },
  {
    icon: LockKeyhole,
    title: "Custodia Distribuida",
    description:
      "Cifrado homomórfico y claves derivadas de PQC resguardan los activos digitales a largo plazo."
  },
  {
    icon: CheckCircle2,
    title: "Emisión de Certificado",
    description:
      "Se emite el certificado ODIGO-RCS con firma digital auditada y metadatos listos para timbrado ante regulador."
  }
];

export function CertificationTimeline() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/40 p-8 backdrop-blur">
      <header className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-semibold text-slate-50">Flujo de Certificación End-to-End</h2>
        <p className="mt-3 text-base text-slate-400">
          Cada activo se procesa con controles criptográficos, trazabilidad operacional y auditoría granular.
          El pipeline se ejecuta en menos de 4 minutos por lote de expediente.
        </p>
      </header>

      <ol className="grid gap-6 md:grid-cols-3">
        {STEPS.map(({ icon: Icon, title, description }) => (
          <li
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/30 p-6 transition hover:border-primary-500/60 hover:bg-primary-500/10"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-primary-500/40 bg-primary-500/10 text-primary-200 shadow-lg shadow-primary-950/40">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
            <p className="mt-2 text-sm text-slate-400 leading-relaxed">{description}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
