import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { ArrowLeft, Check, ExternalLink, Headphones, NotebookPen, ScrollText, ShoppingBag } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

const categoryIcon: Record<string, React.ReactNode> = {
  guia:     <ScrollText {...lucideBrand} size={32} />,
  cuaderno: <NotebookPen {...lucideBrand} size={32} />,
  audio:    <Headphones {...lucideBrand} size={32} />,
};

export async function generateStaticParams() {
  return siteContent.shop.products
    .filter((p) => !p.isFree)
    .map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = siteContent.shop.products.find((p) => p.slug === slug);
  if (!product) return { title: "Producto no encontrado" };
  return {
    title: `${product.title} — Yoga con Lógica y Alma`,
    description: product.intention,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = siteContent.shop.products.find((p) => p.slug === slug);

  if (!product || product.isFree) notFound();

  return (
    <main className="min-h-screen py-16 md:py-24" style={{ background: "var(--bg)" }}>
      <div className="container-yla max-w-4xl">

        {/* Breadcrumb */}
        <Link
          href="/#tienda"
          className="inline-flex items-center gap-2 text-sm mb-10 transition-soft hover:opacity-70"
          style={{ color: "var(--muted)" }}
        >
          <ArrowLeft {...lucideBrand} size={16} />
          Volver a la tienda
        </Link>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">

          {/* Columna izquierda — visual */}
          <div className="space-y-6">
            {/* Hero visual del producto */}
            <div
              className="aspect-square rounded-3xl flex items-center justify-center"
              style={{
                background: "linear-gradient(135deg, var(--purple-mist) 0%, var(--section-alt) 100%)",
                border: "1px solid var(--border)",
              }}
            >
              <div
                className="w-24 h-24 rounded-2xl flex items-center justify-center text-white"
                style={{ background: "var(--purple)", boxShadow: "var(--shadow-purple)" }}
              >
                {categoryIcon[product.category] ?? <ShoppingBag {...lucideBrand} size={32} />}
              </div>
            </div>

            {/* Qué incluye */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{ background: "var(--card)", border: "1px solid var(--border)" }}
            >
              <h3 className="title text-lg" style={{ color: "var(--accent)" }}>
                ¿Qué incluye?
              </h3>
              <ul className="space-y-3">
                {product.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0"
                      style={{ background: "var(--purple-mist)" }}
                    >
                      <Check {...lucideBrand} size={12} style={{ color: "var(--purple)" }} />
                    </span>
                    <span className="text-sm" style={{ color: "var(--text)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna derecha — copy + CTA */}
          <div className="space-y-6">
            {/* Badge categoría */}
            <span
              className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "var(--purple-mist)", color: "var(--purple)", border: "1px solid var(--border)" }}
            >
              {product.category === "guia" ? "Guía" : product.category === "cuaderno" ? "Cuaderno digital" : "Audio"}
            </span>

            <h1 className="title text-3xl md:text-4xl leading-tight" style={{ color: "var(--accent)" }}>
              {product.title}
            </h1>

            <p className="text-base leading-relaxed italic" style={{ color: "var(--muted)" }}>
              &ldquo;{product.intention}&rdquo;
            </p>

            <p className="text-sm leading-relaxed" style={{ color: "var(--text)", opacity: 0.9 }}>
              {product.description}
            </p>

            {/* Para quién es */}
            <div
              className="rounded-2xl p-5"
              style={{ background: "var(--section-alt)", border: "1px solid var(--border)" }}
            >
              <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "var(--purple)" }}>
                ¿Para quién es?
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text)" }}>
                {product.forWho}
              </p>
            </div>

            {/* Precio + CTA */}
            <div
              className="rounded-2xl p-6 space-y-4"
              style={{ background: "var(--card)", border: "1px solid var(--border)", boxShadow: "var(--shadow-soft)" }}
            >
              <div className="flex items-baseline gap-2">
                <span className="title text-4xl font-bold" style={{ color: "var(--purple)" }}>
                  {product.price}
                </span>
                <span className="text-sm" style={{ color: "var(--muted)" }}>USD · acceso inmediato</span>
              </div>

              <a
                href={product.payhipProductUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl text-base font-bold text-white transition-soft hover:opacity-90 min-h-[56px]"
                style={{ background: "var(--purple)", boxShadow: "var(--shadow-purple)" }}
              >
                Obtener ahora
                <ExternalLink {...lucideBrand} size={16} />
              </a>

              <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
                Pago seguro vía Payhip · PayPal y tarjeta · Descarga inmediata
              </p>
            </div>

            {/* Trust */}
            <p className="text-xs text-center" style={{ color: "var(--muted)" }}>
              ¿Tienes dudas?{" "}
              <a
                href="https://wa.me/584243547179"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 transition-soft hover:opacity-70"
                style={{ color: "var(--purple)" }}
              >
                Escríbenos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
