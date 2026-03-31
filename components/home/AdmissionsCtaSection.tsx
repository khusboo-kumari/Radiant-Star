import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

/**
 * Why: A dedicated admissions CTA band converts interest into action (call, form, visit).
 * What: Compact gradient banner with short parent-facing copy and mail/call actions.
 * Where: Homepage `#admissions` near the end (before footer).
 * When: After the user has scanned proof points (results, facilities, documents).
 * Who: Parents ready to shortlist or book a visit.
 * How: Gradient panel + icons; mailto/tel links for direct contact.
 */
export function AdmissionsCtaSection() {
  return (
    <section
      id="admissions"
      className="mx-auto max-w-6xl px-4 pb-10 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20"
      aria-labelledby="admissions-heading"
    >
      <FadeInWhenVisible>
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-2xl border border-brand-200 bg-gradient-to-br from-brand-600 via-brand-500 to-sky-400 p-5 shadow-soft sm:max-w-4xl sm:rounded-3xl sm:p-8 lg:max-w-5xl lg:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/15 blur-3xl sm:-right-24 sm:-top-24 sm:h-64 sm:w-64"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-12 h-56 w-56 rounded-full bg-sky-200/40 blur-3xl sm:-bottom-28 sm:-left-16 sm:h-72 sm:w-72"
            aria-hidden
          />

          <div className="relative grid gap-5 sm:gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
            <div>
              <p className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur sm:gap-2 sm:px-3 sm:py-1 sm:text-xs sm:tracking-widest">
                <Sparkles className="h-3.5 w-3.5 sm:h-4 sm:w-4" aria-hidden />
                Admissions open
              </p>
              <h2
                id="admissions-heading"
                className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-xl font-bold leading-snug tracking-tight text-white sm:mt-4 sm:text-2xl lg:text-3xl"
              >
                Ready to explore Radiant Star for your child?
              </h2>
              {/*
               * Why: Parents need a short, reassuring line — not internal placeholder language.
               * What: Explains what happens next (email/call) and what they can ask about.
               * Where: Under the admissions heading in `AdmissionsCtaSection`.
               * When: Rendered with the CTA on every homepage load.
               * Who: Families considering admission.
               * How: Plain sentences; kept to two lines on most phones.
               */}
              <p className="mt-2.5 max-w-lg text-sm leading-relaxed text-white/90 sm:mt-3 sm:text-[15px]">
                Planning admission? Email or call us for seat availability, fees, and school visits — we
                answer clearly and help you take the next step with confidence.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:gap-2.5 lg:min-w-[11.5rem]">
              <Link
                href="mailto:radiantstar12@gmail.com"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-brand-700 shadow-soft transition hover:bg-brand-50 sm:px-6 sm:py-3"
              >
                Email admissions
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
              </Link>
              <Link
                href="tel:+919862669585"
                className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10 sm:px-6 sm:py-3"
              >
                Call the office
              </Link>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
