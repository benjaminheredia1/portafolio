import { experience } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20 bg-black px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="$ git log --career"
        title="Experience"
        description="Six teams in two years — from help desk to shipping full-stack systems and AI integrations in production."
      />
      <ol className="relative mx-auto mt-16 max-w-3xl border-l border-zinc-800 pl-6 sm:pl-10">
        {experience.map((job, index) => (
          <li key={job.hash} className="relative pb-12 last:pb-0">
            {/* Commit dot on the branch line */}
            <span
              className={`absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-black sm:-left-[47px] ${
                index === 0 ? "bg-cyan-400" : "bg-zinc-600"
              }`}
            />
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 font-mono text-xs sm:text-sm">
              <span className="text-cyan-400/90">{job.hash}</span>
              {index === 0 ? (
                <span className="text-zinc-500">
                  (<span className="text-cyan-300">HEAD</span> → main)
                </span>
              ) : null}
              <span className="text-zinc-500">{job.period}</span>
            </div>
            <h3 className="mt-2 text-lg font-semibold text-white">
              {job.role}
              <span className="text-zinc-500"> · </span>
              <span className="text-zinc-300">{job.company}</span>
            </h3>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-zinc-400">
              {job.summary}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {job.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-[11px] text-zinc-400"
                >
                  {t}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
