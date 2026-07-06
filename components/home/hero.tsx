import Link from "next/link";
import { IconBrandGithub, IconMail, IconArrowDown } from "@tabler/icons-react";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { profile } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center overflow-hidden px-4">
      <BackgroundRippleEffect />
      <div className="pointer-events-none relative z-10 mx-auto flex max-w-3xl flex-col items-center text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400/80 sm:text-sm">
          {profile.role} · {profile.location}
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-6xl">
          {profile.name}
        </h1>
        <TextGenerateEffect
          words={profile.tagline}
          className="mt-2 max-w-2xl text-balance font-normal"
          filter={true}
          duration={0.8}
        />
        <p className="mt-8 font-mono text-xs text-zinc-500 sm:text-sm">
          {profile.coreStack.join(" · ")}
        </p>
        <div className="pointer-events-auto mt-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-medium text-black transition-colors hover:bg-zinc-200"
          >
            View projects
            <IconArrowDown className="h-4 w-4" />
          </Link>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <IconBrandGithub className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-white backdrop-blur transition-colors hover:bg-white/10"
          >
            <IconMail className="h-4 w-4" />
            Email me
          </a>
        </div>
      </div>
    </section>
  );
}
