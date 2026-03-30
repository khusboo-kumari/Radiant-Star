"use client";

import {
  Award,
  Building2,
  CalendarDays,
  Droplets,
  FileDown,
  Flame,
  GraduationCap,
  Scale,
  ScrollText,
  ShieldCheck,
  Users,
} from "lucide-react";
import { FadeInWhenVisible } from "@/components/motion/FadeInWhenVisible";
import { SlideInWhenVisible } from "@/components/motion/SlideInWhenVisible";
import { SectionEyebrow } from "@/components/ui/SectionEyebrow";
import {
  ACADEMIC_CALENDAR_2026_27_PDF,
  BUILDING_SAFETY_CERTIFICATE_2026_PNG,
  CBSE_AFFILIATION_EXTENSION_2022_27_PNG,
  FEE_STRUCTURE_2025_26_PDF,
  FIRE_SAFETY_2026_PDF,
  GOVERNMENT_RECOGNITION_ORDER_2004_PNG,
  MANAGEMENT_COMMITTEE_PDF,
  NOC_PDF,
  PTA_PDF,
  REGISTRATION_CERTIFICATE_MSR_1992_PNG,
  WATER_SANITARY_CERTIFICATE_PDF,
} from "@/lib/site-documents";

type DocumentItem = {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: typeof FileDown;
  cta: string;
};

/** Blue shade variants for document cards — cycles for a Lovable-style, varied grid. */
const CARD_BLUE_VARIANTS = [
  "bg-brand-50 border-brand-200",
  "bg-sky-50 border-sky-200",
  "bg-blue-50 border-blue-200",
  "bg-brand-100/90 border-brand-300",
  "bg-sky-100/80 border-sky-300",
  "bg-blue-100/80 border-blue-300",
  "bg-brand-50 border-brand-300",
] as const;

/**
 * Why: Schools must surface fee, calendar, PTA, and statutory certificates in one trustworthy place.
 * What: User-friendly intro; left column lists every document title with anchor jumps; right side keeps the horizontal snap carousel with download CTAs.
 * Where: Homepage `#documents`.
 * When: Cards animate on scroll (once); add entries in `DOCUMENTS` and `lib/site-documents.ts` when new files are published.
 * Who: Parents, auditors, and admin staff.
 * How: Client component; list `href`s target `#doc-{id}` on each card (`scroll-mt` offsets sticky header); `SlideInWhenVisible` for cards.
 */
const DOCUMENTS: DocumentItem[] = [
  {
    id: "fee",
    title: "Fee structure (2025–26)",
    description:
      "Official stage-wise fee circular for the current session. Also linked from the Fees section.",
    icon: FileDown,
    href: FEE_STRUCTURE_2025_26_PDF,
    cta: "Download PDF",
  },
  {
    id: "calendar",
    title: "Academic calendar (2026–27)",
    description: "Term dates, exam windows, holidays, and key school events for the session.",
    icon: CalendarDays,
    href: ACADEMIC_CALENDAR_2026_27_PDF,
    cta: "Download PDF",
  },
  {
    id: "management",
    title: "Management committee",
    description: "Composition and constitution of the school management committee as per norms.",
    icon: Building2,
    href: MANAGEMENT_COMMITTEE_PDF,
    cta: "Download PDF",
  },
  {
    id: "noc",
    title: "NOC",
    description: "No Objection Certificate and related affiliation / compliance documentation.",
    icon: Scale,
    href: NOC_PDF,
    cta: "Download PDF",
  },
  {
    id: "water",
    title: "Water & sanitary certificate",
    description: "Safe drinking water and sanitation compliance certificate on record.",
    icon: Droplets,
    href: WATER_SANITARY_CERTIFICATE_PDF,
    cta: "Download PDF",
  },
  {
    id: "pta",
    title: "PTA",
    description: "Parent–Teacher Association circulars, constitution, or meeting notices.",
    icon: Users,
    href: PTA_PDF,
    cta: "Download PDF",
  },
  {
    id: "fire",
    title: "Fire safety (2026)",
    description: "Fire safety inspection / certificate valid for the noted period.",
    icon: Flame,
    href: FIRE_SAFETY_2026_PDF,
    cta: "Download PDF",
  },
  {
    id: "registration-msr",
    title: "Certificate of registration (1992)",
    description:
      "Society registration under M.S.R. Act, 1989. Regd. No. 2475 / Imphal District (duplicate on file).",
    icon: ScrollText,
    href: REGISTRATION_CERTIFICATE_MSR_1992_PNG,
    cta: "Download scan",
  },
  {
    id: "building-safety",
    title: "Building safety certificate (2026)",
    description:
      "P.W.D. inspection certifying the institutional building safe for educational use (CBSE & state recognition refs on document).",
    icon: ShieldCheck,
    href: BUILDING_SAFETY_CERTIFICATE_2026_PNG,
    cta: "Download scan",
  },
  {
    id: "recognition-order",
    title: "Government recognition order (2004)",
    description:
      "Director of Education (S) order granting provisional recognition (Nursery to VII) with conditions as stated.",
    icon: Award,
    href: GOVERNMENT_RECOGNITION_ORDER_2004_PNG,
    cta: "Download scan",
  },
  {
    id: "cbse-extension",
    title: "CBSE affiliation extension",
    description:
      "SARAS letter: extension of general affiliation up to Senior Secondary (Affiliation No. 1230038, School No. 35305, period on letter).",
    icon: GraduationCap,
    href: CBSE_AFFILIATION_EXTENSION_2022_27_PNG,
    cta: "Download scan",
  },
];

export function DocumentsSection() {
  return (
    <section
      id="documents"
      className="bg-gradient-to-b from-background to-brand-100/35"
      aria-labelledby="documents-heading"
    >
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <FadeInWhenVisible>
          <div className="max-w-2xl">
            <SectionEyebrow>Documents & compliance</SectionEyebrow>
            <h2
              id="documents-heading"
              className="mt-3 font-[family-name:var(--font-plus-jakarta)] text-2xl font-extrabold tracking-tight text-slate-900 sm:mt-4 sm:text-4xl"
            >
              Download official school documents
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:mt-4 sm:text-base">
              Fee details, calendars, notices, and certificates — all in one place.{" "}
              <span className="hidden sm:inline">
                Use the quick list to jump to a file, or swipe through the cards to read more and download.
              </span>
              <span className="sm:hidden">Tap the list below to jump, or swipe the cards to download.</span>
            </p>
          </div>
        </FadeInWhenVisible>

        <div className="mt-8 flex flex-col gap-8 lg:mt-10 lg:flex-row lg:items-start lg:gap-10">
          <aside className="w-full shrink-0 lg:sticky lg:top-28 lg:w-72 lg:max-w-[min(100%,20rem)]">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.12em] text-slate-500">
              All documents
            </p>
            <nav
              aria-label="All available documents"
              className="rounded-2xl border border-brand-200/80 bg-surface/95 p-2 shadow-card ring-1 ring-slate-200/40"
            >
              <ul className="max-h-[min(50vh,20rem)] space-y-0.5 overflow-y-auto pr-1 [scrollbar-width:thin] lg:max-h-[calc(100vh-12rem)]">
                {DOCUMENTS.map((doc) => (
                  <li key={doc.id}>
                    <a
                      href={`#doc-${doc.id}`}
                      className="block rounded-xl px-3 py-2.5 text-sm font-medium leading-snug text-slate-700 transition hover:bg-brand-50 hover:text-brand-800"
                    >
                      {doc.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:mb-3">
              <span className="sm:hidden">Swipe for all docs →</span>
              <span className="hidden sm:inline">Scroll for all documents →</span>
            </div>
            <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {DOCUMENTS.map((doc, index) => {
                const variant = CARD_BLUE_VARIANTS[index % CARD_BLUE_VARIANTS.length];
                const direction = index % 2 === 0 ? "left" : "right";
                return (
                  <SlideInWhenVisible
                    key={doc.id}
                    direction={direction}
                    delay={index * 0.06}
                    className="w-[320px] shrink-0 snap-start sm:w-[360px] lg:w-[400px]"
                  >
                    <article
                      id={`doc-${doc.id}`}
                      className={`flex h-full scroll-mt-28 flex-col rounded-2xl border p-6 shadow-card transition duration-300 hover:-translate-y-1.5 hover:shadow-soft ${variant}`}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/12 to-sky-500/10 text-brand-600 shadow-sm ring-1 ring-brand-200/60">
                          <doc.icon className="h-6 w-6" strokeWidth={2} aria-hidden />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-slate-900">
                            {doc.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-slate-600">
                            {doc.description}
                          </p>
                        </div>
                      </div>
                      <div className="mt-6">
                        <a
                          href={doc.href}
                          download
                          className="inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-500/20 transition hover:brightness-105 hover:shadow-lg sm:w-auto"
                        >
                          {doc.cta}
                        </a>
                      </div>
                    </article>
                  </SlideInWhenVisible>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
