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
        <Label number="05">EM DETALHE</Label>
        <h2 className="section-title reveal">
          Discreta no pulso.
          <br />
          Presente no dia a dia.
        </h2>
        <p className="section-intro reveal">
          O tecido. O fecho. O sensor. O carregamento.
          <br />
          Cada detalhe tem a sua função.
        </p>
      </div>
      {assets.black && (
        <div className={hasParts ? "detail-stage" : "detail-single"}>
          <div className="detail-sticky">
            <Photo
              assets={assets}
              name="black"
              alt="Vista geral da pulseira WHOOP preta"
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
                      clasp: "Fecho",
                      sensor: "Módulo sensor",
                      charger: "Carregador",
                      cable: "Cabo USB-C",
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
              <span className="eyebrow">O CONJUNTO / VISTA GERAL</span>
              <h3>
                Cada elemento.
                <br />
                No seu lugar.
              </h3>
            </div>
            <div
              className="pack-composition"
              role="img"
              aria-label="Fotografia fornecida do conjunto: pulseira preta, cabo USB-C, carregador e ilustração da aplicação. Telemóvel não incluído."
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
              Pulseira · cabo USB-C · carregador · aplicação
              <br />
              <span>
                Composição 2D da fotografia fornecida. Telemóvel não incluído.
              </span>
            </p>
          </div>
        </div>
      )}
      <div className="detail-notes section">
        <div className="reveal">
          <span>01 / NO PULSO</span>
          <h3>
            Um lugar na
            <br />
            minha rotina.
          </h3>
        </div>
        <div className="reveal">
          <span>02 / OS INDICADORES</span>
          <h3>
            Sono. Esforço.
            <br />
            Recuperação.
          </h3>
        </div>
        <div className="reveal">
          <span>03 / A ABORDAGEM</span>
          <h3>
            Observar.
            <br />
            Depois, ajustar.
          </h3>
        </div>
      </div>
      <p className="fine-print section">
        Os indicadores são estimativas destinadas ao bem-estar. Não substituem
        aconselhamento médico. As funcionalidades dependem do modelo e da
        subscrição.
      </p>
    </section>
  );
}
