# Banner: pre-firma

Copy editorial canónico para artículos del corpus en estado
`pre-firma`. El sitio canónico inserta este texto al inicio del
artículo cuando el frontmatter declara `estado: pre-firma` y
`sla_dias_restantes >= 0`.

La presentación visual del banner —ubicación, color, ícono,
tipografía— es decisión del sitio canónico. El texto institucional es
decisión del observatorio y vive en este archivo.

---

## Copy canónico

> **Este artículo se publica en estado pre-firma.**
>
> Su contenido —respuesta, metodología, fuentes y caveats— está
> disponible para lectura y cita académica desde el momento de su
> publicación, bajo responsabilidad institucional colectiva del
> Observatorio Datos México.
>
> La firma del revisor académico humano que asume responsabilidad
> individual sobre el contenido del artículo está pendiente. El
> observatorio se compromete públicamente a completar la firma en un
> máximo de siete días corridos desde la publicación pre-firma.
>
> Cualquier lector puede consultar el estado vigente del artículo en
> su frontmatter y verificar la transición a estado firmado en el
> historial del repositorio.

---

## Variables interpolables por el sitio canónico

- `{{fecha_creacion}}`: fecha de publicación pre-firma del artículo
- `{{sla_dias_restantes}}`: días restantes hasta vencimiento del SLA
  institucional

Cuando `sla_dias_restantes` es negativo, el artículo ha rebasado el
SLA institucional. El sitio canónico aplica un copy alternativo que
declara explícitamente el incumplimiento (no incluido como artefacto
en este momento; emergerá cuando el primer caso operacional lo
amerite).

---

*Observatorio Datos México · datosmexico.org*
