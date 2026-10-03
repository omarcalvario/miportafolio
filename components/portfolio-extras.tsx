import Image from "next/image";
import { Experiment } from "./experiment";
import { Parallax } from "./parallax";

export function PortfolioExtras() {
  return <>
    <section className="page-width extra-section" id="playground">
      <h2>Interfaces que <em>responden.</em></h2>
      <p>Pequeñas exploraciones de interacción, movimiento y código. Un espacio para probar antes de llevar una idea al producto.</p>
      <Experiment/>
    </section>
    <section className="page-width extra-section ai-workflow">
      <div><h2>IA como apoyo al diseño.</h2><p>Explorar alternativas, prototipar componentes y automatizar tareas. El criterio y las decisiones siguen siendo de diseño.</p>
        <ol className="workflow-list"><li>Definir la intención</li><li>Explorar alternativas</li><li>Prototipar y construir</li><li>Revisar e iterar</li></ol>
      </div>
      <figure><Parallax><Image src="https://picsum.photos/seed/omar-design-studio/1000/800" alt="Fotografía editorial de muestra para el espacio de exploración" width={1000} height={800}/></Parallax><figcaption>Imagen editorial de muestra. Reemplazable por material de tu proceso.</figcaption></figure>
    </section>
    <section className="page-width extra-section other-work" id="other-work">
      <h2>Otras formas de diseñar.</h2><p>La experiencia visual que acompaña mi trabajo en productos digitales.</p>
      <div className="archive-groups">
        <article><h3>Identidad y comunicación</h3><p>Mr. Carboncito, Ruta del Vino.</p><span>Branding, identidad visual y aplicaciones.</span></article>
        <article><h3>Editorial y presentaciones</h3><p>Plan Integral Oaxaca, Plan Integral Monterrey, La fotografía surrealista.</p><span>Publicaciones y organización visual de información.</span></article>
        <article><h3>Imagen en otros formatos</h3><p>Packaging, video y rotulación.</p><span>Materiales del archivo por incorporar.</span></article>
      </div>
    </section>
  </>;
}
