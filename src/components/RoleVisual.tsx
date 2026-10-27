import type { RoleKind } from "../data/roles";
const labels = {
  sleep: ["LE SOIR", "LE MATIN"],
  markets: ["AVANT LA SÉANCE", "PRENDRE DU RECUL"],
  day: ["CONSTRUIRE", "RÉCUPÉRER"],
  recovery: ["L’EFFORT", "LE REPOS"],
};
export function RoleVisual({ kind }: { kind: RoleKind }) {
  return (
    <figure
      className={`role-visual visual-${kind}`}
      aria-label="Illustration animée d’une routine, sans données personnelles ni mesures WHOOP"
    >
      <div className="visual-labels">
        <span>{labels[kind][0]}</span>
        <span>{labels[kind][1]}</span>
      </div>
      {kind === "sleep" && (
        <div className="sleep-track" aria-hidden="true">
          {[
            30, 45, 65, 80, 58, 48, 60, 85, 68, 45, 32, 52, 72, 63, 40, 28, 20,
            12,
          ].map((h, i) => (
            <span key={i} className="signal-bar" style={{ height: `${h}%` }} />
          ))}
        </div>
      )}
      {kind === "markets" && (
        <svg className="signal-chart" viewBox="0 0 600 120" aria-hidden="true">
          <path className="chart-grid" d="M0 30H600M0 60H600M0 90H600" />
          <path
            className="signal-line"
            pathLength="1"
            d="M0 95L30 90L60 100L90 70L120 80L150 40L180 58L210 35L240 64L270 42L300 58L330 28L360 42L390 32L420 48L450 20L480 32L510 25L540 37L570 15L600 28"
          />
        </svg>
      )}
      {kind === "day" && (
        <div className="day-track" aria-hidden="true">
          {[
            ["07", "Repos"],
            ["09", "Travail"],
            ["13", "Pause"],
            ["17", "Sport"],
            ["22", "Sommeil"],
          ].map(([time, label]) => (
            <div key={time} className="day-stop">
              <span>
                {time}
                <small>h</small>
              </span>
              <i />
              <small>{label}</small>
            </div>
          ))}
        </div>
      )}
      {kind === "recovery" && (
        <svg className="signal-chart" viewBox="0 0 600 120" aria-hidden="true">
          <path className="chart-grid" d="M0 30H600M0 60H600M0 90H600" />
          <path
            className="signal-line"
            pathLength="1"
            d="M0 95Q30 90 45 70T70 90L85 45L100 95L120 15L140 100L155 55L170 75L190 25L215 90L240 45Q260 65 280 75T330 83T400 88T480 90T600 92"
          />
        </svg>
      )}
      <figcaption>
        {kind === "markets"
          ? "Illustration graphique · aucun signal de trading"
          : "Exemple de routine · données illustratives"}
      </figcaption>
    </figure>
  );
}
