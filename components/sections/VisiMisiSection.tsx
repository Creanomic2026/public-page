"use client";

import { useState, useEffect } from "react";
import SectionHeader from "@/components/ui/SectionHeader";
import Icon from "@/components/ui/Icon";

/**
 * Visi & Misi Section — Two glassmorphism cards.
 * Eye icon for Visi, Target icon for Misi.
 * Purple inner glow border on hover.
 */
export default function VisiMisiSection() {
  const misiItems = [
    "1. Menyelenggarakan kompetisi, seminar, dan exhibiton sebagai wadah bagi mahasiswa untuk mengembangkan kreativitas, inovasi, dan kompetensi di bidang ekonomi kreatif.",
    "2. Mendorong terciptanya solusi inovatif yang menjawab tantangan masyarakat, industri, dan perkembangan ekonomi kreatif melalui pemanfaatan ilmu pengetahuan dan teknologi.",
    "3. Meningkatkan reputasi CREANOMIC sebagai ajang inovasi dan ekonomi kreatif yang berkualitas, inspiratif, dan berdaya saing di tingkat nasional.",
    "4. Menghasilkan karya-karya kreatif yang memiliki nilai ekonomi, nilai sosial, dan potensi untuk dikembangkan secara berkelanjutan.",
    "5. Membangun budaya kompetitif yang sehat dengan menjunjung tinggi sportivitas, profesionalisme, integritas, dan etika."
  ];

  const [activeMisi, setActiveMisi] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMisi((prev) => (prev + 1) % misiItems.length);
    }, 4000); // ganti setiap 4 detik
    return () => clearInterval(interval);
  }, [misiItems.length]);

  const handleDotClick = (index: number) => {
    setActiveMisi(index);
  };

  return (
    <section
      id="visi-misi"
      className="relative py-24 lg:py-32 overflow-hidden"
      style={{ backgroundColor: "var(--surface-container-low)" }}
    >
      {/* Bloom accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 100%, rgba(82,42,146,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16">
        <SectionHeader
          eyebrow="Landasan Kami"
          title="Our Vision & Mission"
          subtitle="Pondasi yang memandu setiap langkah CREANOMIC menuju festival ekonomi kreatif terbaik."
          className="mb-14"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ── Visi Card ── */}
          <div
            className="kinetic-card p-8 group cursor-default"
            style={{ minHeight: 260 }}
          >
            <h3
              className="text-3xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)", color: "var(--brand-magenta)" }}
            >
              Visi
            </h3>

            <p
              className="text-base leading-relaxed italic"
              style={{ fontFamily: "var(--font-hero)", color: "var(--text-secondary)", fontSize: "1.1rem" }}
            >
              {/* TODO: Replace with official vision statement */}
              {`"Menjadikan CREANOMIC 2026 sebagai ekosistem inovasi ekonomi kreatif yang melahirkan generasi muda berdaya saing global, adaptif terhadap transformasi digital, kewirausahaan, serta berkarakter mampu menciptakan solusi inovatif yang berdampak bagi masyarakat dan pembangunan Indonesia berkelanjutan."`}
            </p>
          </div>

          {/* ── Misi Card ── */}
          <div
            className="kinetic-card p-8 group cursor-default flex flex-col"
            style={{ minHeight: 260 }}
          >
            <h3
              className="text-3xl font-bold mb-6 shrink-0"
              style={{ fontFamily: "var(--font-display)", color: "var(--brand-sky-blue)" }}
            >
              Misi
            </h3>

            {/* Misi Content - Carousel */}
            <div className="flex flex-col h-full justify-between gap-4">
              <div 
                key={activeMisi}
                className="flex items-start gap-3"
              >
                <div
                  className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-1"
                  style={{ backgroundColor: "rgba(42,130,231,0.15)" }}
                >
                  <Icon name="bolt" size={10} style={{ color: "var(--brand-sky-blue)" }} />
                </div>
                <span
                  className="text-base leading-relaxed italic"
                  style={{ fontFamily: "var(--font-hero)", color: "var(--text-secondary)", fontSize: "1.1rem" }}
                >
                  {misiItems[activeMisi]}
                </span>
              </div>

              {/* Indicator dots */}
              <div className="flex gap-2 pt-2 mt-auto">
                {misiItems.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handleDotClick(i)}
                    className="h-1.5 rounded-full transition-all duration-300"
                    style={{
                      backgroundColor: i === activeMisi ? "var(--brand-sky-blue)" : "var(--outline-variant)",
                      width: i === activeMisi ? "16px" : "6px"
                    }}
                    aria-label={`Misi ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
