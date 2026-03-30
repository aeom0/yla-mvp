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
Gold (acento DOMINANTE) → #E8D3A3  — botones, bordes, highlights
Gold profundo           → #C9A96E  — textos de acento, CTAs
Lavanda                 → #B497D6  — espiritual, complemento
Beige cálido            → #F6EBD9  — fondo base
Smoke                   → #DADADA  — texto secundario
Charcoal                → #333333  — texto principal
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
- Dark mode disponible: fondo morado profundo + texto dorado/blanco

---

## 📁 Estructura del proyecto

```
yla-mvp/
├── src/
│   ├── app/
│   │   ├── layout.tsx        ← estructura raíz, fuentes, metadata
│   │   ├── page.tsx          ← landing page principal
│   │   └── globals.css       ← variables de color y estilos base
│   │
│   ├── components/
│   │   ├── home/             ← secciones del landing
│   │   │   ├── Hero.tsx
│   │   │   ├── Philosophy.tsx
│   │   │   ├── Programs.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Community.tsx
│   │   │   ├── Shop.tsx
│   │   │   ├── FAQ.tsx
│   │   │   └── Footer.tsx
│   │   ├── ui/               ← componentes reutilizables (Button, Card, Section)
│   │   └── layout/           ← Header y navegación
│   │
│   └── data/
│       └── content.ts        ← ⭐ TODO el texto visible vive aquí
│
├── CLAUDE.md                 ← contexto técnico para Claude (desarrollador)
└── GEMINI.md                 ← este archivo (contexto para Gemini + Yube)
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

## 🌐 Secciones actuales del landing (todas implementadas ✅)

| Sección | Qué muestra |
|---------|------------|
| **Hero** | Tagline, título, descripción, botones CTA, estadísticas |
| **Philosophy** | Los 3 pilares del método (ciencia + lógica + práctica) |
| **Programs** | Los 3 programas de 4 meses: Encuentra tu Centro, Enraíza-Te, Elogio a Ti |
| **About** | Presentación de Yube Karina, credencial, cita |
| **Community** | Comunidad WhatsApp + formulario de newsletter |
| **Shop** | Productos digitales con enlace a Payhip |
| **FAQ** | Preguntas frecuentes con acordeón interactivo |
| **Footer** | Links, redes sociales, legal |

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

## 🚀 Roadmap del proyecto

```
Fase 0 ✅  Landing page (COMPLETA — live en Vercel)
           │
Fase 1     PWA (Progressive Web App)
           ├── Dashboard espiritual del usuario
           ├── Bitácora del alma (journaling guiado)
           ├── Modo Ritual (música + intención + respiración)
           ├── Calendario de clases y reservas
           └── Comunidad interna
           │
Fase 2     Full Web App
           ├── Registro y login de usuarias (Supabase)
           ├── Membresías y pagos (Stripe)
           └── Tienda integrada
           │
Fase 3     App nativa Android/iOS
           │
Fase 4     Concept Store física (Turmero/Maracay)
```

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

*Documento mantenido por Alberto. Actualizar cuando haya cambios en el stack, roadmap o productos.*
