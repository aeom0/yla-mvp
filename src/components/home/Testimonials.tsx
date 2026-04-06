import { Section, SectionHeader } from "@/components/ui/Section";
import type { SiteContent } from "@/data/content";
import { siteContent } from "@/data/content";
import Image from "next/image";

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

type TestimonialsProps = {
  testimonials?: SiteContent["testimonials"];
};

export function Testimonials({ testimonials: testimonialsProp }: TestimonialsProps) {
  const testimonials = testimonialsProp ?? siteContent.testimonials;

  return (
    <Section id="testimonios">
      <SectionHeader
        title={testimonials.title}
        subtitle={testimonials.subtitle}
        centered
      />
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
        {testimonials.items.map((item, i) => (
          <figure
            key={i}
            className="rounded-2xl p-5 sm:p-6 transition-soft hover:-translate-y-0.5"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,.05)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              {item.photo ? (
                <Image
                  src={item.photo}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover shrink-0"
                  style={{ border: "2px solid var(--sage)" }}
                />
              ) : (
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center title text-base shrink-0 font-semibold select-none"
                  style={{
                    background: "rgba(168,197,160,.18)",
                    color: "var(--sage-deep)",
                    border: "1.5px solid var(--sage)",
                  }}
                  aria-hidden
                >
                  {getInitials(item.name)}
                </div>
              )}
              <figcaption>
                <div
                  className="font-semibold text-sm"
                  style={{ color: "var(--text)" }}
                >
                  {item.name}
                </div>
                <div className="text-xs" style={{ color: "var(--sage-deep)" }}>
                  {item.role}
                </div>
              </figcaption>
            </div>
            <blockquote
              className="text-sm leading-relaxed italic"
              style={{ color: "var(--muted)" }}
            >
              &ldquo;{item.quote}&rdquo;
            </blockquote>
          </figure>
        ))}
      </div>
    </Section>
  );
}
