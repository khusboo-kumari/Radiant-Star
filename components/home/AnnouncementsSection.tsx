import { Megaphone, Pin } from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";

const NOTICES = [
  {
    title: "Admissions enquiry desk — revised timings",
    date: "TBA",
    tag: "Admissions",
  },
  {
    title: "PTM schedule for Term I will be published shortly",
    date: "TBA",
    tag: "Parents",
  },
  {
    title: "Holiday list sync with state directive — watch this space",
    date: "TBA",
    tag: "Calendar",
  },
] as const;

/**
 * Why: Schools run on timely communication — a visible notices strip reduces repeated phone queries.
 * What: Pinned headline row + horizontally scrollable “ticker cards” on mobile, grid on desktop.
 * Where: Homepage `#announcements` before documents/admissions.
 * When: Updated whenever the office publishes new circulars (later: CMS or markdown).
 * Who: Current and prospective parents scanning for urgent updates.
 * How: Static array for now; `snap-x` carousel pattern without auto-marquee (better for a11y).
 */
export function AnnouncementsSection() {
  return (
    <section
      id="announcements"
      className="border-y border-brand-200/50 bg-gradient-to-b from-brand-100/25 to-background"
      aria-labelledby="announcements-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <FadeInWhenVisible>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">
                Announcements & notices
              </p>
              <h2
                id="announcements-heading"
                className="mt-2 font-[family-name:var(--font-plus-jakarta)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
              >
                Stay updated with the school office
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Replace placeholders with PDF links, Google Forms, or your official circular numbers when
                content is ready.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-2xl border border-brand-200 bg-white px-4 py-3 text-sm font-medium text-brand-800 shadow-sm">
              <Megaphone className="h-4 w-4" aria-hidden />
              Latest first
            </div>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.06}>
          <div className="mt-8 flex gap-4 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] sm:grid sm:grid-cols-3 sm:overflow-visible [&::-webkit-scrollbar]:hidden">
            {NOTICES.map((notice) => (
              <article
                key={notice.title}
                className="min-w-[260px] shrink-0 snap-start rounded-2xl border border-slate-300/60 bg-surface p-5 shadow-card sm:min-w-0"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="rounded-full bg-brand-100 px-2.5 py-1 text-xs font-semibold text-brand-800">
                    {notice.tag}
                  </span>
                  <span className="text-xs font-medium text-slate-400">{notice.date}</span>
                </div>
                <h3 className="mt-3 flex gap-2 font-[family-name:var(--font-plus-jakarta)] text-base font-semibold text-slate-900">
                  <Pin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
                  {notice.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Add “Read circular” button linking to PDF or news article.
                </p>
              </article>
            ))}
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
