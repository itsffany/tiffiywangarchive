import type { Metadata } from "next";
import Link from "next/link";
import { getProject, projects } from "../../projects";
import ProjectPageClient from "./project-page-client";
import "./project.css";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).id);
  return {
    title: project ? `${project.title} — Tiffany Wang` : "Project — Tiffany Wang",
    description: project?.summary,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const project = getProject((await params).id);
  if (!project) {
    return <main className="case-not-found"><h1>Project not found.</h1><Link href="/#archive">Return to Archive</Link></main>;
  }
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];
  return <ProjectPageClient project={project} nextProject={nextProject} />;
}
