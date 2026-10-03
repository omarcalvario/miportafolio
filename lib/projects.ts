import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Project = {
  slug: string; title: string; category: string; year: string; description: string;
  role: string; tools: string[]; featured: boolean; order: number; coverImage: string; content: string; demo: boolean;
};

const directory = path.join(process.cwd(), "content/projects");

export function getProjects(): Project[] {
  return fs.readdirSync(directory).filter((file) => file.endsWith(".mdx")).map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const { data, content } = matter(fs.readFileSync(path.join(directory, file), "utf8"));
    return { slug, title: data.title ?? slug, category: data.category ?? "", year: data.year ?? "", description: data.description ?? "", role: data.role ?? "", tools: data.tools ?? [], featured: data.featured ?? false, order: data.order ?? 99, coverImage: data.coverImage ?? "", demo: data.demo === true, content } as Project;
  }).sort((a, b) => a.order - b.order);
}

export function getProject(slug: string) { return getProjects().find((project) => project.slug === slug); }
