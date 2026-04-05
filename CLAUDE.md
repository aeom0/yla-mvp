# CLAUDE.md — Yoga con Lógica y Alma

> Guía de contexto para Claude Code. Lee este archivo antes de tocar cualquier línea de código.

---

## 🧘‍♀️ Qué es este proyecto

**Yoga con Lógica y Alma** es la plataforma digital de Yube Karina, ingeniera industrial y yogui, creadora de un método que fusiona estructura analítica con práctica espiritual.

El producto actual en desarrollo es un **landing page / sitio web** que servirá como punto de entrada al ecosistema digital de la marca. Es la fase previa a una PWA y eventual app móvil nativa.

**Tagline:** *"Organizamos el bienestar, ritualizamos la estructura."*  
**Público objetivo:** Mujeres conscientes y emprendedoras, mercado hispanohablante (Venezuela, España y LATAM).

---

## 🛠 Stack tecnológico

| Capa | Tecnología |
|------|-----------|
| Framework | Next.js 15 (App Router) |
| UI | React 19 + Tailwind CSS v4 |
| Lenguaje | TypeScript (strict) |
| Iconos | Lucide React |
| Tipografía | Playfair Display + Lato (`@fontsource`) |
| CMS / Contenido | Notion (exportado como Markdown) |
| Backend (futuro) | Supabase |
| Pagos (futuro) | Stripe |
| Tienda digital | Payhip — https://payhip.com/ConLogicayAlma |
| Editor | VS Code + Claude Code |
| Entorno dev | WSL2 en Windows 11 |
| Target device | Android (mobile-first) |

---

## 🎨 Sistema de diseño

### Paleta de colores

```ts
// tokens de color — usar siempre estas variables (ver `src/app/globals.css`)
colors: {
  lavender:      '#B497D6',  // espiritual, complemento
  beige:         '#F6EBD9',  // fondo base cálido
  gold:          '#E8D3A3',  // acento dominante en CTAs (botón primario)
  goldDeep:      '#c9a96e',  // bordes / acento fuerte
  smoke:         '#DADADA',  // texto secundario
  charcoal/ink:  '#333333',  // texto principal
  // Referencia brief marca (Contexto YLA) — fondos y bloques premium:
  purpleBrand:   '#5B3A8E',  // --purple-brand
  lilaDoc:       '#C6B7E2',  // --lila-doc
  goldDoc:       '#D4AF37',  // --gold-doc (acento editorial)
}
```

> **Nota de diseño:** El **dorado** es el color de los CTAs primarios (`Button` variante `primary`). Lavanda y morado de marca se usan en jerarquía visual, pilares y secciones premium; valores exactos en `:root` y `.dark` de `globals.css`.

### Tipografía

- **Títulos / Display:** Playfair Display (elegante, femenino)
- **Cuerpo / UI:** Lato (limpia, legible)
- **Mantras / Frases canalizadas:** Dancing Script (manuscrito)

### Principios visuales

- Mobile-first siempre. Desktop es una mejora progresiva.
- Minimalismo funcional: menos es más.
- Se siente como un ritual digital, no como un gimnasio.
- Animaciones sutiles (brillo, fade, latido) — nunca flashy.
- Dark mode: fondo morado profundo + texto dorado/blanco.

---

## 📁 Arquitectura de carpetas

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                 # Landing (orden de secciones en un solo archivo)
│   ├── globals.css
│   ├── api/subscribe/route.ts  # POST email (MVP; conectar ESP después)
│   ├── blog/page.tsx           # Placeholder blog (próximamente)
│   ├── tests/page.tsx          # Placeholder tests (próximamente)
│   ├── programas/[slug]/page.tsx  # Ficha de cada programa
│   ├── tienda/page.tsx         # Índice tienda
│   ├── tienda/[slug]/page.tsx  # Ficha producto Payhip
│   ├── membresia/page.tsx      # Página membresía + comparación de planes
│   └── faq/page.tsx            # FAQ standalone
│
├── components/
│   ├── ui/                     # Button, Card, Section
│   ├── home/
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx      # Pilares + bloque copy Lógica/Alma
│   │   ├── Programs.tsx        # Tarjetas programa + bloque clases personalizadas
│   │   ├── Testimonials.tsx
│   │   ├── About.tsx
│   │   ├── Community.tsx       # Grid IG, WhatsApp, newsletter
│   │   ├── Shop.tsx
│   │   ├── LeadMagnet.tsx      # Lead magnet → /api/subscribe
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   ├── layout/
│   │   ├── Header.tsx          # Nav + CTA «Empezar aquí»
│   │   └── BottomNav.tsx
│   └── theme/ThemeToggle.tsx
│
├── data/content.ts             # Fuente de verdad del copy
├── lib/, hooks/, types/
└── styles/                     # si aplica
```

---

## 🧩 Convenciones de código

### Componentes

- Un componente por archivo. Nombre en PascalCase.
- Siempre usar `export default` para componentes de sección.
- Named exports para componentes UI atómicos.
- **No mezclar lógica con presentación.** La UI renderiza, los hooks y utils piensan.

```tsx
// ✅ Correcto
export default function Hero({ data }: HeroProps) {
  return <section>...</section>
}

// ❌ Incorrecto — lógica de negocio dentro del componente visual
export default function Hero() {
  const data = fetch('/api/hero') // no acá
  ...
}
```

### TypeScript

- Strict mode activado. Sin `any` implícito.
- Definir interfaces en `src/types/index.ts`.
- Props siempre tipadas con interfaces nombradas (`HeroProps`, `ProgramCardProps`, etc.)

### Contenido

- Todo el texto visible de la UI vive en `src/data/content.ts`.
- Los componentes consumen el contenido como props o imports — nunca hardcodean strings.
- Esto facilita i18n futuro y edición sin tocar componentes.

### Tailwind CSS v4

- Usar utility classes directamente. No crear clases CSS personalizadas salvo necesidad real.
- Los colores de marca están definidos como variables CSS en `globals.css`.
- Respetar el orden: layout → spacing → typography → color → effects.

---

## 🌐 Landing y rutas (estado actual)

| Bloque / ruta | Componente o ruta | Notas |
|---------------|---------------------|--------|
| Hero | `Hero.tsx` | Fórmula beneficio + método + acción; CTAs a guía gratis y programas |
| Filosofía | `Philosophy.tsx` | Pilares Cuerpo / Mente / Alma; CTA por pilar (YouTube `@yogaconlogicayalma`, `/tests`, `/blog`) |
| Programas | `Programs.tsx` | Tres programas → `/programas/[id]`; `programs.items[].detail` en `content.ts`; bloque clases personalizadas |
| Ficha programa | `app/programas/[slug]/page.tsx` | Etapas, para quién, incluye, precio, CTA WhatsApp |
| Tests (placeholder) | `app/tests/page.tsx` | `siteContent.testsPage` |
| Blog (placeholder) | `app/blog/page.tsx` | `siteContent.blogPage` |
| Testimonios | `Testimonials.tsx` | Tarjetas con iniciales (sustituir por fotos cuando haya) |
| Sobre Yube | `About.tsx` | Bio extendida; video YouTube opcional (`about.welcomeVideoYoutubeId`) |
| Comunidad | `Community.tsx` | «Comunidad en movimiento», grid IG, WhatsApp, cartas (newsletter) |
| Tienda | `Shop.tsx` | Enlaces Payhip; CTAs desde `content.ts` |
| Lead magnet | `LeadMagnet.tsx` | `#guia-gratis` → `POST /api/subscribe` |
| FAQ | `FAQ.tsx` | |
| Footer | `Footer.tsx` | Enlaces funnel + confianza (pagos / garantía copy) |
| Membresía | `app/membresia/page.tsx` | Tabla de planes; diferencial «Cartas para habitarte» |
| Tienda | `app/tienda/page.tsx`, `app/tienda/[slug]/page.tsx` | Catálogo y ficha desde `content.ts` → Payhip |

---

## 📦 Productos y contenido de referencia

### Programas principales (4 meses c/u)
- **Encuentra tu Centro** — 4 etapas: Conectar → Autoreconocimiento → Anclar → Avanzar
- **Enraíza-Te** — 4 etapas: Volver al cuerpo → Estabilidad → Fuerza → Integración
- **Elogio a Ti** — 4 etapas: Despertar → Reconexión → Reprogramación → Consagración

### Clases online
- **Respira y Fluye** — ritmo pausado, restaurativo
- **Alma y Movimiento** — yoga suave y tranquilo
- **Clases Temáticas** — 2 veces al mes
- Precios: Plan Esencial 4 clases/mes · Plan Consciente 8 clases/mes

### Productos digitales (Payhip)
- Cuadernos: *Camino al Merecimiento*, *Mandalas de Abundancia*, *Camino a la Abundancia*
- Guía de posturas básicas (descargable gratis)

### Comunidad
- **Almas en Armonía** — comunidad de WhatsApp activa

---

## 🚀 Roadmap

El detalle de fases, pendientes inmediatos y deuda técnica está en **[ROADMAP.md](./ROADMAP.md)** (fuente única para planificación).

---

## ⚠️ Reglas críticas para Claude Code

1. **Mobile-first siempre.** Si un componente no se ve bien en 375px, no está listo.
2. **Contenido separado del componente.** Ningún string de UI hardcodeado dentro de JSX.
3. **Un componente = una responsabilidad.** Si crece demasiado, dividir.
4. **No instalar dependencias sin preguntar.** El stack está definido y se respeta.
5. **Tailwind v4.** La sintaxis de configuración cambió respecto a v3 — no usar `tailwind.config.js` con `theme.extend` de la forma antigua.
6. **TypeScript strict.** Tipado explícito en todo. Sin `as any` salvo caso extremo documentado.
7. **Accesibilidad mínima.** Alt en imágenes, roles ARIA donde aplique, contraste de colores respetado.
8. **El tono de la marca es sagrado.** Cualquier texto generado debe sentirse como Yube lo diría: cercano, motivador, espiritual sin ser dogmático.

---

## 🔗 Links útiles del proyecto

- Tienda Payhip: https://payhip.com/ConLogicayAlma
- Comunidad WhatsApp: https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC
- Referencia de diseño: xualanyoga.com

---

## 💬 Frases de la marca (para usar en UI/copy)

> "Organizamos el bienestar, ritualizamos la estructura."  
> "Conecta tu mente. Habita tu cuerpo. Expande tu esencia."  
> "Donde la estructura sostiene el alma."  
> "Planifica con el alma, fluye con propósito."  
> "Yoga con intención, lógica y corazón."  
> "El arte de volver a ti."

---

*Este archivo debe mantenerse alineado con el código y con `ROADMAP.md`. Es la guía técnica para sesiones de asistentes de código.*
