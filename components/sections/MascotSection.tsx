import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Badge from "@/components/ui/Badge";
import Icon from "@/components/ui/Icon";

/**
 * Mascot Section — "Introducing CREANO"
 * Left: Robot/mascot placeholder with Magenta glow ring animation.
 * Right: Headline + description + trait chips.
 */
export default function MascotSection() {
  const traits = [
    { icon: "bolt"   as const, label: "Berani",        desc: "Tak takut bermimpi besar", variant: "creative" as const },
    { icon: "star"   as const, label: "Kreatif",       desc: "Selalu menemukan inovasi",  variant: "innovation" as const },
    { icon: "users"  as const, label: "Kolaboratif",   desc: "Kekuatan dalam kebersamaan",variant: "innovation" as const },
    { icon: "zap"    as const, label: "Inspiratif",    desc: "Menggerakkan orang lain",   variant: "creative" as const },
  ];

  return (
    <section
      id="maskot"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--surface-container-low)" }}
    >
      {/* Magenta bloom center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(210,10,129,0.07) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* ── Left: Mascot placeholder ── */}
          <div className="relative flex items-center justify-center">
            {/* Glow bloom — static radial, no animation shake */}
            <div
              className="absolute w-80 h-80 rounded-full pointer-events-none animate-bloom-pulse"
              style={{
                background: "radial-gradient(circle, rgba(210,10,129,0.15) 0%, transparent 65%)",
              }}
            />

            {/* Mascot placeholder — no animate prop to avoid shake */}
            <div className="relative w-56 h-56 md:w-64 md:h-64">
              <PlaceholderImage label="Mascot CREANO — Character Art" ratio="1/1" />
            </div>

            {/* Floating decorative icons — no animation */}
            <div className="absolute -top-4 -right-4 opacity-60" style={{ color: "var(--brand-sky-blue)" }}>
              <Icon name="sparkle" size={20} />
            </div>
            <div className="absolute -bottom-2 -left-6 opacity-50" style={{ color: "var(--brand-magenta)" }}>
              <Icon name="star" size={16} />
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-[11px] uppercase tracking-[0.12em] mb-2"
                style={{ fontFamily: "var(--font-label)", color: "var(--brand-magenta)" }}
              >
                — The Spirit of Blooming
              </p>
              <h2
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span className="text-gradient">Introducing</span>{" "}
                <span style={{ color: "var(--on-surface)" }}>Creano</span>
              </h2>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                CREANO adalah maskot resmi CREANOMIC — representasi generasi kreatif yang berani
                bermimpi besar. Dengan semangat inovatif dan jiwa kolaboratif, CREANO mengajak
                seluruh peserta untuk bloom beyond limits.
              </p>
            </div>

            {/* Trait cards */}
            <div className="grid grid-cols-2 gap-3">
              {traits.map((trait) => (
                <div
                  key={trait.label}
                  className="kinetic-card p-4 flex flex-col gap-2 group"
                >
                  <div className="flex items-center gap-2">
                    <Icon
                      name={trait.icon}
                      size={16}
                      style={{
                        color: trait.variant === "creative" ? "var(--brand-magenta)" : "var(--brand-sky-blue)",
                      }}
                    />
                    <Badge variant={trait.variant}>{trait.label}</Badge>
                  </div>
                  <p
                    className="text-xs leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
                  >
                    {trait.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
