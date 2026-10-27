import editorial from "./editorial.json";
import type { AssetKey } from "./assets";
export interface Person {
  id: string;
  name: string;
  profession: string;
  image: AssetKey;
  verified: boolean;
  sources: string[];
  relationship: string | null;
}
const entries: [string, string, string, AssetKey][] = [
  ["ronaldo", "Cristiano Ronaldo", "Footballeur", "ronaldo"],
  ["bartlett", "Steven Bartlett", "Entrepreneur", "bartlett"],
  ["lebron", "LeBron James", "Basketteur", "lebron"],
  ["phelps", "Michael Phelps", "Nageur", "phelps"],
  ["mahomes", "Patrick Mahomes", "Joueur de football américain", "mahomes"],
];
export const people: Person[] = entries.map(([id, name, profession, image]) => {
  const fact = editorial.requiredFacts.find((item) => item.id === id);
  return {
    id,
    name,
    profession,
    image,
    verified: fact?.verified === true,
    sources: fact?.sources ?? [],
    relationship: null,
  };
});
