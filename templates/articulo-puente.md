# Plantilla: artículo puente, directa, pre-firma

Esta plantilla materializa el formato canónico de un artículo
pregunta-respuesta de tipo `puente`, clasificación `directa`, en
estado inicial `pre-firma`.

A diferencia de la plantilla snapshot, la plantilla puente incluye el
campo condicional `marcas_temporales_puente` en el frontmatter y un
bloque de disclaimer dinámico permanente en el cuerpo del artículo,
según `ARQUITECTURA-ARTICULOS.md` §6.

El frontmatter es contrato estructural según `SCHEMA.md`. Los
placeholders `{{ }}` son sustituibles uno a uno, sin alterar nombres
de campo ni estructura.

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

tipo_temporal: puente
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
  - vigente

paper_ciclo: {{paper_ciclo_o_null}}
estado_metodologia: {{provisional_o_validada_por_paper}}

generado_por_routine: true
articulos_relacionados:
  - slug: {{slug_relacionado_1}}
    mecanismo: {{mecanismo_relacionado_1}}

marcas_temporales_puente:
  fecha_computo_respuesta: {{fecha_computo_iso_datetime}}
  fecha_version_dataset: {{fecha_version_dataset_iso_datetime}}
  divergencia_detectada: false
---

<!-- BANNER: el sitio canónico inserta templates/banner-pre-firma.md según el estado declarado en el frontmatter -->

# {{pregunta}}

## Respuesta

{{respuesta_directa_en_un_parrafo_breve}}

> **Marcas temporales de vigencia.** Cómputo de esta respuesta:
> {{fecha_computo_iso_datetime}}. Versión del dataset subyacente:
> {{fecha_version_dataset_iso_datetime}}. El lector puede verificar la
> vigencia de la respuesta cotejando ambas marcas con la fuente
> oficial citada en la sección "Datos utilizados".

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

- El bloque "Marcas temporales de vigencia" en el cuerpo es
  materialización del disclaimer dinámico permanente que
  `ARQUITECTURA-ARTICULOS.md` §6 exige para todo artículo puente. El
  bloque debe aparecer siempre, no opcionalmente.
- `marcas_temporales_puente.divergencia_detectada` es `false` en la
  creación inicial. Las routines de mantenimiento del corpus
  actualizan este campo a `true` cuando detectan divergencia entre
  el cómputo del artículo y la versión más reciente publicada por la
  fuente. La política de respuesta ante divergencia —regeneración
  para cambios menores o re-revisión humana para cambios
  estructurales— está articulada en `ARQUITECTURA-ARTICULOS.md` §6.
- `tags_temporales` incluye el valor `vigente` para artículos puente,
  además de marcadores específicos cuando aplique.
- El resto de las notas operacionales de la plantilla snapshot
  aplican igualmente aquí (listas vacías declaradas explícitamente,
  análisis previo para `caveats: []`, etc.).

---

*Observatorio Datos México · datosmexico.org*
