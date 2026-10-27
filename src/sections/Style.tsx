import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Style({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-5" className="style-section section" data-chapter>
      <Label number="06">OUTRO ESTILO</Label>
      <h2 className="section-title reveal">
        Uma tecnologia.
        <br />
        <em>Vários estilos.</em>
      </h2>
      <div className="style-composition">
        <div className="style-visual">
          <Photo
            assets={assets}
            name="black"
            alt="A pulseira preta antes da transição para a branca"
            className="style-black-photo"
          />
          <Photo
            assets={assets}
            name="white"
            alt="Pulseira branca escolhida, modelo a confirmar a partir da referência"
            className="white-photo"
          />
        </div>
        <div className="style-copy reveal">
          <span className="eyebrow">OUTRA EXPRESSÃO</span>
          <h3>
            O branco, para
            <br />
            uma nova estética.
          </h3>
          <p>
            Uma pulseira branca adicional para o meu projeto. O modelo e a
            compatibilidade serão confirmados a partir da referência escolhida.
          </p>
        </div>
      </div>
    </section>
  );
}
