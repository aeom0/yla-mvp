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
| Tipografía | Playfair Display + Lato (Google Fonts) |
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
// tokens de color — usar siempre estas variables
colors: {
  lavender:  '#B497D6',  // principal espiritual
  beige:     '#F6EBD9',  // fondo base cálido
  gold:      '#E8D3A3',  // acento dorado (abundancia) — color dominante en CTAs y detalles
  smoke:     '#DADADA',  // texto secundario
  charcoal:  '#333333',  // texto principal
}
```

> **Nota de diseño (v2):** El refresh visual de marzo 2026 consolidó el **gold** como acento principal en botones, borders y highlights. El lavanda se usa como complemento espiritual pero el dorado es el tono dominante de la marca.

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
├── app/                        # App Router de Next.js
│   ├── layout.tsx              # Layout raíz (fuentes, metadata, providers)
│   ├── page.tsx                # Landing page principal
│   └── globals.css             # Variables CSS + Tailwind base
│
├── components/
│   ├── ui/                     # Componentes atómicos reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   │
│   ├── home/                   # Secciones del landing (una por bloque visual)
│   │   ├── Hero.tsx
│   │   ├── Philosophy.tsx
│   │   ├── Programs.tsx
│   │   ├── About.tsx
│   │   ├── Community.tsx
│   │   ├── Shop.tsx
│   │   ├── FAQ.tsx
│   │   └── Footer.tsx
│   │
│   ├── layout/                 # Header y navegación
│   │   ├── Header.tsx
│   │   └── BottomNav.tsx
│   │
│   └── theme/                  # Toggle de tema
│       └── ThemeToggle.tsx
│
├── data/                       # Contenido centralizado (fuente de verdad)
│   └── content.ts              # Exporta todo el contenido como constantes TS
│
├── lib/                        # Utilidades y helpers
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/                      # Custom hooks de React
│
├── types/                      # Tipos e interfaces TypeScript
│   └── index.ts
│
└── styles/                     # Estilos globales adicionales si aplica
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

## 🌐 Secciones del landing (estado actual)

| Sección | Componente | Estado |
|---------|-----------|--------|
| Hero principal | `Hero.tsx` | ✅ Implementado |
| Filosofía del método | `Philosophy.tsx` | ✅ Implementado |
| Programas | `Programs.tsx` | ✅ Implementado |
| Sobre Yube | `About.tsx` | ✅ Implementado |
| Comunidad | `Community.tsx` | ✅ Implementado |
| Tienda / Productos | `Shop.tsx` | ✅ Implementado |
| FAQ | `FAQ.tsx` | ✅ Implementado |
| Footer | `Footer.tsx` | ✅ Implementado |

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

## 🚀 Roadmap del proyecto

```
Fase 0 (actual) ── Landing page Next.js
       │
Fase 1 ────────── PWA: dashboard espiritual, bitácora del alma,
       │           modo ritual, rituales lunares, comunidad
       │
Fase 2 ────────── Full web app: membresías, pagos Stripe,
       │           Supabase auth + DB, tienda integrada
       │
Fase 3 ────────── App nativa (tras validación en web)
       │
Fase 4 ────────── Concept Store física (Turmero/Maracay)
                   con integración QR ↔ app
```

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

*Este archivo debe mantenerse actualizado conforme el proyecto evoluciona. Es la fuente de verdad para cualquier sesión de Claude Code.*
