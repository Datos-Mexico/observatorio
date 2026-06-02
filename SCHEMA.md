# Schema del corpus pregunta-respuesta

Este documento es la especificación canónica del frontmatter YAML de
cada artículo del corpus pregunta-respuesta del Observatorio Datos
México.

Es complemento operacional de `MANIFESTO.md` y
`ARQUITECTURA-ARTICULOS.md`. La doctrina reside en aquellos; este
documento la traduce a contrato estructural verificable.

El sitio canónico del observatorio consume este schema como contrato
de ingesta. Cualquier divergencia entre el frontmatter de un artículo
y este schema es error que debe corregirse antes de publicación.

---

## 1. Propósito y autoridad

El schema cumple dos funciones complementarias.

**Contrato estructural.** Define qué campos componen el frontmatter de
un artículo, qué tipos aceptan y qué combinaciones son válidas. Es la
única fuente de verdad sobre la estructura del frontmatter.

**Puente entre doctrina y operación.** Cada campo del schema responde
a una decisión doctrinal articulada en `MANIFESTO.md` o
`ARQUITECTURA-ARTICULOS.md`. La sección 2 documenta el mapeo
explícito.

---

## 2. Coherencia con doctrina

Mapeo entre campos del schema y secciones doctrinales que los
justifican:

| Campo | Sección doctrinal |
|-------|-------------------|
| `tipo_temporal` | ARQUITECTURA-ARTICULOS §2 |
| `sensibilidad` | ARQUITECTURA-ARTICULOS §5 |
| `estado` | ARQUITECTURA-ARTICULOS §4, §6, §9 |
| `sla_dias_restantes` | ARQUITECTURA-ARTICULOS §4 |
| `revisor`, `fecha_firma` | ARQUITECTURA-ARTICULOS §3, §4 |
| `datasets` | MANIFESTO §5 (trazabilidad), ARQUITECTURA-ARTICULOS §6 |
| `metodo`, `caveats` | MANIFESTO §5 (transparencia, honestidad sobre incertidumbre) |
| `tags_*` | ARQUITECTURA-ARTICULOS §8 |
| `paper_ciclo`, `estado_metodologia` | ARQUITECTURA-ARTICULOS §7 |
| `articulos_relacionados[].mecanismo` | ARQUITECTURA-ARTICULOS §8 |
| `marcas_temporales_puente` | ARQUITECTURA-ARTICULOS §6 |
| `definiciones_contestables` | ARQUITECTURA-ARTICULOS §5 |
| `errata_referencia` | ARQUITECTURA-ARTICULOS §9 |
| `id_canonico`, `version` | ARQUITECTURA-ARTICULOS §10 |

---

## 3. Especificación campo por campo

### 3.1 Identidad

#### `slug`
- Tipo: string
- Formato: minúsculas ASCII separadas por guiones
- Convención: paráfrasis de la pregunta como un hablante natural la
  haría
- Ejemplo: `cuantos-servidores-publicos-tiene-cdmx-actualmente`
- Mutabilidad: puede actualizarse por corrección editorial. La
  permanencia citable la garantiza `id_canonico`.

#### `id_canonico`
- Tipo: string (ULID)
- Formato: 26 caracteres base32 según especificación ULID
- Asignación: una sola vez en el momento de generación
- Inmutable bajo toda circunstancia, incluyendo errata,
  reclasificación o renombrado del slug
- Justificación: garantiza citabilidad reproducible incluso si el slug
  muta editorialmente (ARQUITECTURA-ARTICULOS §10)

#### `pregunta`
- Tipo: string
- Contenido: pregunta literal en español, en la forma que un hablante
  natural la haría
- Signos de interrogación de apertura y cierre obligatorios

#### `version`
- Tipo: integer
- Valor inicial: 1
- Incremento: +1 con cada errata o regeneración estructural
- Coherencia: `errata_referencia` aparece si y solo si `version > 1`

#### `fecha_creacion`
- Tipo: ISO 8601 date (`YYYY-MM-DD`)
- Inmutable tras asignación

#### `fecha_ultima_actualizacion`
- Tipo: ISO 8601 date
- Se actualiza con cada incremento de `version` y con cada
  regeneración menor (ARQUITECTURA-ARTICULOS §6)

### 3.2 Clasificación

#### `tipo_temporal`
- Tipo: enum
- Valores: `snapshot` | `puente`
- Inmutable durante la vida útil del artículo
  (ARQUITECTURA-ARTICULOS §2)

#### `sensibilidad`
- Tipo: enum
- Valores: `directa` | `sensible`
- Determina el flujo de publicación: directa permite publicación
  pre-firma; sensible exige review-first
  (ARQUITECTURA-ARTICULOS §5)

#### `estado`
- Tipo: enum
- Valores:
  - `pre-firma`: publicado bajo responsabilidad institucional
    colectiva, pendiente de firma humana
  - `firmada`: revisor humano ha firmado; responsabilidad académica
    individual asumida
  - `en-re-revision`: dataset subyacente cambió estructuralmente, en
    auditoría de versión nueva (ARQUITECTURA-ARTICULOS §6)
  - `en-reclasificacion`: identificado retroactivamente como
    sensible, en protocolo de reclasificación
    (ARQUITECTURA-ARTICULOS §9)
  - `errata-vigente`: artículo con errata publicada; la versión
    anterior queda preservada y citable

#### `sla_dias_restantes`
- Tipo: integer | null
- Presente solo si `estado == "pre-firma"`
- Rango: el SLA institucional es de siete días corridos. Valores
  negativos indican SLA incumplido y se exhiben públicamente sin
  ocultar (ARQUITECTURA-ARTICULOS §4)

### 3.3 Autoría

#### `revisor`
- Tipo: string | null
- `null` si `estado == "pre-firma"`
- Nombre completo del revisor humano en estados posteriores

#### `fecha_firma`
- Tipo: ISO 8601 date | null
- `null` si `estado == "pre-firma"`
- Fecha de firma en estados posteriores

### 3.4 Datasets

#### `datasets`
- Tipo: lista de objetos
- Cada objeto contiene:
  - `nombre`: string. Nombre canónico según catálogo del observatorio
  - `version_captura`: string. Identificador de versión publicado por
    la fuente oficial (fecha, número de release, hash, según fuente)
  - `url_fuente`: string (URL). URL canónica de la fuente oficial

### 3.5 Metodología

#### `metodo`
- Tipo: string
- Contenido: descripción reproducible del cómputo aplicado, en prosa
  académica concisa

#### `caveats`
- Tipo: lista de strings
- Cada elemento: un caveat individual visible al lector
- Cuando el análisis determina que no hay caveats legítimos, se
  declara explícitamente con lista vacía `[]`; el campo nunca se
  omite (MANIFESTO §5, honestidad sobre incertidumbre)

### 3.6 Tags del grafo

#### `tags_tema_principal`
- Tipo: string
- Único tema principal según taxonomía derivada de los ciclos
  abiertos del observatorio

#### `tags_tema_secundario`
- Tipo: lista de strings
- Puede ser vacía

#### `tags_geograficos`
- Tipo: objeto
- Campos:
  - `ambito`: enum, valores `nacional` | `estatal` | `municipal` |
    `sub-municipal`
  - `entidades_especificas`: lista de strings, texto libre
    (ejemplos: `"CDMX"`, `"Nuevo León"`, `"Cuajimalpa de Morelos"`)

#### `tags_temporales`
- Tipo: lista de strings
- Periodos o años cubiertos por el artículo
- Para artículos puente se admite el valor `"vigente"` además de
  marcadores específicos

### 3.7 Paper de ciclo

#### `paper_ciclo`
- Tipo: string | null
- Cita canónica del paper del ciclo cuando ya está publicado
- `null` cuando el ciclo está en curso sin paper publicado aún

#### `estado_metodologia`
- Tipo: enum
- Valores: `provisional` | `validada-por-paper`
- Coherencia: `validada-por-paper` requiere `paper_ciclo != null`
  (ARQUITECTURA-ARTICULOS §7)

### 3.8 Trazabilidad

#### `generado_por_routine`
- Tipo: boolean
- `true` cuando el artículo nace por routine institucional del
  observatorio
- `false` cuando el artículo nace por contribución académica directa
  de un miembro del equipo

#### `articulos_relacionados`
- Tipo: lista de objetos
- Cada objeto contiene:
  - `slug`: string. Slug del artículo relacionado
  - `mecanismo`: enum, valores `tag` | `dataset-compartido` |
    `proximidad-vectorial` | `curacion-humana`
- Justificación: ARQUITECTURA-ARTICULOS §8 exige que la procedencia
  de cada enlace del grafo del corpus sea auditable cuando el lector
  lo solicite

### 3.9 Campos condicionales

#### `marcas_temporales_puente`
- Presente si y solo si `tipo_temporal == "puente"`
- Estructura:
  - `fecha_computo_respuesta`: ISO 8601 datetime
  - `fecha_version_dataset`: ISO 8601 datetime
  - `divergencia_detectada`: boolean
- Materializa el disclaimer dinámico permanente que
  ARQUITECTURA-ARTICULOS §6 requiere para todo artículo puente

#### `definiciones_contestables`
- Presente si y solo si `sensibilidad == "sensible"`
- Lista de objetos:
  - `termino`: string. Término cuya definición es contestable
  - `definicion_adoptada`: string. Definición adoptada para el
    artículo
  - `fuente_definicion`: string. Fuente oficial o académica de la
    definición adoptada
  - `alternativas_descartadas`: lista de strings. Definiciones
    alternativas legítimas no adoptadas, declaradas explícitamente

#### `errata_referencia`
- Presente si y solo si `version > 1`
- Estructura:
  - `version_anterior_url`: string. Ubicación citable de la versión
    anterior preservada
  - `motivo_errata`: string. Descripción concisa del motivo de la
    errata

---

## 4. Reglas de invariantes

Las siguientes combinaciones son válidas; cualquier otra es error de
schema.

1. `estado == "pre-firma"` implica `revisor == null` y
   `fecha_firma == null`.
2. `estado != "pre-firma"` implica `revisor != null` y
   `fecha_firma != null`.
3. `sla_dias_restantes` es no nulo si y solo si
   `estado == "pre-firma"`.
4. `tipo_temporal == "puente"` implica `marcas_temporales_puente`
   presente; ausente en caso contrario.
5. `sensibilidad == "sensible"` implica `definiciones_contestables`
   presente.
6. `version > 1` implica `errata_referencia` presente.
7. `sensibilidad == "sensible"` implica que el primer `estado`
   publicable es `firmada`; un artículo sensible nunca se publica en
   `pre-firma`.
8. `estado_metodologia == "validada-por-paper"` implica
   `paper_ciclo != null`.

---

## 5. Reglas de transición de estado

Transiciones admisibles para un artículo directa:

```
pre-firma → firmada
firmada → en-re-revision → firmada
firmada → en-reclasificacion → firmada
firmada → errata-vigente → firmada
```

Transiciones admisibles para un artículo sensible:

```
firmada (publicación directa, review-first)
firmada → en-re-revision → firmada
firmada → errata-vigente → firmada
```

Campos inmutables durante toda la vida útil del artículo:
`id_canonico`, `tipo_temporal`, `fecha_creacion`.

---

## 6. Ejemplos

### 6.1 Artículo snapshot, directa, pre-firma

```yaml
---
slug: cuantos-servidores-publicos-tenia-cdmx-en-marzo-2026
id_canonico: 01J5HKBN3D6QGRJA4V2N9KZQRX
pregunta: ¿Cuántos servidores públicos tenía la CDMX en marzo de 2026?
version: 1
fecha_creacion: 2026-06-05
fecha_ultima_actualizacion: 2026-06-05

tipo_temporal: snapshot
sensibilidad: directa
estado: pre-firma
sla_dias_restantes: 7

revisor: null
fecha_firma: null

datasets:
  - nombre: Padrón de servidores públicos de la CDMX
    version_captura: 2026-03
    url_fuente: https://datos.cdmx.gob.mx/dataset/padron-servidores-publicos

metodo: Conteo directo de registros activos en el padrón al cierre del mes de marzo de 2026.
caveats:
  - El padrón excluye personal contratado bajo régimen de honorarios.

tags_tema_principal: aparato-publico
tags_tema_secundario:
  - empleo-publico
tags_geograficos:
  ambito: estatal
  entidades_especificas:
    - CDMX
tags_temporales:
  - 2026-03

paper_ciclo: null
estado_metodologia: provisional

generado_por_routine: true
articulos_relacionados: []
---
```

### 6.2 Artículo puente, directa, firmada

```yaml
---
slug: cuantos-servidores-publicos-tiene-cdmx-actualmente
id_canonico: 01J5HKC8X4G3MHRVTYZ2QF7BNP
pregunta: ¿Cuántos servidores públicos tiene la CDMX actualmente?
version: 1
fecha_creacion: 2026-06-05
fecha_ultima_actualizacion: 2026-06-12

tipo_temporal: puente
sensibilidad: directa
estado: firmada
sla_dias_restantes: null

revisor: Nombre Apellido
fecha_firma: 2026-06-12

datasets:
  - nombre: Padrón de servidores públicos de la CDMX
    version_captura: 2026-05
    url_fuente: https://datos.cdmx.gob.mx/dataset/padron-servidores-publicos

metodo: Conteo directo de registros activos en la versión vigente del padrón al momento del cómputo.
caveats:
  - El padrón excluye personal contratado bajo régimen de honorarios.
  - La cifra refleja la última versión del padrón publicada por la fuente. Verificar marcas temporales para confirmar vigencia.

tags_tema_principal: aparato-publico
tags_tema_secundario:
  - empleo-publico
tags_geograficos:
  ambito: estatal
  entidades_especificas:
    - CDMX
tags_temporales:
  - vigente

paper_ciclo: null
estado_metodologia: provisional

generado_por_routine: true
articulos_relacionados:
  - slug: cuantos-servidores-publicos-tenia-cdmx-en-marzo-2026
    mecanismo: dataset-compartido

marcas_temporales_puente:
  fecha_computo_respuesta: 2026-06-12T08:30:00Z
  fecha_version_dataset: 2026-05-31T23:59:59Z
  divergencia_detectada: false
---
```

---

## 7. Versionado de este documento

Este documento es artefacto vivo. Los cambios sustantivos al schema
incrementan su versión y quedan registrados en el historial del
repositorio.

Cualquier cambio sustantivo al schema requiere actualización
coordinada de:

- este documento
- las plantillas en `templates/`
- los artículos existentes del corpus que adopten los campos nuevos
- la documentación operacional en `CLAUDE.md`
- el sitio canónico, que consume este schema como contrato de
  ingesta

Versión actual del schema: 1.0
Fecha: 2026-06-02

---

*Observatorio Datos México · datosmexico.org*
