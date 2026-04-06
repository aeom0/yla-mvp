import { defineType, defineField } from 'sanity'

export const siteConfig = defineType({
  name: 'siteConfig',
  title: 'Configuración del sitio',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'social', title: 'Redes sociales' },
    { name: 'footer', title: 'Footer' },
    { name: 'newsletter', title: 'Newsletter' },
    { name: 'community', title: 'Comunidad' },
  ],
  fields: [
    // --- Redes sociales ---
    defineField({
      name: 'instagram',
      title: 'URL de Instagram',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'tiktok',
      title: 'URL de TikTok',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'youtube',
      title: 'URL de YouTube',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'whatsappDirect',
      title: 'WhatsApp directo (wa.me)',
      type: 'url',
      description: 'Ej: https://wa.me/584243547179',
      group: 'social',
    }),
    defineField({
      name: 'whatsappGroup',
      title: 'Link de la comunidad WhatsApp',
      type: 'url',
      group: 'social',
    }),
    // --- Footer ---
    defineField({
      name: 'footerTagline',
      title: 'Tagline del footer',
      type: 'string',
      description: 'Ej: "Organizamos el bienestar, estructuramos el alma"',
      group: 'footer',
    }),
    // --- Newsletter ---
    defineField({
      name: 'newsletterTitle',
      title: 'Título del newsletter',
      type: 'string',
      group: 'newsletter',
    }),
    defineField({
      name: 'newsletterDescription',
      title: 'Descripción del newsletter',
      type: 'string',
      group: 'newsletter',
    }),
    defineField({
      name: 'newsletterCta',
      title: 'Botón del newsletter',
      type: 'string',
      group: 'newsletter',
    }),
    // --- Comunidad ---
    defineField({
      name: 'communityTitle',
      title: 'Título de la comunidad',
      type: 'string',
      group: 'community',
    }),
    defineField({
      name: 'communityDescription',
      title: 'Descripción de la comunidad',
      type: 'text',
      rows: 2,
      group: 'community',
    }),
    defineField({
      name: 'communityCtaLabel',
      title: 'Botón de la comunidad',
      type: 'string',
      group: 'community',
    }),
  ],
  preview: {
    prepare: () => ({ title: '⚙️ Configuración del sitio' }),
  },
})
