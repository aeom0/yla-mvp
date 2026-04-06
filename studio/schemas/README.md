# Schemas de Sanity — Yoga con Lógica y Alma

> Generados en Fase 0-C. Alineados 1:1 con `src/data/content.ts`.

## Estructura

```
studio/schemas/
├── singletons/           # Documentos únicos — Yube edita in-place
│   ├── hero.ts           # Sección Hero (título, headline, CTA, imagen)
│   ├── about.ts          # Sobre Yube (bio, foto, quote, highlights)
│   ├── philosophy.ts     # Pilares Cuerpo / Mente / Alma
│   └── siteConfig.ts     # Redes sociales, footer, newsletter, comunidad
│
├── collections/          # Listas — Yube agrega / quita libremente
│   ├── product.ts        # Productos de la tienda
│   ├── program.ts        # Programas de transformación
│   ├── testimonial.ts    # Testimonios de alumnas
│   ├── faqItem.ts        # Preguntas frecuentes
│   └── classItem.ts      # Clases online
│
├── index.ts              # Exporta todos los schemas
└── README.md             # Este archivo
```

## Singletons vs Collections

| Tipo | Qué es | Ejemplo |
|------|--------|---------|
| **Singleton** | Documento único, siempre existe | El Hero, el About de Yube |
| **Collection** | Lista de items que Yube agrega/quita | Productos, testimonios, FAQ |

## Próximos pasos

1. Crear el proyecto Sanity: `npx sanity init` dentro de `/studio/`
2. Apuntar los schemas a este directorio
3. Migrar los datos de `content.ts` al dataset de Sanity
4. Reemplazar imports de `content.ts` por queries GROQ + ISR en Next.js
5. Configurar webhook Sanity → Vercel revalidate
6. Dar acceso a Yube al Studio con rol `editor`

## Convenciones importantes

- Los campos tienen `description` en español amigable — Yube los lee directamente
- Validaciones solo donde es crítico — no abrumar a Yube con errores
- El campo `order: number` en collections permite reordenar sin código
- `hidden` condicional en `price` cuando `isFree: true` (product.ts)
- `accent` en programs solo acepta `'lavender' | 'rose'` — sin tokens legacy
