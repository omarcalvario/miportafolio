"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
  { title: "Descubrimiento", text: "Entender tus objetivos, audiencia y limitaciones antes de tocar un solo píxel." },
  { title: "Concepto y diseño", text: "Definir dirección visual, diseñar la interacción y validar la idea con un prototipo." },
  { title: "Desarrollo", text: "Llevar el diseño a una interfaz funcional, cuidando el rendimiento y cada detalle." },
  { title: "Lanzamiento y más allá", text: "Probar, publicar y seguir mejorando el producto después de la entrega." },
];

export function ProcessTimeline() {
  const root = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      root.current?.querySelectorAll<HTMLElement>(".process-step").forEach((step) => {
        const characters = step.querySelectorAll<HTMLElement>(".process-char");
        gsap.fromTo(characters, { opacity: 0.16 }, {
          opacity: 1,
          ease: "none",
          stagger: { each: 0.025, from: "start" },
          scrollTrigger: { trigger: step, start: "top 78%", end: "center 48%", scrub: 0.5 },
        });
      });
    });
    return () => media.revert();
  }, { scope: root });

  const printCharacters = (text: string) => Array.from(text).map((char, index) => <span className="process-char" aria-hidden="true" key={`${char}-${index}`}>{char === " " ? " " : char}</span>);

  return <div ref={root} className="process-layout">
    <div className="process-intro">
      <h2>Un proceso construido alrededor de la <em>claridad y el oficio.</em></h2>
      <p>Sin sorpresas ni caos en la entrega. Un camino claro desde la primera conversación hasta un producto que funciona.</p>
      <Link className="process-cta" href="/contact">Construyamos algo <ArrowUpRight size={17}/></Link>
    </div>
    <ol className="process-timeline" aria-label="Etapas del proceso de diseño">
      {steps.map((step, index) => <li className="process-step" key={step.title}>
        <p className="process-index">0{index + 1}</p>
        <h3 aria-label={step.title}>{printCharacters(step.title)}</h3>
        <p className="process-description" aria-label={step.text}>{printCharacters(step.text)}</p>
      </li>)}
    </ol>
  </div>;
}
