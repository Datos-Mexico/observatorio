# Modelo del Observatorio Datos México

Este documento articula públicamente qué hace el Observatorio Datos México,
cómo se sostiene y bajo qué reglas opera frente a quien lo financia o le
encarga trabajo. Es complemento del `MANIFESTO.md`: donde aquél declara la
doctrina académica, éste declara el modelo institucional.

Es público por construcción. El observatorio publica las reglas bajo las que
opera con el mismo estándar con el que publica sus datos. La transparencia
sobre el modelo es coherente con la transparencia metodológica que el
observatorio exige a su propio trabajo.

Este documento es artefacto vivo y se versiona en este repositorio.

---

## 1. Qué es el observatorio y por qué existe

El Observatorio Datos México es infraestructura informacional pública sobre
México. No es think tank, no es consultora, no es medio de comunicación, no
es institución de gobierno. Es un organismo académico cuya función es
articular datos oficiales en respuestas verificables a preguntas que la
sociedad mexicana tiene derecho a poder responder.

Existe porque México tiene datos oficiales sustanciales —en INEGI, CONSAR,
CONEVAL, Banxico, secretarías federales, gobiernos estatales y municipales—
pero no tiene infraestructura accesible que los articule en respuestas
concretas con metodología transparente. Esa carga recae hoy, una y otra vez,
sobre cada periodista, investigador, estudiante o ciudadano interesado.

Existe también en un momento particular del país. La desaparición del INAI
dejó un vacío institucional en la garantía del derecho de acceso a la
información pública. Ese vacío no es la razón de ser del observatorio —el
observatorio existiría con o sin INAI—, pero sí define el horizonte público
en el que opera: el costo civil de la opacidad subió, y la responsabilidad
de organismos académicos independientes frente a los datos públicos subió
con él.

---

## 2. El problema que resuelve

México no carece de datos. Carece de infraestructura que vuelva los datos
respondibles. Y carece, en una capa más profunda, de organismos capaces de
levantar el dato cuando éste existe pero no está públicamente accesible.

El observatorio ocupa un lugar que ni una voz individual ni una institución
con agenda propia pueden ocupar. Tiene la identidad pública para solicitar
formalmente lo que existe pero no se ve. Tiene la independencia para
investigar por fuera lo que no se entrega. Tiene la disciplina académica
para que el trabajo quede registrado bien y de manera permanente.

Dos casos ilustran el tipo de trabajo que nadie estructuralmente está
haciendo hoy en México:

**Información oficial técnicamente exigible pero no publicada.** Existen
estudios actuariales, evaluaciones, modelos y documentos técnicos que las
instituciones públicas mexicanas producen por mandato y que deben existir,
pero que no se publican o que se entregan parcialmente. Un ciudadano
individual difícilmente logra que la institución los entregue. Una
organización académica con identidad pública sí puede solicitarlos
formalmente, documentar la respuesta —concedida, parcial o negada— y, en
cualquier caso, reconstruir por fuera lo que el dato disponible permita
inferir. El observatorio puede sostener ese trabajo durante los meses que
toma; un individuo no.

**Información oficial publicada pero ilegible.** Existen datos públicos
—rendimientos de subastas de deuda, ejecuciones presupuestales, padrones,
contratos— que se publican técnicamente pero de forma dispersa, sin serie
histórica consolidada, sin documentación accesible que vuelva el dato
utilizable. Alguien tiene que organizarlo, mantenerlo en el tiempo y
volverlo citable. Es exactamente el tipo de trabajo por el que un despacho
de análisis, una asociación empresarial o un medio especializado pueden
financiar el encargo — y por el que el observatorio puede aceptarlo porque
produce, como subproducto, un dataset público permanente.

---

## 3. Tres capas, una sola misión

El trabajo del observatorio se organiza en tres capas. No son un menú de
servicios: son tres formas de cumplir la misma misión. Las describimos en
orden de centralidad, no de volumen.

### 3.1 Misión propia — el núcleo

La misión propia es la agenda de transparencia del observatorio sobre el
aparato público y las realidades cuantificables de México. Es el trabajo
de fondo: los ciclos temáticos profundos —pensiones, vivienda, salud
pública, educación, seguridad, mercado laboral—, los papers académicos que
respaldan cada ciclo, los datasets incorporados al SDK público, los
artículos del corpus pregunta-respuesta que se publican uno a uno.

Es el núcleo del observatorio. El resto de las capas existe para sostener,
multiplicar o financiar este núcleo, no para reemplazarlo. Una organización
cuyo trabajo central sean los encargos pagados sería una consultora con
fachada académica; el observatorio es lo contrario: una agenda académica
pública que se sostiene parcialmente con trabajo de encargo bajo reglas
estrictas.

### 3.2 Investigaciones express — músculo cívico

Las investigaciones express son trabajos de corto alcance que el
observatorio toma por convicción cívica, gratuitos o casi. Responden
preguntas acotadas —de medios, periodistas o ciudadanía— que requieren
rigor pero no la profundidad de un ciclo completo. Su producto típico es
un dossier de hechos verificados, una cronología trazable, un análisis de
fuentes públicas.

No son el pilar económico del observatorio. Existen porque hacerlas es
coherente con la misión, porque generan presencia pública, porque
construyen relaciones con periodistas y porque cimientan la reputación del
observatorio como organismo al que se puede acudir. Son el músculo cívico
del proyecto.

El primer caso público del observatorio bajo esta capa fue el caso 001
sobre los precios del jitomate y los contratos del SuperISSSTE, atendido a
partir de la pregunta original de una periodista. El protocolo operativo
de estos encargos se especifica en `PROTOCOLO-PRENSA.md`.

### 3.3 Investigaciones profundas por encargo — la crema

Las investigaciones profundas por encargo son trabajos prolongados,
sostenidos en el tiempo, que producen hallazgos nuevos sobre opacidades
reales. Toman meses; requieren acceso formal a información que un actor
individual no puede solicitar; cruzan microdatos oficiales con archivo,
con solicitudes de transparencia, con análisis técnico de profundidad.

Esta capa es la que se cobra. Es trabajo de calidad y duración equivalente
a la consultoría académica seria, y se cotiza con esa lógica. El cliente
puede ser una fundación con agenda temática propia, una asociación
empresarial con interés legítimo en un mercado, un despacho que requiere
análisis técnico independiente, un medio que financia un reportaje de
investigación largo.

Lo que el cliente compra es trabajo riguroso producido bajo las reglas
públicas del observatorio. Lo que el cliente **no** compra está descrito
explícitamente en la siguiente sección.

---

## 4. La regla de independencia

Esta sección es el corazón del documento. Es la regla que vuelve posible
que el observatorio acepte financiamiento sin perder independencia, y la
regla que cualquier cliente o financiador acepta por escrito antes de que
el observatorio tome un encargo.

**Quien encarga propone el tema y el alcance. Nunca el hallazgo.**

El cliente puede proponer la pregunta. *"¿Cuál ha sido la trayectoria de
los rendimientos de los bonos del gobierno en los últimos diez años?"* es
pregunta. *"Documenten que la trayectoria ha sido desfavorable"* no es
pregunta: es conclusión presupuesta, y no es objeto de un encargo
legítimo.

**El observatorio elige si toma el encargo.**

El observatorio tiene misión propia y criterio propio. No acepta cualquier
pedido. Un encargo se acepta cuando es coherente con la misión, cuando es
técnicamente respondible con rigor académico, y cuando no compromete la
independencia del observatorio frente a otros temas, otros actores o el
corpus existente. Cuando un encargo no cumple estos criterios, se rechaza
sin negociación.

**El método es público.**

La metodología bajo la que se responde la pregunta se publica. No hay
método propietario, ni cláusula que oculte cómo se llegó al hallazgo.
Quien encarga sabe, desde la firma, que la metodología es auditable por
cualquier tercero bajo los mismos cinco principios académicos del
`MANIFESTO.md` §5: verificabilidad, transparencia metodológica, honestidad
sobre incertidumbre, trazabilidad de fuentes, disciplina de errata.

**Todo se publica abiertamente, salga lo que salga.**

El hallazgo del encargo se publica en el corpus público del observatorio,
con la misma disciplina de citación, errata y trazabilidad que el resto.
Se publica incluso si el hallazgo perjudica a quien encargó, incluso si
contradice las hipótesis con las que el cliente llegó, incluso si confirma
lo que el cliente preferiría que no se confirmara. La publicación abierta
no es negociable y es parte explícita del precio.

**Lo que el observatorio vende es el rigor, no el silencio.**

Esta es la frase corta que resume las cuatro anteriores. Lo que se compra
es trabajo riguroso, hecho a fondo, sobre una pregunta legítima. No se
compra una conclusión preferida, ni se compra silencio sobre lo
encontrado, ni se compra una versión maquillada de los hechos. El precio
incluye el riesgo de que el hallazgo no le guste al cliente. Quien no
acepta ese riesgo no es cliente del observatorio.

---

## 5. Cómo nos sostenemos

### 5.1 Estado financiero actual

El observatorio opera hoy a pérdida. Los costos de infraestructura
técnica, dominios, servicios y operación los cubre el equipo fundador. El
equipo trabaja sin compensación monetaria por el trabajo realizado para el
observatorio. Ningún integrante del observatorio recibe a la fecha ingreso
del observatorio.

No hemos recibido financiamiento externo a la fecha de este documento.

Declarar esto públicamente es decisión deliberada. La fortaleza del
observatorio en este momento es su honestidad sobre su propia condición:
no se finge sostenibilidad que no se tiene, no se exagera capacidad que no
existe, no se proyecta institucionalidad que aún está en construcción. La
transparencia financiera es coherente con la transparencia metodológica
que el observatorio exige a su propio trabajo.

### 5.2 Hacia adelante: dos fuentes diferenciadas

El observatorio se sostendrá por dos fuentes claramente diferenciadas.

**Encargos profundos (capa 3.3).** Trabajos pagados, bajo la regla de
independencia del §4. Son la fuente prevista de ingreso operacional
sostenido.

**Apoyo filantrópico institucional.** Apoyos de fundaciones dedicadas a la
transparencia, el periodismo de investigación o la infraestructura cívica.
Son la fuente prevista de capacidad operativa de fondo: lo que permite
mantener equipo, infraestructura y la misión propia (§3.1) que no se
financia por encargo.

### 5.3 El rol de las fundaciones — distinción crítica

Las fundaciones que apoyan al observatorio no son clientes. La distinción
es estructural y se hace explícita en cualquier acuerdo que el
observatorio firme.

Un cliente, bajo el régimen del §4, propone un tema y un alcance, y
recibe el hallazgo —cualquier hallazgo— sobre ese tema acotado, publicado
abiertamente.

Una fundación, en cambio, apoya la capacidad del observatorio de cumplir
su misión propia. Sostiene la infraestructura, el equipo, la independencia
operativa. **No dirige el contenido.** No elige qué publica el
observatorio, ni sobre qué temas, ni con qué énfasis, ni en qué momento.
El observatorio rinde cuentas sobre su trabajo —es académico, todo es
público— pero no recibe encargos editoriales de la fundación.

La aceptación explícita de esta cláusula por parte de la fundación es
condición de la relación. Sin esa aceptación por escrito, no hay relación
de apoyo.

---

## 6. Gobernanza y figura legal

### 6.1 No-dependencia individual

El observatorio no depende de ningún integrante en particular. Su
continuidad está en la misión y en el método, no en personas individuales.
Esta propiedad es deliberada y estructural: si una persona se incorpora,
se aleja o cambia de rol, el observatorio sobrevive porque su identidad
reside en la doctrina pública, en el corpus versionado, en los datasets
reproducibles y en el método que vuelve cualquier afirmación auditable por
un tercero.

El trabajo del observatorio lo sostiene un núcleo de personas
comprometidas con la misión y una comunidad más amplia que participa en
las sesiones abiertas, en la revisión académica, en la incorporación de
datasets, en la discusión de los ciclos en curso. Esa comunidad fluctúa
por construcción y es parte saludable del proyecto: una institución
académica no se define por su headcount, sino por la disciplina con la
que sostiene su trabajo a lo largo del tiempo.

### 6.2 Figura legal

El observatorio opera hoy de manera informal. Su intención formal es
constituirse como Asociación Civil bajo la legislación mexicana. A la
fecha de este documento, el trámite legal de constitución no ha sido
iniciado: estamos en fase preparatoria, no en expediente abierto.
Declararlo así es parte del compromiso de no sobreafirmar la
institucionalidad del proyecto mientras se construye.

### 6.3 Lo formalizado y lo en construcción

**Lo que está formalizado hoy:**

- La identidad pública del observatorio y su dominio (`datosmexico.org`).
- La doctrina académica (`MANIFESTO.md`) y su gobernanza editorial
  (`ARQUITECTURA-ARTICULOS.md`, `SCHEMA.md`, `CITACION.md`,
  `PROTOCOLO-PRENSA.md`).
- El régimen operacional del corpus (`CLAUDE.md` del repositorio
  institucional).
- Los compromisos públicos de gobernanza visibles en la sección
  Gobernanza del sitio canónico.

**Lo que está en construcción y se declara explícitamente:**

- Constitución de la Asociación Civil (hoy en fase preparatoria, sin
  trámite formal iniciado).
- Estatutos formales y reglamento interno.
- Política formal de conflictos de interés y de aceptación o rechazo de
  encargos.
- Composición y funcionamiento de un consejo académico externo de
  revisión.
- Política formal de aceptación de apoyos filantrópicos, complementaria
  del §5.3 de este documento.

Este documento se actualizará explícitamente conforme cada uno de estos
elementos quede formalizado. La transparencia sobre lo que aún no está
construido es parte del compromiso del observatorio con quien lo lee.

---

## 7. Compromisos asociados a este documento

El observatorio asume públicamente, asociado a este modelo, los siguientes
compromisos. Tres son firmes y aplican sin excepción; el cuarto reconoce
un derecho del observatorio a comunicar, sujeto al criterio propio que
rige cualquier decisión institucional.

1. **Publicación de todo encargo aceptado** en el registro público del
   observatorio, con la pregunta original, las fuentes utilizadas, el
   equipo que ejecutó el trabajo y el hallazgo entregado. Compromiso
   firme.

2. **Publicación de los apoyos filantrópicos recibidos**, con el nombre
   de la fundación, el monto, el periodo cubierto y la confirmación
   explícita de la cláusula de no-dirección de contenido (§5.3).
   Compromiso firme.

3. **Errata pública** sobre cualquier afirmación de este documento que
   requiera corrección, bajo el mismo régimen aplicable a los artículos
   del corpus. Compromiso firme.

4. **Comunicación pública de encargos rechazados, cuando proceda.** El
   observatorio podrá hacer público un encargo rechazado cuando el
   rechazo en sí mismo sea de interés público, con el motivo del
   rechazo. La decisión de comunicar queda en el criterio del
   observatorio, coherente con que el observatorio siempre elige (§3.3,
   §4). No se revela comunicación privada con quien encargó, salvo
   autorización expresa.

---

## 8. Sobre este documento

Este documento es artefacto vivo del observatorio. Se versiona en este
repositorio y evoluciona explícitamente con cada cambio sustantivo. Las
modificaciones quedan registradas en el historial del repositorio y son
atribuidas al equipo académico que las aprueba.

Versión actual: 1.0
Fecha: 2026-06-25

---

*Observatorio Datos México · datosmexico.org*
