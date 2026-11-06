import Image from "next/image";
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
    image: "/images/documentation/expo-tenant-booths.jpg",
    imageAlt: "Suasana booth Market Days CREANOMIC 2025",
    description:
      "Market Days merupakan kegiatan pameran dan bazar yang bertujuan untuk mengembangkan semangat kewirausahaan di kalangan mahasiswa. Acara ini menjadi wadah bagi peserta untuk memperkenalkan produk dan jasa mereka kepada masyarakat luas, sekaligus membangun jejaring bisnis. Dengan konsep yang interaktif dan edukatif, Market Days diharapkan dapat meningkatkan literasi bisnis serta memperkuat ekonomi kreatif di lingkungan kampus.",
  },
  {
    id: "02",
    title: "EXHIBITION",
    image: "/images/documentation/creative-showcase.jpg",
    imageAlt: "Pameran karya kreatif CREANOMIC 2025",
    description:
      "Melalui rangkaian Exhibition yang inspiratif, kamu bakal diajak menyaksikan inovasi visual, karya interaktif, dan ide-ide segar hasil buah pikir anak muda penuh semangat kreasi! Ini bukan sekadar pameran, tapi ruang unjuk rasa kreativitas dan inovasi—dari Mahasiswa Fakultas Vokasi Universitas Brawijaya untuk masa depan yang lebih berdampak!",
  },
  {
    id: "03",
    title: "ENTERTAINMENT",
    image: "/images/documentation/homeband-performance.jpg",
    imageAlt: "Penampilan homeband CREANOMIC 2025",
    description:
      "Nikmati keseruan malam penuh energi lewat penampilan spesial dari band, musik akustik, dan pertunjukan hiburan lainnya yang siap bikin kamu go with the flow bareng teman-teman se-UB! Saatnya rayakan kreativitas dengan cara yang paling seru- dengan tawa, musik, dan momen yang nggak terlupakan! Jangan lupa ajak semua temanmu dan jadi bagian dari vibes luar biasa ini!",
  },
  {
    id: "04",
    title: "TALKSHOW",
    image: "/images/documentation/talkshow-empowering-innovators.jpg",
    imageAlt: "Sesi talkshow CREANOMIC 2025",
    description:
      "Di rangkaian Creanomic juga ada Talkshow sebagai ruang diskusi interaktif bersama narasumber keren dan ahli di bidangnya yang akan membahas topik-topik menarik seputar bisnis, kreativitas, teknologi, dan dunia industri masa kini! Cocok banget buat kamu yang pengen upgrade wawasan, dapat motivasi baru, dan terinspirasi langsung dari para praktisi profesional yang udah terbukti sukses di bidangnya!",
    href: "/talkshow",
  },
  {
    id: "05",
    title: "COMPETITION",
    image: "/images/documentation/business-competition.jpg",
    imageAlt: "Kompetisi bisnis CREANOMIC 2025",
    description:
      "Kompetisi ini bukan sekadar lomba, tapi panggung besar untuk mengasah ide, membangun relasi, dan jadi inspirasi! Apapun latar belakangmu, saatnya buktikan kemampuanmu di hadapan juri dan peserta se-Indonesia!",
    href: "/competition",
  },
];

/** Foto dokumentasi acara CREANOMIC 2025 dengan frame pop-art. */
function EventMedia({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="relative w-full">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border-4 border-[#0B24F3] bg-[#0B1E66] shadow-[8px_8px_0px_#0B0F19]">
        <Image
          src={image}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          unoptimized
        />
        <span className="absolute -left-1 top-1/2 z-10 h-10 w-2 -translate-y-1/2 rounded-sm bg-[#F849C1]" />
        <span
          className="absolute left-4 top-4 z-10 rounded-full border-2 border-[#0B0F19] bg-[#FFD43D] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#0B0F19] shadow-[2px_2px_0px_#0B0F19]"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          CREANOMIC 2025
        </span>
      </div>
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
                <EventMedia image={event.image} alt={event.imageAlt} />
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
