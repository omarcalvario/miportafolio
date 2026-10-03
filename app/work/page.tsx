import type { Metadata } from "next";
import { getProjects } from "@/lib/projects";
import { moreWork } from "@/lib/archive";
import { ProjectCard } from "@/components/project-card";
import { MotionIn } from "@/components/motion-in";
import Link from "next/link";

export const metadata: Metadata = { title: "Proyectos", description: "Proyectos de UI/UX, diseño web y productos digitales de Omar Calvario." };
export default function WorkPage() {
  return <main id="main" className="page-width listing-page"><h1>Proyectos seleccionados.</h1><p className="listing-intro">Sistemas, experiencias web y productos digitales. Los casos demostrativos están señalados dentro de cada proyecto.</p>
    <div className="project-grid">{getProjects().map((project, index) => <MotionIn key={project.slug}><ProjectCard project={project} index={index}/></MotionIn>)}</div>
    <h2 className="more-work-title">Más trabajo.</h2>
    <div className="archive-disclosures">{moreWork.map(project => <details key={project.title}><summary><strong>{project.title}</strong><span>{project.category}</span></summary><p>{project.description}</p><p className="archive-note">Material visual y documentación por incorporar.</p></details>)}</div>
    <Link className="all-work-link" href="/#other-work">Explorar trabajo visual</Link>
  </main>;
}
