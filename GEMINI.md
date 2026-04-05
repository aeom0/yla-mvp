# GEMINI.md — Contexto del Proyecto para Yube + Gemini AI

> Este archivo es el brief técnico del proyecto **Yoga con Lógica y Alma**.
> Yube: léelo con Gemini al inicio de cada sesión de trabajo para que tenga contexto completo.
> Alberto (desarrollador) implementa todo lo que planifiquen juntas.

---

## 🧘 ¿Qué es este proyecto?

**Yoga con Lógica y Alma** es la plataforma digital de **Yube Karina** — ingeniera industrial y instructora de yoga con formación avanzada — creadora de un método propio que fusiona pensamiento analítico con práctica espiritual.

### La web como paraguas digital

El sitio web (`yogaconlogicayalma.com`) actúa como **hub central** que conecta todos los canales de la marca:

| Canal | Estado | Detalle |
|-------|--------|---------|
| 🌐 Web / Tienda online | ✅ Live | `yogaconlogicayalma.vercel.app` (dominio propio próximamente) |
| 📺 YouTube | ✅ Activo | Canal de clases y contenido |
| 💬 WhatsApp — Almas en Armonía | ✅ Activo | 64 participantes |
| 🎵 TikTok | ✅ Activo | 182 seguidores |
| 📸 Instagram | ✅ Activo | 2,601 seguidores |
| 🛍️ Tienda digital | ✅ Activo | Payhip — https://payhip.com/ConLogicayAlma |

**Dominio:** `yogaconlogicayalma.com` (a conectar próximamente)

---

## 👥 Roles del equipo

| Rol | Persona | Herramienta |
|-----|---------|-------------|
| Creadora de contenido y marca | **Yube Karina** | Gemini AI |
| Desarrollador técnico | **Alberto** | Claude AI + VS Code |

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
| Iconos | Lucide React | ^0.539 |
| Tipografía | Playfair Display + Lato + Dancing Script | via @fontsource |
| Hosting | Vercel | auto-deploy desde GitHub |
| Base de datos | Supabase | Fase 2 (próximamente) |
| Pagos | Stripe | Fase 2 (próximamente) |
| Tienda digital | Payhip | Activo |
| Repo | GitHub | `github.com/aeom0/yla-mvp` |

---

## 🎨 Sistema de diseño de la marca

### Paleta de colores

```
Gold (CTA primario)     → #E8D3A3  — botón principal (texto oscuro)
Gold profundo           → #C9A96E  — bordes, acentos
Lavanda                 → #B497D6  — espiritual, complemento
Beige cálido            → #F6EBD9  — fondo base
Smoke                   → #DADADA  — texto secundario
Charcoal                → #333333  — texto principal
Morado marca (brief)    → #5B3A8E  — bloques premium / identidad (variables CSS)
Lila suave (brief)      → #C6B7E2  — fondos tipo lead magnet
```

Los valores viven en `src/app/globals.css`. El componente `Button` primario sigue en **dorado**; bloques como Philosophy y las cards de programas usan **morado de marca** (`#5B3A8E`) para CTAs sólidos en esas secciones.

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
- Dark mode disponible: fondo morado profundo + texto dorado/blanco

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
│   │   ├── blog/page.tsx , tests/page.tsx
│   │   ├── programas/[slug]/page.tsx
│   │   ├── tienda/page.tsx , tienda/[slug]/page.tsx
│   │   ├── membresia/page.tsx , faq/page.tsx
│   ├── components/
│   │   ├── home/
│   │   │   ├── Hero, Philosophy, Programs, Testimonials,
│   │   │   │   About, Community, Shop, LeadMagnet, FAQ, Footer
│   │   ├── ui/ , layout/ , theme/
│   └── data/
│       └── content.ts            ← ⭐ TODO el texto visible vive aquí
├── README.md
├── ROADMAP.md                  ← fases y backlog detallados
├── CLAUDE.md
└── GEMINI.md
```

### ⭐ Regla clave: `content.ts` es la fuente de verdad

Todo el texto que aparece en la web (títulos, descripciones, botones, preguntas frecuentes, etc.) vive en `src/data/content.ts`. Cuando Yube quiera cambiar un texto, Gemini debe indicar exactamente **qué campo de `content.ts` modificar** y con qué valor.

Ejemplo:
```
Yube quiere cambiar el tagline del Hero.
Gemini indica: En content.ts, campo hero.tagline, cambiar a "El arte de vivir con intención"
Alberto lo actualiza en el código.
```

---

## 🌐 Qué incluye la web ahora

| Sección / ruta | Qué muestra |
|----------------|------------|
| **Hero** | Tagline, título, líneas beneficio + método + acción, 2 CTAs, estadísticas |
| **Philosophy** | Pilares Cuerpo / Mente / Alma; un CTA por card (YouTube canal YLA, página `/tests`, página `/blog`) |
| **Programs** | Tres programas con enlace a ficha `/programas/[slug]`; descripción bajo el botón; bloque clases personalizadas |
| **`/programas/...`** | Detalle: etapas, para quién, qué incluye, precio, WhatsApp (`content.ts` → `detail`) |
| **`/tests` · `/blog`** | Páginas placeholder hasta lanzar contenido |
| **`/tienda`** | Catálogo y enlaces a fichas `/tienda/[slug]` |
| **Testimonios** | Tarjetas con citas (avanzar a fotos reales con permiso) |
| **About** | Bio extendida; video YouTube opcional (`welcomeVideoYoutubeId` en `content.ts`) |
| **Community** | «Comunidad en movimiento», grid hacia IG, WhatsApp, newsletter cartas |
| **Shop** | Productos y CTAs según `content.ts`, enlaces Payhip |
| **Lead magnet** | Formulario email → `/api/subscribe` (conectar lista de correo después) |
| **FAQ** | Acordeón |
| **Footer** | Enlaces de funnel, confianza, legal, redes |
| **`/membresia`** | Comparación planes; destacado «Cartas para habitarte» |
| **`/faq`** | Preguntas frecuentes (página dedicada) |

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

- **Almas en Armonía** — grupo de WhatsApp activo (64 participantes)

---

## 🚀 Roadmap

La versión detallada (pendientes de Fase 0, PWA, app, tienda física, deuda técnica) está en **`ROADMAP.md`**. Usalo como referencia única cuando planifiques con Yube.

---

## 💬 Voz y tono de la marca

Cuando Gemini escriba copy, textos o descripciones para la web, debe sonar así:

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

### Frases clave de la marca (usar y respetar):

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

### Cuando Yube quiera agregar o cambiar contenido:

```
Yube le dice a Gemini: "Quiero agregar una nueva sección de testimonios"
Gemini responde indicando:
  1. Qué agregar en content.ts (estructura de datos)
  2. Qué nuevo componente crear (nombre, props, ubicación)
  3. Dónde insertarlo en page.tsx
Alberto implementa con Claude.
```

### Cuando Yube quiera cambiar un texto:

```
Yube: "Quiero cambiar la descripción del programa Enraíza-Te"
Gemini: "En src/data/content.ts, dentro de programs.items[1].description,
         cambiar a: [nuevo texto]"
Alberto actualiza content.ts → commit → Vercel despliega automático.
```

### Cuando Yube quiera agregar un producto nuevo a la tienda:

```
Gemini indica el objeto a agregar en shop.products dentro de content.ts:
{
  id: "nombre-del-producto",
  category: "cuaderno" | "audio" | "video" | "guia",
  title: "Nombre del producto",
  intention: "Frase espiritual del producto",
  badge: "Nuevo" | null,
  isFree: false
}
```

---

## 🔗 Links útiles

- **Web live:** https://yla-mvp.vercel.app (dominio propio: yogaconlogicayalma.com — próximamente)
- **Tienda Payhip:** https://payhip.com/ConLogicayAlma
- **Comunidad WhatsApp:** https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC
- **Repositorio:** https://github.com/aeom0/yla-mvp
- **Supabase (Fase 2):** proyecto `yogaconlogicayalma`

---

*Documento mantenido por Alberto. Mantener alineado con `ROADMAP.md`, `CLAUDE.md` y el código.*

