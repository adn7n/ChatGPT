import { Photo } from "./Photo";
import type { Assets } from "../data/assets";
import type { BudgetVisualKind } from "../data/budget";
export function BudgetVisual({
  kind,
  assets,
}: {
  kind: BudgetVisualKind;
  assets: Assets;
}) {
  if (kind === "membership")
    return (
      <div
        className="order-visual membership-visual"
        aria-label="Subscrição anual Peak"
      >
        <span>PEAK</span>
        <small>12 MESES</small>
      </div>
    );
  if (kind === "warranty")
    return (
      <div className="order-visual warranty-visual">
        <svg viewBox="0 0 64 64" role="img" aria-label="Garantia vitalícia">
          <path d="M32 7 51 14v17c0 13-10 22-19 27C23 53 13 44 13 31V14Z" />
          <path d="m23 32 6 6 13-15" />
        </svg>
      </div>
    );
  if (kind === "charger")
    return (
      <div className={`order-visual ${assets.charger ? "" : "charger-crop"}`}>
        <Photo
          assets={assets}
          name={assets.charger ? "charger" : "pack"}
          alt="Carregador do conjunto fornecido, isolado visualmente da fotografia do pack"
        />
      </div>
    );
  if (kind === "sportflex")
    return (
      <div className="order-visual">
        <Photo
          assets={assets}
          name="white"
          alt="Pulseira SportFlex 5.0 Charge branca"
        />
      </div>
    );
  return (
    <div className="order-visual">
      <Photo
        assets={assets}
        name={kind === "sensor" && assets.sensor ? "sensor" : "black"}
        alt={
          kind === "sensor"
            ? assets.sensor
              ? "Sensor WHOOP 5.0"
              : "WHOOP equipado com sensor, vista geral do dispositivo disponível"
            : "Pulseira SuperKnit Obsidian preta"
        }
      />
    </div>
  );
}
