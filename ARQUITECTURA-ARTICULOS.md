# Arquitectura de los artículos pregunta-respuesta

Este documento articula la arquitectura específica del componente del corpus
académico del Observatorio Datos México dedicado a artículos pregunta-respuesta.
Es complemento del MANIFESTO institucional: detalla cómo se materializan en la
unidad operativa más visible del observatorio los compromisos generales ya
declarados.

El documento es artefacto vivo y se versiona en este repositorio.

---

## 1. Propósito de este documento

El MANIFESTO declara que el corpus del observatorio crece como grafo
semánticamente conectado, que la producción académica se organiza por ciclos
temáticos profundos, y que la responsabilidad académica de cada afirmación
publicada es innegociable. Este documento articula cómo esa doctrina se
materializa en los artículos individuales que responden, una a una, preguntas
concretas sobre el aparato público y las realidades cuantificables de México.

El documento es complemento del MANIFESTO. No redefine sus principios, no
introduce excepciones a sus compromisos, no sustituye su autoridad institucional.
Articula la arquitectura del componente artículos pregunta-respuesta con la
disciplina necesaria para que sea reproducible, auditable y portable según los
criterios institucionales ya establecidos.

Las decisiones de implementación específica que materializan esta arquitectura
viven en otros artefactos del observatorio. Este documento es doctrina, no
ejecución.

---

## 2. Tipos de artículo pregunta-respuesta

El observatorio distingue dos clases de artículos pregunta-respuesta por la
naturaleza temporal de la pregunta original.

**Snapshot temporal.** Artículo cuya respuesta refiere a un momento específico
de los datos. La pregunta está anclada en el tiempo: cita un periodo, una fecha
de corte, una versión publicada del dataset, o un evento puntual. Ejemplo:
"¿Cuántos servidores públicos tenía la CDMX en el padrón de marzo 2026?". El
significado académico de la respuesta no se altera cuando los datos posteriores
cambian. La respuesta es válida indefinidamente como fotografía verificable de
un momento histórico.

**Puente.** Artículo cuya respuesta refiere al estado vigente de los datos. La
pregunta usa marcadores temporales indexicales —"actualmente", "hoy", "ahora",
"vigente", "actual"— o verbo en presente sin ancla temporal explícita. Ejemplo:
"¿Cuántos servidores públicos tiene la CDMX actualmente?". El significado
académico de la respuesta exige que refleje el estado vivo de los datos
subyacentes. Cuando esos datos cambian, la respuesta queda potencialmente
desfasada y el artículo debe responder a esa divergencia.

**Criterio de clasificación al momento de generación.** La clasificación se
determina durante la generación de la pregunta. La formulación de la pregunta
se analiza por presencia de anclas temporales explícitas: fechas, versiones de
dataset, eventos datados. Las anclas explícitas clasifican la pregunta como
snapshot temporal. Su ausencia, junto con presencia de marcadores indexicales o
verbo en presente, la clasifica como puente.

La clasificación es propiedad permanente del artículo. Un artículo snapshot
temporal permanece snapshot durante toda su vida útil. Un artículo puente
permanece puente hasta que sea superado por una versión posterior; no se
convierte en snapshot retroactivamente. La inmutabilidad de la clasificación
garantiza coherencia académica longitudinal del corpus.

Cuando una pregunta admite ambigüedad genuina entre snapshot y puente, prevalece
por defecto la clasificación más estricta —puente— y la asignación se revisa
explícitamente en la firma humana.

---

## 3. Ciclo de vida de un artículo

Cada artículo pregunta-respuesta atraviesa cinco etapas verificables
públicamente.

**Generación de la pregunta.** La pregunta candidata se identifica por
detección de gaps en el corpus, demanda externa registrada, o expansión natural
desde artículos existentes. La pregunta se ubica en el grafo del corpus con
tags semánticos preliminares —tema principal, temas secundarios, datasets
relevantes, periodo temporal, ámbito geográfico— y se clasifica por tipo
temporal (snapshot vs puente) y por sensibilidad académica (directa vs
sensible).

**Resolución computacional.** El sistema ejecuta las consultas sobre los
datasets relevantes, aplica las agregaciones documentadas, articula la prosa
de respuesta junto a la metodología, indexa el artículo en el corpus, y
enlaza explícitamente a las fuentes oficiales utilizadas y a los artículos
previos relacionados.

**Publicación pre-firma.** Para artículos clasificados como directos, el
artículo se publica al corpus público con banner visible que declara el estado
pre-firma y cita el SLA institucional. La metodología completa, las fuentes y
los caveats son visibles desde el primer momento.

**Revisión humana.** El revisor académico audita en orden: metodología
—consistente con paper de ciclo o doctrina general—, fuentes citadas —versión,
fecha de captura, URL canónica—, caveats incluidos —incertidumbre declarada
apropiadamente—, relevancia —la pregunta merece ocupar un nodo del corpus—, y
enlaces —consistentes con el grafo. La revisión consume entre veinte y cuarenta
minutos de trabajo académico por artículo.

**Firma humana.** El revisor firma el artículo con su nombre y la fecha de
revisión. La firma queda públicamente registrada en el artículo y en el
historial del corpus. La firma es declaración explícita de responsabilidad
académica del revisor sobre el contenido publicado al momento de la firma.

---

## 4. Política de publicación de dos estados

El observatorio publica artículos directos en dos estados secuenciales: pre-firma
y firmado.

**Estado pre-firma.** El artículo es público desde el momento de generación,
con banner visible que indica el estado y declara el compromiso SLA
institucional. La metodología, las fuentes y los caveats son visibles
exactamente igual que en el estado firmado. La firma del revisor está ausente
y declarada explícitamente como pendiente. El lector externo puede leer el
artículo, citarlo con la marca de estado pre-firma, y consultar la metodología
sin restricción.

**Estado firmado.** Tras la firma del revisor, el banner pre-firma se reemplaza
por la firma visible del revisor académico, con su nombre y la fecha de firma.
El historial del artículo registra la transición de pre-firma a firmado de
manera trazable: cualquier auditor puede verificar cuándo se publicó pre-firma
y cuándo se firmó.

**Distinción de autoría según estado.** El estado pre-firma es contenido
institucional del observatorio: la generación computacional articula la
respuesta usando metodología y datos oficiales del observatorio, bajo
responsabilidad colectiva de la institución, sin reclamar autoría individual
humana hasta que la firma se complete. El estado firmado es contenido bajo
autoría académica del revisor: la firma del revisor declara responsabilidad
pública individual sobre el contenido del artículo en ese momento. La
transición de pre-firma a firmado es por tanto transición de autoría
institucional colectiva a autoría académica individual, trazable en el
historial del artículo. Esta articulación refina, no contradice, el MANIFESTO
sección 6 sobre autoría humana exclusiva del observatorio: la responsabilidad
académica final sobre cada artículo publicado del corpus reside siempre en una
persona del equipo académico humano del observatorio.

**SLA institucional público.** El observatorio asume públicamente un máximo de
siete días corridos entre la publicación pre-firma y la firma. Cuando un
artículo excede el SLA sin firma, el banner se actualiza para reflejar el
incumplimiento explícitamente. El observatorio no oculta SLAs incumplidos: los
exhibe como parte de su disciplina pública.

La elección de publicar pre-firma respeta el principio de servicio público
inmediato sin comprometer la trazabilidad de la responsabilidad académica del
revisor.

---

## 5. Clasificación por sensibilidad académica

No todos los artículos pueden publicarse pre-firma. La sensibilidad académica
de la pregunta determina el flujo de publicación.

**Pregunta directa.** Pregunta cuya respuesta no genera riesgo de
estigmatización social, no descansa sobre definiciones legítimamente
contestables, y no se presta a interpretación causal cuando los datos solo
permiten afirmaciones descriptivas. Las preguntas directas siguen el flujo
estándar: publicación pre-firma, revisión, firma. La mayoría de las preguntas
cuantificables del aparato público mexicano son directas.

**Pregunta sensible.** Pregunta cuya respuesta puede ser leída como
estigmatización social, depende de definiciones contestables —qué cuenta como
"pobreza", "informalidad", "violencia"—, o riesgo de ser interpretada como
afirmación causal sin respaldo apropiado. Las preguntas sensibles siguen flujo
review-first: el artículo no se publica hasta que el revisor humano ha aprobado
el contenido. La publicación es directamente en estado firmado.

**Clasificación al momento de generación.** La clasificación de sensibilidad se
asigna automáticamente junto con la clasificación de tipo temporal. Los
criterios de sensibilidad están documentados en el corpus metodológico del
observatorio y son auditables externamente. La clasificación inicial puede ser
revisada por cualquier integrante del equipo durante el ciclo de vida del
artículo.

**Reclasificación retroactiva.** Cuando un artículo publicado pre-firma se
identifica posteriormente como sensible, el mecanismo de reclasificación
retroactiva se invoca (sección 9 de este documento). El observatorio prefiere
transparencia sobre el error de clasificación a ocultamiento del artículo.

---

## 6. Coherencia del artículo con datos subyacentes

La coherencia de un artículo con los datos subyacentes depende de su tipo
temporal.

**Artículo snapshot temporal.** El artículo cita explícitamente la fecha de
captura de los datos, la versión del dataset publicada por la fuente oficial,
y la URL canónica de descarga. Cuando el dataset se actualiza, el artículo no
se modifica: la fotografía permanece. La nueva versión del dataset puede
generar artículos snapshot adicionales para periodos posteriores, enlazados
como secuencia temporal explícita, pero el artículo original permanece
accesible y citable indefinidamente.

**Artículo puente.** El artículo declara visiblemente la marca temporal del
cómputo de la respuesta y la marca temporal de la versión más reciente del
dataset subyacente. Cuando esas marcas coinciden, el artículo está vigente.
Cuando divergen, el observatorio aplica una de dos respuestas según la
magnitud de la divergencia.

**Regeneración para cambios menores.** Cuando el dataset se actualiza con
cambios que no alteran la estructura de la respuesta ni las magnitudes que la
sustentan cualitativamente, el sistema regenera la respuesta con la versión
nueva. El artículo queda visible con marca temporal actualizada y la firma del
revisor original se preserva, dado que la metodología no cambió. La
regeneración queda registrada en el historial del artículo y notificada al
revisor que firmó la versión anterior.

**Re-revisión humana para cambios estructurales.** Cuando el dataset se
actualiza con cambios estructurales —nuevas categorías, redefiniciones
metodológicas de la fuente, magnitudes que alteran la conclusión cualitativa
de la respuesta—, el artículo entra en estado "respuesta en re-revisión", con
banner visible. El revisor original, o un revisor delegado por el equipo,
audita la respuesta nueva con el mismo protocolo de revisión inicial. La
versión anterior queda accesible como histórico citable.

**Disclaimer dinámico permanente.** Todo artículo puente exhibe permanentemente
las marcas temporales del cómputo y de la versión del dataset. El lector puede
verificar la vigencia de la respuesta sin necesidad de inferirla.

---

## 7. Coherencia del artículo con paper de ciclo

Los artículos producidos durante un ciclo temático del observatorio derivan su
validación metodológica del paper del ciclo. La articulación de esa dependencia
depende del momento de publicación del paper respecto del artículo.

**Artículos posteriores al paper.** Cuando el paper del ciclo ya está
publicado, el artículo cita el paper como respaldo metodológico canónico desde
su primera versión. La cita es explícita y visible en el artículo, no
enterrada en metadata.

**Artículos previos al paper.** Cuando el ciclo está en curso y el paper aún
no se ha publicado, los artículos del ciclo declaran explícitamente
"metodología provisional del ciclo en curso, paper en preparación", con tag
visible. La publicación de artículos pre-paper no implica falta de rigor:
implica que la metodología se ha consolidado lo suficiente para sostener
respuestas individuales antes de la articulación completa del paper.

**Sincronización al publicarse el paper.** Cuando el paper del ciclo se
publica, los artículos pre-paper se actualizan en lote para sustituir la cita
"metodología provisional" por la cita formal al paper publicado. La
actualización es trazable en el historial de cada artículo. Si durante la
consolidación del paper se identifica divergencia metodológica con artículos
pre-paper, esos artículos entran en re-revisión y aplica la política de errata
(sección 9).

---

## 8. Arquitectura de enlaces internos del corpus

El corpus es grafo, no árbol. Los enlaces entre artículos se materializan por
mecanismos combinados que operan simultáneamente.

**Tags semánticos.** Cada artículo recibe en su generación un conjunto de
tags: tema principal y temas secundarios según la taxonomía del observatorio
derivada de los ciclos abiertos, datasets utilizados con identificadores
canónicos, periodo temporal cubierto, y ámbito geográfico —nacional, estatal,
municipal, sub-municipal. Los tags son criterio principal de enlace automático
entre artículos.

**Datasets compartidos.** Dos artículos que utilizan al menos un dataset en
común quedan automáticamente enlazados como artículos relacionados por fuente.
Este enlace expone al lector el espacio de preguntas que el dataset compartido
permite explorar.

**Proximidad vectorial computada periódicamente.** El observatorio mantiene una
representación vectorial del contenido de cada artículo, derivada de la
pregunta y de la síntesis de la respuesta. La proximidad vectorial entre
artículos se recomputa periódicamente y al ingreso de nuevos artículos, y
expone enlaces que no emergen de tags ni de datasets compartidos pero sí de
proximidad temática genuina.

**Curación humana del revisor.** El revisor académico, durante la firma del
artículo, puede agregar enlaces explícitos a otros artículos del corpus que
considere relevantes y que los mecanismos automáticos no hayan identificado.
La curación humana cierra las brechas semánticas que los mecanismos automáticos
no cubren.

Los cuatro mecanismos operan simultáneamente. La interfaz pública del corpus
expone los artículos relacionados sin distinguir el mecanismo que los enlazó,
salvo cuando el lector solicita inspeccionar la procedencia de un enlace
específico. Esa inspección es accesible públicamente como parte de la
auditabilidad del corpus.

---

## 9. Política de errata

La errata es mecanismo institucional permanente del observatorio. Aplica a
tres clases de eventos.

**Errata por error metodológico.** Cuando se identifica que la metodología
aplicada al artículo es incorrecta o subóptima, el artículo se corrige, la
versión anterior queda accesible como histórico citable, y el cambio queda
registrado visiblemente con descripción de qué se corrigió y por qué.

**Errata por actualización de fuente.** Cuando la fuente oficial actualiza el
dataset con fe de erratas propia —no actualización rutinaria, sino corrección
de datos publicados anteriormente—, el artículo se regenera con los datos
corregidos. La errata del observatorio cita explícitamente la fe de erratas de
la fuente como justificación del cambio.

**Errata por reclasificación de sensibilidad.** Cuando un artículo publicado
pre-firma se identifica posteriormente como pregunta sensible que requería
flujo review-first, el artículo entra en estado "en re-clasificación", el
contenido sustantivo permanece accesible para preservar trazabilidad, y el
banner explica que se detectó el error de clasificación. El revisor procede
con el protocolo sensible y aplica el resultado: re-publica el artículo
firmado, emite errata sustantiva que modifica la respuesta, o, en caso
extremo, retira el artículo dejando placeholder citable en la URL original que
documenta el retiro y su motivo.

**Principio rector.** El observatorio prefiere transparencia sobre el error a
ocultamiento. El retiro silencioso no existe en la política del observatorio.
Toda corrección, por incómoda que sea para el observatorio, queda registrada
públicamente y es auditable retroactivamente.

---

## 10. Versionado del corpus

El corpus del observatorio es citable académicamente en versiones específicas.

**Versiones individuales de artículo.** Cada artículo mantiene historial
completo de versiones, citable individualmente con sufijo de versión. La
citación canónica de un artículo incluye la fecha de la versión citada para
garantizar reproducibilidad académica de la cita.

**Snapshots del corpus completo.** El observatorio publica snapshots del corpus
completo en intervalos regulares y al cierre de cada ciclo temático. Cada
snapshot es citable como conjunto: el identificador del snapshot resuelve a la
versión exacta de cada artículo que existía en el corpus en ese momento. Los
snapshots se preservan permanentemente y no se sobrescriben.

**Formato de citación canónica.** El observatorio documenta y publica el
formato de citación recomendado, tanto para artículos individuales como para
snapshots del corpus completo. Los lectores académicos que citen al
observatorio pueden hacerlo con la misma trazabilidad que esperarían de
cualquier fuente académica formal.

---

## 11. Compromisos permanentes específicos del corpus

El observatorio asume públicamente y de manera permanente los siguientes
compromisos específicos del componente artículos pregunta-respuesta. Estos
compromisos son adicionales a los del MANIFESTO sección 9 y no los reemplazan.

Todo artículo del corpus declara visiblemente su tipo —snapshot temporal o
puente—, su estado —pre-firma o firmado—, su clasificación de sensibilidad
—directa o sensible—, y las marcas temporales relevantes —captura de datos,
generación, firma, última actualización. Esa información está disponible al
lector sin requerir interpretación.

Todo artículo publicado pre-firma exhibe el SLA institucional y, cuando aplica,
el incumplimiento del SLA. El observatorio no oculta SLAs incumplidos.

Toda versión histórica de un artículo permanece accesible y citable. La
sustitución silenciosa no existe en el corpus del observatorio.

Todo enlace entre artículos del corpus es trazable a su mecanismo de origen
cuando el lector lo solicite. La arquitectura del grafo del corpus es auditable
por cualquier investigador externo.

Toda errata queda registrada visiblemente en el historial del artículo
afectado, con descripción del cambio, motivo y responsable de la corrección.
El retiro silencioso no existe en el corpus del observatorio.

Toda firma de revisor académico es vinculante: declara responsabilidad pública
del revisor sobre el contenido firmado al momento de la firma.

---

*Observatorio Datos México · datosmexico.org*
