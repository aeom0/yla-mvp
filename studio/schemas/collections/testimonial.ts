import { defineType, defineField } from 'sanity'

export const testimonial = defineType({
  name: 'testimonial',
  title: 'Testimonio de alumna',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      description: 'Ej: "Mariana R."',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Rol / profesión',
      type: 'string',
      description: 'Ej: "Emprendedora", "Ingeniera", "Docente"',
    }),
    defineField({
      name: 'quote',
      title: 'Testimonio',
      type: 'text',
      rows: 3,
      description: 'Lo que dice la alumna. En sus propias palabras.',
      validation: Rule => Rule.required().max(300),
    }),
    defineField({
      name: 'photo',
      title: 'Foto (opcional)',
      type: 'image',
      options: { hotspot: true },
      description: 'Con permiso explícito de la alumna.',
    }),
    defineField({
      name: 'program',
      title: 'Programa relacionado (opcional)',
      type: 'reference',
      to: [{ type: 'program' }],
      description: 'Si el testimonio es de un programa específico.',
    }),
    defineField({
      name: 'featured',
      title: '¿Destacado en el landing?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
    }),
  ],
  orderings: [
    {
      title: 'Destacados primero',
      name: 'featuredFirst',
      by: [{ field: 'featured', direction: 'desc' }, { field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: { title: 'name', subtitle: 'quote', media: 'photo' },
    prepare: ({ title, subtitle, media }) => ({
      title: '💬 ' + title,
      subtitle: subtitle?.substring(0, 60) + '...',
      media,
    }),
  },
})
