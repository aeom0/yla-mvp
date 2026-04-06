# CLAUDE.md — Yoga con Lógica y Alma

> Guía de contexto para Claude Code. Lee este archivo antes de tocar cualquier línea de código.
> Última revisión: abril 2026 (Fase 0-C: Sanity en landing + Studio desplegado).

---

## 🧘‍♀️ Qué es este proyecto

**Yoga con Lógica y Alma** es la plataforma digital de Yube Karina, ingeniera industrial e instructora de yoga con formación avanzada (500h), creadora de un método que fusiona estructura analítica con práctica espiritual.

El producto actual es un **sitio web completo** que actúa como hub de captación, venta y comunidad. Fase previa a una PWA y eventual app nativa.

**Tagline:** *"Organizamos el bienestar, ritualizamos la estructura."*
**Público objetivo:** Mujeres conscientes y emprendedoras, mercado hispanohablante (Venezuela, España y LATAM).

---

## 🛠 Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15.4.8 (App Router) |
| UI | React 19.2.1 + Tailwind CSS v4 |
| Lenguaje | TypeScript (strict) |
| Iconos | Lucide React |
| Tipografía | Playfair Display + Lato + Dancing Script (`@fontsource`) |
| Gestor de paquetes | Yarn 4 (Corepack — `ENABLE_EXPERIMENTAL_COREPACK=1` en Vercel) |
| CMS (Fase 0-C) | Sanity — Studio https://yogaconlogicayalma.sanity.studio · landing `/` vía GROQ + ISR (`src/lib/sanity/`) · `content.ts` = fallback + tipos |
| Backend (Fase 2) | Supabase (`mwvgtxzvqhducjggycuu`) |
| Pagos (Fase 2) | Stripe |
| Tienda digital | Payhip — https://payhip.com/ConLogicayAlma |
| Email (Sprint 3) | Resend |
| Editor | VS Code + Cursor |
| Entorno dev | WSL2 en Windows 11 |
| Target device | Android (mobile-first) |
| Deploy | Vercel (`yogaconlogicayalma`) — auto-deploy desde `main` |

---

## 🎨 Sistema de diseño — Aurora Consciente

### Paleta de colores

```css
/* Variables CSS en src/app/globals.css */
--lavender-deep:  #7B5EA7;  /* CTA primario — Button variant=primary */
--lavender:       #B497D6;  /* espiritual, íconos, pills */
--rose:           #E8C4C4;  /* productos gratis, bordes suaves */
--rose-deep:      #C8928F;  /* acentos cálidos */
--sage:           #A8C5A0;  /* bienestar */
--violet-anchor:  #3D2865;  /* títulos display, footer oscuro */
--beige:          #F8F4F0;  /* fondo base claro */
--ink:            #2D2D2D;  /* texto principal */

/* Tokens semánticos (cambian con el tema) */
--accent:         #7B5EA7   /* light */ / #B497D6 /* dark */
```

> **⚠️ No usar tokens legacy:** `--gold*`, `--purple*`, ni hex `#D4AF37`, `#5B3A8E`, `#FAF7F2`.
> `Button primary` usa `var(--accent)`. En `content.ts`, acento de programas = `'lavender' | 'rose'` (no `'gold'`).

### Tipografía

- **Títulos / Display:** Playfair Display
- **Cuerpo / UI:** Lato
- **Mantras / Frases canalizadas:** Dancing Script

### Principios visuales

- Mobile-first siempre. Desktop es una mejora progresiva.
- Minimalismo funcional: menos es más.
- Animaciones sutiles (brillo, fade, latido) — nunca flashy.
- Dark mode: fondo `#1c1a22` + acento lavanda + texto claro.

---

## 📁 Arquitectura de carpetas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                      # Landing (orden de secciones)
│   ├── globals.css                   # Variables CSS + Tailwind base
│   ├── api/subscribe/route.ts        # POST email (Resend — Sprint 3)
│   ├── blog/page.tsx                 # Placeholder
│   ├── tests/page.tsx                # Placeholder
│   ├── programas/[slug]/page.tsx     # Ficha SSG por programa
│   ├── tienda/page.tsx               # Índice catálogo
│   ├── tienda/[slug]/page.tsx        # Ficha de producto
│   ├── membresia/page.tsx
│   └── faq/page.tsx
│
├── components/
│   ├── ui/                           # Button, Card, Section
│   ├── home/
│   │   ├── Hero.tsx                  ✅
│   │   ├── Philosophy.tsx            ✅  CTAs: YouTube, /tests, /blog
│   │   ├── Programs.tsx              ✅  → /programas/[slug]
│   │   ├── Testimonials.tsx          ✅  fotos pendientes
│   │   ├── About.tsx                 ✅  foto Yube pendiente
│   │   ├── Community.tsx             ✅
│   │   ├── Shop.tsx                  ✅  sin precios
│   │   ├── LeadMagnet.tsx            ✅
│   │   ├── SocialProofStrip.tsx      ✅
│   │   ├── FAQ.tsx                   ✅
│   │   └── Footer.tsx                ✅
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── BottomNav.tsx
│   └── theme/ThemeToggle.tsx
│
├── data/content.ts                   # ⭐ Fuente de verdad del copy
├── lib/, hooks/, types/
```

---

## 🧩 Convenciones de código

### Componentes

- Un componente por archivo. Nombre en PascalCase.
- `export default` para secciones. Named exports para átomos UI.
- No mezclar lógica con presentación.

```tsx
// ✅ Correcto
export default function Hero() {
  const { hero } = siteContent
  return <section>{hero.title}</section>
}
// ❌ String hardcodeado
return <section>El arte de volver a ti</section>
```

### TypeScript

- Strict mode. Sin `any` implícito.
- Interfaces en `src/types/index.ts`, nombradas (`HeroProps`, etc.)

### Contenido

- Todo el texto visible en `src/data/content.ts`. Nunca hardcodear strings en JSX.

### Tailwind CSS v4

- Utility classes directamente. Colores vía variables CSS en `globals.css`.
- No usar `tailwind.config.js` con sintaxis v3.

---

## 🌐 Rutas y secciones (estado actual)

| Sección / Ruta | Estado |
|---|---|
| `/` — Landing completa | ✅ Live |
| `/programas/[slug]` | ✅ SSG |
| `/tienda`, `/tienda/[slug]` | ✅ |
| `/membresia` | ✅ |
| `/faq` | ✅ |
| `/tests`, `/blog` | ✅ Placeholder |
| `/api/subscribe` | ✅ Sin ESP |

### Pendientes Sprint 1 (desbloqueadores: Yube entrega assets)
- [ ] Logo en Header (`public/logo.png`)
- [ ] Foto de Yube en About (`public/yube-about.jpg`)
- [ ] Video Hero (YouTube embed en `hero.youtubeVideoId`)
- [ ] Fotos testimonios (`public/testimonials/`)

### Pendientes Sprint 2
- [ ] Precios en Shop (`product.price` en `content.ts`)
- [ ] Galería previews de cuadernos
- [ ] Componente `StartHere.tsx` (entre Philosophy y Programs)

### Pendientes Sprint 3
- [ ] Conectar Resend a `/api/subscribe`
- [ ] DNS de `yogaconlogicayalma.com` → Vercel

---

## 🗂 Fase 0-C — Sanity CMS (activo en landing + Studio en nube)

Yube edita contenido en **Studio** sin tocar código. El **dataset** es la fuente para la home; `content.ts` sigue como **fallback** y tipos.

| Contenido | Schema |
|---|---|
| Textos Hero, banner/video | `hero` (singleton) |
| Productos tienda | `product` (collection) |
| Programas | `program` (collection) |
| Testimonios | `testimonial` (collection) |
| FAQ | `faqItem` (collection) |
| About | `about` (singleton) |
| Filosofía / pilares | `philosophy` (singleton) |
| Redes, footer, newsletter, comunidad | `siteConfig` (singleton) |
| Clases online | `classItem` (collection) |

**Flujo:** publicar en Studio → (webhook Sanity → `POST /api/revalidate`) → `revalidateTag` por tipo · además `revalidate: 60` en queries como respaldo.

**Operaciones:** migración `cd studio && yarn migrate:content` · deploy Studio `cd studio && yarn deploy --yes` (requiere `yarn sanity login`).

---

## 📦 Productos y contenido de referencia

### Programas (4 meses c/u)
- **Encuentra tu Centro** — Conectar → Autoreconocimiento → Anclar → Avanzar
- **Enraíza-Te** — Volver al cuerpo → Estabilidad → Fuerza → Integración
- **Elogio a Ti** — Despertar → Reconexión → Reprogramación → Consagración

### Clases online
- **Respira y Fluye** — restaurativo, pausado
- **Alma y Movimiento** — yoga suave
- **Clases Temáticas** — 2x mes

### Productos digitales (Payhip)
- Guía de posturas básicas *(gratis)*
- Camino al Merecimiento
- Mandalas de Abundancia
- Camino a la Abundancia

---

## 🚀 Roadmap

Detalle completo en **[ROADMAP.md](./ROADMAP.md)**.

```
Fase 0-B (Sprint actual) → Assets reales + precios + email
Fase 0-C               → Sanity CMS (landing + Studio live; rutas /tienda y /programas siguen en content.ts hasta siguiente iteración)
Fase 1                 → PWA: bitácora, ritual, dashboard espiritual
Fase 2                 → Supabase + Stripe
Fase 3                 → App nativa
Fase 4                 → Concept Store física
```

---

## ⚠️ Reglas críticas para Claude Code

1. **Leer antes de escribir.** Siempre `get_file_contents` antes de editar — Cursor puede haber cambiado el archivo.
2. **Mobile-first.** 375px es el viewport de referencia.
3. **Contenido en `content.ts`.** Cero strings hardcodeados en JSX.
4. **No instalar deps sin preguntar.**
5. **Tailwind v4.** Sin sintaxis v3.
6. **TypeScript strict.** Sin `as any`.
7. **Sin tokens legacy.** No `--gold`, no `--purple`, no hex del sistema viejo.
8. **Accesibilidad mínima.** Alt en imágenes, ARIA donde aplique.
9. **El tono de la marca es sagrado.** Cercano, espiritual sin ser dogmático.

---

## 🔗 Links del proyecto

- Live: https://yla-mvp.vercel.app
- Sanity Studio: https://yogaconlogicayalma.sanity.studio
- Repo: https://github.com/aeom0/yla-mvp
- Payhip: https://payhip.com/ConLogicayAlma
- WhatsApp directo: https://wa.me/584243547179
- Email: yogaconlogicayalma@gmail.com
- Supabase: `mwvgtxzvqhducjggycuu`
- Vercel project: `yogaconlogicayalma`
- Dominio (pendiente): yogaconlogicayalma.com

---

## 💬 Frases de la marca

> "Organizamos el bienestar, ritualizamos la estructura."
> "Conecta tu mente. Habita tu cuerpo. Expande tu esencia."
> "Donde la estructura sostiene el alma."
> "Planifica con el alma, fluye con propósito."
> "Yoga con intención, lógica y corazón."
> "El arte de volver a ti."

---

*Mantener alineado con ROADMAP.md y GEMINI.md. Es la guía técnica para sesiones de Claude Code.*
