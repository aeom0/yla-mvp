import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";

export function Testimonials() {
  const { testimonials } = siteContent;

  return (
    <Section id="testimonios">
      <SectionHeader title={testimonials.title} subtitle={testimonials.subtitle} centered />
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.items.map((item, i) => (
          <figure
            key={i}
            className="rounded-2xl p-6 transition-soft hover:-translate-y-0.5"
            style={{
              background: "var(--card)",
              border: "1px solid var(--border)",
              boxShadow: "0 4px 16px rgba(0,0,0,.05)",
            }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center title text-lg shrink-0"
                style={{
                  background: "color-mix(in srgb, var(--lavender) 20%, transparent)",
                  color: "var(--lavender-deep)",
                }}
                aria-hidden
              >
                {item.name
                  .split(/\s+/)
                  .map((w) => w[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()}
              </div>
              <figcaption>
                <div className="font-semibold text-sm" style={{ color: "var(--text)" }}>
                  {item.name}
                </div>
                <div className="text-xs" style={{ color: "var(--muted)" }}>
                  {item.role}
                </div>
              </figcaption>
            </div>
            <blockquote className="text-sm leading-relaxed italic" style={{ color: "var(--muted)" }}>
              &ldquo;{item.quote}&rdquo;
            </blockquote>
          </figure>
        ))}
      </div>
    </Section>
  );
}
