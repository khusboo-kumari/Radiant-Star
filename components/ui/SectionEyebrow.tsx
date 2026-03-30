import type { ReactNode } from "react";

type SectionEyebrowProps = {
  children: ReactNode;
  className?: string;
};

/**
 * Why: Section labels need instant hierarchy; a gradient “eyebrow” reads more premium than flat blue text.
 * What: Small uppercase label with gradient fill and wide tracking for a modern product-style header.
 * Where: Placed above `h2` titles across homepage sections.
 * When: Rendered with each section’s first visible heading block.
 * Who: Marketing homepage visitors scanning vertically on mobile.
 * How: `bg-clip-text` + `text-transparent` on a gradient; optional `className` for alignment tweaks.
 */
export function SectionEyebrow({ children, className = "" }: SectionEyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-2 bg-gradient-to-r from-brand-600 via-sky-600 to-brand-700 bg-clip-text text-xs font-bold uppercase tracking-[0.18em] text-transparent sm:text-sm ${className}`}
    >
      {children}
    </p>
  );
}
