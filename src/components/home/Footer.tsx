"use client";

import { TiktokGlyph } from "@/components/ui/icons/TiktokGlyph";
import { lucideBrand } from "@/lib/lucideBrand";
import type { SiteContent } from "@/data/content";
import { siteContent } from "@/data/content";
import { Instagram, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";

type FooterProps = {
  footer?: SiteContent["footer"];
};

export function Footer({ footer: footerProp }: FooterProps) {
  const footer = footerProp ?? siteContent.footer;

  return (
    <footer
      className="py-16 px-4"
      style={{ background: "var(--footer-bg)", color: "var(--footer-text)" }}
    >
      <div className="container-yla">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div className="space-y-4">
            {/* Logo versión blanca para fondo oscuro */}
            <div className="mb-2">
              <Image
                src="/logo-white.png"
                alt="Yoga con Lógica y Alma"
                width={500}
                height={500}
                className="h-28 w-auto object-contain"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
              {/* Fallback texto — siempre visible, oculto por JS si logo carga */}
              <h3
                className="title text-lg"
                style={{ color: "var(--footer-brand)" }}
              >
                Yoga con Lógica y Alma®
              </h3>
            </div>
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: "var(--footer-quote)" }}
            >
              &ldquo;{footer.tagline}&rdquo;
            </p>
            <div className="flex gap-3">
              {[
                {
                  href: footer.social.instagram,
                  icon: <Instagram {...lucideBrand} size={17} />,
                  label: "Instagram",
                },
                {
                  href: footer.social.tiktok,
                  icon: <TiktokGlyph size={17} />,
                  label: "TikTok",
                },
                {
                  href: footer.social.youtube,
                  icon: <Youtube {...lucideBrand} size={17} />,
                  label: "YouTube",
                },
                {
                  href: footer.social.whatsapp,
                  icon: <MessageCircle {...lucideBrand} size={17} />,
                  label: "WhatsApp",
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                  style={{
                    background: "var(--footer-icon-bg)",
                    color: "var(--footer-brand)",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--footer-section-title)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-2">
              {footer.links.main.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-soft hover:opacity-80"
                    style={{ color: "var(--footer-link)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--footer-section-title)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {footer.links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-soft hover:opacity-80"
                    style={{ color: "var(--footer-link)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid var(--footer-border-top)",
            color: "var(--footer-meta)",
          }}
        >
          <span>
            © {new Date().getFullYear()} Yoga con Lógica y Alma®. Todos los
            derechos reservados.
          </span>
          <span>Hecho con intención y estructura.</span>
        </div>
      </div>
    </footer>
  );
}
