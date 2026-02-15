"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calendar, BookOpenText, ShoppingBag, BarChart3 } from "lucide-react";

const items = [
  { href: "/", label: "Inicio", Icon: Home },
  { href: "/agenda", label: "Agenda", Icon: Calendar },
  { href: "/bitacora", label: "Bitácora", Icon: BookOpenText },
  { href: "/tienda", label: "Tienda", Icon: ShoppingBag },
  { href: "/dashboard", label: "Dash", Icon: BarChart3 },
];

export function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="md:hidden sticky bottom-0 z-50 border-t border-border bg-bg/95 backdrop-blur">
      <div className="grid grid-cols-5">
        {items.map(({ href, label, Icon }) => {
          const active = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center justify-center py-2 text-xs transition-soft ${
                active ? "text-accent" : "text-muted hover:text-text"
              }`}
            >
              <Icon size={18} className="mb-0.5" />
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}