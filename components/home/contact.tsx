import { IconBrandGithub, IconMail, IconMapPin } from "@tabler/icons-react";
import { profile } from "@/lib/content";
import { SectionHeading } from "./section-heading";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 bg-black px-4 pb-12 pt-24 sm:px-6">
      <SectionHeading
        eyebrow="$ ping benjamin"
        title="Hiring, or got a hard problem?"
        description="Open to full-stack and AI engineering roles, plus freelance work — reach out directly, I check this email."
      />
      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
        >
          <IconMail className="h-4 w-4" />
          {profile.email}
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10"
        >
          <IconBrandGithub className="h-4 w-4" />
          GitHub
        </a>
      </div>
      <p className="mt-6 flex items-center justify-center gap-1.5 font-mono text-xs text-zinc-500">
        <IconMapPin className="h-3.5 w-3.5" />
        {profile.location}
      </p>
      <footer className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-2 border-t border-zinc-900 pt-6 font-mono text-xs text-zinc-600 sm:flex-row">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>Next.js · Tailwind CSS · deployed on Vercel</span>
      </footer>
    </section>
  );
}
