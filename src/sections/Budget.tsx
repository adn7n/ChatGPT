import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Budget({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-6" className="budget section" data-chapter>
      <Label number="07">LE BUDGET</Label>
      <p className="eyebrow reveal budget-pretitle">
        UN INVESTISSEMENT DANS MES HABITUDES
      </p>
      <h2 className="price" aria-label="293 francs suisses">
        <span className="price-value" aria-hidden="true">
          293
        </span>
        <span aria-hidden="true">CHF</span>
      </h2>
      <p className="budget-tagline reveal">Mon budget pour un an.</p>
      <div className="budget-bottom">
        <div className="daily reveal">
          ≈ 0,80 <span>CHF / JOUR</span>
        </div>
        <div className="budget-breakdown reveal">
          <p>Budget total prévisionnel fourni pour ce projet.</p>
          <ul>
            <li>Un an d’abonnement WHOOP</li>
            <li>Le bracelet principal</li>
            <li>Le bracelet blanc supplémentaire</li>
            <li>Les accessoires prévus dans l’offre</li>
          </ul>
          <p className="fine-print">
            293 ÷ 365 ≈ 0,80 CHF. Offre, contenu du pack et montant à confirmer
            avant achat ; ce montant n’est pas un tarif officiel vérifié.
          </p>
        </div>
      </div>
      <figure className="budget-pack">
        <Photo
          assets={assets}
          name="pack"
          alt="Visuel fourni du pack WHOOP : bracelet, câble USB-C, chargeur et application sur un téléphone non inclus"
          className="pack-photo"
        />
        <figcaption>
          Visuel de référence fourni · téléphone non inclus · contenu de l’offre
          à confirmer
        </figcaption>
      </figure>
      <p className="budget-final reveal">
        Pas seulement une dépense.
        <br />
        Un outil pour mieux me connaître.
      </p>
    </section>
  );
}
