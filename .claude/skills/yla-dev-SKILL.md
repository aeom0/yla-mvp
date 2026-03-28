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
> Es la fuente de verdad. El CLAUDE.md del repo la complementa con detalles de implementación.

---

## 🧘 Contexto del proyecto

**Yoga con Lógica y Alma** es la plataforma digital de **Yube Karina** (ingeniera industrial + yogui).
El método fusiona estructura analítica con práctica espiritual. El asesor técnico es **Alberto**.

**Fase actual:** Landing page 100% implementada. Próximo paso: PWA (Fase 1).

**Tagline:** *"Organizamos el bienestar, ritualizamos la estructura."*  
**Público:** Mujeres conscientes y emprendedoras, mercado hispanohablante.

---

## 🛠 Stack tecnológico (no negociable)

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Framework | Next.js 15 (App Router) | Sin Pages Router |
| UI | React 19 + Tailwind CSS v4 | v4, no v3 |
| Lenguaje | TypeScript strict | Sin `any` implícito |
| Iconos | Lucide React | Ya instalado |
| Tipografía | Playfair Display + Lato | Via @fontsource |
| Backend | Supabase | Fase 2 |
| Pagos | Stripe | Fase 2 |
| Tienda | Payhip | Activo ya |
| Entorno | WSL2 · Windows 11 · VS Code | Android = target primario |

**⚠️ No instalar nuevas dependencias sin confirmar con Alberto.**

---

## 🎨 Sistema de diseño

### Tokens de color (variables CSS en globals.css)

```css
--lavender: #B497D6;  /* espiritual, complemento */
--beige:    #F6EBD9;  /* fondo base cálido */
--gold:     #E8D3A3;  /* ACENTO DOMINANTE — CTAs, borders, highlights */
--smoke:    #DADADA;  /* texto secundario */
--charcoal: #333333;  /* texto principal */
```

> **Gold es el rey.** El refresh visual de marzo 2026 consolidó `#E8D3A3` como color dominante
> en botones, borders y highlights. Lavanda = espiritual pero secundario.

### Tailwind v4 en clases

```tsx
// Usa las clases semánticas del tailwind.config.ts:
className="bg-beige text-ink border-gold"
className="text-lavender bg-card"
// NO usar hex directamente en className
```

### Tipografía

```tsx
// Títulos / Display
className="font-playfair"  // Playfair Display

// Cuerpo / UI  
className="font-lato"      // Lato

// Mantras / frases espirituales
className="font-dancing"   // Dancing Script
```

### Principios visuales irrompibles

- **Mobile-first siempre.** 375px es el viewport de referencia. Desktop = mejora progresiva.
- Minimalismo funcional. Menos es más.
- Animaciones sutiles: brillo, fade, latido. **Nunca flashy.**
- Dark mode: fondo morado profundo + texto dorado/blanco.
- Se siente como ritual digital, no como app de gimnasio.

---

## 📁 Arquitectura de carpetas

```
src/
├── app/
│   ├── layout.tsx          ← fuentes, metadata, ThemeProvider
│   ├── page.tsx            ← landing (importa secciones)
│   └── globals.css         ← variables CSS + Tailwind base
│
├── components/
│   ├── ui/                 ← átomos reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   └── Section.tsx
│   │
│   ├── home/               ← secciones del landing
│   │   ├── Hero.tsx        ✅
│   │   ├── Philosophy.tsx  ✅
│   │   ├── Programs.tsx    ✅
│   │   ├── About.tsx       ✅
│   │   ├── Community.tsx   ✅
│   │   ├── Shop.tsx        ✅
│   │   ├── FAQ.tsx         ✅
│   │   └── Footer.tsx      ✅
│   │
│   ├── layout/
│   │   ├── Header.tsx
│   │   └── BottomNav.tsx
│   │
│   └── theme/
│       └── ThemeToggle.tsx
│
├── data/
│   └── content.ts          ← FUENTE DE VERDAD del contenido
│
├── lib/
│   ├── utils.ts
│   └── constants.ts
│
├── hooks/                  ← custom hooks
└── types/
    └── index.ts            ← interfaces TypeScript
```

---

## 🧩 Convenciones de código

### Regla #1: Contenido separado de presentación

```tsx
// ✅ CORRECTO — el componente solo renderiza
import { heroContent } from '@/data/content'
export default function Hero({ data }: HeroProps) {
  return <section>{data.headline}</section>
}

// ❌ INCORRECTO — string hardcodeado en JSX
export default function Hero() {
  return <section>Bienvenida a tu espacio sagrado</section>
}
```

### Todo el texto visible vive en `src/data/content.ts`

```ts
// Estructura esperada en content.ts
export const heroContent = {
  headline: 'El arte de volver a ti.',
  subheadline: 'Yoga con intención, lógica y corazón.',
  cta: 'Empieza tu práctica',
} satisfies HeroContent
```

### TypeScript strict

```tsx
// Props siempre con interfaces nombradas
interface HeroProps {
  data: HeroContent
  className?: string
}

// Tipos en src/types/index.ts
export interface HeroContent {
  headline: string
  subheadline: string
  cta: string
}
```

### Un componente = una responsabilidad

Si un componente supera ~150 líneas, dividirlo. Si mezcla fetch + render, separarlo en hook + componente.

---

## 📦 Contenido de referencia

### Programas principales (4 meses c/u)

| Programa | Etapas |
|----------|--------|
| Encuentra tu Centro | Conectar → Autoreconocimiento → Anclar → Avanzar |
| Enraíza-Te | Volver al cuerpo → Estabilidad → Fuerza → Integración |
| Elogio a Ti | Despertar → Reconexión → Reprogramación → Consagración |

### Clases online

- **Respira y Fluye** — restaurativo, pausado
- **Alma y Movimiento** — yoga suave
- **Clases Temáticas** — 2x mes
- Plan Esencial: 4 clases/mes | Plan Consciente: 8 clases/mes

### Productos digitales (Payhip)

- Camino al Merecimiento (cuaderno digital)
- Mandalas de Abundancia (cuaderno digital)
- Camino a la Abundancia (cuaderno digital)
- Guía de posturas básicas (descargable gratis)

### Links activos

- Tienda: https://payhip.com/ConLogicayAlma
- Comunidad: https://chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC
- Referencia de diseño: xualanyoga.com

---

## 🚀 Roadmap

```
Fase 0 ✅  Landing page Next.js (completa)
           │
Fase 1 →   PWA
           ├── Dashboard espiritual del usuario
           ├── Bitácora del alma (journaling guiado)
           ├── Modo Ritual (música + intención + respiración)
           ├── Rituales lunares
           └── Comunidad interna
           │
Fase 2     Full web app
           ├── Auth + DB (Supabase)
           ├── Membresías y pagos (Stripe)
           └── Tienda integrada
           │
Fase 3     App nativa (tras validar en web)
           │
Fase 4     Concept Store física (Turmero/Maracay)
           └── QR codes ↔ app
```

---

## 💬 Frases de la marca (copy autorizado)

Usar estas frases en UI, copy, placeholders y textos generados:

> "Organizamos el bienestar, ritualizamos la estructura."  
> "Conecta tu mente. Habita tu cuerpo. Expande tu esencia."  
> "Donde la estructura sostiene el alma."  
> "Planifica con el alma, fluye con propósito."  
> "Yoga con intención, lógica y corazón."  
> "El arte de volver a ti."  
> "Diseño sagrado para tu vida diaria."  
> "Cuando el alma guía y la mente acompaña."

**Tono siempre:** cercano, motivador, espiritual sin ser dogmático. Nunca frío ni técnico en el copy visible.

---

## ⚠️ Checklist antes de hacer cualquier PR / commit

- [ ] ¿Se ve bien en 375px?
- [ ] ¿Hay strings hardcodeados en JSX? (no debería)
- [ ] ¿Nuevas interfaces en `src/types/index.ts`?
- [ ] ¿TypeScript compila sin errores? (`npm run build`)
- [ ] ¿Usé clases Tailwind v4 y no sintaxis v3?
- [ ] ¿El nuevo componente tiene su prop interface nombrada?
- [ ] ¿Hay `alt` en todas las imágenes?
- [ ] ¿El copy generado suena como Yube?

---

## 🔧 Comandos frecuentes

```bash
# Desarrollo
npm run dev          # servidor local con Turbopack

# Verificación
npm run build        # build de producción (detecta errores TS)
npm run lint         # ESLint

# Entorno WSL
# Si hay problemas de hot reload en WSL2:
# Coloca el proyecto dentro del filesystem de Linux (~/projects/), no en /mnt/c/
```

---

*Skill mantenido por Alberto. Actualizar cada vez que haya cambios arquitectónicos mayores.*
