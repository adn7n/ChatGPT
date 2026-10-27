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
        <Label number="04">NA MINHA VIDA</Label>
        <h2 className="section-title reveal">
          Quatro dimensões.
          <br />O mesmo corpo.
        </h2>
        <p className="section-intro reveal">
          Estudar. Empreender. Negociar. Treinar.
          <br />O que une tudo isto? A minha recuperação.
        </p>
      </div>
      {roles.map((role, i) => (
        <article key={role.name} className={`role role-${i}`}>
          <Photo
            assets={assets}
            name={role.image}
            alt={`Ambiente de ${role.name.toLowerCase()}`}
            className="role-photo"
          />
          {!assets[role.image] && (
            <figure className="role-product-photo">
              <Photo
                assets={assets}
                name="black"
                alt="A pulseira WHOOP preta escolhida para acompanhar a minha rotina"
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
                Uma referência sobre o meu estado físico. Sem promessas de
                lucros nem previsões dos mercados.
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
          QUATRO DIMENSÕES. UMA SÓ FERRAMENTA.
        </span>
        <h3 className="section-title reveal">
          Estudar. Decidir.
          <br />
          Construir. Progredir.
        </h3>
        <p className="section-intro reveal">
          Compreender o meu corpo.
          <br />
          Superar os meus limites com inteligência.
        </p>
      </div>
    </section>
  );
}
