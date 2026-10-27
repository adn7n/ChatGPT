import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function History({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-1" className="light history section" data-chapter>
      <Label number="02">AS ORIGENS</Label>
      <h2 className="section-title reveal">
        Tudo começa
        <br />
        com uma pergunta.
      </h2>
      <div className="history-grid">
        <div className="year reveal">
          2012<span>O INÍCIO DE UMA IDEIA</span>
        </div>
        <div className="history-copy reveal">
          <h3>
            Compreender o que
            <br />
            não se vê.
          </h3>
          <p>
            O ponto de partida da WHOOP: tornar visível a relação entre o
            esforço, o sono e a recuperação.
          </p>
          <p className="muted">
            Uma nova perspetiva sobre o dia. E, sobretudo, sobre a noite que o
            antecede.
          </p>
        </div>
      </div>
      <Photo
        assets={assets}
        name="history"
        alt="Fotografia histórica da WHOOP"
        className="wide-photo"
      />
      <div className="timeline">
        <div className="reveal">
          <span>01 / MEDIR</span>
          <p>Observar o meu corpo.</p>
        </div>
        <div className="reveal">
          <span>02 / COMPREENDER</span>
          <p>Relacionar os meus hábitos.</p>
        </div>
        <div className="reveal">
          <span>03 / AJUSTAR</span>
          <p>Avançar, dia após dia.</p>
        </div>
      </div>
    </section>
  );
}
