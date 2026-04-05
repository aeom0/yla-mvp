import { siteContent } from "@/data/content";
import { lucideBrand } from "@/lib/lucideBrand";
import { CircleCheck, Mail } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Membresía | Yoga con Lógica y Alma",
  description:
    "No es solo una clase: es tu ritual mensual de orden y expansión. Cartas para habitarte y comunidad.",
};

export default function MembresiaPage() {
  const { membership } = siteContent;

  return (
    <div>
      <section
        className="py-16 md:py-20 text-center px-4"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in srgb, var(--violet-anchor) 12%, var(--beige)) 0%, var(--bg) 100%)",
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-widest mb-3"
          style={{ color: "var(--violet-anchor)" }}
        >
          Membresía
        </p>
        <h1
          className="title text-4xl md:text-5xl max-w-3xl mx-auto mb-4"
          style={{ color: "var(--text)" }}
        >
          {membership.title}
        </h1>
        <p
          className="text-lg md:text-xl max-w-2xl mx-auto mb-2 font-medium"
          style={{ color: "var(--rose-deep)" }}
        >
          {membership.tagline}
        </p>
        <p className="max-w-xl mx-auto" style={{ color: "var(--muted)" }}>
          {membership.intro}
        </p>
      </section>

      <div className="container-yla px-4 max-w-5xl mx-auto">
        <div
          className="rounded-2xl p-8 md:p-10 mb-12"
          style={{
            background: "var(--card)",
            border:
              "2px solid color-mix(in srgb, var(--rose-deep) 55%, var(--border))",
            boxShadow: "var(--shadow-soft)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0"
              style={{
                background:
                  "color-mix(in srgb, var(--lavender) 18%, transparent)",
              }}
            >
              <Mail
                {...lucideBrand}
                size={28}
                style={{ color: "var(--lavender-deep)" }}
                aria-hidden
              />
            </div>
            <div>
              <h2
                className="title text-2xl mb-2"
                style={{ color: "var(--accent)" }}
              >
                {membership.differentiatorTitle}
              </h2>
              <p className="leading-relaxed" style={{ color: "var(--muted)" }}>
                {membership.differentiatorBody}
              </p>
            </div>
          </div>
        </div>

        <h2
          className="title text-2xl text-center mb-8"
          style={{ color: "var(--text)" }}
        >
          Compará opciones
        </h2>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
          {membership.plans.map((plan) => (
            <div
              key={plan.id}
              className="rounded-2xl p-6 md:p-8 flex flex-col transition-soft hover:-translate-y-0.5"
              style={{
                background: plan.highlight
                  ? "var(--violet-anchor)"
                  : "var(--card)",
                color: plan.highlight ? "#fff" : "var(--text)",
                border: plan.highlight
                  ? "2px solid color-mix(in srgb, var(--rose-deep) 70%, transparent)"
                  : "1px solid var(--border)",
                boxShadow: plan.highlight
                  ? "0 12px 40px rgba(123,94,167,.28)"
                  : "0 4px 16px rgba(0,0,0,.05)",
              }}
            >
              {plan.highlight ? (
                <span
                  className="self-start text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full mb-4"
                  style={{
                    background:
                      "color-mix(in srgb, var(--rose-deep) 35%, transparent)",
                    color: "#1a1520",
                  }}
                >
                  Más conveniente
                </span>
              ) : null}
              <h3 className="title text-xl mb-1">{plan.name}</h3>
              <p
                className="text-sm mb-6 opacity-90"
                style={{
                  color: plan.highlight
                    ? "rgba(255,255,255,.9)"
                    : "var(--muted)",
                }}
              >
                {plan.price}
              </p>
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex gap-2 text-sm">
                    <CircleCheck
                      {...lucideBrand}
                      className="shrink-0 mt-0.5"
                      size={18}
                      style={{
                        color: "var(--rose-deep)",
                      }}
                      aria-hidden
                    />
                    <span
                      style={{
                        color: plan.highlight
                          ? "rgba(255,255,255,.95)"
                          : "var(--text)",
                      }}
                    >
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
              <a
                href={membership.payhipUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 transition-soft w-full font-semibold shadow-soft bg-rose text-ink border border-rose-deep hover:opacity-95"
              >
                {membership.cta}
              </a>
            </div>
          ))}
        </div>

        <p
          className="text-center text-sm mb-8"
          style={{ color: "var(--muted)" }}
        >
          {siteContent.trust.paymentLine}
        </p>

        <div className="text-center">
          <Link
            href="/"
            className="text-sm font-medium underline underline-offset-4 transition-soft hover:opacity-80"
            style={{ color: "var(--lavender-deep)" }}
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
