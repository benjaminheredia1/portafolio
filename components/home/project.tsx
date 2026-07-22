import { projects, type Project } from "@/lib/content";
import { SectionHeading } from "./section-heading";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-zinc-900/60">
      <div className="flex items-baseline justify-between gap-2 font-mono text-xs text-zinc-500">
        <span className="truncate">{project.org}</span>
        <span className="shrink-0 text-cyan-400/70">{project.year}</span>
      </div>
      <h3 className="mt-3 text-lg font-semibold text-white transition-colors group-hover:text-cyan-100">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-zinc-400">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md border border-zinc-800 bg-black/40 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
          >
            {t}
          </span>
        ))}
      </div>
    </article>
  );
}

export function ProjectsGrid() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 bg-black px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="$ ls ~/projects"
        title="Selected work"
        description="Systems I built or helped ship in production, not side-project demos."
      />
      <div className="mx-auto mt-14 max-w-6xl">
        <ProjectsGrid />
      </div>
    </section>
  );
}
