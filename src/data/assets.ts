export const assetKeys = [
  "black",
  "clasp",
  "sensor",
  "charger",
  "cable",
  "pack",
  "white",
  "history",
  "ronaldo",
  "bartlett",
  "lebron",
  "phelps",
  "mahomes",
  "willAhmed",
  "student",
  "trader",
  "entrepreneur",
  "training",
] as const;
export type AssetKey = (typeof assetKeys)[number];
export type Assets = Partial<Record<AssetKey, string | null>>;
