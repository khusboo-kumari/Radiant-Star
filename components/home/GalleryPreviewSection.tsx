"use client";

import Image from "next/image";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";

const GALLERY_ITEMS = [
  {
    src: "/gallery/campus-tug-of-war.png",
    alt: "Students competing in tug-of-war on the school field — sports and teamwork at Radiant Star",
    caption: "Sports day — tug of war",
    frame: "border-brand-300 bg-brand-50 ring-2 ring-brand-200/50",
  },
  {
    src: "/gallery/campus-computer-lab.png",
    alt: "Students in the computer lab with modern desktops — digital learning at Radiant Star Education Centre",
    caption: "Computer lab",
    frame: "border-sky-300 bg-sky-50 ring-2 ring-sky-200/50",
  },
  {
    src: "/gallery/campus-independence-march.png",
    alt: "Students participating in a patriotic march with flags",
    caption: "Independence march",
    frame: "border-brand-300 bg-brand-100/80 ring-2 ring-brand-200/50",
  },
  {
    src: "/gallery/campus-event-photo.png",
    alt: "Campus event moment with students and school surroundings",
    caption: "Campus event",
    frame: "border-sky-300 bg-sky-100/80 ring-2 ring-sky-200/50",
  },
  {
    src: "/gallery/campus-cultural-dance.png",
    alt: "Students in traditional attire during a cultural performance",
    caption: "Cultural program",
    frame: "border-brand-300 bg-brand-50 ring-2 ring-brand-200/50",
  },
  {
    src: "/gallery/campus-yoga-session.png",
    alt: "Students participating in a guided yoga session indoors",
    caption: "Yoga session",
    frame: "border-sky-300 bg-sky-50 ring-2 ring-sky-200/50",
  },
  {
    src: "/gallery/campus-environment-day.png",
    alt: "Students with plants during a World Environment Day activity",
    caption: "Environment Day",
    frame: "border-blue-300 bg-blue-50 ring-2 ring-blue-200/50",
  },
] as const;

/**
 * Why: Real campus photos build trust faster than stock imagery.
 * What: Single-row horizontal gallery with blue-tinted frames and alternating left/right slide-in on scroll.
 * Where: Homepage `#gallery`.
 * When: On scroll; each tile animates once (reduced motion = no slide).
 * Who: Prospective families picturing daily life at school.
 * How: `next/image` for static files in `public/gallery/`; add more entries + files when you have additional photos.
 */
export function GalleryPreviewSection() {
  return (
    <section
      id="gallery"
      className="border-y border-brand-200/40 bg-background"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
              Gallery preview
            </p>
            <h2
              id="gallery-heading"
              className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Moments from campus life
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Every photo tells a story of learning, culture, and confidence at Radiant Star.
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-10">
          <div className="mb-3 text-xs font-medium uppercase tracking-wide text-slate-500">
            Scroll to see more
          </div>
          <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GALLERY_ITEMS.map((item, index) => {
            const direction = index % 2 === 0 ? "left" : "right";
            return (
              <SlideInWhenVisible
                key={item.src}
                direction={direction}
                delay={index * 0.08}
                className="w-[280px] shrink-0 snap-start sm:w-[320px] lg:w-[360px]"
              >
                <figure
                  className={`group relative overflow-hidden rounded-2xl border p-1.5 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-soft ${item.frame}`}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200/80">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                    <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-900/70 via-slate-900/25 to-transparent p-4 pt-12 opacity-90 transition duration-300 group-hover:opacity-100">
                      <span className="text-sm font-semibold text-white drop-shadow-sm">
                        {item.caption}
                      </span>
                    </figcaption>
                  </div>
                </figure>
              </SlideInWhenVisible>
            );
          })}
          </div>
        </div>
      </div>
    </section>
  );
}
