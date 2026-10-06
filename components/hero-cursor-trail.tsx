"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const flairImages = [
  "https://assets.codepen.io/16327/Revised+Flair.png",
  "https://assets.codepen.io/16327/Revised+Flair-1.png",
  "https://assets.codepen.io/16327/Revised+Flair-2.png",
  "https://assets.codepen.io/16327/Revised+Flair-3.png",
  "https://assets.codepen.io/16327/Revised+Flair-4.png",
  "https://assets.codepen.io/16327/Revised+Flair-5.png",
  "https://assets.codepen.io/16327/Revised+Flair-6.png",
  "https://assets.codepen.io/16327/Revised+Flair-7.png",
  "https://assets.codepen.io/16327/Revised+Flair-8.png",
];

export function HeroCursorTrail() {
  const trailRef = useRef<HTMLDivElement>(null);

  useGSAP((_, contextSafe) => {
    const trail = trailRef.current;
    const hero = trail?.parentElement;
    if (!trail || !hero) return;

    const images = gsap.utils.toArray<HTMLImageElement>("img", trail);
    let index = 0;
    let previous = { x: 0, y: 0 };
    let hasPrevious = false;

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = hero.getBoundingClientRect();
      const position = { x: event.clientX - bounds.left, y: event.clientY - bounds.top };
      if (!hasPrevious) {
        previous = position;
        hasPrevious = true;
        return;
      }
      const distance = Math.hypot(position.x - previous.x, position.y - previous.y);
      if (distance < 75) return;

      previous = position;

      const image = images[index % images.length];
      index++;
      gsap.killTweensOf(image);
      gsap.set(image, { clearProps: "all" });
      gsap.set(image, { x: position.x, y: position.y, xPercent: -50, yPercent: -50 });

      gsap.timeline()
        .fromTo(image, { autoAlpha: 0, scale: 0 }, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "elastic.out(1, 0.3)" })
        .to(image, { rotation: gsap.utils.random(-360, 360), duration: 0.55 }, 0)
        .to(image, { y: `+=${Math.max(90, bounds.height * 0.18)}`, scale: 0.35, autoAlpha: 0, duration: 0.9, ease: "power2.in" }, 0.12);
    };
    const onPointerMove = contextSafe?.(handlePointerMove) ?? handlePointerMove;

    const media = gsap.matchMedia();
    media.add("(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)", () => {
      hero.addEventListener("pointermove", onPointerMove);
      return () => hero.removeEventListener("pointermove", onPointerMove);
    });

    return () => media.revert();
  }, { scope: trailRef });

  return <div className="hero-cursor-trail" ref={trailRef} aria-hidden="true">
    {flairImages.map((src, index) => <img key={src} src={src} alt="" draggable={false} loading={index === 0 ? "eager" : "lazy"}/>) }
  </div>;
}
