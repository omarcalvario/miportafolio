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

const toolkitLogos = [
  { name: "Figma", src: "/images/logos/Frame%202.svg" },
  { name: "Photoshop", src: "/images/logos/Adobe%20Apps.svg" },
  { name: "Illustrator", src: "/images/logos/Adobe%20Apps-1.svg" },
  { name: "InDesign", src: "/images/logos/Adobe%20Apps-2.svg" },
  { name: "After Effects", src: "/images/logos/Adobe%20Apps-3.svg" },
  { name: "Premiere Pro", src: "/images/logos/Adobe%20Apps-4.svg" },
  { name: "Media Encoder", src: "/images/logos/Adobe%20Apps-5.svg" },
  { name: "Lightroom", src: "/images/logos/Adobe%20Apps-6.svg" },
  { name: "HTML5", src: "/images/logos/Tech%20Stack%20Logos.svg", tile: true },
  { name: "CSS3", src: "/images/logos/Tech%20Stack%20Logos-1.svg", tile: true },
  { name: "GitHub", src: "/images/logos/Tech%20Stack%20Logos-2.svg", tile: true },
  { name: "ComfyUI", src: "/images/logos/Frame%2012.svg" },
  { name: "OpenCode", src: "/images/logos/Frame%2013.svg" },
  { name: "Visual Studio Code", src: "/images/logos/Tech%20Stack%20Logos-3.svg", tile: true },
  { name: "WordPress", src: "/images/logos/Tech%20Stack%20Logos-4.svg", tile: true },
  { name: "Linux", src: "/images/logos/Tech%20Stack%20Logos-5.svg", tile: true },
];

export default function Home() {
  const projects = getProjects().filter(project => project.featured);
  return <main id="main">
    <section className="hero page-width">
      <div className="hero-copy"><span className="eyebrow">UI/UX Designer & Web Designer</span>
        <h1>Diseño<br/>experiencias <span><em>digitales.</em></span></h1>
        <p>Conecto UX, interfaces y tecnología para llevar ideas desde la estructura hasta una experiencia funcional.</p>
        <div className="hero-actions"><Link className="button-primary" href="#work">Ver proyectos <ArrowDownRight size={18}/></Link><a className="text-link" href="mailto:omarcf.info@gmail.com">Hablemos <ArrowUpRight size={18}/></a></div>
      </div>
      <figure className="hero-visual"><video autoPlay muted loop playsInline preload="metadata" poster="/images/deportes-uvp/cover.webp" aria-hidden="true"><source src="/images/deportes-uvp/video-deportes.mp4" type="video/mp4"/></video></figure>
    </section>
    <SelectedWork projects={projects}/>
    <section className="bridge-section contrast-dark" id="process"><div className="page-width bridge-inner"><h2>Del diseño a la <em>experiencia.</em></h2><p>Un recorrido flexible desde comprender el reto hasta llevar la solución a una interfaz funcional.</p>
      <ProcessTimeline/>
    </div></section>
    <section className="capabilities-section page-width" id="capabilities"><h2>Capacidades <em>conectadas.</em></h2><div className="capability-list">{capabilities.map(group => <article className="capability-row" key={group.title}><h3>{group.title}</h3><p>{group.items}</p></article>)}</div></section>
    <section className="about-strip page-width" id="about"><div className="about-copy"><h2>Diseñador gráfico de formación. <em>Diseñador digital por evolución.</em></h2><p>Me interesa entender un problema, estructurarlo y diseñar una solución que pueda crecer.</p><Link href="/about" className="text-link">Conoce mi enfoque <ArrowUpRight size={18}/></Link></div><div className="experience-note"><strong>10+</strong><span>años de experiencia en diseño</span></div></section>
    <PortfolioExtras/>
    <section className="toolkit-section"><div className="page-width toolkit-inner"><div className="toolkit-copy"><h2>Herramientas.</h2><div className="toolkit-groups">
      <p><b>Diseño</b><span>Figma, Photoshop, Illustrator, InDesign, After Effects, Premiere.</span></p>
      <p><b>Desarrollo</b><span>HTML, CSS, JavaScript, React, Next.js, TypeScript, Tailwind.</span></p>
      <p><b>Producto y datos</b><span>Supabase, GitHub.</span></p>
      <p><b>IA</b><span>ComfyUI, OpenCode, herramientas generativas y desarrollo asistido.</span></p>
      <p><b>Sistemas</b><span>macOS, Linux, Windows.</span></p>
    </div></div><ul className="toolkit-logos" aria-label="Logotipos de herramientas y tecnologías">{toolkitLogos.map(logo => <li className={logo.tile ? "toolkit-logo-tile" : undefined} key={logo.name}><Image src={logo.src} alt={logo.name} width={60} height={60} sizes="60px"/></li>)}</ul></div></section>
  </main>;
}
