import { AcademicStructureSection } from "@/components/home/AcademicStructureSection";
import { AdmissionsCtaSection } from "@/components/home/AdmissionsCtaSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { BoardResultsSection } from "@/components/home/BoardResultsSection";
import { DocumentsSection } from "@/components/home/DocumentsSection";
import { FeeStructureSection } from "@/components/home/FeeStructureSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { GalleryPreviewSection } from "@/components/home/GalleryPreviewSection";
import { HeroSection } from "@/components/home/HeroSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";

/**
 * Why: The homepage is the primary marketing surface — it must stitch all story sections in a logical narrative.
 * What: Composes header, all content bands, and footer for Radiant Star Education Centre.
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
        <WhyChooseSection />
        <AcademicStructureSection />
        <BoardResultsSection />
        <FacilitiesSection />
        <GalleryPreviewSection />
        <AnnouncementsSection />
        <FeeStructureSection />
        <DocumentsSection />
        <AdmissionsCtaSection />
      </main>
      <SiteFooter />
    </>
  );
}
