---
slug: cuantos-recursos-administra-el-sar-mexicano-actualmente
id_canonico: 01KT3N2DTCCF1BZ4C3NCXC253Q
pregunta: ¿Cuántos recursos administra el SAR mexicano actualmente?
version: 2
fecha_creacion: 2026-06-02
fecha_ultima_actualizacion: 2026-06-17

tipo_temporal: puente
sensibilidad: directa
estado: firmada
sla_dias_restantes: null

revisor: Observatorio Datos México
fecha_firma: "2026-06-16"

errata_referencia:
  version_anterior_url: https://github.com/Datos-Mexico/observatorio/blob/1d7d06b/preguntas/cuantos-recursos-administra-el-sar-mexicano-actualmente.md
  motivo_errata: 'Regeneración del corte (junio 2025 → mayo 2026) e incorporación del Fondo de Pensiones para el Bienestar como entidad del agregado del sistema. La versión 1 reportaba once AFOREs activas para el corte de junio 2025 ($10,127,978.75 millones MXN); la versión 2 reporta diez Afores activas y el Fondo de Pensiones para el Bienestar para el corte de mayo 2026 ($11,815,973.4 millones MXN). La metodología de lectura (agregado sar_total con verificación por sumatoria) no cambia.'

datasets:
  - nombre: CONSAR
    version_captura: "2026-05"
    url_fuente: https://www.consar.gob.mx/gobmx/Aplicativo/siset/Series.aspx?cd=59

metodo: Lectura directa del agregado `sar_total` publicado por la CONSAR en su Información Estadística mensual, correspondiente al último corte disponible (mayo de 2026). La cifra se reporta en millones de pesos MXN corrientes y agrega las diez Afores activas del sistema más el Fondo de Pensiones para el Bienestar. La consistencia interna del agregado se verifica al peso contra la suma por entidad del mismo corte.
caveats:
  - 'El agregado "recursos administrados" reportado en este artículo corresponde al campo `sar_total` publicado por la CONSAR, que comprende ocho componentes contables verificables al peso por la fuente oficial: RCV-IMSS, RCV-ISSSTE, bono de pensión ISSSTE, vivienda (INFONAVIT y FOVISSSTE), ahorro voluntario y solidario, capital propio de las Afores, depósitos en Banco de México y fondos de previsión social. La cifra excede los recursos que pertenecen estrictamente a los trabajadores; incluye también el capital regulatorio de las administradoras.'
  - La cifra se expresa en pesos corrientes (sin deflactar). Comparaciones intertemporales requieren ajuste por inflación.
  - La CONSAR publica los recursos administrados con un rezago natural sobre la fecha de corte. El observatorio refleja la última publicación disponible al momento del cómputo; la marca temporal `fecha_version_dataset` permite verificar la vigencia exacta de la cifra reportada.
  - La cifra es un agregado nacional. El Sistema de Ahorro para el Retiro es un sistema federal y la CONSAR no publica desagregación por entidad federativa.
  - La CONSAR marca el corte de mayo de 2026 como "Cifras preliminares" en la nota al pie del cuadro fuente. Las cifras preliminares pueden ser revisadas por la CONSAR en publicaciones posteriores; ante una revisión que afecte la respuesta de este artículo, el observatorio publica errata visible siguiendo su política de transparencia sobre el error.
  - 'La CONSAR mantiene dos cadencias de publicación de la misma serie de recursos administrados. El cuadro SISET citado en este artículo (Series.aspx?cd=59) publica el agregado con cadencia mensual, aproximadamente quince días después del cierre del mes, y es la cadencia en la que está disponible el corte de mayo de 2026. El repositorio de datos abiertos de CONSAR (repodatos.atdt.gob.mx) consolida la misma serie con mayor rezago; al momento del cómputo de esta respuesta, ese repositorio publicaba hasta el corte del 27 de febrero de 2026 con datos hasta diciembre de 2025 ($10,996,258.9 millones MXN). Ambas son fuentes oficiales y reflejan la misma serie en distintos puntos de su ciclo de publicación: el SISET adelanta el corte mensual, el repositorio de datos abiertos lo consolida más tarde.'

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
  fecha_computo_respuesta: 2026-06-16T20:30:00Z
  fecha_version_dataset: 2026-05-01T00:00:00Z
  divergencia_detectada: false
---

<!-- BANNER: el sitio canónico inserta templates/banner-pre-firma.md según el estado declarado en el frontmatter -->

# ¿Cuántos recursos administra el SAR mexicano actualmente?

## Respuesta

Al cierre del mes más reciente publicado por la Comisión Nacional del Sistema de Ahorro para el Retiro (CONSAR), correspondiente a mayo de 2026, el Sistema de Ahorro para el Retiro (SAR) administra **$11,815,973.4 millones de pesos corrientes**, equivalentes a aproximadamente $11.82 billones de pesos. La cifra agrega las diez Afores activas del sistema y el Fondo de Pensiones para el Bienestar.

> **Marcas temporales de vigencia.** Cómputo de esta respuesta:
> 2026-06-16T20:30:00Z. Versión del dataset subyacente:
> 2026-05-01T00:00:00Z. El lector puede verificar la
> vigencia de la respuesta cotejando ambas marcas con la fuente
> oficial citada en la sección "Datos utilizados".

## Datos utilizados

- **CONSAR** (versión 2026-05). Fuente oficial, cuadro "Recursos Registrados en el SAR": [https://www.consar.gob.mx/gobmx/Aplicativo/siset/Series.aspx?cd=59](https://www.consar.gob.mx/gobmx/Aplicativo/siset/Series.aspx?cd=59).

La CONSAR publica mensualmente la Información Estadística del SAR, que incluye el agregado de recursos administrados, su composición por componente contable y su distribución entre Afores.

## Metodología

La cifra reportada corresponde al agregado `sar_total` publicado por la CONSAR para el cierre del mes de mayo de 2026, último corte disponible al momento del cómputo. La unidad publicada por la fuente es millones de pesos mexicanos corrientes.

Sobre la procedencia temporal del corte, la CONSAR declara textualmente en la nota al pie del cuadro fuente: *"Montos calculados con la información contable del último día hábil del mes y que corresponde a los precios de las acciones de las Siefores registrados en la Bolsa Mexicana de Valores el primer día hábil del siguiente mes."* Esta convención de valuación explica por qué el corte de mayo de 2026 fue publicado el 15 de junio de 2026: la valuación requiere los precios bursátiles de las Siefores en la Bolsa Mexicana de Valores del primer día hábil de junio.

La consistencia interna del dato se verifica de dos maneras independientes en la misma versión del dataset:

- la suma de los recursos administrados por las diez Afores activas y el Fondo de Pensiones para el Bienestar en mayo de 2026 reproduce el agregado del sistema al peso (diferencia exacta de cero pesos);
- la suma de los ocho componentes contables publicados por la CONSAR (RCV-IMSS, RCV-ISSSTE, bono de pensión ISSSTE, vivienda, ahorro voluntario y solidario, capital de las Afores, depósitos en Banco de México y fondos de previsión social) reproduce el agregado del sistema bajo la identidad contable canónica del SAR, verificada por la fuente (diferencia de 0.1 millones de pesos por redondeo a la precisión publicada).

El cómputo es reproducible: cualquier investigador puede recuperar las mismas cifras consultando la Información Estadística publicada por la CONSAR para mayo de 2026 y aplicando el agregado `sar_total`.

## Caveats e incertidumbre

- "Recursos administrados" en este artículo refiere al agregado `sar_total` publicado por la CONSAR. Este agregado comprende ocho componentes contables: RCV-IMSS, RCV-ISSSTE, bono de pensión ISSSTE, vivienda (suma de INFONAVIT y FOVISSSTE), ahorro voluntario y solidario, capital propio de las Afores, depósitos en Banco de México y fondos de previsión social. La cifra excede por construcción los recursos que pertenecen estrictamente a los trabajadores: incluye también el capital regulatorio que las administradoras mantienen como reserva.
- La cifra se expresa en pesos corrientes, sin ajuste por inflación. Comparaciones con cifras de años anteriores requieren un deflactor adecuado para preservar comparabilidad real.
- La CONSAR publica los recursos administrados con un rezago natural sobre la fecha de corte. El dato más reciente disponible al momento del cómputo corresponde al cierre de mayo de 2026. La marca temporal `fecha_version_dataset` en el frontmatter de este artículo declara explícitamente la fecha del corte; la marca `fecha_computo_respuesta` declara el momento en que se ejecutó el cómputo de la respuesta.
- La cifra es un agregado nacional. El SAR es un sistema federal y la CONSAR no publica desagregación de los recursos administrados por entidad federativa.
- La CONSAR marca el corte de mayo de 2026 como "Cifras preliminares" en la nota al pie del cuadro fuente. Las cifras preliminares pueden ser revisadas por la CONSAR en publicaciones posteriores; ante una revisión que afecte la respuesta de este artículo, el observatorio publica errata visible siguiendo su política de transparencia sobre el error.
- La CONSAR mantiene dos cadencias de publicación de la misma serie de recursos administrados. El cuadro SISET citado en este artículo (Series.aspx?cd=59) publica el agregado con cadencia mensual, aproximadamente quince días después del cierre del mes, y es la cadencia en la que está disponible el corte de mayo de 2026. El repositorio de datos abiertos de CONSAR (repodatos.atdt.gob.mx) consolida la misma serie con mayor rezago; al momento del cómputo de esta respuesta, ese repositorio publicaba hasta el corte del 27 de febrero de 2026 con datos hasta diciembre de 2025 ($10,996,258.9 millones MXN). Ambas son fuentes oficiales y reflejan la misma serie en distintos puntos de su ciclo de publicación: el SISET adelanta el corte mensual, el repositorio de datos abiertos lo consolida más tarde.

## Referencias

Fuente oficial primaria: Comisión Nacional del Sistema de Ahorro para el Retiro (CONSAR), Sistema Integral de Estadísticas del SAR (SISET), cuadro "Recursos Registrados en el SAR" (cd=59), [https://www.consar.gob.mx/gobmx/Aplicativo/siset/Series.aspx?cd=59](https://www.consar.gob.mx/gobmx/Aplicativo/siset/Series.aspx?cd=59).
