import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { ORGANIZER } from "@/lib/constants";

/**
 * About Section — 2-column layout.
 * Left: placeholder event photo with stats overlay.
 * Right: eyebrow + Oswald headline + Noto Sans body + stat cards.
 */
export default function AboutSection() {
  const stats = [
    { icon: "calendar" as const, value: "3 Hari",  label: "Durasi Event" },
    { icon: "trophy"   as const, value: "12+",      label: "Kompetisi" },
    { icon: "users"    as const, value: "100+",     label: "Pengunjung" },
  ];

  const highlights = [
    "Festival ekonomi kreatif terbesar di Jawa Timur",
    "Ajang kompetisi bisnis mahasiswa se-Indonesia",
    "Pameran UMKM & produk inovatif",
    "Workshop dan seminar dari praktisi industri",
  ];

  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Background accent */}
      <div
        className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle, var(--brand-purple) 0%, transparent 70%)",
          transform: "translate(30%, -30%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── Left: Photo + Stats ── */}
          <div className="relative">
            <div className="rounded-[var(--radius-xl)] overflow-hidden">
              <PlaceholderImage label="Event Photo — Crowd / Venue" ratio="4/3" />
            </div>

            {/* Floating stats badge */}
            <div
              className="absolute -bottom-4 -right-4 md:bottom-4 md:right-4 flex flex-col gap-2 p-3 rounded-[var(--radius-xl)] border"
              style={{
                backgroundColor: "var(--card-bg-subtle)",
                borderColor: "var(--card-border)",
                backdropFilter: "blur(12px)",
              }}
            >
              {stats.map((s) => (
                <div key={s.label} className="flex items-center gap-3 px-2 py-1">
                  <div
                    className="w-8 h-8 rounded-[var(--radius)] flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "rgba(42,130,231,0.15)" }}
                  >
                    <Icon name={s.icon} size={16} style={{ color: "var(--brand-sky-blue)" }} />
                  </div>
                  <div>
                    <p
                      className="text-base font-bold leading-none"
                      style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)" }}
                    >
                      {s.value}
                    </p>
                    <p
                      className="text-[10px] uppercase tracking-wide mt-0.5"
                      style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
                    >
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Content ── */}
          <div className="flex flex-col gap-6">
            <SectionHeader
              eyebrow="Tentang CREANOMIC"
              title="Building the Future, Building Reality!"
              align="left"
              titleGradient
              className="mb-2"
            />

            <p
              className="text-base leading-relaxed"
              style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
            >
              <strong style={{ color: "var(--brand-sky-blue)" }}>CREANOMIC</strong> (Creative Economic Expo)
              adalah festival ekonomi kreatif tahunan yang diselenggarakan oleh {ORGANIZER}.
              Sejak pertama kali digelar, CREANOMIC menjadi wadah bagi mahasiswa, wirausahawan muda,
              dan pelaku UMKM untuk menampilkan inovasi dalam bingkai kekayaan budaya lokal.
            </p>

            {/* Highlight list */}
            <ul className="flex flex-col gap-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: "rgba(210,10,129,0.15)" }}
                  >
                    <Icon name="bolt" size={11} style={{ color: "var(--brand-magenta)" }} />
                  </div>
                  <span
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
