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
      <Label number="03">LES PERSONNALITÉS</Label>
      <h2 className="section-title reveal">
        La performance
        <br />
        n’est pas réservée
        <br />
        <em>aux champions.</em>
      </h2>
      <p className="section-intro reveal">
        Ce qui m’intéresse n’est pas de vivre comme un athlète professionnel.
        C’est d’accorder plus d’attention à mes propres habitudes.
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
                  Source du lien avec WHOOP ↗
                </a>
              </figcaption>
            </figure>
          ))}
        </div>
      )}
      <div className="editorial-rule reveal">
        <span>LA BONNE RÉFÉRENCE</span>
        <p>
          Ma progression.
          <br />À mon échelle.
        </p>
      </div>
    </section>
  );
}
