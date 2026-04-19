/**
 * Why: Every compliance file (PDF or scanned image) should resolve from one module so filenames never drift between UI and `public/documents`.
 * What: Public URL paths for school circulars and certificates.
 * Where: Imported by `DocumentsSection`, `FeeStructureSection`, and any future download links.
 * When: Update when a new academic year file replaces an old one (swap file in `public/documents/` + constant if name changes).
 * Who: Maintainers; visitors only see the resolved `/documents/*` URLs.
 * How: Plain string constants; add new exports when you drop more PDFs or PNG scans into `public/documents/`.
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

/** Society registration certificate (M.S.R. Act, 1989) — scanned PNG. */
export const REGISTRATION_CERTIFICATE_MSR_1992_PNG =
  "/documents/registration-certificate-msr-1992.png" as const;
/** P.W.D. building safety inspection — scanned PNG. */
export const BUILDING_SAFETY_CERTIFICATE_2026_PNG =
  "/documents/building-safety-certificate-2026.png" as const;
/** Government of Manipur recognition order — scanned PNG. */
export const GOVERNMENT_RECOGNITION_ORDER_2004_PNG =
  "/documents/government-recognition-order-2004.png" as const;
/** CBSE SARAS affiliation extension letter — scanned PNG. */
export const CBSE_AFFILIATION_EXTENSION_2022_27_PNG =
  "/documents/cbse-affiliation-extension-2022-27.png" as const;

