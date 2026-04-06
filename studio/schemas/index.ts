// Singletons — documentos únicos editados in-place
import { hero } from './singletons/hero'
import { about } from './singletons/about'
import { philosophy } from './singletons/philosophy'
import { siteConfig } from './singletons/siteConfig'

// Collections — listas que Yube puede agregar / quitar
import { product } from './collections/product'
import { program } from './collections/program'
import { testimonial } from './collections/testimonial'
import { faqItem } from './collections/faqItem'
import { classItem } from './collections/classItem'

export const schemaTypes = [
  // Singletons primero (aparecen arriba en el Studio)
  hero,
  about,
  philosophy,
  siteConfig,
  // Collections
  product,
  program,
  testimonial,
  faqItem,
  classItem,
]
