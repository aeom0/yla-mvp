import { CSSProperties, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

export function Section({ children, className = "", id, style }: SectionProps) {
  return (
    <section
      id={id}
      style={style}
      className={`py-12 sm:py-16 md:py-24 ${className}`}
    >
      <div className="container-yla">{children}</div>
    </section>
  );
}

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
};

export function SectionHeader({
  title,
  subtitle,
  centered = false,
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-10 sm:mb-12 ${centered ? "text-center max-w-3xl mx-auto px-1" : ""}`}
    >
      <h2 className="title text-2xl sm:text-3xl md:text-4xl mb-3 text-accent leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="text-base sm:text-lg text-muted leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
