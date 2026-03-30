import { siteContent } from "@/data/content";
import { Instagram, MessageCircle, Music2, Youtube } from "lucide-react";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer
      className="py-16 px-4"
      style={{ background: "#1a1525", color: "var(--beige)" }}
    >
      <div className="container-yla">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div className="space-y-4">
            <h3 className="title text-xl" style={{ color: "var(--purple-soft)" }}>
              Yoga con Lógica y Alma®
            </h3>
            <p className="text-sm leading-relaxed italic" style={{ color: "rgba(246,235,217,.6)" }}>
              &ldquo;{footer.tagline}&rdquo;
            </p>
            <div className="flex gap-3">
              <a href={footer.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                style={{ background: "rgba(198,183,226,.15)" }}>
                <Instagram size={17} style={{ color: "var(--purple-soft)" }} />
              </a>
              <a href={footer.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                style={{ background: "rgba(198,183,226,.15)" }}>
                <Music2 size={17} style={{ color: "var(--purple-soft)" }} />
              </a>
              <a href={footer.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                style={{ background: "rgba(198,183,226,.15)" }}>
                <Youtube size={17} style={{ color: "var(--purple-soft)" }} />
              </a>
              <a href={footer.social.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl flex items-center justify-center transition-soft hover:opacity-80"
                style={{ background: "rgba(212,175,55,.15)" }}>
                <MessageCircle size={17} style={{ color: "var(--gold)" }} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              Navegación
            </h4>
            <ul className="space-y-2">
              {footer.links.main.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-soft hover:opacity-80"
                    style={{ color: "rgba(246,235,217,.7)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>
              Legal
            </h4>
            <ul className="space-y-2">
              {footer.links.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm transition-soft hover:opacity-80"
                    style={{ color: "rgba(246,235,217,.7)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs"
          style={{ borderTop: "1px solid rgba(246,235,217,.1)", color: "rgba(246,235,217,.4)" }}
        >
          <span>© {new Date().getFullYear()} Yoga con Lógica y Alma®. Todos los derechos reservados.</span>
          <span>Hecho con intención y estructura.</span>
        </div>
      </div>
    </footer>
  );
}
