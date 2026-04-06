import { groq } from "next-sanity";

import { sanityClient } from "./client";

const next60 = (tags: string[]) =>
  ({ next: { revalidate: 60, tags } }) as const;

export async function getHero() {
  return sanityClient.fetch(
    groq`*[_type == "hero" && _id == "hero"][0]{
      _id, _type, title, headlineEmotional, headlineAction, microCta,
      ctaPrimary, ctaSecondary, youtubeVideoId,
      "bannerImage": bannerImage.asset->url
    }`,
    {},
    next60(["hero"]),
  );
}

export async function getAbout() {
  return sanityClient.fetch(
    groq`*[_type == "about" && _id == "about"][0]{
      _id, _type, title, credential, description, extended, highlights, quote,
      welcomeVideoYoutubeId,
      "yubeFoto": photo.asset->url
    }`,
    {},
    next60(["about"]),
  );
}

export async function getPhilosophy() {
  return sanityClient.fetch(
    groq`*[_type == "philosophy" && _id == "philosophy"][0]{
      _id, _type, title, description,
      pillars[]{ _key, title, description },
      youtubeChannelHref
    }`,
    {},
    next60(["philosophy"]),
  );
}

export async function getSiteConfig() {
  return sanityClient.fetch(
    groq`*[_type == "siteConfig" && _id == "siteConfig"][0]`,
    {},
    next60(["siteConfig"]),
  );
}

export async function getProducts() {
  return sanityClient.fetch(
    groq`*[_type == "product"] | order(order asc) {
      _id, title, slug, category, intention, description,
      isFree, price, badge, payhipProductUrl, includes, forWho,
      "image": image.asset->url
    }`,
    {},
    next60(["product"]),
  );
}

export async function getPrograms() {
  return sanityClient.fetch(
    groq`*[_type == "program"] | order(order asc) {
      _id, title, slug, duration, description, tagline,
      stages, accent, forWho, includes, price, ctaLabel, ctaLink
    }`,
    {},
    next60(["program"]),
  );
}

export async function getTestimonials() {
  return sanityClient.fetch(
    groq`*[_type == "testimonial"] | order(order asc) {
      _id, name, role, quote, featured,
      "photo": photo.asset->url
    }`,
    {},
    next60(["testimonial"]),
  );
}

export async function getFaqItems() {
  return sanityClient.fetch(
    groq`*[_type == "faqItem"] | order(order asc) { _id, question, answer }`,
    {},
    next60(["faqItem"]),
  );
}

export async function getClasses() {
  return sanityClient.fetch(
    groq`*[_type == "classItem"] | order(order asc) { _id, name, description, frequency }`,
    {},
    next60(["classItem"]),
  );
}
