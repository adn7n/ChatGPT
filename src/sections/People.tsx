import { people } from "../data/people";
import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function People({ assets }: { assets: Assets }) {
  const featured = people.filter(
    (person) => person.relationship && person.sources.length,
  );
  return (
    <section id="chapter-2" className="people section" data-chapter>
      <Label number="03">QUEM JÁ CONFIA NA WHOOP</Label>
      <h2 className="section-title reveal">
        A confiança
        <br />
        de quem vai
        <br />
        <em>mais longe.</em>
      </h2>
      <p className="section-intro reveal">
        No desporto de alto rendimento, conhecer o corpo faz parte da
        preparação. Estas são algumas das personalidades publicamente associadas
        à WHOOP.
      </p>
      <div className="people-roster">
        {featured.map((person, i) => (
          <article
            className={`person-entry reveal ${assets[person.image] && person.verified ? "with-portrait" : ""}`}
            key={person.id}
          >
            {assets[person.image] && person.verified && (
              <Photo
                assets={assets}
                name={person.image}
                alt={person.name}
                className="person-photo"
              />
            )}
            <span className="person-index" aria-hidden="true">
              0{i + 1}
            </span>
            <div className="person-identity">
              <p className="eyebrow">{person.profession}</p>
              <h3>{person.name}</h3>
            </div>
            <div className="person-context">
              <p>{person.relationship}</p>
              <a href={person.sources[0]} target="_blank" rel="noreferrer">
                Sobre a WHOOP e os seus investidores ↗
              </a>
            </div>
          </article>
        ))}
      </div>
      <div className="editorial-rule reveal">
        <span>A MINHA REFERÊNCIA</span>
        <p>
          O desempenho não é exclusivo dos campeões.
          <br />A minha evolução. Ao meu ritmo.
        </p>
      </div>
    </section>
  );
}
