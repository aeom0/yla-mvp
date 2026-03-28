import { siteContent } from "@/data/content";
import { Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer
      className="py-16 px-4"
      style={{ background: "#1c1a22", color: "var(--beige)" }}
    >
      <div className="container-yla">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="title text-xl"
              style={{ color: "var(--lavender)" }}
            >
              Yoga con Lógica y Alma®
            </h3>
            <p
              className="text-sm leading-relaxed italic"
              style={{ color: "rgba(246,235,217,.6)" }}
            >
              &ldquo;{footer.tagline}&rdquo;
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a
                href={footer.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                style={{ background: "rgba(180,151,214,.2)" }}
              >
                <Instagram size={18} style={{ color: "var(--lavender)" }} />
              </a>
              <a
                href={footer.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                style={{ background: "rgba(201,169,110,.2)" }}
              >
                <MessageCircle size={18} style={{ color: "var(--gold-deep)" }} />
              </a>
            </div>
          </div>

          {/* Nav links */}
          <div>
            <h4
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "var(--gold-deep)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-2">
              {footer.links.main.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-soft hover:opacity-80"
                    style={{ color: "rgba(246,235,217,.7)" }}
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
              style={{ color: "var(--gold-deep)" }}
            >
              Legal
            </h4>
            <ul className="space-y-2">
              {footer.links.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-soft hover:opacity-80"
                    style={{ color: "rgba(246,235,217,.7)" }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{
            borderTop: "1px solid rgba(246,235,217,.1)",
            color: "rgba(246,235,217,.4)",
          }}
        >
          <span>© {new Date().getFullYear()} Yoga con Lógica y Alma®. Todos los derechos reservados.</span>
          <span>Hecho con 🤍 y mucha intención.</span>
        </div>
      </div>
    </footer>
  );
}
