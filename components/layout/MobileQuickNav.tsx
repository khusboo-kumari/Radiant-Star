import Link from "next/link";
import { Banknote, CalendarDays, FolderOpen, Home, Phone } from "lucide-react";

const ITEMS = [
  { href: "#top", label: "Home", icon: Home },
  { href: "#exam-schedule", label: "Exams", icon: CalendarDays },
  { href: "#fee-structure", label: "Fees", icon: Banknote },
  { href: "#documents", label: "Disclosure", icon: FolderOpen },
  { href: "tel:+919862669585", label: "Call", icon: Phone },
] as const;

/**
 * Why: Most visitors use phones; a thumb-friendly dock cuts scrolling back to key anchors and the office line.
 * What: Fixed bottom bar with five icon+label targets (hidden from `lg` where the full header suffices).
 * Where: Rendered once in `app/page.tsx` beside header/footer; `main` gets bottom padding so content clears it.
 * When: Always visible on small/medium viewports while the homepage is open.
 * Who: Mobile parents jumping to exams, fees, documents, or calling the school (full nav stays in the menu).
 * How: Plain links with Lucide icons, safe-area padding, and high-contrast glass styling.
 */
export function MobileQuickNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/40 bg-surface/90 px-2 pt-2 pb-[max(0.35rem,env(safe-area-inset-bottom))] shadow-[0_-12px_40px_-12px_rgb(15_23_42/0.14)] backdrop-blur-xl lg:hidden"
      aria-label="Quick navigation"
    >
      <ul className="mx-auto flex max-w-lg items-stretch justify-between gap-0.5 pb-2">
        {ITEMS.map((item) => {
          const Icon = item.icon;
          const className =
            "flex min-w-0 flex-1 flex-col items-center gap-1 rounded-xl py-2 text-[10px] font-semibold text-slate-600 transition active:scale-[0.97] hover:bg-brand-50 hover:text-brand-700";

          if (item.href.startsWith("tel:")) {
            return (
              <li key={item.href} className="min-w-0 flex-1">
                <a href={item.href} className={className}>
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-sky-500 text-white shadow-md shadow-brand-500/25">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <span className="truncate">{item.label}</span>
                </a>
              </li>
            );
          }

          return (
            <li key={item.href} className="min-w-0 flex-1">
              <Link
                href={item.href}
                className={className}
                aria-label={item.href === "#documents" ? "Mandatory Public Disclosure" : undefined}
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-sm ring-1 ring-slate-200/80">
                  <Icon className="h-4 w-4" strokeWidth={2} aria-hidden />
                </span>
                <span className="truncate">{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
