const METRICS = [
  {
    label: "Certificaciones en 24h",
    value: "1,284",
    detail: "+18% respecto a la semana previa"
  },
  {
    label: "Integridad promedio",
    value: "99.2%",
    detail: "Validada con huellas cruzadas SHA-512 + PQC"
  },
  {
    label: "Tiempo de emisión",
    value: "3m 42s",
    detail: "Del ingreso de expediente al certificado firmado"
  },
  {
    label: "Disponibilidad 12M",
    value: "99.982%",
    detail: "Infraestructura distribuida en 6 regiones"
  }
];

export function MetricsGrid() {
  return (
    <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {METRICS.map((item) => (
        <article
          key={item.label}
          className="rounded-2xl border border-slate-800 bg-slate-950/40 p-6 shadow-lg shadow-slate-950/40"
        >
          <h3 className="text-sm uppercase tracking-widest text-slate-400">{item.label}</h3>
          <p className="mt-4 text-3xl font-semibold text-slate-50">{item.value}</p>
          <p className="mt-2 text-sm text-slate-500">{item.detail}</p>
        </article>
      ))}
    </section>
  );
}
