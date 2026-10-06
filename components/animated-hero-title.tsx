"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function renderCharacters(text: string) {
  return Array.from(text).map((character, index) => (
    <span className="hero-title-char" key={`${character}-${index}`} aria-hidden="true">
      {character}
    </span>
  ));
}

export function AnimatedHeroTitle() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    const title = titleRef.current;
    if (!title) return;

    const motion = gsap.matchMedia();
    motion.add({
      reduceMotion: "(prefers-reduced-motion: reduce)",
      fullMotion: "(prefers-reduced-motion: no-preference)",
    }, ({ conditions }) => {
      const characters = title.querySelectorAll<HTMLElement>(".hero-title-char");
      gsap.from(characters, {
        yPercent: conditions?.reduceMotion ? 0 : 110,
        autoAlpha: 0,
        duration: conditions?.reduceMotion ? 0.25 : 0.8,
        ease: "power4.out",
        stagger: conditions?.reduceMotion ? 0.015 : 0.035,
      });
    });

    return () => motion.revert();
  }, { scope: titleRef });

  return <h1 ref={titleRef} aria-label="Diseño experiencias digitales.">
    <span className="hero-title-line" aria-hidden="true">{renderCharacters("Diseño")}</span>
    <span className="hero-title-line hero-title-line--experiences" aria-hidden="true">{renderCharacters("experiencias")}</span>
    <span className="hero-title-line hero-title-accent" aria-hidden="true"><em>{renderCharacters("digitales.")}</em></span>
  </h1>;
}
