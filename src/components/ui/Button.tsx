import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 transition-soft";
  /* Primario = dorado de marca (skill YLA); morado del doc se usa en layouts/acentos vía CSS vars */
  const styles =
    variant === "primary"
      ? "bg-gold text-ink border border-[color:var(--gold-deep)] hover:opacity-95 shadow-soft font-semibold"
      : "bg-card border border-border hover:shadow-soft";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
