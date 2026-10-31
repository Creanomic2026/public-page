import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

/**
 * Mascot Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Top Image Header: "MEET OUR MASCOT"
 * - Pink square wobbly card (with vertical side indicator pills) centered
 * - Swirl divider below the section
 */
export default function MascotSection() {
  return (
    <section
      id="maskot"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center">

        {/* ── Top Image Header: MEET OUR MASCOT with generous ~64px gap to content ── */}
        <Reveal className="w-full flex justify-center items-center mb-14 sm:mb-16 md:mb-20 text-center" y={22}>
          <Image
            src="/images/headers/meet-our-mascot.png"
            alt="Meet Our Mascot"
            width={1024}
            height={166}
            className="w-full max-w-[520px] sm:max-w-[620px] h-auto object-contain mx-auto"
            style={{ display: "block", margin: "0 auto" }}
            priority
            unoptimized
          />
        </Reveal>

        {/* ── Center Square Mascot Card + Side Indicator Pills ── */}
        <Reveal className="relative flex items-center justify-center max-w-md mx-auto mb-6 text-center" scale={0.92} y={30}>
          {/* Square Card */}
          <div
            className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 pop-card flex items-center justify-center p-6 relative overflow-hidden mx-auto"
          >
            {/* Mascot Character Placeholder / Image */}
            <div className="w-full h-full flex flex-col items-center justify-center text-center p-4">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-4 border-[#0B0F19] bg-[#FFD43D] flex items-center justify-center shadow-[4px_4px_0px_#0B0F19] mb-3 animate-float">
                <span className="text-5xl sm:text-6xl select-none">🤖</span>
              </div>
              <p
                className="text-lg sm:text-xl font-bold text-[#FFD43D] drop-shadow-[2px_2px_0px_#0B0F19]"
                style={{ fontFamily: "var(--font-slackey, 'Slackey', cursive)" }}
              >
                CREANO
              </p>
            </div>
          </div>

          {/* Right side indicator bars */}
          <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <span className="w-1.5 sm:w-2 h-8 rounded-full bg-[#0B24F3] border border-[#0B0F19]" />
            <span className="w-1.5 sm:w-2 h-8 rounded-full bg-[#F849C1] border border-[#0B0F19]" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
