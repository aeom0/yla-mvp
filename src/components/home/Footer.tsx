"use client";

import { TiktokGlyph } from "@/components/ui/icons/TiktokGlyph";
import { lucideBrand } from "@/lib/lucideBrand";
import { siteContent } from "@/data/content";
import { Instagram, MessageCircle, Youtube } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer
      className="py-16 px-4"
      style={{ background: "#16121f", color: "#EDE8F5" }}
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
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
                onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
              />
              {/* Fallback texto — siempre visible, oculto por JS si logo carga */}
              <h3 className="title text-lg" style={{ color: "#C6B7E2" }}>
                Yoga con Lógica y Alma®
              </h3>
            </div>
            <p className="text-sm leading-relaxed italic" style={{ color: "rgba(237,232,245,.55)" }}>
              &ldquo;{footer.tagline}&rdquo;
            </p>
            <div className="flex gap-3">
              {[
                { href: footer.social.instagram, icon: <Instagram {...lucideBrand} size={17} />, label: "Instagram" },
                { href: footer.social.tiktok,    icon: <TiktokGlyph size={17} />,               label: "TikTok" },
                { href: footer.social.youtube,   icon: <Youtube {...lucideBrand} size={17} />,   label: "YouTube" },
                { href: footer.social.whatsapp,  icon: <MessageCircle {...lucideBrand} size={17} />, label: "WhatsApp" },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                  style={{ background: "rgba(198,183,226,.14)", color: "#C6B7E2" }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C8A84B" }}>
              Navegación
            </h4>
            <ul className="space-y-2">
              {footer.links.main.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-soft hover:opacity-80" style={{ color: "rgba(237,232,245,.65)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C8A84B" }}>
              Legal
            </h4>
            <ul className="space-y-2">
              {footer.links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-soft hover:opacity-80" style={{ color: "rgba(237,232,245,.65)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid rgba(237,232,245,.08)", color: "rgba(237,232,245,.35)" }}
        >
          <span>© {new Date().getFullYear()} Yoga con Lógica y Alma®. Todos los derechos reservados.</span>
          <span>Hecho con intención y estructura.</span>
        </div>
      </div>
    </footer>
  );
}
