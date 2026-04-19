import { AcademicStructureSection } from "@/components/home/AcademicStructureSection";
import { AdmissionsCtaSection } from "@/components/home/AdmissionsCtaSection";
import { BoardResultsSection } from "@/components/home/BoardResultsSection";
import { DocumentsSection } from "@/components/home/DocumentsSection";
import { FeeStructureSection } from "@/components/home/FeeStructureSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { HeroSection } from "@/components/home/HeroSection";
import { Class10ToppersSection } from "@/components/home/Class10ToppersSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { MobileQuickNav } from "@/components/layout/MobileQuickNav";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * Why: The homepage is the primary marketing surface — it must stitch all story sections in a logical narrative.
 * What: Composes header, all content bands, and footer; Class X toppers spotlight under hero; board results; campus life gallery; documents; then “Why us”, facilities, fees, academic journey, admissions CTA before the footer.
 * Where: Routed at `/` via the App Router (`app/page.tsx`).
 * When: Server-rendered on request (or statically if configured); client islands hydrate inside sections.
 * Who: Next.js renders; visitors consume.
 * How: Import-only composition to keep the route file readable; each section owns its layout details.
 */
export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <Class10ToppersSection />
        <BoardResultsSection />
        <GalleryPreviewSection />
        <WhyChooseSection />
        <DocumentsSection />
        <FacilitiesSection />
        <FeeStructureSection />
        <AcademicStructureSection />
        <AdmissionsCtaSection />
      </main>
      <SiteFooter />
      <MobileQuickNav />
    </>
  );
}
