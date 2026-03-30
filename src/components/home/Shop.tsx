"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { ExternalLink, Headphones, NotebookPen, ScrollText } from "lucide-react";

type ProductCategory = "guia" | "cuaderno" | "audio";

const categoryMeta: Record<ProductCategory, { label: string; icon: React.ReactNode }> = {
  guia:     { label: "Guías",               icon: <ScrollText {...lucideBrand} size={16} /> },
  cuaderno: { label: "Cuadernos digitales", icon: <NotebookPen {...lucideBrand} size={16} /> },
  audio:    { label: "Meditaciones",        icon: <Headphones {...lucideBrand} size={16} /> },
};

const categoryIconLarge: Record<ProductCategory, React.ReactNode> = {
  guia:     <ScrollText {...lucideBrand} size={28} />,
  cuaderno: <NotebookPen {...lucideBrand} size={28} />,
  audio:    <Headphones {...lucideBrand} size={28} />,
};

export function Shop() {
  const { shop } = siteContent;
  const categories: ProductCategory[] = ["guia", "cuaderno", "audio"];

  return (
    <Section id="tienda" style={{ background: "var(--section-alt)" }}>
      <SectionHeader title={shop.title} subtitle={shop.subtitle} centered />

      {categories.map((cat) => {
        const products = shop.products.filter((p) => p.category === cat);
        if (products.length === 0) return null;
        const meta = categoryMeta[cat];

        return (
          <div key={cat} className="mb-12">
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: "var(--purple-mist)", color: "var(--purple)" }}
              >
                {meta.icon}
              </span>
              <h3 className="title text-xl">{meta.label}</h3>
            </div>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
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
                  {product.badge && (
                    <span
                      className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10 text-white"
                      style={{ background: product.isFree ? "var(--gold)" : "var(--purple)" }}
                    >
                      {product.badge}
                    </span>
                  )}

                  <div
                    className="flex items-center justify-center h-28"
                    style={{ background: "var(--beige)" }}
                  >
                    <span
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                      style={{ background: product.isFree ? "var(--gold)" : "var(--purple)" }}
                    >
                      {categoryIconLarge[product.category as ProductCategory]}
                    </span>
                  </div>

                  <div className="flex flex-col flex-1 gap-3 p-5">
                    <h4 className="title text-base font-bold leading-snug" style={{ color: "var(--text)" }}>
                      {product.title}
                    </h4>
                    <p className="text-sm leading-relaxed flex-1 italic" style={{ color: "var(--muted)" }}>
                      &ldquo;{product.intention}&rdquo;
                    </p>
                    <a
                      href={shop.payhipUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-soft hover:opacity-90 min-h-[44px] text-white"
                      style={{ background: "var(--purple)" }}
                    >
                      {product.isFree ? shop.ctaFree : shop.ctaPaid}
                      <ExternalLink {...lucideBrand} size={14} aria-hidden="true" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        );
      })}

      <div className="text-center mt-4">
        <a
          href={shop.payhipUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-2xl font-semibold transition-soft hover:opacity-90 min-h-[48px] text-white"
          style={{ background: "var(--purple)", boxShadow: "var(--shadow-purple)" }}
        >
          Ver toda la tienda
          <ExternalLink {...lucideBrand} size={16} aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
