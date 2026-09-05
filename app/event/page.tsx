export const metadata = {
  title: "Event - CREANOMIC",
  description: "Rangkaian acara Creanomic termasuk Market Days, Exhibition, Entertainment, Talkshow, dan Competition.",
};

const events = [
  {
    id: "01",
    title: "MARKET DAYS",
    description: "Market Days merupakan kegiatan pameran dan bazar yang bertujuan untuk mengembangkan semangat kewirausahaan di kalangan mahasiswa. Acara ini menjadi wadah bagi peserta untuk memperkenalkan produk dan jasa mereka kepada masyarakat luas, sekaligus membangun jejaring bisnis. Dengan konsep yang interaktif dan edukatif, Market Days diharapkan dapat meningkatkan literasi bisnis serta memperkuat ekonomi kreatif di lingkungan kampus.",
  },
  {
    id: "02",
    title: "EXHIBITION",
    description: "Melalui rangkaian Exhibition yang inspiratif, kamu bakal diajak menyaksikan inovasi visual, karya interaktif, dan ide-ide segar hasil buah pikir anak muda penuh semangat kreasi! Ini bukan sekadar pameran, tapi ruang unjuk rasa kreativitas dan inovasi—dari Mahasiswa Fakultas Vokasi Universitas Brawijaya untuk masa depan yang lebih berdampak!",
  },
  {
    id: "03",
    title: "ENTERTAINMENT",
    description: "Nikmati keseruan malam penuh energi lewat penampilan spesial dari band, musik akustik, dan pertunjukan hiburan lainnya yang siap bikin kamu go with the flow bareng teman-teman se-UB! Saatnya rayakan kreativitas dengan cara yang paling seru- dengan tawa, musik, dan momen yang nggak terlupakan! Jangan lupa ajak semua temanmu dan jadi bagian dari vibes luar biasa ini!",
  },
  {
    id: "04",
    title: "TALKSHOW",
    description: "Di rangkaian Creanomic juga ada Talkshow sebagai ruang diskusi interaktif bersama narasumber keren dan ahli di bidangnya yang akan membahas topik-topik menarik seputar bisnis, kreativitas, teknologi, dan dunia industri masa kini! Cocok banget buat kamu yang pengen upgrade wawasan, dapat motivasi baru, dan terinspirasi langsung dari para praktisi profesional yang udah terbukti sukses di bidangnya!",
  },
  {
    id: "05",
    title: "COMPETITION",
    description: "Kompetisi ini bukan sekadar lomba, tapi panggung besar untuk mengasah ide, membangun relasi, dan jadi inspirasi! Apapun latar belakangmu, saatnya buktikan kemampuanmu di hadapan juri dan peserta se-Indonesia!",
  },
];

export default function EventPage() {
  return (
    <section className="min-h-screen" style={{ backgroundColor: "var(--surface)" }}>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-28 md:px-12 md:pb-28 md:pt-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-5 font-label text-sm font-medium tracking-[0.3em]" style={{ color: "var(--brand-sky-blue)" }}>
            CREANOMIC 2026
          </p>
          <h1 className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl" style={{ color: "var(--on-surface)" }}>
            RANGKAIAN
            <br />
            <span className="text-gradient font-light italic">ACARA.</span>
          </h1>
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl font-body text-base leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
              Temukan berbagai kegiatan seru yang kami siapkan untuk pengalaman tak terlupakan.
            </p>
          </div>
        </div>
      </section>

      {/* EVENT LIST */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: "var(--card-bg-subtle)" }}>
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />

        <div className="relative mx-auto max-w-7xl">
          <div className="flex flex-col gap-16 md:gap-20">
            {events.map((event, index) => (
              <div
                key={event.id}
                className={`flex flex-col gap-8 md:flex-row md:items-center md:gap-12 ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image Placeholder */}
                <div
                  className="w-full overflow-hidden rounded-2xl md:w-1/2"
                  style={{ backgroundColor: "var(--surface-container)" }}
                >
                  <div className="flex aspect-[4/3] flex-col items-center justify-center">
                    <span className="font-label text-sm" style={{ color: "var(--text-muted)" }}>
                      [ Gambar {event.title} ]
                    </span>
                  </div>
                </div>

                {/* Text */}
                <div className="flex w-full flex-col md:w-1/2">
                  <span className="mb-2 font-label text-xs font-semibold tracking-widest" style={{ color: "var(--brand-sky-blue)" }}>
                    EVENT #{event.id}
                  </span>
                  <h2 className="font-display mb-4 text-3xl font-bold md:text-4xl" style={{ color: "var(--on-surface)" }}>
                    {event.title}
                  </h2>
                  <p className="font-body text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {event.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
}
