# Caso 001 — Incidente de producción y estado

> **Documento de incidente y estado. Cierra el ciclo iniciado en la
> Etapa 4 con la publicación intentada del caso 001 y deja
> establecida la condición para retomarlo en sesión nueva.**
> Fecha del registro: 2026-06-15.

## El incidente

El 2026-06-15, al ejecutar la "Secuencia de publicación" documentada
en `ETAPA-4-BITACORA.md` (cambio de `status: draft → published` en
el contenido del caso 001, merge del PR #7 del sitio canónico con
la infraestructura de `/transparencia/` y la pieza viva, y deploy
automático a producción), **producción comenzó a devolver `HTTP 500`
en `/transparencia/...`** inmediatamente tras el deploy.

La inspección de cobertura mostró que la regresión era más amplia
que el caso 001: **`/preguntas`, `/preguntas/[slug]` y `/sitemap.xml`
también estaban en 500**. Esa parte de la regresión era
**preexistente desde el merge del PR #6 del corpus
pregunta-respuesta**, vivo en `main` del sitio canónico durante
**trece días sin detectar**, porque ningún consumidor humano había
verificado esas rutas en producción real (el único artículo del
corpus —SAR, `pre-firma`— no había sido inspeccionado por nadie
desde un cliente público).

`/`, `/publicaciones`, `/agenda` y `/prensa` siguieron sanas.

## La causa, confirmada por runtime real

`wrangler tail` sobre el worker `datosmexico` capturó el error
literal en runtime:

```
Error: no such file or directory,
readdir '/bundle/.observatorio/preguntas'
```

Los loaders que leen el filesystem en runtime con `node:fs/promises`
(`readdir` + `readFile`) fallan en el runtime de Cloudflare Workers
servido por `@opennextjs/cloudflare`: **el filesystem no se
empaqueta en el bundle del worker**; los archivos fuente quedan
fuera del runtime accesible. `/preguntas` y `/transparencia/`
usaban ese patrón. `/sitemap.xml` lo arrastraba porque invocaba
los loaders de ambos.

`/publicaciones` no fallaba porque ya usa el patrón sano:
`registry.ts` con **imports estáticos de MDX**, empaquetados en el
bundle al build, sin filesystem en runtime.

## La resolución

### Estabilización (PR #8 del sitio, revert del PR #7)

Rollback inmediato del PR #7 para devolver producción a su estado
previo: `/transparencia/...` deja de existir (404 limpio, no 500);
`/`, `/publicaciones`, `/agenda` y `/prensa` siguen 200. El revert
no arregló `/preguntas` ni `/sitemap.xml`, cuya regresión vive
desde el PR #6, no desde el PR #7 — y eso quedó documentado en la
descripción del PR #8.

### Fix de raíz (PR #9 del sitio)

Migración del loader de `/preguntas` al patrón de registry
estático que ya usa `/publicaciones`. La lectura del filesystem se
mueve **de runtime a build-time**:

- Un script (`scripts/build-preguntas-registry.ts`) lee
  `.observatorio/preguntas/*.md` y `.observatorio/templates/banner-*.md`
  y los empaqueta como strings TypeScript en
  `lib/preguntas/registry.generated.ts` durante `npm run prebuild`.
- `lib/preguntas/loader.ts` deja de importar `node:fs/promises` y
  `node:path`. Importa `rawArticulos` y `rawBanners` del registry
  generado y parsea con `gray-matter` en memoria (manipulación de
  strings, no IO).
- La **interfaz pública** de las funciones consumidas por las
  páginas y el sitemap (`getAllArticulos`, `getArticuloPorSlug`,
  `getAllSlugs`, `getBannerCanonico`) **se preserva idéntica** en
  firma y semántica; los consumidores no se tocaron.
- La **validación dura del frontmatter se preserva intacta** —el
  corpus tiene esquema estricto y no se relaja.
- El **contenido del corpus, su esquema y su validación quedan sin
  tocar**. Solo cambia el mecanismo de carga.

### Verificación, ahora sí en runtime real

El fix se verificó en el **preview URL de Cloudflare Workers**
(runtime real, no `next start`) antes del merge:

```
https://fix-preguntas-loader-runtime-datosmexico.davidfernando.workers.dev
```

Todas las rutas críticas pasaron a 200 en el preview. Tras merge a
`main` y auto-deploy, la verificación se repitió contra
`https://datosmexico.org` (producción real). Resultado:

| Ruta | Antes (13 días) | Tras el fix |
|---|---|---|
| `/preguntas` | 500 | 200 |
| `/preguntas/cuantos-recursos-administra-el-sar-mexicano-actualmente` | 500 | 200 |
| `/sitemap.xml` | 500 | 200 |
| `/` | 200 | 200 |
| `/publicaciones` | 200 | 200 |

`/sitemap.xml` se sirve sin `x-robots-tag: noindex` en producción
(el header que sí lleva en preview es comportamiento del entorno
de preview de Cloudflare, no del código). El sitemap incluye la
pieza del SAR.

**Producción estabilizada por primera vez en trece días**, no por
suerte sino por anclar la verificación en el runtime real.

## La lección de proceso

El `npm run build` local y `npm run start` (Node) **no detectan**
este modo de fallo, porque Node tiene `fs` real. Solo el runtime
de Cloudflare Workers lo expone, y se exhibió en producción
después del merge. La señal que se construyó en la Etapa 4
("verificamos en `next start`, build pasa, todo OK") no era
suficiente.

De aquí en adelante, **toda publicación que toque el patrón de
carga de contenido del sitio se verifica en el preview URL de
Cloudflare antes del merge a `main`**, y se verifica en producción
real post-deploy. El build local y `next start` siguen siendo
útiles para detectar errores de compilación y de tipos, pero no
para certificar runtime.

### Cómo acceder al preview URL de Cloudflare Workers

1. **Habilitar el toggle.** Dashboard → Workers & Pages →
   `datosmexico` → Settings → Domains & Routes → activar el
   subdomain `workers.dev`. Por config del sitio, el subdomain
   está apagado por defecto (custom_domain único para tráfico
   público); habilitarlo es temporal y no expone tráfico real
   porque el público navega contra `datosmexico.org`.
2. **Formato del preview URL.** Por alias de rama, no por prefijo
   de versión:

   ```
   https://<rama-con-guiones>-datosmexico.davidfernando.workers.dev
   ```

   Cloudflare reemplaza `/` por `-` en el nombre de la rama. Para
   `fix/preguntas-loader-runtime` quedó
   `fix-preguntas-loader-runtime-datosmexico.davidfernando.workers.dev`.
   Si el alias excede el límite DNS o tiene caracteres no
   válidos, Cloudflare lo trunca o transforma; ajustar a lo que
   responda. El preview URL se sirve aun cuando workers.dev
   global esté apagado, mientras la versión exista en Cloudflare
   con `has_preview: true` (estado del build de la rama).
3. **Desactivar el toggle al terminar.** El subdomain `workers.dev`
   se vuelve a apagar después de la verificación, para mantener
   `datosmexico.org` como única superficie pública.

## Estado actual

- **Producción sana.** `/preguntas` y `/sitemap.xml` funcionando
  por primera vez desde el merge del PR #6. Las rutas que ya
  estaban sanas (`/`, `/publicaciones`, `/agenda`, `/prensa`)
  siguen sanas. Sin regresiones.
- **El caso 001 NO está publicado en el sitio canónico.** El
  contenido (`PIEZA-PUBLICA.md`) sigue en `main` del repositorio
  del observatorio sin cambios, pero la sección `/transparencia/`
  fue **revertida** en el sitio (PR #8) porque vivía sobre el
  mismo patrón de loader que falla en runtime.
- **El PR #9 (fix de `/preguntas`) está mergeado y vivo en
  `main`** del sitio canónico. La infraestructura sana del patrón
  de registry estático queda disponible para reutilizar.
- **El PR #7 sigue accesible en el historial de git** del sitio
  (commit del squash `ddc34e2`, ahora revertido). De ahí se
  puede recuperar la infraestructura de `/transparencia/`
  diseñada en la Etapa 4 (componentes, esquema, entrada de
  agenda con tipo `press-engagement`, enlace desde la FAQ de
  `/prensa`) sin rehacerla desde cero.

## Mapa de lo que viene

### Paso 2 — Reintroducir `/transparencia/` con el loader migrado

En sesión nueva:

1. Recuperar de `ddc34e2` la infraestructura de `/transparencia/`:
   esquema (`lib/transparencia/types.ts`), componentes
   (`components/transparencia/*`), rutas (`app/(marketing)/transparencia/{page,[slug]/page}.tsx`),
   contenido del caso 001 (`content/transparencia/001-jitomate-superissste.md`),
   entrada de agenda en `lib/agenda/weeks/2026-W25.ts` con el
   tipo `press-engagement`, modificación del enum en
   `lib/agenda/types.ts`, etiqueta en `SemanaActual.tsx`,
   inclusión en `publicTypes` del JSON-LD de la página de
   `/agenda`, y el enlace desde la FAQ de `/prensa`.
2. **Migrar `lib/transparencia/loader.ts`** al patrón de registry
   estático **antes del primer push**: un script
   `scripts/build-transparencia-registry.ts` análogo al de
   `/preguntas`, que empaquete `content/transparencia/*.md`
   como strings TypeScript en `lib/transparencia/registry.generated.ts`,
   y `prebuild`/`predev` que lo invoquen. La carga deja de tocar
   filesystem en runtime; el resto del esquema, los componentes
   y las páginas no requieren cambios. El contenido del caso 001
   se transporta fielmente desde el archivo del PR #7 sin
   reescritura (transporte ya validado en la Etapa 4).
3. **Verificar en el preview URL de Cloudflare** (toggle on,
   prueba contra `https://<rama>-datosmexico.davidfernando.workers.dev`
   las cinco rutas — `/transparencia`, `/transparencia/001-jitomate-superissste`,
   `/sitemap.xml`, `/preguntas`, `/publicaciones`).
4. **Solo entonces** publicar: con `status: published` y los
   enlaces de agenda y `/prensa` apuntando a una ruta viva desde
   el primer build, conforme a la secuencia documentada en
   `ETAPA-4-BITACORA.md` (revisión → cambio de status → merge →
   deploy → verificación en producción real).
5. **Desactivar el toggle de workers.dev** al terminar.

### Pendientes de fondo, sin cambios respecto a la Etapa 4

- **Entrega del material a la periodista y eventual crédito a su
  nombre** dentro de la pieza, condicionado a su aprobación
  explícita conforme al `PROTOCOLO-PRENSA.md`. Pertenece a la
  Etapa 5 y se ejecuta después de la publicación.
- **Decisión sobre `/transparencia` en el menú principal de
  navegación.** Trivial cuando se decida; no condiciona la
  publicación.
- **Folio PNT de la solicitud original.** Pendiente vivo desde
  la Etapa 2. No es alcanzable por vía técnica; requiere que la
  autora lo comparta o que se solicite a SuperISSSTE el oficio
  íntegro. Es gestión humana.
- **Segunda mirada con formación en derecho de transparencia**
  sobre la sección 3.3 de la pieza (alcance del artículo 107
  frente a la confidencialidad del 115). Identificada en la
  auto-verificación de la Etapa 3 y reformulada en la Etapa 4.
  Sigue vigente como recomendación previa a la firma
  institucional.

### Línea futura opcional, fuera del cierre

- **Que el observatorio interponga su propia solicitud de
  transparencia** ante SuperISSSTE. Era la formulación inicial
  de la Etapa 4 y se redefinió en la Etapa 4 misma; no es
  necesaria para responder el encargo ni para entregar la pieza
  al medio. Sigue disponible como acción posible si el equipo
  decide profundizar el pulso del caso.

---

*Observatorio Datos México · datosmexico.org*
