import Image from "next/image";
import type { ReactNode } from "react";

/**
 * PageHero — hero standar halaman (mengikuti mockup & HeroSection homepage).
 * - Stripe biru / hot pink + glow putih
 * - Pre-title & judul Slackey dengan outline
 * - Badge "student-fair" + "2026"
 * - sphere-deco.png menindih batas bawah section, sama seperti homepage
 */
interface PageHeroProps {
  preTitle?: string;
  title: ReactNode;
  subtitle?: string;
  cta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  titleClassName?: string;
}

export default function PageHero({
  preTitle,
  title,
  subtitle,
  cta,
  secondaryCta,
  titleClassName = "text-4xl sm:text-6xl md:text-8xl",
}: PageHeroProps) {
  return (
    <section className="hero-stripe-bg relative w-full overflow-visible">
      {/* Soft white glow, sama seperti hero homepage */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 72% 65% at 50% 45%, rgba(255,255,255,0.40) 0%, rgba(255,255,255,0.14) 45%, transparent 72%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 pb-[150px] pt-[120px] text-center sm:px-8 md:pt-[150px]">
        {preTitle && (
          <p
            className="text-2xl leading-tight text-white sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-slackey)",
              WebkitTextStroke: "1.5px #F849C1",
              textShadow: "3px 3px 0px #0B0F19",
            }}
          >
            {preTitle}
          </p>
        )}

        <h1
          className={`mt-2 leading-[1.05] text-white ${titleClassName}`}
          style={{
            fontFamily: "var(--font-slackey)",
            WebkitTextStroke: "1px #0B0F19",
            textShadow:
              "3px 3px 0px #0B1BA4, 6px 6px 0px rgba(11,15,25,0.35)",
          }}
        >
          {title}
        </h1>

        {/* Badge student-fair / 2026 */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:gap-3">
          <span
            className="rounded-md border-2 border-white bg-[#F849C1] px-3 py-1 text-xs font-bold lowercase text-white shadow-[3px_3px_0px_#0B0F19] sm:text-sm"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            student-fair
          </span>
          <span
            className="rounded-md border-2 border-white bg-[#F849C1] px-3 py-1 text-xs font-bold text-white shadow-[3px_3px_0px_#0B0F19] sm:text-sm"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            2026
          </span>
        </div>

        {subtitle && (
          <p
            className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white sm:text-base md:text-lg"
            style={{
              fontFamily: "var(--font-work-sans)",
              textShadow: "0 1px 4px rgba(0,0,0,0.35)",
            }}
          >
            {subtitle}
          </p>
        )}

        {(cta || secondaryCta) && (
          <div className="mt-7 flex flex-col items-center gap-3 sm:flex-row">
            {cta && (
              <a href={cta.href} className="btn-primary-y2k">
                {cta.label}
              </a>
            )}
            {secondaryCta && (
              <a href={secondaryCta.href} className="btn-outline-y2k">
                {secondaryCta.label}
              </a>
            )}
          </div>
        )}
      </div>

      {/* Sphere & star deco di batas bawah hero — sama seperti homepage */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 z-20 flex w-[118vw] max-w-none -translate-x-1/2 translate-y-[45.5%] select-none justify-center overflow-visible">
        <Image
          src="/images/hero/sphere-deco.png"
          alt="CREANOMIC Y2K Decorative Spheres & Stars"
          width={2013}
          height={405}
          className="h-auto min-h-[170px] w-full object-contain sm:min-h-[220px] md:min-h-[270px] lg:min-h-[320px]"
          unoptimized
          priority
        />
      </div>
    </section>
  );
}
