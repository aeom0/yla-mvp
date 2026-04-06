import { About } from "@/components/home/About";
import { Community } from "@/components/home/Community";
import { Footer } from "@/components/home/Footer";
import { Hero } from "@/components/home/Hero";
import { LeadMagnet } from "@/components/home/LeadMagnet";
import { Philosophy } from "@/components/home/Philosophy";
import { Programs } from "@/components/home/Programs";
import { Shop } from "@/components/home/Shop";
import { SocialProofStrip } from "@/components/home/SocialProofStrip";
import { Testimonials } from "@/components/home/Testimonials";
import {
  mergeAboutData,
  mergeHeroData,
  mergePhilosophyData,
  mergeProgramsBlock,
  mergeShopProducts,
  mergeSiteConfigBundle,
  mergeTestimonialsBlock,
} from "@/lib/sanity/landingMerge";
import {
  getAbout,
  getHero,
  getPhilosophy,
  getProducts,
  getPrograms,
  getSiteConfig,
  getTestimonials,
} from "@/lib/sanity/queries";

/** Landing principal — datos desde Sanity con fallback a `content.ts`. */
export default async function Home() {
  const [
    heroRaw,
    aboutRaw,
    philosophyRaw,
    productsRaw,
    programsRaw,
    testimonialsRaw,
    siteConfigRaw,
  ] = await Promise.all([
    getHero(),
    getAbout(),
    getPhilosophy(),
    getProducts(),
    getPrograms(),
    getTestimonials(),
    getSiteConfig(),
  ]);

  const hero = mergeHeroData(heroRaw as Record<string, unknown> | null);
  const about = mergeAboutData(aboutRaw as Record<string, unknown> | null);
  const philosophy = mergePhilosophyData(
    philosophyRaw as Record<string, unknown> | null,
  );
  const shop = mergeShopProducts(productsRaw);
  const programs = mergeProgramsBlock(programsRaw);
  const testimonials = mergeTestimonialsBlock(testimonialsRaw);
  const { footer, community, newsletter, social } = mergeSiteConfigBundle(
    siteConfigRaw as Record<string, unknown> | null,
  );

  return (
    <>
      <Hero hero={hero} />
      <Philosophy philosophy={philosophy} />
      <Programs programs={programs} />
      <Testimonials testimonials={testimonials} />
      <About about={about} />
      <Community
        community={community}
        newsletter={newsletter}
        social={social}
      />
      <Shop shop={shop} />
      <LeadMagnet />
      <SocialProofStrip />
      <Footer footer={footer} />
    </>
  );
}
