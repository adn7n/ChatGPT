import { useEffect, useState } from "react";

export function PresentationControls({
  active,
  blocked,
}: {
  active: number;
  blocked: boolean;
}) {
  const [fullscreen, setFullscreen] = useState(false);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    const change = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener("fullscreenchange", change);
    return () => document.removeEventListener("fullscreenchange", change);
  }, []);
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (
        blocked ||
        event.altKey ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey
      )
        return;
      const target = event.target as HTMLElement;
      if (target.closest("button,a,input,textarea,select,[contenteditable]"))
        return;
      const direction =
        event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
      if (!direction) return;
      event.preventDefault();
      document
        .querySelector(
          `#chapter-${Math.min(7, Math.max(0, active + direction))}`,
        )
        ?.scrollIntoView({
          behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        });
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [active, blocked]);
  const toggle = async () => {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else await document.documentElement.requestFullscreen();
      setNotice("");
    } catch {
      setNotice(
        "Plein écran indisponible : utilisez le bouton vert de votre fenêtre.",
      );
    }
  };
  return (
    <div className="presentation-controls">
      <span
        className="keyboard-hint"
        title="Flèches gauche et droite : changer de chapitre. Défilement : animer la scène."
      >
        ← → <span>CHAPITRES</span>
      </span>
      {document.fullscreenEnabled && (
        <button
          className="fullscreen-toggle"
          onClick={toggle}
          aria-label={
            fullscreen ? "Quitter le plein écran" : "Afficher en plein écran"
          }
        >
          {fullscreen ? "Quitter le plein écran" : "Plein écran"}{" "}
          <span aria-hidden="true">⤢</span>
        </button>
      )}
      <span className="presentation-notice" role="status">
        {notice}
      </span>
    </div>
  );
}
