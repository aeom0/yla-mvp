# Handoff para Cursor — Migración content.ts → Sanity

> Estado al: abril 2026. Studio ya funciona en localhost:3333.
> Esta tarea es autocontenida: leer, ejecutar, commitear.

---

## Contexto

- **Project ID Sanity:** `s6xwmbxz` · **Dataset:** `production`
- Todo el contenido actual vive en `src/data/content.ts`
- Los schemas de Sanity están en `studio/schemas/` — 1:1 con ese contenido
- **Objetivo:** poblar el dataset de Sanity con los datos de `content.ts` via script de migración

---

## Tarea — Ejecutar el script de migración

El script está en `studio/scripts/migrate-content.ts`.
Lo que hace: lee `src/data/content.ts` y sube cada documento al dataset usando el cliente de Sanity.

### Paso 1 — Instalar dependencia del script

```bash
cd studio
yarn add @sanity/client tsx --dev
```

(O ya está en el repo: basta con `yarn install` en `studio/`.)

### Paso 2 — Crear el .env si no existe

```bash
cp studio/.env.example studio/.env
```

Verificar que `.env` tenga:
```
SANITY_STUDIO_PROJECT_ID=s6xwmbxz
SANITY_STUDIO_DATASET=production
```

Además hace falta **`SANITY_API_TOKEN`** (token con permiso Editor en [sanity.io/manage](https://sanity.io/manage) para el proyecto `s6xwmbxz`). Puedes ponerlo en `studio/.env` o en la raíz en `.env.local` (el script `migrate:content` carga ambos).

### Paso 3 — Ejecutar el script

```bash
cd studio
yarn migrate:content
```

(Equivalente a `node --env-file=.env --env-file-if-exists=../.env.local …/tsx … scripts/migrate-content.ts`.)

Output esperado:
```
✓ hero creado
✓ about creado
✓ philosophy creado
✓ siteConfig creado
✓ product: posturas-gratis
✓ product: camino-merecimiento
✓ product: mandalas-abundancia
✓ product: abundancia-arte-recibir
✓ program: encuentra-tu-centro
✓ program: enraiza-te
✓ program: elogio-a-ti
✓ faqItem x5
✓ classItem x3
✓ testimonial x3
Migración completa.
```

### Paso 4 — Verificar en el Studio

Abrir `http://localhost:3333` y confirmar que cada sección tiene datos.

### Paso 5 — Commitear

```bash
cd ~/yla-mvp
git add studio/package.json studio/yarn.lock studio/.env.example studio/CURSOR_HANDOFF.md
git commit -m "feat(sanity): deps + script migrate:content (content.ts → dataset)"
git push
```

---

## Notas importantes

- El script usa `createOrReplace` — es idempotente, se puede correr N veces sin duplicar datos
- Los singletons usan `_id` fijo: `'hero'`, `'about'`, `'philosophy'`, `'siteConfig'`
- Las imágenes **no se migran** (son paths locales como `/hero-banner.jpeg`) — Yube las sube manualmente desde el Studio después
- Si el script falla con error de autenticación, hacer `cd studio && yarn sanity login` primero
- No modificar los schemas durante la migración

---

*Handoff generado por Claude. Ver ROADMAP.md para contexto completo.*
