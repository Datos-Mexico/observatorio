# Etapa 2 — Plan de arranque

> **Documento de arranque para un agente nuevo, con contexto fresco y
> sin memoria de las sesiones previas.** Lee este plan antes de tomar
> cualquier acción sobre el caso.

## 1. Lectura obligatoria antes de tocar nada

La Etapa 1 del encargo 001 está mergeada en `main` mediante los PRs #4
(protocolo + fuentes + cronología) y #5 (bitácora de handoff). Tres
documentos son el punto de partida obligatorio; léelos en orden antes de
actuar:

1. **`casos/001-jitomate/BITACORA.md`** — handoff de la Etapa 1: estado,
   decisiones de método tomadas, pendientes conocidos y mapa de las
   etapas siguientes.
2. **`casos/001-jitomate/FUENTES.md`** — sustento de fuentes por hito,
   con etiquetas explícitas de confirmado / sugerido / no encontrado y
   la frontera entre fuente primaria, secundaria y verificación en
   campo.
3. **`casos/001-jitomate/CRONOLOGIA.md`** — ordenamiento de hechos
   públicos, cada entrada etiquetada según su naturaleza: medición,
   declaración o testimonio.

Lee también, como contexto institucional, **`PROTOCOLO-PRENSA.md`** en
la raíz del repo. Es el régimen bajo el que el observatorio atiende un
encargo de prensa.

## 2. Objetivo acotado de la Etapa 2

Consolidar un **dossier de hechos verificados** sobre el caso,
acompañado de una **lista explícita y honesta de lo que no se sabe**.

No es investigación nueva desde cero. Es trabajo de consolidación y
forma sobre lo ya verificado en `FUENTES.md`. Solo se abren huecos
cuando el inventario heredado los marca como tales.

## 3. Qué entra y qué no entra en el dossier

**Entra:**

- Todo lo confirmado contra fuente primaria oficial: versiones
  estenográficas de Presidencia, boletines Profeco como PDF estático,
  columna firmada publicada en Opinión 51.
- Todo lo confirmado por verificación periodística en campo: la nota de
  El Universal del 16 de abril de 2026 sobre piso de venta SuperISSSTE.
- La frontera explícita de lo desconocido: a quién y a qué precio compra
  SuperISSSTE el jitomate, negados por la dependencia bajo "secreto
  comercial".

**No entra:**

- Capa interpretativa, juicio de intención, atribución de
  responsabilidad, calificación de conducta. Eso es Etapa 3 o posterior.
  No se anticipa en este dossier.
- Cifras sueltas de mercados periféricos o de monitoreos paralelos que
  no aporten al núcleo del caso. El dossier no se hincha con todo lo que
  se haya publicado sobre jitomate en abril–junio de 2026.

## 4. Pendientes heredados que la Etapa 2 puede intentar cerrar

Estos son los huecos que `FUENTES.md` declara explícitamente. No es
obligatorio cerrarlos; si no se cierran, se trasladan a la bitácora de
la Etapa 2 como pendientes heredados.

- **Recuperar La Jornada del 15 de abril de 2026** ("Sufre altibajos el
  precio del jitomate; oscila de 19.90 a 70 pesos el kilogramo").
  Devolvió 403 al momento de la consulta en la Etapa 1. Probar acceso
  por archivo web (archive.org), otras vías legítimas, o pedir el texto
  íntegro al equipo. Si se recupera, agregar la cita literal al
  inventario de FUENTES.md y promover el rango "19.90–70 pesos" de
  pendiente a confirmado.
- **Anclar la negativa de SuperISSSTE al expediente PNT.** Si el
  folio de la solicitud llega por gestión humana, acceder al
  expediente público en https://www.plataformadetransparencia.org.mx/
  y registrar el oficio de respuesta como fuente primaria, no solo
  como testimonio firmado de la columna.

## 5. Reglas de método que NO se reabren

Estas decisiones quedaron tomadas en la Etapa 1
(`BITACORA.md` §"Decisiones de método tomadas"). No se reabren sin razón
explícita y documentada:

- **El caso es cronología y transparencia, no publicación del corpus
  validado al peso desde microdato.** El dato central fue negado; no hay
  microdato oficial que reproducir.
- **Cronología seca, sin capa interpretativa, hasta que exista respaldo
  académico.** El observatorio entrega hechos verificables con su
  etiqueta; la interpretación es competencia de quien la recibe.
- **El 19.90 tiene dos significados distintos que no deben colapsarse.**
  En el monitoreo Profeco de fines de marzo de 2026, 19.90 es el piso
  del rango nacional para jitomate bola. En la verificación de El
  Universal del 16 de abril de 2026, 19.90 es el precio por bolsa de un
  kilo constatado en piso de venta de SuperISSSTE. El primero es una
  cota; el segundo es una observación de campo. El dossier debe
  preservar la distinción.

## 6. Recordatorio de control

- **Todo cambio va por PR.** Rama temática, commit en español sin firma
  de agente, PR contra `main`, reportar URL. No hay push directo a
  `main`, ni siquiera para documentos de bitácora; el régimen del repo
  lo bloquea por construcción.
- **Las acciones irreversibles sobre lo publicado y sobre el envío
  del material conforme al protocolo requieren visto bueno humano
  explícito**, conforme al `PROTOCOLO-PRENSA`. Esta restricción no
  se levanta en la Etapa 2.

---

*Observatorio Datos México · datosmexico.org*
