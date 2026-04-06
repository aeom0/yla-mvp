import { defineType, defineField } from 'sanity'

export const program = defineType({
  name: 'program',
  title: 'Programa de transformación',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del programa',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duración',
      type: 'string',
      description: 'Ej: "4 meses"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción corta (para la card)',
      type: 'string',
      validation: Rule => Rule.required().max(120),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline (para la ficha)',
      type: 'string',
      description: 'Frase corta que aparece en la página del programa.',
    }),
    defineField({
      name: 'stages',
      title: 'Etapas del programa',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Las 4 fases del programa. Ej: "Conectar", "Autoreconocimiento"...',
      validation: Rule => Rule.required().min(2),
    }),
    defineField({
      name: 'accent',
      title: 'Color de acento',
      type: 'string',
      options: {
        list: [
          { title: 'Lavanda (morado suave)', value: 'lavender' },
          { title: 'Rosa cuarzo', value: 'rose' },
        ],
        layout: 'radio',
      },
      initialValue: 'lavender',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'forWho',
      title: '¿Para quién es?',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'includes',
      title: '¿Qué incluye?',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'price',
      title: 'Precio (o texto)',
      type: 'string',
      description: 'Ej: "$150" o "Consultar precio"',
    }),
    defineField({
      name: 'ctaLabel',
      title: 'Texto del botón CTA',
      type: 'string',
      description: 'Ej: "Quiero saber más"',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Link del CTA',
      type: 'url',
      description: 'Ej: https://wa.me/584243547179',
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Orden de aparición',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'title', subtitle: 'duration' },
    prepare: ({ title, subtitle }) => ({
      title: '🌀 ' + title,
      subtitle,
    }),
  },
})
