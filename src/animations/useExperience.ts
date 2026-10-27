import {
  useLayoutEffect,
  type RefObject,
  type Dispatch,
  type SetStateAction,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { Assets } from "../data/assets";
gsap.registerPlugin(ScrollTrigger);
export function useExperience(
  root: RefObject<HTMLDivElement | null>,
  assets: Assets,
  loaded: boolean,
  setActive: Dispatch<SetStateAction<number>>,
) {
  const hasParts = Boolean(
    assets.black &&
    assets.clasp &&
    assets.sensor &&
    assets.charger &&
    assets.cable,
  );
  useLayoutEffect(() => {
    if (!loaded) return;
    const mm = gsap.matchMedia();
    const ctx = gsap.context(() => {
      document
        .querySelectorAll<HTMLElement>("[data-chapter]")
        .forEach((el, i) =>
          ScrollTrigger.create({
            trigger: el,
            start: "top 45%",
            end: "bottom 45%",
            onEnter: () => setActive(i),
            onEnterBack: () => setActive(i),
          }),
        );
      gsap.to(".reading-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".reveal").forEach((el) =>
          gsap.from(el, {
            y: 48,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 91%",
              toggleActions: "play none none reverse",
            },
          }),
        );
        gsap.utils.toArray<HTMLElement>(".benefit-step").forEach((el) =>
          gsap.from(el, {
            y: 18,
            opacity: 0.15,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top 95%",
              end: "top 65%",
              scrub: true,
            },
          }),
        );
        gsap.utils.toArray<HTMLElement>(".role-visual").forEach((el) => {
          const line = el.querySelector(".signal-line");
          if (line)
            gsap.fromTo(
              line,
              { strokeDasharray: 1, strokeDashoffset: 1 },
              {
                strokeDashoffset: 0,
                ease: "none",
                scrollTrigger: {
                  trigger: el,
                  start: "top 90%",
                  end: "bottom 50%",
                  scrub: true,
                },
              },
            );
          const bars = el.querySelectorAll(".signal-bar");
          if (bars.length)
            gsap.from(bars, {
              scaleY: 0.1,
              opacity: 0.2,
              stagger: 0.04,
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "bottom 55%",
                scrub: true,
              },
            });
          const stops = el.querySelectorAll(".day-stop");
          if (stops.length)
            gsap.from(stops, {
              y: 15,
              opacity: 0.15,
              stagger: 0.2,
              scrollTrigger: {
                trigger: el,
                start: "top 95%",
                end: "bottom 55%",
                scrub: true,
              },
            });
        });
        const intro = gsap.timeline({
          scrollTrigger: {
            trigger: ".intro",
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        });
        intro
          .to(".intro-question", { opacity: 0, y: -70, duration: 1 })
          .fromTo(
            ".intro-product",
            { opacity: 0, scale: 0.78 },
            { opacity: 1, scale: 1, duration: 1 },
            0.7,
          )
          .fromTo(
            ".intro-statement",
            { opacity: 0, y: 70 },
            { opacity: 1, y: 0, duration: 1 },
            1.3,
          );
        if (assets.black)
          intro
            .fromTo(
              ".intro-surface",
              { opacity: 0 },
              { opacity: 1, duration: 0.8 },
              0.6,
            )
            .to(".scroll-hint", { color: "#33372e", duration: 0.8 }, 0.6);
        if (assets.black)
          gsap.to(".hero-product", {
            scale: 1.12,
            rotation: -6,
            ease: "none",
            scrollTrigger: {
              trigger: ".intro",
              start: "top top",
              end: "bottom bottom",
              scrub: true,
            },
          });
        if (
          assets.black &&
          assets.clasp &&
          assets.sensor &&
          assets.charger &&
          assets.cable
        ) {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".detail-stage",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.8,
            },
          });
          tl.to(".assembled", { opacity: 0, scale: 1.4, duration: 1 })
            .fromTo(
              ".part",
              { opacity: 0, x: 0, y: 0 },
              {
                opacity: 1,
                x: (i) => [-110, 110, -110, 110][i],
                y: (i) => [-85, -85, 85, 85][i],
                stagger: 0.12,
                duration: 1,
              },
            )
            .to(".part", { x: 0, y: 0, opacity: 0, duration: 1 }, "+=0.6")
            .to(".assembled", { opacity: 1, scale: 1, duration: 1 });
        }
        if (assets.black && !hasParts) {
          const study = gsap.timeline({
            scrollTrigger: {
              trigger: ".detail-single",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          });
          study
            .to(".detail-single .assembled", {
              scale: 1.55,
              xPercent: -9,
              yPercent: -7,
              duration: 1,
            })
            .to(
              ".detail-single .assembled",
              { scale: 1, xPercent: 0, yPercent: 0, duration: 1 },
              "+=0.4",
            );
        }
        if (assets.pack) {
          const pack = gsap.timeline({
            scrollTrigger: {
              trigger: ".pack-study",
              start: "top top",
              end: "bottom bottom",
              scrub: 0.6,
            },
          });
          pack
            .to(
              ".pack-layer-band",
              { xPercent: -9, yPercent: 2, duration: 1 },
              0,
            )
            .to(".pack-layer-cable", { yPercent: -7, duration: 1 }, 0)
            .to(".pack-layer-charger", { yPercent: 8, duration: 1 }, 0)
            .to(".pack-layer-app", { xPercent: 9, duration: 1 }, 0)
            .to(
              ".pack-layer",
              { xPercent: 0, yPercent: 0, duration: 1 },
              "+=0.5",
            );
        }
        if (assets.white)
          gsap.fromTo(
            ".white-photo",
            { scale: 0.9, rotation: -4 },
            {
              scale: 1,
              rotation: 4,
              scrollTrigger: {
                trigger: ".style-section",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        if (assets.white && assets.black) {
          const style = gsap.timeline({
            scrollTrigger: {
              trigger: ".style-visual",
              start: "top 90%",
              end: "center 45%",
              scrub: 0.6,
            },
          });
          style
            .fromTo(
              ".white-photo",
              { opacity: 0 },
              { opacity: 1, duration: 1 },
              0,
            )
            .to(".style-black-photo", { opacity: 0, duration: 1 }, 0);
        }
        if (assets.black)
          gsap.fromTo(
            ".outro-product",
            { scale: 0.92 },
            {
              scale: 1.03,
              ease: "none",
              scrollTrigger: {
                trigger: ".outro-product",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.8,
              },
            },
          );
        const counter = { value: 0 };
        gsap.to(counter, {
          value: 293,
          duration: 1.8,
          ease: "power2.out",
          snap: { value: 1 },
          scrollTrigger: { trigger: ".price", start: "top 85%", once: true },
          onUpdate: () => {
            const el = document.querySelector(".price-value");
            if (el) el.textContent = String(counter.value);
          },
        });
      });
    }, root);
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, [loaded, assets, root, setActive]);
}
