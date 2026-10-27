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
        WHOOP<span>A preparar a experiência</span>
      </div>
    );
  return (
    <div ref={root}>
      <a href="#main" className="skip">
        Ir para o conteúdo
      </a>
      <div className="reading-progress" aria-hidden="true" />
      <header>
        <a
          className="wordmark"
          href="#chapter-0"
          aria-label="WHOOP — voltar ao início"
        >
          WHOOP<span>ALÉM DO DESEMPENHO</span>
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
            {menu ? "Fechar" : "Capítulos"}{" "}
            <span aria-hidden="true">{menu ? "−" : "+"}</span>
          </button>
        </div>
      </header>
      <nav id="chapters" aria-label="Capítulos" hidden={!menu}>
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
        <span>UMA APRESENTAÇÃO PESSOAL · 2026</span>
        <button ref={sourcesButton} onClick={() => setSources(true)}>
          Sobre e referências ↗
        </button>
        <span>PROJETO INDEPENDENTE, SEM AFILIAÇÃO À WHOOP</span>
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
            aria-label="Fechar as referências"
          >
            Fechar ×
          </button>
          <span className="eyebrow">NOTA EDITORIAL</span>
          <h2>Uma intenção pessoal.</h2>
          <p>
            Esta apresentação explica uma intenção de compra. Não promete
            resultados desportivos nem melhorias académicas.
          </p>
          <p>
            O total de 293,99 CHF foi transcrito da captura do pedido: 219 CHF
            de subscrição anual Peak, 48 CHF da SportFlex 5.0 e 26,99 CHF de
            entrega. O IVA de 22,03 CHF já está incluído. As condições e os
            preços podem mudar.
          </p>
          <p>
            As imagens do produto provêm das fotografias fornecidas para esta
            apresentação pessoal. O telemóvel ilustra a aplicação e não está
            incluído na compra. Na secção de personalidades, distinguimos
            embaixadores e investidores da marca.
          </p>
          <a href="https://www.whoop.com/" target="_blank" rel="noreferrer">
            Consultar o site oficial da WHOOP ↗
          </a>
        </div>
      </dialog>
    </div>
  );
}
