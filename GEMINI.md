# GEMINI.md — Contexto del Proyecto para Yube + Gemini AI

> Este archivo es el brief técnico del proyecto **Yoga con Lógica y Alma**.
> Yube: léelo con Gemini al inicio de cada sesión de trabajo para que tenga contexto completo.
> Alberto (desarrollador) implementa todo lo que planifiquen juntas.
> Última revisión: abril 2026.

---

## 🧘 ¿Qué es este proyecto?

**Yoga con Lógica y Alma** es la plataforma digital de **Yube Karina** — ingeniera industrial e instructora de yoga con formación avanzada (500h) — creadora de un método propio que fusiona pensamiento analítico con práctica espiritual.

### La web como paraguas digital

El sitio web (`yogaconlogicayalma.com`) actúa como **hub central** que conecta todos los canales de la marca:

| Canal | Estado | Detalle |
|-------|--------|---------|
| 🌐 Web | ✅ Live | `yla-mvp.vercel.app` (dominio propio próximamente) |
| 📺 YouTube | ✅ Activo | @yube.karinag |
| 💬 WhatsApp — Almas en Armonía | ✅ Activo | Comunidad activa |
| 🎵 TikTok | ✅ Activo | @yube.karina |
| 📸 Instagram | ✅ Activo | @yube.karina |
| 🛍️ Tienda digital | ✅ Activo | Payhip — https://payhip.com/ConLogicayAlma |

**Dominio:** `yogaconlogicayalma.com` (a conectar — Sprint 3)

---

## 👥 Roles del equipo

| Rol | Persona | Herramienta |
|-----|---------|-------------|
| Creadora de contenido y marca | **Yube Karina** | Gemini AI |
| Desarrollador técnico | **Alberto** | Claude AI + VS Code / Cursor |

**Flujo de trabajo:**
1. Yube define qué quiere (con Gemini)
2. Gemini traduce la idea al lenguaje del stack técnico
3. Alberto implementa en el código con Claude
4. Se sube al repo → Vercel despliega automáticamente

---

## 🛠 Stack tecnológico (no modificar sin hablar con Alberto)

| Capa | Tecnología | Versión |
|------|-----------|--------|
| Framework | Next.js App Router | 15.4.8 |
| UI Library | React | 19.2.1 |
| Estilos | Tailwind CSS | v4 |
| Lenguaje | TypeScript | strict mode |
| Tipografía | Playfair Display + Lato + Dancing Script | via @fontsource |
| Hosting | Vercel | auto-deploy desde GitHub |
| CMS (próximo) | Sanity Studio | Fase 0-C |
| Base de datos | Supabase | Fase 2 |
| Pagos | Stripe | Fase 2 |
| Email | Resend | Sprint 3 |
| Tienda digital | Payhip | Activo |
| Repo | GitHub | `github.com/aeom0/yla-mvp` |

---

## 🎨 Sistema de diseño de la marca — Aurora Consciente

### Paleta de colores

```
Acento / CTA (primario)  → #7B5EA7  — botón principal, borders activos
Lavanda espiritual       → #B497D6  — íconos, pills, acento suave
Rosa cuarzo              → #E8C4C4  — productos gratis, bordes suaves
Rosa profundo            → #C8928F  — acentos cálidos
Sage bienestar           → #A8C5A0
Violeta ancla            → #3D2865  — títulos display, footer oscuro
Fondo base               → #F8F4F0  — fondo claro
Texto                    → #2D2D2D
```

### Tipografía

```
Playfair Display → títulos y encabezados (elegante, femenino)
Lato             → texto de cuerpo, UI, botones (limpio, legible)
Dancing Script   → mantras, frases inspiradoras, citas canalizadas
```

### Principios visuales

- **Mobile-first siempre** — 375px es la pantalla de referencia
- Minimalismo funcional — menos es más
- Animaciones sutiles (brillo, fade, latido) — nunca llamativo
- Se siente como ritual digital, no como app de gimnasio
- Dark mode disponible: fondo morado profundo + texto claro

---

## 📁 Estructura del proyecto

```
yla-mvp/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx              ← landing (orden de secciones)
│   │   ├── globals.css
│   │   ├── api/subscribe/route.ts
│   │   ├── blog/page.tsx
│   │   ├── tests/page.tsx
│   │   ├── programas/[slug]/page.tsx
│   │   ├── tienda/page.tsx
│   │   ├── tienda/[slug]/page.tsx
│   │   ├── membresia/page.tsx
│   │   └── faq/page.tsx
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero, Philosophy, Programs, Testimonials,
│   │   │   │   About, Community, Shop, LeadMagnet,
│   │   │   │   SocialProofStrip, FAQ, Footer
│   │   ├── ui/ , layout/ , theme/
│   └── data/
│       └── content.ts            ← ⭐ TODO el texto visible vive aquí
├── CLAUDE.md
├── GEMINI.md
└── ROADMAP.md
```

### ⭐ Regla clave: `content.ts` es la fuente de verdad

Todo el texto que aparece en la web vive en `src/data/content.ts`. Cuando Yube quiera cambiar un texto, Gemini debe indicar exactamente **qué campo de `content.ts` modificar** y con qué valor.

Ejemplo:
```
Yube quiere cambiar el tagline del Hero.
Gemini indica: En content.ts, campo hero.tagline, cambiar a "El arte de vivir con intención"
Alberto lo actualiza en el código.
```

> **Próximamente (Fase 0-C):** Se integrará Sanity CMS para que Yube pueda editar
> estos contenidos directamente desde una interfaz visual, sin necesitar a Alberto.

---

## 🌐 Qué incluye la web ahora

| Sección / ruta | Qué muestra |
|----------------|------------|
| **Hero** | Tagline, título, descripción del método, 2 CTAs, estadísticas |
| **Philosophy** | Pilares Cuerpo / Mente / Alma; un CTA por card (YouTube, `/tests`, `/blog`) |
| **Programs** | Tres programas con enlace a ficha `/programas/[slug]`; bloque clases personalizadas |
| **`/programas/[slug]`** | Detalle completo: etapas, para quién, qué incluye, precio, CTA WhatsApp |
| **Testimonios** | Tarjetas con citas de alumnas (fotos reales próximamente) |
| **About** | Bio de Yube; video YouTube opcional |
| **Community** | Grid hacia IG, WhatsApp, newsletter |
| **Shop** | Productos y enlaces a Payhip (precios próximamente) |
| **Lead magnet** | Formulario email → clase gratis |
| **Social Proof Strip** | Prueba social rápida |
| **FAQ** | Acordeón de preguntas frecuentes |
| **Footer** | Funnel, legal, redes sociales |
| **`/membresia`** | Comparación de planes |
| **`/faq`** | FAQ dedicada |
| **`/tienda`, `/tienda/[slug]`** | Catálogo y ficha de producto |
| **`/tests`, `/blog`** | Placeholders (próximamente) |

---

## 📦 Productos activos

### Programas de transformación (4 meses c/u)

| Programa | Etapas |
|----------|--------|
| **Encuentra tu Centro** | Conectar → Autoreconocimiento → Anclar → Avanzar |
| **Enraíza-Te** | Volver al cuerpo → Estabilidad → Fuerza → Integración |
| **Elogio a Ti** | Despertar → Reconexión → Reprogramación → Consagración |

Cada programa incluye: PDFs interactivos, audios guiados, videos cortos, seguimiento por Zoom y WhatsApp.

### Clases online

| Clase | Descripción | Frecuencia |
|-------|-------------|------------|
| Respira y Fluye | Ritmo pausado, restaurativo | Semanal |
| Alma y Movimiento | Yoga suave y tranquilo | 2x semana |
| Clases Temáticas | Según energía del mes | 2x mes |

Planes: **Esencial** (4 clases/mes) · **Consciente** (8 clases/mes)

### Tienda digital (Payhip)

- Guía de posturas básicas *(gratis)*
- Camino al Merecimiento *(cuaderno digital)*
- Mandalas de Abundancia *(cuaderno digital)*
- Camino a la Abundancia *(cuaderno digital)*

### Comunidad

- **Almas en Armonía** — grupo de WhatsApp activo

---

## 🗂 Próximas fases

La versión detallada está en **`ROADMAP.md`**.

| Fase | Qué viene |
|------|----------|
| 0-B Sprint 1 | Logo + foto Yube + video Hero + fotos testimonios |
| 0-B Sprint 2 | Precios en tienda + galería previews + sección "Empieza aquí" |
| 0-B Sprint 3 | Email Resend + dominio propio |
| **0-C** | **Sanity CMS — Yube edita sin tocar código** |
| 1 | PWA: bitácora del alma, modo ritual, dashboard espiritual |
| 2 | Membresías con Supabase + Stripe |
| 3 | App nativa |

---

## 💬 Voz y tono de la marca

**✅ Así SÍ:**
- Cercano, cálido, como hablar con una amiga que te guía
- Espiritual sin ser dogmático — no impone creencias
- Motivador y empoderador — especialmente hacia mujeres
- Combina lo analítico con lo emocional naturalmente
- Usa "nosotras" cuando habla de la comunidad

**❌ Así NO:**
- Frío o corporativo
- Técnico o clínico
- Agresivo o de venta dura
- Genérico ("el mejor método del mundo")

### Frases clave de la marca:

> "Organizamos el bienestar, ritualizamos la estructura."
> "Conecta tu mente. Habita tu cuerpo. Expande tu esencia."
> "Donde la estructura sostiene el alma."
> "El arte de volver a ti."
> "Yoga con intención, lógica y corazón."
> "Planifica con el alma, fluye con propósito."

### Sobre el título de Yube

⚠️ Yube es **Instructora** de yoga (no "Maestra"). Esta distinción es importante y debe respetarse siempre.

Credencial oficial:
> *"Ingeniera industrial de profesión. Instructora de yoga con formación avanzada. Creadora de un método que nadie más enseña."*

---

## 🤝 Cómo trabajar con este stack

### Cuando Yube quiera cambiar un texto:

```
Yube: "Quiero cambiar la descripción del programa Enraíza-Te"
Gemini: "En src/data/content.ts, dentro de programs.items[1].description,
         cambiar a: [nuevo texto]"
Alberto actualiza content.ts → commit → Vercel despliega automático.
```

### Cuando Yube quiera agregar un producto a la tienda:

```
Agregar en shop.products dentro de content.ts:
{
  id: "nombre-del-producto",
  category: "cuaderno" | "audio" | "video" | "guia",
  title: "Nombre del producto",
  intention: "Frase espiritual del producto",
  badge: "Nuevo" | null,
  isFree: false,
  price: "$12"
}
```

### Cuando Yube quiera agregar una nueva sección:

```
Yube le dice a Gemini: "Quiero una sección de rituales lunares"
Gemini responde indicando:
  1. Datos a agregar en content.ts
  2. Nombre del componente nuevo y su ubicación
  3. Dónde insertarlo en page.tsx
Alberto implementa con Claude.
```

> **Con Sanity CMS (Fase 0-C):** Yube podrá hacer muchos de estos cambios
> directamente desde Sanity Studio, sin necesitar a Alberto para el contenido.

---

## 🔗 Links útiles

- **Web live:** https://yla-mvp.vercel.app
- **Dominio propio (próximamente):** yogaconlogicayalma.com
- **Tienda Payhip:** https://payhip.com/ConLogicayAlma
- **WhatsApp directo:** https://wa.me/584243547179
- **Comunidad WhatsApp:** https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC
- **Instagram:** @yube.karina
- **TikTok:** @yube.karina
- **YouTube:** @yube.karinag
- **Email:** yogaconlogicayalma@gmail.com
- **Repositorio:** https://github.com/aeom0/yla-mvp
- **Supabase (Fase 2):** `mwvgtxzvqhducjggycuu`

---

*Documento mantenido por Alberto. Mantener alineado con `ROADMAP.md` y `CLAUDE.md`.*
