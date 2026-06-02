# Plantilla: artículo snapshot, directa, pre-firma

Esta plantilla materializa el formato canónico de un artículo
pregunta-respuesta de tipo `snapshot`, clasificación `directa`, en
estado inicial `pre-firma`.

Las routines de generación producen artículos isomorfos a esta
plantilla, sustituyendo los placeholders `{{ }}` por contenido
específico de cada pregunta. Las secciones del cuerpo siguen orden
académico fijo: respuesta directa, datos utilizados, metodología,
caveats e incertidumbre, referencias.

El frontmatter es contrato estructural según `SCHEMA.md`. Los
placeholders son sustituibles uno a uno, sin alterar nombres de campo
ni estructura.

---

## Plantilla

```markdown
---
slug: {{slug}}
id_canonico: {{id_canonico}}
pregunta: {{pregunta}}
version: 1
fecha_creacion: {{fecha_creacion}}
fecha_ultima_actualizacion: {{fecha_creacion}}

tipo_temporal: snapshot
sensibilidad: directa
estado: pre-firma
sla_dias_restantes: 7

revisor: null
fecha_firma: null

datasets:
  - nombre: {{dataset_1_nombre}}
    version_captura: {{dataset_1_version}}
    url_fuente: {{dataset_1_url}}

metodo: {{metodo}}
caveats:
  - {{caveat_1}}

tags_tema_principal: {{tema_principal}}
tags_tema_secundario:
  - {{tema_secundario_1}}
tags_geograficos:
  ambito: {{ambito}}
  entidades_especificas:
    - {{entidad_1}}
tags_temporales:
  - {{periodo_1}}

paper_ciclo: {{paper_ciclo_o_null}}
estado_metodologia: {{provisional_o_validada_por_paper}}

generado_por_routine: true
articulos_relacionados:
  - slug: {{slug_relacionado_1}}
    mecanismo: {{mecanismo_relacionado_1}}
---

<!-- BANNER: el sitio canónico inserta templates/banner-pre-firma.md según el estado declarado en el frontmatter -->

# {{pregunta}}

## Respuesta

{{respuesta_directa_en_un_parrafo_breve}}

## Datos utilizados

- **{{dataset_1_nombre}}** (versión {{dataset_1_version}}). Fuente
  oficial: [{{dataset_1_url}}]({{dataset_1_url}}).

## Metodología

{{descripcion_reproducible_del_computo_en_prosa_academica_concisa}}

## Caveats e incertidumbre

- {{caveat_1_desarrollado_en_prosa_si_aplica}}

## Referencias

{{cita_canonica_paper_ciclo_cuando_aplica}}

Artículos relacionados del corpus:

- [{{slug_relacionado_1}}](/preguntas/{{slug_relacionado_1}})
```

---

## Notas operacionales para el generador

- Los bloques de lista (`datasets`, `caveats`, `tags_tema_secundario`,
  `tags_geograficos.entidades_especificas`, `tags_temporales`,
  `articulos_relacionados`) admiten cero o más elementos según el
  artículo. Cuando un campo de tipo lista no tiene elementos, se
  declara como lista vacía (`[]`); el campo nunca se omite.
- `caveats: []` requiere análisis explícito previo que justifique la
  ausencia de caveats; la lista vacía no es decisión por omisión
  (`MANIFESTO.md` §5).
- El comentario HTML del banner es marcador para el sitio canónico.
  El sitio resuelve la inclusión según el `estado` del frontmatter.
- La sección "Respuesta" contiene la respuesta directa en un párrafo
  breve. La elaboración metodológica vive en "Metodología", no en
  "Respuesta".

---

*Observatorio Datos México · datosmexico.org*
