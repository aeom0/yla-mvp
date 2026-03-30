import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

export function Button({ variant = "primary", className = "", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 transition-soft font-medium";

  const styles =
    variant === "primary"
      ? "text-white hover:opacity-90"
      : "bg-card border border-[var(--border)] hover:border-[var(--purple)] hover:text-[var(--purple)] hover:shadow-soft";

  const primaryStyle =
    variant === "primary"
      ? { background: "var(--purple)", boxShadow: "var(--shadow-purple)" }
      : {};

  return (
    <button
      className={`${base} ${styles} ${className}`}
      style={primaryStyle}
      {...props}
    />
  );
}
