import { Benefits } from "@/components/benefits";
import { Community } from "@/components/community";
import { Contact } from "@/components/contact";
import { FAQ } from "@/components/faq";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Pricing } from "@/components/pricing";
import { Services } from "@/components/services";
import { Sponsors } from "@/components/sponsors";
import { Teams } from "@/components/team";
import { Testimonial } from "@/components/testimonial";

export default function Home() {
  return (
    <div className="w-full flex flex-col lg:max-w-screen-xl mx-auto gap-20 md:gap-32 py-10 sm:py-20 md:py-32">
      <Hero />
      <Sponsors />
      <Benefits />
      <Features />
      <Services />
      <Testimonial />
      <Teams />
      <Community />
      <Pricing />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}
