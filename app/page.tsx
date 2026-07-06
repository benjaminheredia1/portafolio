import { Barra } from "@/components/home/barra";
import { Hero } from "@/components/home/hero";
import { ExperienceSection } from "@/components/home/experience";
import { InfoGeneral } from "@/components/home/info";
import { Projects } from "@/components/home/project";
import { SkillsSection } from "@/components/home/skills";
import { ContactSection } from "@/components/home/contact";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      <Barra />
      <main>
        <Hero />
        <ExperienceSection />
        <InfoGeneral />
        <Projects />
        <SkillsSection />
        <ContactSection />
      </main>
    </div>
  );
}
