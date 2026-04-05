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
> Fuente de verdad técnica. El ROADMAP.md tiene el backlog de producto detallado.

---

## 🧘 Contexto del proyecto

**Yoga con Lógica y Alma** es la plataforma digital de **Yube Karina** (ingeniera industrial + yogui, 500h certificadas, CEO de YLA).
El método fusiona estructura analítica con práctica espiritual. El dev/asesor técnico es **Alberto**.

**Fase actual:** Fase 0-B — mejoras de conversión (assets reales, precios, tienda, email). Ver `ROADMAP.md`.

**Tagline:** *"Organizamos el bienestar, ritualizamos la estructura."*
**Público:** Mujeres conscientes y emprendedoras, mercado hispanohablante (Venezuela, España, LATAM).

---

## 🛠 Stack tecnológico (no negociable)

| Capa | Tecnología | Notas |
|------|-----------|-------|
| Framework | Next.js 15 (App Router) | Sin Pages Router |
| UI | React 19 + Tailwind CSS v4 | v4, no v3 |
| Lenguaje | TypeScript strict | Sin `any` implícito |
| Iconos | Lucide React | Ya instalado |
| Tipografía | Playfair Display + Lato | Via @fontsource |
| CMS (próximo) | Sanity (free tier) | Fase 0-C |
| Backend | Supabase | Fase 2 — proyecto: mwvgtxzvqhducjggycuu |
| Pagos | Stripe | Fase 2 |
| Email | Resend | Sprint 3 — free: 3k emails/mes |
| Tienda | Payhip | Activo — payhip.com/ConLogicayAlma |
| Deploy | Vercel | proyecto: yogaconlogicayalma |
| Entorno | WSL2 · Windows 11 · VS Code + Claude Code | Android = target primario |

**⚠️ No instalar nuevas dependencias sin confirmar con Alberto.**

---

## 🎨 Sistema de diseño

### Tokens de color (variables CSS en globals.css)

```css
--lavender:     #B497D6;  /* espiritual, complemento */
--lavender-deep:#9478bc;
--beige:        #F6EBD9;  /* fondo base cálido */
--beige-warm:   #f0e0c4;
--gold:         #E8D3A3;  /* ACENTO DOMINANTE — CTAs, borders, highlights */
--gold-deep:    #c9a96e;
--smoke:        #DADADA;  /* texto secundario */
--ink:          #333333;  /* texto principal */
```

> **Gold es el rey.** `#E8D3A3` / `#c9a96e` dominan botones, borders y highlights.
> Lavanda = espiritual pero secundario. **Sin rosa ni pinkish en ningún lugar.**
> Fondo de página: `#FAF7F2` (NO `#F6EBD9` que tiene canal rojo alto).

### Tipografía

- **Títulos / Display:** Playfair Display
- **Cuerpo / UI:** Lato
- **Mantras / frases canalizadas:** Dancing Script

### Principios visuales irrompibles

- **Mobile-first siempre.** 375px es el viewport de referencia. Desktop = mejora progresiva.
- Minimalismo funcional. Menos es más.
- Animaciones sutiles: brillo, fade, latido. **Nunca flashy.**
- Dark mode: fondo morado profundo + texto dorado/blanco.
- Se siente como ritual digital, no como app de gimnasio.

---

## 📁 Estado real del codebase (abril 2026)

```
src/
├── app/
│   ├── layout.tsx              ← fuentes, metadata, ThemeProvider
│   ├── page.tsx                ← orden: Hero → Philosophy → Programs →
│   │                              Testimonials → About → Community →
│   │                              Shop → LeadMagnet → SocialProofStrip → Footer
│   ├── globals.css
│   ├── api/subscribe/route.ts  ← endpoint email (sin ESP conectado aún)
│   ├── blog/page.tsx           ← placeholder próximamente ✅
│   ├── tests/page.tsx          ← placeholder próximamente ✅
│   ├── programas/[slug]/page.tsx ← ficha programa (SSG) ✅
│   ├── tienda/page.tsx         ← índice tienda ✅
│   ├── tienda/[slug]/page.tsx  ← ficha producto ✅
│   ├── membresia/page.tsx      ← página de planes ✅
│   └── faq/page.tsx            ← FAQ standalone ✅
│
├── components/
│   ├── ui/          Button.tsx · Card.tsx · Section.tsx
│   ├── home/
│   │   ├── Hero.tsx            ✅ (sin video aún)
│   │   ├── Philosophy.tsx      ✅ CTAs: YT, /tests, /blog (morado uniforme)
│   │   ├── Programs.tsx        ✅ → /programas/[slug]; detail en content
│   │   ├── Testimonials.tsx    ✅ (avatares iniciales, sin fotos reales)
│   │   ├── About.tsx           ✅ (placeholder imagen Yube)
│   │   ├── Community.tsx       ✅
│   │   ├── Shop.tsx            ✅ (sin precios, redirige a Payhip)
│   │   ├── LeadMagnet.tsx      ✅
│   │   ├── SocialProofStrip.tsx ✅
│   │   ├── FAQ.tsx             ✅
│   │   └── Footer.tsx          ✅
│   ├── layout/      Header.tsx · BottomNav.tsx
│   └── theme/       ThemeToggle.tsx
│
├── data/content.ts             ← FUENTE DE VERDAD del contenido
├── lib/ · hooks/ · types/
```

### Pendientes conocidos de deuda técnica

- `alert()` en newsletter → reemplazar por toast/modal
- `next/image` para todas las imágenes
- Meta tags OG por ruta
- Accesibilidad: focus visible en dark mode con botones dorados

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
  return <section>Bienvenida a tu espacio sagrado</section>
}
```

### Workflow con GitHub MCP

- **Siempre** `get_file_contents` antes de editar — Cursor puede haber modificado el archivo
- **Batchar** cambios relacionados en un solo `push_files` con commit message descriptivo
- Conventional commits: `feat:` `fix:` `docs:` `chore:`
- Push directo a `main` — Alberto hace `git pull` localmente

---

## 📦 Productos y contenido

### Programas (4 meses c/u)

| Programa | Etapas |
|----------|--------|
| Encuentra tu Centro | Conectar → Autoreconocimiento → Anclar → Avanzar |
| Enraíza-Te | Volver al cuerpo → Estabilidad → Fuerza → Integración |
| Elogio a Ti | Despertar → Reconexión → Reprogramación → Consagración |

### Clases online

- **Respira y Fluye** — restaurativo, pausado
- **Alma y Movimiento** — yoga suave
- **Clases Temáticas** — 2x mes
- Plan Esencial: 4 clases/mes ($25) | Plan Consciente: 8 clases/mes ($45)

### Productos digitales en Payhip

- Guía de posturas básicas (gratis — lead magnet)
- Camino al Merecimiento (cuaderno)
- Mandalas de Abundancia (cuaderno)
- Camino a la Abundancia (cuaderno)

### Redes sociales activas

- Instagram / TikTok: @yube.karina
- YouTube: @yube.karinag
- WhatsApp directo: wa.me/584243547179
- WhatsApp grupo: chat.whatsapp.com/Din0PQRJ645InTV6R7ZXYC

---

## 🚀 Roadmap resumido

```
Fase 0-B (actual) ── Conversión: assets reales, precios, tienda, /tienda/[slug]
         │
Fase 0-C ─────────── CMS Sanity: autonomía de contenido para Yube
         │            (schemas: hero, product, program, testimonial, faq, about, socialLinks)
         │
Fase 1 ───────────── PWA: bitácora, modo ritual, dashboard espiritual
         │
Fase 2 ───────────── Full web app: Supabase auth + Stripe membresías
         │
Fase 3 ───────────── App nativa (React Native / Expo)
         │
Fase 4 ───────────── Concept Store física (Turmero/Maracay) + QR ↔ app
```

Detalle completo de sprints y backlog: **`ROADMAP.md`**

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

**Tono siempre:** cercano, motivador, espiritual sin ser dogmático. Nunca frío ni técnico en el copy visible.
**Yube es siempre "Instructora"**, nunca "Maestra".
**Credentials fijas:** "Ingeniera industrial de profesión. Instructora de yoga y meditación, 500 horas certificadas. CEO de Yoga con Lógica y Alma."

---

## ⚠️ Checklist antes de commit

- [ ] ¿Se ve bien en 375px?
- [ ] ¿Sin strings hardcodeados en JSX?
- [ ] ¿TypeScript compila sin errores? (`npm run build`)
- [ ] ¿Tailwind v4 (no v3)?
- [ ] ¿`get_file_contents` antes de editar un archivo existente?
- [ ] ¿El copy generado suena como Yube?
- [ ] ¿Alt en todas las imágenes?

---

## 🔧 Comandos frecuentes

```bash
npm run dev      # servidor local con Turbopack
npm run build    # build de producción (detecta errores TS)
npm run lint     # ESLint

# WSL2: si hay problemas de hot reload, proyecto debe estar en ~/projects/ no en /mnt/c/
```

---

*Skill mantenido por Alberto. Actualizar tras cada sesión con cambios arquitectónicos.*
*Última actualización: abril 2026.*
