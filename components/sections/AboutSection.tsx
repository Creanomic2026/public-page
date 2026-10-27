import SectionHeader from "@/components/ui/SectionHeader";

/**
 * About Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Explicit paddingTop of 220px to clear the hanging sphere-deco with a full ~64px breathing space
 * - Centered yellow trapezoid ribbon: "TENTANG CREANOMIC"
 * - Centered pink pop-card with explicit paddingBottom: 64px
 */
export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "clamp(240px, 12vw + 80px, 320px)",
        paddingBottom: "64px",
      }}
    >
      <div className="relative z-10 w-full max-w-[960px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col items-center text-center">

        {/* Ribbon Header with generous ~64px gap to content */}
        <div className="w-full flex justify-center items-center mb-14 sm:mb-16 md:mb-20 text-center">
          <SectionHeader title="TENTANG CREANOMIC" />
        </div>

        {/* Pop-art Card */}
        <div className="pop-card p-6 sm:p-8 md:p-10 w-full mx-auto text-center">
          <p
            className="text-sm sm:text-base md:text-lg leading-relaxed text-white font-semibold text-center mx-auto"
            style={{
              fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
              lineHeight: "1.8",
            }}
          >
            CREANOMIC (Creative Economy Innovation Summit) 2026 hadir sebagai wadah bagi pemuda
            untuk mengasah kemampuan mereka melalui berbagai kompetisi dan kegiatan interaktif.
            CREANOMIC 2026 tidak hanya sekadar kompetisi, tetapi juga menjadi platform edukatif
            dan networking yang menghadirkan pembicara inspiratif, stand pameran industri dan
            UMKM, serta sesi promosi organisasi mahasiswa.
          </p>
        </div>

      </div>
    </section>
  );
}
