import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Introduction({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-0" className="intro" data-chapter>
      <div className={`intro-sticky ${assets.black ? "has-product" : ""}`}>
        {assets.black && <div className="intro-surface" aria-hidden="true" />}
        <div className="intro-question">
          <div className="eyebrow">UMA EXPLORAÇÃO PESSOAL</div>
          <h1>
            E se conhecer
            <br />
            melhor o meu corpo
            <br />
            <em>mudasse tudo?</em>
          </h1>
        </div>
        <div className="intro-product">
          <Photo
            assets={assets}
            name="black"
            alt="Pulseira WHOOP preta, fotografia do modelo escolhido"
            className="hero-product"
          />
          <div className="intro-statement">
            <p className="hero-brand">WHOOP.</p>
            <h2>Mais do que uma pulseira.</h2>
            <p>
              Uma nova forma de compreender
              <br />o meu desempenho.
            </p>
          </div>
        </div>
        <a className="scroll-hint" href="#chapter-1">
          DESLIZAR PARA EXPLORAR <span aria-hidden="true">↓</span>
        </a>
        <span className="side-note" aria-hidden="true">
          SONO / RECUPERAÇÃO / ESFORÇO
        </span>
      </div>
    </section>
  );
}
