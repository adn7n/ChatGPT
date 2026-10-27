import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function History({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-1" className="light history section" data-chapter>
      <Label number="02">LES ORIGINES</Label>
      <h2 className="section-title reveal">
        Tout commence
        <br />
        par une question.
      </h2>
      <div className="history-grid">
        <div className="year reveal">
          2012<span>LE DÉBUT D’UNE IDÉE</span>
        </div>
        <div className="history-copy reveal">
          <h3>
            Comprendre ce que
            <br />
            l’on ne voit pas.
          </h3>
          <p>
            Le point de départ de WHOOP : rendre visibles les liens entre
            l’effort, le sommeil et la récupération.
          </p>
          <p className="muted">
            Une autre façon de regarder sa journée. Et surtout, la nuit qui la
            précède.
          </p>
        </div>
      </div>
      <Photo
        assets={assets}
        name="history"
        alt="Photographie historique WHOOP"
        className="wide-photo"
      />
      <div className="timeline">
        <div className="reveal">
          <span>01 / MESURER</span>
          <p>Observer son corps.</p>
        </div>
        <div className="reveal">
          <span>02 / COMPRENDRE</span>
          <p>Relier ses habitudes.</p>
        </div>
        <div className="reveal">
          <span>03 / AJUSTER</span>
          <p>Avancer, jour après jour.</p>
        </div>
      </div>
    </section>
  );
}
