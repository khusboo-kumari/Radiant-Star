/**
 * Why: Every compliance PDF should resolve from one module so filenames never drift between UI and `public/documents`.
 * What: Public URL paths for school circulars and certificates.
 * Where: Imported by `DocumentsSection`, `FeeStructureSection`, and any future download links.
 * When: Update when a new academic year file replaces an old one (swap file in `public/documents/` + constant if name changes).
 * Who: Maintainers; visitors only see the resolved `/documents/*.pdf` URLs.
 * How: Plain string constants; add new exports when you drop more PDFs into `public/documents/`.
 */
export const FEE_STRUCTURE_2025_26_PDF = "/documents/fee-structure-2025-26.pdf" as const;

export const ACADEMIC_CALENDAR_2026_27_PDF =
  "/documents/academic-calendar-2026-27.pdf" as const;
export const MANAGEMENT_COMMITTEE_PDF = "/documents/management-committee.pdf" as const;
export const NOC_PDF = "/documents/noc.pdf" as const;
export const WATER_SANITARY_CERTIFICATE_PDF =
  "/documents/water-sanitary-certificate.pdf" as const;
export const PTA_PDF = "/documents/pta.pdf" as const;
export const FIRE_SAFETY_2026_PDF = "/documents/fire-safety-2026.pdf" as const;
