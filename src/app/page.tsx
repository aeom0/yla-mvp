import { About } from "@/components/home/About";
import { Community } from "@/components/home/Community";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { Philosophy } from "@/components/home/Philosophy";
import { Programs } from "@/components/home/Programs";
import { Shop } from "@/components/home/Shop";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Programs />
      <Testimonials />
      <About />
      <Community />
      <Shop />
      <LeadMagnet />
      <FAQ />
      <Footer />
    </>
  );
}
