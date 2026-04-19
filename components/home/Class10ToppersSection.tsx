"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useCallback, useRef, useState } from "react";

/** One Class X (2025–26) spotlight — portrait lives under `public/board-toppers/class-x-2026/`. */
type Class10Topper = {
  /** Student full name for captions and fallback card. */
  name: string;
  /** Board percentage, e.g. "96.4%". */
  score: string;
  /** Ordinal label for the floating badge. */
  rankLabel: string;
  /** File in `public/board-toppers/class-x-2026/` (add PNGs here after export). */
  imageSrc: string;
  /** Screen reader description of the official result card image. */
  imageAlt: string;
  /** Accent for rank ribbon and fallback panel (visionOS-style depth cue). */
  accent: "gold" | "silver" | "bronze";
};

const CLASS_X_TOPPERS_2025_26: Class10Topper[] = [
  {
    name: "Anmol Basnet",
    score: "96.4%",
    rankLabel: "1st",
    imageSrc: "/board-toppers/class-x-2026/anmol-basnet.png",
    imageAlt: "Official Class X result card — Anmol Basnet, 96.4%, first rank",
    accent: "gold",
  },
  {
    name: "Neha Oli",
    score: "95.4%",
    rankLabel: "2nd",
    imageSrc: "/board-toppers/class-x-2026/neha-oli.png",
    imageAlt: "Official Class X result card — Neha Oli, 95.4%, second rank",
    accent: "silver",
  },
  {
    name: "Khusi Basnet",
    score: "91.8%",
    rankLabel: "3rd",
    imageSrc: "/board-toppers/class-x-2026/khusi-basnet.png",
    imageAlt: "Official Class X result card — Khusi Basnet, 91.8%, third rank",
    accent: "bronze",
  },
] as const;

const ACCENT_RING: Record<Class10Topper["accent"], string> = {
  gold: "from-amber-300/90 via-yellow-200/70 to-amber-500/80",
  silver: "from-slate-200/90 via-white/70 to-slate-300/80",
  bronze: "from-orange-300/85 via-amber-200/65 to-orange-600/75",
};

const ACCENT_FALLBACK_BG: Record<Class10Topper["accent"], string> = {
  gold: "from-amber-950/80 via-slate-900 to-slate-950",
  silver: "from-slate-700/90 via-slate-900 to-slate-950",
  bronze: "from-orange-950/85 via-slate-900 to-slate-950",
};

function initialsFromName(name: string) {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  const a = parts[0]?.[0] ?? "";
  const b = parts[1]?.[0] ?? parts[0]?.[1] ?? "";
  return (a + b).toUpperCase();
}

type TopperFloatCardProps = {
  topper: Class10Topper;
  index: number;
  reduceMotion: boolean | null;
};

/**
 * Why: A single spotlight card should feel dimensional (visionOS-style) without heavy libraries.
 * What: Glass frame, optional official portrait, pointer-driven tilt (springs), rank badge, and a graceful fallback if the PNG is missing.
 * Where: Rendered inside `Class10ToppersSection` for each entry in `CLASS_X_TOPPERS_2025_26`.
 * When: On the homepage after the hero; animates on scroll into view and responds to hover/move on devices that support it.
 * Who: `Class10ToppersSection` maps each topper into this component.
 * How: `framer-motion` spring values from pointer position within the card; `useState` toggles fallback when `next/image` fails to load.
 */
function TopperFloatCard({ topper, index, reduceMotion }: TopperFloatCardProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 280, damping: 28, mass: 0.4 });
  const springY = useSpring(my, { stiffness: 280, damping: 28, mass: 0.4 });
  const rotateY = useTransform(springX, [-0.5, 0.5], reduceMotion ? [0, 0] : [9, -9]);
  const rotateX = useTransform(springY, [-0.5, 0.5], reduceMotion ? [0, 0] : [-7, 7]);
  const glareX = useTransform(springX, [-0.5, 0.5], [22, 78]);
  const glareY = useTransform(springY, [-0.5, 0.5], [28, 72]);
  const glare = useMotionTemplate`radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.38) 0%, transparent 55%)`;

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (reduceMotion) return;
      const el = wrapRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      mx.set((e.clientX - r.left) / r.width - 0.5);
      my.set((e.clientY - r.top) / r.height - 0.5);
    },
    [mx, my, reduceMotion],
  );

  const onPointerLeave = useCallback(() => {
    mx.set(0);
    my.set(0);
  }, [mx, my]);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.96 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative flex flex-col items-stretch"
    >
      <div
        ref={wrapRef}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        className="relative perspective-[1100px]"
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative"
        >
          <div
            className={`pointer-events-none absolute -inset-[2px] rounded-[1.35rem] bg-gradient-to-br opacity-90 blur-[1px] ${ACCENT_RING[topper.accent]}`}
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-3xl border border-white/25 bg-white/[0.07] p-[2px] shadow-[0_28px_80px_-24px_rgba(0,0,0,0.55)] backdrop-blur-xl">
            <div className="relative overflow-hidden rounded-[1.2rem] bg-slate-950/40 ring-1 ring-white/10">
              {!imageFailed ? (
                <div className="relative aspect-[3/4] w-full">
                  <Image
                    src={topper.imageSrc}
                    alt={topper.imageAlt}
                    fill
                    sizes="(min-width: 1024px) 28vw, (min-width: 640px) 40vw, 88vw"
                    className="object-cover object-top"
                    priority={index === 0}
                    onError={() => setImageFailed(true)}
                  />
                  <motion.div
                    className="pointer-events-none absolute inset-0 mix-blend-soft-light"
                    style={{ backgroundImage: glare }}
                    aria-hidden
                  />
                </div>
              ) : (
                <div
                  className={`flex aspect-[3/4] w-full flex-col items-center justify-end bg-gradient-to-b px-6 pb-10 pt-16 text-center ${ACCENT_FALLBACK_BG[topper.accent]}`}
                >
                  <p className="font-[family-name:var(--font-plus-jakarta)] text-5xl font-black tracking-tight text-white/90">
                    {initialsFromName(topper.name)}
                  </p>
                  <p className="mt-6 font-[family-name:var(--font-plus-jakarta)] text-lg font-bold uppercase tracking-wide text-white">
                    {topper.name}
                  </p>
                  <p className="mt-2 text-4xl font-black tabular-nums text-amber-200">{topper.score}</p>
                  <p className="mt-6 max-w-[18ch] text-xs leading-relaxed text-white/55">
                    Add the official card PNG to{" "}
                    <code className="rounded bg-white/10 px-1 py-0.5 text-[10px] text-white/80">
                      public/board-toppers/class-x-2026/
                    </code>{" "}
                    using the filename from <code className="text-[10px] text-white/80">{topper.imageSrc}</code>.
                  </p>
                </div>
              )}

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-950/70 to-transparent" aria-hidden />
            </div>
          </div>
        </motion.div>

        {!reduceMotion ? (
          <motion.div
            className="pointer-events-none absolute -left-1 top-6 z-10 sm:-left-2 sm:top-8"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3.2 + index * 0.2, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-sm font-black text-slate-900 shadow-lg ring-2 ring-white/50 sm:h-16 sm:w-16 sm:text-base ${ACCENT_RING[topper.accent]}`}
            >
              {topper.rankLabel}
            </div>
          </motion.div>
        ) : (
          <div className="pointer-events-none absolute -left-1 top-6 z-10 sm:-left-2 sm:top-8" aria-hidden>
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br text-sm font-black text-slate-900 shadow-lg ring-2 ring-white/50 sm:h-16 sm:w-16 sm:text-base ${ACCENT_RING[topper.accent]}`}
            >
              {topper.rankLabel}
            </div>
          </div>
        )}

        <p className="mt-4 text-center font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold text-white/90 sm:text-base">
          {topper.name}
        </p>
      </div>
    </motion.article>
  );
}

/**
 * Why: The old improvement-exam strip is obsolete; families respond to proof of outcomes — Class X toppers deserve a flagship moment.
 * What: Dark “spatial UI” band with parallax light fields, three glass spotlight cards with visionOS-like tilt and glare, scroll choreography, and school congratulatory copy for the board exam.
 * Where: Homepage directly under `HeroSection` (`app/page.tsx`), anchor `#class-x-toppers`.
 * When: On scroll and pointer hover (tilt disabled when `prefers-reduced-motion` is set).
 * Who: Prospective parents comparing academic credibility; current families celebrating peers.
 * How: `useScroll` + `useTransform` for ambient depth; `TopperFloatCard` uses spring-driven `rotateX`/`rotateY` and a radial glare layer; images load from `public/board-toppers/class-x-2026/` with a built-in fallback if files are absent.
 */
export function Class10ToppersSection() {
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const floatA = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, -48]);
  const floatB = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 72]);
  const floatC = useTransform(scrollYProgress, [0, 1], reduceMotion ? [0, 0] : [0, 36]);

  return (
    <section
      ref={sectionRef}
      id="class-x-toppers"
      className="relative overflow-hidden border-y border-white/10 bg-gradient-to-b from-slate-950 via-[#0a1628] to-slate-950 text-white"
      aria-labelledby="class-x-toppers-heading"
    >
      <motion.div
        style={{ y: floatA }}
        className="pointer-events-none absolute -left-32 top-10 h-[420px] w-[420px] rounded-full bg-brand-500/25 blur-[100px]"
        aria-hidden
      />
      <motion.div
        style={{ y: floatB }}
        className="pointer-events-none absolute -right-24 bottom-0 h-[380px] w-[380px] rounded-full bg-sky-400/20 blur-[90px]"
        aria-hidden
      />
      <motion.div
        style={{ y: floatC }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[300px] w-[min(90vw,560px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/15 blur-[80px]"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:48px_48px] opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_72%)]" aria-hidden />

      <div className="relative z-10 mx-auto max-w-6xl px-4 pt-10 pb-8 sm:px-6 sm:pt-12 sm:pb-10 lg:px-8 lg:pt-14 lg:pb-11">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-xs">
            CBSE Class X · Session 2025–26
          </p>
          <h2
            id="class-x-toppers-heading"
            className="mt-4 bg-gradient-to-b from-white via-brand-100 to-brand-200/90 bg-clip-text font-[family-name:var(--font-plus-jakarta)] text-3xl font-extrabold tracking-tight text-transparent sm:mt-5 sm:text-4xl lg:text-5xl"
          >
            Meet our board brilliance
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            <span className="font-semibold text-white">Heartiest congratulations</span> to the top scorers of our
            school in the{" "}
            <span className="font-semibold text-brand-200">CBSE Board Examination 2026</span>. We are immensely proud to
            celebrate the outstanding achievements of our brilliant students —{" "}
            <span className="text-white/90">Radiant Star Education Centre, Kanglatongbi, Imphal West</span>.
          </p>
        </motion.div>

        <div className="mt-8 grid gap-8 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:mt-12 lg:grid-cols-3 lg:gap-8">
          {CLASS_X_TOPPERS_2025_26.map((topper, index) => (
            <TopperFloatCard key={topper.name} topper={topper} index={index} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
