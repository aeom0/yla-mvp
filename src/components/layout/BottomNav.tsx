"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, LayoutList, MessageCircle, ShoppingBag, Sparkles } from "lucide-react";

const items = [
  { href: "/", label: "Inicio", Icon: Home, active: (p: string) => p === "/" },
  { href: "/#programas", label: "Programas", Icon: LayoutList, active: () => false },
  { href: "/membresia", label: "Membresía", Icon: Sparkles, active: (p: string) => p === "/membresia" },
  { href: "/#tienda", label: "Tienda", Icon: ShoppingBag, active: () => false },
  { href: "/#comunidad", label: "Comunidad", Icon: MessageCircle, active: () => false },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden sticky bottom-0 z-50 border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur">
      <div className="grid grid-cols-5">
        {items.map(({ href, label, Icon, active }) => {
          const isActive = active(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center py-2 text-[10px] sm:text-xs transition-soft min-h-[52px] ${
                isActive ? "text-[var(--gold-deep)]" : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              <Icon size={18} className="mb-0.5" aria-hidden />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
