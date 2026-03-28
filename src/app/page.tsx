import { About } from "@/components/home/About";
import { Community } from "@/components/home/Community";
import { FAQ } from "@/components/home/FAQ";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Programs } from "@/components/home/Programs";
import { Shop } from "@/components/home/Shop";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Programs />
      <About />
      <Community />
      <Shop />
      <FAQ />
      <Footer />
    </>
  );
}
