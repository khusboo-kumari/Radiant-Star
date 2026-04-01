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
 * What: Academic stage cards that become a compact horizontal scroller on mobile and return to a grid on larger screens, displayed over a fixed background image.
 * Where: Homepage `#academics` section.
 * When: On scroll; SlideInWhenVisible triggers once per card.
 * Who: Parents mapping their child’s current grade to the right environment.
 * How: Section uses fixed background image with soft overlay for readability; mobile uses `overflow-x-auto` + `snap` cards, `sm+` switches to grid; SlideInWhenVisible + CARD_BLUE_VARIANTS cycle.
 */
export function AcademicStructureSection() {
  return (
    <section
      id="academics"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl border-y border-brand-200/50"
      aria-labelledby="academics-heading"
      style={{
        backgroundImage: "url('/images/academic-bg.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/18 to-white/24" />
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <SectionEyebrow>Academic structure</SectionEyebrow>
            <h2
              id="academics-heading"
              className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-white [-webkit-text-stroke:1px_#1d4ed8] [paint-order:stroke_fill] sm:mt-4 sm:text-4xl"
            >
              One journey from first classroom to Class XII
            </h2>
            <p className="mt-3 text-sm font-bold leading-relaxed text-white [-webkit-text-stroke:0.5px_#1d4ed8] [paint-order:stroke_fill] sm:mt-4 sm:text-base">
              Each stage has its own rhythm — from early years to board seasons.
              <span className="hidden sm:inline">
                {" "}
                Students never feel rushed or left behind.
              </span>
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-8 sm:mt-10">
          <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mb-3 sm:hidden">
            Swipe for more →
          </div>
          <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:gap-5 sm:overflow-visible sm:pb-0 sm:pr-0 sm:grid-cols-2 lg:grid-cols-3 [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block">
          {STAGES.map((stage, index) => {
            const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible
                key={stage.name}
                direction={direction}
                delay={index * 0.06}
                className="w-[225px] shrink-0 snap-start sm:w-auto sm:shrink sm:snap-none"
              >
                <article
                  className={`flex h-full flex-col rounded-2xl border p-4 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:p-5 ${variant}`}
                >
                  <span className="w-fit rounded-full bg-surface/95 px-3 py-1 text-[11px] font-semibold text-brand-800 shadow-sm ring-1 ring-brand-300/50 sm:text-xs">
                    {stage.badge}
                  </span>
                  <h3 className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-slate-900 sm:mt-4 sm:text-xl">
                    {stage.name}
                  </h3>
                  <p className="mt-1 text-[13px] font-medium text-brand-700 sm:text-sm">{stage.grades}</p>
                  <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:mt-3 sm:text-sm">{stage.focus}</p>
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
