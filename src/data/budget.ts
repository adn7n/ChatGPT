export type BudgetVisualKind =
  "membership" | "sensor" | "charger" | "band" | "warranty" | "sportflex";
// Amounts transcribed from the user's order screenshot, stored in CHF cents.
export const budget = {
  subscription: 21900,
  accessory: 4800,
  delivery: 2699,
  vatIncluded: 2203,
  get subtotal() {
    return this.subscription + this.accessory;
  },
  get total() {
    return this.subtotal + this.delivery;
  },
};
export const formatCHF = (cents: number) =>
  new Intl.NumberFormat("pt-PT", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(cents / 100);
export const orderItems: {
  name: string;
  detail: string;
  price: number;
  included: boolean;
  visual: BudgetVisualKind;
}[] = [
  {
    name: "Subscrição WHOOP Peak",
    visual: "membership",
    detail: "Faturação anual · 12 meses",
    price: budget.subscription,
    included: false,
  },
  {
    name: "Sensor WHOOP 5.0",
    visual: "sensor",
    detail: "Autonomia anunciada de 14 dias",
    price: 0,
    included: true,
  },
  {
    name: "PowerPack sem fios",
    visual: "charger",
    detail: "Carregamento sem retirar o WHOOP",
    price: 0,
    included: true,
  },
  {
    name: "Pulseira SuperKnit",
    visual: "band",
    detail: "Obsidian",
    price: 0,
    included: true,
  },
  {
    name: "Garantia vitalícia",
    visual: "warranty",
    detail: "Incluída na oferta apresentada, sujeita às condições aplicáveis",
    price: 0,
    included: true,
  },
  {
    name: "Pulseira SportFlex 5.0",
    visual: "sportflex",
    detail: "Charge · acessório adicional",
    price: budget.accessory,
    included: false,
  },
];
