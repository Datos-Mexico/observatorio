---
slug: cuantos-recursos-administra-el-sar-mexicano-actualmente
id_canonico: 01KT3N2DTCCF1BZ4C3NCXC253Q
pregunta: ¿Cuántos recursos administra el SAR mexicano actualmente?
version: 1
fecha_creacion: 2026-06-02
fecha_ultima_actualizacion: 2026-06-02

tipo_temporal: puente
sensibilidad: directa
estado: pre-firma
sla_dias_restantes: 7

revisor: null
fecha_firma: null

datasets:
  - nombre: CONSAR
    version_captura: "2025-06"
    url_fuente: https://www.gob.mx/consar

metodo: Lectura directa del agregado `sar_total` publicado por la CONSAR en su Información Estadística mensual, correspondiente al último corte disponible (junio de 2025). La cifra se reporta en millones de pesos MXN corrientes y agrega las once AFOREs activas del sistema. La consistencia interna del agregado se verifica al peso contra la suma por AFORE del mismo corte.
caveats:
  - 'El agregado "recursos administrados" reportado en este artículo corresponde al campo `sar_total` publicado por la CONSAR, que comprende ocho componentes contables verificables al peso por la fuente oficial: RCV-IMSS, RCV-ISSSTE, bono de pensión ISSSTE, vivienda (INFONAVIT y FOVISSSTE), ahorro voluntario y solidario, capital propio de las AFOREs, depósitos no asignados en Banco de México y fondos de previsión social. La cifra excede los recursos que pertenecen estrictamente a los trabajadores; incluye también el capital regulatorio de las administradoras.'
  - La cifra se expresa en pesos corrientes (sin deflactar). Comparaciones intertemporales requieren ajuste por inflación.
  - La CONSAR publica los recursos administrados con un rezago natural sobre la fecha de corte. El observatorio refleja la última publicación disponible al momento del cómputo; la marca temporal `fecha_version_dataset` permite verificar la vigencia exacta de la cifra reportada.
  - La cifra es un agregado nacional. El Sistema de Ahorro para el Retiro es un sistema federal y la CONSAR no publica desagregación por entidad federativa.

tags_tema_principal: pensiones
tags_tema_secundario:
  - sar
  - sistema-pensional
  - ahorro-retiro
tags_geograficos:
  ambito: nacional
  entidades_especificas: []
tags_temporales:
  - vigente

paper_ciclo: null
estado_metodologia: provisional

generado_por_routine: false
articulos_relacionados: []

marcas_temporales_puente:
  fecha_computo_respuesta: 2026-06-02T07:51:02Z
  fecha_version_dataset: 2025-06-01T00:00:00Z
  divergencia_detectada: false
---

<!-- BANNER: el sitio canónico inserta templates/banner-pre-firma.md según el estado declarado en el frontmatter -->

# ¿Cuántos recursos administra el SAR mexicano actualmente?

## Respuesta

Al cierre del mes más reciente publicado por la Comisión Nacional del Sistema de Ahorro para el Retiro (CONSAR), correspondiente a junio de 2025, el Sistema de Ahorro para el Retiro (SAR) administra **$10,127,978.75 millones de pesos corrientes**, equivalentes a aproximadamente $10.13 billones de pesos. La cifra agrega las once AFOREs activas del sistema.

> **Marcas temporales de vigencia.** Cómputo de esta respuesta:
> 2026-06-02T07:51:02Z. Versión del dataset subyacente:
> 2025-06-01T00:00:00Z. El lector puede verificar la
> vigencia de la respuesta cotejando ambas marcas con la fuente
> oficial citada en la sección "Datos utilizados".

## Datos utilizados

- **CONSAR** (versión 2025-06). Fuente oficial: [https://www.gob.mx/consar](https://www.gob.mx/consar).

La CONSAR publica mensualmente la Información Estadística del SAR, que incluye el agregado de recursos administrados, su composición por componente contable y su distribución entre AFOREs.

## Metodología

La cifra reportada corresponde al agregado `sar_total` publicado por la CONSAR para el cierre del mes de junio de 2025, último corte disponible al momento del cómputo. La unidad publicada por la fuente es millones de pesos mexicanos corrientes.

La consistencia interna del dato se verifica de dos maneras independientes en la misma versión del dataset:

- la suma de los recursos administrados por las once AFOREs activas en junio de 2025 reproduce el agregado del sistema al peso (diferencia exacta de cero pesos);
- la suma de los ocho componentes contables publicados por la CONSAR (RCV-IMSS, RCV-ISSSTE, bono de pensión ISSSTE, vivienda, ahorro voluntario y solidario, capital de las AFOREs, depósitos en Banco de México y fondos de previsión social) reproduce el agregado del sistema bajo la identidad contable canónica del SAR, verificada por la fuente.

El cómputo es reproducible: cualquier investigador puede recuperar las mismas cifras consultando la Información Estadística publicada por la CONSAR para junio de 2025 y aplicando el agregado `sar_total`.

## Caveats e incertidumbre

- "Recursos administrados" en este artículo refiere al agregado `sar_total` publicado por la CONSAR. Este agregado comprende ocho componentes contables: RCV-IMSS, RCV-ISSSTE, bono de pensión ISSSTE, vivienda (suma de INFONAVIT y FOVISSSTE), ahorro voluntario y solidario, capital propio de las AFOREs, depósitos no asignados en Banco de México y fondos de previsión social. La cifra excede por construcción los recursos que pertenecen estrictamente a los trabajadores: incluye también el capital regulatorio que las administradoras mantienen como reserva.
- La cifra se expresa en pesos corrientes, sin ajuste por inflación. Comparaciones con cifras de años anteriores requieren un deflactor adecuado para preservar comparabilidad real.
- La CONSAR publica los recursos administrados con un rezago natural sobre la fecha de corte. El dato más reciente disponible al momento del cómputo corresponde al cierre de junio de 2025. La marca temporal `fecha_version_dataset` en el frontmatter de este artículo declara explícitamente la fecha del corte; la marca `fecha_computo_respuesta` declara el momento en que se ejecutó el cómputo de la respuesta.
- La cifra es un agregado nacional. El SAR es un sistema federal y la CONSAR no publica desagregación de los recursos administrados por entidad federativa.

## Referencias

Fuente oficial primaria: Comisión Nacional del Sistema de Ahorro para el Retiro (CONSAR), Información Estadística del SAR, [https://www.gob.mx/consar](https://www.gob.mx/consar).
