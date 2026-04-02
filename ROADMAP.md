# ROADMAP — Yoga con Lógica y Alma (yla-mvp)

Documento vivo: prioridades de producto y técnica.
Para convenciones de código ver `CLAUDE.md` y `.claude/skills/yla-dev-SKILL.md`.

Última revisión: abril 2026.

---

## Visión

Un hub digital que concentre **captación (lead magnet + newsletter)**, **venta (Payhip → tienda propia)** y **comunidad (WhatsApp, redes)**, con autonomía de contenido para Yube vía CMS, evolucionando hacia **PWA y app** sin reescribir la marca.

---

## Estado actual del codebase

### Componentes implementados (`src/components/home/`)

| Componente | Descripción | Estado |
|---|---|---|
| `Hero.tsx` | Hero principal con CTAs y stats | ✅ Live |
| `Philosophy.tsx` | Pilares Cuerpo / Mente / Espíritu — jerarquía visual, botones diferenciados por pilar, micro-animaciones | ✅ Live |
| `Programs.tsx` | Cards de los 3 programas + card Clases Personalizadas rediseñada (logros, para ti si, cómo funciona) | ✅ Live |
| `Testimonials.tsx` | Reseñas de alumnas (avatares iniciales) | ✅ Live |
| `About.tsx` | Bio de Yube (placeholder de imagen) | ✅ Live — imagen pendiente |
| `Community.tsx` | Cards de redes sociales | ✅ Live |
| `Shop.tsx` | Catálogo → redirige a Payhip | ✅ Live — sin precios |
| `LeadMagnet.tsx` | Clase express gratis (captura email) | ✅ Live |
| `SocialProofStrip.tsx` | Strip de prueba social | ✅ Live |
| `Footer.tsx` | Footer con nav y legal | ✅ Live |

### Rutas (`src/app/`)

| Ruta | Estado |
|---|---|
| `/` | ✅ Landing principal |
| `/membresia` | ✅ Página de planes |
| `/faq` | ✅ FAQ standalone |
| `/api/subscribe` | ✅ Endpoint (sin ESP conectado aún) |

---

## Fase 0-B — Conversión y assets reales (Sprint actual)

**Objetivo:** Convertir la landing en fuente de ingresos real con assets de Yube y precios visibles.

### Sprint 1 — Assets visuales (impacto inmediato)

Desbloqueadores: Yube entrega logo, foto y video.

- [ ] **Logo en Header** — reemplazar texto "Yoga con Lógica y Alma" por `<Image>` del logo SVG/PNG
  - Archivo destino: `public/logo.png` (o `.svg`)
  - Componente: `src/components/layout/Header.tsx`
- [ ] **Foto real de Yube en About** — reemplazar placeholder con corazón
  - Archivo destino: `public/yube-about.jpg`
  - Componente: `src/components/home/About.tsx`
- [ ] **Video de Yube en Hero** — embed YouTube (autoplay muted) o `<video>` local
  - Campo nuevo en `content.ts`: `hero.youtubeVideoId`
  - Componente: `src/components/home/Hero.tsx` — añadir `HeroVideo.tsx` como subcomponente
- [ ] **Fotos reales en Testimonials** — reemplazar iniciales por avatares reales
  - Archivos destino: `public/testimonials/[nombre].jpg`
  - Componente: `src/components/home/Testimonials.tsx`

### Sprint 2 — Conversión de tienda

- [ ] **Precios visibles en Shop** — añadir campo `price: string` a cada producto en `content.ts`
  - Ejemplo: `{ price: '$12', ... }`
  - Componente: `src/components/home/Shop.tsx` — mostrar precio con estilo dorado
- [ ] **Preview de cuadernos** — 2-3 imágenes del interior de cada cuaderno
  - Archivos destino: `public/products/[slug]/preview-1.jpg`
  - Componente: `Shop.tsx` — añadir mini galería en la card
- [ ] **Página individual de producto** — ruta `/tienda/[slug]`
  - Nueva ruta: `src/app/tienda/[slug]/page.tsx`
  - Incluye: descripción larga, galería de previews, precio, CTA a Payhip, testimonios del producto
- [ ] **Sección "Empieza aquí"** — nuevo componente `StartHere.tsx`
  - Flujo visual: Guía gratis → Clase grabada → Membresía → Programa
  - Posición: entre `Philosophy` y `Programs` en `page.tsx`

### Sprint 3 — Email y newsletter

- [ ] **Conectar `/api/subscribe` a Resend** — entrega automática de lead magnet
  - Proveedor: Resend (free tier: 3,000 emails/mes)
  - Secuencia de bienvenida: 5 emails (ver estrategia en sesión anterior)
- [ ] **Dominio `yogaconlogicayalma.com`** — apuntar DNS a Vercel

---

## Fase 0-C — CMS con Sanity (próximo después de Sprint 3)

**Objetivo:** Yube puede editar contenido sin tocar código.

### Qué gestionará Yube desde Sanity Studio

| Contenido | Schema Sanity |
|---|---|
| Textos Hero (título, subtítulo, tagline) | `hero` |
| Productos de tienda (título, precio, badge, imagen, intención) | `product` |
| Programas (título, duración, etapas) | `program` |
| Testimonios (nombre, rol, texto, foto) | `testimonial` |
| FAQ (pregunta, respuesta) | `faq` |
| About (foto, bio, credentials, quote) | `about` |
| Links sociales (IG, TikTok, YT, WA) | `socialLinks` |
| Video del Hero (YouTube ID) | campo en `hero` |

### Plan técnico

```
1. Crear proyecto Sanity (free tier — suficiente para YLA)
2. Definir schemas en TypeScript en /studio/schemas/
3. Migrar src/data/content.ts → dataset de Sanity
4. Reemplazar imports de content.ts por fetch GROQ + ISR
5. Configurar webhook Sanity → Vercel revalidate
6. Darle a Yube acceso al Studio (solo su proyecto)
7. Studio en español con descripciones amigables por campo
```

### Límites del Free tier (más que suficiente para YLA)

- 10,000 documentos (YLA usará < 200)
- 20 usuarios administradores
- 1 dataset
- Studio completamente personalizable
- APIs GROQ y GraphQL incluidas

---

## Fase 1 — PWA

**Dependencia:** Sanity en producción + dominio conectado.

- Dashboard espiritual y hábitos
- Bitácora del alma (journaling guiado)
- Modo ritual (intención, audio, respiración)
- Calendario / avisos de clases y eventos
- Comunidad interna (complemento a WhatsApp)

---

## Fase 2 — Full web app

- Auth + datos: **Supabase** (proyecto ya creado: `mwvgtxzvqhducjggycuu`)
- Pagos recurrentes: **Stripe** (membresías + tienda integrada)
- Panel de alumna, contenido según plan, historial

---

## Fase 3 — App nativa

- React Native / Expo tras validar retención en web/PWA
- Sanity como CMS unificado (mismo contenido, múltiples frontends)

---

## Fase 4 — Concept store física

- Punto de encuentro (Turmero / Maracay)
- QR codes → landing o app
- Campañas locales alineadas al funnel digital

---

## Deuda técnica

- [ ] `alert()` en newsletter → reemplazar por toast/modal elegante
- [ ] Accesibilidad: focus visible en dark mode con botones dorados
- [ ] `next/image` para todas las imágenes (optimización automática)
- [ ] Meta tags OG para cada ruta (compartir en redes)
- [ ] Tests E2E opcionales en rutas críticas (`/`, `/membresia`, subscribe)

---

## Referencias

- Payhip: https://payhip.com/ConLogicayAlma
- Supabase project: `mwvgtxzvqhducjggycuu`
- Vercel project: `yogaconlogicayalma`
- Repo: https://github.com/aeom0/yla-mvp
- Live: https://yla-mvp.vercel.app
- Dominio (pendiente DNS): yogaconlogicayalma.com
