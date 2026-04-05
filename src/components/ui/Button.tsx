import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "ghost";
};

/*
  Botones YLA:
  primary → var(--accent), texto blanco
  ghost   → contorno var(--accent), fondo transparente
*/
export function Button({
  variant = "primary",
  className = "",
  ...props
}: Props) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-5 py-3 font-medium transition-soft";

  if (variant === "primary") {
    return (
      <button
        className={`${base} text-white hover:opacity-90 active:scale-[.98] ${className}`}
        style={{
          background: "var(--accent)",
          boxShadow: "var(--shadow-accent)",
        }}
        {...props}
      />
    );
  }

  return (
    <button
      className={`${base} hover:bg-(--lavender-mist) active:scale-[.98] ${className}`}
      style={{
        background: "transparent",
        border: "1.5px solid var(--accent)",
        color: "var(--accent)",
      }}
      {...props}
    />
  );
}
