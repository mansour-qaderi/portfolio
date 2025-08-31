import { Experiences } from "@/components/experiences";
import { Contacts } from "@/components/contacts";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { Skills } from "@/components/skills";

export default function Home() {
  return (
    <div className="w-full flex flex-col lg:max-w-screen-xl mx-auto gap-20 md:gap-32 py-10 sm:py-20 md:py-32">
      <Hero />
      <Skills />
      <Experiences />
      <Features />
      <Services />
      <Contacts />
      <Footer />
    </div>
  );
}
