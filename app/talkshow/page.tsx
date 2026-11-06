import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import RibbonTitle from "@/components/ui/RibbonTitle";
import PitBanner from "@/components/ui/PitBanner";
import { TALKSHOW_SPEAKERS } from "@/data/talkshow";

export const metadata = {
  title: "Talkshow",
  description:
    "CREANOMIC Talkshow 2026 — ruang diskusi inspiratif bersama Brillyanes Sanawiri dan Evan Haydar tentang kreativitas, inovasi, dan karier di era digital.",
};

export default function TalkshowPage() {
  return (
    <>
      <PageHero preTitle="What's on the Stage?" title="CREANOMIC TALKSHOW" />

      {/* TENTANG TALKSHOW */}
      <PageSection paddingTop={240}>
        <div className="relative mx-auto w-full max-w-[900px] pt-6">
          <RibbonTitle
            title="TALKSHOW"
            className="absolute -top-1 left-1/2 z-10 -translate-x-1/2"
          />
          <div className="pop-card px-6 pb-10 pt-12 md:px-10 md:pt-14">
            <div
              className="space-y-4 text-sm leading-relaxed text-white md:text-base"
              style={{ fontFamily: "var(--font-work-sans)", lineHeight: "1.85" }}
            >
              <p>
                CREANOMIC Talkshow merupakan acara inspiratif yang menghadirkan
                para kreator, desainer, dan pelaku industri digital untuk
                berbagi pengalaman dalam dunia kreatif modern. Melalui diskusi
                terbuka, peserta dapat belajar mengenai proses membangun
                branding, strategi desain, serta bagaimana kolaborasi kreatif
                dapat memperluas peluang karier di era digital.
              </p>
              <p>
                Talkshow ini juga menjadi ruang untuk berjejaring, bertukar ide,
                dan menyelaraskan kembali semangat berkarya bersama komunitas
                kreatif.
              </p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* NARASUMBER */}
      <PageSection id="speakers">
        <div className="mx-auto w-full max-w-[1000px]">
          <div className="mb-10 text-center md:mb-14">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFD43D] sm:text-xs"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              CREANOMIC Talkshow 2026
            </p>
            <h2
              className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-slackey)",
                WebkitTextStroke: "2px #F849C1",
                textShadow: "3px 3px 0px #0B24F3",
              }}
            >
              NARASUMBER
            </h2>
            <span className="mx-auto mt-2 block h-[6px] w-24 -skew-x-12 rounded-full bg-[#FFD43D]" />
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:gap-10">
            {TALKSHOW_SPEAKERS.map((speaker, index) => (
              <article key={speaker.id} className="group relative">
                <div className="overflow-hidden rounded-[28px] border-[5px] border-[#FFD43D] bg-[#F849C1] shadow-[8px_8px_0px_#0B0F19] transition-transform duration-300 group-hover:-translate-y-1">
                  {/* Portrait stage */}
                  <div className="relative mx-3 mt-3 flex h-[310px] items-end justify-center overflow-hidden rounded-[16px] border-[3px] border-[#0B0F19] bg-[#FFE17A] sm:h-[350px]">
                    <div
                      className="pointer-events-none absolute inset-0 opacity-25"
                      style={{
                        backgroundImage:
                          "radial-gradient(#0B24F3 1.5px, transparent 1.5px)",
                        backgroundSize: "18px 18px",
                      }}
                      aria-hidden
                    />
                    <div
                      className="pointer-events-none absolute -bottom-20 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-[#F849C1]/70 md:h-72 md:w-72"
                      aria-hidden
                    />
                    <span
                      className="absolute left-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#0B0F19] bg-[#0B24F3] text-xs font-black text-white shadow-[2px_2px_0px_#0B0F19]"
                      style={{ fontFamily: "var(--font-work-sans)" }}
                    >
                      0{index + 1}
                    </span>
                    <Image
                      src={speaker.photo}
                      alt={`${speaker.name}, narasumber CREANOMIC Talkshow 2026`}
                      width={720}
                      height={900}
                      sizes="(max-width: 640px) 90vw, 440px"
                      className="relative z-10 h-[94%] w-auto object-contain object-bottom drop-shadow-[5px_8px_0_rgba(11,15,25,0.18)] transition-transform duration-300 group-hover:scale-[1.03]"
                      unoptimized
                    />
                  </div>

                  {/* Name & role */}
                  <div className="px-5 pb-6 pt-5 text-center sm:px-6">
                    <span className="tag-y2k">Narasumber</span>
                    <h3
                      className="mt-3 text-xl leading-tight text-white sm:text-2xl"
                      style={{
                        fontFamily: "var(--font-slackey)",
                        textShadow: "2px 2px 0px #0B0F19",
                      }}
                    >
                      {speaker.name}
                    </h3>
                    <p
                      className="mt-2 text-[11px] font-bold uppercase tracking-[0.14em] text-white/90 sm:text-xs"
                      style={{ fontFamily: "var(--font-work-sans)" }}
                    >
                      {speaker.role}
                    </p>
                    <p
                      className="mt-1 text-sm font-semibold text-[#FFD43D]"
                      style={{ fontFamily: "var(--font-work-sans)" }}
                    >
                      {speaker.organization}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageSection>

      {/* COMING SOON — GALERI DOKUMENTASI */}
      <PageSection paddingTop={32}>
        <div className="mx-auto w-full max-w-[900px]">
          <div className="mb-8 text-center">
            <p
              className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#FFD43D] sm:text-xs"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Talkshow Gallery
            </p>
            <h2
              className="mt-2 text-3xl text-white sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-slackey)",
                WebkitTextStroke: "2px #F849C1",
                textShadow: "3px 3px 0px #0B24F3",
              }}
            >
              COMING SOON
            </h2>
            <span className="mx-auto mt-2 block h-[6px] w-24 -skew-x-12 rounded-full bg-[#FFD43D]" />
          </div>

          <div className="rounded-[28px] border-[6px] border-[#D6087D] bg-[#F849C1] px-6 py-10 text-center shadow-[8px_8px_0px_#0B0F19] md:px-12 md:py-12">
            <p
              className="text-base font-semibold leading-relaxed text-white md:text-xl"
              style={{ fontFamily: "var(--font-work-sans)", lineHeight: "1.7" }}
            >
              Galeri dokumentasi dari CREANOMIC Talkshow akan segera hadir.
              Nantikan momen-momen inspiratif dan insight menarik dari para
              pembicara kami!
            </p>
          </div>
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
