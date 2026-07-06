import type { Metadata } from "next";
import { Barra } from "@/components/home/barra";
import { ProjectsGrid } from "@/components/home/project";
import { ContactSection } from "@/components/home/contact";
import { SectionHeading } from "@/components/home/section-heading";

export const metadata: Metadata = {
  title: "Projects — Benjamin Heredia",
  description:
    "Systems Benjamin Heredia built or helped ship in production: AI bots, clinical platforms, academic systems and more.",
};

export default function PageProyectos() {
  return (
    <div className="min-h-screen bg-black">
      <Barra />
      <main className="px-4 py-24 sm:px-6">
        <SectionHeading
          eyebrow="$ ls ~/projects"
          title="Projects"
          description="Work from six teams in two years — real users, real constraints. Detailed case studies coming soon."
        />
        <div className="mx-auto mt-14 max-w-6xl">
          <ProjectsGrid />
        </div>
      </main>
      <ContactSection />
    </div>
  );
}
