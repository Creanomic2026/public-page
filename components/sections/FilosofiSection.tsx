"use client";

import { useState } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import Icon from "@/components/ui/Icon";
import type { FilosofiItem } from "@/types";

const FILOSOFI_DATA: FilosofiItem[] = [
  {
    id: "hexagram",
    title: "The Hexagram",
    subtitle: "Simbol Utama",
    content:
      "Logo CREANOMIC terinspirasi dari hexagram — simbol yang merepresentasikan keseimbangan antara kreativitas dan logika bisnis. Enam sisi melambangkan enam pilar ekonomi kreatif yang menjadi fondasi festival.",
  },
  {
    id: "nama",
    title: "Makna Nama",
    subtitle: "Creative Economic",
    content:
      "CREANOMIC adalah gabungan dari 'Creative' dan 'Economic' — mencerminkan semangat ekonomi kreatif yang berinovasi tanpa batas. Nama ini menegaskan bahwa kreativitas dan bisnis bukan dua dunia yang terpisah.",
  },
  {
    id: "warna",
    title: "Filosofi Warna",
    subtitle: "Vibrant Kinetic Palette",
    content:
      "Deep Blue (#0D2680) sebagai fondasi profesional dan kepercayaan. Magenta (#D20A81) menyuntikkan energi dan kreativitas. Purple (#522A92) menjembatani keduanya. Sky Blue (#2A82E7) sebagai aksen inovasi yang tajam.",
  },
  {
    id: "maskot",
    title: "Filosofi Maskot",
    subtitle: "CREANO",
    content:
      "CREANO adalah representasi generasi kreatif yang berani berinovasi. Dirancang dengan estetika futuristik untuk mencerminkan semangat anak muda yang memeluk teknologi sambil menghargai akar budaya lokal.",
  },
];

/**
 * Filosofi Section — "The Anatomy of Innovation"
 * Left: Logo/image placeholder with gradient frame.
 * Right: Tab navigation + content card with backdrop-blur.
 */
export default function FilosofiSection() {
  const [activeId, setActiveId] = useState(FILOSOFI_DATA[0].id);

  const active = FILOSOFI_DATA.find((f) => f.id === activeId)!;
  const activeIndex = FILOSOFI_DATA.findIndex((f) => f.id === activeId);

  const navigate = (dir: "prev" | "next") => {
    const next = dir === "prev" ? activeIndex - 1 : activeIndex + 1;
    if (next >= 0 && next < FILOSOFI_DATA.length) {
      setActiveId(FILOSOFI_DATA[next].id);
    }
  };

  return (
    <section
      id="filosofi"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Background purple bloom top-left */}
      <div
        className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none opacity-15"
        style={{
          background: "radial-gradient(circle, var(--brand-purple) 0%, transparent 65%)",
          transform: "translate(-40%, -30%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader
          eyebrow="Filosofi & Makna"
          title="The Anatomy of Innovation"
          subtitle="Setiap elemen CREANOMIC dirancang dengan makna mendalam yang mencerminkan nilai-nilai kami."
          className="mb-14"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* ── Left: Logo card ── */}
          <div>
            <div
              className="relative rounded-[var(--radius-xl)] overflow-hidden p-1"
              style={{ background: "linear-gradient(135deg, #522A92, #D20A81, #2A82E7)" }}
            >
              <div className="rounded-[calc(var(--radius-xl)-4px)] overflow-hidden">
                <PlaceholderImage label="CREANOMIC Logo / Brand Identity" ratio="1/1" />
              </div>
            </div>
            <p
              className="text-center mt-4 text-sm font-medium"
              style={{ fontFamily: "var(--font-accent)", color: "var(--text-muted)", fontSize: "1rem" }}
            >
              Blooming Innovation, Creating Impact
            </p>
          </div>

          {/* ── Right: Tabs + Content ── */}
          <div className="flex flex-col gap-4">
            {/* Tab pills */}
            <div className="flex flex-wrap gap-2">
              {FILOSOFI_DATA.map((item) => (
                <button
                  key={item.id}
                  onClick={() => { setActiveId(item.id); }}
                  className="px-4 py-2 rounded-full text-[11px] font-semibold uppercase tracking-[0.06em] transition-all duration-300 border"
                  style={{
                    fontFamily: "var(--font-label)",
                    backgroundColor: activeId === item.id ? "var(--brand-sky-blue)" : "transparent",
                    color: activeId === item.id ? "#fff" : "var(--text-muted)",
                    borderColor: activeId === item.id ? "var(--brand-sky-blue)" : "var(--outline-variant)",
                    boxShadow: activeId === item.id ? "var(--glow-sky)" : "none",
                  }}
                >
                  {item.title}
                </button>
              ))}
            </div>

            {/* Content card */}
            <div
              key={activeId}
              className="kinetic-card p-8 animate-fade-in"
            >
              <p
                className="text-[10px] uppercase tracking-[0.12em] mb-2"
                style={{ fontFamily: "var(--font-label)", color: "var(--brand-magenta)" }}
              >
                {active.subtitle}
              </p>
              <h3
                className="text-2xl font-bold mb-4"
                style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)" }}
              >
                {active.title}
              </h3>
              <p
                className="text-base leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                {active.content}
              </p>
            </div>

            {/* Navigation arrows */}
            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-1">
                {FILOSOFI_DATA.map((_, i) => (
                  <span
                    key={i}
                    className="block rounded-full transition-all duration-300"
                    style={{
                      width: i === activeIndex ? "20px" : "6px",
                      height: "6px",
                      backgroundColor: i === activeIndex ? "var(--brand-sky-blue)" : "var(--outline-variant)",
                    }}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => navigate("prev")}
                  disabled={activeIndex === 0}
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30"
                  style={{
                    borderColor: "var(--outline-variant)",
                    color: "var(--on-surface-variant)",
                  }}
                  aria-label="Previous"
                >
                  <Icon name="chevron-left" size={14} />
                </button>
                <button
                  onClick={() => navigate("next")}
                  disabled={activeIndex === FILOSOFI_DATA.length - 1}
                  className="w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-200 disabled:opacity-30 hover:border-[var(--brand-sky-blue)] hover:text-[var(--brand-sky-blue)]"
                  style={{
                    borderColor: "var(--outline-variant)",
                    color: "var(--on-surface-variant)",
                  }}
                  aria-label="Next"
                >
                  <Icon name="chevron-right" size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
