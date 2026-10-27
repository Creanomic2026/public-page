import Image from "next/image";

/**
 * Visi & Misi Section — Y2K Pop Art.
 * - Dot-grid white background
 * - Custom image header: vision-mission.png
 * - Two hot-pink wobbly cards side-by-side with yellow borders & solid shadow
 * - Top yellow pills: "VISI" and "MISI"
 * - 64px padding top and bottom
 * - Content centered
 */
export default function VisiMisiSection() {
  return (
    <section
      id="visi-misi"
      className="relative dot-grid-bg overflow-hidden w-full flex flex-col items-center justify-center text-center"
      style={{
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center text-center">

        {/* Section Image Header with generous ~64px gap to content */}
        <div className="w-full flex justify-center items-center mb-14 sm:mb-16 md:mb-20 text-center">
          <Image
            src="/images/headers/vision-mission.png"
            alt="Our VISION & MISSION"
            width={681}
            height={72}
            className="w-full max-w-[600px] sm:max-w-[680px] h-auto object-contain mx-auto"
            style={{ display: "block", margin: "0 auto" }}
            priority
            unoptimized
          />
        </div>

        {/* Two Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto w-full justify-center">

          {/* ── VISI CARD ── */}
          <div className="flex flex-col items-center h-full">
            <div className="w-full h-full pop-card py-8 sm:py-10 px-8 sm:px-10 md:px-12 flex flex-col items-center justify-start min-h-[320px] sm:min-h-[340px]">
              {/* Header Badge */}
              <div
                className="px-10 py-1.5 rounded-full mb-6 border-2 border-[#0B0F19] bg-[#FFD43D] shadow-[2px_2px_0px_#0B0F19] shrink-0"
              >
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0F19]"
                  style={{ fontFamily: "var(--font-slackey, 'Slackey', cursive)" }}
                >
                  VISI
                </span>
              </div>

              {/* Text — diberi safe padding agar tidak menempel ke border pop-art */}
              <p
                className="text-xs sm:text-sm md:text-base leading-relaxed text-white font-semibold text-center px-2 sm:px-4 md:px-6 my-auto"
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  lineHeight: "1.8",
                }}
              >
                Menjadikan CREANOMIC 2026 sebagai wadah inspiratif bagi generasi muda untuk berinovasi dan berkarya dalam bidang ekonomi kreatif, edukasi, dan sosial melalui kompetisi, pameran, dan networking.
              </p>
            </div>
          </div>

          {/* ── MISI CARD ── */}
          <div className="flex flex-col items-center h-full">
            <div className="w-full h-full pop-card py-8 sm:py-10 px-8 sm:px-10 md:px-12 flex flex-col items-center justify-start min-h-[320px] sm:min-h-[340px]">
              {/* Header Badge */}
              <div
                className="px-10 py-1.5 rounded-full mb-6 border-2 border-[#0B0F19] bg-[#FFD43D] shadow-[2px_2px_0px_#0B0F19] shrink-0"
              >
                <span
                  className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#0B0F19]"
                  style={{ fontFamily: "var(--font-slackey, 'Slackey', cursive)" }}
                >
                  MISI
                </span>
              </div>

              {/* Text — diberi safe padding agar tidak menempel ke border pop-art */}
              <p
                className="text-xs sm:text-sm md:text-base leading-relaxed text-white font-semibold text-center px-2 sm:px-4 md:px-6 my-auto"
                style={{
                  fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
                  lineHeight: "1.8",
                }}
              >
                Menyediakan platform kompetisi di bidang bisnis, teknologi, dan seni; mendorong kolaborasi dan networking antara peserta, akademisi, dan industri; memfasilitasi pameran produk inovasi pemuda dan wirausaha; mengadakan sesi edukatif dan inspiratif bersama tokoh industri terkemuka; serta mempromosikan inisiatif dan potensi mahasiswa secara luas dengan standar tinggi.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
