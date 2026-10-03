# Omar Calvario — Portfolio

Portfolio profesional construido con Next.js App Router, React, TypeScript, Tailwind CSS v4, Motion, MDX y Lucide.

## Desarrollo

```bash
npm install
npm run dev
```

## Contenido

Los case studies viven en `content/projects/*.mdx`. Cada archivo combina frontmatter (título, categoría, rol, herramientas, imagen y orden) con contenido MDX para el caso. Los campos entre corchetes son lugares editables para completar solo con información confirmada.

Las imágenes se guardan en `public/images/<proyecto>/`. El portfolio muestra un marcador editorial identificable mientras no exista una imagen de portada y usa `next/image` cuando se agrega el archivo indicado por `coverImage`.

## Edición de medios y casos

La paleta se define en `app/globals.css`, con variantes claras y oscuras según la preferencia del sistema. Geist y los acentos serif se conservan.

Los seis casos incluyen `demo: true` en su frontmatter. El contenido demostrativo se edita en `lib/demo-studies.ts` y está identificado públicamente como ejemplo. Para publicar un caso documentado, cambia a `demo: false` y completa el cuerpo del MDX. No se han agregado métricas ni testimonios ficticios.

Las fotografías remotas de Picsum son muestras editoriales, no screenshots de los proyectos. Para sustituir una portada, agrega `public/images/<proyecto>/cover.webp` y actualiza `coverImage` si utilizas otro nombre. Reinicia desarrollo o vuelve a desplegar después de agregar archivos.

Dentro de un MDX con `demo: false` puedes usar:

```mdx
<ProjectMedia src="/images/saia/pantalla.webp" alt="Pantalla de usuarios" caption="Vista de administración" />

<ProjectMedia kind="video" src="/images/saia/recorrido.mp4" poster="/images/saia/poster.webp" alt="Recorrido del prototipo" />

<ProjectMedia kind="gif" src="/images/saia/interaccion.gif" poster="/images/saia/poster.webp" alt="Interacción del menú" />

<Experiment />
```

Estos nombres de archivo son ejemplos; agrega tus archivos antes de usarlos. Los videos usan controles nativos sin autoplay. Los GIF se reproducen bajo demanda y pueden detenerse. Para video con narración, prepara también subtítulos. Las demos de código viven en `components/experiment.tsx`; GSAP limpia las animaciones al desmontar y respeta movimiento reducido. El parallax se limita a escritorio.

Los proyectos secundarios se editan en `lib/archive.ts`. El archivo visual y el workflow de IA están en `components/portfolio-extras.tsx`.

## Despliegue

1. Importa este repositorio desde **vercel.com/new**.
2. Conserva la configuración detectada de Next.js y haz clic en **Deploy**.
3. Vercel desplegará automáticamente cada push a la rama conectada y creará previews para las demás ramas.

No requiere una carpeta de salida personalizada ni variables para compilar. Si conectas un dominio propio, configura `NEXT_PUBLIC_SITE_URL` en Vercel con su URL completa (por ejemplo, `https://tudominio.com`) para actualizar metadata, sitemap y robots. Si no defines esa variable, se usa el dominio de producción de Vercel.
