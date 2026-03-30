import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

/**
 * Why: A dedicated admissions CTA band converts interest into action (call, form, visit).
 * What: High-contrast banner with dual buttons — primary “Apply / Enquire” and secondary syllabus tour.
 * Where: Homepage `#admissions` near the end (before footer).
 * When: After the user has scanned proof points (results, facilities, documents).
 * Who: Parents ready to shortlist or book a visit.
 * How: Gradient panel + icons; point `href` to your Google Form / ERP landing when ready.
 */
export function AdmissionsCtaSection() {
  return (
    <section
      id="admissions"
      className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
      aria-labelledby="admissions-heading"
    >
      <FadeInWhenVisible>
        <div className="relative overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-br from-brand-600 via-brand-500 to-sky-400 p-8 shadow-soft sm:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-28 -left-16 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
            aria-hidden
          />

          <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/90 backdrop-blur">
                <Sparkles className="h-4 w-4" aria-hidden />
                Admissions open
              </p>
              <h2
                id="admissions-heading"
                className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-white sm:text-4xl"
              >
                Ready to explore Radiant Star for your child?
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90">
                Share your final enquiry workflow here — WhatsApp routing, ERP form, or in-person walk-in
                slots. This block is designed to stay calm, confident, and unmistakably actionable.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Link
                href="mailto:radiantstar12@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50"
              >
                Email admissions
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              <Link
                href="tel:+913880266426"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
              >
                Call the office
              </Link>
              <p className="text-xs text-white/75">
                Replace with your Google Form / custom `/admissions` page route when built.
              </p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
