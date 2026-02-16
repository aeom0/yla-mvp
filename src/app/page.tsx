import { About } from "@/components/home/About";
import { Community } from "@/components/home/Community";
import { Hero } from "@/components/home/Hero";
import { Philosophy } from "@/components/home/Philosophy";
import { Programs } from "@/components/home/Programs";

export default function Home() {
  return (
    <>
      <Hero />
      <Philosophy />
      <Programs />
      <About />
      <Community />
    </>
  );
}
