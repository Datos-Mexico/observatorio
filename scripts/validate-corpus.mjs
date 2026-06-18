#!/usr/bin/env node
// Validador del frontmatter del corpus pregunta-respuesta.
//
// Espeja la validación que el sitio canónico ejecuta en SSG vía
// lib/preguntas/loader.ts. Su única función es bloquear, en CI, frontmatter
// que rompería el build del sitio. No reemplaza la validación humana del
// contenido editorial.
//
// Uso:
//   node scripts/validate-corpus.mjs           # valida preguntas/*.md
//   node scripts/validate-corpus.mjs --quiet   # silencia el OK final
//
// Salida:
//   exit 0 — todo el corpus parsea contra el schema
//   exit 1 — al menos un artículo viola el schema; errores impresos a stderr

import { readFile, readdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import matter from "gray-matter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const PREGUNTAS_DIR = join(ROOT, "preguntas");

const TIPOS_TEMPORALES = ["snapshot", "puente"];
const SENSIBILIDADES = ["directa", "sensible"];
const ESTADOS = [
  "pre-firma",
  "firmada",
  "en-re-revision",
  "en-reclasificacion",
  "errata-vigente",
];
const ESTADOS_METODOLOGIA = ["provisional", "validada-por-paper"];
const AMBITOS = ["nacional", "estatal", "municipal", "sub-municipal"];
const MECANISMOS = [
  "tag",
  "dataset-compartido",
  "proximidad-vectorial",
  "curacion-humana",
];

class Issues {
  constructor(filename) {
    this.filename = filename;
    this.errors = [];
  }
  add(msg) {
    this.errors.push(msg);
  }
  ok() {
    return this.errors.length === 0;
  }
}

function isNonEmptyString(v) {
  return typeof v === "string" && v.length > 0;
}

function isStringArray(v) {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

function isPlainObject(v) {
  return v !== null && typeof v === "object" && !Array.isArray(v);
}

function checkString(issues, fm, field) {
  if (!isNonEmptyString(fm[field])) {
    issues.add(`campo "${field}" debe ser string no vacío`);
  }
}

function checkStringArray(issues, fm, field) {
  if (!isStringArray(fm[field])) {
    issues.add(`campo "${field}" debe ser lista de strings`);
  }
}

function checkEnum(issues, fm, field, allowed) {
  const v = fm[field];
  if (typeof v !== "string" || !allowed.includes(v)) {
    issues.add(
      `campo "${field}" debe ser uno de [${allowed.join(", ")}], recibido: ${JSON.stringify(v)}`,
    );
  }
}

function checkInteger(issues, fm, field) {
  const v = fm[field];
  if (typeof v !== "number" || !Number.isInteger(v)) {
    issues.add(`campo "${field}" debe ser entero, recibido: ${JSON.stringify(v)}`);
  }
}

function checkBoolean(issues, fm, field) {
  if (typeof fm[field] !== "boolean") {
    issues.add(`campo "${field}" debe ser boolean, recibido: ${JSON.stringify(fm[field])}`);
  }
}

function checkDatasets(issues, fm) {
  const v = fm.datasets;
  if (!Array.isArray(v) || v.length === 0) {
    issues.add(`campo "datasets" debe ser lista no vacía`);
    return;
  }
  v.forEach((d, i) => {
    if (!isPlainObject(d)) {
      issues.add(`datasets[${i}] debe ser objeto`);
      return;
    }
    if (!isNonEmptyString(d.nombre)) {
      issues.add(`datasets[${i}].nombre debe ser string no vacío`);
    }
    if (!isNonEmptyString(d.url_fuente)) {
      issues.add(`datasets[${i}].url_fuente debe ser string no vacío`);
    }
    if (d.version_captura === undefined || d.version_captura === null) {
      issues.add(`datasets[${i}].version_captura debe estar presente`);
    }
  });
}

function checkTagsGeograficos(issues, fm) {
  const v = fm.tags_geograficos;
  if (!isPlainObject(v)) {
    issues.add(`tags_geograficos debe ser objeto`);
    return;
  }
  if (typeof v.ambito !== "string" || !AMBITOS.includes(v.ambito)) {
    issues.add(
      `tags_geograficos.ambito debe ser uno de [${AMBITOS.join(", ")}], recibido: ${JSON.stringify(v.ambito)}`,
    );
  }
  if (Array.isArray(v.entidades_especificas) && !isStringArray(v.entidades_especificas)) {
    issues.add(`tags_geograficos.entidades_especificas debe ser lista de strings`);
  }
}

function checkMarcasTemporalesPuente(issues, fm) {
  const v = fm.marcas_temporales_puente;
  if (!isPlainObject(v)) {
    issues.add(`marcas_temporales_puente debe ser objeto`);
    return;
  }
  if (typeof v.divergencia_detectada !== "boolean") {
    issues.add(`marcas_temporales_puente.divergencia_detectada debe ser boolean`);
  }
  for (const f of ["fecha_computo_respuesta", "fecha_version_dataset"]) {
    if (v[f] === undefined || v[f] === null) {
      issues.add(`marcas_temporales_puente.${f} debe estar presente`);
    }
  }
}

function checkArticulosRelacionados(issues, fm) {
  const v = fm.articulos_relacionados;
  if (v === undefined || v === null) return;
  if (!Array.isArray(v)) {
    issues.add(`articulos_relacionados debe ser lista`);
    return;
  }
  v.forEach((e, i) => {
    if (!isPlainObject(e)) {
      issues.add(`articulos_relacionados[${i}] debe ser objeto`);
      return;
    }
    if (!isNonEmptyString(e.slug)) {
      issues.add(`articulos_relacionados[${i}].slug debe ser string no vacío`);
    }
    if (typeof e.mecanismo !== "string" || !MECANISMOS.includes(e.mecanismo)) {
      issues.add(
        `articulos_relacionados[${i}].mecanismo debe ser uno de [${MECANISMOS.join(", ")}], recibido: ${JSON.stringify(e.mecanismo)}`,
      );
    }
  });
}

function checkErrataReferencia(issues, fm) {
  const v = fm.errata_referencia;
  if (!isPlainObject(v)) {
    issues.add(`errata_referencia debe ser objeto`);
    return;
  }
  if (!isNonEmptyString(v.version_anterior_url)) {
    issues.add(`errata_referencia.version_anterior_url debe ser string no vacío`);
  }
  if (!isNonEmptyString(v.motivo_errata)) {
    issues.add(`errata_referencia.motivo_errata debe ser string no vacío`);
  }
}

function validate(filename, fm) {
  const issues = new Issues(filename);

  // Identidad
  checkString(issues, fm, "slug");
  const fileStem = filename.replace(/\.md$/, "");
  if (typeof fm.slug === "string" && fm.slug !== fileStem) {
    issues.add(`slug "${fm.slug}" no coincide con el nombre del archivo "${fileStem}"`);
  }
  checkString(issues, fm, "id_canonico");
  checkString(issues, fm, "pregunta");
  checkInteger(issues, fm, "version");

  // Fechas: gray-matter normaliza ISO dates a Date; aceptamos Date o string
  for (const f of ["fecha_creacion", "fecha_ultima_actualizacion"]) {
    const v = fm[f];
    if (!(v instanceof Date) && typeof v !== "string") {
      issues.add(`campo "${f}" debe ser fecha o string ISO`);
    }
  }

  // Enums
  checkEnum(issues, fm, "tipo_temporal", TIPOS_TEMPORALES);
  checkEnum(issues, fm, "sensibilidad", SENSIBILIDADES);
  checkEnum(issues, fm, "estado", ESTADOS);
  checkEnum(issues, fm, "estado_metodologia", ESTADOS_METODOLOGIA);

  // Reglas condicionales de estado / firma
  if (fm.estado === "pre-firma") {
    if (fm.revisor !== null || fm.fecha_firma !== null) {
      issues.add(`estado=pre-firma requiere revisor=null y fecha_firma=null`);
    }
    if (typeof fm.sla_dias_restantes !== "number") {
      issues.add(`estado=pre-firma requiere sla_dias_restantes numérico`);
    }
  } else if (typeof fm.estado === "string" && ESTADOS.includes(fm.estado)) {
    const hasRevisor = isNonEmptyString(fm.revisor);
    const hasFirma = isNonEmptyString(fm.fecha_firma) || fm.fecha_firma instanceof Date;
    if (!hasRevisor || !hasFirma) {
      issues.add(`estado=${fm.estado} requiere revisor y fecha_firma poblados`);
    }
  }

  // Puente requiere marcas temporales
  if (fm.tipo_temporal === "puente") {
    checkMarcasTemporalesPuente(issues, fm);
  }
  // Sensible requiere definiciones_contestables
  if (fm.sensibilidad === "sensible") {
    if (!Array.isArray(fm.definiciones_contestables)) {
      issues.add(`sensibilidad=sensible requiere definiciones_contestables (lista)`);
    }
  }
  // Version > 1 requiere errata
  if (typeof fm.version === "number" && fm.version > 1) {
    checkErrataReferencia(issues, fm);
  }

  // Datasets
  checkDatasets(issues, fm);

  // Texto sustantivo
  checkString(issues, fm, "metodo");
  checkStringArray(issues, fm, "caveats");

  // Tags
  checkString(issues, fm, "tags_tema_principal");
  if (fm.tags_tema_secundario !== undefined) {
    if (!isStringArray(fm.tags_tema_secundario)) {
      issues.add(`tags_tema_secundario debe ser lista de strings`);
    }
  }
  checkTagsGeograficos(issues, fm);
  checkStringArray(issues, fm, "tags_temporales");

  // Procedencia
  checkBoolean(issues, fm, "generado_por_routine");
  checkArticulosRelacionados(issues, fm);

  return issues;
}

async function main() {
  const quiet = process.argv.includes("--quiet");
  let entries;
  try {
    entries = await readdir(PREGUNTAS_DIR);
  } catch (e) {
    console.error(`No se pudo leer ${PREGUNTAS_DIR}: ${e.message}`);
    process.exit(2);
  }

  const files = entries
    .filter((f) => f.endsWith(".md") && f !== "README.md")
    .sort();

  if (files.length === 0) {
    console.log("validate-corpus: 0 artículos en preguntas/. Nada que validar.");
    return;
  }

  const allIssues = [];
  for (const filename of files) {
    const path = join(PREGUNTAS_DIR, filename);
    const raw = await readFile(path, "utf8");
    let parsed;
    try {
      parsed = matter(raw);
    } catch (e) {
      const issues = new Issues(filename);
      issues.add(`gray-matter no pudo parsear el frontmatter: ${e.message}`);
      allIssues.push(issues);
      continue;
    }
    const issues = validate(filename, parsed.data);
    if (!issues.ok()) allIssues.push(issues);
  }

  if (allIssues.length === 0) {
    if (!quiet) {
      console.log(`validate-corpus: OK — ${files.length} artículo(s) validados contra el schema.`);
    }
    return;
  }

  for (const issues of allIssues) {
    console.error(`\n✗ ${issues.filename}`);
    for (const msg of issues.errors) {
      console.error(`  - ${msg}`);
    }
  }
  const errCount = allIssues.reduce((n, i) => n + i.errors.length, 0);
  console.error(
    `\nvalidate-corpus: ${allIssues.length} archivo(s) con ${errCount} error(es). El build del sitio canónico fallaría.`,
  );
  process.exit(1);
}

main().catch((e) => {
  console.error(`validate-corpus: error inesperado: ${e?.stack ?? e}`);
  process.exit(2);
});
