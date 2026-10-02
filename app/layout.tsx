import type { Metadata } from "next";
import { Dancing_Script, Montserrat, Noto_Sans, Oswald, Rum_Raisin } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider, THEME_INIT_SCRIPT } from "@/lib/theme";
import { SITE_NAME, SITE_DESCRIPTION, SITE_URL, SITE_TAGLINE } from "@/lib/constants";

const notoSans = Noto_Sans({ variable: "--font-noto-sans", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const rumRaisin = Rum_Raisin({ variable: "--font-rum-raisin", weight: "400", subsets: ["latin"] });
const dancingScript = Dancing_Script({ variable: "--font-dancing-script", subsets: ["latin"] });

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
        <script dangerouslySetInnerHTML={{ __html: THEME_INIT_SCRIPT }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${notoSans.variable} ${oswald.variable} ${montserrat.variable} ${rumRaisin.variable} ${dancingScript.variable} antialiased transition-colors duration-300`}
      >
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
