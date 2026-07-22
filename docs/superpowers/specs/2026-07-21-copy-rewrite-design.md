# Copy rewrite: kill generic/AI-sounding text

## Goal

Rewrite the portfolio's static copy so it reads like it was written by a specific engineer, not generated. No visual, structural, or architectural changes — this is a content-only pass over existing strings in `lib/content.ts` and inline `SectionHeading` descriptions in `components/home/*.tsx`.

## Non-goals

- No new sections, components, or layout changes.
- No new fake metrics or invented facts. Where a real number/link would land harder than we can currently say, leave a `// TODO:` comment next to the field in `lib/content.ts` instead of fabricating one.
- No touching `/proyectos`, `/login`, middleware, or Prisma code.

## Tells being removed

Patterns identified as generic/LLM-flavored, each gets rewritten for technical specificity over abstraction:

1. **Rule-of-three abstractions** — e.g. `info.tsx` about description: "I care about code quality, shipping, and the space where software meets AI." Replace with a concrete, specific claim instead of a triplet.
2. **Hollow parallelism** — e.g. `project.tsx` heading: "real users, real constraints." Replace with a plain, specific sentence.
3. **Default landing-page CTAs** — e.g. `contact.tsx` title "Let's build something" and description "...interesting collaborations." Replace with a direct, specific ask.
4. **Resume-bullet corporate speak** — e.g. `experience[3]` (Boring Ventures) summary: "Owned the full software development life cycle of custom systems — requirement analysis, architecture design, and production deployment." Replace with what was actually built/decided.
5. **Vague "AI features" filler** — e.g. `projects[1]` (Clinical platform) description: "AI features built on LangChain to assist staff workflows." Name what the feature actually does.
6. **Sentimental flourishes without anchoring** — e.g. `info.tsx` StickyScroll: "to respect the people who use what I build." Cut or ground it in a specific behavior.

## Files touched

- `lib/content.ts` — `profile.tagline`, `experience[].summary` (all 6), `projects[].description` (all 6), spot-check `highlights` and `skillGroups` labels (likely untouched, already terse).
- `components/home/info.tsx` — About `SectionHeading` description, StickyScroll `title`/`description` for all 3 cards.
- `components/home/experience.tsx` — `SectionHeading` description.
- `components/home/project.tsx` — `SectionHeading` description.
- `components/home/skills.tsx` — `SectionHeading` description.
- `components/home/contact.tsx` — `SectionHeading` title/description.
- `components/home/hero.tsx` — only if `profile.tagline` rewrite changes length enough to need it re-checked against layout (no direct string here, just consumes `profile.tagline`).

## Verification

- Read every rewritten string aloud against the "would a specific engineer say this" test.
- Run dev server, visually confirm no overflow/wrapping regressions from length changes (tagline, hero, cards).
- `grep` for leftover clichés (`space where`, `real users, real`, `Let's build something`, `full software development life cycle`) to confirm they're gone.
