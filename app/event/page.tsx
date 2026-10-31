import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import RibbonTitle from "@/components/ui/RibbonTitle";
import PitBanner from "@/components/ui/PitBanner";

export const metadata = {
  title: "Event",
  description:
    "Rangkaian acara Creanomic termasuk Market Days, Exhibition, Entertainment, Talkshow, dan Competition.",
};

const events = [
  {
    id: "01",
    title: "MARKET DAYS",
    description:
      "Market Days merupakan kegiatan pameran dan bazar yang bertujuan untuk mengembangkan semangat kewirausahaan di kalangan mahasiswa. Acara ini menjadi wadah bagi peserta untuk memperkenalkan produk dan jasa mereka kepada masyarakat luas, sekaligus membangun jejaring bisnis. Dengan konsep yang interaktif dan edukatif, Market Days diharapkan dapat meningkatkan literasi bisnis serta memperkuat ekonomi kreatif di lingkungan kampus.",
  },
  {
    id: "02",
    title: "EXHIBITION",
    description:
      "Melalui rangkaian Exhibition yang inspiratif, kamu bakal diajak menyaksikan inovasi visual, karya interaktif, dan ide-ide segar hasil buah pikir anak muda penuh semangat kreasi! Ini bukan sekadar pameran, tapi ruang unjuk rasa kreativitas dan inovasi—dari Mahasiswa Fakultas Vokasi Universitas Brawijaya untuk masa depan yang lebih berdampak!",
  },
  {
    id: "03",
    title: "ENTERTAINMENT",
    description:
      "Nikmati keseruan malam penuh energi lewat penampilan spesial dari band, musik akustik, dan pertunjukan hiburan lainnya yang siap bikin kamu go with the flow bareng teman-teman se-UB! Saatnya rayakan kreativitas dengan cara yang paling seru- dengan tawa, musik, dan momen yang nggak terlupakan! Jangan lupa ajak semua temanmu dan jadi bagian dari vibes luar biasa ini!",
  },
  {
    id: "04",
    title: "TALKSHOW",
    description:
      "Di rangkaian Creanomic juga ada Talkshow sebagai ruang diskusi interaktif bersama narasumber keren dan ahli di bidangnya yang akan membahas topik-topik menarik seputar bisnis, kreativitas, teknologi, dan dunia industri masa kini! Cocok banget buat kamu yang pengen upgrade wawasan, dapat motivasi baru, dan terinspirasi langsung dari para praktisi profesional yang udah terbukti sukses di bidangnya!",
    href: "/talkshow",
  },
  {
    id: "05",
    title: "COMPETITION",
    description:
      "Kompetisi ini bukan sekadar lomba, tapi panggung besar untuk mengasah ide, membangun relasi, dan jadi inspirasi! Apapun latar belakangmu, saatnya buktikan kemampuanmu di hadapan juri dan peserta se-Indonesia!",
    href: "/competition",
  },
];

/** Placeholder visual acara — blok navy dengan aksen pink, mengikuti mockup. */
function EventMedia() {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="h-9 w-1/2 rounded-lg bg-[#0B1E66]" />
      <div className="relative h-[280px] w-full rounded-xl bg-[#0B1E66] md:h-[340px]">
        <span className="absolute -left-1 top-1/2 h-10 w-2 -translate-y-1/2 rounded-sm bg-[#F849C1]" />
      </div>
      <div className="h-9 w-1/2 rounded-lg bg-[#0B1E66]" />
    </div>
  );
}

export default function EventPage() {
  return (
    <>
      <PageHero
        preTitle="What's Happening"
        title="AT CREANOMIC"
      />

      <PageSection paddingTop={240}>
        <div className="flex flex-col gap-20 md:gap-28">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Visual */}
              <div className="w-full md:w-1/2">
                <EventMedia />
              </div>

              {/* Pop-art text card */}
              <div className="relative w-full pt-6 md:mt-0 md:w-1/2">
                <RibbonTitle
                  title={event.title}
                  className="absolute -top-1 left-1/2 z-10 -translate-x-1/2"
                />
                <div className="pop-card px-6 pb-8 pt-10 md:px-8 md:pt-12">
                  <p
                    className="text-left text-sm leading-relaxed text-white md:text-justify md:text-base"
                    style={{ fontFamily: "var(--font-work-sans)" }}
                  >
                    {event.description}
                  </p>
                  {event.href && (
                    <a href={event.href} className="btn-primary-y2k mt-6">
                      {event.title === "TALKSHOW"
                        ? "LIHAT TALKSHOW"
                        : "LIHAT COMPETITION"}{" "}
                      →
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
