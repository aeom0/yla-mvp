# Handoff para Cursor — Fase 0-C final: GROQ + Webhook + Deploy

> Estado al: abril 2026.
> Studio funcionando en localhost:3333. Datos migrados a Sanity. Migración completada (commit 913c462).
> Esta es la última etapa de la Fase 0-C. Ejecutar los 3 pasos en orden. Commitear al final de cada uno.

---

## Contexto técnico

- **Repo raíz:** `~/yla-mvp` — Next.js 15 App Router, React 19, Tailwind v4, TypeScript strict, Yarn 4
- **Project ID Sanity:** `s6xwmbxz` · **Dataset:** `production`
- **Vercel project:** `yogaconlogicayalma` · **Live:** `https://yla-mvp.vercel.app`
- Todo el contenido vive actualmente en `src/data/content.ts`
- Los schemas de Sanity están en `studio/schemas/` — 1:1 con ese contenido
- **`src/data/content.ts` NO se elimina** — queda como fallback de tipos hasta validar en producción

---

## Paso 1 — Conectar Next.js a Sanity (GROQ + ISR)

### 1.1 Instalar el cliente de Sanity en el repo raíz

```bash
cd ~/yla-mvp
yarn add @sanity/client next-sanity
```

### 1.2 Crear `src/lib/sanity/client.ts`

```ts
import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? 's6xwmbxz',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
})
```

### 1.3 Crear `src/lib/sanity/queries.ts`

```ts
import { sanityClient } from './client'
import { groq } from 'next-sanity'

export async function getHero() {
  return sanityClient.fetch(
    groq`*[_type == "hero" && _id == "hero"][0]`,
    {},
    { next: { revalidate: 60, tags: ['hero'] } }
  )
}

export async function getAbout() {
  return sanityClient.fetch(
    groq`*[_type == "about" && _id == "about"][0]`,
    {},
    { next: { revalidate: 60, tags: ['about'] } }
  )
}

export async function getPhilosophy() {
  return sanityClient.fetch(
    groq`*[_type == "philosophy" && _id == "philosophy"][0]`,
    {},
    { next: { revalidate: 60, tags: ['philosophy'] } }
  )
}

export async function getSiteConfig() {
  return sanityClient.fetch(
    groq`*[_type == "siteConfig" && _id == "siteConfig"][0]`,
    {},
    { next: { revalidate: 60, tags: ['siteConfig'] } }
  )
}

export async function getProducts() {
  return sanityClient.fetch(
    groq`*[_type == "product"] | order(order asc) {
      _id, title, slug, category, intention, description,
      isFree, price, badge, payhipProductUrl, includes, forWho,
      "image": image.asset->url
    }`,
    {},
    { next: { revalidate: 60, tags: ['product'] } }
  )
}

export async function getPrograms() {
  return sanityClient.fetch(
    groq`*[_type == "program"] | order(order asc) {
      _id, title, slug, duration, description, tagline,
      stages, accent, forWho, includes, price, ctaLabel, ctaLink
    }`,
    {},
    { next: { revalidate: 60, tags: ['program'] } }
  )
}

export async function getProgramBySlug(slug: string) {
  return sanityClient.fetch(
    groq`*[_type == "program" && slug.current == $slug][0] {
      _id, title, slug, duration, description, tagline,
      stages, accent, forWho, includes, price, ctaLabel, ctaLink
    }`,
    { slug },
    { next: { revalidate: 60, tags: ['program'] } }
  )
}

export async function getTestimonials() {
  return sanityClient.fetch(
    groq`*[_type == "testimonial"] | order(order asc) {
      _id, name, role, quote, featured,
      "photo": photo.asset->url
    }`,
    {},
    { next: { revalidate: 60, tags: ['testimonial'] } }
  )
}

export async function getFaqItems() {
  return sanityClient.fetch(
    groq`*[_type == "faqItem"] | order(order asc) { _id, question, answer }`,
    {},
    { next: { revalidate: 60, tags: ['faqItem'] } }
  )
}

export async function getClasses() {
  return sanityClient.fetch(
    groq`*[_type == "classItem"] | order(order asc) { _id, name, description, frequency }`,
    {},
    { next: { revalidate: 60, tags: ['classItem'] } }
  )
}
```

### 1.4 Agregar variables de entorno al `.env.local` raíz

```
NEXT_PUBLIC_SANITY_PROJECT_ID=s6xwmbxz
NEXT_PUBLIC_SANITY_DATASET=production
```

### 1.5 Convertir `src/app/page.tsx` en Server Component async

Hacer fetch paralelo de todos los datos y pasarlos como props a los componentes.
El shape de cada query GROQ debe coincidir con el shape que ya esperan los componentes (ver `src/data/content.ts` como referencia).
Si hay desajuste de tipos, ajustar la query GROQ — no modificar los componentes si se puede evitar.
Si Sanity devuelve `null` (falla de red, etc.), hacer fallback a `siteContent` de `content.ts`.

```tsx
import { getHero, getAbout, getPhilosophy, getProducts, getPrograms, getTestimonials, getFaqItems, getSiteConfig } from '@/lib/sanity/queries'
import { siteContent } from '@/data/content'
// ... resto de imports de componentes

export default async function Home() {
  const [hero, about, philosophy, products, programs, testimonials, faqItems, siteConfig] =
    await Promise.all([
      getHero(), getAbout(), getPhilosophy(), getProducts(),
      getPrograms(), getTestimonials(), getFaqItems(), getSiteConfig()
    ])

  return (
    <>
      <Hero data={hero ?? siteContent.hero} />
      <Philosophy data={philosophy ?? siteContent.philosophy} />
      <Programs data={programs ?? siteContent.programs.items} />
      <Testimonials data={testimonials ?? siteContent.testimonials.items} />
      <About data={about ?? siteContent.about} />
      <Community data={siteConfig ?? siteContent.community} />
      <Shop data={products ?? siteContent.shop.products} />
      <LeadMagnet />
      <SocialProofStrip />
      <Footer data={siteConfig ?? siteContent.footer} />
    </>
  )
}
```

### 1.6 Actualizar `next.config.ts` para imágenes del CDN de Sanity

```ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
}

export default nextConfig
```

### 1.7 Verificar build

```bash
cd ~/yla-mvp
yarn build
```

Si hay errores de tipos, ajustar las queries GROQ o añadir tipos explícitos. No romper los componentes existentes.

### Commit Paso 1

```bash
git add src/lib/sanity/ src/app/page.tsx next.config.ts package.json yarn.lock
git commit -m "feat(sanity): connect Next.js to Sanity via GROQ + ISR"
git push
```

---

## Paso 2 — Webhook Sanity → Vercel (revalidación automática)

### 2.1 Crear `src/app/api/revalidate/route.ts`

```ts
import { revalidateTag } from 'next/cache'
import { type NextRequest, NextResponse } from 'next/server'

const REVALIDATE_SECRET = process.env.SANITY_REVALIDATE_SECRET

const TYPE_TO_TAGS: Record<string, string[]> = {
  hero:        ['hero'],
  about:       ['about'],
  philosophy:  ['philosophy'],
  siteConfig:  ['siteConfig'],
  product:     ['product'],
  program:     ['program'],
  testimonial: ['testimonial'],
  faqItem:     ['faqItem'],
  classItem:   ['classItem'],
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (REVALIDATE_SECRET && secret !== REVALIDATE_SECRET) {
    return NextResponse.json({ message: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const documentType = body._type as string
    const tags = TYPE_TO_TAGS[documentType]

    if (!tags) {
      return NextResponse.json({ message: `Unknown type: ${documentType}` }, { status: 400 })
    }

    for (const tag of tags) {
      revalidateTag(tag)
    }

    console.log(`[revalidate] Tags: ${tags.join(', ')}`)
    return NextResponse.json({ revalidated: true, tags })
  } catch (err) {
    console.error('[revalidate] Error:', err)
    return NextResponse.json({ message: 'Error processing webhook' }, { status: 500 })
  }
}
```

### 2.2 Agregar secret al `.env.local` raíz

```
SANITY_REVALIDATE_SECRET=yla-revalidate-2026
```

### 2.3 Configurar el webhook en Sanity (hacer Alberto manualmente)

Ir a **sanity.io/manage → proyecto s6xwmbxz → API → Webhooks → Add webhook**:

- **Name:** Vercel ISR revalidate
- **URL:** `https://yla-mvp.vercel.app/api/revalidate?secret=yla-revalidate-2026`
- **Trigger on:** Create, Update, Publish, Unpublish
- **Filter:** (vacío — cualquier tipo)
- **Projection:** `{ _type }`
- **HTTP method:** POST

### 2.4 Agregar variables en Vercel (hacer Alberto manualmente)

En **vercel.com → proyecto yogaconlogicayalma → Settings → Environment Variables**:

```
NEXT_PUBLIC_SANITY_PROJECT_ID = s6xwmbxz
NEXT_PUBLIC_SANITY_DATASET = production
SANITY_REVALIDATE_SECRET = yla-revalidate-2026
```

### Commit Paso 2

```bash
git add src/app/api/revalidate/
git commit -m "feat(sanity): add ISR revalidation webhook endpoint"
git push
```

---

## Paso 3 — Deploy del Studio en la nube

### 3.1 Verificar sesión de Sanity CLI

```bash
cd ~/yla-mvp/studio
yarn sanity whoami
```

Si no muestra la cuenta de Yube: `yarn sanity login`

### 3.2 Deploy

```bash
yarn deploy
```

Responder `yogaconlogicayalma` si pregunta el nombre del host (ya está en `sanity.cli.ts`).

Studio publicado en: **https://yogaconlogicayalma.sanity.studio**

### 3.3 Invitar a Yube al proyecto (hacer Alberto manualmente)

**sanity.io/manage → proyecto s6xwmbxz → Members → Invite**:
- Email: `yogaconlogicayalma@gmail.com`
- Rol: **Editor**

### 3.4 Verificar flujo end-to-end

1. Yube entra a `https://yogaconlogicayalma.sanity.studio`
2. Edita un campo → publica
3. Sanity llama al webhook → Vercel revalida el tag
4. En ~30s el cambio aparece en `https://yla-mvp.vercel.app`

### Commit Paso 3

```bash
# Solo si el deploy generó archivos locales
git add .
git commit -m "feat(sanity): deploy Studio to yogaconlogicayalma.sanity.studio"
git push
```

---

## Notas importantes para Cursor

- **No eliminar `src/data/content.ts`** — es el fallback y la fuente de tipos
- **Si `yarn build` falla por tipos:** ajustar queries GROQ para que el shape coincida — no tocar los componentes
- **Imágenes en Sanity:** los productos/testimonios tienen `image`/`photo` vacíos — Yube los sube desde el Studio. `next/image` con `src={null | undefined}` debe mostrar el placeholder existente del componente
- **`revalidate: 60`** en queries = fallback si el webhook falla
- **Pasos 2.3, 2.4 y 3.3** requieren acción manual de Alberto en los dashboards de Sanity y Vercel — documentarlos claramente en el output

---

*Handoff generado por Claude. Ver ROADMAP.md y CLAUDE.md para contexto completo del proyecto.*
