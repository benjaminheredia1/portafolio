import { skillGroups } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 bg-black px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="$ which --all"
        title="Stack"
        description="What I reach for to take a system from zero to production."
      />
      <div className="mx-auto mt-14 grid max-w-4xl gap-5 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div
            key={group.label}
            className="rounded-2xl border border-zinc-800 bg-zinc-950/60 p-6"
          >
            <h3 className="font-mono text-xs uppercase tracking-widest text-cyan-400/80">
              {group.label}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-zinc-800 bg-black/40 px-3 py-1 text-sm text-zinc-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
