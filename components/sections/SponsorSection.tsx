import Image from "next/image";
import { SPONSORS, MEDIA_PARTNERS } from "@/data/sponsors";
import Reveal from "@/components/anim/Reveal";
import { Stagger, StaggerItem } from "@/components/anim/Stagger";
import type { Sponsor } from "@/types";

/**
 * Sponsor Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Custom image header: sponsor-media-partner.png
 * - Logos grid for official sponsors & media partners
 * - Logos with white artwork use `dark: true` so they stay visible
 * - Content centered
 */

function LogoCard({
  sponsor,
  size = "md",
}: {
  sponsor: Sponsor;
  size?: "md" | "lg";
}) {
  const tile = (
    <div
      title={sponsor.name}
      className={`relative flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-[#0B0F19] shadow-[3px_3px_0px_#0B0F19] ${
        size === "lg" ? "h-20" : "h-16"
      } ${sponsor.dark ? "bg-[#0B0F19]" : "bg-white"}`}
    >
      <Image
        src={sponsor.logo}
        alt={sponsor.name}
        fill
        sizes={size === "lg" ? "160px" : "128px"}
        className="object-contain p-2"
        unoptimized
      />
    </div>
  );

  if (!sponsor.website) {
    return (
      <div className="block transition-transform duration-200 hover:-translate-y-1">
        {tile}
      </div>
    );
  }

  return (
    <a
      href={sponsor.website}
      target="_blank"
      rel="noopener noreferrer"
      title={sponsor.name}
      className="block transition-transform duration-200 hover:-translate-y-1"
    >
      {tile}
    </a>
  );
}

export default function SponsorSection() {
  const PLACEHOLDER_SPONSORS = 6;
  const PLACEHOLDER_MEDIA = 5;
  const hasSponsors = SPONSORS.length > 0;
  const hasMedia = MEDIA_PARTNERS.length > 0;

  return (
    <section
      id="sponsor"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center">

        {/* Section Image Header with golden ornament decorations */}
        <Reveal className="relative flex justify-center items-center mb-14 sm:mb-16 md:mb-20 w-full text-center" y={22}>
          <Image
            src="/images/icons/gold-ornament.png"
            alt=""
            aria-hidden
            width={220}
            height={220}
            className="pointer-events-none absolute left-[4%] top-1/2 hidden w-16 -translate-y-1/2 -rotate-12 opacity-80 sm:block md:w-24 lg:w-28"
            unoptimized
          />
          <Image
            src="/images/headers/sponsor-media-partner.png"
            alt="Sponsor dan Media Partner"
            width={1024}
            height={102}
            className="h-auto object-contain mx-auto relative z-10"
            style={{ width: "clamp(300px, 60vw, 740px)", display: "block", margin: "0 auto" }}
            priority
            unoptimized
          />
          <Image
            src="/images/icons/gold-ornament.png"
            alt=""
            aria-hidden
            width={220}
            height={220}
            className="pointer-events-none absolute right-[4%] top-1/2 hidden w-16 -translate-y-1/2 rotate-12 opacity-80 sm:block md:w-24 lg:w-28"
            unoptimized
          />
        </Reveal>

        {/* ── Official Sponsors ── */}
        <div className="mb-14 w-full flex flex-col items-center justify-center text-center">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-6 text-[#0B24F3] mx-auto gap-y-3"
            style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
          >
            Official Sponsors
          </p>
          <Stagger
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mx-auto w-full max-w-[900px]"
            gap={0.07}
          >
              {hasSponsors
                ? SPONSORS.map((sponsor) => (
                    <StaggerItem key={sponsor.id} className="w-32 sm:w-36 md:w-40">
                      <LogoCard sponsor={sponsor} size="lg" />
                    </StaggerItem>
                  ))
                : Array.from({ length: PLACEHOLDER_SPONSORS }).map((_, i) => (
                    <StaggerItem key={i} className="w-32 sm:w-36 md:w-40">
                      <div className="w-full h-20 bg-white rounded-lg border-2 border-[#0B0F19] shadow-[3px_3px_0px_#0B0F19] flex items-center justify-center p-2">
                        <span className="text-xs font-bold text-gray-400">Sponsor {i + 1}</span>
                      </div>
                    </StaggerItem>
                  ))}
          </Stagger>
        </div>

        {/* ── Media Partners ── */}
        <div className="w-full flex flex-col items-center justify-center text-center gap-y-3">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-6 text-[#F849C1] mx-auto"
            style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
          >
            Media Partners
          </p>
          <Stagger
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mx-auto w-full max-w-[980px]"
            gap={0.06}
          >
            {hasMedia
              ? MEDIA_PARTNERS.map((partner) => (
                  <StaggerItem key={partner.id} className="w-28 sm:w-32">
                    <LogoCard sponsor={partner} size="md" />
                  </StaggerItem>
                ))
              : Array.from({ length: PLACEHOLDER_MEDIA }).map((_, i) => (
                  <StaggerItem key={i} className="w-28 sm:w-32">
                    <div className="w-full h-16 bg-white rounded-lg border-2 border-[#0B0F19] shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center p-2">
                      <span className="text-[11px] font-bold text-gray-400">Media {i + 1}</span>
                    </div>
                  </StaggerItem>
                ))}
          </Stagger>
        </div>

      </div>
    </section>
  );
}
