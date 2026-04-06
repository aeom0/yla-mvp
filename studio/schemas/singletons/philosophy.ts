import { defineType, defineField } from 'sanity'

export const philosophy = defineType({
  name: 'philosophy',
  title: 'Filosofía — Pilares Cuerpo / Mente / Alma',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'title',
      title: 'Título de la sección',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción del método',
      type: 'text',
      rows: 4,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'pillars',
      title: 'Pilares (siempre 3: Cuerpo, Mente, Alma)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Nombre del pilar', type: 'string', validation: Rule => Rule.required() }),
            defineField({ name: 'description', title: 'Descripción', type: 'text', rows: 2, validation: Rule => Rule.required() }),
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
      validation: Rule => Rule.length(3).error('Deben ser exactamente 3 pilares'),
    }),
    defineField({
      name: 'youtubeChannelHref',
      title: 'Link canal YouTube (pilar Cuerpo)',
      type: 'url',
    }),
  ],
  preview: {
    select: { title: 'title' },
    prepare: () => ({ title: '🌿 Filosofía — Pilares' }),
  },
})
