import { readFile, access } from "node:fs/promises";
const manifest = JSON.parse(
  await readFile(
    new URL("../public/media/manifest.json", import.meta.url),
    "utf8",
  ),
);
const editorial = JSON.parse(
  await readFile(
    new URL("../src/data/editorial.json", import.meta.url),
    "utf8",
  ),
);
const missing = [];
for (const key of [
  "black",
  "white",
  "pack",
  "history",
  "ronaldo",
  "bartlett",
  "student",
  "entrepreneur",
  "training",
]) {
  const path = manifest[key];
  if (!path) missing.push(`Photographie autorisée manquante : ${key}`);
  else {
    try {
      await access(new URL(`../public${path}`, import.meta.url));
    } catch {
      missing.push(`Fichier absent : ${path}`);
    }
  }
}
for (const fact of editorial.requiredFacts)
  if (!fact.verified || !fact.sources.length)
    missing.push(`Source à vérifier : ${fact.description}`);
for (const [name, image] of Object.entries(editorial.providedImages))
  if (!image.publicationRightsConfirmed)
    missing.push(`Droits de diffusion publique à confirmer : photo ${name}`);
if (missing.length) {
  console.error(
    "La compilation technique ne valide pas la complétude éditoriale du brief.\n" +
      missing.map((x) => `- ${x}`).join("\n"),
  );
  process.exitCode = 1;
} else console.log("Photos, sources et métadonnées éditoriales renseignées.");
