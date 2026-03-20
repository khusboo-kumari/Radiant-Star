"use client";

import {
  BookMarked,
  Bus,
  Dumbbell,
  FlaskConical,
  Laptop,
  Trees,
} from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";

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
  {
    title: "Smart classrooms",
    body: "Blended teaching aids that support explanation — not screen overload.",
    icon: Laptop,
  },
  {
    title: "Safe transport (if applicable)",
    body: "Placeholder for route coverage, GPS, and attendant policies — update when confirmed.",
    icon: Bus,
  },
] as const;

/** Blue shade variants for facility cards — matches Documents / Academic aesthetic. */
const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
  "bg-sky-100/80 border-sky-300",
  "bg-blue-100/80 border-blue-300",
] as const;

/**
 * Why: Facilities visuals reduce anxiety (“Will my child be safe and stimulated?”) before the campus visit.
 * What: Icon-led cards with varied blue shades and alternating left/right slide-in; friendly microcopy.
 * Where: Homepage `#facilities` section.
 * When: On scroll; SlideInWhenVisible triggers once per card.
 * Who: Parents comparing infrastructure quality.
 * How: Client component; SlideInWhenVisible + CARD_BLUE_VARIANTS; Framer Motion respects reduced motion.
 */
export function FacilitiesSection() {
  return (
    <section
      id="facilities"
      className="border-y border-brand-200/50 bg-background"
      aria-labelledby="facilities-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Campus & facilities
            </p>
            <h2
              id="facilities-heading"
              className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Spaces that invite curiosity
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              From tiny tots to senior students, every age group gets corners designed for how they learn
              best — calm, bright, and supervised.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FACILITIES.map((item, index) => {
            const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible
                key={item.title}
                direction={direction}
                delay={index * 0.06}
              >
                <article
                  className={`group h-full rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft ${variant}`}
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-surface text-brand-600 shadow-sm ring-1 ring-slate-300/70 transition group-hover:scale-105">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <h3 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.body}</p>
                </article>
              </SlideInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
