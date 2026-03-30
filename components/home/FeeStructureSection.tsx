import { FileDown } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import { FEE_STRUCTURE_2025_26_PDF } from "@/lib/site-documents";

const LEVELS = [
  {
    label: "Primary",
    key: "PRIMARY",
    description:
      "Early foundations with age-appropriate fee band as per official circular.",
  },
  {
    label: "Middle",
    key: "MIDDLE",
    description: "Middle school band for Classes VI–VIII (see circular for exact figure).",
  },
  {
    label: "Secondary",
    key: "SECONDARY",
    description: "Board-focused Classes IX–X fee band as notified by the school.",
  },
] as const;

/**
 * Why: Parents often need to verify tuition before enquiring — a clear, modern “Fees” band plus download is enough.
 * What: Hero-style callout, animated class-wise chips, and a single prominent download button for the official PDF.
 * Where: Homepage `#fee-structure`, placed before the general documents grid in `app/page.tsx`.
 * When: Always visible on the marketing homepage; update the underlying PDF file when a new session’s fee circular is published.
 * Who: Prospective and current parents comparing options.
 * How: Serves the static asset from `public/documents/` and uses motion cards instead of an inline PDF viewer for a cleaner UI.
 */
export function FeeStructureSection() {
  const pdfUrl = FEE_STRUCTURE_2025_26_PDF;

  return (
    <section
      id="fee-structure"
      className="border-y border-brand-200/50 bg-gradient-to-b from-background to-brand-100/35"
      aria-labelledby="fee-structure-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeInWhenVisible>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <SectionEyebrow>Fee structure</SectionEyebrow>
              <h2
                id="fee-structure-heading"
                className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl"
              >
                Academic session 2025–26
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
                Exact amounts are defined in the{" "}
                <span className="font-medium text-slate-900">official fee circular</span>. Below is a
                quick view of which sections the circular covers.
              </p>
            </div>
            <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={pdfUrl}
                download="Radiant-Star-Fee-Structure-2025-26.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_28px_-8px_rgb(37_99_235/0.45)] transition hover:-translate-y-0.5 hover:brightness-105"
              >
                <FileDown className="h-4 w-4" aria-hidden />
                Download fee structure (PDF)
              </a>
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-3">
          {LEVELS.map((level, index) => (
            <FadeInWhenVisible key={level.key} delay={index * 0.06}>
              <article className="group h-full rounded-2xl border border-slate-300/60 bg-surface p-5 shadow-card backdrop-blur-sm transition hover:-translate-y-1 hover:border-brand-300 hover:shadow-soft">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
                  {level.key}
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-slate-900">
                  {level.label}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {level.description}
                </p>
                <p className="mt-4 text-[11px] font-medium uppercase tracking-wide text-slate-400">
                  See PDF for detailed class-wise amounts
                </p>
              </article>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
