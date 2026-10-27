import React from "react";
import { roles } from "../data/roles";
import { RoleVisual } from "../components/RoleVisual";
import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function Life({ assets }: { assets: Assets }) {
  return (
    <section id="chapter-3" className="life" data-chapter>
      <div className="section life-heading">
        <Label number="04">DANS MA VIE</Label>
        <h2 className="section-title reveal">
          Quatre vies.
          <br />
          Un même corps.
        </h2>
        <p className="section-intro reveal">
          Étudier. Entreprendre. Trader. S’entraîner.
          <br />
          Le lien entre tout ça ? Ma récupération.
        </p>
      </div>
      {roles.map((role, i) => (
        <article key={role.name} className={`role role-${i}`}>
          <Photo
            assets={assets}
            name={role.image}
            alt={`Environnement ${role.name.toLowerCase()}`}
            className="role-photo"
          />
          {!assets[role.image] && (
            <figure className="role-product-photo">
              <Photo
                assets={assets}
                name="black"
                alt="Le bracelet WHOOP noir choisi pour accompagner ma routine"
              />
            </figure>
          )}
          <div className="role-content">
            <span className="eyebrow reveal">
              0{i + 1} / {role.name.toUpperCase()}
            </span>
            <h3 className="reveal">
              {role.title.split("\n").map((line, j) => (
                <React.Fragment key={line}>
                  {j > 0 && <br />}
                  {line}
                </React.Fragment>
              ))}
            </h3>
            <ul>
              {role.text.map((t, j) => (
                <li className="benefit-step" key={t}>
                  <span>0{j + 1}</span>
                  {t}
                </li>
              ))}
            </ul>
            <RoleVisual kind={role.kind} />
            {role.name === "Trader" && (
              <p className="fine-print">
                Un repère sur mon état physique. Aucune promesse de profits ni
                de prédiction des marchés.
              </p>
            )}
          </div>
          <span className="role-number" aria-hidden="true">
            0{i + 1}
          </span>
        </article>
      ))}
      <div className="life-finale section">
        <span className="eyebrow reveal">
          QUATRE DIMENSIONS. UN SEUL OUTIL.
        </span>
        <h3 className="section-title reveal">
          Étudier. Décider.
          <br />
          Construire. Progresser.
        </h3>
        <p className="section-intro reveal">
          Comprendre mon corps.
          <br />
          Repousser mes limites intelligemment.
        </p>
      </div>
    </section>
  );
}
