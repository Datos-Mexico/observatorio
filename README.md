# Datos-Mexico/observatorio

[![Sitio: datosmexico.org](https://img.shields.io/badge/sitio-datosmexico.org-111111)](https://datosmexico.org)
[![Licencia: CC BY 4.0](https://img.shields.io/badge/licencia-CC%20BY%204.0-lightgrey)](LICENSE)
[![Casos atendidos: 1](https://img.shields.io/badge/casos%20atendidos-1-blue)](casos/)

Repositorio institucional del Observatorio Datos México. Sede de los
artefactos doctrinales que articulan la identidad académica del
observatorio y base operacional del corpus pregunta-respuesta y de
los encargos de prensa que el observatorio atiende para la sociedad
mexicana.

→ Sitio canónico: **[datosmexico.org](https://datosmexico.org)**

## Navegación

- **[Manifiesto](MANIFESTO.md)** — identidad institucional, principios
  académicos y compromisos con el lector.
- **[Casos](casos/)** — encargos de prensa atendidos por el observatorio.
  El primero, [001 — Precios del jitomate y contratos del
  SuperISSSTE](casos/001-jitomate/), está publicado en
  [`datosmexico.org/transparencia/001-jitomate-superissste`](https://datosmexico.org/transparencia/001-jitomate-superissste).
- **[Corpus pregunta-respuesta](preguntas/)** — artículos del corpus
  y sus plantillas canónicas.
- **Doctrina y régimen** — ver "Artefactos doctrinales" y "Artefactos
  operacionales" abajo.

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

- [`PROTOCOLO-PRENSA.md`](PROTOCOLO-PRENSA.md). Régimen operativo
  bajo el que el observatorio atiende un encargo de prensa: qué entra
  como encargo, qué entrega y qué no entrega el observatorio, y cómo
  se documenta cada caso (cronología, dossier de hechos, sustento
  normativo, análisis y pieza pública firmada). Documento de trabajo
  en validación con los primeros casos antes de evaluar su promoción
  a doctrina junto al MANIFESTO.

- [`CITACION.md`](CITACION.md). Formato canónico de citación del
  corpus. Implementa la atribución según estado (institucional
  colectiva en pre-firma; académica individual en firmado) y la
  trazabilidad versionada de cada cita.

- [`CITATION.cff`](CITATION.cff). Formato de citación legible por
  máquina (GitHub muestra el botón "Cite this repository" cuando este
  archivo está presente). Coexiste con `CITACION.md` —el `.md` es la
  versión narrativa española, el `.cff` el estándar de máquina—.

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
├── PROTOCOLO-PRENSA.md           (régimen operativo de encargos de prensa)
├── SCHEMA.md                     (contrato estructural del corpus)
├── CITACION.md                   (formato canónico de citación, narrativo)
├── CITATION.cff                  (formato de citación legible por máquina)
├── CLAUDE.md                     (contexto operacional de routines)
├── README.md
├── LICENSE                       (CC BY 4.0)
├── casos/                        (encargos de prensa atendidos; un
│   │                              directorio por caso, con dossier de
│   │                              hechos, sustento normativo, análisis,
│   │                              bitácoras de cierre por etapa, y la
│   │                              pieza pública firmada)
│   └── 001-jitomate/             (caso 001 — precios del jitomate y
│                                   contratos del SuperISSSTE, publicado
│                                   en datosmexico.org/transparencia/)
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

Los encargos de prensa viven bajo `casos/`. Cada caso es un
directorio que reúne el rastro académico completo de la indagación
—cronología verificada, inventario de fuentes, sustento normativo,
análisis del marco de transparencia, bitácoras de cierre por etapa—
y la pieza pública firmada que el observatorio publica en su sitio
canónico bajo `/transparencia/`. La política de cómo se atienden los
encargos está en [`PROTOCOLO-PRENSA.md`](PROTOCOLO-PRENSA.md). El
caso `001-jitomate/` incluye un `README.md` con orden de lectura
sugerido.

---

## Citación del corpus

El formato canónico de citación está documentado en `CITACION.md`. En
síntesis: los artículos en estado pre-firma se citan bajo "Equipo de
Datos México"; los artículos firmados se citan bajo el nombre del
revisor humano firmante. La versión específica del artículo y su
identificador canónico se incluyen en toda cita.

Para citación legible por máquina del repositorio en su conjunto,
`CITATION.cff` está disponible en la raíz; GitHub lo expone como
botón "Cite this repository".

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
- `feat/*` / `fix/*` / `docs/*`: ramas de trabajo en progreso. Todo
  cambio entra a `main` por Pull Request validada.

Los cambios sustantivos a los artefactos doctrinales y operacionales
se registran en el historial del repositorio y se atribuyen al
equipo académico que los aprueba.

---

*Observatorio Datos México · [datosmexico.org](https://datosmexico.org)*
