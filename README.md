# Datos-Mexico/observatorio

Repositorio institucional del Observatorio Datos México. Cumple dos
funciones complementarias: sede de los artefactos doctrinales que
articulan la identidad y compromisos del observatorio, y base
operacional del corpus pregunta-respuesta que el observatorio publica
para la sociedad mexicana.

---

## Artefactos doctrinales

- [`MANIFESTO.md`](MANIFESTO.md). Manifesto institucional del
  observatorio. Identidad, modelo de crecimiento por ciclos
  temáticos profundos, arquitectura del corpus de respuestas, cinco
  principios de trabajo académico y compromisos permanentes con el
  lector.

- [`ARQUITECTURA-ARTICULOS.md`](ARQUITECTURA-ARTICULOS.md).
  Arquitectura específica del componente artículos pregunta-respuesta.
  Tipos snapshot y puente, ciclo de vida del artículo, política de
  publicación de dos estados (pre-firma y firmado), clasificación
  por sensibilidad académica, coherencia con datos subyacentes y
  con paper de ciclo, arquitectura de enlaces del grafo del corpus,
  política de errata y versionado del corpus.

---

## Artefactos operacionales

- [`SCHEMA.md`](SCHEMA.md). Especificación canónica del frontmatter
  YAML de cada artículo del corpus. Contrato estructural verificable
  consumido por el sitio canónico del observatorio.

- [`CITACION.md`](CITACION.md). Formato canónico de citación del
  corpus. Implementa la atribución según estado (institucional
  colectiva en pre-firma; académica individual en firmado) y la
  trazabilidad versionada de cada cita.

- [`CLAUDE.md`](CLAUDE.md). Contexto operacional persistente para
  las routines institucionales del observatorio que operan sobre
  este repositorio. Contratos funcionales atemporales de las
  routines de generación y planificación, reglas duras invariantes,
  convenciones y protocolo de errata.

---

## Estructura del repositorio

```
observatorio/
├── MANIFESTO.md                  (doctrina institucional)
├── ARQUITECTURA-ARTICULOS.md     (doctrina del corpus)
├── SCHEMA.md                     (contrato estructural)
├── CITACION.md                   (formato canónico de citación)
├── CLAUDE.md                     (contexto operacional)
├── README.md
├── LICENSE
├── preguntas/                    (corpus pregunta-respuesta)
│   └── README.md
└── templates/                    (plantillas canónicas y copy editorial)
    ├── articulo-snapshot.md
    ├── articulo-puente.md
    └── banner-pre-firma.md
```

El corpus pregunta-respuesta vive bajo `preguntas/`. Cada archivo
`{slug}.md` es un artículo del corpus, con frontmatter estructurado
según `SCHEMA.md` y cuerpo según las plantillas canónicas en
`templates/`.

---

## Citación del corpus

El formato canónico de citación está documentado en `CITACION.md`. En
síntesis: los artículos en estado pre-firma se citan bajo "Equipo de
Datos México"; los artículos firmados se citan bajo el nombre del
revisor humano firmante. La versión específica del artículo y su
identificador canónico se incluyen en toda cita.

---

## Contribución

El observatorio recibe sugerencias de preguntas, propuestas de
incorporación de datasets oficiales, reportes de errata y revisiones
a los artefactos doctrinales a través de sus canales de comunicación
y mediante Pull Requests a este repositorio.

La incorporación al equipo académico del observatorio se rige por
estándares equivalentes a los académicos formales (`MANIFESTO.md`
§7).

---

## Política de ramas

- `main`: corpus público auditable. Toda revisión de `main` es
  estado citable del observatorio.
- `feat/*`: ramas de trabajo en progreso. Todo cambio entra a `main`
  por Pull Request validada.

Los cambios sustantivos a los artefactos doctrinales y operacionales
se registran en el historial del repositorio y se atribuyen al
equipo académico que los aprueba.

---

*Observatorio Datos México · [datosmexico.org](https://datosmexico.org)*
