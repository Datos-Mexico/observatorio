# Contexto operacional del repositorio

Este documento es contrato operacional persistente para las routines
institucionales del Observatorio Datos México que operan sobre este
repositorio. Su lectura es paso obligatorio antes de cualquier acción
de generación, planificación o mantenimiento del corpus.

El documento es complemento operacional de `MANIFESTO.md` y
`ARQUITECTURA-ARTICULOS.md`. La doctrina reside en aquellos; este
documento traduce doctrina a contrato funcional para las routines.

---

## 1. Identidad y rol del repositorio

El repositorio `Datos-Mexico/observatorio` cumple dos funciones
complementarias.

**Sede doctrinal del observatorio.** `MANIFESTO.md` y
`ARQUITECTURA-ARTICULOS.md` viven en este repositorio como artefactos
vivos. Cualquier divergencia entre lo que el repositorio declara y lo
que el resto del observatorio publica se resuelve en favor del
repositorio.

**Base operacional del corpus pregunta-respuesta.** Los artículos
generados del corpus viven aquí como archivos markdown versionados
bajo `preguntas/`. El sitio canónico del observatorio (datosmexico.org)
consume estos archivos como fuente de presentación; la verdad del
corpus reside en este repositorio.

---

## 2. Doctrina vinculante

Toda acción de las routines está sujeta a:

- `MANIFESTO.md`, especialmente §5 (cinco principios de trabajo
  académico), §6 (autoría humana exclusiva), §9 (compromisos
  permanentes con el lector).
- `ARQUITECTURA-ARTICULOS.md`, especialmente §2 (tipos snapshot y
  puente), §4 (política de dos estados), §5 (sensibilidad académica),
  §6 (coherencia con datos subyacentes), §9 (política de errata), §10
  (versionado del corpus).
- `SCHEMA.md`, contrato estructural del frontmatter de cada artículo.
- `CITACION.md`, formato canónico de citación del corpus.

Si una routine detecta tensión entre estos artefactos y su propio
diseño, pausa y emite reporte. No improvisa resolución.

---

## 3. Política de ramas

`main` es el corpus público auditable. Toda revisión de `main` es
estado citable del observatorio. Por construcción, `main` nunca
contiene trabajo incompleto.

`feat/*` son ramas de trabajo en progreso. Cada construcción de
artefactos o ingreso de artículos al corpus se realiza en branch
dedicada.

Régimen de Pull Requests: branch → PR → validación humana → merge.
Ningún commit llega a `main` sin pasar por PR validada. El régimen
aplica a todo contenido del repositorio.

---

## 4. Contrato funcional de la routine de generación

La routine de generación se especifica como contrato funcional. La
descripción es atemporal: la routine no presupone periodicidad ni
volumen de invocación.

**Input.** Una (1) pregunta candidata, con:

- texto literal de la pregunta en español
- clasificación preliminar de tipo temporal (`snapshot` | `puente`)
- clasificación preliminar de sensibilidad (`directa` | `sensible`)
- tema principal según taxonomía derivada de los ciclos abiertos del
  observatorio
- conjunto de datasets candidatos a utilizar

**Output.** Un (1) artículo markdown bajo `preguntas/{slug}.md`, con:

- frontmatter completo según `SCHEMA.md`, sin desviaciones de campo
  ni de tipo
- cuerpo según la plantilla aplicable en `templates/`

**Side effects.**

- creación del archivo `preguntas/{slug}.md`
- asignación de `id_canonico` único y nuevo (ULID)
- cómputo de `articulos_relacionados` a partir del corpus existente,
  con `mecanismo` declarado por cada enlace

**Reglas duras de la routine:**

- Frontmatter obligatorio según `SCHEMA.md`, sin desviaciones de tipo
  ni de estructura.
- Cero menciones de herramientas externas o sistemas generadores en
  el contenido del artículo. La trazabilidad de generación reside en
  el campo `generado_por_routine`, no en prosa.
- Cero auto-referencia al proceso de generación dentro del cuerpo del
  artículo.
- Cero anuncios prosódicos sobre disciplina académica del observatorio
  dentro del artículo. La disciplina se ejerce; no se proclama en cada
  pieza del corpus.
- Si emerge ambigüedad académica genuina durante generación
  —clasificación ambigua entre snapshot y puente, dataset con campos
  inconsistentes, definición de término sin fuente canónica clara—
  pausa, emite reporte y no produce artículo.

---

## 5. Contrato funcional de la routine de planificación

La routine de planificación se especifica como contrato funcional. La
descripción es atemporal: la routine no presupone periodicidad ni
volumen de invocación.

**Input.** Alcance de planificación, con:

- ciclo temático activo del observatorio
- gaps detectados en el corpus existente
- demanda externa registrada por los canales de comunicación
- datasets recién incorporados al SDK del observatorio

**Output.** Plan temático, con:

- lista priorizada de preguntas candidatas
- clasificación preliminar de cada pregunta (`tipo_temporal`,
  `sensibilidad`, `tags_tema_principal`, datasets candidatos)
- justificación académica de la priorización

**Side effects.** Ninguno sobre el repositorio. El plan es insumo para
la routine de generación, no artefacto del corpus.

---

## 6. Atemporalidad por diseño

Las routines del observatorio son contratos funcionales atemporales.

- La routine de generación procesa una (1) pregunta y produce un (1)
  artículo. Su contrato no incluye periodicidad.
- La routine de planificación procesa un alcance y produce un plan.
  Su contrato no incluye periodicidad.

La cadencia con la que las routines se invocan es configuración
operacional externa al diseño de las routines mismas. Cualquier
ajuste de cadencia se realiza en la configuración de invocación, sin
tocar contrato funcional ni doctrina.

Esta separación de concerns es no negociable: la routine define qué
hace; la configuración de invocación define cuándo se invoca.

---

## 7. Convenciones operacionales

### 7.1 Slug

Paráfrasis de la pregunta en minúsculas ASCII separadas por guiones.
Ejemplos:

- `cuantos-servidores-publicos-tiene-cdmx-actualmente`
- `donde-vive-la-persona-mas-lejos-de-un-hospital-publico`

El slug refleja la pregunta como un hablante natural la haría, no la
taxonomía interna del observatorio.

### 7.2 Identificador canónico

ULID (26 caracteres base32) asignado una sola vez en el momento de
generación. Inmutable bajo toda circunstancia, incluyendo errata,
reclasificación o renombrado del slug por corrección editorial.

### 7.3 Fechas

ISO 8601:

- Fechas: `YYYY-MM-DD`
- Datetimes: `YYYY-MM-DDTHH:MM:SSZ`

### 7.4 Versionado de artículo

`version: 1` en la creación. Incrementa en una unidad con cada errata
o regeneración estructural. La regeneración menor —cambios de datos
sin alterar estructura ni magnitudes cualitativas— actualiza
`fecha_ultima_actualizacion` y `marcas_temporales_puente` cuando
aplica, sin incrementar `version`
(`ARQUITECTURA-ARTICULOS.md` §6).

---

## 8. Protocolo de errata

Cuando una routine debe generar la siguiente versión de un artículo
existente:

1. Preservar el archivo actual en ubicación citable como versión
   anterior. La política específica de preservación se documentará en
   su propia ubicación cuando el primer caso de errata emerja
   operacionalmente.
2. Incrementar `version` en el archivo principal.
3. Actualizar `fecha_ultima_actualizacion`.
4. Poblar `errata_referencia` con la ubicación de la versión anterior
   preservada y el motivo de errata.
5. Actualizar el contenido sustantivo según el motivo de errata.
6. Si el motivo es errata metodológica o reclasificación, actualizar
   `estado` consistentemente (`errata-vigente` o
   `en-reclasificacion`).

El identificador canónico (`id_canonico`) nunca cambia entre
versiones. El historial completo queda preservado en el historial del
repositorio y en el archivo de versión anterior preservada.

---

## 9. Reglas duras invariantes

Las siguientes reglas aplican a toda routine que opere sobre este
repositorio, sin excepción.

1. **Coherencia doctrinal.** Cero acciones que contradigan
   `MANIFESTO.md`, `ARQUITECTURA-ARTICULOS.md` o `SCHEMA.md`.

2. **Schema fiel.** El frontmatter de cada artículo es exactamente lo
   que `SCHEMA.md` especifica. Ni campos extra, ni campos faltantes,
   ni tipos divergentes, ni transiciones de estado inválidas.

3. **Cero mención de herramientas.** El contenido de cualquier
   artículo del corpus no menciona herramientas externas ni sistemas
   generadores. La generación queda registrada en
   `generado_por_routine: true`, no en prosa del artículo.

4. **Cero auto-referencia defensiva.** El contenido de cualquier
   artículo no contiene anuncios prosódicos sobre rigor académico,
   disciplina del observatorio o compromisos institucionales. La
   disciplina se ejerce en la calidad del trabajo; no se proclama en
   cada pieza del corpus.

5. **Pausa ante ambigüedad.** Cuando una routine detecta ambigüedad
   académica genuina, pausa. Emite reporte. No improvisa resolución
   académica.

6. **Preservación de historial.** Ninguna routine sobrescribe
   artículos existentes. Toda corrección genera versión nueva con
   `errata_referencia` apuntando a la versión anterior preservada.

7. **Atribución correcta.** Los campos `revisor` y `fecha_firma` se
   pueblan únicamente cuando un humano firma efectivamente.
   Pre-firma deja ambos en `null`.

---

## 10. Sobre este documento

Este documento es artefacto vivo. Los cambios sustantivos requieren
PR con validación humana, como cualquier otra modificación del
repositorio.

Versión actual: 1.0
Fecha: 2026-06-02

---

*Observatorio Datos México · datosmexico.org*
