import { PresentationControls } from "./components/PresentationControls";
import { useEffect, useRef, useState } from "react";
import { useAssets } from "./hooks/useAssets";
import { useExperience } from "./animations/useExperience";
import { chapters } from "./data/chapters";
import { Introduction } from "./sections/Introduction";
import { History } from "./sections/History";
import { People } from "./sections/People";
import { Life } from "./sections/Life";
import { Product } from "./sections/Product";
import { Style } from "./sections/Style";
import { Budget } from "./sections/Budget";
import { Conclusion } from "./sections/Conclusion";
export function App() {
  const root = useRef<HTMLDivElement>(null);
  const { assets, loaded } = useAssets();
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState(0);
  useExperience(root, assets, loaded, setActive);
  const [sources, setSources] = useState(false);
  const sourceDialog = useRef<HTMLDialogElement>(null);
  const sourcesButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const dialog = sourceDialog.current;
    if (!dialog) return;
    if (sources) {
      dialog.showModal();
      document.body.classList.add("dialog-open");
    } else {
      dialog.close();
      document.body.classList.remove("dialog-open");
    }
    return () => document.body.classList.remove("dialog-open");
  }, [sources]);
  const closeSources = () => {
    setSources(false);
    sourcesButton.current?.focus();
  };
  if (!loaded)
    return (
      <div className="loading-screen" role="status">
        WHOOP<span>Préparation de l’expérience</span>
      </div>
    );
  return (
    <div ref={root}>
      <a href="#main" className="skip">
        Aller au contenu
      </a>
      <div className="reading-progress" aria-hidden="true" />
      <header>
        <a
          className="wordmark"
          href="#chapter-0"
          aria-label="WHOOP — retour au début"
        >
          WHOOP<span>BEYOND PERFORMANCE</span>
        </a>
        <div className="header-actions">
          <PresentationControls active={active} blocked={menu || sources} />
          <span className="chapter-count">0{active + 1} / 08</span>
          <button
            className="menu-toggle"
            aria-expanded={menu}
            aria-controls="chapters"
            onClick={() => setMenu(!menu)}
          >
            {menu ? "Fermer" : "Chapitres"}{" "}
            <span aria-hidden="true">{menu ? "−" : "+"}</span>
          </button>
        </div>
      </header>
      <nav id="chapters" aria-label="Chapitres" hidden={!menu}>
        {chapters.map((chapter, i) => (
          <a
            key={chapter}
            href={`#chapter-${i}`}
            onClick={() => setMenu(false)}
          >
            <small>0{i + 1}</small>
            {chapter}
            <span aria-hidden="true">↗</span>
          </a>
        ))}
      </nav>
      <main id="main">
        <Introduction assets={assets} />
        <History assets={assets} />
        <People assets={assets} />
        <Life assets={assets} />
        <Product assets={assets} />
        <Style assets={assets} />
        <Budget assets={assets} />
        <Conclusion assets={assets} />
      </main>
      <footer>
        <span>UNE PRÉSENTATION PERSONNELLE · 2026</span>
        <button ref={sourcesButton} onClick={() => setSources(true)}>
          À propos & références ↗
        </button>
        <span>PROJET INDÉPENDANT, NON AFFILIÉ À WHOOP</span>
      </footer>
      <dialog
        ref={sourceDialog}
        onCancel={(e) => {
          e.preventDefault();
          closeSources();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeSources();
        }}
      >
        <div className="dialog-content">
          <button
            className="dialog-close"
            onClick={closeSources}
            aria-label="Fermer les références"
          >
            Fermer ×
          </button>
          <span className="eyebrow">NOTE ÉDITORIALE</span>
          <h2>Une intention personnelle.</h2>
          <p>
            Cette présentation explique un projet d’achat. Elle ne promet ni
            résultat sportif, ni amélioration scolaire, ni rendement financier.
          </p>
          <p>
            Le budget de 293 CHF est une estimation fournie par l’auteur. Le
            modèle, les accessoires, le bracelet blanc et les conditions de
            l’offre restent à confirmer.
          </p>
          <p>
            Les trois visuels produit proviennent des photographies fournies
            pour ce projet. Le téléphone visible dans le pack illustre
            l’application et n’est pas inclus dans l’achat. Les portraits,
            l’historique détaillé et les affirmations de partenariat restent
            exclus jusqu’à vérification des sources et des droits.
          </p>
          <a href="https://www.whoop.com/" target="_blank" rel="noreferrer">
            Consulter le site officiel WHOOP ↗
          </a>
        </div>
      </dialog>
    </div>
  );
}
