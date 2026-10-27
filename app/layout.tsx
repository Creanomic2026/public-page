import type { Metadata } from "next";
import { Slackey, Work_Sans, Noto_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_TAGLINE } from "@/lib/constants";

const slackey = Slackey({
  variable: "--font-slackey",
  weight: "400",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  keywords: [
    "CREANOMIC", "Creative Economic Expo", "Festival Ekonomi Kreatif",
    "Universitas Brawijaya", "Fakultas Vokasi", "UMKM", "Wirausaha",
    "Kompetisi Bisnis", "Malang", "2026", "Innovation", "Creative Economy",
  ],
  authors: [{ name: "Tim CREANOMIC 2026", url: SITE_URL }],
  creator: "Fakultas Vokasi Universitas Brawijaya",
  openGraph: {
    type:        "website",
    url:         SITE_URL,
    title:       `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    siteName:    SITE_NAME,
  },
  twitter: {
    card:        "summary_large_image",
    title:       `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${slackey.variable} ${workSans.variable} ${notoSans.variable} antialiased`}
        suppressHydrationWarning
      >
        <Navbar />
        <main id="main-content" className="w-full overflow-x-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
