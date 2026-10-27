import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Conclusion({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-7" className="outro section" data-chapter>
      <Label number="08">O PRÓXIMO PASSO</Label>
      <p className="closing-line reveal">
        Não quero apenas
        <br />
        fazer mais.
      </p>
      <h2 className="section-title reveal">
        Quero compreender
        <br />
        como funcionar
        <br />
        <em>melhor.</em>
      </h2>
      <Photo
        assets={assets}
        name="black"
        alt="Pulseira WHOOP preta"
        className="outro-product"
      />
      <div className="closing-brand reveal">
        WHOOP.
        <p>
          Compreender hoje.
          <br />
          Progredir amanhã.
        </p>
      </div>
      <a className="back-top" href="#chapter-0">
        VOLTAR AO INÍCIO <span aria-hidden="true">↑</span>
      </a>
    </section>
  );
}
