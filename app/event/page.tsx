import Image from "next/image";
import Link from "next/link";
import EventArtworkCarousel from "@/components/sections/EventArtworkCarousel";

export const metadata = {
  title: "Event - CREANOMIC",
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
      "Nikmati keseruan malam penuh energi lewat penampilan spesial dari band, musik akustik, dan pertunjukan hiburan lainnya yang siap bikin kamu go with the flow bareng teman-teman se-UB! Saatnya rayakan kreativitas dengan cara yang paling seru—dengan tawa, musik, dan momen yang nggak terlupakan! Jangan lupa ajak semua temanmu dan jadi bagian dari vibes luar biasa ini!",
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

export default function EventPage() {
  return (
    <div id="event-page" className="min-h-screen bg-white text-[#102b82]">
      <section
        className="relative z-10 flex min-h-[420px] items-center justify-center overflow-hidden px-5 pb-20 pt-28 text-center md:min-h-[520px] md:pt-32"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #1734d1 0, #1734d1 24px, #ef39b7 24px, #ef39b7 48px, #ff8bcc 48px, #ff8bcc 72px)",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-[#fff] [mask-image:linear-gradient(to_bottom,black_0%,black_70%,transparent_100%)]" />

        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-3 -rotate-2 rounded-md bg-[#f537ad] px-4 py-1 font-label text-lg font-extrabold text-white shadow-[3px_4px_0_#102b82] md:text-2xl">
            What&apos;s Happening
          </p>
          <h1 className="m-0 -rotate-1 font-hero text-[clamp(2.5rem,9vw,6.5rem)] leading-none tracking-[0.04em] text-white [text-shadow:3px_4px_0_#102b82,6px_7px_0_#d92c9d]">
            AT CREANOMIC
          </h1>
          <p className="mt-1 -rotate-1 border-y-4 border-[#f5cf2d] bg-[#ed34ad] px-4 py-1 font-label text-sm font-black text-white shadow-[3px_4px_0_#102b82] md:text-xl">
            Student Fair <span className="mx-2 text-[#ffdb35]">|</span> 2026
          </p>
        </div>

      </section>

      <div className="pointer-events-none relative z-30 -mb-[104px] -mt-[76px] h-[180px]" aria-hidden="true">
        <div className="absolute -left-12 top-[-5px] flex items-center md:-left-5">
          <Image src="/images/about/Group 1410136425.svg" alt="" width={180} height={180} className="h-36 w-36 md:h-40 md:w-40" />
          <Image src="/images/about/Group 1410136425.svg" alt="" width={130} height={130} className="-ml-10 mt-10 h-24 w-24 md:h-28 md:w-28" />
          <Image src="/images/about/Star 24.svg" alt="" width={70} height={70} className="-ml-2 mt-14 h-12 w-12 md:h-16 md:w-16" />
        </div>

        <div className="absolute left-1/2 top-10 flex -translate-x-1/2 items-center">
          <Image src="/images/about/Star 32.svg" alt="" width={96} height={96} className="z-10 -mr-5 h-14 w-14 md:h-20 md:w-20" />
          <Image src="/images/about/Star 24.svg" alt="" width={130} height={130} className="z-20 h-24 w-24 md:h-32 md:w-32" />
          <Image src="/images/about/Star 32.svg" alt="" width={96} height={96} className="z-10 -ml-5 h-14 w-14 md:h-20 md:w-20" />
        </div>

        <div className="absolute -right-12 top-[-5px] flex -scale-x-100 items-center md:-right-5">
          <Image src="/images/about/Group 1410136425.svg" alt="" width={180} height={180} className="h-36 w-36 md:h-40 md:w-40" />
          <Image src="/images/about/Group 1410136425.svg" alt="" width={130} height={130} className="-ml-10 mt-10 h-24 w-24 md:h-28 md:w-28" />
          <Image src="/images/about/Star 24.svg" alt="" width={70} height={70} className="-ml-2 mt-14 h-12 w-12 md:h-16 md:w-16" />
        </div>
      </div>

      <section
        className="relative overflow-x-clip px-5 pb-28 pt-28 md:px-10 md:pb-36 md:pt-32"
        style={{
          backgroundColor: "#fff",
          backgroundImage:
            "radial-gradient(circle, rgba(42,130,231,.24) 3px, transparent 3.2px)",
          backgroundSize: "20px 20px",
        }}
      >
        <div className="relative mx-auto flex max-w-5xl flex-col gap-20 md:gap-28">
          {events.map((event, index) => (
            <article
              key={event.id}
              className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
                index % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <EventArtworkCarousel title={event.title} number={event.id} />

              <div className="relative mx-auto w-full max-w-[440px] rotate-[-1deg] rounded-[18px] border-[7px] border-[#ffd735] bg-[#f43bb5] px-5 pb-6 pt-8 shadow-[5px_6px_0_#e8b925] md:px-7 md:pb-7">
                <h2 className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm border-y-4 border-[#f4c92d] bg-[#ffd735] px-5 py-1 text-center font-label text-sm font-black text-[#102b82] shadow-[2px_3px_0_#d9a900] md:text-base">
                  {event.title}
                </h2>
                <p className="font-body text-justify text-[13px] font-semibold leading-[1.55] text-white md:text-sm">
                  {event.description}
                </p>
                {event.href && (
                  <Link
                    href={event.href}
                    className="mt-4 inline-flex rounded-full border-2 border-[#102b82] bg-[#ffd735] px-4 py-2 font-label text-xs font-extrabold text-[#102b82] transition-transform hover:-translate-y-0.5 md:text-sm"
                  >
                    {event.title === "TALKSHOW" ? "Lihat Talkshow" : "Lihat Competition"}
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>

      </section>
    </div>
  );
}
