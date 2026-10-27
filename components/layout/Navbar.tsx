"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

/**
 * Floating Pill Navbar — CREANOMIC 2026.
 * - Always fixed / floating on top while scrolling.
 * - Rounded capsule pill with warm yellow background (#FFE17A).
 * - Generous horizontal padding at ends so Logo and Login never touch the curved edges.
 * - Compact logo size with comfortable vertical breathing room.
 * - Active state features a blue underline pill under the active item (like "Home").
 */
export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/event", label: "Event" },
    { href: "/merch", label: "Merchandise" },
    { href: "/competition", label: "Competition" },
    { href: "/talkshow", label: "Talkshow" },
    { href: "/registrasi", label: "Login" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname?.startsWith(href);
  };

  return (
    <header className="fixed top-3 sm:top-5 left-0 right-0 z-50 flex justify-center px-4 sm:px-6 pointer-events-none">
      <nav
        className="pointer-events-auto relative w-full max-w-[1180px] bg-[#FFE17A] rounded-full shadow-[0_6px_24px_rgba(0,0,0,0.18)] border border-white/30 h-[50px] sm:h-[54px] md:h-[56px] flex items-center justify-between transition-all duration-300"
        style={{
          paddingLeft: "clamp(28px, 3.5vw, 48px)",
          paddingRight: "clamp(36px, 5vw, 64px)",
        }}
        aria-label="Main Navigation"
      >
        {/* ── Logo on the Left (proporsional & lebih pas di ukuran navbar) ── */}
        <Link
          href="/"
          className="flex items-center shrink-0 transition-transform duration-200 hover:scale-105"
          aria-label="CREANOMIC Homepage"
        >
          <Image
            src="/images/logo-creanomic.png"
            alt="CREANOMIC"
            width={1024}
            height={205}
            className="object-contain w-auto h-[18px] sm:h-[21px] md:h-[23px]"
            priority
            unoptimized
          />
        </Link>

        {/* ── Desktop Nav Links (spacing lebih rapat & digeser lebih ke kiri dari ujung) ── */}
        <ul className="hidden md:flex items-center gap-3.5 sm:gap-4 md:gap-5 lg:gap-6 mr-1 sm:mr-2 md:mr-3">
          {navLinks.map((link) => {
            const active = isLinkActive(link.href);
            return (
              <li key={link.href} className="relative flex flex-col items-center">
                <Link
                  href={link.href}
                  className={cn(
                    "text-white font-bold text-[13px] sm:text-[14px] lg:text-[15px] tracking-wide transition-all duration-200 hover:opacity-90 active:scale-95 py-1 px-1",
                    active ? "opacity-100" : "opacity-95 hover:opacity-100"
                  )}
                  style={{
                    fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)",
                    textShadow: "0 1px 3px rgba(0,0,0,0.12)",
                  }}
                >
                  {link.label}
                </Link>

                {/* Blue Underline Indicator (for Active Link) */}
                {active && (
                  <span
                    className="absolute -bottom-1 left-0 right-0 h-[3.5px] bg-[#0B24F3] rounded-full shadow-[0_1px_2px_rgba(11,36,243,0.4)] animate-fade-in"
                  />
                )}
              </li>
            );
          })}
        </ul>

        {/* ── Mobile Hamburger Button ── */}
        <button
          className="md:hidden w-8 h-8 flex items-center justify-center rounded-full bg-white/30 text-white font-bold hover:bg-white/40 transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isMobileOpen}
        >
          <span className="text-xl leading-none text-[#0B24F3]">
            {isMobileOpen ? "✕" : "☰"}
          </span>
        </button>

        {/* ── Mobile Menu Dropdown (Floating style) ── */}
        {isMobileOpen && (
          <div
            className="absolute top-full left-0 right-0 mt-2 bg-[#FFE17A] border-2 border-white/40 rounded-3xl p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] flex flex-col gap-2 md:hidden animate-fade-in"
          >
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "px-4 py-2.5 rounded-full text-base font-bold text-center transition-colors flex items-center justify-center gap-2",
                    active
                      ? "bg-[#0B24F3] text-white shadow-md"
                      : "text-white hover:bg-black/10"
                  )}
                  style={{
                    fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)",
                  }}
                  onClick={() => setIsMobileOpen(false)}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
