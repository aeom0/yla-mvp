# ROADMAP — Yoga con Lógica y Alma (yla-mvp)

Documento vivo: prioridades de producto y técnica.
Para convenciones de código ver `CLAUDE.md` y `.claude/skills/yla-dev-SKILL.md`.

Última revisión: abril 2026 (alineado con últimos commits en `main`).

### Cambios recientes (últimos commits)

- **Fase 0-C ✅ COMPLETA:** Sanity CMS integrado end-to-end. Landing `/` lee datos con **GROQ + ISR** (`src/lib/sanity/queries.ts`) con fallback a `content.ts`. `POST /api/revalidate` para webhooks. Variables `NEXT_PUBLIC_SANITY_*` y `SANITY_REVALIDATE_SECRET` en Vercel. **Studio publicado:** [yogaconlogicayalma.sanity.studio](https://yogaconlogicayalma.sanity.studio) · `appId: jsopjvk7g1yeb2ciuamignil` en `sanity.cli.ts`. Yube invitada como Editor. Webhook configurado en sanity.io/manage.
- **Migración de datos:** todos los documentos de `content.ts` migrados al dataset `production` de Sanity (`studio/scripts/migrate-content.ts`). Script idempotente — safe para correr N veces.
- **Design tokens:** Aurora Consciente — `var(--accent)`, `--lavender-*`, `--rose*`, `--violet-anchor`. Sin `--purple*` / `--gold*`. Acento de programas: `lavender` | `rose`.
- **Programas:** rutas estáticas `/programas/[slug]` con ficha completa. Cards con botón «Conocer más» y descripción bajo el CTA.
- **Philosophy:** cards con borde superior `var(--accent)`, íconos centrados. CTAs: YouTube, `/tests`, `/blog`.
- **Placeholders:** `/tests` y `/blog`.

---

## Visión

Un hub digital que concentre **captación (lead magnet + newsletter)**, **venta (Payhip → tienda propia)** y **comunidad (WhatsApp, redes)**, con autonomía de contenido para Yube vía CMS, evolucionando hacia **PWA y app** sin reescribir la marca.

---

## Estado actual del codebase

### Componentes implementados (`src/components/home/`)

| Componente | Descripción | Estado |
|---|---|---|
| `Hero.tsx` | Hero principal con CTAs y stats | ✅ Live |
| `Philosophy.tsx` | Pilares Cuerpo / Mente / Alma | ✅ Live |
| `Programs.tsx` | Tres programas → `/programas/[slug]` | ✅ Live |
| `Testimonials.tsx` | Reseñas de alumnas (avatares iniciales) | ✅ Live — fotos pendientes |
| `About.tsx` | Bio de Yube | ✅ Live — foto pendiente |
| `Community.tsx` | Cards de redes sociales | ✅ Live |
| `Shop.tsx` | Catálogo → Payhip | ✅ Live |
| `LeadMagnet.tsx` | Clase express gratis (captura email) | ✅ Live |
| `SocialProofStrip.tsx` | Strip de prueba social | ✅ Live |
| `Footer.tsx` | Footer con nav y legal | ✅ Live |

### Rutas (`src/app/`)

| Ruta | Estado |
|---|---|
| `/` | ✅ Live — datos desde Sanity (ISR + fallback content.ts) |
| `/membresia` | ✅ |
| `/faq` | ✅ |
| `/programas/[slug]` | ✅ SSG |
| `/tests` | ✅ Placeholder |
| `/blog` | ✅ Placeholder |
| `/tienda` · `/tienda/[slug]` | ✅ |
| `/api/subscribe` | ✅ Sin ESP conectado (Sprint 3) |
| `/api/revalidate` | ✅ Webhook ISR para Sanity |

### Sanity CMS (`studio/`)

| Elemento | Estado |
|---|---|
| Schemas (9 tipos) | ✅ `studio/schemas/` |
| Datos migrados | ✅ 4 productos, 3 programas, 5 FAQ, 3 clases, 3 testimonios |
| Studio cloud | ✅ yogaconlogicayalma.sanity.studio |
| Webhook → Vercel | ✅ Configurado |
| Acceso Yube | ✅ Editor |
| Imágenes | ⏳ Yube las sube desde el Studio |

---

## Fase 0-B — Conversión y assets reales ← Sprint activo

**Objetivo:** Convertir la landing en fuente de ingresos real con assets de Yube y precios visibles.

### Sprint 1 — Assets visuales (desbloqueadores: Yube entrega logo, foto y video)

- [ ] **Logo en Header** — `public/logo.png` → `src/components/layout/Header.tsx`
- [ ] **Foto real de Yube en About** — `public/yube-about.jpg` → subir también en Sanity Studio (campo `photo` en About)
- [ ] **Video de Yube en Hero** — YouTube embed; campo `youtubeVideoId` ya existe en schema Sanity y en `content.ts`
- [ ] **Fotos reales en Testimonials** — subir en Sanity Studio (campo `photo` en cada testimonial)

### Sprint 2 — Conversión de tienda

- [ ] **Precios visibles en Shop** — ya existe campo `price` en schema Sanity y en `content.ts`; Yube lo edita desde el Studio
- [ ] **Preview de cuadernos** — 2-3 imágenes del interior; subir en Sanity Studio
- [x] **Página individual de producto** — `/tienda/[slug]` ✅
- [ ] **Sección "Empieza aquí"** — `StartHere.tsx` entre Philosophy y Programs

### Sprint 3 — Email y dominio

- [ ] **Conectar `/api/subscribe` a Resend** — Resend free tier (3,000 emails/mes)
- [ ] **Dominio `yogaconlogicayalma.com`** — apuntar DNS a Vercel

---

## Fase 0-C — CMS con Sanity ✅ COMPLETA

**Todo implementado y en producción.**

| Tarea | Estado |
|---|---|
| Proyecto Sanity creado (`s6xwmbxz`) | ✅ |
| Schemas definidos en TypeScript (`studio/schemas/`) | ✅ |
| Datos migrados de `content.ts` → dataset production | ✅ |
| Next.js conectado con GROQ + ISR | ✅ |
| Webhook Sanity → Vercel revalidate | ✅ |
| Yube con acceso Editor al Studio | ✅ |
| Studio publicado en la nube | ✅ yogaconlogicayalma.sanity.studio |

---

## Fase 1 — PWA

**Dependencia:** dominio `yogaconlogicayalma.com` conectado (Sprint 3).

- Dashboard espiritual y hábitos
- Bitácora del alma (journaling guiado)
- Modo ritual (intención, audio, respiración)
- Calendario / avisos de clases y eventos
- Comunidad interna (complemento a WhatsApp)

---

## Fase 2 — Full web app

- Auth + datos: **Supabase** (`mwvgtxzvqhducjggycuu`)
- Pagos recurrentes: **Stripe**
- Panel de alumna, contenido según plan, historial

---

## Fase 3 — App nativa

- React Native / Expo tras validar retención en web/PWA
- Sanity como CMS unificado (mismo contenido, múltiples frontends)

---

## Fase 4 — Concept store física

- Punto de encuentro (Turmero / Maracay)
- QR codes → landing o app
- Campañas locales alineadas al funnel digital

---

## Deuda técnica

- [ ] `alert()` en newsletter → toast/modal elegante
- [ ] Accesibilidad: focus visible en dark mode con botones del acento
- [ ] `next/image` para todas las imágenes (optimización automática)
- [ ] Meta tags OG para cada ruta (compartir en redes)
- [ ] Tests E2E opcionales en rutas críticas (`/`, `/membresia`, subscribe)
- [ ] `/programas/[slug]` y `/tienda/[slug]` — conectar a Sanity (actualmente leen de `content.ts`)

---

## Referencias

- Payhip: https://payhip.com/ConLogicayAlma
- Sanity Studio: https://yogaconlogicayalma.sanity.studio
- Sanity project: `s6xwmbxz` · dataset: `production`
- Supabase project: `mwvgtxzvqhducjggycuu`
- Vercel project: `yogaconlogicayalma`
- Repo: https://github.com/aeom0/yla-mvp
- Live: https://yla-mvp.vercel.app
- Dominio (pendiente DNS): yogaconlogicayalma.com
