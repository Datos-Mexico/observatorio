# Caso 001 — Bitácora de cierre de la Etapa 2

> **Etapa 2 completada y mergeada a `main` vía PR #7 (dossier de hechos
> verificados) y PR #8 (cierre de pendientes con La Jornada y SNIIM).**
> Fecha del cierre: 2026-06-14.

## Estado

- **Entregable central:** `casos/001-jitomate/DOSSIER.md`. Versión
  consolidada y autosuficiente para el receptor del caso desde fuera.
- **Inventario de fuentes:** `casos/001-jitomate/FUENTES.md`
  actualizado con los hallazgos primarios nuevos de la Etapa 2.
- **Cronología:** `casos/001-jitomate/CRONOLOGIA.md` y bitácora de
  handoff `casos/001-jitomate/BITACORA.md` heredadas de la Etapa 1 sin
  cambios.

## Hallazgos de la Etapa 2

### Cuerpo íntegro de La Jornada del 15 de abril de 2026, anclado de primera mano

Lectura íntegra del cuerpo de la nota firmada por Elba Mónica Bravo
(página 31, sección Capital) recuperada por dos vías independientes
verificadas byte-a-byte:

- **Vía A**: fetch directo al sitio del medio con User-Agent de
  navegador (Chrome 121 en macOS) y `Accept-Language: es-MX,es;q=0.9`.
  HTTP 200, 54 414 bytes. El supuesto bloqueo 403 del cierre anterior
  provenía del fetcher integrado del cliente, no del medio.
- **Vía B**: captura del Wayback Machine en el timestamp
  `20260416162812` obtenida vía CDX server. La API
  `archive.org/wayback/available` había devuelto `archived_snapshots:
  {}` para esta URL; el CDX server sí la lista. Captura comprimida en
  gzip descomprimida y comparada byte-a-byte contra la Vía A:
  coincidencia exacta en todos los fragmentos verificados.

El cuerpo de la nota establece, entre otros datos: dos tiendas
SuperISSSTE con dirección verificada (Manuel Tolsá y Enrico Martínez,
y La Ciudadela, ambas en colonia Centro, alcaldía Cuauhtémoc); régimen
operativo del 14-abr-2026 (acceso libre, sin tope formal de bolsas);
desglose por establecimiento del rango "19.90 a 70 pesos el
kilogramo" (Walmart 59, Soriana Híper y Chedraui 49, Mercado 2 de
Abril 60–70); contexto INEGI con inflación anual al 4.59 %.

### Incorporación del SNIIM como fuente primaria oficial del mayoreo

Consulta primaria oficial al Sistema Nacional de Información e
Integración de Mercados (SNIIM, Secretaría de Economía) completada vía
POST al formulario `ConsultaFrutasYHortalizas.aspx?SubOpcion=4`,
mercado de destino "DF: Central de Abasto de Iztapalapa DF", del 13 al
17 de abril de 2026.

- **Tomate saladette de primera, $/kg calculado, 15-abr-2026:** rango
  $23.08 a $43.33, orígenes Puebla y Sinaloa, tres empaques (caja de
  12, 13 y 25 kg).
- **Tomate bola de primera, $/kg calculado, 15-abr-2026:** rango
  $75.00 a $90.00, origen Puebla, caja de 10 kg.
- **Verificación cruzada** con presentación comercial (precio por caja
  encuestado dividido por peso del empaque): consistencia exacta.
- **Detalle técnico reproducible.** El enlace que el portal exhibe
  lleva `?SubOpcion=4|0`; el literal `|0` rompe el parseo a entero del
  backend en el POST. Basta con pasar `?SubOpcion=4` (sin `|0`) y el
  servidor devuelve la tabla. La indicación de "site under
  maintenance" que el motor de búsqueda mostraba era texto del propio
  sitio, no estado del servicio.

### Contraste 19.90 menudeo vs 23.08 mayoreo del mismo día, con salvedad nombrada

En el dossier (apartado 3.4) y en el inventario (apartado 5.5) queda
registrado con la salvedad metodológica explícita: el 19.90 SuperISSSTE
es **menudeo al consumidor final en tienda**; el 23.08 SNIIM es
**mayoreo en central de abasto** para producto con orígenes nombrados
por SNIIM como Puebla y Sinaloa. La plaza en que SuperISSSTE compra el
jitomate y el origen del producto que vende **no son necesariamente**
Iztapalapa, Puebla ni Sinaloa: ese dato forma parte de lo que
permanece desconocido y es precisamente lo que la solicitud PNT
preguntó y SuperISSSTE negó invocando "secreto comercial".

Con esa salvedad nombrada, el contraste se mantiene en todo su peso:
en los niveles y plazas que sí son públicos, el precio de venta al
consumidor en SuperISSSTE el 15-abr-2026 estuvo por debajo del piso
del mayoreo del mismo día. El dossier registra el hecho; no atribuye
causa.

## Reglas de método sostenidas (no se reabren)

- **El caso es cronología y transparencia, no publicación del corpus
  validado al peso desde microdato.** El dato central —a quién y a qué
  precio compra SuperISSSTE el jitomate— sigue siendo no público.
- **Sin capa interpretativa.** Ni juicio de intención, ni atribución
  de responsabilidad, ni calificación de conducta. La interpretación
  es competencia de quien la recibe.
- **Distinción del 19.90 en sus tres registros distintos, ahora con
  contraste explícito contra el mayoreo SNIIM y sin colapso de
  ninguno.** Profeco fines de marzo = piso del rango nacional del
  jitomate bola (cota estadística). El Universal 16-abr = precio por
  bolsa de un kilo observado en piso de venta SuperISSSTE (observación
  de campo). La Jornada 15-abr = reportería del medio en mercados de
  la CDMX, con SuperISSSTE como extremo bajo. SNIIM 15-abr = $23.08
  como piso del mayoreo saladette en Iztapalapa (medición primaria
  oficial). Los cuatro registros conviven; ninguno se colapsa con
  otro; el contraste se reporta con la salvedad de los niveles de
  mercado nombrada.

## Episodio de doble validación durante la Etapa 2

En el ciclo de revisión del PR #7 la supervisión levantó la objeción
de que el dossier había introducido cuatro fuentes que no estaban en
`FUENTES.md` tras la Etapa 1: la nota de Infobae del 28 de marzo de
2026, la lista nominada de establecimientos del apartado 2.1, las
URLs de los boletines QQPP del 6 y 20 de abril con su universo de
cadenas, y las notas de El Financiero y Ejecentral sobre la identidad
de Dunia Ludlow Deloya. La objeción era equivocada: las cuatro
fuentes estaban ya ancladas en `FUENTES.md` desde la Etapa 1 con
cita de línea concreta (§2.2 para Infobae y la lista; §2.1 para los
PDFs QQPP y el universo de cadenas; §3.1 para los perfiles de Dunia
Ludlow Deloya). El agente lo verificó línea a línea contra el
`FUENTES.md` vigente, reportó la evidencia y propuso no retirar ni
duplicar nada. La validación humana confirmó la verificación y la
objeción se levantó sin cambios al inventario.

Queda como ejemplo de que la corrección fluye en ambas direcciones:
el agente cumple las instrucciones de supervisión, y también verifica
con evidencia y reporta cuando una instrucción presupone un hecho que
no se sostiene. Esa misma sesión sí trajo dos correcciones legítimas
que el agente aplicó: la etiqueta del apartado 4.1 del dossier
("Confirmado" no figuraba en las convenciones declaradas; se extendió
la convención con una quinta etiqueta, "Identificación
institucional"), y la verificación del slug `2606` de la URL de la
columna contra la fecha real de publicación (9 de junio de 2026
confirmado por fetch directo; el `2606` es convención interna del
medio, no fecha).

## Pendiente vivo

- **Folio PNT de la solicitud.** No alcanzable por vía técnica.
  Requiere gestión humana —que la fuente del testimonio comparta el
  folio o que se solicite a SuperISSSTE el oficio de respuesta—. Vive
  naturalmente en la Etapa 4 o en la Etapa 5 del encargo.

## Mapa de lo que viene

- **Etapa 3 — análisis jurídico de la negativa por "secreto
  comercial".** Próxima etapa del encargo. Procede a revisar el
  sustento legal con que SuperISSSTE invocó "secretos comerciales"
  para negar la información solicitada vía PNT, contra la legislación
  vigente de transparencia y acceso a la información pública.
- **Etapas 4 y 5.** Conforme al plan original del encargo, la
  gestión del folio PNT y el envío del material pertenecen a las
  etapas posteriores. Las acciones irreversibles sobre lo publicado
  y sobre el envío del material siguen requiriendo visto bueno
  humano explícito conforme al `PROTOCOLO-PRENSA`. Esta restricción
  no se levanta con el cierre de la Etapa 2.

---

*Observatorio Datos México · datosmexico.org*
