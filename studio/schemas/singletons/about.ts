import { defineType, defineField } from 'sanity'

export const about = defineType({
  name: 'about',
  title: 'Sobre Yube — Sección About',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la sección',
      type: 'string',
      description: 'Ej: "Hola, soy Yube Karina"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'credential',
      title: 'Credencial oficial',
      type: 'string',
      description: 'Ej: "Ingeniera industrial de profesión. Instructora de yoga..."',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción principal',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'extended',
      title: 'Descripción extendida',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights personales',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de frases cortas. Ej: "Facilitadora de experiencias transformadoras"',
    }),
    defineField({
      name: 'quote',
      title: 'Cita personal de Yube',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'photo',
      title: 'Foto de Yube',
      type: 'image',
      options: { hotspot: true },
      description: 'Foto principal de Yube para la sección About. Vertical, buena iluminación.',
    }),
    defineField({
      name: 'welcomeVideoYoutubeId',
      title: 'ID del video de bienvenida (YouTube)',
      type: 'string',
      description: 'Solo el ID del video. Déjalo vacío si no quieres mostrar video.',
    }),
  ],
  preview: {
    select: { title: 'title', media: 'photo' },
    prepare: ({ title, media }) => ({ title: '🧘 ' + title, media }),
  },
})
