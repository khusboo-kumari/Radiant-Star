import { BookOpen, HeartHandshake, ShieldCheck, Trophy } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";

const HIGHLIGHTS = [
  {
    title: "Board exam excellence",
    body: "Structured prep, exam temperament coaching, and mentor check-ins for Class X & XII milestones.",
    icon: Trophy,
  },
  {
    title: "Warm, skilled faculty",
    body: "Teachers who know names — not just roll numbers — balancing rigour with encouragement.",
    icon: HeartHandshake,
  },
  {
    title: "Modern learning spaces",
    body: "Labs, library, digital aids, and safe outdoor zones designed for discovery and play.",
    icon: BookOpen,
  },
  {
    title: "Holistic growth",
    body: "Sports, arts, leadership moments, and values education so confidence grows with competence.",
    icon: ShieldCheck,
  },
] as const;

const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
] as const;

/**
 * Why: Parents compare schools quickly — we must answer “why here?” with crisp proof points, not essays.
 * What: Four highlight cards with blue shade variants, left/right trending entrance animation, and subtle shimmer highlight.
 * Where: Homepage section `#why-us`, after the hero.
 * When: As users scroll; cards slide in from alternating sides, then shimmer appears on hover.
 * Who: Prospective families evaluating fit.
 * How: Static data array mapped to cards, `SlideInWhenVisible` for motion, and a gradient overlay for shimmer.
 */
export function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="why-heading"
    >
      <FadeInWhenVisible>
        <div className="max-w-2xl">
          <SectionEyebrow>Why families choose us</SectionEyebrow>
          <h2
            id="why-heading"
            className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl"
          >
            Trustworthy academics, vibrant campus life
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
            <span className="font-semibold text-slate-800">Warmth for little ones. Ambition for teens.</span>{" "}
            <span className="hidden sm:inline">
              Radiant Star is built for families who want a school that feels approachable yet rigorous.
            </span>
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {HIGHLIGHTS.map((item, index) => {
          const direction = index % 2 === 0 ? "left" : "right";
          const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];

          return (
            <SlideInWhenVisible
              key={item.title}
              direction={direction}
              delay={index * 0.07}
            >
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border p-5 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft ${variant}`}
              >
                <div className="pointer-events-none absolute -left-24 -top-10 h-20 w-40 rotate-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-sky-500/10 text-brand-600 shadow-sm ring-1 ring-brand-200/50 transition group-hover:scale-105 group-hover:from-brand-500/25 group-hover:to-sky-500/15">
                  <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
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
    </section>
  );
}
