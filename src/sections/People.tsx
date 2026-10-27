import { people } from "../data/people";
import { Photo } from "../components/Photo";
import { Label } from "../components/Label";
import type { Assets } from "../data/assets";
export function People({ assets }: { assets: Assets }) {
  const verifiedPeople = people.filter(
    (person) =>
      person.verified &&
      person.sources.length &&
      person.relationship &&
      assets[person.image],
  );
  return (
    <section id="chapter-2" className="people section" data-chapter>
      <Label number="03">AS PERSONALIDADES</Label>
      <h2 className="section-title reveal">
        O desempenho
        <br />
        não é exclusivo
        <br />
        <em>dos campeões.</em>
      </h2>
      <p className="section-intro reveal">
        O meu objetivo não é viver como um atleta profissional. É prestar mais
        atenção aos meus próprios hábitos.
      </p>
      {verifiedPeople.length > 0 && (
        <div className="portraits">
          {verifiedPeople.map((person) => (
            <figure key={person.id} className="person-portrait reveal">
              <Photo assets={assets} name={person.image} alt={person.name} />
              <figcaption>
                <h3>{person.name}</h3>
                <p>
                  {person.profession} · {person.relationship}
                </p>
                <a href={person.sources[0]} target="_blank" rel="noreferrer">
                  Fonte da ligação à WHOOP ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      <div className="editorial-rule reveal">
        <span>A MINHA REFERÊNCIA</span>
        <p>
          A minha evolução.
          <br />
          Ao meu ritmo.
        </p>
      </div>
    </section>
  );
}
