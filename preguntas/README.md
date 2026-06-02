# Corpus pregunta-respuesta del Observatorio Datos México

Este directorio aloja el corpus pregunta-respuesta del observatorio.
Cada archivo `{slug}.md` es un artículo del corpus: una pregunta
concreta sobre el aparato público o las realidades cuantificables de
México, respondida con datos oficiales, metodología transparente y
respaldo académico verificable.

El corpus crece por incorporación de artículos individuales que
responden, una a una, preguntas concretas relevantes a los ciclos
temáticos abiertos del observatorio (`MANIFESTO.md` §3). La
arquitectura doctrinal del corpus está documentada en
`ARQUITECTURA-ARTICULOS.md` en la raíz del repositorio.

---

## Cómo leer un artículo

Cada artículo se compone de tres elementos visibles.

**Frontmatter YAML.** Bloque al inicio del archivo. Contiene la
clasificación, autoría, datasets, metodología, tags y trazabilidad
del artículo. La especificación completa del frontmatter vive en
`SCHEMA.md`.

**Banner de estado, cuando aplica.** Texto institucional que declara
el estado vigente del artículo. El sitio canónico inserta el banner
correspondiente según el campo `estado` del frontmatter. El copy
canónico de cada banner reside en `templates/banner-*.md`.

**Cuerpo del artículo.** Respuesta a la pregunta, datos utilizados,
metodología reproducible, caveats e incertidumbre declarada,
referencias al paper de ciclo cuando aplique, y enlaces a artículos
relacionados del corpus.

---

## Estados de un artículo

Los estados publicables del corpus están definidos en
`ARQUITECTURA-ARTICULOS.md` §4, §6 y §9. En síntesis:

- `pre-firma`: artículo publicado bajo responsabilidad institucional
  colectiva del observatorio, pendiente de firma humana. El
  observatorio se compromete públicamente a completar la firma en un
  máximo de siete días corridos.
- `firmada`: artículo bajo responsabilidad académica individual del
  revisor humano firmante.
- `en-re-revision`: el dataset subyacente cambió estructuralmente y
  el artículo está en auditoría de la versión nueva.
- `en-reclasificacion`: artículo identificado retroactivamente como
  sensible y en protocolo de reclasificación.
- `errata-vigente`: artículo con errata publicada; la versión
  anterior queda preservada y citable.

El estado vigente del artículo es visible en su frontmatter y en el
banner correspondiente cuando el sitio canónico lo renderiza.

---

## Citación

El formato canónico de citación de artículos del corpus está
documentado en `CITACION.md` en la raíz del repositorio.

En síntesis: los artículos en estado pre-firma se citan bajo
responsabilidad colectiva ("Equipo de Datos México"); los artículos
firmados se citan bajo el nombre del revisor humano firmante. La
versión específica del artículo y su identificador canónico se
incluyen en toda cita.

---

## Cómo reportar un error o sugerir una errata

Cualquier lector que detecte un error metodológico, una desviación de
los datos respecto de la fuente oficial, o una interpretación que
considere incorrecta, puede reportarlo por los canales de
comunicación del observatorio o abriendo un Issue en este
repositorio.

La política de errata del observatorio está documentada en
`ARQUITECTURA-ARTICULOS.md` §9. El observatorio prefiere transparencia
sobre el error a ocultamiento: toda errata queda registrada
visiblemente y la versión anterior del artículo queda preservada y
citable.

---

## Cómo proponer una pregunta nueva

El observatorio recibe sugerencias de preguntas por parte del público.
Las propuestas pueden enviarse por los canales de comunicación del
observatorio o abriendo un Issue en este repositorio con la pregunta
candidata y, cuando sea posible, los datasets oficiales que el
proponente considera relevantes.

La incorporación de la pregunta al corpus depende de su pertenencia a
algún ciclo temático abierto del observatorio o, eventualmente, de la
apertura de un nuevo ciclo.

---

## Sobre la producción del corpus

La responsabilidad académica final sobre el contenido de cada
artículo en estado firmado reside, por construcción, en el revisor
humano firmante (`MANIFESTO.md` §6, `ARQUITECTURA-ARTICULOS.md` §4).

Antes de la firma humana, el artículo se publica bajo responsabilidad
institucional colectiva del observatorio, según la política de dos
estados articulada en `ARQUITECTURA-ARTICULOS.md` §4.

---

*Observatorio Datos México · datosmexico.org*
