import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Conclusion({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-7" className="outro section" data-chapter>
      <Label number="08">LA SUITE</Label>
      <p className="closing-line reveal">
        Je ne cherche pas simplement
        <br />à en faire plus.
      </p>
      <h2 className="section-title reveal">
        Je veux comprendre
        <br />
        comment{" "}
        <em>
          mieux
          <br />
          fonctionner.
        </em>
      </h2>
      <Photo
        assets={assets}
        name="black"
        alt="Bracelet WHOOP noir"
        className="outro-product"
      />
      <div className="closing-brand reveal">
        WHOOP.
        <p>
          Comprendre aujourd’hui.
          <br />
          Progresser demain.
        </p>
      </div>
      <a className="back-top" href="#chapter-0">
        REVENIR AU DÉBUT <span aria-hidden="true">↑</span>
      </a>
    </section>
  );
}
