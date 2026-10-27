import type { AssetKey } from "./assets";
export type RoleKind = "sleep" | "day" | "recovery";
export interface Role {
  title: string;
  name: string;
  image: AssetKey;
  kind: RoleKind;
  text: string[];
}
export const roles: Role[] = [
  {
    name: "Estudante",
    title: "Recuperar melhor.\nAprender melhor.",
    image: "student",
    kind: "sleep",
    text: [
      "Compreender a regularidade do meu sono.",
      "Observar os efeitos das noites curtas.",
      "Identificar os períodos de fadiga.",
      "Criar uma rotina de recuperação mais consistente.",
      "Organizar os estudos tendo em conta o meu descanso.",
    ],
  },
  {
    name: "Empreendedor",
    title: "Construir mais.\nSem descurar a recuperação.",
    image: "entrepreneur",
    kind: "day",
    text: [
      "Observar os efeitos dos dias mais exigentes.",
      "Manter um sono regular.",
      "Acompanhar as tendências de recuperação.",
      "Equilibrar melhor trabalho, desporto e descanso.",
      "Construir hábitos duradouros.",
    ],
  },
  {
    name: "Musculação",
    title: "Treinar com inteligência.\nRecuperar com eficácia.",
    image: "training",
    kind: "recovery",
    text: [
      "Acompanhar a minha frequência cardíaca.",
      "Observar a carga fisiológica.",
      "Compreender as minhas tendências de recuperação.",
      "Acompanhar a qualidade e a regularidade do sono.",
      "Observar a evolução de alguns indicadores físicos.",
    ],
  },
];
