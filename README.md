# Radiant Star Education Centre — Website

Next.js + Tailwind CSS marketing homepage for **Radiant Star Education Centre** (Manipur). Sections cover hero, academics, board results, facilities, gallery, notices, documents, and admissions CTA.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content you will replace later

- **Copy & stats:** Board result numbers, topper names, notice text, and contact details are placeholders.
- **Hero images:** The header cycles every 2s through five photos in `public/`: `campus-hero.png`, `campus-assembly.png`, `campus-hero-slide-building.png`, `campus-hero-peace-banner.png`, `campus-hero-wide-lawn.png`. Edit `HERO_SLIDES` in `components/home/HeroSection.tsx` to add/remove or reorder.
- **Gallery:** Real photos live in `public/gallery/` (`campus-tug-of-war.png`, `campus-computer-lab.png`, `campus-01.png`). Add files there and extend `GALLERY_ITEMS` in `components/home/GalleryPreviewSection.tsx`.
- **PDF downloads:** Register new files in `lib/site-documents.ts` and `components/home/DocumentsSection.tsx`. Current files in `public/documents/`:
  - `fee-structure-2025-26.pdf`
  - `academic-calendar-2026-27.pdf`
  - `management-committee.pdf`
  - `noc.pdf`
  - `water-sanitary-certificate.pdf`
  - `pta.pdf`
  - `fire-safety-2026.pdf`

## Theme

- **Page background:** Soft blue-grey (`--background` in `app/globals.css`) instead of harsh white for easier long reading.
- **Panels / cards:** Slightly lighter `--surface` for header, footer, and card chrome.

## Stack

- [Next.js](https://nextjs.org) App Router
- [Tailwind CSS](https://tailwindcss.com) v4
- [Framer Motion](https://www.framer.com/motion/) (scroll reveals + hero motion)
- [Lucide](https://lucide.dev) icons

## Build

```bash
npm run build
npm start
```

If you see a Turbopack warning about multiple `package-lock.json` files, remove or relocate the extra lockfile outside this project, or follow the linked Next.js docs for `turbopack.root`.
