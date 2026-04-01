import type { Metadata } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

/**
 * Why: SEO and social previews need accurate titles/descriptions for a real school launch.
 * What: Default metadata for the Radiant Star Education Centre marketing homepage.
 * Where: Consumed by Next.js for `<head>` on all pages until overridden per-route.
 * When: On every document request / static generation.
 * Who: Next.js Metadata API merges this with child route metadata.
 * How: Plain export of the `Metadata` object shape.
 */
export const metadata: Metadata = {
  title: {
    default: "Radiant Star Education Centre | Manipur",
    template: "%s | Radiant Star Education Centre",
  },
  description:
    "Nursery to Class 12 in Manipur — holistic learning, modern facilities, and a strong record of high-scoring board results.",
  keywords: [
    "Radiant Star Education Centre",
    "school Manipur",
    "CBSE",
    "Nursery to Class 12",
    "board exam results",
  ],
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${dmSans.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col text-foreground">
        {children}
      </body>
    </html>
  );
}
