"use client";

import { CalendarDays, CalendarRange, Download } from "lucide-react";
import { useState } from "react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { IMPROVEMENT_EXAM_ROUTINE_APRIL_2026_PNG } from "@/lib/site-documents";

/** One Class IX improvement exam row — date + weekday + single subject. */
type Class9ExamRow = {
  dateDisplay: string;
  weekday: string;
  subject: string;
};

/** One Class XI row — Arts and Science streams may differ per date. */
type Class11ExamRow = {
  dateDisplay: string;
  weekday: string;
  artsSubject: string;
  scienceSubject: string;
};

const CLASS_9_IMPROVEMENT_EXAMS: Class9ExamRow[] = [
  { dateDisplay: "8 Apr 2026", weekday: "Wednesday", subject: "Maths" },
  { dateDisplay: "9 Apr 2026", weekday: "Thursday", subject: "Hindi" },
  { dateDisplay: "10 Apr 2026", weekday: "Friday", subject: "Science" },
  { dateDisplay: "11 Apr 2026", weekday: "Saturday", subject: "English" },
  { dateDisplay: "13 Apr 2026", weekday: "Monday", subject: "Social Science" },
];

const CLASS_11_IMPROVEMENT_EXAMS: Class11ExamRow[] = [
  {
    dateDisplay: "8 Apr 2026",
    weekday: "Wednesday",
    artsSubject: "Home Science",
    scienceSubject: "Maths or Home Science",
  },
  {
    dateDisplay: "9 Apr 2026",
    weekday: "Thursday",
    artsSubject: "Fine Arts",
    scienceSubject: "Fine Arts",
  },
  {
    dateDisplay: "10 Apr 2026",
    weekday: "Friday",
    artsSubject: "Sociology",
    scienceSubject: "Chemistry",
  },
  {
    dateDisplay: "11 Apr 2026",
    weekday: "Saturday",
    artsSubject: "History",
    scienceSubject: "Biology",
  },
  {
    dateDisplay: "13 Apr 2026",
    weekday: "Monday",
    artsSubject: "Pol. Science",
    scienceSubject: "Physics",
  },
  {
    dateDisplay: "15 Apr 2026",
    weekday: "Wednesday",
    artsSubject: "English",
    scienceSubject: "English",
  },
];

type ExamTab = "ix" | "xi";

/**
 * Why: Improvement exam dates are time‑critical; they must surface immediately and scan fast on phones.
 * What: Priority gradient banner + date-range chips, mobile tabs (IX / XI) to halve scroll, enlarged row type, tables on `md+`, and official scan download.
 * Where: Homepage `#exam-schedule`, placed high in `app/page.tsx` (directly after hero).
 * When: Update data arrays + PNG when the office publishes a new routine.
 * Who: Class IX & XI students and parents.
 * How: `useState` for the mobile tab; `hidden md:block` / `md:hidden` to swap tabbed vs split layout; banner holds the single `h2` for `aria-labelledby`.
 */
export function ImprovementExamSection() {
  const [activeTab, setActiveTab] = useState<ExamTab>("ix");

  return (
    <section
      id="exam-schedule"
      className="border-y border-brand-300/40 bg-gradient-to-b from-brand-100/50 via-background to-brand-50/30"
      aria-labelledby="exam-schedule-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <FadeInWhenVisible>
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-brand-600 via-brand-600 to-sky-500 p-4 text-white shadow-xl shadow-brand-600/30 ring-1 ring-white/20 sm:rounded-3xl sm:p-6">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-white/20 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 -left-10 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm ring-2 ring-white/30 sm:h-14 sm:w-14">
                  <CalendarDays className="h-7 w-7 sm:h-8 sm:w-8" aria-hidden />
                </span>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/85 sm:text-xs">
                    Official · improvement exams
                  </p>
                  <h2
                    id="exam-schedule-heading"
                    className="mt-1 font-[family-name:var(--font-plus-jakarta)] text-xl font-extrabold leading-tight tracking-tight sm:text-3xl"
                  >
                    April 2026 schedule
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-snug text-white/90 sm:text-base">
                    Radiant Star Education Centre, Kanglatongbi —{" "}
                    <span className="font-semibold text-white">Class IX &amp; XI</span>. First paper{" "}
                    <span className="whitespace-nowrap font-bold">8 Apr</span>; Class XI ends{" "}
                    <span className="whitespace-nowrap font-bold">15 Apr</span>.
                  </p>
                </div>
              </div>
              <a
                href={IMPROVEMENT_EXAM_ROUTINE_APRIL_2026_PNG}
                download
                className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-bold text-brand-700 shadow-lg transition hover:bg-brand-50 sm:w-auto sm:self-center"
              >
                <Download className="h-4 w-4 shrink-0" aria-hidden />
                Download notice
              </a>
            </div>

            <div className="relative mt-4 flex flex-wrap gap-2 border-t border-white/25 pt-4 sm:mt-5 sm:gap-3 sm:pt-5">
              <span className="inline-flex items-center rounded-full bg-black/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm sm:text-sm">
                Class IX · 5 papers · 8–13 Apr
              </span>
              <span className="inline-flex items-center rounded-full bg-black/15 px-3 py-1.5 text-xs font-bold backdrop-blur-sm sm:text-sm">
                Class XI · Arts &amp; Science · 6 days · 8–15 Apr
              </span>
            </div>
          </div>
        </FadeInWhenVisible>

        <p className="mt-4 text-center text-xs font-semibold uppercase tracking-wide text-brand-700 md:hidden">
          Tap a class — see full dates below
        </p>
        <div
          className="mt-3 flex gap-2 rounded-2xl border border-brand-200/80 bg-surface/90 p-1.5 shadow-sm md:hidden"
          role="tablist"
          aria-label="Choose class for exam schedule"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "ix"}
            id="exam-tab-ix"
            aria-controls="exam-panel-ix"
            onClick={() => setActiveTab("ix")}
            className={`flex-1 rounded-xl py-3 text-sm font-bold transition ${
              activeTab === "ix"
                ? "bg-gradient-to-r from-brand-600 to-sky-500 text-white shadow-md"
                : "text-slate-600 hover:bg-brand-50"
            }`}
          >
            Class IX
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "xi"}
            id="exam-tab-xi"
            aria-controls="exam-panel-xi"
            onClick={() => setActiveTab("xi")}
            className={`flex-1 rounded-xl py-3 text-sm font-bold transition ${
              activeTab === "xi"
                ? "bg-gradient-to-r from-brand-600 to-sky-500 text-white shadow-md"
                : "text-slate-600 hover:bg-brand-50"
            }`}
          >
            Class XI
          </button>
        </div>

        <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-2 lg:gap-8">
          <div
            id="exam-panel-ix"
            role="tabpanel"
            aria-labelledby="exam-tab-ix"
            className={`${activeTab === "ix" ? "block" : "hidden"} md:block`}
          >
            <FadeInWhenVisible delay={0.04}>
              <div className="h-full rounded-3xl border border-white/70 bg-surface/95 p-5 shadow-[0_20px_50px_-24px_rgb(15_23_42/0.15)] ring-1 ring-brand-200/40 backdrop-blur-sm sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-brand-700">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-md shadow-brand-500/25">
                    <CalendarRange className="h-5 w-5 shrink-0" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-slate-900 sm:text-xl">
                      Class IX — improvement exam
                    </h3>
                    <p className="text-sm text-slate-600">One subject per date.</p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 md:hidden" aria-label="Class IX exam dates">
                  {CLASS_9_IMPROVEMENT_EXAMS.map((row) => (
                    <li
                      key={row.dateDisplay}
                      className="rounded-2xl border-2 border-brand-200/60 bg-gradient-to-br from-brand-50 to-white px-4 py-3.5 shadow-sm"
                    >
                      <p className="text-base font-extrabold text-slate-900">
                        {row.dateDisplay}
                        <span className="ml-2 text-sm font-semibold text-slate-500">· {row.weekday}</span>
                      </p>
                      <p className="mt-1.5 text-base font-semibold text-brand-800">{row.subject}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 hidden overflow-x-auto rounded-2xl border-2 border-brand-200/50 md:block">
                  <table className="w-full min-w-[320px] text-left text-base">
                    <caption className="sr-only">Class IX improvement examination routine</caption>
                    <thead className="bg-brand-100/90 text-slate-900">
                      <tr>
                        <th scope="col" className="px-4 py-3.5 font-bold">
                          Date
                        </th>
                        <th scope="col" className="px-4 py-3.5 font-bold">
                          Day
                        </th>
                        <th scope="col" className="px-4 py-3.5 font-bold">
                          Subject
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 bg-white/80">
                      {CLASS_9_IMPROVEMENT_EXAMS.map((row) => (
                        <tr key={row.dateDisplay} className="text-slate-800">
                          <th scope="row" className="px-4 py-3.5 font-bold text-slate-900">
                            {row.dateDisplay}
                          </th>
                          <td className="px-4 py-3.5 font-medium">{row.weekday}</td>
                          <td className="px-4 py-3.5 font-semibold text-brand-800">{row.subject}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          <div
            id="exam-panel-xi"
            role="tabpanel"
            aria-labelledby="exam-tab-xi"
            className={`${activeTab === "xi" ? "block" : "hidden"} md:block`}
          >
            <FadeInWhenVisible delay={0.08}>
              <div className="h-full rounded-3xl border border-white/70 bg-surface/95 p-5 shadow-[0_20px_50px_-24px_rgb(15_23_42/0.15)] ring-1 ring-sky-200/50 backdrop-blur-sm sm:p-8">
                <div className="flex flex-wrap items-center gap-3 text-brand-700">
                  <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-brand-600 text-white shadow-md shadow-sky-500/25">
                    <CalendarRange className="h-5 w-5 shrink-0" aria-hidden />
                  </span>
                  <div>
                    <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-bold text-slate-900 sm:text-xl">
                      Class XI — Arts / Science
                    </h3>
                    <p className="text-sm text-slate-600">
                      Check your stream; some papers are shared.
                    </p>
                  </div>
                </div>

                <ul className="mt-5 space-y-3 md:hidden" aria-label="Class XI exam dates">
                  {CLASS_11_IMPROVEMENT_EXAMS.map((row) => (
                    <li
                      key={row.dateDisplay}
                      className="rounded-2xl border-2 border-sky-200/70 bg-gradient-to-br from-sky-50 to-white px-4 py-3.5 shadow-sm"
                    >
                      <p className="text-base font-extrabold text-slate-900">
                        {row.dateDisplay}
                        <span className="ml-2 text-sm font-semibold text-slate-500">· {row.weekday}</span>
                      </p>
                      <dl className="mt-3 grid gap-2 text-sm sm:text-base">
                        <div className="rounded-xl bg-white/90 px-3 py-2 ring-1 ring-brand-200/50">
                          <dt className="text-[11px] font-bold uppercase tracking-wide text-brand-700">
                            Arts
                          </dt>
                          <dd className="font-semibold text-slate-900">{row.artsSubject}</dd>
                        </div>
                        <div className="rounded-xl bg-white/90 px-3 py-2 ring-1 ring-sky-200/50">
                          <dt className="text-[11px] font-bold uppercase tracking-wide text-sky-700">
                            Science
                          </dt>
                          <dd className="font-semibold text-slate-900">{row.scienceSubject}</dd>
                        </div>
                      </dl>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 hidden overflow-x-auto rounded-2xl border-2 border-sky-200/50 md:block">
                  <table className="w-full min-w-[400px] text-left text-base">
                    <caption className="sr-only">
                      Class XI Arts and Science improvement examination routine
                    </caption>
                    <thead className="bg-sky-100/95 text-slate-900">
                      <tr>
                        <th scope="col" className="px-3 py-3.5 font-bold">
                          Date
                        </th>
                        <th scope="col" className="px-3 py-3.5 font-bold">
                          Day
                        </th>
                        <th scope="col" className="px-3 py-3.5 font-bold">
                          Arts
                        </th>
                        <th scope="col" className="px-3 py-3.5 font-bold">
                          Science
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200/80 bg-white/80">
                      {CLASS_11_IMPROVEMENT_EXAMS.map((row) => (
                        <tr key={row.dateDisplay} className="text-slate-800">
                          <th scope="row" className="px-3 py-3.5 font-bold text-slate-900">
                            {row.dateDisplay}
                          </th>
                          <td className="px-3 py-3.5 font-medium whitespace-nowrap">{row.weekday}</td>
                          <td className="px-3 py-3.5 font-semibold text-brand-900">{row.artsSubject}</td>
                          <td className="px-3 py-3.5 font-semibold text-sky-950">{row.scienceSubject}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
