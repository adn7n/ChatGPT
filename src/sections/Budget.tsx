import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import { budget, formatCHF, orderItems } from "../data/budget";
import type { Assets } from "../data/assets";
export function Budget({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-6" className="budget section" data-chapter>
      <Label number="07">O ORÇAMENTO</Label>
      <p className="eyebrow reveal budget-pretitle">
        WHOOP PEAK · WHOOP 5.0 · UM ANO
      </p>
      <h2 className="price" aria-label="293 francos suíços e 99 cêntimos">
        <span className="price-value" aria-hidden="true">
          293,99
        </span>
        <span aria-hidden="true">CHF</span>
      </h2>
      <p className="budget-tagline reveal">
        O meu orçamento para um ano.
        <br />
        Tudo discriminado.
      </p>
      <div className="budget-bottom">
        <div className="budget-overview reveal">
          <div className="daily">
            ≈ {formatCHF(Math.round(budget.total / 365))} <span>CHF / DIA</span>
          </div>
          <p className="fine-print">
            {formatCHF(budget.total)} CHF ÷ 365 dias.
            <br />
            Com base no total da captura fornecida.
          </p>
          <Photo
            assets={assets}
            name="white"
            alt="Pulseira SportFlex 5.0 Charge, acessório de 48 CHF"
            className="budget-accessory"
          />
        </div>
        <div className="order-details">
          <h3 className="order-heading reveal">O que está incluído</h3>
          <ul className="order-items">
            {orderItems.map((item) => (
              <li key={item.name} className="order-item reveal">
                <div>
                  <p>{item.name}</p>
                  <small>{item.detail} · Qtd. 1</small>
                </div>
                <span
                  className={item.included ? "included-price" : "item-price"}
                >
                  {item.included ? "Incluído" : `CHF ${formatCHF(item.price)}`}
                </span>
              </li>
            ))}
          </ul>
          <dl className="order-totals reveal">
            <div>
              <dt>Subtotal</dt>
              <dd>CHF {formatCHF(budget.subtotal)}</dd>
            </div>
            <div>
              <dt>Entrega</dt>
              <dd>CHF {formatCHF(budget.delivery)}</dd>
            </div>
            <div className="order-total">
              <dt>Total a pagar</dt>
              <dd>CHF {formatCHF(budget.total)}</dd>
            </div>
            <div className="order-vat">
              <dt>IVA incluído</dt>
              <dd>CHF {formatCHF(budget.vatIncluded)}</dd>
            </div>
          </dl>
          <p className="fine-print reveal">
            Valores transcritos da captura do meu pedido. O IVA de 22,03 CHF já
            está incluído no total. Esta é a oferta apresentada nessa captura,
            não uma garantia de preço futuro. A garantia está sujeita às
            condições da oferta.
          </p>
        </div>
      </div>
      <figure className="budget-pack">
        <Photo
          assets={assets}
          name="pack"
          alt="Conjunto WHOOP com sensor, pulseira, carregador e cabo; telemóvel apenas para ilustrar a aplicação"
          className="pack-photo"
        />
        <figcaption>
          O telemóvel ilustra a aplicação e não está incluído na compra. O cabo
          aparece no visual do conjunto, sem preço separado na captura do
          pedido.
        </figcaption>
      </figure>
      <p className="budget-final reveal">
        Mais do que uma despesa.
        <br />
        Uma ferramenta para me conhecer melhor.
      </p>
    </section>
  );
}
