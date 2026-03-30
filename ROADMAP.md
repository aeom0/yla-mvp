# ROADMAP — Yoga con Lógica y Alma (yla-mvp)

Documento vivo: prioridades de producto y técnica. Para convenciones de código, ver `CLAUDE.md` y `.claude/skills/yla-dev-SKILL.md`.

---

## Visión

Un hub digital que concentre **captación (lead magnet + newsletter)**, **venta (Payhip, membresía)** y **comunidad (WhatsApp, redes)** y que evolucione hacia **PWA y app** sin reescribir la marca.

---

## Fase 0 — Landing y funnel (en curso)

**Estado:** base desplegable; funnel y copy alineados a brief estratégico (Contexto YLA).

**Incluye:**

- Landing con Hero (beneficio + método + acción), pilares Cuerpo / Mente / Espíritu, copy dual Lógica / Alma
- Programas, bloque clases personalizadas, testimonios, sobre mí (video YouTube opcional), comunidad + grid Instagram, tienda Payhip, lead magnet (`#guia-gratis`), FAQ, footer con mensaje de confianza
- Página `/membresia` con comparación de planes y diferenciador «Cartas para habitarte»
- Header sticky + CTA «Empezar aquí»; bottom nav móvil alineado al funnel
- API `POST /api/subscribe` validando email (sin persistencia ni ESP aún)

**Pendiente cercano (orden sugerido):**

1. Conectar `/api/subscribe` y formularios a un proveedor (Resend, Mailchimp, Supabase, etc.)
2. Definir entregable real del lead magnet (enlace automático, PDF, secuencia de correo)
3. Añadir `about.welcomeVideoYoutubeId` en `content.ts` cuando exista el video de bienvenida
4. Dominio `yogaconlogicayalma.com` apuntando a Vercel
5. Landings por producto estrella con embed Payhip (modal), si aplica
6. Imágenes reales en testimonios (y consentimiento de uso)

---

## Fase 1 — PWA

- Dashboard espiritual y hábitos
- Bitácora del alma (journaling guiado)
- Modo ritual (intención, audio, respiración)
- Calendario / avisos de clases y eventos
- Comunidad dentro de la app donde tenga sentido (sin reemplazar WhatsApp de golpe)

**Dependencias típicas:** auth ligera, almacenamiento de datos, notificaciones web.

---

## Fase 2 — Web app completa

- Auth y datos: **Supabase** (u equivalente acordado)
- Pagos recurrentes: **Stripe** (membresías además de Payhip si se unifica)
- Panel de alumna, contenido según plan, historial de compras

---

## Fase 3 — App nativa

- **React Native / Expo** (stack ya previsto del equipo) tras validar retención en web/PWA
- Paridad de funciones críticas con la web

---

## Fase 4 — Concept store física

- Punto de encuentro (Turmero / Maracay) con **QR → landing o app**
- Campañas locales alineadas al funnel digital

---

## Deuda técnica y mejoras

- Sustituir `alert` / mensajes genéricos donde aún queden en flujos legacy si aparecen
- Revisión de accesibilidad (focus, contraste en tema oscuro con botones dorados)
- i18n si el mercado lo exige (estructura ya favorecida por `content.ts`)
- Tests E2E opcionales en rutas críticas (`/`, `/membresia`, subscribe)

---

## Referencias externas

- Payhip: https://payhip.com/ConLogicayAlma  
- Repositorio: según remoto configurado (`origin`)

Última revisión de este roadmap: marzo 2026.
