import { defineType, defineField } from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Producto — Tienda',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nombre del producto',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      description: 'Se genera automáticamente desde el nombre. Ej: "camino-merecimiento"',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Categoría',
      type: 'string',
      options: {
        list: [
          { title: 'Cuaderno digital', value: 'cuaderno' },
          { title: 'Guía', value: 'guia' },
          { title: 'Audio', value: 'audio' },
          { title: 'Video', value: 'video' },
        ],
        layout: 'radio',
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'intention',
      title: 'Frase de intención',
      type: 'string',
      description: 'Frase corta y espiritual. Ej: "Recuérdate que mereces todo lo que deseas."',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descripción completa',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'isFree',
      title: '¿Es gratis?',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'price',
      title: 'Precio',
      type: 'string',
      description: 'Ej: "$8" o "$4.99". Dejar vacío si es gratis.',
      hidden: ({ document }) => !!document?.isFree,
    }),
    defineField({
      name: 'badge',
      title: 'Badge (etiqueta)',
      type: 'string',
      description: 'Ej: "Nuevo", "Gratis". Dejar vacío si no tiene.',
    }),
    defineField({
      name: 'image',
      title: 'Imagen del producto',
      type: 'image',
      options: { hotspot: true },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'payhipProductUrl',
      title: 'URL del producto en Payhip',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'includes',
      title: '¿Qué incluye?',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'Lista de lo que incluye el producto.',
    }),
    defineField({
      name: 'forWho',
      title: '¿Para quién es?',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'order',
      title: 'Orden de aparición',
      type: 'number',
      description: 'Número para ordenar los productos en la tienda. Menor = primero.',
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
    select: { title: 'title', subtitle: 'price', media: 'image', isFree: 'isFree' },
    prepare: ({ title, subtitle, media, isFree }) => ({
      title,
      subtitle: isFree ? '🎁 Gratis' : subtitle,
      media,
    }),
  },
})
