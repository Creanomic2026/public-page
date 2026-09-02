"use client";

import { SITE_NAME, SITE_DESCRIPTION, SOCIAL_LINKS, ORGANIZER } from "@/lib/constants";
import Icon from "@/components/ui/Icon";

/**
 * Vibrant Kinetic Footer.
 * - Deep Blue gradient top divider line
 * - 3-column grid: brand + nav + contact
 * - SVG social icons (no emoji)
 * - Copyright row
 */
export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    { icon: "instagram" as const, href: SOCIAL_LINKS.instagram, label: "Instagram" },
    { icon: "tiktok"    as const, href: SOCIAL_LINKS.tiktok,    label: "TikTok" },
    { icon: "youtube"   as const, href: SOCIAL_LINKS.youtube,   label: "YouTube" },
    { icon: "email"     as const, href: SOCIAL_LINKS.email,     label: "Email" },
  ];

  return (
    <footer
      id="kontak"
      className="relative"
      style={{ backgroundColor: "var(--surface-dim)" }}
    >
      {/* ── Gradient divider line ── */}
      <div
        className="h-px w-full"
        style={{ background: "linear-gradient(90deg, transparent, #522A92, #D20A81, #2A82E7, transparent)" }}
      />

      <div className="max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* ── Brand Column ── */}
          <div className="flex flex-col gap-5">
            <div>
              <p
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)" }}
              >
                {SITE_NAME.split(" ")[0]}{" "}
                <span className="text-gradient">{SITE_NAME.split(" ")[1]}</span>
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
              >
                {SITE_DESCRIPTION}
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200"
                  style={{
                    borderColor: "var(--outline-variant)",
                    color: "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--brand-magenta)";
                    el.style.color = "var(--brand-magenta)";
                    el.style.boxShadow = "var(--glow-magenta)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "var(--outline-variant)";
                    el.style.color = "var(--text-muted)";
                    el.style.boxShadow = "none";
                  }}
                >
                  <Icon name={icon} size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* ── Contact Column ── */}
          <div>
            <h3
              className="text-xs font-semibold uppercase tracking-[0.1em] mb-5"
              style={{ fontFamily: "var(--font-label)", color: "var(--brand-sky-blue)" }}
            >
              Hubungi Kami
            </h3>
            <ul className="flex flex-col gap-4 text-sm" style={{ fontFamily: "var(--font-body)" }}>
              {[
                { label: "Penyelenggara", value: ORGANIZER, href: undefined },
                { label: "Email", value: "creanomic@ub.ac.id", href: SOCIAL_LINKS.email },
                { label: "Instagram", value: "@creanomic", href: SOCIAL_LINKS.instagram },
              ].map(({ label, value, href }) => (
                <li key={label}>
                  <span
                    className="block text-[10px] uppercase tracking-[0.1em] mb-1"
                    style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
                  >
                    {label}
                  </span>
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-colors duration-200"
                      style={{ color: "var(--text-secondary)" }}
                      onMouseEnter={(e) => { (e.currentTarget).style.color = "var(--brand-sky-blue)"; }}
                      onMouseLeave={(e) => { (e.currentTarget).style.color = "var(--text-secondary)"; }}
                    >
                      {value}
                    </a>
                  ) : (
                    <span style={{ color: "var(--text-secondary)" }}>{value}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Copyright ── */}
        <div
          className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t text-xs"
          style={{
            borderColor: "var(--outline-variant)",
            color: "var(--text-muted)",
            fontFamily: "var(--font-body)",
          }}
        >
          <p>&copy; {year} {SITE_NAME}. All rights reserved.</p>
          <p>Made with <Icon name="heart" size={12} className="inline text-[var(--brand-magenta)]" /> by Tim CREANOMIC {year}</p>
        </div>
      </div>
    </footer>
  );
}
