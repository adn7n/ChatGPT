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
  ["ronaldo", "Cristiano Ronaldo", "Futebolista", "ronaldo"],
  ["bartlett", "Steven Bartlett", "Empreendedor", "bartlett"],
  ["lebron", "LeBron James", "Basquetebolista", "lebron"],
  ["phelps", "Michael Phelps", "Nadador", "phelps"],
  ["mahomes", "Patrick Mahomes", "Jogador de futebol americano", "mahomes"],
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
