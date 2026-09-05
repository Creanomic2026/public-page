import type { Metadata } from "next";
import { Dancing_Script, Montserrat, Noto_Sans, Oswald, Rum_Raisin } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const notoSans = Noto_Sans({ variable: "--font-noto-sans", subsets: ["latin"] });
const oswald = Oswald({ variable: "--font-oswald", subsets: ["latin"] });
const montserrat = Montserrat({ variable: "--font-montserrat", subsets: ["latin"] });
const rumRaisin = Rum_Raisin({ variable: "--font-rum-raisin", weight: "400", subsets: ["latin"] });
const dancingScript = Dancing_Script({ variable: "--font-dancing-script", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CREANOMIC 2026 | Blooming Innovation",
  description: "Creative economy festival by Fakultas Vokasi Universitas Brawijaya.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${notoSans.variable} ${oswald.variable} ${montserrat.variable} ${rumRaisin.variable} ${dancingScript.variable}`}>
        <nav className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-8">
          <div className="mx-auto flex max-w-[1280px] items-center justify-between rounded-full border border-[var(--color-border-subtle)] bg-[rgba(12,15,16,.78)] px-5 py-3 backdrop-blur-xl md:px-7">
            <Link href="/" className="font-display text-xl font-bold tracking-[.12em] text-white">CREA<span className="text-[var(--brand-magenta)]">NOMIC</span></Link>
            <div className="flex items-center gap-4 md:gap-7">
              <Link href="/" className="font-label text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--color-text-secondary)] transition hover:text-white md:text-xs">Home</Link>
              <Link href="/event" className="font-label text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--color-text-secondary)] transition hover:text-white md:text-xs">Events</Link>
              <Link href="/cta" className="font-label text-[10px] font-semibold uppercase tracking-[.12em] text-[var(--color-text-secondary)] transition hover:text-white md:text-xs">Register</Link>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
