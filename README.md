# ODIGO-RCS · Sistema de Certificación y Preservación Digital

Solución Next.js orientada a infraestructura electromecánica que gestiona la certificación, preservación y monitoreo en tiempo real de expedientes críticos. Incluye ticker vivo, analítica operacional y descripciones de arquitectura listas para despliegues productivos.

## 🧭 Stack

- Next.js 14 (App Router) + React 18
- Tailwind CSS
- SWR para refresco del ticker en vivo
- Iconografía Lucide + animaciones Framer Motion

## 🚀 Uso local

```bash
npm install
npm run dev
# http://localhost:3000
```

### Scripts

- `npm run dev` – entorno de desarrollo
- `npm run build` – build de producción
- `npm start` – serve de la build
- `npm run lint` – linting con reglas Next.js

## 📦 Estructura

```
app/                  # Layouts, páginas y rutas API (ticker)
components/           # Componentes UI reutilizables
lib/                  # Utilidades y tipos compartidos
public/               # Activos estáticos (vacío por defecto)
```

## 🧩 Módulos clave

- **Ticker en tiempo real** (`components/TickerMarquee.tsx`) consume `/api/ticker` con refresco cada 5 s.
- **Flujo de certificación** (`components/CertificationTimeline.tsx`) describe el pipeline end‑to‑end.
- **Analítica operacional** (`components/OperationalInsights.tsx`) compara KPIs vs. plataformas legadas.
- **Infraestructura** (`components/InfrastructureSection.tsx`) resume la arquitectura distribuida ODIGO-RCS.

## 🛡️ Requisitos de producción

- Node.js 18+
- PostgreSQL, Redis y almacenamiento WORM (descritos en documentación operativa)
- Integración con verificador de firmas PQC y ledger BFT (no incluido en este demo web)

## 📄 Licencia

MIT © Ingeniero Electromecánico
