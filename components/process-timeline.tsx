"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  { title: "Entender", text: "Objetivos, contexto y necesidades del proyecto." },
  { title: "Estructurar", text: "Información, arquitectura y recorridos." },
  { title: "Diseñar", text: "Wireframes, interfaz y sistema visual." },
  { title: "Prototipar", text: "Explorar interacciones y comportamiento." },
  { title: "Construir e iterar", text: "Implementar cuando el proyecto lo requiere y seguir mejorando." },
];

export function ProcessTimeline() {
  const root = useRef<HTMLOListElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".timeline-progress", { scaleX: 0 }, {
        scaleX: 1, transformOrigin: "left",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 65%", scrub: 0.6 },
      });
    });
    media.add("(max-width: 767px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".timeline-progress", { scaleY: 0 }, {
        scaleY: 1, transformOrigin: "top",
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 65%", scrub: 0.6 },
      });
    });
    return () => media.revert();
  }, { scope: root });

  return <ol ref={root} className="process-timeline" aria-label="Etapas del proceso de diseño">
    <span className="timeline-track" aria-hidden="true"/><span className="timeline-progress" aria-hidden="true"/>
    {steps.map((step, index) => <li className="timeline-step" key={step.title}>
      <span className="timeline-node" aria-hidden="true"/>
      <span className="timeline-index">0{index + 1}</span>
      <h3>{step.title}</h3>
      <p>{step.text}</p>
    </li>)}
  </ol>;
}
