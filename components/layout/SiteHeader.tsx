"use client";

import {
  Building2,
  CalendarDays,
  FolderOpen,
  GraduationCap,
  Heart,
  ImageIcon,
  Menu,
  Sparkles,
  Trophy,
  Wallet,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#why-us", label: "Why Us", icon: Heart },
  { href: "#academics", label: "Academics", icon: GraduationCap },
  { href: "#fee-structure", label: "Fees", icon: Wallet },
  { href: "#results", label: "Board Results", icon: Trophy },
  { href: "#facilities", label: "Facilities", icon: Building2 },
  { href: "#gallery", label: "Gallery", icon: ImageIcon },
  { href: "#documents", label: "Mandatory Public Disclosure", icon: FolderOpen },
  { href: "#exam-schedule", label: "Exams", icon: CalendarDays },
] as const;

/**
 * Why: Primary navigation must work on phones (drawer + thumb reach) and desktops (scannable pills).
 * What: Sticky glass header with scroll depth, desktop links inside a rounded glass rail, mobile menu rows with icons.
 * Where: Rendered once in `app/page.tsx` above the hero.
 * When: Shadow intensifies after scroll; mobile drawer toggles on menu tap.
 * Who: Site visitors; this component owns `open` state and `scrolled` for affordances.
 * How: `useState` + `useEffect` scroll listener; Lucide icons per route for a current, app-like feel.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[box-shadow,background-color] duration-300 ${
        scrolled
          ? "border-brand-200/80 bg-surface/95 shadow-[0_10px_40px_-18px_rgb(15_23_42/0.18)] backdrop-blur-xl"
          : "border-brand-200/50 bg-surface/80 backdrop-blur-md"
      }`}
    >
      <div className="flex w-full items-center justify-between gap-3 px-3 py-2.5 sm:gap-4 sm:px-6 lg:px-8">
        <Link
          href="#top"
          title="Radiant Star Education Centre"
          className="group flex min-w-0 max-w-[min(100%,calc(100vw-8rem))] items-center gap-2 rounded-xl px-1 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 sm:max-w-none"
        >
          <span className="relative h-10 w-10 shrink-0 overflow-hidden transition-transform group-hover:scale-[1.03] sm:h-11 sm:w-11">
            <Image
              src="/school-logo.png"
              alt="Radiant Star Education Centre logo"
              fill
              sizes="44px"
              className="object-contain"
              priority
            />
          </span>
          <span className="truncate font-[family-name:var(--font-plus-jakarta)] text-[10px] font-bold uppercase leading-tight tracking-[0.04em] text-slate-900 sm:whitespace-nowrap sm:text-xs md:text-sm lg:text-base">
            RADIANT STAR EDUCATION CENTRE
          </span>
        </Link>

        <nav
          className="hidden items-center gap-0.5 rounded-full border border-white/60 bg-white/50 px-1.5 py-1 shadow-card backdrop-blur-md lg:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full font-semibold text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700 ${
                link.href === "#documents"
                  ? "max-w-[7.5rem] px-2 py-1.5 text-center text-[10px] leading-tight xl:max-w-[8.5rem] xl:text-[11px]"
                  : "px-3 py-2 text-xs xl:px-3.5 xl:text-[13px]"
              }`}
            >
              {link.href === "#documents" ? (
                <span className="block whitespace-normal">{link.label}</span>
              ) : (
                link.label
              )}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="#admissions"
            className="hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-4 py-2 text-xs font-bold text-white shadow-[0_8px_24px_-6px_rgb(37_99_235/0.45)] transition hover:brightness-105 sm:inline-flex md:text-sm"
          >
            <Sparkles className="h-3.5 w-3.5 opacity-90" aria-hidden />
            Admissions
          </Link>
          <Link
            href="#admissions"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-brand-600 to-sky-500 px-3 py-2 text-[11px] font-bold text-white shadow-md shadow-brand-500/30 sm:hidden"
          >
            Apply
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 p-2 text-slate-800 shadow-sm transition hover:border-brand-200 hover:text-brand-700 lg:hidden"
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
          className="max-h-[min(70vh,calc(100dvh-5rem))] overflow-y-auto border-t border-brand-200/60 bg-surface/98 px-3 pb-4 backdrop-blur-xl lg:hidden"
        >
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-2 pt-3 sm:grid-cols-3">
            {NAV_LINKS.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/80 px-3 py-3 text-sm font-semibold text-slate-800 shadow-sm transition active:scale-[0.98] hover:border-brand-200 hover:bg-brand-50/80"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-brand-500/15 to-sky-500/10 text-brand-600">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <span className="min-w-0 leading-tight">{link.label}</span>
                </Link>
              );
            })}
            <Link
              href="#admissions"
              onClick={() => setOpen(false)}
              className="col-span-2 flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-brand-600 to-sky-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-500/25 sm:col-span-3"
            >
              <Sparkles className="h-4 w-4" aria-hidden />
              Admissions open
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
