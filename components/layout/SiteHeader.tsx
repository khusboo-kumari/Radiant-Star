"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NAV_LINKS = [
  { href: "#why-us", label: "Why Us" },
  { href: "#academics", label: "Academics" },
  { href: "#fee-structure", label: "Fees" },
  { href: "#results", label: "Board Results" },
  { href: "#facilities", label: "Facilities" },
  { href: "#gallery", label: "Gallery" },
  { href: "#documents", label: "Documents" },
  { href: "#announcements", label: "Notices" },
] as const;

/**
 * Why: Primary navigation must work on phones (tap targets, overlay menu) and desktops (inline links).
 * What: Sticky header with brand lockup, anchor navigation, and a highlighted Admissions CTA.
 * Where: Rendered once in `app/page.tsx` above the hero.
 * When: Visible on initial load; becomes slightly more opaque on scroll (future enhancement possible).
 * Who: The site visitor taps/clicks links; this component owns open/close state for mobile.
 * How: `useState` toggles the drawer; `lucide-react` icons for affordances.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-brand-200/60 bg-surface/90 backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href="#top"
          className="group flex min-w-0 items-center gap-2 rounded-xl px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
        >
          <span className="relative h-11 w-11 shrink-0 overflow-hidden transition-transform group-hover:scale-[1.02]">
            <Image
              src="/school-logo.png"
              alt="Radiant Star Education Centre logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="whitespace-nowrap font-[family-name:var(--font-plus-jakarta)] text-[10px] font-semibold uppercase tracking-[0.03em] text-slate-900 sm:text-xs md:text-sm lg:text-base">
            RADIANT STAR EDUCATION CENTRE
          </span>
        </Link>

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="#admissions"
            className="hidden rounded-full bg-brand-600 px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:bg-brand-700 sm:inline-flex"
          >
            Admissions Open
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300/80 bg-surface p-2 text-slate-800 shadow-sm transition hover:border-brand-200 hover:text-brand-700 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Toggle menu</span>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-brand-200/60 bg-surface px-4 pb-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-6xl flex-col gap-1 pt-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-700 hover:bg-brand-50"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-brand-600 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Admissions Open
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
