# Manifesto del Observatorio Datos México

El Observatorio Datos México es una iniciativa académica mexicana dedicada a responder
preguntas sobre el aparato público y las realidades cuantificables de México con datos
oficiales, metodología transparente y respaldo académico verificable.

Este documento declara qué es el observatorio, cómo trabaja, y qué representa para la
sociedad mexicana. Es artefacto vivo: se versiona en este repositorio y evoluciona con
cada ciclo de trabajo del observatorio.

---

## 1. Qué es el observatorio

El Observatorio Datos México es **infraestructura informacional pública** sobre México.
No es think tank, no es consultora, no es medio de comunicación, no es institución de
gobierno. Es un organismo académico cuya función es articular datos oficiales en
respuestas verificables a preguntas que la sociedad mexicana tiene derecho a poder
responder.

Tres rasgos lo definen institucionalmente:

**Es académico por construcción.** Cada afirmación del observatorio está respaldada por
fuente oficial citable, metodología reproducible y, en última instancia, por trabajo
académico publicado de los integrantes del observatorio o de la comunidad académica
afiliada.

**Es de servicio público por vocación.** El observatorio no comercializa sus respuestas
ni sus datos. El SDK es público y gratuito; las respuestas indexadas son accesibles
desde cualquier navegador o motor de búsqueda; las metodologías son auditables por
cualquier investigador externo. La sociedad mexicana es la beneficiaria primaria del
trabajo del observatorio.

**Es portable por diseño.** El observatorio no está atado institucionalmente a una
universidad, agencia o gobierno particular. Mantiene respaldos institucionales activos
en función de los ciclos de trabajo y del equipo académico que lo integra en cada
momento, pero su identidad, sus datos, sus repositorios y su capacidad de operar
sobreviven a cualquier cambio en esos respaldos.

---

## 2. Qué representa para la sociedad

México tiene datos oficiales sustanciales en INEGI, CONSAR, CONEVAL, Banxico, secretarías
federales y portales de datos abiertos de gobiernos estatales y municipales. Lo que no
tiene es **infraestructura accesible que responda preguntas concretas combinando esos
datos con metodología transparente.**

Hoy, una pregunta como "¿en qué municipio de México vive la persona que está más lejos
de un hospital público?" requiere descargar datos de salud, datos geográficos y datos
demográficos, procesarlos individualmente, validar metodologías de combinación, y
documentar el análisis. Esa carga recae sobre cada periodista, investigador, estudiante
o ciudadano interesado, una y otra vez, para cada pregunta nueva.

El observatorio existe para que esa carga deje de existir.

Cuando el observatorio responde una pregunta, lo hace una vez con calidad académica, y
esa respuesta queda disponible para siempre como artefacto público citable. La siguiente
persona que tenga la misma pregunta no parte de cero; parte de la respuesta del
observatorio. La pregunta posterior que combine la misma con otra dimensión, también.

La promesa al lector externo es simple: las preguntas cuantificables sobre México
pueden tener respuesta verificable y accesible. El observatorio asume la
responsabilidad académica de producirla con la disciplina que la calidad pública
mexicana merece.

---

## 3. Cómo crece el observatorio

El observatorio crece por **ciclos temáticos profundos**, no por anchura horizontal de
temas. Cada ciclo se concentra en un nicho académicamente coherente —pensiones,
vivienda, salud pública, educación, seguridad, mercado laboral— y produce durante su
duración tres clases de artefactos:

**Paper heavy con respaldo académico formal.** Cada ciclo del observatorio culmina en
un trabajo académico revisado por asesores y validado por la comunidad académica
relevante al nicho. El paper establece la metodología del ciclo, los hallazgos
principales y las decisiones interpretativas que después rigen el resto de la cobertura
del nicho.

**Datasets incorporados al SDK.** Cada ciclo amplía el corpus técnico del observatorio.
Los datasets que el paper del ciclo necesita se absorben al SDK público con la misma
disciplina que el resto del catálogo: validación contra fuente oficial, documentación
metodológica, reproducibilidad, citación canónica.

**Cobertura de preguntas indexadas.** Cada ciclo produce un cuerpo de artículos
individuales que responden, una a una, las preguntas concretas relevantes al nicho. Los
artículos usan los datasets del observatorio, citan el paper del ciclo como respaldo
metodológico, y se publican como artefactos académicos accesibles.

La calidad académica de cada ciclo individual es innegociable. La velocidad con la
que el observatorio abre ciclos nuevos depende exclusivamente de la capacidad humana
del observatorio en cada momento. Cuando crezca el equipo académico y emerjan líderes
de proyecto distintos, se podrán abrir múltiples ciclos en paralelo, manteniendo la
misma disciplina por ciclo individual.

---

## 4. Arquitectura del corpus de respuestas

Los ciclos definen la **producción** académica del observatorio. No definen la
**organización del corpus de respuestas que el observatorio publica.**

Una pregunta concreta puede usar datos de un solo ciclo o cruzar datos de varios. La
pregunta sobre tasas de reemplazo del SAR pertenece al ciclo de pensiones. La pregunta
sobre relación entre densidad de cotización al SAR y costos de vivienda en municipios
fronterizos pertenece simultáneamente a pensiones y vivienda. La pregunta sobre
movilidad laboral inter-municipal y su efecto sobre cobertura pensionaria atraviesa
mercado laboral, demografía y pensiones.

El corpus de respuestas del observatorio es por lo tanto un **grafo** semánticamente
conectado, no un árbol taxonómico cerrado por temas. Cada artículo es un nodo que cita
los datasets que utiliza y los papers metodológicos que lo respaldan; cada nodo está
conectado a otros nodos por proximidad temática, por compartición de datasets o por
relevancia académica.

Esta arquitectura tiene una consecuencia institucional importante: **cada nuevo ciclo
no añade contenido aislado al observatorio; multiplica el espacio combinatorio de
preguntas que el corpus completo puede responder.** Un dataset nuevo se cruza con todos
los datasets previos, lo que abre preguntas inter-temáticas que antes no eran
respondibles.

El valor académico del observatorio crece por lo tanto **combinatoriamente**, no
linealmente. Esa propiedad es estructural y la diferencía de catálogos de datos
horizontales que crecen por adición de datasets independientes.

---

## 5. Principios de trabajo académico

Cinco principios rigen el trabajo del observatorio en todos sus ciclos. Aplican
uniformemente a papers heavy, datasets incorporados al SDK y artículos indexados.

**Verificabilidad empírica.** Toda afirmación cuantitativa del observatorio debe poder
derivarse desde una fuente oficial pública mediante código reproducible. Las cifras se
acompañan siempre de la metodología que las genera. Lo que no es verificable
empíricamente no se publica como afirmación del observatorio.

**Transparencia metodológica.** Los métodos de procesamiento, agregación, limpieza y
combinación de datos se documentan junto a cada artefacto. Cuando una pregunta admite
múltiples métodos legítimos —distancia euclídea vs. distancia por carretera, por
ejemplo— el observatorio declara explícitamente el método elegido, su justificación y
las consecuencias del método para la respuesta.

**Honestidad sobre incertidumbre.** Cuando los datos disponibles no permiten responder
una pregunta con confianza académica, el observatorio lo declara explícitamente como
parte de la respuesta. "No se puede determinar con los datos públicos disponibles" es
respuesta legítima del observatorio cuando la realidad lo amerita. El silencio sobre
los límites del conocimiento no es opción.

**Trazabilidad de fuentes.** Cada dato citado por el observatorio puede rastrearse hasta
la publicación oficial original. La cadena entre fuente y afirmación es visible para
cualquier auditor externo. Las versiones, fechas de captura y URLs canónicas de las
fuentes se documentan junto a cada artefacto que las utiliza.

**Disciplina de revisión y errata.** Cuando un artefacto del observatorio se corrige
por error metodológico o actualización de datos, la corrección queda registrada
visiblemente. El historial de cada respuesta es público. El observatorio no reescribe
silenciosamente; documenta cómo evoluciona su propio entendimiento.

---

## 6. Autoría académica

Todo artefacto producido por el observatorio —papers, datasets, artículos, código,
documentación— corresponde en autoría exclusivamente al equipo académico humano que
integra el observatorio en cada momento. La autoría intelectual y operacional del
trabajo del observatorio es de las personas que lo componen.

Los asesores y la comunidad académica afiliada al observatorio en cada ciclo se
reconocen explícitamente por su rol específico de revisión, sin atribución de autoría
salvo cuando aporten contribución académica formal a un paper particular.

La citación canónica del observatorio como fuente colectiva es "Equipo de Datos México"
para artefactos del corpus general. La citación de papers individuales sigue las
convenciones académicas habituales por publicación.

---

## 7. Apertura a la comunidad

El observatorio no es proyecto cerrado de un equipo fijo. Su crecimiento depende
estructuralmente de la incorporación de investigadores académicos, asesores
especializados y colaboradores externos que aporten al trabajo en curso o abran ciclos
nuevos.

Los canales de contribución incluyen sugerencias de preguntas por parte del público,
revisión académica externa de artículos publicados, propuestas de incorporación de
datasets oficiales que el observatorio aún no cubre, y participación formal en ciclos
de trabajo abiertos.

La incorporación al equipo académico del observatorio se rige por estándares
equivalentes a los académicos formales: contribución verificable, alineamiento con los
principios de trabajo, y compromiso con la disciplina académica que el observatorio
sostiene.

La comunidad amplia del observatorio —lectores, citadores, periodistas, investigadores
externos que usan sus datos sin formar parte del equipo— es bienvenida sin requisito
formal alguno. El observatorio existe para esa comunidad.

---

## 8. Relación con instituciones académicas

El observatorio mantiene relaciones de respaldo académico con instituciones formales,
empezando por el ITAM —donde nació como proyecto académico— y extendiéndose a las
instituciones de origen y afiliación de cada integrante académico del equipo en cada
momento.

Estos respaldos se documentan explícitamente cuando son formales y se reconocen como
contexto cuando son informales. El observatorio cita las instituciones que lo respaldan
sin que ello implique subordinación de su identidad ni de su capacidad de operación
autónoma.

Si una relación institucional cambia o termina, el observatorio sobrevive con identidad
propia. Esta portabilidad es deliberada y se mantiene como propiedad estructural
permanente.

---

## 9. Compromisos permanentes con el lector

El observatorio asume públicamente y de manera permanente los siguientes compromisos
con cualquier persona que use sus artefactos:

Todo artefacto publicado por el observatorio puede ser auditado en su metodología y
reproducido desde fuentes oficiales por cualquier investigador externo.

El SDK público del observatorio es y permanecerá gratuito, abierto y citable
académicamente. El acceso a los datos del observatorio no estará condicionado a
suscripciones, autenticación obligatoria ni capacidades técnicas especiales del usuario.

Los errores detectados en artefactos del observatorio se corrigen explícitamente y de
manera trazable. Los lectores que detecten errores pueden reportarlos por los canales
de comunicación del observatorio.

La identidad del observatorio, su catálogo de datos, sus respuestas indexadas y sus
publicaciones académicas seguirán siendo accesibles públicamente sin restricción más
allá de la atribución académica habitual.

---

## 10. Sobre este documento

Este manifesto es artefacto vivo del observatorio. Se versiona en este repositorio y
evoluciona explícitamente con cada cambio sustantivo. Las modificaciones quedan
registradas en el historial del repositorio y son atribuidas al equipo académico que
las aprueba.

Este documento no agota la identidad del observatorio; la articula en un momento del
tiempo. Las decisiones operacionales específicas, los detalles técnicos de cada ciclo,
las personas concretas que integran el equipo en cada momento, las relaciones
institucionales activas, son información complementaria que vive en otros artefactos
del observatorio.

El observatorio recibe críticas, sugerencias y revisiones a este manifesto a través de
los canales de comunicación del observatorio. Las contribuciones que mejoren la
articulación de su identidad son bienvenidas por construcción.

---

*Observatorio Datos México · datosmexico.org*
