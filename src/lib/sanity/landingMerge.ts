import type { ShopProduct, SiteContent } from "@/data/content";
import { siteContent } from "@/data/content";

/** URLs de redes para Community / Footer (mismo origen que `footer.social`). */
export type SocialUrls = {
  instagram: string;
  tiktok: string;
  youtube: string;
  whatsapp: string;
};

type SanitySlug = { current?: string } | null | undefined;

function slugId(slug: SanitySlug, fallback: string): string {
  const c = slug && typeof slug === "object" ? slug.current : undefined;
  return typeof c === "string" && c.length > 0 ? c : fallback;
}

function asShopCategory(raw: string | undefined): ShopProduct["category"] {
  if (raw === "guia" || raw === "cuaderno") return raw;
  /* Sanity: audio/video → cuaderno para la grilla actual */
  return "cuaderno";
}

/** Hero: textos desde Sanity; banner local hasta que suban imagen en Studio. */
export function mergeHeroData(
  raw: Record<string, unknown> | null | undefined,
): SiteContent["hero"] {
  const base = siteContent.hero;
  if (!raw) return base;
  const banner =
    typeof raw.bannerImage === "string" && raw.bannerImage.length > 0
      ? raw.bannerImage
      : base.bannerImage;
  return {
    ...base,
    title: String(raw.title ?? base.title),
    headlineEmotional: String(raw.headlineEmotional ?? base.headlineEmotional),
    headlineAction: String(raw.headlineAction ?? base.headlineAction ?? ""),
    microCta: String(raw.microCta ?? base.microCta ?? ""),
    cta: {
      primary: String(raw.ctaPrimary ?? base.cta.primary),
      secondary: String(raw.ctaSecondary ?? base.cta.secondary),
    },
    bannerImage: banner,
  };
}

export function mergePhilosophyData(
  raw: Record<string, unknown> | null | undefined,
): SiteContent["philosophy"] {
  const base = siteContent.philosophy;
  if (!raw) return base;
  const pillarsRaw = raw.pillars as
    | Array<{ title?: string; description?: string }>
    | undefined;
  const pillars =
    pillarsRaw && pillarsRaw.length > 0
      ? pillarsRaw.map((p, i) => ({
          icon: base.pillars[i]?.icon ?? "Flower2",
          title: String(p.title ?? base.pillars[i]?.title ?? ""),
          description: String(
            p.description ?? base.pillars[i]?.description ?? "",
          ),
        }))
      : base.pillars;
  return {
    ...base,
    title: String(raw.title ?? base.title),
    description: String(raw.description ?? base.description),
    pillars,
    links: {
      ...base.links,
      youtubeChannelHref: String(
        raw.youtubeChannelHref ?? base.links.youtubeChannelHref,
      ),
    },
  };
}

export function mergeAboutData(
  raw: Record<string, unknown> | null | undefined,
): SiteContent["about"] {
  const base = siteContent.about;
  if (!raw) return base;
  const foto =
    typeof raw.yubeFoto === "string" && raw.yubeFoto.length > 0
      ? raw.yubeFoto
      : base.yubeFoto;
  const highlights = Array.isArray(raw.highlights)
    ? (raw.highlights as unknown[]).map((h) => String(h))
    : base.highlights;
  return {
    ...base,
    title: String(raw.title ?? base.title),
    credential: String(raw.credential ?? base.credential),
    description: String(raw.description ?? base.description),
    extended: String(raw.extended ?? base.extended ?? ""),
    highlights,
    quote: String(raw.quote ?? base.quote),
    yubeFoto: foto,
    welcomeVideoYoutubeId: String(
      raw.welcomeVideoYoutubeId ?? base.welcomeVideoYoutubeId ?? "",
    ) as (typeof siteContent.about)["welcomeVideoYoutubeId"],
  };
}

export function mergeProgramsBlock(
  rawList: unknown,
): SiteContent["programs"] {
  const base = siteContent.programs;
  if (!Array.isArray(rawList) || rawList.length === 0) return base;

  const items = rawList.map((row) => {
    const r = row as Record<string, unknown>;
    const slug = r.slug as SanitySlug;
    const id = slugId(slug, String(r._id ?? "program"));
    const stages = Array.isArray(r.stages)
      ? (r.stages as unknown[]).map((s) => String(s))
      : [];
    const includes = Array.isArray(r.includes)
      ? (r.includes as unknown[]).map((s) => String(s))
      : [];
    const accent =
      r.accent === "rose" || r.accent === "lavender"
        ? r.accent
        : ("lavender" as const);
    return {
      id,
      title: String(r.title ?? ""),
      duration: String(r.duration ?? ""),
      description: String(r.description ?? ""),
      stages,
      accent,
      detail: {
        tagline: String(r.tagline ?? ""),
        includes,
        forWho: String(r.forWho ?? ""),
        price: String(r.price ?? ""),
        ctaLabel: String(r.ctaLabel ?? ""),
        ctaLink: String(r.ctaLink ?? ""),
      },
    };
  });

  return { ...base, items };
}

export function mergeShopProducts(rawList: unknown): SiteContent["shop"] {
  const base = siteContent.shop;
  if (!Array.isArray(rawList) || rawList.length === 0) return base;

  const products = rawList.map((row, i) => {
    const r = row as Record<string, unknown>;
    const slug = r.slug as SanitySlug;
    const id = slugId(slug, `product-${i}`);
    const isFree = Boolean(r.isFree);
    const priceVal = r.price;
    const imageStr =
      typeof r.image === "string" && r.image.length > 0 ? r.image : "";
    const includes = Array.isArray(r.includes)
      ? (r.includes as unknown[]).map((x) => String(x))
      : [];
    return {
      id,
      slug: id,
      category: asShopCategory(String(r.category ?? "cuaderno")),
      title: String(r.title ?? ""),
      intention: String(r.intention ?? ""),
      badge:
        typeof r.badge === "string" && r.badge.length > 0
          ? r.badge
          : (null as ShopProduct["badge"]),
      isFree,
      price: isFree
        ? (null as ShopProduct["price"])
        : typeof priceVal === "string" && priceVal.length > 0
          ? priceVal
          : (null as ShopProduct["price"]),
      image: imageStr as ShopProduct["image"],
      payhipProductUrl: String(
        r.payhipProductUrl ?? base.payhipUrl,
      ),
      description: String(r.description ?? ""),
      includes,
      forWho: String(r.forWho ?? ""),
    };
  }) as SiteContent["shop"]["products"];

  return { ...base, products };
}

export function mergeTestimonialsBlock(
  rawList: unknown,
): SiteContent["testimonials"] {
  const base = siteContent.testimonials;
  if (!Array.isArray(rawList) || rawList.length === 0) return base;
  const items = rawList.map((row) => {
    const r = row as Record<string, unknown>;
    const photo =
      typeof r.photo === "string" && r.photo.length > 0 ? r.photo : "";
    return {
      quote: String(r.quote ?? ""),
      name: String(r.name ?? ""),
      role: String(r.role ?? ""),
      photo: photo as SiteContent["testimonials"]["items"][number]["photo"],
    };
  });
  return { ...base, items };
}

export function mergeSiteConfigBundle(
  raw: Record<string, unknown> | null | undefined,
): {
  footer: SiteContent["footer"];
  community: SiteContent["community"];
  newsletter: SiteContent["newsletter"];
  social: SocialUrls;
} {
  const baseF = siteContent.footer;
  const baseC = siteContent.community;
  const baseN = siteContent.newsletter;
  const defaultSocial: SocialUrls = {
    instagram: baseF.social.instagram,
    tiktok: baseF.social.tiktok,
    youtube: baseF.social.youtube,
    whatsapp: baseF.social.whatsapp,
  };
  if (!raw) {
    return {
      footer: baseF,
      community: baseC,
      newsletter: baseN,
      social: defaultSocial,
    };
  }
  const social: SocialUrls = {
    instagram: String(raw.instagram ?? defaultSocial.instagram),
    tiktok: String(raw.tiktok ?? defaultSocial.tiktok),
    youtube: String(raw.youtube ?? defaultSocial.youtube),
    whatsapp: String(raw.whatsappDirect ?? defaultSocial.whatsapp),
  };
  const footer: SiteContent["footer"] = {
    ...baseF,
    tagline: String(raw.footerTagline ?? baseF.tagline),
    social: {
      instagram: social.instagram,
      tiktok: social.tiktok,
      youtube: social.youtube,
      whatsapp: social.whatsapp,
    },
  };
  const community: SiteContent["community"] = {
    ...baseC,
    sectionTitle: String(raw.communityTitle ?? baseC.sectionTitle),
    sectionSubtitle: String(raw.communityDescription ?? baseC.sectionSubtitle),
    whatsappLink: String(raw.whatsappGroup ?? baseC.whatsappLink),
    whatsappDirect: String(raw.whatsappDirect ?? baseC.whatsappDirect),
    title: String(raw.communityTitle ?? baseC.title),
    description: String(raw.communityDescription ?? baseC.description),
    whatsappCta: String(raw.communityCtaLabel ?? baseC.whatsappCta),
  };
  const newsletter: SiteContent["newsletter"] = {
    ...baseN,
    title: String(raw.newsletterTitle ?? baseN.title),
    description: String(raw.newsletterDescription ?? baseN.description),
    cta: String(raw.newsletterCta ?? baseN.cta),
  };
  return { footer, community, newsletter, social };
}
