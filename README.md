# Yoga con Lógica y Alma — yla-mvp

Landing y funnel digital de **Yube Karina**: método que mezcla estructura (ingeniería) con práctica de yoga y autoconocimiento.

- **Deploy:** [Vercel](https://yla-mvp.vercel.app) (dominio propio planificado: `yogaconlogicayalma.com`)
- **Tienda:** [Payhip — ConLogicayAlma](https://payhip.com/ConLogicayAlma)

## Stack

Next.js 15 (App Router) · React 19 · TypeScript strict · Tailwind CSS v4 · Lucide · `@fontsource` (Playfair + Lato)

## Desarrollo

```bash
yarn install
yarn dev
```

Abre [http://localhost:3000](http://localhost:3000).

```bash
yarn build   # verificación producción + tipos
yarn lint
```

## Contenido

Todo el copy visible sale de [`src/data/content.ts`](src/data/content.ts). Los componentes en [`src/components/home/`](src/components/home/) solo renderizan datos.

## Rutas principales

| Ruta | Descripción |
|------|-------------|
| `/` | Landing (Hero, filosofía, programas, testimonios, sobre mí, comunidad, tienda, lead magnet, FAQ) |
| `/membresia` | Página de membresía y comparación de planes |
| `POST /api/subscribe` | Validación de email (MVP; falta conectar proveedor de correo) |

## Documentación del repo

| Archivo | Propósito |
|---------|-----------|
| [`CLAUDE.md`](CLAUDE.md) | Contexto técnico para asistentes de código |
| [`GEMINI.md`](GEMINI.md) | Brief para Yube + flujo con Gemini |
| [`ROADMAP.md`](ROADMAP.md) | Fases del producto y backlog |
| [`.claude/skills/yla-dev-SKILL.md`](.claude/skills/yla-dev-SKILL.md) | Skill del proyecto (convenciones YLA) |

## Créditos

Marca y contenido: **Yube Karina** · Desarrollo: **Alberto**
