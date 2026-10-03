import type { MetadataRoute } from "next";
import { getProjects } from "@/lib/projects";
import { siteUrl } from "@/lib/site-url";
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap { const base = siteUrl.toString().replace(/\/$/, ""); return [{ url: `${base}/`, lastModified: new Date(), changeFrequency: "monthly", priority: 1 }, { url: `${base}/about/`, changeFrequency: "yearly", priority: 0.6 }, { url: `${base}/contact/`, changeFrequency: "yearly", priority: 0.6 }, { url: `${base}/work/`, changeFrequency: "monthly", priority: 0.8 }, ...getProjects().map((project) => ({ url: `${base}/work/${project.slug}/`, changeFrequency: "yearly" as const, priority: 0.7 }))]; }
