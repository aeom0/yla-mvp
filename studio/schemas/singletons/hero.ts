import { defineType, defineField } from 'sanity'

export const hero = defineType({
  name: 'hero',
  title: 'Hero — Sección principal',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la marca',
      type: 'string',
      description: 'Ej: Yoga con Lógica y Alma®',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'headlineEmotional',
      title: 'Titular emocional',
      type: 'string',
      description: 'La primera línea del Hero. Ej: "Encuentra estructura para tu mente y espacio para tu alma."',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'headlineAction',
      title: 'Titular de acción',
      type: 'string',
      description: 'La segunda línea del Hero. Ej: "Empieza hoy con un regalo: tu primera herramienta gratis."',
    }),
    defineField({
      name: 'microCta',
      title: 'Micro CTA (debajo del botón)',
      type: 'string',
      description: 'Ej: "Acceso inmediato • A tu propio ritmo"',
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Botón principal',
      type: 'string',
      description: 'Ej: "Comenzar mi práctica"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Botón secundario',
      type: 'string',
      description: 'Ej: "Explorar programas"',
    }),
    defineField({
      name: 'bannerImage',
      title: 'Imagen de fondo del Hero',
      type: 'image',
      options: { hotspot: true },
      description: 'Imagen principal del Hero. Formato recomendado: 1920x1080px o superior.',
    }),
    defineField({
      name: 'youtubeVideoId',
      title: 'ID de video de YouTube (opcional)',
      type: 'string',
      description: 'Solo el ID, no la URL completa. Ej: "dQw4w9WgXcQ". Déjalo vacío si no quieres video.',
    }),
  ],
  preview: {
    select: { title: 'headlineEmotional' },
    prepare: ({ title }) => ({ title: '🌟 Hero', subtitle: title }),
  },
})
