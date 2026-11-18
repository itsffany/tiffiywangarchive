"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { localizeProject, projectUi } from "../../i18n";
import { LanguageToggle, useLanguage } from "../../language";
import { portfolioCopy } from "../../portfolio-copy";
import type { Project, ProjectMedia } from "../../projects";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

function ProjectVisual({ project, compact = false }: { project: Project; compact?: boolean }) {
  if (project.heroImage && !compact) {
    const heroStyle: CSSProperties = {
      aspectRatio: project.heroAspectRatio,
      width: project.heroWidth ? `${(project.heroWidth / 1180) * 100}%` : undefined,
      marginLeft: project.heroOffset ? `${(project.heroOffset / 1180) * 100}%` : undefined,
    };
    return (
      <figure className="case-visual case-visual--image" style={heroStyle}>
        <img src={`${basePath}${project.heroImage}`} alt={project.heroAlt ?? `${project.title} project hero`} />
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
  const style: CSSProperties = {
    width: width ? `${(width / 1180) * 100}%` : undefined,
    marginLeft: offset ? `${(offset / 1180) * 100}%` : undefined,
    gridTemplateColumns: columns,
  };

  return (
    <div className={`case-media-grid case-media-grid--${layout}`} style={style}>
      {media.map((item) => (
        <figure className="case-media" key={item.src} style={item.aspectRatio ? { aspectRatio: item.aspectRatio } : undefined}>
          <img
            src={`${basePath}${item.src}`}
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

function SiteHeader() {
  const { language } = useLanguage();
  const ui = projectUi[language];
  return (
    <header className="site-header case-header">
      <Link className="site-mark" href="/">Tiffany’s Archive</Link>
      <nav aria-label={language === "zh" ? "项目导航" : "Project navigation"}>
        <Link href="/#about">{ui.nav[0]}</Link>
        <Link href="/#archive">{ui.nav[1]}</Link>
        <Link href="/#focus">{ui.nav[2]}</Link>
        <Link href="/#contact">{ui.nav[3]}</Link>
        <LanguageToggle compact />
      </nav>
    </header>
  );
}

function ProjectFooter({ project, nextProject }: { project: Project; nextProject: Project }) {
  const { language } = useLanguage();
  const ui = projectUi[language];
  const next = localizeProject(nextProject, language);
  return (
    <footer className="case-next case-container">
      <p>{ui.end} {project.index}</p>
      {project.id !== "studio-index" && (
        <Link href={`/archive/${nextProject.id}`}><span>{ui.next}</span><strong>{next.title}</strong><i>→</i></Link>
      )}
    </footer>
  );
}

function PdfPortfolio({ project, nextProject }: { project: Project; nextProject: Project }) {
  const { language } = useLanguage();
  const portfolio = project.pdfPortfolio!;
  const localized = localizeProject(project, language);
  const ui = projectUi[language];
  const pages = Array.from({ length: portfolio.pageCount }, (_, index) => index + 1);
  const englishPages = portfolioCopy[project.id];
  return (
    <main className="case-page case-page--pdf">
      <SiteHeader />
      <article>
        <header className="pdf-case-header case-container">
          <Link className="case-back" href="/#archive">{ui.back}</Link>
          <div className="pdf-case-title-row">
            <div>
              <p className="case-kicker">{ui.project} {project.index} / {localized.field} / {project.year}</p>
              <h1>{localized.title}</h1>
              <p>{localized.summary}</p>
            </div>
          </div>
        </header>
        <section className="pdf-portfolio case-container" aria-label={`${localized.title} ${ui.pdfLabel}`}>
          <div className="pdf-portfolio-meta">
            <span>{language === "zh" ? "项目作品集" : "Project portfolio"}</span>
            <span>{portfolio.pageCount} {language === "zh" ? "页" : "pages"}</span>
          </div>
          {language === "zh" ? pages.map((page) => (
              <figure className="pdf-page" key={page}>
                <img
                  src={`${basePath}${portfolio.folder}/page-${String(page).padStart(2, "0")}.jpg`}
                  alt={`${localized.title} 中文作品集第 ${page} 页`}
                  loading={page <= 2 ? "eager" : "lazy"}
                  decoding="async"
                />
                <figcaption>{String(page).padStart(2, "0")} / {String(portfolio.pageCount).padStart(2, "0")}</figcaption>
              </figure>
            )) : englishPages?.map((page, index) => (
              <article
                className={`portfolio-page portfolio-page--${project.id}`}
                key={`${project.id}-${index}`}
                style={{ "--portfolio-reference": `url(${basePath}${portfolio.folder}/page-${String(index + 1).padStart(2, "0")}.jpg)` } as CSSProperties}
              >
                <span className="portfolio-page-reference" aria-hidden="true" />
                <div className="portfolio-page-content">
                  <p className="portfolio-page-section">{page.section}</p>
                  <h2>{page.title}</h2>
                  {page.intro && <p className="portfolio-page-intro">{page.intro}</p>}
                  {page.columns && <div className="portfolio-page-columns">
                    {page.columns.map((column, columnIndex) => <section key={`${column.title}-${columnIndex}`}>
                      <span>{String(columnIndex + 1).padStart(2, "0")}</span>
                      <h3>{column.title}</h3>
                      {column.body.split("\n").map((paragraph, paragraphIndex) => <p key={paragraphIndex}>{paragraph}</p>)}
                    </section>)}
                  </div>}
                  {page.note && <p className="portfolio-page-note">{page.note}</p>}
                  <p className="portfolio-page-number">{String(index + 1).padStart(2, "0")} / {String(portfolio.pageCount).padStart(2, "0")}</p>
                </div>
              </article>
            ))}
        </section>
        <ProjectFooter project={project} nextProject={nextProject} />
      </article>
    </main>
  );
}

export default function ProjectPageClient({ project, nextProject }: { project: Project; nextProject: Project }) {
  const { language } = useLanguage();
  if (project.pdfPortfolio) return <PdfPortfolio project={project} nextProject={nextProject} />;

  const localized = localizeProject(project, language);
  const ui = projectUi[language];
  return (
    <main className="case-page">
      <SiteHeader />
      <article>
        <header className="case-intro case-container">
          <Link className="case-back" href="/#archive">{ui.back}</Link>
          <p className="case-kicker">{ui.project} {project.index} / {localized.field} / {project.year}</p>
          <h1>{localized.title}</h1>
          <p className="case-subtitle">{localized.summary}</p>
        </header>

        <div className="case-container"><ProjectVisual project={project} /></div>

        <div className="case-overview case-container">
          <aside className="case-sidebar">
            <dl>
              <MetadataItem label={ui.labels[0]}>{localized.title}</MetadataItem>
              <MetadataItem label={ui.labels[1]}>{localized.nature}</MetadataItem>
              <MetadataItem label={ui.labels[2]}>{localized.team}</MetadataItem>
              <MetadataItem label={ui.labels[3]}>{localized.role}</MetadataItem>
              <MetadataItem label={ui.labels[4]}>{localized.projectType}</MetadataItem>
              <MetadataItem label={ui.labels[5]}>{localized.duration}</MetadataItem>
            </dl>
            <a className="skip-final" href="#final-design">{ui.skip} <span>→</span></a>
          </aside>

          <div className="case-summary-column">
            <section className="case-abstract" aria-labelledby="abstract-title">
              <p className="case-small-label">{ui.overview}</p>
              <h2 id="abstract-title">{ui.abstract}</h2>
              {localized.abstract.map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </section>
            <nav className="case-menu" aria-label={language === "zh" ? "案例目录" : "Case study contents"}>
              <p className="case-small-label">{ui.menu}</p>
              <ol>{localized.sections.map((section, index) => <li key={section.id}><a href={`#${section.id}`}><span>{String(index + 1).padStart(2,"0")}</span>{section.title}<i>↘</i></a></li>)}</ol>
            </nav>
          </div>
        </div>

        <div className="case-sections">
          {localized.sections.map((section, index) => (
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

        <ProjectFooter project={project} nextProject={nextProject} />
      </article>
    </main>
  );
}
