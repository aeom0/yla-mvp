import { defineConfig, type DocumentActionsResolver } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

// Singletons — documentos únicos, no listas
const singletonTypes = ['hero', 'about', 'philosophy', 'siteConfig'] as const

const singletonActions: DocumentActionsResolver = (prev, context) => {
  const st = context.schemaType as string | { name: string }
  const typeName = typeof st === 'string' ? st : st.name
  return (singletonTypes as readonly string[]).includes(typeName)
    ? prev.filter(({ action }) => action !== 'duplicate' && action !== 'delete')
    : prev
}

export default defineConfig({
  name: 'yla-studio',
  title: 'Yoga con Lógica y Alma',

  projectId: 's6xwmbxz',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Contenido')
          .items([
            // --- Singletons ---
            S.listItem()
              .title('🌟 Hero — Sección principal')
              .child(S.document().schemaType('hero').documentId('hero')),
            S.listItem()
              .title('🧘 Sobre Yube')
              .child(S.document().schemaType('about').documentId('about')),
            S.listItem()
              .title('🌿 Filosofía — Pilares')
              .child(S.document().schemaType('philosophy').documentId('philosophy')),
            S.listItem()
              .title('⚙️ Configuración del sitio')
              .child(S.document().schemaType('siteConfig').documentId('siteConfig')),

            S.divider(),

            // --- Collections ---
            S.documentTypeListItem('product').title('🛍️ Productos — Tienda'),
            S.documentTypeListItem('program').title('🌀 Programas'),
            S.documentTypeListItem('testimonial').title('💬 Testimonios'),
            S.documentTypeListItem('faqItem').title('❓ Preguntas frecuentes'),
            S.documentTypeListItem('classItem').title('🧘 Clases online'),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(
        ({ schemaType }) => !(singletonTypes as readonly string[]).includes(schemaType)
      ),
  },

  document: {
    actions: singletonActions,
  },
})
