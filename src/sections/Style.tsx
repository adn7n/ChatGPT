import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Style({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-5" className="style-section section" data-chapter>
      <Label number="06">UN AUTRE STYLE</Label>
      <h2 className="section-title reveal">
        Une technologie.
        <br />
        <em>Plusieurs styles.</em>
      </h2>
      <div className="style-composition">
        <div className="style-visual">
          <Photo
            assets={assets}
            name="black"
            alt="Le bracelet noir avant la transition vers le blanc"
            className="style-black-photo"
          />
          <Photo
            assets={assets}
            name="white"
            alt="Bracelet blanc choisi, modèle à confirmer à partir de la référence"
            className="white-photo"
          />
        </div>
        <div className="style-copy reveal">
          <span className="eyebrow">UNE AUTRE EXPRESSION</span>
          <h3>
            Le blanc, pour
            <br />
            une autre esthétique.
          </h3>
          <p>
            Un bracelet blanc supplémentaire dans mon projet. Le modèle et sa
            compatibilité seront confirmés à partir de la référence choisie.
          </p>
        </div>
      </div>
    </section>
  );
}
