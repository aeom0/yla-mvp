# Handoff para Cursor — Sanity Studio YLA

> Estado al: abril 2026. Continúa desde aquí.

---

## Qué se hizo hasta ahora

1. Los **schemas de Sanity** están en `studio/schemas/` — generados y listos, no tocar.
2. `studio/sanity.config.ts` y `studio/sanity.cli.ts` configurados con Project ID `s6xwmbxz`.
3. Las dependencias de Sanity se instalaron con `yarn add` dentro de `/studio/`.
4. **El problema actual:** el `studio/package.json` local fue sobreescrito por `yarn init -y` y perdió los scripts. El correcto está en el repo.

---

## Tarea para Cursor

### Paso 1 — Sincronizar el package.json local

```bash
cd ~/yla-mvp
git pull
```

Esto restaura el `studio/package.json` correcto con los scripts `dev`, `build`, `deploy`.

### Paso 2 — Levantar el Studio

```bash
cd studio
yarn dev
```

Debe abrir el Studio en `http://localhost:3333`. Si pide autenticación, loguear con la cuenta de Sanity de Yube.

### Paso 3 — Verificar que los schemas cargan

En el sidebar del Studio deben aparecer en este orden:
- 🌟 Hero — Sección principal
- 🧘 Sobre Yube
- 🌿 Filosofía — Pilares
- ⚙️ Configuración del sitio
- ─────────────
- 🛍️ Productos — Tienda
- 🌀 Programas
- 💬 Testimonios
- ❓ Preguntas frecuentes
- 🧘 Clases online

Si algo no carga, revisar errores en consola — probablemente es un import roto en `studio/schemas/index.ts`.

### Paso 4 — Crear el .env local del studio

```bash
cp studio/.env.example studio/.env
```

El `.env` ya tiene los valores correctos (Project ID y dataset). No hace falta editarlo.

### Paso 5 — Verificar que TypeScript compila

```bash
cd studio
yarn tsc --noEmit
```

Si hay errores de tipos en los schemas, reportar cuáles.

---

## Contexto técnico importante

- **Project ID Sanity:** `s6xwmbxz`
- **Dataset:** `production`
- **Organization ID:** `o9M8pzowd`
- **Stack del repo principal:** Next.js 15 + React 19 + Tailwind v4 + TypeScript strict + Yarn 4
- **El studio es un subproyecto independiente** dentro del repo — tiene su propio `package.json` y `node_modules`
- **No instalar nada en el studio sin confirmar** — el stack está definido

## Lo que viene después (no hacer aún)

- Migrar datos de `src/data/content.ts` → dataset de Sanity
- Reemplazar imports de `content.ts` por queries GROQ + ISR en Next.js
- Configurar webhook Sanity → Vercel revalidate
- `sanity deploy` para publicar el Studio en la nube para Yube

---

*Handoff generado por Claude. Ver ROADMAP.md para el contexto completo del proyecto.*
