import Image from "next/image";
import { EVENT_YEAR } from "@/lib/constants";

/**
 * Y2K Pop Art Footer.
 * - Dot-grid white background
 * - Centered copyright text
 * - footer-deco.png full-width, edge-to-edge, cropped to show only the TOP portion
 */
export default function Footer() {
  return (
    <footer id="kontak" className="relative dot-grid-bg pt-6 pb-0 overflow-hidden w-full flex flex-col items-center justify-center">

      {/* Copyright text — centered */}
      <div className="relative z-10 text-center pb-6 px-4 w-full flex flex-col items-center justify-center">
        <p
          className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#0B1BA4]"
          style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
        >
          Crafting digital experiences with creativity
        </p>
        <p
          className="text-[10px] sm:text-[11px] font-semibold text-[#0B1BA4]/60 mt-0.5"
          style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
        >
          © {EVENT_YEAR} Made With 💗 by PIT CREANOMIC All rights reserved. Crafted with passion.
        </p>
      </div>

      {/*
        ── Footer Deco — full viewport width, only top portion visible ──
        overflow-hidden on the outer container clips the bottom half.
        The image is 100vw wide via style width: 100%, object-position top.
        We reveal only ~55% of the image height by constraining the container.
      */}
      <div
        className="relative w-[100vw] select-none pointer-events-none flex justify-center left-1/2 -translate-x-1/2 overflow-hidden"
        style={{
          /* Show only the top ~55% of the asset height */
          height: "clamp(80px, 12vw, 160px)",
          overflow: "hidden",
        }}
      >
        <Image
          src="/images/icons/footer-deco.png"
          alt="CREANOMIC Y2K Footer Decoration"
          fill
          className="object-cover object-top"
          style={{ objectPosition: "center top" }}
          unoptimized
          priority
        />
      </div>
    </footer>
  );
}
