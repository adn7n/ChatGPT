import type { AssetKey } from "./assets";
export type RoleKind = "sleep" | "markets" | "day" | "recovery";
export interface Role {
  title: string;
  name: string;
  image: AssetKey;
  kind: RoleKind;
  text: string[];
}
export const roles: Role[] = [
  {
    name: "Étudiant",
    title: "Mieux récupérer.\nMieux apprendre.",
    image: "student",
    kind: "sleep",
    text: [
      "Comprendre la régularité de mon sommeil.",
      "Observer les effets de mes nuits courtes.",
      "Identifier les périodes de fatigue.",
      "Construire une meilleure routine de récupération.",
      "Organiser mes études en tenant compte de mon repos.",
    ],
  },
  {
    name: "Trader",
    title: "La discipline commence\navant les marchés.",
    image: "trader",
    kind: "markets",
    text: [
      "Observer ma récupération avant une séance.",
      "Prendre conscience de mon état de fatigue.",
      "Suivre les tendances physiologiques liées au stress.",
      "Construire des horaires plus réguliers.",
      "Mieux connaître mon état physique avant de décider.",
    ],
  },
  {
    name: "Entrepreneur",
    title: "Construire plus.\nSans négliger sa récupération.",
    image: "entrepreneur",
    kind: "day",
    text: [
      "Observer les effets de mes journées chargées.",
      "Préserver un sommeil régulier.",
      "Suivre les tendances de récupération.",
      "Mieux équilibrer travail, sport et repos.",
      "Construire des habitudes durables.",
    ],
  },
  {
    name: "Musculation",
    title: "S’entraîner intelligemment.\nRécupérer efficacement.",
    image: "training",
    kind: "recovery",
    text: [
      "Suivre ma fréquence cardiaque.",
      "Observer la charge physiologique.",
      "Comprendre mes tendances de récupération.",
      "Suivre la qualité et la régularité du sommeil.",
      "Observer l’évolution de certains indicateurs physiques.",
    ],
  },
];
