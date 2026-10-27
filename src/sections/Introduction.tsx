import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Introduction({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-0" className="intro" data-chapter>
      <div className={`intro-sticky ${assets.black ? "has-product" : ""}`}>
        {assets.black && <div className="intro-surface" aria-hidden="true" />}
        <div className="intro-question">
          <div className="eyebrow">UNE EXPLORATION PERSONNELLE</div>
          <h1>
            Et si mieux
            <br />
            comprendre son corps
            <br />
            <em>changeait tout ?</em>
          </h1>
        </div>
        <div className="intro-product">
          <Photo
            assets={assets}
            name="black"
            alt="Bracelet WHOOP noir, photographie du modèle choisi"
            className="hero-product"
          />
          <div className="intro-statement">
            <p className="hero-brand">WHOOP.</p>
            <h2>Plus qu’un bracelet.</h2>
            <p>
              Une nouvelle façon de comprendre
              <br />
              mes performances.
            </p>
          </div>
        </div>
        <a className="scroll-hint" href="#chapter-1">
          DÉFILER POUR EXPLORER <span aria-hidden="true">↓</span>
        </a>
        <span className="side-note" aria-hidden="true">
          SOMMEIL / RÉCUPÉRATION / EFFORT
        </span>
      </div>
    </section>
  );
}
