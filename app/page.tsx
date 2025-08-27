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

export const metadata = {
  title: "Shadcn - Landing template",
  description: "Free Shadcn landing page for developers",
  openGraph: {
    type: "website",
    url: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      {
        url: "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
        width: 1200,
        height: 630,
        alt: "Shadcn - Landing template",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/nobruf/shadcn-landing-page.git",
    title: "Shadcn - Landing template",
    description: "Free Shadcn landing page for developers",
    images: [
      "https://res.cloudinary.com/dbzv9xfjp/image/upload/v1723499276/og-images/shadcn-vue.jpg",
    ],
  },
};

export default function Home() {
  return (
    <>
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
    </>
  );
}
