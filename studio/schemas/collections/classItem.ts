import { defineType, defineField } from 'sanity'

export const classItem = defineType({
  name: 'classItem',
  title: 'Clase online',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre de la clase',
      type: 'string',
      description: 'Ej: "Respira y Fluye"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción',
      type: 'text',
      rows: 2,
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'frequency',
      title: 'Frecuencia',
      type: 'string',
      description: 'Ej: "Semanal", "2x semana", "2x mes"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
  preview: {
    select: { title: 'name', subtitle: 'frequency' },
    prepare: ({ title, subtitle }) => ({
      title: '🧘 ' + title,
      subtitle,
    }),
  },
})
