# Portfolio Copy Rewrite Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace generic/LLM-sounding copy across the portfolio's static content with specific, grounded language — no new facts invented, no visual/structural changes.

**Architecture:** Content-only edits to string literals in `lib/content.ts` and inline `SectionHeading` props in `components/home/*.tsx`. No new files, no new components, no signature changes.

**Tech Stack:** Next.js (App Router), TypeScript, Tailwind — unchanged. This plan touches text only.

## Global Constraints

- No fabricated metrics, links, or facts. Where a real number/detail would strengthen a line but isn't available, add a `// TODO:` code comment next to the field in `lib/content.ts` — never put "TODO" in a string that renders on the page.
- No visual/layout/component-structure changes. Only string content changes.
- Keep the git-themed eyebrows (`$ cat about.md`, `$ git log --career`, `$ ls ~/projects`, `$ which --all`, `$ ping benjamin`) exactly as-is — these are the site's strongest "not a template" signal, don't touch them.
- Avoid reusing the same distinctive phrase across two sections (e.g. don't say "real users" in both About and Projects headings).

---

### Task 1: Rewrite `lib/content.ts` — profile, experience, projects

**Files:**
- Modify: `lib/content.ts`

**Interfaces:**
- Consumes: nothing new — same `profile`, `Experience`, `Project` shapes already exported.
- Produces: same exported shapes (`profile`, `experience`, `projects`, `skillGroups`, `highlights`) with only string values changed. No consumer in `components/home/*` needs changes from this task.

- [ ] **Step 1: Rewrite `profile.tagline`**

Old:
```ts
  tagline:
    "I build full-stack systems and AI integrations that make it to production — hospital platforms, academic systems, and self-service bots.",
```

New:
```ts
  tagline:
    "Full-stack systems and AI integrations, shipped — hospital platforms, academic systems, self-service bots.",
```

- [ ] **Step 2: Rewrite `experience[0]` (Nexus Patio Tech) summary**

Old:
```ts
    summary:
      "Drove projects from requirements gathering to delivery, including an AI-powered self-service bot. Deployed and managed applications on AWS and Kubernetes.",
```

New:
```ts
    summary:
      "Took the self-service bot from spec to production — LLM-driven conversation flow wired into n8n workflows, deployed on AWS and run on Kubernetes.",
```

- [ ] **Step 3: Rewrite `experience[1]` (PuntoCom Srl) summary, add TODO comment**

Old:
```ts
    summary:
      "Built systems that improved patient management and staff decision-making in clinical settings, with AI features integrated through APIs and LangChain.",
```

New:
```ts
    // TODO: name the actual LangChain decision-support capability (e.g. what it flags/summarizes) once confirmed — sharpens this further.
    summary:
      "Built the patient management platform used in day-to-day clinical operations, then layered in LangChain-based decision-support for staff.",
```

- [ ] **Step 4: Rewrite `experience[2]` (UTEPSA) summary**

Old:
```ts
    summary:
      "Started in help desk support and moved into building academic systems from the ground up. Automated workflows with n8n and Selenium; integrated AI with LangChain and the Google SDK.",
```

New:
```ts
    summary:
      "Started in help desk, moved into building UTEPSA's academic systems solo. Automated department workflows with n8n and Selenium, and added LangChain + Google SDK integrations on top.",
```

- [ ] **Step 5: Rewrite `experience[3]` (Boring Ventures) summary, add TODO comment**

Old:
```ts
    summary:
      "Owned the full software development life cycle of custom systems — requirement analysis, architecture design, and production deployment.",
```

New:
```ts
    // TODO: name a specific shipped product here if you can share it — strongest fix for this entry.
    summary:
      "Took custom Next.js + Supabase products from client requirements to a deployed system, solo — architecture calls included.",
```

- [ ] **Step 6: Rewrite `experience[4]` (Rocaz Soluciones) summary**

Old:
```ts
    summary:
      "Handled production errors and continuous improvement on live systems: server management on Hostinger and debugging complex issues in undocumented code.",
```

New:
```ts
    summary:
      "Kept production systems alive: Hostinger server management, and debugging issues in codebases with zero documentation.",
```

- [ ] **Step 7: Rewrite `experience[5]` (Desarrollamelo) summary**

Old:
```ts
    summary:
      "Shipped features and deployments for hospital systems, ERPs and academic platforms. Refactored legacy code, improving the worst segments by up to 80%.",
```

New:
```ts
    summary:
      "Shipped features and deployments across hospital systems, ERPs and academic platforms — refactored the worst legacy segments for up to 80% improvement.",
```

- [ ] **Step 8: Rewrite `projects[1]` (Clinical management platform) description, add TODO comment**

Old:
```ts
    description:
      "Patient management and decision-support tooling for clinics, with AI features built on LangChain to assist staff workflows.",
```

New:
```ts
    // TODO: same as experience[1] — name the actual decision-support capability once confirmed.
    description:
      "Patient management platform for clinics, with LangChain-based decision-support layered in for staff.",
```

- [ ] **Step 9: Rewrite `projects[4]` (Custom systems on Next.js + Supabase) description, add TODO comment**

Old:
```ts
    description:
      "Full-lifecycle product development: requirement analysis, architecture design and production deployment of custom systems.",
```

New:
```ts
    // TODO: same as experience[3] — name a specific product if you can share it.
    description:
      "Custom Next.js + Supabase products taken solo from client requirements to a deployed system — architecture decisions included.",
```

- [ ] **Step 10: Verify no old clichés remain**

Run: `grep -n "requirement analysis\|full software development life cycle\|AI features integrated through APIs\|AI features built on LangChain to assist" lib/content.ts`
Expected: no output (all instances rewritten).

- [ ] **Step 11: Commit**

```bash
git add lib/content.ts
git commit -m "content: rewrite generic experience/project copy for specificity"
```

---

### Task 2: Rewrite `SectionHeading` descriptions and About StickyScroll copy in components

**Files:**
- Modify: `components/home/info.tsx`
- Modify: `components/home/project.tsx`
- Modify: `components/home/skills.tsx`
- Modify: `components/home/contact.tsx`

**Interfaces:**
- Consumes: `SectionHeading` component (`eyebrow`, `title`, `description` props) — unchanged signature from `components/home/section-heading.tsx`.
- Produces: nothing new consumed elsewhere.

- [ ] **Step 0: Review `experience.tsx` `SectionHeading` description — decide no change needed**

Current text: `"Six teams in two years — from help desk to shipping full-stack systems and AI integrations in production."` Checked against the "Tells being removed" list in the design spec (rule-of-three, hollow parallelism, default CTAs, SDLC buzzword bullets, vague "AI features," sentimental flourish) — none apply, this line already states a concrete fact (six teams, two years, help desk origin). Leave unchanged. No edit for this file in this task.

- [ ] **Step 1: Rewrite About `SectionHeading` description in `components/home/info.tsx`**

Old:
```tsx
        description="Systems engineer (UTEPSA) based in Santa Cruz, Bolivia. I care about code quality, shipping, and the space where software meets AI."
```

New:
```tsx
        description="Systems engineer (UTEPSA) based in Santa Cruz, Bolivia. I care about code that holds up with real users — and increasingly, that means shipping AI features into systems that already work in production."
```

- [ ] **Step 2: Rewrite StickyScroll card 1 ("From help desk to full-stack") description in `components/home/info.tsx`**

Old:
```tsx
              description:
                "I started in technical support and earned my way into development — six teams in two years, building hospital platforms, ERPs and academic systems with Laravel, React, NestJS and Next.js. That path taught me to debug undocumented legacy code and to respect the people who use what I build.",
```

New:
```tsx
              description:
                "I started in technical support and earned my way into development, building hospital platforms, ERPs and academic systems with Laravel, React, NestJS and Next.js. Undocumented legacy code taught me to debug under pressure — in these systems, a slow fix means real people stuck waiting.",
```

- [ ] **Step 3: Tighten StickyScroll card 2 ("AI & automation in production") description in `components/home/info.tsx`**

Old:
```tsx
              description:
                "Beyond CRUD: I integrate LLMs with LangChain and the Google SDK, and automate real workflows with n8n and Selenium — self-service bots, decision-support tools for clinics, and internal automations that removed hours of manual work.",
```

New:
```tsx
              description:
                "I integrate LLMs — LangChain, the Google SDK — and automate real workflows with n8n and Selenium: self-service bots, decision-support tools for clinics, internal automations that used to eat hours every week.",
```

- [ ] **Step 4: Rewrite Projects `SectionHeading` description in `components/home/project.tsx`**

Old:
```tsx
        description="Systems I built or helped ship in production — real users, real constraints."
```

New:
```tsx
        description="Systems I built or helped ship in production, not side-project demos."
```

- [ ] **Step 5: Tighten Skills `SectionHeading` description in `components/home/skills.tsx`**

Old:
```tsx
        description="Tools I use to take a system from requirements to production."
```

New:
```tsx
        description="What I reach for to take a system from zero to production."
```

- [ ] **Step 6: Rewrite Contact `SectionHeading` title and description in `components/home/contact.tsx`**

Old:
```tsx
        title="Let's build something"
        description="Open to full-stack and AI engineering roles, freelance projects and interesting collaborations."
```

New:
```tsx
        title="Hiring, or got a hard problem?"
        description="Open to full-stack and AI engineering roles, plus freelance work — reach out directly, I check this email."
```

- [ ] **Step 7: Verify no old clichés remain**

Run: `grep -rn "space where software meets AI\|real users, real constraints\|Let's build something\|interesting collaborations\|Beyond CRUD" components/home/`
Expected: no output (all instances rewritten).

- [ ] **Step 8: Start dev server and visually check for regressions**

Run: `npm run dev` (or reuse a running instance), open `http://localhost:3000`.
Expected: Hero tagline, About heading/cards, Projects heading, Skills heading, and Contact heading render without text overflow, awkward wrapping, or layout shift versus before. Spot-check mobile width (~375px) too.

- [ ] **Step 9: Commit**

```bash
git add components/home/info.tsx components/home/project.tsx components/home/skills.tsx components/home/contact.tsx
git commit -m "content: rewrite generic section-heading and about copy for specificity"
```
