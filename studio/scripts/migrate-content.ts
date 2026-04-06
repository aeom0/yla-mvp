/**
 * Script de migración: src/data/content.ts → Sanity dataset
 * Uso: yarn tsx scripts/migrate-content.ts
 * Es idempotente — usa createOrReplace, safe para correr múltiples veces.
 */

import { createClient } from '@sanity/client'
import { siteContent } from '../../src/data/content'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID ?? 's6xwmbxz',
  dataset: process.env.SANITY_STUDIO_DATASET ?? 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN, // necesario para writes
  useCdn: false,
})

// ─── Helpers ────────────────────────────────────────────────────────────────

const ok = (msg: string) => console.log(`  ✓ ${msg}`)
const fail = (msg: string, err: unknown) => console.error(`  ✗ ${msg}`, err)

async function upsert(doc: Record<string, unknown>) {
  try {
    await client.createOrReplace(doc)
    ok(doc._type + (doc._id ? ` (${doc._id})` : ''))
  } catch (err) {
    fail(String(doc._id ?? doc._type), err)
    throw err
  }
}

// ─── Singletons ─────────────────────────────────────────────────────────────

async function migrateHero() {
  console.log('\n→ Hero')
  const { hero } = siteContent
  await upsert({
    _id: 'hero',
    _type: 'hero',
    title: hero.title,
    headlineEmotional: hero.headlineEmotional,
    headlineAction: hero.headlineAction,
    microCta: hero.microCta,
    ctaPrimary: hero.cta.primary,
    ctaSecondary: hero.cta.secondary,
    youtubeVideoId: '',
  })
}

async function migrateAbout() {
  console.log('\n→ About')
  const { about } = siteContent
  await upsert({
    _id: 'about',
    _type: 'about',
    title: about.title,
    credential: about.credential,
    description: about.description,
    extended: about.extended,
    highlights: about.highlights,
    quote: about.quote,
    welcomeVideoYoutubeId: about.welcomeVideoYoutubeId ?? '',
  })
}

async function migratePhilosophy() {
  console.log('\n→ Philosophy')
  const { philosophy } = siteContent
  await upsert({
    _id: 'philosophy',
    _type: 'philosophy',
    title: philosophy.title,
    description: philosophy.description,
    pillars: philosophy.pillars.map((p) => ({
      _key: p.title.toLowerCase(),
      title: p.title,
      description: p.description,
    })),
    youtubeChannelHref: philosophy.links.youtubeChannelHref,
  })
}

async function migrateSiteConfig() {
  console.log('\n→ SiteConfig')
  const { footer, newsletter, community } = siteContent
  await upsert({
    _id: 'siteConfig',
    _type: 'siteConfig',
    instagram: footer.social.instagram,
    tiktok: footer.social.tiktok,
    youtube: footer.social.youtube,
    whatsappDirect: footer.social.whatsapp,
    whatsappGroup: community.whatsappLink,
    footerTagline: footer.tagline,
    newsletterTitle: newsletter.title,
    newsletterDescription: newsletter.description,
    newsletterCta: newsletter.cta,
    communityTitle: community.title,
    communityDescription: community.description,
    communityCtaLabel: community.whatsappCta,
  })
}

// ─── Collections ─────────────────────────────────────────────────────────────

async function migrateProducts() {
  console.log('\n→ Productos')
  for (const [i, p] of siteContent.shop.products.entries()) {
    await upsert({
      _id: `product-${p.id}`,
      _type: 'product',
      title: p.title,
      slug: { _type: 'slug', current: p.slug },
      category: p.category,
      intention: p.intention,
      description: p.description ?? '',
      isFree: p.isFree,
      price: p.price ?? '',
      badge: p.badge ?? '',
      payhipProductUrl: p.payhipProductUrl,
      includes: p.includes ?? [],
      forWho: p.forWho ?? '',
      order: i + 1,
    })
  }
}

async function migratePrograms() {
  console.log('\n→ Programas')
  for (const [i, p] of siteContent.programs.items.entries()) {
    await upsert({
      _id: `program-${p.id}`,
      _type: 'program',
      title: p.title,
      slug: { _type: 'slug', current: p.id },
      duration: p.duration,
      description: p.description,
      tagline: p.detail.tagline,
      stages: p.stages,
      accent: p.accent,
      forWho: p.detail.forWho,
      includes: p.detail.includes,
      price: p.detail.price,
      ctaLabel: p.detail.ctaLabel,
      ctaLink: p.detail.ctaLink,
      order: i + 1,
    })
  }
}

async function migrateFaq() {
  console.log('\n→ FAQ')
  for (const [i, item] of siteContent.faq.items.entries()) {
    await upsert({
      _id: `faq-${i + 1}`,
      _type: 'faqItem',
      question: item.question,
      answer: item.answer,
      order: i + 1,
    })
  }
}

async function migrateClasses() {
  console.log('\n→ Clases')
  for (const [i, c] of siteContent.classes.items.entries()) {
    await upsert({
      _id: `class-${i + 1}`,
      _type: 'classItem',
      name: c.name,
      description: c.description,
      frequency: c.frequency,
      order: i + 1,
    })
  }
}

async function migrateTestimonials() {
  console.log('\n→ Testimonios')
  for (const [i, t] of siteContent.testimonials.items.entries()) {
    await upsert({
      _id: `testimonial-${i + 1}`,
      _type: 'testimonial',
      name: t.name,
      role: t.role,
      quote: t.quote,
      featured: i < 3,
      order: i + 1,
    })
  }
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function main() {
  console.log('🧘 Iniciando migración content.ts → Sanity')
  console.log(`   Proyecto: ${client.config().projectId} / ${client.config().dataset}`)

  if (!process.env.SANITY_API_TOKEN) {
    console.error('\n⚠️  SANITY_API_TOKEN no está definido.')
    console.error('   Agrega un token con permisos de escritura al archivo studio/.env:')
    console.error('   SANITY_API_TOKEN=sk...')
    console.error('   Obtenlo en: https://sanity.io/manage → proyecto s6xwmbxz → API → Tokens\n')
    process.exit(1)
  }

  await migrateHero()
  await migrateAbout()
  await migratePhilosophy()
  await migrateSiteConfig()
  await migrateProducts()
  await migratePrograms()
  await migrateFaq()
  await migrateClasses()
  await migrateTestimonials()

  console.log('\n✅ Migración completa.')
}

main().catch((err) => {
  console.error('\n❌ La migración falló:', err)
  process.exit(1)
})
