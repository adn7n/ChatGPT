import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Product({ assets }: { assets: Assets }) {
  const hasParts = Boolean(
    assets.black &&
    assets.clasp &&
    assets.sensor &&
    assets.charger &&
    assets.cable,
  );
  return (
    <section id="chapter-4" className="detail light" data-chapter>
      <div className="section detail-heading">
        <Label number="05">EN DÉTAIL</Label>
        <h2 className="section-title reveal">
          Discret au poignet.
          <br />
          Présent au quotidien.
        </h2>
        <p className="section-intro reveal">
          Le textile. Le fermoir. Le capteur. La recharge.
          <br />
          Chaque détail a son rôle.
        </p>
      </div>
      {assets.black && (
        <div className={hasParts ? "detail-stage" : "detail-single"}>
          <div className="detail-sticky">
            <Photo
              assets={assets}
              name="black"
              alt="Vue d’ensemble du bracelet WHOOP noir"
              className="assembled"
            />
            {hasParts &&
              (["clasp", "sensor", "charger", "cable"] as const).map((key) => (
                <Photo
                  key={key}
                  assets={assets}
                  name={key}
                  alt={
                    {
                      clasp: "Fermoir",
                      sensor: "Module capteur",
                      charger: "Chargeur",
                      cable: "Câble USB-C",
                    }[key]
                  }
                  className={`part part-${key}`}
                />
              ))}
          </div>
        </div>
      )}
      {assets.pack && (
        <div className="pack-study">
          <div className="pack-sticky">
            <div className="pack-study-heading">
              <span className="eyebrow">LE PACK / VUE D’ENSEMBLE</span>
              <h3>
                Chaque élément.
                <br />À sa place.
              </h3>
            </div>
            <div
              className="pack-composition"
              role="img"
              aria-label="Photographie fournie du pack : bracelet noir, câble USB-C, chargeur et illustration de l’application. Téléphone non inclus."
            >
              {(["band", "cable", "charger", "app"] as const).map((part) => (
                <div
                  key={part}
                  className={`pack-layer pack-layer-${part}`}
                  aria-hidden="true"
                >
                  <img
                    src={assets.pack!}
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
            <p className="pack-caption">
              Bracelet · câble USB-C · chargeur · application
              <br />
              <span>
                Mise en scène 2D de la photographie fournie. Téléphone non
                inclus.
              </span>
            </p>
          </div>
        </div>
      )}
      <div className="detail-notes section">
        <div className="reveal">
          <span>01 / LE PORT</span>
          <h3>
            Une place dans
            <br />
            ma routine.
          </h3>
        </div>
        <div className="reveal">
          <span>02 / LES REPÈRES</span>
          <h3>
            Sommeil. Effort.
            <br />
            Récupération.
          </h3>
        </div>
        <div className="reveal">
          <span>03 / L’APPROCHE</span>
          <h3>
            Observer.
            <br />
            Puis ajuster.
          </h3>
        </div>
      </div>
      <p className="fine-print section">
        Les indicateurs sont des estimations destinées au bien-être. Ils ne
        remplacent pas un avis médical. Les fonctionnalités dépendent du modèle
        et de l’abonnement.
      </p>
    </section>
  );
}
