"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { CalendarDays } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 2000;

/**
 * Why: Without a tinted card, headings risk washing out on sunlit lawns and pale uniforms.
 * What: Layered `text-shadow` tokens applied to hero typography.
 * Where: Hero overlay labels, `h1`, body lines, affiliation row, and Stages text in `HeroSection`.
 * When: Whenever those elements render over the slideshow.
 * Who: Consumed by the hero layout only.
 * How: Tailwind arbitrary `text-shadow` utilities stacked for legibility (no background fill).
 */
const HERO_TEXT_SHADOW =
  "[text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_2px_24px_rgba(0,0,0,0.55),0_0_40px_rgba(0,0,0,0.25)]";

const HERO_SLIDES = [
  {
    src: "/campus-hero-wide-lawn.png",
    alt: "Wide view of Radiant Star Education Centre, lawns, and trees under a bright sky",
  },
  {
    src: "/campus-hero-peace-banner.png",
    alt: "School building with Radiant Star Education Centre banner — A Peace Education School",
  },
  {
    src: "/campus-assembly.png",
    alt: "Students in assembly on the school field with mountains in the background",
  },
] as const;

/**
 * Why: Campus photos should stay fully visible; branding must still read on busy outdoor scenes.
 * What: Slideshow sits at `z-[1]`; centered school name + affiliation sit at `z-[3]` with **no** card—copy uses `HERO_TEXT_SHADOW` only (crest stays in the site header, not duplicated here).
 * Where: First section on the homepage (`app/page.tsx`), directly under the sticky header.
 * When: On load; slideshow advances on a timer unless the user prefers reduced motion.
 * Who: Prospective parents and students landing from search/social.
 * How: Crossfading `next/image` layers; centered column stack; optional light `motion` entrance.
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (reduceMotion) return;
    const id = window.setInterval(() => {
      setActiveIndex((i) => (i + 1) % HERO_SLIDES.length);
    }, SLIDE_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion]);

  const currentSlide = reduceMotion ? 0 : activeIndex;

  return (
    <section
      id="top"
      className="relative isolate min-h-[min(78svh,640px)] overflow-hidden bg-[#9ec6ea] sm:min-h-[min(92svh,920px)]"
      aria-labelledby="hero-heading"
    >
      {/* Background slideshow — z below foreground; photos unchanged */}
      <div className="absolute inset-0 z-[1]" aria-hidden>
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 bg-[#9ec6ea] transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.src}
              alt=""
              fill
              priority={index === 0}
              loading={index === 0 ? "eager" : "lazy"}
              className="h-full w-full object-cover object-center"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      <div
        className="absolute bottom-6 left-1/2 z-[4] flex max-w-[min(100%,20rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5 px-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.45)] sm:bottom-8 sm:max-w-none sm:gap-2"
        role="tablist"
        aria-label="Hero photo"
      >
        {HERO_SLIDES.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={index === currentSlide}
            aria-label={`Show image ${index + 1}: ${slide.alt}`}
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "w-8 bg-white"
                : "w-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Foreground: centered copy above the image (logo omitted — see `SiteHeader`) */}
      <div className="relative z-[3] mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-16 pt-24 text-center sm:px-6 sm:pb-24 sm:pt-28 lg:px-8 lg:pb-28 lg:pt-32">
        <div className="w-full">
          <p className="sr-only">{HERO_SLIDES[currentSlide]?.alt}</p>

          <motion.div
            initial={{ opacity: reduceMotion ? 1 : 0, y: reduceMotion ? 0 : 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: reduceMotion ? 0 : 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center gap-6 sm:gap-8"
          >
            <div className="w-full max-w-2xl">
              <p
                className={`font-[family-name:var(--font-plus-jakarta)] text-[10px] font-semibold uppercase tracking-[0.22em] text-white/90 sm:text-[11px] sm:tracking-[0.28em] ${HERO_TEXT_SHADOW}`}
              >
                CBSE · Manipur
              </p>
              <h1
                id="hero-heading"
                className={`mt-2 font-[family-name:var(--font-plus-jakarta)] text-[1.9rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-3xl sm:leading-tight lg:text-4xl lg:leading-[1.15] ${HERO_TEXT_SHADOW}`}
              >
                Radiant Star Education Centre
              </h1>
              <p
                className={`mx-auto mt-3 max-w-[32ch] text-[14px] font-medium leading-relaxed text-white/95 sm:text-lg ${HERO_TEXT_SHADOW}`}
              >
                A Senior Secondary School affiliated with CBSE, Delhi.
              </p>
              <p
                className={`mx-auto mt-4 max-w-[38ch] text-xs font-semibold leading-relaxed text-white/95 sm:text-sm ${HERO_TEXT_SHADOW}`}
              >
                <span className="text-brand-100">Affiliation No.</span>{" "}
                <span className="tabular-nums font-bold text-white">1230038</span>
                <span className="text-white/60"> · </span>
                <span className="text-brand-100">School Code -</span>{" "}
                <span className="tabular-nums font-bold text-white">35305</span>
              </p>
            </div>
          </motion.div>

          <div className="mt-6 flex w-full flex-col items-center gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:justify-center">
            <Link
              href="#academics"
              className="inline-flex w-full max-w-[18.5rem] items-center justify-center rounded-full bg-gradient-to-r from-white to-brand-50 px-6 py-3 text-sm font-bold text-brand-700 shadow-lg shadow-black/20 ring-1 ring-white/80 transition hover:brightness-[1.03] sm:w-auto sm:max-w-none"
            >
              Explore Academics
            </Link>
            <Link
              href="#exam-schedule"
              className="inline-flex w-full max-w-[18.5rem] items-center justify-center gap-2 rounded-full border-2 border-white bg-white/95 px-5 py-3 text-sm font-bold text-slate-800 shadow-md shadow-black/15 transition hover:bg-white sm:w-auto sm:max-w-none"
            >
              <CalendarDays className="h-4 w-4 shrink-0 opacity-90" aria-hidden />
              Apr &apos;26 improvement exams
            </Link>
          </div>

          <dl className="mt-6 grid w-full grid-cols-1 gap-2 text-center sm:mt-8 sm:gap-3">
            {[
              ["Stages", "Nursery–XII"],
            ].map(([k, v]) => (
              <div key={k}>
                <dt
                  className={`text-[11px] font-semibold uppercase tracking-wide text-white/90 ${HERO_TEXT_SHADOW}`}
                >
                  {k}
                </dt>
                <dd className={`mt-1 text-sm font-semibold text-white ${HERO_TEXT_SHADOW}`}>
                  {v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
