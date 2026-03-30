"use client";

import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const STAGES = [
  {
    name: "Nursery & Kindergarten",
    grades: "Early years",
    focus: "Foundational literacy, numeracy, motor skills, and joyful routines.",
    badge: "Play & learn",
  },
  {
    name: "Primary",
    grades: "Classes I–V",
    focus: "Curiosity-led classrooms, reading habits, and values in daily habits.",
    badge: "Core habits",
  },
  {
    name: "Middle",
    grades: "Classes VI–VIII",
    focus: "Concept clarity, guided projects, and responsible digital citizenship.",
    badge: "Explore",
  },
  {
    name: "Secondary",
    grades: "Classes IX–X",
    focus: "Board readiness, exam skills, and mentorship for subject confidence.",
    badge: "Board focus",
  },
  {
    name: "Senior Secondary",
    grades: "Classes XI–XII",
    focus: "Stream depth, competitive rigour, and career-aware goal setting.",
    badge: "Aim higher",
  },
] as const;

/** Blue shade variants for stage cards — matches Documents / Facilities aesthetic. */
const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
  "bg-sky-100/80 border-sky-300",
] as const;

/**
 * Why: Parents need a clear academic ladder — Nursery to XII should read as intentional, not “one big block”.
 * What: Card grid with varied blue shades and alternating left/right slide-in; badge, title, grades, focus.
 * Where: Homepage `#academics` section.
 * When: On scroll; SlideInWhenVisible triggers once per card.
 * Who: Parents mapping their child’s current grade to the right environment.
 * How: Client component; SlideInWhenVisible + CARD_BLUE_VARIANTS cycle; Framer Motion respects reduced motion.
 */
export function AcademicStructureSection() {
  return (
    <section
      id="academics"
      className="border-y border-brand-200/50 bg-gradient-to-b from-background to-brand-100/35"
      aria-labelledby="academics-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <SectionEyebrow>Academic structure</SectionEyebrow>
            <h2
              id="academics-heading"
              className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl"
            >
              One journey from first classroom to Class XII
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              Each stage has its own rhythm — from early years to board seasons.
              <span className="hidden sm:inline">
                {" "}
                Students never feel rushed or left behind.
              </span>
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage, index) => {
            const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible
                key={stage.name}
                direction={direction}
                delay={index * 0.06}
              >
                <article
                  className={`flex h-full flex-col rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft ${variant}`}
                >
                  <span className="w-fit rounded-full bg-surface/95 px-3 py-1 text-xs font-semibold text-brand-800 shadow-sm ring-1 ring-brand-300/50">
                    {stage.badge}
                  </span>
                  <h3 className="mt-4 font-[family-name:var(--font-plus-jakarta)] text-xl font-semibold text-slate-900">
                    {stage.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-brand-700">{stage.grades}</p>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{stage.focus}</p>
                </article>
              </SlideInWhenVisible>
            );
          })}
        </div>
      </div>
    </section>
  );
}
