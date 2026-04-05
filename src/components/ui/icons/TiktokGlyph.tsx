import type { SVGAttributes } from "react";

type TiktokGlyphProps = Omit<
  SVGAttributes<SVGSVGElement>,
  "width" | "height"
> & {
  size?: number;
  /** Incluido por compatibilidad con props de Lucide al hacer spread; se ignora. */
  strokeWidth?: number;
};

/** Glifo TikTok (fill); Lucide no expone ícono oficial en la versión fijada del proyecto. */
export function TiktokGlyph(props: TiktokGlyphProps) {
  const { size = 24, className, strokeWidth, ...svgProps } = props;
  void strokeWidth;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      aria-hidden
      {...svgProps}
    >
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.14-1.25.61-2.46 1.38-3.45 1.16-1.57 2.9-2.65 4.78-3.01.59-.11 1.18-.15 1.78-.14.43.01.85.05 1.28.12v4.07c-.19-.01-.39-.02-.58-.02-1.55-.08-3.09.38-4.31 1.32-.55.44-1.02.98-1.37 1.58-.41.69-.65 1.48-.69 2.28-.05.93.18 1.87.66 2.65.73 1.18 1.98 2.01 3.34 2.27 1.17.22 2.43.12 3.49-.35 1.02-.45 1.88-1.27 2.41-2.22.31-.55.5-1.16.57-1.79.09-.93.08-1.86.08-2.79V.02h-.04z" />
    </svg>
  );
}
