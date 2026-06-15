# Caso 001 — Bitácora de cierre de la Etapa 3

> **Etapa 3 completada y mergeada a `main` vía PR #10 (sustento
> normativo verificado) y PR #11 (análisis del marco de
> transparencia).**
> Fecha del cierre: 2026-06-15.

## Estado

- **Entregables centrales de la etapa:**
  - `casos/001-jitomate/SUSTENTO-NORMATIVO.md` — recopilación
    verificada del marco normativo aplicable, con cada artículo
    anclado al texto consolidado vigente (DOF y Cámara de Diputados,
    `diputados.gob.mx/LeyesBiblio`).
  - `casos/001-jitomate/ANALISIS-TRANSPARENCIA.md` — análisis del
    marco frente a los hechos del caso, en tres movimientos
    (exposición del marco, yuxtaposición con los hechos, preguntas
    abiertas), construido enteramente sobre el sustento sin introducir
    artículos ni hechos no anclados.
- **Inventario y dossier de Etapas 1 y 2:** `BITACORA.md`,
  `FUENTES.md`, `CRONOLOGIA.md` y `DOSSIER.md` heredados sin cambios.

## Hallazgo central

La LGTAIP vigente (DOF, 20 de marzo de 2025), en su artículo 115,
acota el secreto comercial al supuesto de que "no involucren el
ejercicio de recursos públicos". En el caso, SuperISSSTE adquiere el
jitomate con presupuesto público. El análisis pone ambos planos lado
a lado y deja abierto el cierre del silogismo: el observatorio
expone, yuxtapone y formula preguntas; no emite veredicto sobre la
legalidad de la negativa. La interpretación es competencia de quien
la recibe.

## Reglas de método sostenidas en la etapa

- **Estructura exposición + yuxtaposición + preguntas abiertas.** El
  análisis no dictamina ilegalidad de la conducta del sujeto
  obligado. La inferencia que conectaría marco y hechos no se
  escribe.
- **Cero valoración de la reforma de transparencia de 2025.** El
  cambio del INAI a Transparencia para el Pueblo y a la Secretaría
  Anticorrupción y Buen Gobierno entra como **hecho institucional
  descriptivo**, sin lenguaje valorativo ni de las fuentes críticas
  ni de las fuentes oficiales.
- **Separación estricta entre el hilo de transparencia y el contraste
  de precios del SNIIM.** El análisis no menciona el contraste 19.90
  menudeo vs 23.08 mayoreo ni invoca ningún otro indicio para
  insinuar ocultamiento intencional. Son hilos separados y se
  mantienen separados.
- **Anclaje estricto a fuente oficial fechada.** Cada artículo citado
  en el sustento se ancló al texto consolidado vigente de la LGTAIP
  publicado por la Cámara de Diputados, y a la publicación del
  decreto en el Diario Oficial de la Federación cuando aplicó. Sin
  citas legales de memoria.

## Decisiones técnicas verificadas (no se reabren)

- **Numeración del artículo 115 de la LGTAIP vigente.** La cláusula
  del secreto comercial —"cuya titularidad corresponda a las personas
  particulares, sujetos de derecho internacional o a sujetos
  obligados cuando no involucren el ejercicio de recursos
  públicos"— vive en el **artículo 115** de la LGTAIP vigente, **no
  en el 116**. Verificado de tres formas independientes contra el PDF
  de la Cámara de Diputados con hash SHA-256 estable, dos métodos de
  extracción y lectura directa del PDF restringida a las páginas
  44-45 donde reside el Capítulo III "De la Información
  Confidencial". Cotejo con LGTAIP 2015 abrogada (también art. 115)
  y LFTAIP 2016 abrogada (art. 113, distinta numeración); ninguna de
  las tres normas ubica esa cláusula en el art. 116. Registrado en
  `SUSTENTO-NORMATIVO.md` §7.
- **Distinción reserva (Cap. II) vs confidencialidad (Cap. III) del
  Título Sexto.** La cláusula del secreto comercial cae en
  **información confidencial** (Capítulo III), no en información
  reservada (Capítulo II). En consecuencia, las reglas específicas
  de reserva —análisis caso por caso del último párrafo del art. 102
  y fundamentación de causales de reserva por prueba de daño del
  art. 113— no se trasladan al supuesto del art. 115 sin más. El
  análisis ancla las exigencias generales de motivación, prueba de
  daño "en todo momento" y carga de la prueba a los artículos
  correctos para el supuesto de confidencialidad (102 cuerpo general,
  106, 107, 108).

## Tres capas de validación operando

La etapa dejó constancia de tres capas de validación funcionando en
paralelo, y un episodio en cada una de ellas:

1. **Verificación contra fuente primaria oficial.** El sustento fue
   construido descargando el PDF consolidado vigente de la Cámara de
   Diputados y el Diario Oficial de la Federación, leyendo el
   articulado directamente, y citando literalmente. Sin citas
   legales de memoria.
2. **Supervisión humana sobre el sustento.** En el ciclo del PR #10
   la supervisión observó que la cláusula del secreto comercial
   correspondería al artículo 116 de la LGTAIP y no al 115, y que la
   redacción con esa numeración pertenecería a la Ley Federal
   (LFTAIP). La observación no se sostiene contra fuente primaria:
   en la LGTAIP vigente esa cláusula está en el artículo 115; en la
   LFTAIP abrogada, en el artículo 113; ninguna de las tres normas
   consultadas (LGTAIP vigente, LGTAIP 2015 abrogada, LFTAIP 2016
   abrogada) ubica la cláusula en el 116. El agente lo verificó con
   evidencia y reportó; la validación humana confirmó y la
   observación se levantó sin cambios al sustento. Es coherente con
   el episodio de doble validación de la Etapa 2: la corrección
   fluye en ambas direcciones.
3. **Auto-verificación del agente sobre su propio análisis.** En el
   ciclo del PR #11 el agente, al revisar los artículos 102 y 113
   citados en el apartado 2.3 del análisis, detectó una imprecisión
   no señalada por la supervisión: el último párrafo del artículo
   102 y el artículo 113 son específicos a información reservada
   (Capítulo II), mientras que la cláusula del secreto comercial del
   artículo 115 cae bajo información confidencial (Capítulo III).
   Citar esos dos artículos para sostener "la clasificación se
   realiza caso por caso, mediante prueba de daño" en el supuesto
   del artículo 115 extendía una regla de reserva al supuesto de
   confidencialidad. El agente retiró la cita imprecisa y la
   reemplazó por anclaje exacto al cuerpo general del artículo 102
   y al artículo 106 (con cita literal de "en todo momento, aplicar
   una prueba de daño"). La precisión técnica subió sin entrar en
   capa interpretativa: el análisis no afirma ni niega que la
   prueba de daño aplique a la clasificación como confidencial bajo
   el artículo 115; la cuestión específica queda abierta en la
   sección 3 del análisis.

## Nota para la validación humana

El análisis es jurídico y se beneficiaría de una **segunda mirada de
alguien con formación en derecho de transparencia y acceso a la
información** antes de su firma final o de su eventual entrega a la
periodista. El punto que más vale ese repaso, identificado por la
auto-verificación del agente, es **qué requisitos de prueba de daño
y de motivación aplican a la clasificación como información
confidencial frente a los aplicables a la clasificación como
información reservada**. El análisis los deja correctamente
distinguidos a nivel de articulado y deja la subsunción específica
abierta como pregunta; conviene que esa decisión técnica se valide
con alguien que conozca la jurisprudencia administrativa reciente
sobre el alcance del artículo 115 LGTAIP y sobre la aplicabilidad
de la prueba de daño a la confidencialidad cuando el sujeto obligado
ejerce recursos públicos.

## Pendiente vivo

- **Folio PNT de la solicitud de Pamela Cerdeira.** Sin cambios
  respecto a Etapa 2. No alcanzable por vía técnica desde el
  cliente; requiere que la autora comparta el folio, o que se
  solicite a SuperISSSTE el oficio íntegro de la respuesta. Es
  gestión humana y pertenece a las etapas posteriores del encargo.

## Mapa de lo que viene

- **Etapa 4 — acción propia: redactar la solicitud de transparencia
  del observatorio.** Con el sustento y el análisis ya anclados,
  procede formular la propia solicitud del observatorio por la
  Plataforma Nacional de Transparencia, dirigida al sujeto obligado
  pertinente, en los términos que el marco vigente permite. Sigue
  pendiente decidir scope exacto, sujeto destinatario y formulación
  precisa de la pregunta, así como el régimen de visibilidad de la
  solicitud y de su eventual respuesta.
- **Etapa 5 — materialización pública y entrega a Pamela Cerdeira.**
  Conforme al `PROTOCOLO-PRENSA.md`, la entrega a la periodista del
  material consolidado por el observatorio sobre el caso, y la
  comunicación pública del encargo en la propia voz del
  observatorio. Las acciones irreversibles sobre lo publicado y
  sobre el envío a la periodista siguen requiriendo visto bueno
  humano explícito. Esta restricción no se levanta con el cierre de
  la Etapa 3.

---

*Observatorio Datos México · datosmexico.org*
