"use client";

import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";

/** Blue shade variants for stats and topper cards. */
const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
  "bg-sky-100/80 border-sky-300",
  "bg-blue-100/80 border-blue-300",
] as const;

/**
 * Why: Board results are the strongest trust signal for Indian parents — this section must feel celebratory and factual.
 * What: KPI strip + topper cards with varied blue shades and alternating left/right slide-in; placeholder data until official numbers.
 * Where: Homepage `#results` section.
 * When: On scroll; cards animate in once.
 * Who: Parents of Class IX–XII students comparing outcomes.
 * How: Client component; SlideInWhenVisible; Framer Motion respects reduced motion.
 */
export function BoardResultsSection() {
  const stats = [
    { label: "Class X — distinction holders", value: "72%", hint: "Illustrative" },
    { label: "Class XII — avg. best 4", value: "91%", hint: "Illustrative" },
    { label: "First-gen college goers", value: "38%", hint: "Story metric" },
  ] as const;

  const toppers = [
    {
      name: "Topper — Class X",
      score: "498 / 500",
      stream: "Illustrative name",
      note: "Replace with official topper profile & photo consent.",
    },
    {
      name: "Topper — Class XII (Science)",
      score: "97.2%",
      stream: "Illustrative name",
      note: "Add JEE/NEET highlights if applicable.",
    },
    {
      name: "Topper — Class XII (Commerce)",
      score: "96.4%",
      stream: "Illustrative name",
      note: "Add CA/CUET milestones if applicable.",
    },
  ] as const;

  return (
    <section
      id="results"
      className="bg-gradient-to-b from-background to-brand-100/30"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeInWhenVisible>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                Board results highlight
              </p>
              <h2
                id="results-heading"
                className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Proud outcomes in Class X & XII
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                We celebrate effort and outcomes together. Below is a{" "}
                <span className="font-medium text-slate-800">preview layout</span> — plug in your official
                percentages, subject toppers, and university placements when you share final data.
              </p>
            </div>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
              <strong className="font-semibold">Note:</strong> Figures shown are placeholders for UI only.
            </div>
          </div>
        </FadeInWhenVisible>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {stats.map((stat, index) => {
            const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible key={stat.label} direction={direction} delay={index * 0.06}>
                <div
                  className={`rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${variant}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-600">
                    {stat.hint}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-4xl font-bold text-brand-700">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm font-medium text-slate-800">{stat.label}</p>
                </div>
              </SlideInWhenVisible>
            );
          })}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {toppers.map((topper, index) => {
            const variant = CARD_BLUE_VARIANTS[(index + 3) % CARD_BLUE_VARIANTS.length];
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible key={topper.name} direction={direction} delay={index * 0.08}>
                <article
                  className={`h-full rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${variant}`}
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-brand-700">
                    {topper.name}
                  </p>
                  <p className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-bold text-slate-900">
                    {topper.score}
                  </p>
                  <p className="mt-1 text-sm font-medium text-slate-700">{topper.stream}</p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-600">{topper.note}</p>
                </article>
              </SlideInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
