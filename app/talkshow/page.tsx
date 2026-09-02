const speakers = [
  {
    name: "Speaker Name",
    role: "Creative Director",
    image: "https://placehold.co/600x750?text=Speaker+01",
  },
  {
    name: "Speaker Name",
    role: "Digital Creator",
    image: "https://placehold.co/600x750?text=Speaker+02",
  },
  {
    name: "Moderator Name",
    role: "Moderator",
    image: "https://placehold.co/600x750?text=Moderator",
  },
];

export default function TalkshowPage() {
  return (
    <main className="min-h-screen bg-[#111B5E] text-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-12">
        <h1 className="text-xl font-bold tracking-tight text-white">
          CREANOMIC
          <span className="text-[#D6087D]">.</span>
        </h1>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          <a
            href="/"
            className="transition hover:text-[#D6087D]"
          >
            HOME
          </a>

          <a
            href="#"
            className="transition hover:text-[#D6087D]"
          >
            ABOUT
          </a>

          <a
            href="#"
            className="text-[#2F83DD]"
          >
            TALKSHOW
          </a>

          <a
            href="#"
            className="transition hover:text-[#D6087D]"
          >
            MERCH
          </a>
        </div>

        <button
          className="rounded-full border border-[#2F83DD] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2F83DD]"
        >
          CONTACT
        </button>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D6087D] opacity-20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#2F83DD] opacity-20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-6 text-sm font-medium tracking-[0.3em] text-[#2F83DD]">
            FEATURED EVENT
          </p>

          <h2 className="text-6xl font-bold leading-[0.9] tracking-tight md:text-[9rem]">
            CREANOMIC
            <br />
            <span className="font-light italic text-[#D6087D]">
              TALKSHOW.
            </span>
          </h2>

          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="max-w-xl text-base leading-relaxed text-white/70 md:text-lg">
              A space to connect, learn, and exchange ideas with inspiring
              people from the creative and digital industry.
            </p>

            <a
              href="#details"
              className="w-fit rounded-full bg-[#2F83DD] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#2F83DD]/30 transition hover:bg-[#D6087D] hover:shadow-[#D6087D]/30"
            >
              EXPLORE EVENT →
            </a>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#17328F] via-[#592C98] to-[#D6087D] px-6 py-20 md:px-12 md:py-28">

        {/* DECORATIVE GLOW */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#2F83DD] opacity-20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D6087D] opacity-20 blur-[120px]" />

        <div className="relative mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <div>
            <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#2F83DD]">
              ABOUT THE TALK
            </p>

            <h3 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              IDEAS THAT
              <br />
              <span className="font-light italic text-[#D6087D]">
                INSPIRE.
              </span>
            </h3>
          </div>

          <div className="max-w-xl text-white/70">
            <p className="leading-relaxed">
              CREANOMIC Talkshow brings together creative minds, designers,
              creators, and digital industry professionals to share their
              experiences, perspectives, and stories.
            </p>

            <p className="mt-6 leading-relaxed">
              Through meaningful conversations, participants can discover new
              ideas, explore creative opportunities, and connect with people
              who share the same passion.
            </p>
          </div>

        </div>
      </section>

      {/* SPEAKERS */}
      <section className="relative overflow-hidden bg-[#111B5E] px-6 py-20 md:px-12 md:py-28">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#D6087D] opacity-10 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#2F83DD] opacity-10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#2F83DD]">
              SPECIAL GUESTS
            </p>

            <h3 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              MEET THE
              <br />
              <span className="font-light italic text-[#D6087D]">
                SPEAKERS.
              </span>
            </h3>
          </div>

          <div className="grid gap-6 md:grid-cols-3">

            {speakers.map((speaker, index) => (
              <div
                key={speaker.name}
                className="group rounded-2xl border border-white/10 bg-[#111B5E]/50 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F83DD]/60"
              >

                {/* SPEAKER IMAGE */}
                <div
                  className={`overflow-hidden rounded-xl ${
                    index === 0
                      ? "bg-[#17328F]"
                      : index === 1
                      ? "bg-[#D6087D]"
                      : "bg-[#592C98]"
                  }`}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* SPEAKER INFO */}
                <div className="pt-5">
                  <h4 className="text-xl font-semibold text-white">
                    {speaker.name}
                  </h4>

                  <p className="mt-1 text-sm text-[#2F83DD]">
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
        className="relative overflow-hidden bg-gradient-to-br from-[#17328F] via-[#592C98] to-[#D6087D] px-6 py-20 text-white md:px-12 md:py-28"
      >

        {/* DECORATIVE GLOW */}
        <div className="pointer-events-none absolute -right-40 top-10 h-[450px] w-[450px] rounded-full bg-[#2F83DD] opacity-20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D6087D] opacity-20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#2F83DD]">
            SAVE THE DATE
          </p>

          <h3 className="text-4xl font-bold tracking-tight md:text-7xl">
            BE PART OF
            <br />
            THE CONVERSATION.
          </h3>

          <div className="mt-14 grid gap-8 border-t border-white/20 pt-8 md:grid-cols-4">

            <div>
              <p className="text-xs tracking-[0.2em] text-white/50">
                DATE
              </p>

              <p className="mt-3 text-lg">
                Coming Soon
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-white/50">
                TIME
              </p>

              <p className="mt-3 text-lg">
                Coming Soon
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-white/50">
                LOCATION
              </p>

              <p className="mt-3 text-lg">
                Coming Soon
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.2em] text-white/50">
                REGISTRATION
              </p>

              <button
                className="mt-3 rounded-full bg-[#2F83DD] px-6 py-2 text-sm font-medium text-white shadow-lg shadow-[#2F83DD]/30 transition hover:bg-[#D6087D] hover:shadow-[#D6087D]/30"
              >
                REGISTER →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* DOCUMENTATION */}
      <section className="relative overflow-hidden bg-[#111B5E] px-6 py-20 md:px-12 md:py-28">

        <div className="pointer-events-none absolute -right-40 top-0 h-[400px] w-[400px] rounded-full bg-[#D6087D] opacity-10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-4 text-sm font-medium tracking-[0.25em] text-[#2F83DD]">
            DOCUMENTATION
          </p>

          <h3 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            MOMENTS TO
            <br />
            <span className="font-light italic text-[#D6087D]">
              REMEMBER.
            </span>
          </h3>

          <div className="mt-12 flex min-h-[300px] items-center justify-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#17328F] via-[#592C98] to-[#D6087D]">

            <div className="text-center">

              <p className="text-2xl font-semibold text-white">
                COMING SOON
              </p>

              <p className="mt-3 text-sm text-white/60">
                Talkshow documentation will appear here.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#111B5E] px-6 py-10 md:px-12">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm font-semibold text-white">
            CREANOMIC
            <span className="text-[#D6087D]">.</span>
          </p>

          <p className="text-sm text-white/50">
            © 2026 CREANOMIC. All rights reserved.
          </p>

        </div>
      </footer>

    </main>
  );
}