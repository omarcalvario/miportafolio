import Link from "next/link";
import Image from "next/image";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { getProjects } from "@/lib/projects";
import { PortfolioExtras } from "@/components/portfolio-extras";
import { ProcessTimeline } from "@/components/process-timeline";
import { SelectedWork } from "@/components/selected-work";

const capabilities = [
  { title: "UI / UX", items: "Arquitectura de información, user flows, wireframes, UI, prototipos e interacción." },
  { title: "Web", items: "Diseño responsive, HTML, CSS, JavaScript y estructura de contenidos para SEO, GEO, AEO y AIO." },
  { title: "Product", items: "Productos digitales, sistemas administrativos, dashboards, design systems y bibliotecas de componentes." },
  { title: "AI-assisted", items: "ComfyUI, exploración visual, desarrollo asistido, scripts, plugins y automatización." },
  { title: "Visual design", items: "Branding, editorial, presentaciones, packaging y dirección de arte." },
];

export default function Home() {
  const projects = getProjects().filter(project => project.featured);
  return <main id="main">
    <section className="hero page-width">
      <div className="hero-copy"><span className="eyebrow">UI/UX Designer & Web Designer</span>
        <h1>Diseño experiencias <span><em>digitales.</em></span></h1>
        <p>Conecto UX, interfaces y tecnología para llevar ideas desde la estructura hasta una experiencia funcional.</p>
        <div className="hero-actions"><Link className="button-primary" href="#work">Ver proyectos <ArrowDownRight size={18}/></Link><a className="text-link" href="mailto:omarcf.info@gmail.com">Hablemos <ArrowUpRight size={18}/></a></div>
      </div>
      <figure className="hero-visual"><Image src="https://picsum.photos/seed/omar-visual-practice/1000/1200" alt="Fotografía editorial de muestra, no corresponde a un proyecto de cliente" fill priority fetchPriority="high" quality={60} sizes="(max-width: 768px) calc(100vw - 44px), 35vw"/><figcaption>Exploración visual. Imagen de muestra.</figcaption></figure>
    </section>
    <SelectedWork projects={projects}/>
    <section className="bridge-section contrast-dark" id="process"><div className="page-width bridge-inner"><h2>Del diseño a la <em>experiencia.</em></h2><p>Un recorrido flexible desde comprender el reto hasta llevar la solución a una interfaz funcional.</p>
      <ProcessTimeline/>
    </div></section>
    <section className="capabilities-section page-width" id="capabilities"><h2>Capacidades <em>conectadas.</em></h2><div className="capability-list">{capabilities.map(group => <article className="capability-row" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></article>)}</div></section>
    <section className="about-strip page-width" id="about"><div className="about-copy"><h2>Diseñador gráfico de formación. <em>Diseñador digital por evolución.</em></h2><p>Me interesa entender un problema, estructurarlo y diseñar una solución que pueda crecer.</p><Link href="/about" className="text-link">Conoce mi enfoque <ArrowUpRight size={18}/></Link></div><div className="experience-note"><strong>10+</strong><span>años de experiencia en diseño</span></div></section>
    <PortfolioExtras/>
    <section className="toolkit-section"><div className="page-width toolkit-inner"><h2>Herramientas.</h2><div className="toolkit-groups">
      <p><b>Diseño</b><span>Figma, Photoshop, Illustrator, InDesign, After Effects, Premiere.</span></p>
      <p><b>Desarrollo</b><span>HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind.</span></p>
      <p><b>Producto y datos</b><span>Supabase, GitHub.</span></p>
      <p><b>IA</b><span>ComfyUI, OpenCode, herramientas generativas y desarrollo asistido.</span></p>
      <p><b>Sistemas</b><span>macOS, Linux, Windows.</span></p>
    </div></div></section>
  </main>;
}
