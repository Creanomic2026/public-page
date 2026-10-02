import SectionHeader from "@/components/ui/SectionHeader";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { SPONSORS, MEDIA_PARTNERS } from "@/data/sponsors";

/**
 * Sponsor Section — Two-block layout: Sponsors (top) + Media Partners (bottom).
 * No tier distinction — all sponsors shown equally in a responsive grid.
 * Placeholder logos shown when data/sponsors.ts is empty.
 */
export default function SponsorSection() {
  // Fallback placeholder counts when no real data exists
  const PLACEHOLDER_SPONSORS = 6;
  const PLACEHOLDER_MEDIA    = 5;

  const hasSponsors = SPONSORS.length > 0;
  const hasMedia    = MEDIA_PARTNERS.length > 0;

  return (
    <section
      id="sponsor"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--surface-container-low)" }}
    >
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 30% at 50% 100%, rgba(13,38,128,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader
          eyebrow="Pendukung Kami"
          title="Sponsors & Media Partners"
          subtitle="CREANOMIC 2026 didukung oleh berbagai mitra terpercaya dari dunia industri dan media."
          className="mb-16"
        />

        {/* ── Block 1: Sponsors ── */}
        <div className="mb-16">
          {/* Block heading */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--brand-purple))" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border"
              style={{
                fontFamily: "var(--font-label)",
                color: "var(--brand-sky-blue)",
                borderColor: "rgba(42,130,231,0.3)",
                backgroundColor: "rgba(42,130,231,0.08)",
              }}
            >
              Official Sponsors
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--brand-magenta))" }} />
          </div>

          {/* Sponsor logo grid */}
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            {hasSponsors
              ? SPONSORS.map((sponsor) => (
                  <a
                    key={sponsor.id}
                    href={sponsor.website ?? "#"}
                    target={sponsor.website ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={sponsor.name}
                    aria-label={sponsor.name}
                    className="block w-[140px] transition-all duration-300 grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
                  >
                    <PlaceholderImage label={sponsor.name} ratio="3/1" />
                  </a>
                ))
              : Array.from({ length: PLACEHOLDER_SPONSORS }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[140px] opacity-35 hover:opacity-60 transition-opacity duration-300"
                  >
                    <PlaceholderImage label={`Sponsor ${i + 1}`} ratio="3/1" />
                  </div>
                ))}
          </div>
        </div>

        {/* ── Divider ── */}
        <div
          className="h-px w-full mb-16"
          style={{ background: "var(--outline-variant)" }}
        />

        {/* ── Block 2: Media Partners ── */}
        <div>
          {/* Block heading */}
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1" style={{ background: "linear-gradient(to right, transparent, var(--brand-purple))" }} />
            <span
              className="text-xs font-semibold uppercase tracking-[0.14em] px-4 py-1.5 rounded-full border"
              style={{
                fontFamily: "var(--font-label)",
                color: "var(--brand-magenta)",
                borderColor: "rgba(210,10,129,0.3)",
                backgroundColor: "rgba(210,10,129,0.08)",
              }}
            >
              Media Partners
            </span>
            <div className="h-px flex-1" style={{ background: "linear-gradient(to left, transparent, var(--brand-magenta))" }} />
          </div>

          {/* Media partner logo grid — slightly smaller */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
            {hasMedia
              ? MEDIA_PARTNERS.map((partner) => (
                  <a
                    key={partner.id}
                    href={partner.website ?? "#"}
                    target={partner.website ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    title={partner.name}
                    aria-label={partner.name}
                    className="block w-[110px] transition-all duration-300 grayscale hover:grayscale-0 opacity-50 hover:opacity-100"
                  >
                    <PlaceholderImage label={partner.name} ratio="3/1" />
                  </a>
                ))
              : Array.from({ length: PLACEHOLDER_MEDIA }).map((_, i) => (
                  <div
                    key={i}
                    className="w-[110px] opacity-35 hover:opacity-60 transition-opacity duration-300"
                  >
                    <PlaceholderImage label={`Media Partner ${i + 1}`} ratio="3/1" />
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
