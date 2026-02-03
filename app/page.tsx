import { Barra } from "@/components/home/barra";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BackgroundRippleEffect } from "@/components/ui/background-ripple-effect";
import { InfoGeneral } from "@/components/home/info";
import { Projects } from "@/components/home/project";

export default function HomePage() {
  return (
    <div className="body min-h-screen bg-black">
      <nav>
        <Barra />
      </nav>
      <main className="relative overflow-hidden flex flex-col items-center justify-center h-[35vh] px-4">
        <BackgroundRippleEffect />
        <div className="relative z-10">
          <TextGenerateEffect
            words="Welcome to My Portfolio, I'm Benjamin Heredia, a Developer Junior specializing in Full Stack Development. Explore my projects and skills as I embark on my journey in the tech world."
            className="text-center text-white"
            filter={true}
            duration={1.4}
          />
        </div>
      </main>
      {/* Info general*/}
      <section>
        <InfoGeneral />
      </section>
      {/* Proyectos */ }
      <section className="bg-black text-white w-full py-16">
        <Projects />
      </section>
    </div>
  );
}