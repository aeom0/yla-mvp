"use client";

import { Section, SectionHeader } from "@/components/ui/Section";
import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import {
  ExternalLink,
  Headphones,
  NotebookPen,
  ScrollText,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ProductCategory = "guia" | "cuaderno" | "audio";

// Aurora Consciente: categorías con acentos distintos
const categoryMeta: Record<
  ProductCategory,
  { label: string; icon: React.ReactNode; color: string; bg: string }
> = {
  guia: {
    label: "Guías",
    icon: <ScrollText {...lucideBrand} size={16} />,
    color: "var(--sage-deep)",
    bg: "rgba(107,158,138,.12)",
  },
  cuaderno: {
    label: "Cuadernos digitales",
    icon: <NotebookPen {...lucideBrand} size={16} />,
    color: "var(--accent)",
    bg: "var(--lavender-mist)",
  },
  audio: {
    label: "Meditaciones",
    icon: <Headphones {...lucideBrand} size={16} />,
    color: "var(--rose-deep)",
    bg: "rgba(200,146,143,.10)",
  },
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
            {/* Label de categoría con su acento */}
            <div className="flex items-center gap-2 mb-5">
              <span
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ background: meta.bg, color: meta.color }}
              >
                {meta.icon}
              </span>
              <h3 className="title text-xl" style={{ color: meta.color }}>{meta.label}</h3>
            </div>

            <div className="grid grid-cols-1 min-[420px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
              {products.map((product) => {
                // Free products usan sage, paid usan el color de su categoría
                const cardColor = product.isFree ? "var(--sage-deep)" : meta.color;
                const cardBg   = product.isFree ? "rgba(107,158,138,.12)" : meta.bg;

                return (
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
                        className="absolute top-3 right-3 text-xs font-semibold px-2.5 py-0.5 rounded-full z-10 text-white"
                        style={{ background: cardColor }}
                      >
                        {product.badge}
                      </span>
                    )}

                    {/* Imagen del producto */}
                    <div
                      className="relative h-44 w-full overflow-hidden"
                      style={{ background: "var(--beige)" }}
                    >
                      {product.image ? (
                        <Image
                          src={product.image}
                          alt={product.title}
                          fill
                          className="object-cover transition-soft group-hover:scale-105"
                          sizes="(max-width: 420px) 100vw, (max-width: 1024px) 50vw, 25vw"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span
                            className="w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                            style={{ background: cardColor }}
                          >
                            {categoryMeta[product.category as ProductCategory]?.icon}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col flex-1 gap-2 p-5">
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

                      {/* Precio */}
                      <span
                        className="text-lg font-bold mt-1"
                        style={{ color: cardColor }}
                      >
                        {product.isFree ? "Gratis" : product.price}
                      </span>

                      {/* CTA */}
                      {product.isFree ? (
                        <a
                          href={product.payhipProductUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-soft hover:opacity-90 min-h-[44px] text-white mt-1"
                          style={{ background: "var(--sage-deep)" }}
                        >
                          {shop.ctaFree}
                          <ExternalLink {...lucideBrand} size={14} aria-hidden="true" />
                        </a>
                      ) : (
                        <Link
                          href={`/tienda/${product.slug}`}
                          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-semibold transition-soft hover:opacity-90 min-h-[44px] text-white mt-1"
                          style={{ background: cardColor }}
                        >
                          Ver detalles
                        </Link>
                      )}
                    </div>
                  </article>
                );
              })}
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
          style={{
            background: "var(--accent)",
            boxShadow: "var(--shadow-accent)",
          }}
        >
          Ver toda la tienda
          <ExternalLink {...lucideBrand} size={16} aria-hidden="true" />
        </a>
      </div>
    </Section>
  );
}
