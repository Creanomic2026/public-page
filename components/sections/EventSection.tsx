import Image from "next/image";
import KilasBalikCarousel from "@/components/ui/KilasBalikCarousel";
import Reveal from "@/components/anim/Reveal";

/**
 * Kilas Balik CREANOMIC 2025 Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Custom image header: kilas-balik.png
 * - Single large image carousel with caption overlay
 * - Sharp border (tanpa rounded) sesuai desain
 * - Otomatis berganti setiap 4 detik
 * - Card tambahan dapat diedit di @/data/kilasBalik.ts
 */
export default function EventSection() {
  return (
    <section
      id="event"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "32px",
        paddingBottom: "64px",
      }}
    >
      {/* ── Top Swirl Divider (Pindahan dari Mascot Section) ── */}
      <div className="w-full flex justify-center overflow-hidden mb-12 pointer-events-none select-none rotate-180">
        <Image
          src="/images/icons/swirl-divider.png"
          alt="Y2K Swirl Divider"
          width={1920}
          height={257}
          className="w-full h-auto object-contain"
          unoptimized
        />
      </div>

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center">

        {/* Section Image Header with generous ~64px gap to content */}
        <Reveal className="w-full flex justify-center items-center mb-14 sm:mb-16 md:mb-20 text-center" y={22}>
          <Image
            src="/images/headers/kilas-balik.png"
            alt="Kilas Balik CREANOMIC 2025"
            width={1024}
            height={111}
            className="w-full max-w-[600px] sm:max-w-[720px] h-auto object-contain mx-auto"
            style={{ display: "block", margin: "0 auto" }}
            priority
            unoptimized
          />
        </Reveal>

        {/* ── Single Large Image Carousel (Auto-Play 4s) ── */}
        <Reveal className="w-full flex justify-center items-center mx-auto text-center" scale={0.97} y={34}>
          <KilasBalikCarousel autoPlayInterval={4000} />
        </Reveal>

      </div>

      {/* ── Swirl Divider (Memenuhi Layar / Full-Width Edge-to-Edge) ── */}
      <div className="w-full flex justify-center overflow-hidden mt-14 pointer-events-none select-none">
        <Image
          src="/images/icons/swirl-divider.png"
          alt="Y2K Swirl Divider"
          width={1920}
          height={257}
          className="w-full h-auto object-contain"
          unoptimized
        />
      </div>
    </section>
  );
}
