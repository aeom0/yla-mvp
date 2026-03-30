"use client";

import { lucideBrand } from "@/lib/lucideBrand";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookMarked, Heart, Home, ShoppingBag, Sparkles } from "lucide-react";

const items = [
  { href: "/", label: "Inicio", Icon: Home, active: (p: string) => p === "/" },
  { href: "/#programas", label: "Programas", Icon: BookMarked, active: () => false },
  { href: "/membresia", label: "Membresía", Icon: Sparkles, active: (p: string) => p === "/membresia" },
  { href: "/#tienda", label: "Tienda", Icon: ShoppingBag, active: () => false },
  { href: "/#comunidad", label: "Comunidad", Icon: Heart, active: () => false },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="md:hidden sticky bottom-0 z-50 border-t border-[var(--border)] bg-[var(--bg)]/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-5">
        {items.map(({ href, label, Icon, active }) => {
          const isActive = active(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1.5 text-[10px] leading-tight sm:text-xs transition-soft min-h-[52px] px-0.5 ${
                isActive ? "text-[var(--gold-deep)]" : "text-[var(--muted)] hover:text-[var(--text)]"
              }`}
            >
              <Icon {...lucideBrand} size={20} className="mb-0.5 shrink-0" aria-hidden />
              <span className="line-clamp-2 text-center max-w-[4.25rem]">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
