import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Budget({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-6" className="budget section" data-chapter>
      <Label number="07">O ORÇAMENTO</Label>
      <p className="eyebrow reveal budget-pretitle">
        UM INVESTIMENTO NOS MEUS HÁBITOS
      </p>
      <h2 className="price" aria-label="293 francos suíços">
        <span className="price-value" aria-hidden="true">
          293
        </span>
        <span aria-hidden="true">CHF</span>
      </h2>
      <p className="budget-tagline reveal">O meu orçamento para um ano.</p>
      <div className="budget-bottom">
        <div className="daily reveal">
          ≈ 0,80 <span>CHF / DIA</span>
        </div>
        <div className="budget-breakdown reveal">
          <p>Orçamento total previsto para este projeto.</p>
          <ul>
            <li>Um ano de subscrição WHOOP</li>
            <li>A pulseira principal</li>
            <li>A pulseira branca adicional</li>
            <li>Os acessórios previstos na oferta</li>
          </ul>
          <p className="fine-print">
            293 ÷ 365 ≈ 0,80 CHF. Oferta, conteúdo do conjunto e valor a
            confirmar antes da compra; este montante não é um preço oficial
            verificado.
          </p>
        </div>
      </div>
      <figure className="budget-pack">
        <Photo
          assets={assets}
          name="pack"
          alt="Imagem fornecida do conjunto WHOOP: pulseira, cabo USB-C, carregador e aplicação num telemóvel não incluído"
          className="pack-photo"
        />
        <figcaption>
          Imagem de referência fornecida · telemóvel não incluído · conteúdo da
          oferta a confirmar
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
