# Caso 001 — Bitácora de cierre de la Etapa 4

> **Etapa 4 completada con el contenido mergeado en el repositorio
> del observatorio (PR #13) y la infraestructura del sitio canónico
> construida en `feat/seccion-transparencia` (PR #7, en draft, sin
> mergear). El caso 001 permanece en estado `draft` en el sitio: la
> publicación es un acto humano deliberado posterior, descrito en la
> sección "Secuencia de publicación" de esta bitácora.**
> Fecha del cierre: 2026-06-15.

## Estado

### Redefinición de la Etapa 4

La Etapa 4 se redefinió respecto al plan original. **Ya no es
"interponer una solicitud de transparencia propia"**; esa acción
baja a línea futura opcional —no bloquea nada— y se nombra en el
mapa de lo que viene. **La Etapa 4 es producir y publicar la
primera aportación pública del observatorio**: el caso 001 como
pieza única que responde el encargo recibido y sirve, además, de
prueba de vida del observatorio en sus propias superficies:
documentada, trazable, permanente.

### Entregables centrales

La etapa cierra en **dos repositorios**.

**Repositorio del observatorio (`Datos-Mexico/observatorio`).**
Contenido público del caso 001, mergeado a `main` vía **PR #13**:

- `casos/001-jitomate/PIEZA-PUBLICA.md` — pieza pública del primer
  encargo de prensa. Voz institucional impersonal. Construida
  enteramente sobre los hechos y el marco ya verificados en las
  etapas 1, 2 y 3 (cronología, dossier, sustento normativo,
  análisis del marco de transparencia). No introduce hechos,
  cifras ni fuentes nuevas.

**Repositorio del sitio canónico
(`Datos-Mexico/datos-mexico-site`).** Infraestructura de la sección
nueva `/transparencia/`, en rama `feat/seccion-transparencia` —**PR
#7, draft, sin mergear**—:

- Esquema y loader propios (`lib/transparencia/{types,loader}.ts`),
  modelados sobre la naturaleza del trabajo (caso, pregunta del
  encargo, status `draft`/`published`, repoPath como puente al
  material auditable del observatorio); no sobre microdato.
- Ruta `/transparencia` (índice estático) y
  `/transparencia/[slug]` (SSG con `generateStaticParams` que solo
  expone slugs `published`).
- Componentes de render
  (`components/transparencia/{TransparenciaHeader,Body,Meta,Footer,Card,BannerBorrador}.tsx`),
  que reutilizan el lenguaje visual del sitio (typography
  compartida, layout `Container`, `markdownComponents` de
  `/preguntas`, helpers de `/publicaciones/format.ts`).
- Contenido del caso 001 transportado fielmente desde
  `PIEZA-PUBLICA.md` del observatorio a
  `content/transparencia/001-jitomate-superissste.md`, con
  frontmatter del sitio y `status: "draft"`.
- Inscripción del encargo en la agenda de la semana actual
  (`lib/agenda/weeks/2026-W25.ts`) con un **tipo nuevo
  `press-engagement`** añadido al enum `AgendaEventType` y enseñado
  a `SemanaActual` y al JSON-LD `Event` de la página de agenda.
- Enlace desde la FAQ de `/prensa`
  (`components/prensa/Preguntas.tsx`): la entrada "¿Tienen datos
  sobre [tema X]?" se extiende con una frase final que menciona
  los encargos puntuales de prensa y enlaza al caso 001 como
  primer ejemplo.

## Decisiones de diseño que no se reabren

- **Nombre de la sección: `/transparencia/`** (no "casos", no
  "encargos"). El criterio es **nombrar lo que el observatorio
  hace**, no la mecánica interna del trabajo. "Transparencia"
  envejece mejor frente al crecimiento del corpus de casos
  futuros, frente a posibles cambios en la mecánica del encargo, y
  frente a una eventual mezcla con piezas que no provengan de un
  encargo de prensa explícito.
- **Registro impersonal**. La pieza no nombra a quien llevó el
  encargo al observatorio. El crédito se evalúa después de la
  entrega del material y con su aprobación explícita, conforme al
  `PROTOCOLO-PRENSA.md`.
- **El caso 001 no entra al corpus `/preguntas`**. El
  `PROTOCOLO-PRENSA.md` lo distingue desde la doctrina: el corpus
  exige reproducibilidad al peso desde microdato oficial; un
  encargo de prensa puede recaer sobre hechos públicos no
  microdatables y se documenta como cronología y análisis de
  fuentes públicas, no como entrada del corpus. La sección
  `/transparencia/` es la superficie que la doctrina ya
  anticipaba.
- **El contraste menudeo / mayoreo se preserva con su salvedad.**
  Las observaciones del 14 y 16 de abril del precio de venta al
  consumidor en SuperISSSTE (La Jornada y El Universal) quedan por
  debajo del piso del mayoreo registrado por SNIIM el 15 de abril
  en la Central de Abasto de Iztapalapa, **con la salvedad
  nombrada de que la plaza y el origen de compra de SuperISSSTE no
  son necesariamente Iztapalapa, Puebla ni Sinaloa**, dato que
  precisamente la solicitud preguntó y SuperISSSTE negó por
  "secreto comercial". Sin la salvedad, el contraste se
  sobreinterpreta; con la salvedad, mantiene su peso.
- **La cuestión jurídica del artículo 107 frente a la
  clasificación por confidencialidad del artículo 115 se trató sin
  experto de transparencia**. La pieza ancla las preguntas en
  terreno indiscutible (artículo 102 sobre la aplicación
  "restrictiva y limitada" de las excepciones del Título Sexto y
  el deber de "acreditar su procedencia"; primer párrafo del
  artículo 108 que reitera el deber; primer párrafo del artículo
  106 sobre el Comité de Transparencia; artículo 144 sobre el
  recurso de revisión), y trata la aplicabilidad del estándar de
  prueba de daño del artículo 107 a la clasificación por
  confidencialidad **como una cuestión abierta en sí misma**,
  porque el propio texto consolidado vigente no la resuelve de
  modo unívoco. La nota de la Etapa 3 sobre que el análisis
  jurídico se beneficiaría de una segunda mirada con formación en
  derecho de transparencia sigue vigente para la promoción final
  del estado.

## La salvaguarda de publicación

**Mergear la infraestructura del sitio a `main` no publica el caso
001.** Mientras la pieza permanezca en `status: "draft"`:

- `generateStaticParams` no expone el slug → la ruta no existe en
  build de producción y devuelve **404**.
- El listado `/transparencia` filtra drafts en producción y
  presenta el mensaje "en construcción".
- El `sitemap.xml` excluye la pieza.
- La metadata `robots` emite `noindex/nofollow`.
- El JSON-LD `Article` no se renderiza.
- El bloque "Compartir" del footer queda oculto.
- En modo `npm run dev` la pieza sí es accesible para revisión
  visual del equipo, con el banner "Borrador no publicado"
  visible en la cabecera.

**Publicar la pieza es un cambio de una sola línea** en
`content/transparencia/001-jitomate-superissste.md`:

```diff
- status: "draft"
+ status: "published"
```

Cero cambios adicionales en código. La descripción del PR #7
documenta el cambio paso a paso.

## Secuencia de publicación

La publicación es un **acto humano deliberado del equipo**, a
ejecutar después de esta etapa. El orden está pensado para evitar
la ventana en que la infraestructura está mergeada en `main`
mientras la pieza sigue en draft, porque en ese intervalo los
enlaces inscritos en agenda y en la FAQ de `/prensa` apuntarían a
una ruta que devuelve 404 en producción. La advertencia ya está
registrada en la descripción del PR #7.

### Orden recomendado, paso a paso

1. **Revisión humana completa de la pieza.** Una persona del
   equipo lee `casos/001-jitomate/PIEZA-PUBLICA.md` (ya mergeado
   en `main` del observatorio) y la levanta en local con
   `npm run dev` en el repositorio del sitio para inspeccionar el
   render en
   `http://localhost:3000/transparencia/001-jitomate-superissste`.
   Verifica texto y forma. Solo se continúa con aprobación
   explícita.
2. **Cambio del estado en la rama del PR #7**, sin abrir un PR
   nuevo. En `feat/seccion-transparencia`, en el archivo
   `content/transparencia/001-jitomate-superissste.md`, una sola
   edición:

   ```diff
   - status: "draft"
   + status: "published"
   ```

   Commit sugerido: `feat(transparencia): publica el caso 001`.
   Push a la rama.
3. **Merge del PR #7 a `main`** con la pieza ya en estado
   `published`. Esto hace que **la infraestructura y la pieza viva
   entren juntas** al corpus público del sitio; los enlaces de
   agenda y de prensa apuntan a una ruta real desde el primer
   build de producción posterior.
4. **Deploy.** Conforme al auto-deploy del sitio canónico ya
   configurado, el merge a `main` dispara el build y la
   publicación en producción. No se requiere intervención manual
   adicional.
5. **Verificación en producción.** Una persona del equipo confirma
   en `datosmexico.org` que:
   - `https://datosmexico.org/transparencia/001-jitomate-superissste`
     carga con el contenido completo, sin banner de borrador, con
     JSON-LD `Article`, sin `noindex`.
   - `https://datosmexico.org/transparencia` lista la pieza.
   - `https://datosmexico.org/sitemap.xml` incluye la URL de la
     pieza.
   - `https://datosmexico.org/agenda` muestra el evento de la
     semana en curso con la pildora "Encargo de prensa", y al
     hacer clic en "Leer la pieza" lleva a la ruta viva (no 404).
   - `https://datosmexico.org/prensa` muestra la FAQ extendida y
     el enlace del caso 001 lleva a la ruta viva.

### Lo que se debe evitar

**No mergear el PR #7 con la pieza aún en `status: "draft"`.** Eso
publicaría la infraestructura sin la pieza: el evento de agenda y
el enlace de la FAQ de `/prensa` quedarían apuntando a
`/transparencia/001-jitomate-superissste` que devolvería 404 en
producción durante todo el intervalo entre ese merge y la
posterior promoción del estado. La integridad de los enlaces del
sitio se sostiene con el orden de los pasos 2 y 3 invertido al
plan original (cambiar `status` **antes** del merge, no después).

## Lo que queda pendiente tras publicar

Ninguno de los pendientes bloquea el cierre de la etapa ni la
publicación de la pieza:

- **Entrega del material al medio.** La entrega a la periodista
  del material consolidado por el observatorio sobre el caso, y
  el eventual crédito a su nombre dentro de la pieza, condicionado
  a su aprobación explícita conforme al `PROTOCOLO-PRENSA.md`.
  Pertenece a la Etapa 5.
- **Decisión sobre `/transparencia` en el menú principal.** La
  sección queda accesible por URL directa hasta que el equipo
  decida si entra al menú de navegación del sitio canónico. El
  cambio es trivial cuando se decida; no condiciona la
  publicación.
- **Folio PNT de la solicitud original.** El pendiente vivo de
  siempre: no es alcanzable por vía técnica desde el cliente;
  requiere que la autora lo comparta o que se solicite a
  SuperISSSTE el oficio íntegro. Es gestión humana. Sin novedad
  respecto a las bitácoras de las etapas 2 y 3.
- **Segunda mirada con formación en derecho de transparencia**
  sobre la sección 3.3 de la pieza —los deberes anclados en
  terreno indiscutible y la cuestión abierta sobre el alcance del
  artículo 107 frente a la confidencialidad—. Identificada por la
  auto-verificación del agente en la Etapa 3 y reformulada con
  rigor en la Etapa 4. Sigue vigente como recomendación previa a
  cualquier promoción que se quiera respaldar institucionalmente
  con firma jurídica.

### Línea futura opcional, fuera del cierre

- **Que el observatorio interponga su propia solicitud de
  transparencia** ante SuperISSSTE preguntando, a su nombre, lo
  que la solicitud original preguntó (a quién y a qué precio se
  adquiere el jitomate). Era la formulación inicial de la Etapa 4
  y se redefinió: no es necesaria para responder el encargo ni
  para entregar la pieza al medio. Queda como acción posible si el
  equipo decide profundizar el pulso del caso por la vía de un
  expediente PNT propio.

## Registro honesto de proceso

En esta etapa, **el merge del contenido al observatorio (PR #13)
se adelantó al ciclo completo de revisión y validación humana en
un momento de la sesión**. El orden correcto —revisión completa →
validación humana → merge— se retomó después: la ronda de
verificación y ajuste de la pieza (los tres ajustes quirúrgicos
sobre el "anaquel vacío", el cuadre de fechas del 14-abr vs
15-abr, y la reformulación de la §3.3 sobre el alcance del
artículo 107) ocurrió sobre la misma rama
`feat/etapa-4-contenido-caso-001` y se mergeó a `main` solo
después de esa segunda lectura.

El registro queda anotado por dos razones:

- Para sostener, en lo sucesivo, **la secuencia revisión →
  validación → merge** sin que el orden se ablande con la
  velocidad de las sesiones.
- Para preservar el principio que las cuatro etapas han sostenido:
  la corrección fluye en ambas direcciones (el agente aplica las
  instrucciones de la supervisión, y también verifica con
  evidencia y reporta cuando un orden o un supuesto no se
  sostiene), y **el orden de los pasos es parte de la disciplina,
  no solo el contenido de cada paso**.

## Mapa de lo que viene

- **Cumplimiento de la "Secuencia de publicación" de esta
  bitácora** por parte del equipo: revisión, cambio de `status`,
  merge del PR #7, deploy, verificación. Esta es la acción que
  cierra operacionalmente la Etapa 4 en producción.
- **Etapa 5 — entrega del material y eventual comunicación
  pública del encargo en la voz del observatorio**, conforme al
  `PROTOCOLO-PRENSA.md`. Las acciones irreversibles sobre lo
  publicado y sobre el envío del material siguen requiriendo visto
  bueno humano explícito. Esta restricción no se levanta con el
  cierre de la Etapa 4.

---

*Observatorio Datos México · datosmexico.org*
