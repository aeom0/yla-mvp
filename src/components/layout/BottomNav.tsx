"use client";

import { lucideBrand } from "@/lib/lucideBrand";
import { BookMarked, Heart, Home, ShoppingBag, Sparkles } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Inicio", Icon: Home, active: (p: string) => p === "/" },
  {
    href: "/#programas",
    label: "Programas",
    Icon: BookMarked,
    active: () => false,
  },
  {
    href: "/membresia",
    label: "Membresía",
    Icon: Sparkles,
    active: (p: string) => p === "/membresia",
  },
  { href: "/#tienda", label: "Tienda", Icon: ShoppingBag, active: () => false },
  { href: "/#comunidad", label: "Comunidad", Icon: Heart, active: () => false },
] as const;

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav
      className="md:hidden sticky bottom-0 z-50 border-t border-(--border) bg-(--bg)/95 backdrop-blur"
      style={{ paddingBottom: "env(safe-area-inset-bottom, 0px)" }}
    >
      <div className="grid grid-cols-5">
        {items.map(({ href, label, Icon, active }) => {
          const isActive = active(pathname);
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center gap-0.5 py-1.5 text-[10px] leading-tight sm:text-xs transition-soft min-h-13 px-0.5 ${
                isActive
                  ? "text-(--gold-deep)"
                  : "text-(--muted) hover:text-(--text)"
              }`}
            >
              <Icon
                {...lucideBrand}
                size={20}
                className="mb-0.5 shrink-0"
                aria-hidden
              />
              <span className="line-clamp-2 text-center max-w-17">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
