"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { KILAS_BALIK_DATA, type KilasBalikItem } from "@/data/kilasBalik";

/* ═══════════════════════════════════════════════════════════════════════════════
 * 🎛️ PENGATURAN CAROUSEL (Bisa Anda tweak / ubah sendiri di sini)
 * ═══════════════════════════════════════════════════════════════════════════════ */
export const CAROUSEL_CONFIG = {
  // 1. Ukuran Layar Tengah (Aktif / Paling Besar)
  centerCard: {
    // Lebar di layar HP (300px) -> Tablet (360px) -> Desktop (420px)
    width: "w-[300px] sm:w-[340px] md:w-[380px] lg:w-[420px]",
    // Tinggi di layar HP (340px) -> Tablet (400px) -> Desktop (450px)
    height: "h-[340px] sm:h-[380px] md:h-[420px] lg:h-[450px]",
    border: "border-[3.5px] border-[#0B24F3]",
    shadow: "shadow-[8px_8px_0px_#0B0F19]",
  },

  // 2. Ukuran Layar Samping (Kiri & Kanan / Sedikit Lebih Kecil, ~85% dari Layar Tengah)
  sideCard: {
    // Lebar di layar Tablet (300px) -> Desktop (340px)
    width: "w-[260px] md:w-[300px] lg:w-[340px]",
    // Tinggi di layar Tablet (340px) -> Desktop (385px)
    height: "h-[290px] md:h-[340px] lg:h-[385px]",
    border: "border-[3px] border-[#0B24F3]",
    shadow: "shadow-[5px_5px_0px_#0B0F19]",
    opacity: "opacity-65 hover:opacity-100", // transparansi card samping
  },

  // 3. Jarak Antar Card (Gap Horizontal)
  gap: "gap-4 sm:gap-5 md:gap-6",

  // 4. Durasi Auto-Play Default (5000 = 5 detik)
  defaultInterval: 5000,
};

interface KilasBalikCarouselProps {
  items?: KilasBalikItem[];
  autoPlayInterval?: number;
}

/**
 * Kilas Balik 3-Screen Carousel — Y2K Pop Art.
 * - 3 Layar Sharp: Kiri (kecil), Tengah (besar & aktif), Kanan (kecil)
 * - Ukuran proporsional & fit, tidak terpotong tepi layar
 * - Otomatis berganti setiap 5 detik (pause saat kursor di atas card)
 * - Tombol geser kiri/kanan di card tengah muncul saat di-hover
 * - Card samping dapat diklik langsung
 */
export default function KilasBalikCarousel({
  items = KILAS_BALIK_DATA,
  autoPlayInterval = CAROUSEL_CONFIG.defaultInterval,
}: KilasBalikCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = items.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Autoplay setiap 5 detik (pause saat hover)
  useEffect(() => {
    if (isPaused || totalItems <= 1) return;

    const timer = setInterval(() => {
      handleNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isPaused, totalItems, autoPlayInterval, handleNext]);

  if (totalItems === 0) return null;

  // Indeks untuk 3 layar: Prev, Active, Next
  const prevIndex = (currentIndex - 1 + totalItems) % totalItems;
  const nextIndex = (currentIndex + 1) % totalItems;

  const prevItem = items[prevIndex];
  const activeItem = items[currentIndex];
  const nextItem = items[nextIndex];

  return (
    <div
      className="relative w-full max-w-[1240px] mx-auto flex flex-col items-center justify-center select-none px-2 text-center"
      style={{ margin: "0 auto" }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Kilas Balik Carousel"
    >
      {/* ── Wadah 3 Layar (Centering Presisi & Tidak Terpotong) ── */}
      <div
        className={`relative w-full flex items-center justify-center ${CAROUSEL_CONFIG.gap} py-2 mx-auto overflow-visible`}
        style={{ margin: "0 auto" }}
      >

        {/* ── 1. Layar Kiri (Sedikit Lebih Kecil, Sharp Border) ── */}
        <div
          onClick={handlePrev}
          className={`hidden md:flex flex-col items-center justify-center ${CAROUSEL_CONFIG.sideCard.width} ${CAROUSEL_CONFIG.sideCard.height} bg-white ${CAROUSEL_CONFIG.sideCard.border} rounded-none ${CAROUSEL_CONFIG.sideCard.shadow} p-3 sm:p-4 transition-all duration-300 ${CAROUSEL_CONFIG.sideCard.opacity} hover:scale-[1.02] cursor-pointer shrink-0`}
          title={`Sebelumnya: ${prevItem.title}`}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-[#0B24F3]/30 p-3 sm:p-4 relative overflow-hidden bg-[#FAFBFF]">
            {prevItem.image ? (
              <Image
                src={prevItem.image}
                alt={prevItem.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-3xl lg:text-4xl mb-2 opacity-80">📸</span>
                <p
                  className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#0B24F3] leading-snug"
                  style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
                >
                  {prevItem.title}
                </p>
                {prevItem.category && (
                  <span className="mt-2 text-[10px] sm:text-xs font-bold text-[#0B0F19]/70 uppercase tracking-widest bg-[#FFE17A] px-2.5 py-0.5 border border-[#0B0F19]">
                    {prevItem.category}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

        {/* ── 2. Layar Tengah (Paling Besar & Aktif, Sharp Border) ── */}
        <div
          className={`group relative flex flex-col items-center justify-center ${CAROUSEL_CONFIG.centerCard.width} ${CAROUSEL_CONFIG.centerCard.height} bg-white ${CAROUSEL_CONFIG.centerCard.border} rounded-none ${CAROUSEL_CONFIG.centerCard.shadow} p-4 sm:p-5 z-20 shrink-0 transition-all duration-300`}
        >
          {/* Inner Dashed Frame / Content */}
          <div className="w-full h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-[#0B24F3]/40 p-4 sm:p-5 relative overflow-hidden bg-gradient-to-b from-white to-[#F8F9FF]">
            {activeItem.image ? (
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex flex-col items-center justify-center max-w-[90%] px-2">
                <span className="text-4xl sm:text-5xl mb-3 transition-transform duration-200 group-hover:scale-110">
                  📸
                </span>
                <p
                  className="text-sm sm:text-base md:text-lg uppercase tracking-wider font-extrabold text-[#0B24F3] leading-tight"
                  style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
                >
                  {activeItem.title}
                </p>
                {activeItem.description && (
                  <p
                    className="text-xs sm:text-sm text-[#0B0F19]/80 mt-2.5 line-clamp-3 leading-relaxed"
                    style={{ fontFamily: "var(--font-noto-sans, 'Noto Sans', sans-serif)" }}
                  >
                    {activeItem.description}
                  </p>
                )}
                {activeItem.category && (
                  <span className="mt-3.5 text-xs font-bold text-[#0B0F19] uppercase tracking-widest bg-[#FFE17A] px-3 py-1 border-2 border-[#0B0F19] shadow-[2px_2px_0px_#0B0F19]">
                    {activeItem.category}
                  </span>
                )}
              </div>
            )}
          </div>

          {/* ── Tombol Navigasi Kiri (Hanya Muncul saat Card Tengah di-Hover) ── */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-[#FFE17A] hover:bg-[#FFD43D] border-2 border-[#0B0F19] shadow-[2.5px_2.5px_0px_#0B0F19] flex items-center justify-center text-[#0B0F19] font-black text-base transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer rounded-none"
            aria-label="Slide sebelumnya"
            title="Sebelumnya"
          >
            &#9664;
          </button>

          {/* ── Tombol Navigasi Kanan (Hanya Muncul saat Card Tengah di-Hover) ── */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 z-30 w-9 h-9 sm:w-10 sm:h-10 bg-[#FFE17A] hover:bg-[#FFD43D] border-2 border-[#0B0F19] shadow-[2.5px_2.5px_0px_#0B0F19] flex items-center justify-center text-[#0B0F19] font-black text-base transition-all duration-200 opacity-0 group-hover:opacity-100 hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 cursor-pointer rounded-none"
            aria-label="Slide berikutnya"
            title="Berikutnya"
          >
            &#9654;
          </button>
        </div>

        {/* ── 3. Layar Kanan (Sedikit Lebih Kecil, Sharp Border) ── */}
        <div
          onClick={handleNext}
          className={`hidden md:flex flex-col items-center justify-center ${CAROUSEL_CONFIG.sideCard.width} ${CAROUSEL_CONFIG.sideCard.height} bg-white ${CAROUSEL_CONFIG.sideCard.border} rounded-none ${CAROUSEL_CONFIG.sideCard.shadow} p-3 sm:p-4 transition-all duration-300 ${CAROUSEL_CONFIG.sideCard.opacity} hover:scale-[1.02] cursor-pointer shrink-0`}
          title={`Berikutnya: ${nextItem.title}`}
        >
          <div className="w-full h-full flex flex-col items-center justify-center text-center border-2 border-dashed border-[#0B24F3]/30 p-3 sm:p-4 relative overflow-hidden bg-[#FAFBFF]">
            {nextItem.image ? (
              <Image
                src={nextItem.image}
                alt={nextItem.title}
                fill
                className="object-cover"
                unoptimized
              />
            ) : (
              <div className="flex flex-col items-center justify-center px-1">
                <span className="text-3xl lg:text-4xl mb-2 opacity-80">📸</span>
                <p
                  className="text-xs sm:text-sm uppercase tracking-wider font-bold text-[#0B24F3] leading-snug"
                  style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
                >
                  {nextItem.title}
                </p>
                {nextItem.category && (
                  <span className="mt-2 text-[10px] sm:text-xs font-bold text-[#0B0F19]/70 uppercase tracking-widest bg-[#FFE17A] px-2.5 py-0.5 border border-[#0B0F19]">
                    {nextItem.category}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>

      </div>

      {/* ── Tombol Navigasi Khusus Mobile (Jika di HP card samping tersembunyi) ── */}
      <div className="flex md:hidden items-center justify-center gap-4 mt-3">
        <button
          onClick={handlePrev}
          className="w-8 h-8 bg-[#FFE17A] border-2 border-[#0B0F19] shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center text-[#0B0F19] font-bold active:translate-y-0.5 rounded-none"
          aria-label="Sebelumnya"
        >
          &#9664;
        </button>
        <span className="text-xs font-bold uppercase tracking-wider text-[#0B24F3]">
          {currentIndex + 1} / {totalItems}
        </span>
        <button
          onClick={handleNext}
          className="w-8 h-8 bg-[#FFE17A] border-2 border-[#0B0F19] shadow-[2px_2px_0px_#0B0F19] flex items-center justify-center text-[#0B0F19] font-bold active:translate-y-0.5 rounded-none"
          aria-label="Berikutnya"
        >
          &#9654;
        </button>
      </div>

      {/* ── Indikator Bar Y2K di Bawah Card (Beri jarak mt-6) ── */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => setCurrentIndex(idx)}
            className={`transition-all duration-300 border border-[#0B0F19] cursor-pointer rounded-none ${
              currentIndex === idx
                ? "w-7 h-2 bg-[#0B24F3] shadow-[1.5px_1.5px_0px_#0B0F19]"
                : "w-2 h-2 bg-[#FFE17A] hover:bg-[#FFD43D]"
            }`}
            aria-label={`Pindah ke slide ${idx + 1}: ${item.title}`}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}
