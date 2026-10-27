import Image from "next/image";

/**
 * Hero Section — Y2K Pop Art.
 * - Vertical alternating stripes: Blue (#0B24F3) and Hot Pink (#F849C1)
 * - Large CREANOMIC logo centered with soft white radial glow
 * - sphere-deco.png large and bold, spanning edge-to-edge across the bottom boundary
 */
export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full flex flex-col items-center justify-center overflow-visible hero-stripe-bg"
      style={{
        minHeight: "70vh",
        paddingTop: "100px",
        paddingBottom: "140px",
      }}
    >
      {/* ── Centered Logo + White Glow ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto px-4 my-auto">
        {/* White soft radial glow ellipse behind the logo */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 85% 85% at 50% 50%, rgba(255,255,255,0.60) 0%, rgba(255,255,255,0.22) 40%, transparent 70%)",
            filter: "blur(6px)",
          }}
        />

        {/* Logo — fully centered & prominent */}
        <div className="relative w-full max-w-[88vw] sm:max-w-[640px] md:max-w-[780px] lg:max-w-[880px]" style={{ zIndex: 1 }}>
          <Image
            src="/images/logo-creanomic.png"
            alt="CREANOMIC student-fair 2026"
            width={1024}
            height={205}
            className="w-full h-auto object-contain drop-shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-transform duration-300 hover:scale-105"
            priority
            unoptimized
          />
        </div>
      </div>

      {/* ── Sphere & Star Deco on the boundary line (large, edge-to-edge) ── */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-[45.5%] z-20 pointer-events-none select-none w-[118vw] max-w-none flex justify-center overflow-visible"
      >
        <Image
          src="/images/hero/sphere-deco.png"
          alt="CREANOMIC Y2K Decorative Spheres & Stars"
          width={2013}
          height={405}
          className="w-full h-auto min-h-[190px] sm:min-h-[240px] md:min-h-[290px] lg:min-h-[340px] object-contain drop-shadow-[0_6px_20px_rgba(0,0,0,0.2)]"
          priority
          unoptimized
        />
      </div>
    </section>
  );
}
