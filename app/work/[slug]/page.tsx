import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import fs from "node:fs";
import path from "node:path";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ArrowLeft } from "lucide-react";
import { getProject, getProjects } from "@/lib/projects";
import { DemoStudy } from "@/components/demo-study";
import { ProjectMedia } from "@/components/project-media";
import { Experiment } from "@/components/experiment";
import { MoreWork } from "@/components/more-work";

export function generateStaticParams() { return getProjects().map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const project = getProject((await params).slug);
  return project ? { title: project.title, description: project.description, openGraph: { title: `${project.title} | Omar Calvario`, description: project.description } } : {};
}
export default async function CaseStudy({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug);
  if (!project) notFound();
  const hasImage = Boolean(project.coverImage) && fs.existsSync(path.join(process.cwd(), "public", project.coverImage.replace(/^\//, "")));
  const video = project.slug === "deportes-uvp" && fs.existsSync(path.join(process.cwd(), "public/images/deportes-uvp/video-deportes.mp4")) ? "/images/deportes-uvp/video-deportes.mp4" : undefined;
  return <main id="main" className="case-page page-width">
    <Link href="/work" className="back-link"><ArrowLeft size={16}/> Ver proyectos</Link>
    <header className="case-header"><p>{project.category}</p><h1>{project.title}</h1><p>{project.description}</p></header>
    <ProjectMedia src={video ?? (hasImage ? project.coverImage : `https://picsum.photos/seed/${project.slug}-editorial/1600/900`)} kind={video ? "video" : "image"} poster={video ? project.coverImage : undefined} alt={hasImage ? `Portada de ${project.title}` : `Fotografía editorial de muestra para ${project.title}`} caption={hasImage ? undefined : "Imagen de muestra, no representa el proyecto real. Sustituir por su portada."}/>
    <div className="case-meta"><div><span>Rol</span><b>{project.role}</b></div><div><span>Año</span><b>{project.year || "Por confirmar"}</b></div><div><span>Tipo</span><b>{project.category}</b></div><div><span>Herramientas</span><b>{project.tools.length ? project.tools.join(", ") : "Por confirmar"}</b></div></div>
    {project.demo ? <DemoStudy slug={project.slug}/> : <article className="mdx-content"><MDXRemote source={project.content} components={{ ProjectMedia, Experiment }}/></article>}
    <Link href="/work" className="back-link case-back"><ArrowLeft size={16}/> Ver proyectos</Link>
    <MoreWork projects={getProjects()} currentSlug={project.slug}/>
  </main>;
}
