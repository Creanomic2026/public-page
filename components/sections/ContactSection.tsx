"use client";

import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { SOCIAL_LINKS, SITE_NAME } from "@/lib/constants";

/**
 * Contact / CTA Section — "Make It Here"
 * Large Magenta bloom glow background.
 * CTA headline + two buttons.
 * 3 contact info cards with SVG icons.
 */
export default function ContactSection() {
  const contacts = [
    {
      icon:  "email"     as const,
      label: "Email",
      value: "creanomic@ub.ac.id",
      href:  SOCIAL_LINKS.email,
    },
    {
      icon:  "instagram" as const,
      label: "Instagram",
      value: "@creanomic",
      href:  SOCIAL_LINKS.instagram,
    },
    {
      icon:  "tiktok"    as const,
      label: "TikTok",
      value: "@creanomic",
      href:  SOCIAL_LINKS.tiktok,
    },
  ];

  return (
    <section
      id="kontak-cta"
      className="relative py-32 lg:py-40 overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Magenta bloom — center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(210,10,129,0.12) 0%, transparent 65%)",
        }}
      />
      {/* Purple bloom — bottom */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none opacity-20"
        style={{
          background: "radial-gradient(ellipse, var(--brand-purple) 0%, transparent 70%)",
          transform: "translateX(-50%) translateY(50%)",
        }}
      />

      {/* Decorative floating elements */}
      <div className="absolute top-16 left-12 animate-float opacity-30" style={{ color: "var(--brand-sky-blue)" }}>
        <Icon name="star" size={24} />
      </div>
      <div className="absolute top-20 right-16 animate-float delay-500 opacity-25" style={{ color: "var(--brand-magenta)" }}>
        <Icon name="bolt" size={20} />
      </div>
      <div className="absolute bottom-24 left-20 animate-float delay-300 opacity-20" style={{ color: "var(--brand-purple)" }}>
        <Icon name="sparkle" size={18} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        {/* Eyebrow */}
        <p
          className="text-[11px] uppercase tracking-[0.15em] mb-4"
          style={{ fontFamily: "var(--font-label)", color: "var(--brand-magenta)" }}
        >
          Make It Here
        </p>

        {/* Headline */}
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <span className="text-gradient">Bergabung Bersama</span>
          <br />
          <span style={{ color: "var(--on-surface)" }}>{SITE_NAME.split(" ")[0]} {SITE_NAME.split(" ")[1]}</span>
        </h2>

        {/* Rum Raisin sub-headline */}
        <p
          className="text-xl md:text-2xl mb-10 opacity-75"
          style={{ fontFamily: "var(--font-hero)", color: "var(--on-surface)" }}
        >
          Jadilah bagian dari festival ekonomi kreatif terbesar.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button variant="primary" size="lg">
            <Icon name="bolt" size={16} />
            Daftar Sekarang
          </Button>
          <Button
            variant="secondary"
            size="lg"
            style={{ borderColor: "var(--brand-sky-blue)" }}
          >
            Unduh Proposal
            <Icon name="external-link" size={15} />
          </Button>
        </div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {contacts.map(({ icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="kinetic-card flex flex-col items-center gap-3 p-6 group text-center"
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
                style={{
                  backgroundColor: "rgba(82,42,146,0.15)",
                  color: "var(--on-surface-variant)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "rgba(210,10,129,0.2)";
                  el.style.color = "var(--brand-magenta)";
                  el.style.boxShadow = "var(--glow-magenta)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.backgroundColor = "rgba(82,42,146,0.15)";
                  el.style.color = "var(--on-surface-variant)";
                  el.style.boxShadow = "none";
                }}
              >
                <Icon name={icon} size={20} />
              </div>
              <div>
                <p
                  className="text-[10px] uppercase tracking-[0.1em] mb-1"
                  style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
                >
                  {label}
                </p>
                <p
                  className="text-sm font-medium transition-colors duration-200"
                  style={{ fontFamily: "var(--font-body)", color: "var(--on-surface)" }}
                >
                  {value}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
