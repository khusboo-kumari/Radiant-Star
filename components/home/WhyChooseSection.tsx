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
 * What: Four highlight cards with blue shade variants, left/right trending entrance animation, subtle shimmer highlight, and a fixed section background image.
 * Where: Homepage section `#why-us`, after the hero.
 * When: As users scroll; cards slide in from alternating sides, then shimmer appears on hover.
 * Who: Prospective families evaluating fit.
 * How: Static data array mapped to cards; section uses a fixed background image with a soft white overlay for readability; mobile uses `overflow-x-auto` + snap while `sm+` uses grid; `SlideInWhenVisible` handles motion and a gradient overlay adds shimmer.
 */
export function WhyChooseSection() {
  return (
    <section
      id="why-us"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
      aria-labelledby="why-heading"
      style={{
        backgroundImage: "url('/images/why-us-bg.png')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/30 via-white/22 to-white/28" />
      <div className="relative z-10">
      <FadeInWhenVisible>
        <div className="max-w-2xl">
          <SectionEyebrow>Why families choose us</SectionEyebrow>
          <h2
            id="why-heading"
            className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-white [-webkit-text-stroke:1px_#1d4ed8] [paint-order:stroke_fill] sm:mt-4 sm:text-4xl"
          >
            Trustworthy academics, vibrant campus life
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-white [-webkit-text-stroke:0.5px_#1d4ed8] [paint-order:stroke_fill] sm:mt-4 sm:text-base">
            <span className="font-semibold text-white [-webkit-text-stroke:0.5px_#1d4ed8] [paint-order:stroke_fill]">Warmth for little ones. Ambition for teens.</span>{" "}
            <span className="hidden sm:inline">
              Radiant Star is built for families who want a school that feels approachable yet rigorous.
            </span>
          </p>
        </div>
      </FadeInWhenVisible>

      <div className="mt-8 sm:mt-10">
        <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mb-3 sm:hidden">
          Swipe for more →
        </div>
        <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 pr-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-2 sm:gap-5 sm:overflow-visible sm:pb-0 sm:pr-0 lg:grid-cols-4 [&::-webkit-scrollbar]:hidden sm:[&::-webkit-scrollbar]:block">
        {HIGHLIGHTS.map((item, index) => {
          const direction = index % 2 === 0 ? "left" : "right";
          const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];

          return (
            <SlideInWhenVisible
              key={item.title}
              direction={direction}
              delay={index * 0.07}
              className="w-[225px] shrink-0 snap-start sm:w-auto sm:shrink sm:snap-none"
            >
              <article
                className={`group relative h-full overflow-hidden rounded-2xl border p-4 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft sm:p-5 ${variant}`}
              >
                <div className="pointer-events-none absolute -left-24 -top-10 h-20 w-40 rotate-12 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-0 blur-[1px] transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />

                <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-sky-500/10 text-brand-600 shadow-sm ring-1 ring-brand-200/50 transition group-hover:scale-105 group-hover:from-brand-500/25 group-hover:to-sky-500/15">
                  <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-base font-semibold text-slate-900 sm:mt-4 sm:text-lg">
                  {item.title}
                </h3>
                <p className="mt-2 text-[13px] leading-relaxed text-slate-600 sm:text-sm">{item.body}</p>
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
