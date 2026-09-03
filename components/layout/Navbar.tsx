"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";
import ThemeToggle from "@/components/ui/ThemeToggle";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

/**
 * Vibrant Kinetic Navbar.
 * - Sticky, transparent → glassmorphism on scroll
 * - Logo placeholder (replace with <Image> when ready)
 * - Desktop nav + ThemeToggle + CTA button
 * - Mobile: hamburger with slide-down menu
 */
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "border-b shadow-lg"
          : "border-transparent"
      )}
      style={{
        backgroundColor: isScrolled ? "var(--navbar-bg)" : "transparent",
        borderColor: isScrolled ? "var(--navbar-border)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: isScrolled ? "blur(16px)" : "none",
      }}
    >
      <nav className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-[72px]">

          {/* ── Logo ── */}
          <a
            href="/"
            className="flex items-center gap-3 group shrink-0"
            aria-label={SITE_NAME}
          >
            {/* Logo placeholder — 40x40px */}
            <div className="w-10 h-10 rounded-[var(--radius)] overflow-hidden shrink-0 transition-transform duration-300 group-hover:scale-105">
              <PlaceholderImage label="CREANOMIC Logo" ratio="1/1" />
            </div>
            <span
              className="font-bold text-base tracking-tight transition-all duration-300 group-hover:opacity-80"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--on-surface)",
                letterSpacing: "-0.01em",
              }}
            >
              {SITE_NAME.split(" ")[0]}{" "}
              <span
                className="text-gradient"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {SITE_NAME.split(" ")[1]}
              </span>
            </span>
          </a>

          {/* ── Desktop Nav ── */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="px-3 py-2 rounded-[var(--radius)] text-sm transition-colors duration-200"
                  style={{
                    fontFamily: "var(--font-label)",
                    color: "var(--text-secondary)",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = "var(--on-surface)";
                    (e.target as HTMLElement).style.backgroundColor = "var(--surface-container)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = "var(--text-secondary)";
                    (e.target as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Desktop Actions ── */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <a
              href="/registrasi"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-[var(--glow-btn)] hover:opacity-90"
              style={{
                fontFamily: "var(--font-label)",
                background: "linear-gradient(135deg, #522A92, #D20A81)",
              }}
            >
              Daftar Sekarang
              <Icon name="arrow-right" size={14} />
            </a>
          </div>

          {/* ── Mobile: ThemeToggle + Hamburger ── */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              className="w-9 h-9 flex items-center justify-center rounded-[var(--radius)] transition-colors duration-200"
              style={{ color: "var(--on-surface-variant)" }}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle navigation"
              aria-expanded={isMobileOpen}
            >
              {isMobileOpen ? <Icon name="x" size={20} /> : <Icon name="menu" size={20} />}
            </button>
          </div>
        </div>

        {/* ── Mobile Menu ── */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-400 ease-in-out",
            isMobileOpen ? "max-h-[600px] pb-4 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className="rounded-[var(--radius-xl)] border mt-2 p-3 space-y-1"
            style={{
              backgroundColor: "var(--navbar-bg)",
              borderColor: "var(--navbar-border)",
              backdropFilter: "blur(16px)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="flex items-center gap-2 px-4 py-3 rounded-[var(--radius)] text-sm transition-all duration-200"
                style={{
                  fontFamily: "var(--font-label)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--on-surface)";
                  el.style.backgroundColor = "var(--surface-container)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "var(--text-secondary)";
                  el.style.backgroundColor = "transparent";
                }}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t" style={{ borderColor: "var(--outline-variant)" }}>
              <a
                href="/registrasi"
                className="flex items-center justify-center gap-2 px-4 py-3 rounded-full text-sm font-semibold text-white"
                style={{
                  fontFamily: "var(--font-label)",
                  background: "linear-gradient(135deg, #522A92, #D20A81)",
                }}
                onClick={() => setIsMobileOpen(false)}
              >
                Daftar Sekarang
                <Icon name="arrow-right" size={14} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
