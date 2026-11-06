import Image from "next/image";
import Reveal from "@/components/anim/Reveal";

/**
 * Mascot Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Top Image Header: "MEET OUR MASCOT"
 * - Pink square wobbly card with Mico, the official CREANOMIC mascot
 * - Golden ornament accents behind the card
 * - Swirl divider below the section (rendered by EventSection)
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

        {/* ── Center Square Mascot Card + Golden Ornaments + Side Indicator Pills ── */}
        <Reveal className="relative flex items-center justify-center max-w-md mx-auto mb-8 text-center" scale={0.92} y={30}>
          {/* Gold ornament decorations */}
          <Image
            src="/images/icons/gold-ornament.png"
            alt=""
            aria-hidden
            width={220}
            height={220}
            className="pointer-events-none absolute -left-8 -top-7 w-20 -rotate-12 opacity-75 sm:-left-12 sm:w-24 md:w-28"
            unoptimized
          />
          <Image
            src="/images/icons/gold-ornament.png"
            alt=""
            aria-hidden
            width={220}
            height={220}
            className="pointer-events-none absolute -bottom-5 -right-8 w-16 rotate-12 opacity-65 sm:-right-12 sm:w-20 md:w-24"
            unoptimized
          />

          {/* Square Card */}
          <div className="relative w-72 h-80 sm:w-80 sm:h-96 md:w-[370px] md:h-[430px] pop-card flex items-end justify-center p-4 sm:p-5 overflow-hidden mx-auto">
            <div
              className="pointer-events-none absolute inset-3 rounded-[200px_10px_190px_10px/10px_190px_10px_200px] border-2 border-dashed border-[#FFD43D]/50"
              aria-hidden
            />
            <Image
              src="/images/mascot/mico.png"
              alt="Mico, maskot resmi CREANOMIC 2026"
              width={580}
              height={800}
              sizes="(max-width: 640px) 288px, (max-width: 768px) 320px, 370px"
              className="relative z-10 h-full w-auto object-contain object-bottom animate-float"
              unoptimized
            />
          </div>

          {/* Right side indicator bars */}
          <div className="absolute -right-6 sm:-right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2">
            <span className="w-1.5 sm:w-2 h-8 rounded-full bg-[#0B24F3] border border-[#0B0F19]" />
            <span className="w-1.5 sm:w-2 h-8 rounded-full bg-[#F849C1] border border-[#0B0F19]" />
          </div>
        </Reveal>

        {/* ── Mascot Name ── */}
        <Reveal className="max-w-xl mx-auto" y={18}>
          <p
            className="text-[11px] font-bold uppercase tracking-[0.35em] text-[#F849C1]"
            style={{ fontFamily: "var(--font-work-sans, 'Work Sans', sans-serif)" }}
          >
            Meet the mascot
          </p>
          <h2
            className="mt-1 text-4xl sm:text-5xl md:text-6xl leading-none"
            style={{
              fontFamily: "var(--font-slackey, 'Slackey', cursive)",
              color: "#0B24F3",
              textShadow: "3px 3px 0px #FFD43D, 5px 5px 0px #0B0F19",
            }}
          >
            MICO
          </h2>
          <p
            className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[#0B0F19]/80 sm:text-base"
            style={{ fontFamily: "var(--font-noto-sans, 'Noto Sans', sans-serif)" }}
          >
            Maskot resmi CREANOMIC 2026 — siap menemani perjalanan kreatifmu
            menuju inovasi tanpa batas.
          </p>
        </Reveal>

      </div>
    </section>
  );
}
