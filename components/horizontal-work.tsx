"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function HorizontalWork({ children }: { children: ReactNode }) {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      const getDistance = () => Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth + 2 * 72);
      gsap.to(track.current, {
        x: () => -getDistance(), ease: "none",
        scrollTrigger: {
          trigger: root.current, start: "top top", end: () => `+=${getDistance()}`,
          pin: true, scrub: 1, invalidateOnRefresh: true,
        },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return <section ref={root} className="horizontal-work contrast-light" id="work">
    <div className="horizontal-work-heading"><div><h2>Selected <em>work.</em></h2><p>Proyectos digitales donde experiencia, interfaz y tecnología se encuentran.</p></div><span className="drag-hint"><ArrowUpRight size={16}/> Recorre para explorar</span></div>
    <div className="horizontal-track" ref={track}>{children}</div>
    <div className="horizontal-work-footer"><span>Diseño, prototipo e implementación</span><span>01 - 06</span></div>
  </section>;
}
