"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function Parallax({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      // A small shift separates the editorial image from the surrounding text.
      gsap.fromTo(".parallax-inner", { yPercent: -3 }, { yPercent: 3, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    });
    return () => media.revert();
  }, { scope: root });
  return <div ref={root} className="parallax-frame"><div className="parallax-inner">{children}</div></div>;
}
