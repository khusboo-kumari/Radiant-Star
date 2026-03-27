"use client";

import { useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const SLIDE_INTERVAL_MS = 2000;

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
  {
    src: "/campus-hero.png",
    alt: "Radiant Star Education Centre — main school building and lawns, Manipur",
  },
] as const;

/**
 * Why: The hero sets first impression — campus photos should read clearly while headline text stays legible.
 * What: Full-width hero with multiple local campus photos rotating every 2s; no dark overlay so the school shows clearly. Text uses shadow for readability.
 * Where: First section on the homepage (`app/page.tsx`), directly under the sticky header.
 * When: On load; slideshow advances on a timer unless the user prefers reduced motion.
 * Who: Prospective parents and students landing from search/social.
 * How: Stacked `next/image` layers with CSS opacity crossfade; `useEffect` interval; foreground uses plain HTML (no `motion.*`) to avoid Framer + Strict Mode ghosting/double paint in dev.
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
      className="relative isolate min-h-[min(100svh,920px)] overflow-hidden bg-[#9ec6ea]"
      aria-labelledby="hero-heading"
    >
      {/* Background slideshow — crossfade; first image priority, rest lazy-loaded */}
      <div className="absolute inset-0" aria-hidden>
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.src}
            className={`absolute inset-0 bg-[#9ec6ea] transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "z-[1] opacity-100" : "z-0 opacity-0"
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

      {/* No dark overlay — hero photos stay clear; text uses shadow for readability */}
      {/* Slideshow position indicators (decorative; live region avoided — 2s would be noisy for AT) */}
      <div
        className="absolute bottom-6 left-1/2 z-[4] flex max-w-[min(100%,20rem)] -translate-x-1/2 flex-wrap justify-center gap-1.5 px-2 sm:bottom-8 sm:max-w-none sm:gap-2"
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

      <div className="relative z-[3] mx-auto flex max-w-6xl flex-col gap-10 px-4 py-20 sm:px-6 sm:py-24 lg:flex-row lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="max-w-xl lg:max-w-2xl [text-shadow:0_1px_3px_rgba(0,0,0,0.75)]">
          <p className="sr-only">{HERO_SLIDES[currentSlide]?.alt}</p>
          <h1
            id="hero-heading"
            className="mt-5 font-[family-name:var(--font-plus-jakarta)] text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Where young minds shine — from first steps to board exam excellence.
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-white sm:text-lg">
            A Senior Secondary School affiliated with CBSE, Delhi. Affiliation No. 1230038, School
            Code - 35305.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="#academics"
              className="inline-flex items-center justify-center rounded-full border border-white/50 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore Academics
            </Link>
          </div>

          <dl className="mt-10 grid w-fit grid-cols-1 gap-3 text-center sm:text-left">
            {[
              ["Stages", "Nursery–XII"],
            ].map(([k, v]) => (
              <div
                key={k}
                className="rounded-2xl border border-white/30 bg-black/25 px-3 py-3 backdrop-blur-sm"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-wide text-white/90">
                  {k}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-white">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/*
         * Why: Weekly glance card is optional; hidden until real calendar content is available.
         * Restore: Uncomment this block to show the glass "This week at a glance" widget beside hero copy.
         */}
        {/*
        <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-sm">
          <div className="relative overflow-hidden rounded-3xl border border-cyan-100/55 bg-gradient-to-br from-cyan-200/20 via-sky-200/12 to-blue-200/16 p-5 shadow-[0_18px_50px_-20px_rgba(56,189,248,0.55)] backdrop-blur-xl">
            <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-cyan-200/30 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-14 -right-8 h-32 w-32 rounded-full bg-blue-200/25 blur-2xl" />
            <div className="pointer-events-none absolute right-8 top-5 h-4 w-4 rounded-full bg-white/55 shadow-[0_0_0_5px_rgba(255,255,255,0.15)]" />
            <div className="pointer-events-none absolute right-16 top-14 h-2.5 w-2.5 rounded-full bg-white/45 shadow-[0_0_0_4px_rgba(255,255,255,0.1)]" />
            <div className="pointer-events-none absolute left-10 top-10 h-px w-24 bg-gradient-to-r from-white/70 via-white/20 to-transparent" />
            <p className="text-sm font-semibold text-white">This week at a glance</p>
            <ul className="mt-4 space-y-3 text-sm text-white">
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-white/25 bg-white/14 px-3 py-2 backdrop-blur-sm">
                <span>Parent orientation</span>
                <span className="shrink-0 rounded-full border border-white/35 bg-white/22 px-2 py-0.5 text-xs">
                  TBA
                </span>
              </li>
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-white/25 bg-white/14 px-3 py-2 backdrop-blur-sm">
                <span>Sports & wellness block</span>
                <span className="shrink-0 rounded-full border border-white/35 bg-white/22 px-2 py-0.5 text-xs">
                  Ongoing
                </span>
              </li>
              <li className="flex items-start justify-between gap-3 rounded-2xl border border-white/25 bg-white/14 px-3 py-2 backdrop-blur-sm">
                <span>Scholarship queries</span>
                <span className="shrink-0 rounded-full border border-white/35 bg-white/22 px-2 py-0.5 text-xs">
                  Office hrs
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-white/90">
              Replace with your live calendar events when content is ready.
            </p>
          </div>
        </div>
        */}
      </div>
    </section>
  );
}
