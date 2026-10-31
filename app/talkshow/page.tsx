import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import RibbonTitle from "@/components/ui/RibbonTitle";
import PitBanner from "@/components/ui/PitBanner";

export const metadata = {
  title: "Talkshow",
  description:
    "CREANOMIC Talkshow — ruang diskusi inspiratif bersama para kreator, desainer, dan pelaku industri digital.",
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

      {/* COMING SOON */}
      <PageSection>
        <div className="mx-auto w-full max-w-[900px]">
          <div className="mb-8 text-center">
            <h2
              className="text-3xl text-white sm:text-4xl md:text-5xl"
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
