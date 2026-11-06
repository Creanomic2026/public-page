"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { KILAS_BALIK_DATA, type KilasBalikItem } from "@/data/kilasBalik";

/* ═══════════════════════════════════════════════════════════════════════════════
 * 🎛️ PENGATURAN CAROUSEL
 * ═══════════════════════════════════════════════════════════════════════════════ */
export const CAROUSEL_CONFIG = {
  // Satu gambar besar, rasio 16:10 di HP dan 16:9 di layar lebar
  aspect: "aspect-[16/10] sm:aspect-[16/9]",
  border: "border-[3.5px] border-[#0B24F3]",
  shadow: "shadow-[8px_8px_0px_#0B0F19]",
  // Durasi Auto-Play Default (4000 = 4 detik)
  defaultInterval: 4000,
};

interface KilasBalikCarouselProps {
  items?: KilasBalikItem[];
  autoPlayInterval?: number;
}

export default function KilasBalikCarousel({
  items = KILAS_BALIK_DATA,
  autoPlayInterval = CAROUSEL_CONFIG.defaultInterval,
}: KilasBalikCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const totalItems = items.length;
  const reduceMotion = useReducedMotion();

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  }, [totalItems]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  }, [totalItems]);

  // Autoplay 4 detik. Timer di-reset setiap kali slide berganti.
  useEffect(() => {
    if (isPaused || reduceMotion || totalItems <= 1) return;

    const timer = setTimeout(handleNext, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [isPaused, reduceMotion, totalItems, autoPlayInterval, currentIndex, handleNext]);

  if (totalItems === 0) return null;

  const activeItem = items[currentIndex];

  return (
    <div
      className="relative mx-auto flex w-full max-w-[1040px] flex-col items-center select-none px-2"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          handlePrev();
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          handleNext();
        }
      }}
      aria-label="Kilas Balik CREANOMIC 2025"
      role="region"
      aria-roledescription="carousel"
      tabIndex={0}
    >
      {/* ── Single Large Slide ── */}
      <div
        className={`group relative w-full overflow-hidden bg-white ${CAROUSEL_CONFIG.aspect} ${CAROUSEL_CONFIG.border} ${CAROUSEL_CONFIG.shadow}`}
      >
        {items.map((item, index) => {
          const isActive = index === currentIndex;

          return (
            <div
              key={item.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-700 ease-out ${
                isActive ? "z-10 opacity-100" : "pointer-events-none z-0 opacity-0"
              }`}
            >
              {item.image ? (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 1040px"
                  className="object-cover"
                  unoptimized
                  priority={index === 0}
                />
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-[#0B24F3] via-[#522A92] to-[#F849C1] px-6 text-center">
                  <span className="text-5xl">📸</span>
                  <p
                    className="text-xl font-extrabold uppercase tracking-wider text-white sm:text-2xl"
                    style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
                  >
                    {item.title}
                  </p>
                </div>
              )}
            </div>
          );
        })}

        {/* Caption overlay */}
        <div className="absolute inset-x-0 bottom-0 z-20 bg-gradient-to-t from-[#0B0F19]/95 via-[#0B0F19]/55 to-transparent px-5 pb-5 pt-20 text-left sm:px-8 sm:pb-7">
          <div aria-live="polite" className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#FFD43D] sm:text-xs">
              {[activeItem.category, activeItem.year].filter(Boolean).join(" · ")}
            </p>
            <h3
              className="mt-1.5 text-lg font-extrabold leading-tight text-white sm:text-2xl md:text-3xl"
              style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
            >
              {activeItem.title}
            </h3>
            {activeItem.description && (
              <p className="mt-2 hidden max-w-xl text-sm leading-relaxed text-white/85 sm:block">
                {activeItem.description}
              </p>
            )}
          </div>
        </div>

        {/* Prev / Next */}
        <button
          type="button"
          onClick={handlePrev}
          className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-2 border-[#0B0F19] bg-[#FFE17A] text-base font-black text-[#0B0F19] shadow-[2.5px_2.5px_0px_#0B0F19] transition-all duration-200 hover:bg-[#FFD43D] hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 sm:left-4 sm:h-11 sm:w-11"
          aria-label="Slide sebelumnya"
          title="Sebelumnya"
        >
          &#9664;
        </button>
        <button
          type="button"
          onClick={handleNext}
          className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center border-2 border-[#0B0F19] bg-[#FFE17A] text-base font-black text-[#0B0F19] shadow-[2.5px_2.5px_0px_#0B0F19] transition-all duration-200 hover:bg-[#FFD43D] hover:scale-110 active:translate-x-0.5 active:translate-y-0.5 sm:right-4 sm:h-11 sm:w-11"
          aria-label="Slide berikutnya"
          title="Berikutnya"
        >
          &#9654;
        </button>
      </div>

      {/* ── Dots + Counter ── */}
      <div className="mt-5 flex flex-wrap items-center justify-center gap-2.5">
        {items.map((item, index) => {
          const isActive = index === currentIndex;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Tampilkan ${item.title}`}
              aria-current={isActive ? "true" : undefined}
              className={`h-3.5 cursor-pointer border-2 border-[#0B0F19] transition-all duration-200 ${
                isActive
                  ? "w-9 bg-[#F849C1] shadow-[2px_2px_0px_#0B0F19]"
                  : "w-3.5 bg-white hover:bg-[#FFD43D]"
              }`}
            />
          );
        })}
        <span className="ml-2 text-xs font-bold uppercase tracking-wider text-[#0B24F3]">
          {currentIndex + 1} / {totalItems}
        </span>
      </div>
    </div>
  );
}
