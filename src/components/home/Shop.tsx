"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { BookOpen, ExternalLink, Headphones, Star, Video } from "lucide-react";

type ProductCategory = "guia" | "cuaderno" | "audio" | "video";

const categoryMeta: Record<
  ProductCategory,
  { label: string; icon: React.ReactNode }
> = {
  guia: { label: "Guías", icon: <Star size={16} /> },
  cuaderno: { label: "Cuadernos digitales", icon: <BookOpen size={16} /> },
  audio: { label: "Meditaciones", icon: <Headphones size={16} /> },
  video: { label: "Clases en video", icon: <Video size={16} /> },
};

const categoryIconLarge: Record<ProductCategory, React.ReactNode> = {
  guia: <Star size={28} />,
  cuaderno: <BookOpen size={28} />,
  audio: <Headphones size={28} />,
  video: <Video size={28} />,
};

export function Shop() {
  const { shop } = siteContent;
  const categories: ProductCategory[] = ["guia", "cuaderno", "audio", "video"];

  return (
    // Fondo lila suave — alterna con el beige de Community
    <Section id="tienda" style={{ background: "var(--section-alt)" }}>
      <SectionHeader title={shop.title} subtitle={shop.subtitle} centered />

      {categories.map((cat) => {
        const products = shop.products.filter((p) => p.category === cat);
        if (products.length === 0) return null;
        const meta = categoryMeta[cat];

        return (
          <div key={cat} className="mb-12">
            {/* Category label */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "var(--lavender)", color: "#fff" }}
              >
                {meta.icon}
              </span>
              <h3 className="title text-xl">{meta.label}</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {products.map((product) => (
                <article
                  key={product.id}
                  className="relative flex flex-col rounded-2xl overflow-hidden transition-soft hover:-translate-y-1"
                  style={{
                    background: "var(--card)",
                    border: "1px solid var(--border)",
                    boxShadow: "0 4px 16px rgba(0,0,0,.05)",
                  }}
                >
                  {/* Badge */}
                  {product.badge && (
                    <span
                      className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10"
                      style={{
                        background: product.isFree
                          ? "var(--gold-deep)"
                          : "var(--lavender)",
                        color: "#fff",
                      }}
                    >
                      {product.badge}
                    </span>
                  )}

                  {/* Icon area */}
                  <div
                    className="flex items-center justify-center h-28"
                    style={{ background: "var(--beige)" }}
                  >
                    <span
                      className="w-14 h-14 rounded-2xl flex items-center justify-center"
                      style={{
                        background: product.isFree
                          ? "var(--gold-deep)"
                          : "var(--lavender)",
                        color: "#fff",
                      }}
                    >
                      {categoryIconLarge[product.category]}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-1 gap-3 p-5">
                    <h4
                      className="title text-base font-bold leading-snug"
                      style={{ color: "var(--text)" }}
                    >
                      {product.title}
                    </h4>
                    <p
                      className="text-sm leading-relaxed flex-1 italic"
                      style={{ color: "var(--muted)" }}
                    >
                      &ldquo;{product.intention}&rdquo;
                    </p>
                    <a
                      href={shop.payhipUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-soft hover:opacity-90"
                      style={{
                        background: product.isFree
                          ? "var(--gold-deep)"
                          : "var(--lavender)",
                        color: "#fff",
                      }}
                    >
                      {product.isFree ? "Descargar gratis" : "Obtener"}
                      <ExternalLink size={13} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}

      {/* Ver toda la tienda */}
      <div className="text-center mt-4">
        <a
          href={shop.payhipUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-semibold transition-soft hover:opacity-90"
          style={{
            border: "1.5px solid var(--gold-deep)",
            color: "var(--gold-deep)",
            background: "transparent",
          }}
        >
          Ver toda la tienda en Payhip
          <ExternalLink size={15} aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
