import Image from "next/image";
import { SPONSORS, MEDIA_PARTNERS } from "@/data/sponsors";

/**
 * Sponsor Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Custom image header: sponsor-media-partner.png
 * - Logos grid for official sponsors & media partners
 * - Content centered
 */
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

        {/* Section Image Header with generous ~64px gap to content */}
        <div className="flex justify-center items-center mb-14 sm:mb-16 md:mb-20 w-full text-center">
          <Image
            src="/images/headers/sponsor-media-partner.png"
            alt="Sponsor dan Media Partner"
            width={1024}
            height={102}
            className="h-auto object-contain mx-auto"
            style={{ width: "clamp(300px, 60vw, 740px)", display: "block", margin: "0 auto" }}
            priority
            unoptimized
          />
        </div>

        {/* ── Official Sponsors ── */}
        <div className="mb-14 w-full flex flex-col items-center justify-center text-center">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-6 text-[#0B24F3] mx-auto gap-y-3"
            style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
          >
            Official Sponsors
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mx-auto w-full"
            style={{ maxWidth: "900px", margin: "0 auto" }}
          >
            {hasSponsors
              ? SPONSORS.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website ?? "#"}
                    target={sponsor.website ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={sponsor.name}
                    className="block transition-transform duration-200 hover:-translate-y-1 w-32 sm:w-36 md:w-40"
                  >
                    <div className="w-full h-14 bg-white rounded-lg border-2 border-[#0B0F19] shadow-[3px_3px_0px_#0B0F19] flex items-center justify-center p-2">
                      <span className="text-xs font-bold text-[#0B0F19]">{sponsor.name}</span>
                    </div>
                  </a>
                ))
              : Array.from({ length: PLACEHOLDER_SPONSORS }).map((_, i) => (
                  <div
                    key={i}
                    className="w-32 sm:w-36 md:w-40 h-14 bg-white rounded-lg border-2 border-[#0B0F19] shadow-[3px_3px_0px_#0B0F19] flex items-center justify-center p-2"
                  >
                    <span className="text-xs font-bold text-gray-400">Sponsor {i + 1}</span>
                  </div>
                ))}
          </div>
        </div>

        {/* ── Media Partners ── */}
        <div className="w-full flex flex-col items-center justify-center text-center gap-y-3">
          <p
            className="text-center text-xs font-bold uppercase tracking-widest mb-6 text-[#F849C1] mx-auto"
            style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
          >
            Media Partners
          </p>
          <div
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-5 mx-auto w-full"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            {hasMedia
              ? MEDIA_PARTNERS.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.website ?? "#"}
                    target={partner.website ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={partner.name}
                    className="block transition-transform duration-200 hover:-translate-y-1 w-28 sm:w-32"
                  >
                    <div className="w-full h-12 bg-white rounded-lg border-2 border-[#0B0F19] shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center p-2">
                      <span className="text-[11px] font-bold text-[#0B0F19]">{partner.name}</span>
                    </div>
                  </a>
                ))
              : Array.from({ length: PLACEHOLDER_MEDIA }).map((_, i) => (
                  <div
                    key={i}
                    className="w-28 sm:w-32 h-12 bg-white rounded-lg border-2 border-[#0B0F19] shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center p-2"
                  >
                    <span className="text-[11px] font-bold text-gray-400">Media {i + 1}</span>
                  </div>
                ))}
          </div>
        </div>

      </div>
    </section>
  );
}
