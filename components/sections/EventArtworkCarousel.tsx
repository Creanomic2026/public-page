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
  indicatorSide = "left",
}: {
  title: string;
  number: string;
  indicatorSide?: "left" | "right";
}) {
  const [activeSlide, setActiveSlide] = useState(0);

  const goToSlide = (slide: number) => {
    setActiveSlide(Math.max(0, Math.min(slide, slideBackgrounds.length - 1)));
  };

  return (
    <div
      role="group"
      aria-label={`Galeri gambar ${title}`}
      className="relative mx-auto aspect-[1.2/1] w-full max-w-[520px]"
    >
      <button
        type="button"
        onClick={() => goToSlide(activeSlide - 1)}
        disabled={activeSlide === 0}
        aria-label={`Gambar sebelumnya untuk ${title}`}
        className="absolute left-[25%] top-0 h-[9%] w-[50%] rounded-full bg-[#102b82] transition hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e833a9] disabled:cursor-not-allowed disabled:opacity-70"
      />

      <div
        className={`absolute ${
          indicatorSide === "right" ? "right-[8%]" : "left-[8%]"
        } top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3`}
      >
        {slideBackgrounds.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            aria-label={`Tampilkan gambar ${index + 1} dari 3 untuk ${title}`}
            aria-pressed={activeSlide === index}
            className={`h-3 w-3 rounded-sm border-0 p-0 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e833a9] ${
              activeSlide === index ? "bg-[#f537ad]" : "bg-[#102b82]"
            }`}
          />
        ))}
      </div>

      <div
        role="img"
        aria-label={`Gambar ${activeSlide + 1} dari 3 untuk ${title}`}
        aria-live="polite"
        className="absolute left-[10%] top-[12%] h-[76%] w-[80%] overflow-hidden rounded-[26px] bg-[#102b82]"
      >
        <div
          className="absolute inset-x-0 top-0 flex h-[300%] flex-col transition-transform duration-500 ease-in-out"
          style={{ transform: `translateY(-${activeSlide * (100 / slideBackgrounds.length)}%)` }}
        >
          {slideBackgrounds.map((background, index) => (
            <div
              key={index}
              aria-hidden="true"
              className="h-1/3 w-full shrink-0"
              style={{ background }}
            />
          ))}
        </div>
        <span className="sr-only">
          Placeholder foto {activeSlide + 1} untuk acara {title} ({number})
        </span>
      </div>

      <button
        type="button"
        onClick={() => goToSlide(activeSlide + 1)}
        disabled={activeSlide === slideBackgrounds.length - 1}
        aria-label={`Gambar berikutnya untuk ${title}`}
        className="absolute bottom-0 left-[25%] h-[9%] w-[50%] rounded-full bg-[#102b82] transition hover:translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e833a9] disabled:cursor-not-allowed disabled:opacity-70"
      />
    </div>
  );
}
