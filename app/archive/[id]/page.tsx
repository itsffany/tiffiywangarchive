import type { Metadata } from "next";
import Link from "next/link";
import { getProject, projects, type Project, type ProjectMedia } from "../../projects";
import "./project.css";

type PageProps = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ id: project.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const project = getProject((await params).id);
  return { title: project ? `${project.title} — Tiffany Wang` : "Project — Tiffany Wang", description: project?.summary };
}

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.heroImage && !compact) {
    return (
      <figure className="case-visual case-visual--image">
        <img src={project.heroImage} alt={project.heroAlt ?? `${project.title} project hero`} />
      </figure>
    );
  }

  return (
    <div className={`case-visual project-${project.index} ${compact ? "is-compact" : ""}`} role="img" aria-label={`Abstract project visualization for ${project.title}`}>
      <span className="case-visual-grid" />
      <span className="case-visual-orbit"><i /></span>
      <span className="case-visual-line" />
      <span className="case-visual-star" />
      <span className="case-visual-label">{project.index} / {project.title.toUpperCase()}</span>
    </div>
  );
}

function CaseMedia({
  media,
  layout = "stack",
  width,
  offset,
  columns,
}: {
  media: ProjectMedia[];
  layout?: "stack" | "grid";
  width?: number;
  offset?: number;
  columns?: string;
}) {
  const style: React.CSSProperties = {
    width: width ? `${(width / 1180) * 100}%` : undefined,
    marginLeft: offset ? `${(offset / 1180) * 100}%` : undefined,
    gridTemplateColumns: columns,
  };

  return (
    <div className={`case-media-grid case-media-grid--${layout}`} style={style}>
      {media.map((item) => (
        <figure className="case-media" key={item.src} style={item.aspectRatio ? { aspectRatio: item.aspectRatio } : undefined}>
          <img
            src={item.src}
            alt={item.alt}
            loading="lazy"
            style={{ height: item.aspectRatio ? "100%" : undefined, objectFit: item.fit }}
          />
          {item.caption && <figcaption>{item.caption}</figcaption>}
        </figure>
      ))}
    </div>
  );
}

function MetadataItem({ label, children }: { label: string; children: React.ReactNode }) {
  return <div className="case-meta-item"><dt>{label}</dt><dd>{children}</dd></div>;
}

export default async function ProjectPage({ params }: PageProps) {
  const project = getProject((await params).id);
  if (!project) return <main className="case-not-found"><h1>Project not found.</h1><Link href="/#archive">Return to Archive</Link></main>;
  const nextProject = projects[(projects.indexOf(project) + 1) % projects.length];

  return (
    <main className="case-page">
      <header className="site-header case-header">
        <Link className="site-mark" href="/">Tiffany’s Archive</Link>
        <nav aria-label="Project navigation">
          <Link href="/#about">About</Link><Link href="/#archive">Archive</Link><Link href="/#focus">Focus</Link><Link href="/#contact">Contact</Link>
        </nav>
      </header>

      <article>
        <header className="case-intro case-container">
          <Link className="case-back" href="/#archive">← Back to Archive</Link>
          <p className="case-kicker">PROJECT {project.index} / {project.field} / {project.year}</p>
          <h1>{project.title}</h1>
          <p className="case-subtitle">{project.summary}</p>
        </header>

        <div className="case-container"><ProjectVisual project={project} /></div>

        <div className="case-overview case-container">
          <aside className="case-sidebar">
            <dl>
              <MetadataItem label="Project Name">{project.title}</MetadataItem>
              <MetadataItem label="Project Nature">{project.nature}</MetadataItem>
              <MetadataItem label="Team Members">{project.team}</MetadataItem>
              <MetadataItem label="My Role">{project.role}</MetadataItem>
              <MetadataItem label="Project Type">{project.projectType}</MetadataItem>
              <MetadataItem label="Duration">{project.duration}</MetadataItem>
            </dl>
            <a className="skip-final" href="#final-design">Skip to Final Design <span>→</span></a>
          </aside>

          <div className="case-summary-column">
            <section className="case-abstract" aria-labelledby="abstract-title">
              <p className="case-small-label">PROJECT OVERVIEW</p>
              <h2 id="abstract-title">Abstract</h2>
              {project.abstract.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
            <nav className="case-menu" aria-label="Case study contents">
              <p className="case-small-label">MENU</p>
              <ol>{project.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2,"0")}</span>{section.title}<i>↘</i></a></li>)}</ol>
            </nav>
          </div>
        </div>

        <div className="case-sections">
          {project.sections.map((section, index) => (
            <section className="case-section case-container" id={section.id} key={section.id}>
              <div className="case-section-heading"><span>{String(index + 1).padStart(2,"0")} /</span><h2>{section.title}</h2></div>
              {section.media && section.mediaPlacement === "before" && (
                <CaseMedia media={section.media} layout={section.mediaLayout} width={section.mediaWidth} offset={section.mediaOffset} columns={section.mediaColumns} />
              )}
              <div className="case-section-body">
                {section.paragraphs.map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                {section.note && <aside className="case-note">{section.note}</aside>}
                {section.link && <a className="case-external-link" href={section.link.href} target="_blank" rel="noreferrer">{section.link.label} <span>↗</span></a>}
              </div>
              {section.media && section.mediaPlacement !== "before" && (
                <CaseMedia media={section.media} layout={section.mediaLayout} width={section.mediaWidth} offset={section.mediaOffset} columns={section.mediaColumns} />
              )}
              {!section.media && (index === 1 || section.id === "final-design") && <ProjectVisual project={project} compact />}
            </section>
          ))}
        </div>

        <footer className="case-next case-container">
          <p>END OF PROJECT {project.index}</p>
          <Link href={`/archive/${nextProject.id}`}><span>Next project</span><strong>{nextProject.title}</strong><i>→</i></Link>
        </footer>
      </article>
    </main>
  );
}
