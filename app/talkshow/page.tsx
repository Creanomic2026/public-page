const speakers = [
  {
    id: 1,
    name: "Speaker Name",
    role: "Creative Director",
    image: "https://placehold.co/600x600?text=Speaker+01",
  },
  {
    id: 2,
    name: "Speaker Name",
    role: "Digital Creator",
    image: "https://placehold.co/600x600?text=Speaker+02",
  },
];

export default function TalkshowPage() {
  return (
    <section className="min-h-screen" style={{ backgroundColor: "var(--surface)" }}>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-28 md:px-12 md:pb-32 md:pt-36">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 font-label text-sm font-medium tracking-[0.3em]" style={{ color: "var(--brand-sky-blue)" }}>
            EVENT UNGGULAN
          </p>
          <h2 className="font-display text-6xl font-bold leading-[0.9] tracking-tight md:text-[9rem]" style={{ color: "var(--on-surface)" }}>
            CREANOMIC
            <br />
            <span className="text-gradient font-light italic">TALKSHOW.</span>
          </h2>
          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-xl font-body text-base leading-relaxed md:text-lg" style={{ color: "var(--text-secondary)" }}>
              Wadah untuk terhubung, belajar, dan bertukar ide dengan orang-orang inspiratif dari industri kreatif dan digital.
            </p>
            <a
              href="#details"
              className="w-fit rounded-full px-7 py-3 font-label text-sm font-medium text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: "var(--brand-sky-blue)", boxShadow: "0 4px 20px rgba(42,130,231,0.3)" }}
            >
              LIHAT EVENT →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: "var(--card-bg-subtle)" }}>
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 font-label text-sm font-medium tracking-[0.25em]" style={{ color: "var(--brand-sky-blue)" }}>
              TENTANG TALKSHOW
            </p>
            <h3 className="font-display text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--on-surface)" }}>
              IDE YANG
              <br />
              <span className="text-gradient font-light italic">MENGINSPIRASI.</span>
            </h3>
          </div>
          <div className="max-w-xl font-body" style={{ color: "var(--text-secondary)" }}>
            <p className="leading-relaxed">
              CREANOMIC Talkshow menghadirkan para pemikir kreatif, desainer,
              kreator, dan profesional industri digital untuk berbagi
              pengalaman, perspektif, dan cerita mereka.
            </p>
            <p className="mt-6 leading-relaxed">
              Melalui percakapan yang bermakna, peserta dapat menemukan ide-ide baru,
              menjelajahi peluang kreatif, dan terhubung dengan orang-orang
              yang memiliki semangat yang sama.
            </p>
          </div>
        </div>
      </section>

      {/* SPEAKERS */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: "var(--surface)" }}>
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12">
            <p className="mb-3 font-label text-sm font-medium tracking-[0.25em]" style={{ color: "var(--brand-sky-blue)" }}>
              TAMU SPESIAL
            </p>
            <h3 className="font-display text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--on-surface)" }}>
              KENALI
              <br />
              <span className="text-gradient font-light italic">SPEAKERNYA.</span>
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {speakers.map((speaker, index) => (
              <div
                key={speaker.id}
                className="group rounded-2xl border p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-2"
                style={{
                  borderColor: "var(--card-border)",
                  backgroundColor: "var(--card-bg-subtle)",
                }}
              >
                <div
                  className="overflow-hidden rounded-xl"
                  style={{
                    backgroundColor: index === 0 ? "var(--brand-deep-blue)" : "var(--brand-magenta)",
                  }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="aspect-[4/3] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="pt-5">
                  <h4 className="font-display text-xl font-semibold" style={{ color: "var(--on-surface)" }}>
                    {speaker.name}
                  </h4>
                  <p className="mt-1 font-label text-sm" style={{ color: "var(--brand-sky-blue)" }}>
                    {speaker.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT DETAILS */}
      <section
        id="details"
        className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28"
        style={{ backgroundColor: "var(--card-bg-subtle)" }}
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 font-label text-sm font-medium tracking-[0.25em]" style={{ color: "var(--brand-sky-blue)" }}>
            CATAT TANGGALNYA
          </p>
          <h3 className="font-display text-4xl font-bold tracking-tight md:text-7xl" style={{ color: "var(--on-surface)" }}>
            BAGIAN DARI
            <br />
            PERCAKAPAN INI.
          </h3>

          <div className="mt-14 grid gap-8 border-t pt-8 sm:grid-cols-2 md:grid-cols-4" style={{ borderColor: "var(--card-border)" }}>
            <div>
              <p className="font-label text-xs tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>TANGGAL</p>
              <p className="mt-3 font-body text-lg" style={{ color: "var(--on-surface)" }}>Segera Hadir</p>
            </div>
            <div>
              <p className="font-label text-xs tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>WAKTU</p>
              <p className="mt-3 font-body text-lg" style={{ color: "var(--on-surface)" }}>Segera Hadir</p>
            </div>
            <div>
              <p className="font-label text-xs tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>LOKASI</p>
              <p className="mt-3 font-body text-lg" style={{ color: "var(--on-surface)" }}>Segera Hadir</p>
            </div>
            <div>
              <p className="font-label text-xs tracking-[0.2em]" style={{ color: "var(--text-muted)" }}>PENDAFTARAN</p>
              <a
                href="/registrasi"
                className="mt-3 inline-block rounded-full px-6 py-2 font-label text-sm font-medium text-white transition hover:opacity-90"
                style={{ backgroundColor: "var(--brand-sky-blue)" }}
              >
                DAFTAR SEKARANG →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28" style={{ backgroundColor: "var(--surface)" }}>
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 font-label text-sm font-medium tracking-[0.25em]" style={{ color: "var(--brand-sky-blue)" }}>
            DOKUMENTASI
          </p>
          <h3 className="font-display text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--on-surface)" }}>
            MOMEN YANG
            <br />
            <span className="text-gradient font-light italic">TAK TERLUPAKAN.</span>
          </h3>

          <div className="mt-12 flex min-h-[300px] items-center justify-center rounded-2xl border" style={{ borderColor: "var(--card-border)", backgroundColor: "var(--card-bg-subtle)" }}>
            <div className="text-center">
              <p className="font-display text-2xl font-semibold" style={{ color: "var(--on-surface)" }}>SEGERA HADIR</p>
              <p className="mt-3 font-body text-sm" style={{ color: "var(--text-muted)" }}>Dokumentasi talkshow akan muncul di sini.</p>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
