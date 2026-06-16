# Caso 001 — Incidente de rendimiento (CPU/1102) y deuda pendiente

> **Documento de incidente. Segundo incidente sobre el sitio canónico
> posterior a la publicación del caso 001 y a la entrada de la
> sección de navegación. Cierra el ciclo del fix de CPU y deja
> nombrada la deuda pendiente para una fase posterior.**
> Fecha del registro: 2026-06-15.

## El síntoma

Tras publicar el caso 001 (`/transparencia/001-jitomate-superissste`)
y dar visibilidad a la sección con la entrada al menú de navegación
y la card en el home, producción comenzó a devolver
**`Error 1102 — Worker exceeded resource limits`** de forma
intermitente al abrir la pieza del caso 001 y otras rutas de
contenido. Un refresh a veces resolvía la página; otras veces el
error persistía. Una primera aparición se confundió con caché del
navegador y se descartó tras un hard refresh, pero el patrón
volvió a reproducirse bajo navegación normal.

Rutas afectadas observadas en el log: `/transparencia/001-jitomate-superissste`,
`/publicaciones`, `/publicaciones/[slug]`, `/publicaciones/categoria/[slug]`
(las tres categorías), `/preguntas/[slug]`. Rutas que no aparecían
tronando: las estáticas simples (`/`, `/metodologia`, `/prensa`,
`/quienes-somos`, `/contacto`).

## La causa, confirmada por logs

`wrangler tail` sobre el worker de producción capturó el error
literal:

```
Worker exceeded CPU time limit
```

El sitio corre sobre **Cloudflare Workers en el plan free**, con un
límite de aproximadamente **10ms de CPU por invocación**. Las rutas
de contenido excedían ese presupuesto en cada request:

1. **Markdown parseado en runtime**. `/transparencia/[slug]` y
   `/preguntas/[slug]` ejecutaban `react-markdown` + `remark-gfm`
   con un set de `markdownComponents` custom en cada render del
   servidor. El cuerpo del caso 001 (~22 KB de markdown) sumaba
   decenas de ms de CPU por sí solo. Los pre-firma de `/preguntas`
   añadían su propio banner pre-renderizado por la misma vía.
2. **Fetch SSR a API externa en publicaciones**. `/publicaciones/[slug]`
   embebía componentes `<Visualization>` que, dentro del MDX, hacían
   `fetch` server-side a `api.datos-itam.org` —varios endpoints,
   secuenciales— durante el render.
3. **Multiplicador por prefetch del nav**. El menú creció a 9 ítems
   con la entrada de Transparencia. Los `<Link>` de Next.js disparan
   **prefetch RSC** por defecto al entrar al viewport: cualquier
   page-load disparaba precargas concurrentes de hasta 9 rutas, todas
   en el mismo isolate. La concurrencia las hacía competir por el
   presupuesto de CPU compartido.
4. **Sin incremental cache**. `open-next.config.ts` era el default
   vacío, sin adapter de KV/R2. Cada `?_rsc=` regeneraba el payload
   desde cero —el render caro se pagaba en cada hit, sin
   reutilización entre requests—.

## La decisión de método

Se evaluaron dos caminos:

- **(a) Configurar incremental cache** (KV) para **tolerar** el render
  caro, manteniendo el parseo en runtime pero cacheando el resultado.
- **(b) Eliminar el render caro** moviéndolo del runtime al build,
  con el runtime sirviendo HTML pre-renderizado.

Se eligió **(b) — la cura de fondo**. Razones:

- El problema no era falta de presupuesto del worker; era render
  desperdiciado en runtime. Cachear el render caro estabilizaría el
  síntoma pero conservaría el coste y la fragilidad.
- (b) no añade infraestructura nueva al sitio (sin KV, sin
  bindings, sin lógica de invalidación).
- Decisión explícita de **no pagar el plan de Workers**: el sitio
  debe servirse casi-estáticamente. Si el render runtime fuera
  necesario, eso sería una pista de mal diseño, no un argumento para
  pagar más recursos.

Una rama de fase 1 con (a) (KV + binding) se preparó parcialmente y
se descartó antes de pushear cuando la decisión cambió a (b).

## El fix

Tres cambios coordinados en el repo del sitio canónico, sobre la
rama `fix/cpu-preparse-markdown`, mergeada a `main` como squash en
el commit `915b53c` (PR #13 del sitio):

1. **Pre-parseo de markdown en build**.
   `scripts/build-transparencia-registry.ts` y
   `scripts/build-preguntas-registry.ts` corren `renderToString` de
   `react-dom/server` con los **mismos `markdownComponents` que el
   runtime usaba**, empaquetando HTML pre-renderizado en los
   `registry.generated.ts` correspondientes. Los componentes
   `TransparenciaBody`, `ArticuloBody` y `ArticuloBanner` pasaron a
   inyectar con `dangerouslySetInnerHTML`. El render queda
   bit-idéntico al anterior —misma función, mismo árbol, solo
   invocada antes—.

2. **Sanitización en build** con `sanitize-html` (devDependency, no
   llega al bundle del worker). Allowlist estricto que preserva los
   elementos y atributos que el render legítimo produce (tags
   markdown estándar + `div`/`span` para los wrappers + `class`,
   `href`, `target`, `rel`) y elimina cualquier cosa fuera del
   allowlist (scripts, event handlers inline, iframes, imágenes).
   Salvaguarda ante el `dangerouslySetInnerHTML`: el HTML que llega
   al runtime ya pasó por un allowlist al build, así el corpus crezca
   con contenido nuevo. Contenido legítimo verificado bit-igual tras
   sanitizar; un único `<!-- -->` (marcador vacío de React) se
   elimina del caso 001 sin efecto visual.

3. **`prefetch={false}` en los `<Link>` del nav** (`Header.tsx` y
   `Footer.tsx`). Corta el multiplicador de concurrencia: cargar una
   página deja de disparar precarga RSC paralela a las 9 rutas. La
   navegación al click sigue siendo rápida (Next carga al momento);
   solo se elimina la precarga especulativa que saturaba el worker
   en idle.

## La verificación

### En preview de Cloudflare Workers (runtime real)

- **150/150 hits** a las rutas de markdown (`/transparencia/[slug]`,
  `/preguntas/[slug]`) bajo **50 conexiones concurrentes × 5 ráfagas
  sostenidas**. Cero 1102, cero 5xx, cero timeouts.
- Render verificado bit-idéntico al anterior: mismas clases Tailwind
  (`<h2 class="font-serif ... text-[26px] ... mt-12">`,
  `<p class="font-sans ...">`, `<a target="_blank" rel="noopener noreferrer">`,
  `<hr class="my-10 border-t border-border"/>` en formato exacto,
  inline `<code>` con clases Mono, etc.). Sin diferencia visual.

### En producción real tras merge a `main` (deploy del `915b53c`)

- **50/50 hits** bajo carga moderada (25 conexiones concurrentes × 2
  ráfagas) repartidos entre las rutas de markdown y publicaciones.
  Cero 1102.
- Cabeceras limpias en producción: `x-powered-by: Next.js`,
  `x-opennext: 1`, sin `x-robots-tag: noindex` (ese header era
  artefacto del entorno de preview, no del código).
- Sin regresiones: `/`, `/transparencia`, `/publicaciones`,
  `/preguntas`, `/agenda`, `/prensa`, `/sitemap.xml` siguen 200.

El 1102 dejó de aparecer en producción bajo la forma de
concurrencia que antes lo disparaba con fiabilidad.

## La deuda pendiente — fase 3, no resuelta

`<Visualization>` en `/publicaciones/[slug]` sigue haciendo
`fetch` server-side a `api.datos-itam.org` en runtime, en cada
render del MDX. **No se tocó en este fix.**

Bajo la prueba de carga del preview y la producción, las rutas de
publicaciones aguantaron sin tronar. Esa es una victoria **por
efecto colateral, no por cura**:

- El `prefetch={false}` bajó la concurrencia base que llegaba al
  worker.
- Sin los renders de markdown caros compitiendo por el mismo CPU del
  isolate, las publicaciones tuvieron más presupuesto disponible.
- El cache de `fetch` per-isolate, aunque corto, alcanza para
  ráfagas que comparten isolate.

Bajo patrones de tráfico distintos —isolates fríos repetidos, carga
desde múltiples regiones simultáneamente, crecimiento del corpus de
publicaciones con visualizations más numerosas, picos no
ensayados— el problema puede reaparecer en `/publicaciones/[slug]`.

La fase 3 pendiente, con el mismo método (diagnóstico contra el
código, decisión de fondo, verificación bajo carga en preview,
deploy verificado contra producción):

- **Mover el fetch de la API a build-time**: snapshot estático de
  los datos que `<Visualization>` consume, empaquetado como JSON
  importable. La API sigue siendo la fuente; el snapshot se
  regenera al build. Pierde frescura entre builds pero gana CPU.
- **O convertir `<Visualization>` a client-side** (`"use client"`):
  el fetch se hace desde el navegador, no desde el worker. Pierde
  SSR para los charts pero descarga el coste del worker. Coherente
  con que los charts mismos ya son `"use client"`
  (`recharts` requiere DOM).

La decisión entre snapshot estático y client-side se toma cuando se
arranque la fase 3, con criterio editorial sobre frescura de los
datos.

## Lección de proceso

- `curl` simple a una ruta no detecta el 1102 —es un problema de
  **concurrencia**, no de petición suelta—. Una sola petición a
  `/transparencia/001-jitomate-superissste` siempre devuelve 200; el
  error solo emerge cuando varias renders compiten en el mismo
  isolate. **La verificación de rendimiento requiere prueba de carga
  concurrente en el preview**, no `curl -i` aislado.
- El plan free de Cloudflare Workers impone **~10ms de CPU por
  invocación**. Sirve para sitios que se entregan casi-estáticamente
  desde assets, con el worker haciendo trabajo mínimo. Cualquier
  render no trivial en runtime —parseo de markdown, fetch SSR a APIs
  externas, transformación de datos no preparados— excede ese
  presupuesto y obliga a una de dos: pagar el plan, o mover el
  trabajo al build. El observatorio eligió la segunda como regla
  de diseño.
- El build local (`npm run build` + `next start`) **no certifica
  rendimiento del runtime de Cloudflare Workers**, igual que en el
  incidente del filesystem (`INCIDENTE-Y-ESTADO.md`): el build pasa
  porque Node sirve la página; el límite de 10ms no se aplica en
  local. La señal real es el preview de Cloudflare bajo carga.

---

*Observatorio Datos México · datosmexico.org*
