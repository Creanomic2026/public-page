import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/lib/theme";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_TAGLINE } from "@/lib/constants";

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
      <head>
        {/* Anti-flash theme script — runs BEFORE React hydration */}
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        {/* Preconnect for Google Fonts performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased transition-colors duration-300">
        {/* Skip to content (accessibility) */}
        <a
          href="#hero"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100]
            focus:px-4 focus:py-2 focus:rounded-full focus:text-sm focus:font-semibold focus:text-white"
          style={{ background: "linear-gradient(135deg, #522A92, #D20A81)" }}
        >
          Skip to main content
        </a>

        <ThemeProvider>
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
