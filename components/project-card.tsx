import Link from "next/link";
import Image from "next/image";
import fs from "node:fs";
import path from "node:path";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function ProjectCard({ project }: { project: Project; index: number }) {
  const hasImage = Boolean(project.coverImage) && fs.existsSync(path.join(process.cwd(), "public", project.coverImage.replace(/^\//, "")));
  return <article className="project-card"><Link href={`/work/${project.slug}`} className="project-image" aria-label={`Ver case study de ${project.title}`}>
    <Image src={hasImage ? project.coverImage : `https://picsum.photos/seed/${project.slug}-editorial/1200/900`} alt={hasImage ? `Imagen de ${project.title}` : `Imagen editorial de muestra para ${project.title}`} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }}/>
  </Link><div className="project-caption"><div><h3><Link href={`/work/${project.slug}`}>{project.title}</Link></h3><p>{project.category}</p>{!hasImage && <small>Imagen de muestra</small>}</div><ArrowUpRight size={20}/></div></article>;
}
