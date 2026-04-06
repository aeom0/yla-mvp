---
name: yla-dev
description: >
  Skill especializado para el proyecto "Yoga con Lógica y Alma" (YLA). Usa este skill
  siempre que trabajes en el codebase yla-mvp: al crear o modificar componentes React/Next.js,
  ajustar estilos Tailwind, editar contenido en content.ts, diseñar nuevas secciones del landing,
  planificar fases de la PWA o web app, o discutir arquitectura del proyecto. También úsalo
  para decisiones de UX/UI, copy de la marca, y estrategia de productos digitales de Yube.
  Si el usuario menciona Yube, YLA, landing page, PWA espiritual, Supabase+Stripe para yoga,
  o cualquier componente del ecosistema digital de la marca, activa este skill inmediatamente.
---

# YLA Dev Skill — Yoga con Lógica y Alma

> Lee este archivo completo antes de tocar una sola línea del proyecto.
> Es la fuente de verdad técnica. CLAUDE.md y ROADMAP.md en el repo la complementan.
> Última revisión: abril 2026.

---

## 🧘 Contexto del proyecto

**Yoga con Lógica y Alma** es la plataforma digital de **Yube Karina** (ingeniera industrial + instructora de yoga con formación avanzada, 500h).
El método fusiona estructura analítica con práctica espiritual. El asesor técnico es **Alberto**.

**Fase actual:** Landing con Sanity (GROQ + ISR + fallback `content.ts`) + Studio en https://yogaconlogicayalma.sanity.studio. Próximo: extender CMS a más rutas / PWA (Fase 1).

**Tagline:** *"Organizamos el bienestar, ritualizamos la estructura."*
**Público:** Mujeres conscientes y emprendedoras, mercado hispanohablante (Venezuela, España, LATAM).

---

## 🛠 Stack tecnológico (no negociable)

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Framework | Next.js 15.4.8 (App Router) | Sin Pages Router |
| UI | React 19.2.1 + Tailwind CSS v4 | v4, NO v3 |
| Lenguaje | TypeScript strict | Sin `any` implícito |
| Iconos | Lucide React ^0.539 | Ya instalado |
| Tipografía | Playfair Display + Lato + Dancing Script | Via @fontsource |
| Gestor de paquetes | Yarn 4 (Corepack) | `ENABLE_EXPERIMENTAL_COREPACK=1` en Vercel |
| CMS | Sanity Studio (hosted) + dataset `production` · home desde GROQ | Fase 0-C en curso |
| Backend | Supabase (`mwvgtxzvqhducjggycuu`) | Fase 2 |
| Pagos | Stripe | Fase 2 |
| Tienda | Payhip | Activo |
| Entorno | WSL2 · Windows 11 · VS Code | Android = target primario |
| Deploy | Vercel (`yogaconlogicayalma`) | Auto-deploy desde `main` |

**⚠️ No instalar nuevas dependencias sin confirmar con Alberto.**

---

## 🎨 Sistema de diseño — Aurora Consciente

### Variables CSS (definidas en `src/app/globals.css`)

```css
/* Paleta base — valores fijos */
--lavender-deep:  #7B5EA7;  /* CTA primario (Button variant=primary) */
--lavender:       #B497D6;  /* espiritual, íconos, pills */
--rose:           #E8C4C4;  /* productos gratis, bordes suaves */
--rose-deep:      #C8928F;  /* acentos cálidos */
--sage:           #A8C5A0;  /* bienestar */
--violet-anchor:  #3D2865;  /* títulos display, footer oscuro */
--beige:          #F8F4F0;  /* fondo base claro */
--ink:            #2D2D2D;  /* texto principal */

/* Tokens semánticos light (:root) */
--accent:         #7B5EA7;  /* = lavender-deep → CTA, borders activos */
--accent-soft:    #B497D6;  /* = lavender */
--bg:             #F8F4F0;
--text:           #2D2D2D;
--muted:          /* gris medio */
--border:         /* lavanda muy suave */
--section-alt:    /* lila muy suave para secciones alternas */

/* Tokens dark (.dark) */
--bg:             #1c1a22;
--accent:         #B497D6;  /* lavanda en dark */
```

> **CRÍTICO:** No uses nombres legacy `--gold*`, `--purple*` ni `#D4AF37`, `#5B3A8E`, `#FAF7F2` en código nuevo.
> El sistema de color es Aurora Consciente. `Button primary` = `var(--accent)` = morado `#7B5EA7`.
> Hardcodear hex directamente en `style={}` solo cuando `var()` pueda fallar silenciosamente (ej: Footer oscuro, colores de badge).

### En componentes — uso correcto

```tsx
// ✅ Semántico (preferido)
style={{ color: 'var(--accent)' }}
style={{ background: 'var(--section-alt)' }}

// ✅ Hardcoded hex cuando es color fijo de marca que no cambia con el tema
style={{ background: '#1c1a22', color: '#B497D6' }}  // ej: Footer siempre oscuro

// ❌ Legacy — NO usar
style={{ color: 'var(--gold-deep)' }}   // token eliminado
style={{ background: '#FAF7F2' }}        // fondo viejo
```

### Tipografía

- `Playfair Display` → títulos, clase `.title`, `h1–h3`
- `Lato` → body, UI, botones
- `Dancing Script` → mantras, frases espirituales canalizadas

### Principios visuales irrompibles

- **Mobile-first.** 375px = viewport de referencia. Desktop = mejora progresiva.
- Minimalismo funcional. Menos es más.
- Animaciones sutiles: brillo, fade, latido. **Nunca flashy.**
- Se siente como ritual digital, no como app de gimnasio.
- Dark mode: fondo morado profundo `#1c1a22` + texto claro + acento lavanda.

---

## 📁 Arquitectura de carpetas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                      ← landing (importa secciones en orden)
│   ├── globals.css                   ← variables CSS Aurora Consciente + Tailwind base
│   ├── api/
│   │   └── subscribe/route.ts        ← POST email (ESP por conectar — Sprint 3)
│   ├── blog/page.tsx                 ← placeholder «próximamente»
│   ├── tests/page.tsx                ← placeholder «próximamente»
│   ├── programas/
│   │   └── [slug]/page.tsx           ← ficha SSG por programa
│   ├── tienda/
│   │   ├── page.tsx                  ← índice catálogo
│   │   └── [slug]/page.tsx           ← ficha de producto
│   ├── membresia/page.tsx
│   └── faq/page.tsx
│
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   │
│   ├── home/                         ← secciones del landing
│   │   ├── Hero.tsx                  ✅
│   │   ├── Philosophy.tsx            ✅  (CTAs: YouTube, /tests, /blog)
│   │   ├── Programs.tsx              ✅  (→ /programas/[slug])
│   │   ├── Testimonials.tsx          ✅  (avatares iniciales; fotos pendientes)
│   │   ├── About.tsx                 ✅  (foto Yube pendiente)
│   │   ├── Community.tsx             ✅
│   │   ├── Shop.tsx                  ✅  (sin precios — Sprint 2)
│   │   ├── LeadMagnet.tsx            ✅
│   │   ├── SocialProofStrip.tsx      ✅
│   │   ├── FAQ.tsx                   ✅
│   │   └── Footer.tsx                ✅
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── BottomNav.tsx
│   │
│   └── theme/
│       └── ThemeToggle.tsx
│
├── data/
│   └── content.ts                    ← FUENTE DE VERDAD del contenido
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/
└── types/
    └── index.ts
```

---

## 🧩 Convenciones de código

### Regla #1: Contenido separado de presentación

```tsx
// ✅ CORRECTO
import { siteContent } from '@/data/content'
export default function Hero() {
  const { hero } = siteContent
  return <section>{hero.title}</section>
}

// ❌ INCORRECTO — string hardcodeado en JSX
export default function Hero() {
  return <section>El arte de volver a ti</section>
}
```

### Todo el texto visible vive en `src/data/content.ts`

Campos relevantes actuales:
- `hero` — tagline, title, subtitle, description, cta, stats
- `philosophy` — title, description, pillars[]
- `programs.items[]` — id, title, duration, description, stages[], accent, detail
- `programs.items[].detail` — for whom, includes, price, cta, slug
- `testimonials[]`
- `about` — title, credential, description, highlights[], quote, welcomeVideoYoutubeId
- `shop.products[]` — id, category, title, intention, badge, isFree, price
- `faq.items[]`
- `community`, `newsletter`
- `footer` — tagline, links, social
- `siteContent.testsPage`, `siteContent.blogPage` — placeholders
- `classes`, `plans[]` — para /membresia

### TypeScript strict

```tsx
// Props con interfaces nombradas
interface HeroProps { data: HeroContent; className?: string }
// Tipos en src/types/index.ts
```

### Un componente = una responsabilidad

Si supera ~150 líneas, dividir. Si mezcla fetch + render, separar en hook + componente.

---

## 🌐 Estado actual del landing y rutas

| Sección / Ruta | Componente | Estado / Notas |
|---|---|---|
| Hero | `Hero.tsx` | ✅ Live |
| Filosofía | `Philosophy.tsx` | ✅ Pilares Cuerpo/Mente/Alma; CTA por pilar → YouTube, `/tests`, `/blog` |
| Programas | `Programs.tsx` | ✅ Cards → `/programas/[slug]`; bloque clases personalizadas |
| Testimonios | `Testimonials.tsx` | ✅ Avatares iniciales; fotos reales pendientes (Sprint 1) |
| Sobre Yube | `About.tsx` | ✅ Foto placeholder; imagen real pendiente (Sprint 1) |
| Comunidad | `Community.tsx` | ✅ Grid IG, WhatsApp, newsletter |
| Tienda | `Shop.tsx` | ✅ Sin precios (Sprint 2) |
| Lead magnet | `LeadMagnet.tsx` | ✅ `#guia-gratis` → POST `/api/subscribe` |
| Social proof | `SocialProofStrip.tsx` | ✅ |
| FAQ | `FAQ.tsx` | ✅ |
| Footer | `Footer.tsx` | ✅ |
| `/programas/[slug]` | SSG desde `content.ts` | ✅ |
| `/tienda`, `/tienda/[slug]` | Catálogo + ficha | ✅ |
| `/membresia` | Comparación de planes | ✅ |
| `/faq` | FAQ standalone | ✅ |
| `/tests`, `/blog` | Placeholders | ✅ |
| `/api/subscribe` | POST email | ✅ Sin ESP conectado (Sprint 3) |

---

## 📦 Contenido de referencia

### Programas (4 meses c/u)

| Programa | Acento | Etapas |
|----------|--------|--------|
| Encuentra tu Centro | lavender | Conectar → Autoreconocimiento → Anclar → Avanzar |
| Enraíza-Te | lavender | Volver al cuerpo → Estabilidad → Fuerza → Integración |
| Elogio a Ti | rose | Despertar → Reconexión → Reprogramación → Consagración |

> Acento en `content.ts` → `accent: 'lavender' | 'rose'`. **No usar `'gold'`** — token eliminado.

### Links activos

- Tienda: https://payhip.com/ConLogicayAlma
- Comunidad WA: https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC
- WhatsApp directo Yube: https://wa.me/584243547179
- Instagram: @yube.karina
- TikTok: @yube.karina
- YouTube: @yube.karinag
- Email: yogaconlogicayalma@gmail.com
- Live: https://yla-mvp.vercel.app
- Dominio (pendiente DNS): yogaconlogicayalma.com

---

## 🚀 Roadmap resumido

```
Fase 0-B ← Sprint actual
  Sprint 1: Logo + foto Yube + video Hero + fotos testimonios
  Sprint 2: Precios en Shop + galería productos + StartHere.tsx
  Sprint 3: Resend conectado + dominio yogaconlogicayalma.com

Fase 0-C → Sanity CMS (landing live; /tienda y /programas pueden seguir en content.ts)
  Yube edita contenido sin tocar código
  ISR + webhook Vercel → actualización en ~30s

Fase 1 → PWA
  Dashboard espiritual, bitácora del alma, modo ritual

Fase 2 → Full web app
  Supabase auth + DB + Stripe membresías

Fase 3 → App nativa (React Native / Expo)

Fase 4 → Concept Store física (Turmero/Maracay)
```

---

## 🔑 Reglas de git / deploy

- Push directo a `main`. Sin PR workflow.
- **Siempre leer el archivo con `get_file_contents` antes de editar** — Cursor puede haber modificado algo entre sesiones.
- El `sha` es obligatorio en `create_or_update_file` para archivos existentes.
- Commits de múltiples archivos → usar `push_files` (atómico).
- Alberto hace `git pull` localmente tras cada push de Claude.

---

## 💬 Frases de la marca (copy autorizado)

> "Organizamos el bienestar, ritualizamos la estructura."
> "Conecta tu mente. Habita tu cuerpo. Expande tu esencia."
> "Donde la estructura sostiene el alma."
> "Planifica con el alma, fluye con propósito."
> "Yoga con intención, lógica y corazón."
> "El arte de volver a ti."
> "Diseño sagrado para tu vida diaria."
> "Cuando el alma guía y la mente acompaña."

**Tono:** cercano, motivador, espiritual sin ser dogmático. Nunca frío ni técnico en el copy visible.
**Sobre Yube:** es **Instructora** (no "Maestra"). Credencial oficial:
> *"Ingeniera industrial de profesión. Instructora de yoga con formación avanzada. Creadora de un método que nadie más enseña."*

---

## ⚠️ Checklist antes de cada commit

- [ ] ¿Se ve bien en 375px?
- [ ] ¿Cero strings hardcodeados en JSX?
- [ ] ¿Sin tokens legacy (`--gold`, `--purple`, hex viejos)?
- [ ] ¿TypeScript compila sin errores? (`yarn build`)
- [ ] ¿Tailwind v4 (no v3)?
- [ ] ¿Props con interfaces nombradas?
- [ ] ¿`alt` en todas las imágenes?
- [ ] ¿El copy suena como Yube?

---

## 🔧 Comandos frecuentes

```bash
yarn dev        # servidor local (Turbopack)
yarn build      # build producción — detecta errores TS
yarn lint       # ESLint
```

> WSL2: mantener el proyecto en el filesystem de Linux (`~/projects/`), no en `/mnt/c/`, para evitar problemas de hot reload.

---

*Skill mantenido por Alberto. Actualizar cada vez que haya cambios arquitectónicos mayores.*
*Sincronizar siempre con CLAUDE.md, GEMINI.md y ROADMAP.md en el repo.*
