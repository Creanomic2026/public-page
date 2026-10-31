"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS } from "@/data/navigation";
import { SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Icon from "@/components/ui/Icon";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <header className="fixed left-3 right-3 top-3 z-50 mx-auto max-w-[1280px] rounded-full border border-[#e8bb16] bg-[#ffd735] shadow-[0_3px_0_#102b82]">
      <nav className="mx-auto max-w-[1280px] px-3 md:px-4">
        <div className="flex h-11 items-center justify-between">
          <Link
            href="/"
            className="group flex shrink-0 items-center"
            aria-label={SITE_NAME}
            onClick={() => setIsMobileOpen(false)}
          >
            <Image
              src="/icons/BIRU.png"
              alt="CREANOMIC"
              width={92}
              height={52}
              className="h-8 w-[58px] object-contain transition-transform duration-300 group-hover:scale-105 md:w-[76px]"
            />
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded px-2 py-1 font-label text-[10px] text-[#102b82] transition-colors duration-200 hover:bg-[#fff0a8] hover:text-[#d20a81] md:px-3 md:text-xs"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/registrasi"
            className="hidden rounded-full bg-[#102b82] px-3 py-1.5 font-label text-[10px] font-semibold text-white transition-transform hover:-translate-y-0.5 md:inline-flex md:text-xs"
          >
            Daftar
          </Link>

          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#102b82] transition-colors hover:bg-[#fff0a8] md:hidden"
            onClick={() => setIsMobileOpen((open) => !open)}
            aria-label={isMobileOpen ? "Tutup navigasi" : "Buka navigasi"}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-navigation"
          >
            <Icon name={isMobileOpen ? "x" : "menu"} size={20} />
          </button>
        </div>

        <div
          id="mobile-navigation"
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            isMobileOpen ? "max-h-[600px] pb-3 opacity-100" : "max-h-0 opacity-0"
          )}
          aria-hidden={!isMobileOpen}
        >
          <div className="mt-2 space-y-1 rounded-2xl border border-[#e8bb16] bg-[#ffd735] p-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center rounded-lg px-4 py-2.5 font-label text-sm text-[#102b82] transition-colors hover:bg-[#fff0a8] hover:text-[#d20a81]"
                tabIndex={isMobileOpen ? 0 : -1}
                onClick={() => setIsMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
}
