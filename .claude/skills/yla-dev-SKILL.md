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

**Fase actual:** Landing + funnel base (lead magnet, membresía, testimonios, header/nav). Pendientes: ESP para emails, video YouTube en About, dominio. Detalle en **`ROADMAP.md`**. Próxima fase grande: PWA.

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
--lavender: #B497D6;
--beige: #F6EBD9;
--gold: #E8D3A3;       /* CTA primario (Button primary) */
--gold-deep: #c9a96e;
--purple-brand: #5b3a8e;  /* brief marca — secciones premium / lead magnet */
--lila-doc: #c6b7e2;
--gold-doc: #d4af37;
```

> **Gold en botones primarios.** Lavanda y morado de marca para jerarquía y bloques especiales. Ver `globals.css` para tokens light/dark.

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
│   ├── layout.tsx , page.tsx , globals.css
│   ├── api/subscribe/route.ts
│   └── membresia/page.tsx
├── components/
│   ├── ui/ (Button, Card, Section)
│   ├── home/ (Hero, Philosophy, Programs, Testimonials, About,
│   │         Community, Shop, LeadMagnet, FAQ, Footer)
│   ├── layout/ (Header, BottomNav)
│   └── theme/ThemeToggle.tsx
├── data/content.ts
├── lib/, hooks/, types/
└── (ver ROADMAP.md para fases del producto)
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

Plan de producto y backlog: **`ROADMAP.md`** en la raíz del repo.

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
