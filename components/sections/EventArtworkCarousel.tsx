"use client";

import { useState } from "react";

const slideBackgrounds = [
  "linear-gradient(145deg, #102b82 0%, #1739a7 52%, #102b82 100%)",
  "linear-gradient(35deg, #102b82 0%, #1b3eaa 50%, #102b82 100%)",
  "linear-gradient(110deg, #102b82 0%, #19389b 48%, #102b82 100%)",
];

export default function EventArtworkCarousel({
  title,
  number,
}: {
  title: string;
  number: string;
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (slide: number) => {
    setActiveSlide(Math.max(0, Math.min(slide, slideBackgrounds.length - 1)));
  };

  return (
    <div
      role="group"
      aria-label={`Galeri gambar ${title}`}
      className="relative mx-auto aspect-[1.2/1] w-full max-w-[420px]"
    >
      <button
        type="button"
        onClick={() => goToSlide(activeSlide - 1)}
        disabled={activeSlide === 0}
        aria-label={`Gambar sebelumnya untuk ${title}`}
        className="absolute left-[28%] top-0 h-[17%] w-[38%] bg-[#102b82] shadow-[3px_4px_0_#e833a9] transition hover:-translate-y-1 hover:shadow-[3px_6px_0_#e833a9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e833a9] disabled:cursor-not-allowed"
      />

      <div className="absolute left-[10%] top-[37%] flex h-[26%] w-[3%] flex-col justify-between py-1">
        {slideBackgrounds.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Tampilkan gambar ${index + 1} dari 3 untuk ${title}`}
            aria-pressed={activeSlide === index}
            className={`h-[27%] w-1 border-0 p-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e833a9] ${
              activeSlide === index ? "bg-[#f537ad]" : "bg-[#102b82]"
            }`}
          />
        ))}
      </div>

      <div
        role="img"
        aria-label={`Gambar ${activeSlide + 1} dari 3 untuk ${title}`}
        aria-live="polite"
        className="absolute left-[13%] top-[25%] flex h-[50%] w-[74%] items-center justify-center border-[5px] border-white bg-[#102b82] shadow-[5px_5px_0_#e833a9] transition-[background] duration-300"
        style={{ background: slideBackgrounds[activeSlide] }}
      >
        <span className="sr-only">
          Placeholder foto {activeSlide + 1} untuk acara {title} ({number})
        </span>
      </div>

      <button
        type="button"
        onClick={() => goToSlide(activeSlide + 1)}
        disabled={activeSlide === slideBackgrounds.length - 1}
        aria-label={`Gambar berikutnya untuk ${title}`}
        className="absolute bottom-0 left-[28%] h-[17%] w-[38%] bg-[#102b82] shadow-[3px_4px_0_#e833a9] transition hover:translate-y-1 hover:shadow-[3px_6px_0_#e833a9] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e833a9] disabled:cursor-not-allowed"
      />
    </div>
  );
}
