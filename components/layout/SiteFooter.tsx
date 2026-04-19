import Link from "next/link";
import { FileText, Mail, MapPin, Phone } from "lucide-react";

/**
 * Why: Footer is the trust anchor — contact, compliance links, and quick navigation must always be reachable.
 * What: Multi-column footer with contact blocks, quick links, and document shortcuts.
 * Where: Rendered at the bottom of `app/page.tsx` after all homepage sections.
 * When: On every homepage view; links can later point to real routes/PDFs.
 * Who: Visitors seeking address, phone, or downloadable school documents.
 * How: Static JSX with `next/link` for internal anchors and placeholder `href` for future PDF routes.
 */
export function SiteFooter() {
  return (
    <footer className="border-t border-brand-200/60 bg-surface pb-[calc(4.5rem+env(safe-area-inset-bottom))] lg:pb-0">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:gap-10 sm:px-6 sm:py-12 lg:grid-cols-3 lg:px-8 lg:py-14">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500 text-lg font-bold text-white shadow-card">
              R
            </span>
            <div>
              <p className="font-[family-name:var(--font-plus-jakarta)] text-lg font-semibold text-slate-900">
                Radiant Star Education Centre
              </p>
              <p className="text-sm text-slate-500">Manipur, India</p>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-slate-600">
            A caring, modern campus from Nursery to Class 12 — blending strong academics with
            character building and joyful learning.
          </p>
        </div>

        <div>
          <p className="font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold uppercase tracking-wide text-slate-900">
            Quick links
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {[
              ["Why Us", "#why-us"],
              ["Academic structure", "#academics"],
              ["Fee structure", "#fee-structure"],
              ["Board results", "#results"],
              ["Facilities", "#facilities"],
              ["Gallery", "#gallery"],
              ["Mandatory Public Disclosure", "#documents"],
              ["Class X toppers", "#class-x-toppers"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-slate-600 transition hover:text-brand-600"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-[family-name:var(--font-plus-jakarta)] text-sm font-semibold uppercase tracking-wide text-slate-900">
            Contact & documents
          </p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
              <span>
                KANGLATONGBI HATHIKHUWA, IMPHAL WEST, MANIPUR
                <span className="block text-xs text-slate-500">PIN – 795136</span>
              </span>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
              <span>
                <a className="hover:text-brand-600" href="tel:+913880266426">
                  (03880) 266426
                </a>
                <span className="mx-1 text-slate-400">|</span>
                <a className="hover:text-brand-600" href="tel:+919862669585">
                  9862669585
                </a>
                <span className="mx-1 text-slate-400">|</span>
                <a className="hover:text-brand-600" href="tel:+919402057305">
                  9402057305
                </a>
                <span className="mx-1 text-slate-400">|</span>
                <a className="hover:text-brand-600" href="tel:+917005130479">
                  7005130479
                </a>
                <span className="mt-1 block text-xs text-slate-500">
                  Fax: (03880) 266230
                </span>
              </span>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
              <a className="hover:text-brand-600" href="mailto:radiantstar12@gmail.com">
                radiantstar12@gmail.com
              </a>
            </li>
            <li className="flex gap-2">
              <FileText className="mt-0.5 h-4 w-4 shrink-0 text-brand-500" aria-hidden />
              <Link href="#documents" className="hover:text-brand-600">
                Fee structure & compliance PDFs
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-brand-200/40 bg-background">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Radiant Star Education Centre. All rights reserved.</p>
          <p className="text-slate-400">
            Phone:{" "}
            <a className="hover:text-brand-600" href="tel:+919862669585">
              +91 98626 69585
            </a>{" "}
            · Email: radiantstar12@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}
