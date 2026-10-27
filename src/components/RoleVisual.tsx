import type { RoleKind } from "../data/roles";
const labels = {
  sleep: ["À NOITE", "DE MANHÃ"],
  day: ["CONSTRUIR", "RECUPERAR"],
  recovery: ["O ESFORÇO", "O DESCANSO"],
};
export function RoleVisual({ kind }: { kind: RoleKind }) {
  return (
    <figure
      className={`role-visual visual-${kind}`}
      aria-label="Ilustração animada de uma rotina, sem dados pessoais nem medições WHOOP"
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
      {kind === "day" && (
        <div className="day-track" aria-hidden="true">
          {[
            ["07", "Descanso"],
            ["09", "Trabalho"],
            ["13", "Pausa"],
            ["17", "Desporto"],
            ["22", "Sono"],
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
      <figcaption>Exemplo de rotina · dados ilustrativos</figcaption>
    </figure>
  );
}
