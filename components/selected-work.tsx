import Image from "next/image";
import Link from "next/link";
import fs from "node:fs";
import path from "node:path";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export function SelectedWork({ projects }: { projects: Project[] }) {
  return <section className="selected-work" id="work" aria-label="Selected work">
    {projects.map((project, index) => {
      const hasImage = Boolean(project.coverImage) && fs.existsSync(path.join(process.cwd(), "public", project.coverImage.replace(/^\//, "")));
      const image = hasImage ? project.coverImage : `https://picsum.photos/seed/${project.slug}-editorial/1200/900`;
      const video = project.slug === "deportes-uvp" && fs.existsSync(path.join(process.cwd(), "public/images/deportes-uvp/video-deportes.mp4")) ? "/images/deportes-uvp/video-deportes.mp4" : undefined;
      return <article className="selected-work-panel" key={project.slug} aria-labelledby={`work-title-${project.slug}`}>
        <div className="selected-work-backdrop" aria-hidden="true">
          <Image src={image} alt="" fill sizes="100vw" style={{ objectFit: "cover" }}/>
        </div>
        {/* The oversized sticky range keeps each composition centered while the
            panel's paint containment reveals the next project on scroll. */}
        <div className="selected-work-range" style={{ top: `-${index * 100}svh`, height: `${(index + 2) * 100}svh` }}>
          <div className="selected-work-content">
            <h2 id={`work-title-${project.slug}`} className="selected-work-title"><Link href={`/work/${project.slug}`}>{project.title}</Link></h2>
            <Link className="selected-work-preview" href={`/work/${project.slug}`} aria-label={`Ver case study de ${project.title}`}>
              {video ? <video autoPlay muted loop playsInline preload="metadata" poster={image} aria-hidden="true"><source src={video} type="video/mp4"/></video> : <Image src={image} alt={hasImage ? `Imagen de ${project.title}` : `Imagen editorial de muestra para ${project.title}`} fill sizes="(max-width: 809px) 70vw, 35vw" style={{ objectFit: "cover" }}/>}
              <span className="selected-work-open">Ver proyecto <ArrowUpRight size={16} aria-hidden="true"/></span>
            </Link>
            <p className="selected-work-category">{project.category}</p>
            {!hasImage && <span className="selected-work-note">Imagen de muestra</span>}
          </div>
        </div>
      </article>;
    })}
  </section>;
}
