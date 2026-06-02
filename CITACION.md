# Citación canónica del corpus

Este documento articula el formato canónico de citación del corpus
pregunta-respuesta del Observatorio Datos México. Implementa los
compromisos doctrinales sobre autoría (`MANIFESTO.md` §6) y sobre
versionado citable del corpus (`ARQUITECTURA-ARTICULOS.md` §10).

La citabilidad académica del corpus es propiedad estructural del
observatorio: cualquier lector externo que cite un artículo debe poder
hacerlo con la misma trazabilidad que esperaría de una fuente
académica formal.

---

## 1. Principios

**Trazabilidad versionada.** Toda cita a un artículo del corpus
incluye la versión específica del artículo al momento de la cita. El
identificador canónico (`id_canonico`) preserva la trazabilidad
incluso si el slug del artículo se modifica por corrección editorial.

**Atribución según estado.** El responsable académico declarado en la
cita refleja el estado del artículo en el momento de la cita:

- En estado pre-firma, la atribución es a "Equipo de Datos México".
  La responsabilidad es institucional colectiva.
- En estado firmado o posterior, la atribución es al revisor humano
  firmante. La responsabilidad es académica individual.

Esta distinción materializa literalmente `ARQUITECTURA-ARTICULOS.md`
§4: la transición pre-firma → firmada es transición de autoría
institucional colectiva a autoría académica individual.

**Permanencia de la cita.** La URL canónica del artículo permanece
estable. Cuando el slug cambia por corrección editorial, el sitio
canónico mantiene redirección permanente desde el slug anterior. El
`id_canonico` resuelve a la URL canónica vigente bajo toda
circunstancia.

---

## 2. Citación de artículo individual

### 2.1 Estado pre-firma

Formato canónico:

> Equipo de Datos México. (AAAA, DD de MM). [Pregunta literal]. *Observatorio Datos México* (versión N, pre-firma; id_canonico ULID). URL.

Ejemplo:

> Equipo de Datos México. (2026, 5 de junio). ¿Cuántos servidores públicos tiene la CDMX actualmente? *Observatorio Datos México* (versión 1, pre-firma; id_canonico 01J5HKC8X4G3MHRVTYZ2QF7BNP). https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente

### 2.2 Estado firmado

Formato canónico:

> Apellido, N. (AAAA, DD de MM). [Pregunta literal]. *Observatorio Datos México* (versión N; id_canonico ULID). URL.

Ejemplo:

> Pérez, M. (2026, 12 de junio). ¿Cuántos servidores públicos tiene la CDMX actualmente? *Observatorio Datos México* (versión 1; id_canonico 01J5HKC8X4G3MHRVTYZ2QF7BNP). https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente

### 2.3 Estados intermedios

Para citas de un artículo en estado `en-re-revision`,
`en-reclasificacion` o `errata-vigente`, el formato es análogo al
firmado, con anotación del estado entre paréntesis tras la versión:

> Pérez, M. (2026, 12 de junio). ¿Cuántos servidores públicos tiene la CDMX actualmente? *Observatorio Datos México* (versión 2, en-re-revisión; id_canonico 01J5HKC8X4G3MHRVTYZ2QF7BNP). URL.

---

## 3. Citación cruzada dentro del corpus

Cuando un artículo del corpus cita a otro artículo del corpus, lo
hace mediante referencia al slug y la versión, no a la URL externa
completa:

> Artículo relacionado: [pregunta literal] (versión N). Slug: `{slug}`.

El sitio canónico resuelve el slug a la URL completa en presentación.
Esta convención preserva la portabilidad del corpus: un lector que
descarga la totalidad del repositorio puede navegar las referencias
internas sin depender del sitio.

---

## 4. Equivalencias en formatos estándar

El observatorio reconoce que distintas disciplinas adoptan distintos
formatos de citación. Las siguientes equivalencias mapean el formato
canónico del observatorio a tres formatos estándar de uso académico
amplio.

### 4.1 APA (7ª edición)

Estado firmado:

```
Pérez, M. (2026, junio 12). ¿Cuántos servidores públicos tiene la CDMX
actualmente? Observatorio Datos México. https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente
```

Estado pre-firma:

```
Equipo de Datos México. (2026, junio 5). ¿Cuántos servidores públicos
tiene la CDMX actualmente? Observatorio Datos México (versión 1,
pre-firma). https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente
```

### 4.2 Chicago (autor-fecha)

Estado firmado:

```
Pérez, María. 2026. "¿Cuántos servidores públicos tiene la CDMX
actualmente?" Observatorio Datos México, 12 de junio.
https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente.
```

### 4.3 BibTeX

Estado firmado:

```bibtex
@misc{datosmx_cuantos_servidores_cdmx_v1,
  author       = {Pérez, María},
  title        = {¿Cuántos servidores públicos tiene la CDMX actualmente?},
  year         = {2026},
  month        = {6},
  day          = {12},
  howpublished = {Observatorio Datos México, versión 1},
  note         = {id\_canonico: 01J5HKC8X4G3MHRVTYZ2QF7BNP},
  url          = {https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente}
}
```

Estado pre-firma:

```bibtex
@misc{datosmx_cuantos_servidores_cdmx_v1_prefirma,
  author       = {{Equipo de Datos México}},
  title        = {¿Cuántos servidores públicos tiene la CDMX actualmente?},
  year         = {2026},
  month        = {6},
  day          = {5},
  howpublished = {Observatorio Datos México, versión 1, pre-firma},
  note         = {id\_canonico: 01J5HKC8X4G3MHRVTYZ2QF7BNP},
  url          = {https://datosmexico.org/cuantos-servidores-publicos-tiene-cdmx-actualmente}
}
```

---

## 5. Política de actualización de cita ante cambios de estado

Cuando un artículo transita entre estados (pre-firma → firmada,
firmada → errata-vigente, etc.), las citas previas hechas bajo el
estado anterior siguen siendo válidas: cada cita refiere a la versión
y el estado del artículo en el momento de la cita.

El observatorio no exige a citadores externos actualizar citas
previas. La trazabilidad versionada del corpus garantiza que cualquier
cita anterior puede resolverse al estado exacto del artículo en el
momento en que la cita se generó.

Cuando un lector cita un artículo cuyo estado ha cambiado desde la
última cita conocida, se recomienda usar el formato del estado vigente
al momento de la cita nueva. Las citas anteriores permanecen válidas
con su formato original.

---

## 6. Versionado de este documento

Este documento es artefacto vivo. Los cambios sustantivos al formato
canónico de citación se versionan y registran en el historial del
repositorio. Cualquier cambio que afecte la atribución de autoría o
la estructura mínima de la cita requiere alineación previa con
`MANIFESTO.md` §6 y `ARQUITECTURA-ARTICULOS.md` §4.

Versión actual: 1.0
Fecha: 2026-06-02

---

*Observatorio Datos México · datosmexico.org*
