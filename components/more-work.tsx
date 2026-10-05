import { ProjectCard } from "@/components/project-card";
import type { Project } from "@/lib/projects";

export function MoreWork({ projects, currentSlug }: { projects: Project[]; currentSlug: string }) {
  const others = projects.filter((project) => project.slug !== currentSlug);
  if (!others.length) return null;

  return <section className="more-work" aria-labelledby="more-work-title">
    <div className="more-work-heading">
      <p>¿Qué más he hecho?</p>
      <h2 id="more-work-title">Más trabajos<span>.</span></h2>
    </div>
    <div className="more-work-grid">
      {others.map((project, index) => <ProjectCard key={project.slug} project={project} index={index}/>) }
    </div>
  </section>;
}
