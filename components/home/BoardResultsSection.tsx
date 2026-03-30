"use client";

import Image from "next/image";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

/** Blue shade variants for topper cards. */
const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
  "bg-sky-100/80 border-sky-300",
  "bg-blue-100/80 border-blue-300",
] as const;

type TopperProfile = {
  /** Short label above the name, e.g. "Topper — Class X". */
  badge: string;
  /** Main score line, e.g. "94%". */
  score: string;
  studentName: string;
  /** Stream or level detail under the name. */
  streamLine: string;
  /** Local path under `public/` for the portrait. */
  photoSrc: string;
  /** Accessible description of the photo. */
  photoAlt: string;
};

const TOPPERS_2025: TopperProfile[] = [
  {
    badge: "Topper — Class X (2025)",
    score: "94%",
    studentName: "Pranay Tamang",
    streamLine: "Class X · Board examination",
    photoSrc: "/board-toppers/pranay-tamang-class-x-2025.png",
    photoAlt: "Pranay Tamang, Class X topper, Radiant Star Education Centre",
  },
  {
    badge: "Topper — Class XII Science (2025)",
    score: "85%",
    studentName: "Manshi Biswakarma",
    streamLine: "Senior Secondary · Science stream",
    photoSrc: "/board-toppers/manshi-biswakarma-xii-science-2025.png",
    photoAlt: "Manshi Biswakarma, Class XII Science topper, Radiant Star Education Centre",
  },
  {
    badge: "Topper — Class XII Arts (2025)",
    score: "86%",
    studentName: "Deepankar Uprety",
    streamLine: "Senior Secondary · Arts stream",
    photoSrc: "/board-toppers/deepankar-uprety-xii-arts-2025.png",
    photoAlt: "Deepankar Uprety, Class XII Arts topper, Radiant Star Education Centre",
  },
];

/**
 * Why: Board results and named toppers are the strongest trust signal for parents comparing schools.
 * What: Three 2025 topper profile cards with photos, scores, and stream labels.
 * Where: Homepage `#results`.
 * When: On scroll; cards animate in once; update `TOPPERS_2025` and images when a new batch is declared.
 * Who: Prospective families and current parents.
 * How: `next/image` for optimised portraits from `public/board-toppers/`; `SlideInWhenVisible` for entrance motion.
 */
export function BoardResultsSection() {
  return (
    <section
      id="results"
      className="bg-gradient-to-b from-background to-brand-100/30"
      aria-labelledby="results-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <SectionEyebrow>Board results highlight</SectionEyebrow>
            <h2
              id="results-heading"
              className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl"
            >
              Proud outcomes in Class X & XII
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              Meet our <span className="font-semibold text-slate-800">2025 batch toppers</span> — excellence in action.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
          {TOPPERS_2025.map((topper, index) => {
            const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible
                key={topper.studentName}
                direction={direction}
                delay={index * 0.08}
              >
                <article
                  className={`flex h-full flex-col overflow-hidden rounded-2xl border shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${variant}`}
                >
                  <div className="relative aspect-[4/5] w-full bg-slate-200/80 sm:aspect-[3/4]">
                    <Image
                      src={topper.photoSrc}
                      alt={topper.photoAlt}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <p className="text-[11px] font-bold uppercase tracking-wide text-brand-700">
                      {topper.badge}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold text-brand-700">
                      {topper.score}
                    </p>
                    <p className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-slate-900">
                      {topper.studentName}
                    </p>
                    <p className="mt-1 text-sm font-medium text-slate-600">{topper.streamLine}</p>
                  </div>
                </article>
              </SlideInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
