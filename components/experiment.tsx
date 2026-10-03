"use client";

import { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/** An actual interactive layout experiment, not a screenshot of a client project. */
export function Experiment() {
  const root = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(".experiment-tile", { opacity: 0.5, y: 12 }, {
        opacity: 1, y: 0, stagger: 0.06, duration: 0.45, ease: "power2.out",
      });
    });
    return () => media.revert();
  }, { scope: root, dependencies: [expanded], revertOnUpdate: true });
  return <div className="experiment" ref={root}>
    <div className={`experiment-grid ${expanded ? "expanded" : ""}`} aria-hidden="true">
      {["UX", "UI", "Build"].map(label => <div key={label} className="experiment-tile">{label}</div>)}
    </div>
    <div className="experiment-controls"><span>Experimento de composición en código</span>
      <button type="button" aria-pressed={expanded} onClick={() => setExpanded(!expanded)}>Cambiar composición</button>
    </div>
  </div>;
}
