import { Experiences } from "@/components/experiences";
import { Contacts } from "@/components/contacts";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Hero />
      <Skills />
      <Experiences />
      <Projects />
      <Features />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}
