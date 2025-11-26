import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";

export function ContactCard() {
  return (
    <section className="rounded-3xl border border-slate-800 bg-slate-950/50 p-8 shadow-lg shadow-slate-950/40">
      <header className="mb-6">
        <h2 className="text-3xl font-semibold text-slate-50">Contacto especializado</h2>
        <p className="mt-2 text-sm text-slate-400">
          Diseñamos despliegues certificados para utilities, oil&gas y smart grids. Agenda una demo técnica.
        </p>
      </header>

      <dl className="grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
            <Phone className="h-4 w-4" /> Teléfono
          </dt>
          <dd className="mt-2 text-lg font-medium text-slate-200">+57 1 508 9000</dd>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
            <Mail className="h-4 w-4" /> Correo
          </dt>
          <dd className="mt-2 text-lg font-medium text-slate-200">infraestructura@odigo-rcs.com</dd>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
            <MessageSquare className="h-4 w-4" /> Soporte 24/7
          </dt>
          <dd className="mt-2 text-lg font-medium text-slate-200">Mesa de operaciones OT &amp; TI</dd>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/40 p-5">
          <dt className="flex items-center gap-2 text-xs uppercase tracking-wide text-slate-400">
            <MapPin className="h-4 w-4" /> Oficinas
          </dt>
          <dd className="mt-2 text-lg font-medium text-slate-200">Parque Tecnológico - Bogotá, Colombia</dd>
        </div>
      </dl>
    </section>
  );
}
