"use client";

import { BookMarked, Dumbbell, FlaskConical, Trees } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const FACILITIES = [
  {
    title: "Science & computer labs",
    body: "Hands-on experiments and guided lab notebooks — safety-first protocols always on display.",
    icon: FlaskConical,
  },
  {
    title: "Library & reading corners",
    body: "Quiet zones, age-wise stacks, and weekly reading challenges to build stamina.",
    icon: BookMarked,
  },
  {
    title: "Sports & playground",
    body: "Outdoor play, structured PE slots, and inter-house events across the year.",
    icon: Dumbbell,
  },
  {
    title: "Green open spaces",
    body: "Room to breathe between classes — assemblies, drills, and celebrations under the sky.",
    icon: Trees,
  },
] as const;

/** Blue shade variants for facility cards — matches Documents / Academic aesthetic. */
const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
] as const;

/**
 * Why: Facilities should scan fast on phones without endless vertical scrolling.
 * What: Horizontal snap row on small viewports (next card peeks); `md+` switches to a 2×2 then 4-column grid; gradient icon wells + slide-in motion.
 * Where: Homepage `#facilities`.
 * When: On scroll into view; motion respects reduced motion via `SlideInWhenVisible`.
 * Who: Parents comparing campus infrastructure.
 * How: `flex` + `snap-x` + hidden scrollbar on mobile; `md:grid md:grid-cols-2 lg:grid-cols-4` on larger breakpoints.
 */
export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="border-y border-brand-200/50 bg-background"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <SectionEyebrow>Campus & facilities</SectionEyebrow>
            <h2
              id="facilities-heading"
              className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl"
            >
              Spaces that invite curiosity
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              Calm, bright, supervised spaces for every age.
              <span className="hidden sm:inline">
                {" "}
                From early years to seniors — designed for how students learn best.
              </span>
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-8 sm:mt-10">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mb-3">
            <span className="md:hidden">Swipe for more →</span>
            <span className="hidden md:inline">Campus highlights</span>
          </div>

          <div
            className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] md:mx-0 md:grid md:grid-cols-2 md:gap-5 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden"
            role="list"
            aria-label="Campus facilities"
          >
            {FACILITIES.map((item, index) => {
              const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
              const direction = index % 2 === 0 ? "left" : "right";
              return (
                <SlideInWhenVisible
                  key={item.title}
                  direction={direction}
                  delay={index * 0.06}
                  className="w-[min(88vw,19.5rem)] shrink-0 snap-start sm:w-[min(82vw,20rem)] md:w-auto md:min-w-0"
                >
                  <article
                    role="listitem"
                    className={`group flex h-full min-h-[220px] flex-col rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft md:min-h-[240px] ${variant}`}
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-sky-500/10 text-brand-600 shadow-sm ring-1 ring-brand-200/50 transition group-hover:scale-105 group-hover:from-brand-500/25 group-hover:to-sky-500/15">
                      <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
                  </article>
                </SlideInWhenVisible>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
