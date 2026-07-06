import Image from "next/image";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { SectionHeading } from "./section-heading";

export function InfoGeneral() {
  return (
    <section id="about" className="scroll-mt-20 bg-black px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="$ cat about.md"
        title="About me"
        description="Systems engineer (UTEPSA) based in Santa Cruz, Bolivia. I care about code quality, shipping, and the space where software meets AI."
      />
      <div className="mx-auto mt-12 max-w-5xl">
        <StickyScroll
          contentClassName="overflow-hidden"
          content={[
            {
              title: "From help desk to full-stack",
              description:
                "I started in technical support and earned my way into development — six teams in two years, building hospital platforms, ERPs and academic systems with Laravel, React, NestJS and Next.js. That path taught me to debug undocumented legacy code and to respect the people who use what I build.",
              content: (
                <Image
                  fill
                  className="object-cover"
                  src="/benja.jpeg"
                  alt="Benjamin Heredia"
                />
              ),
            },
            {
              title: "AI & automation in production",
              description:
                "Beyond CRUD: I integrate LLMs with LangChain and the Google SDK, and automate real workflows with n8n and Selenium — self-service bots, decision-support tools for clinics, and internal automations that removed hours of manual work.",
              content: (
                <video
                  className="h-full w-full rounded-lg object-cover"
                  src="/exposicion.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              ),
            },
            {
              title: "Sharpening the craft",
              description:
                "ICPC participant, CTF player and chess enthusiast. I taught my university's introductory Python course and completed CCNA coursework — I learn in public and enjoy bringing others along.",
              content: (
                <Image
                  fill
                  className="object-cover"
                  src="/evento.jpeg"
                  alt="Benjamin speaking at a tech event"
                />
              ),
            },
          ]}
        />
      </div>
    </section>
  );
}
