import Icon from "@/components/ui/Icon";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { SITE_NAME, SITE_TAGLINE, EVENT_DATE, EVENT_LOCATION } from "@/lib/constants";

/**
 * Hero Section — "Vibrant Kinetic" first impression.
 * - Deep Blue→Purple→Magenta gradient background with neon bloom
 * - Floating Star + Bolt decorative SVGs
 * - Rum Raisin tagline + Oswald gradient title
 * - Primary gradient CTA + Secondary ghost CTA
 * - Placeholder hero banner image with event date badge
 */
export default function HeroSection() {
  const stats = [
    { icon: "calendar" as const, value: "3", label: "Hari Event" },
    { icon: "trophy"   as const, value: "12+", label: "Kompetisi" },
    { icon: "users"    as const, value: "100+", label: "Peserta" },
  ];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* ── Background gradient layers ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(13,38,128,0.8) 0%, transparent 70%), " +
            "radial-gradient(ellipse 60% 50% at 80% 80%, rgba(82,42,146,0.25) 0%, transparent 60%)",
        }}
      />
      {/* Magenta bloom lower-left */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(210,10,129,0.6) 0%, transparent 70%)",
          transform: "translate(-30%, 20%)",
        }}
      />

      {/* ── Floating decorative icons ── */}
      <div
        className="absolute top-24 right-8 md:right-16 opacity-70"
        style={{ color: "var(--brand-sky-blue)" }}
      >
        <Icon name="star" size={28} />
      </div>
      <div
        className="absolute top-40 left-8 md:left-24 opacity-50"
        style={{ color: "var(--brand-magenta)" }}
      >
        <Icon name="sparkle" size={18} />
      </div>
      {/* Bottom-right bolt */}
      <div
        className="absolute bottom-48 right-12 md:right-32 opacity-50"
        style={{ color: "var(--brand-purple)" }}
      >
        <Icon name="bolt" size={22} />
      </div>

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4 md:px-8 pt-28 pb-12">

        {/* Main title — Oswald display-xl */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-none tracking-tight mb-2 text-gradient"
          style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
        >
          {SITE_NAME.split(" ")[0]}
        </h1>
        <p
          className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-4"
          style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)", letterSpacing: "-0.01em" }}
        >
          {SITE_NAME.split(" ")[1]}
        </p>

        {/* Tagline — Noto Sans */}
        <p
          className="text-base md:text-lg mb-16 max-w-lg"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
        >
          {SITE_TAGLINE}
        </p>

        {/* ── Hero Image Placeholder + Stats ── */}
        <div className="w-full max-w-4xl">
          {/* Banner image */}
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden mb-0">
            <PlaceholderImage label="Hero Event Photo — Crowd / Stage" ratio="16/9" />
            {/* Date badge overlay */}
            <div
              className="absolute bottom-4 left-4 px-3 py-2 rounded-[var(--radius-lg)] border"
              style={{
                backgroundColor: "rgba(13,38,128,0.85)",
                borderColor: "rgba(82,42,146,0.5)",
                backdropFilter: "blur(8px)",
              }}
            >
              <p className="text-[10px] uppercase tracking-[0.1em] mb-0.5" style={{ fontFamily: "var(--font-label)", color: "var(--brand-sky-blue)" }}>
                {EVENT_LOCATION}
              </p>
              <p className="text-sm font-semibold" style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)" }}>
                {EVENT_DATE}
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-3 border-t border-x rounded-b-[var(--radius-xl)] overflow-hidden"
            style={{ borderColor: "var(--card-border)" }}
          >
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-1.5 py-5 px-4 transition-colors duration-200"
                style={{
                  backgroundColor: "var(--card-bg-subtle)",
                  borderLeft: i > 0 ? "1px solid var(--card-border)" : "none",
                }}
              >
                <Icon name={stat.icon} size={18} style={{ color: "var(--brand-sky-blue)" }} />
                <span
                  className="text-xl md:text-2xl font-bold text-gradient"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.value}
                </span>
                <span
                  className="text-[11px] uppercase tracking-[0.08em]"
                  style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
                >
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="relative z-10 flex flex-col items-center gap-2 pb-8"
        style={{ color: "var(--text-muted)" }}
      >
        <span className="text-[10px] uppercase tracking-[0.15em]" style={{ fontFamily: "var(--font-label)" }}>Scroll</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "linear-gradient(to bottom, var(--brand-sky-blue), transparent)" }}
        />
      </div>
    </section>
  );
}
