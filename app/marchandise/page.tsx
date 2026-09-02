const products = [
  {
    name: "Event T-Shirt",
    category: "APPAREL",
    price: "Rp85.000",
    image: "https://placehold.co/600x750?text=T-Shirt",
  },
  {
    name: "Event Tote Bag",
    category: "ACCESSORIES",
    price: "Rp45.000",
    image: "https://placehold.co/600x750?text=Tote+Bag",
  },
  {
    name: "Event Lanyard",
    category: "ACCESSORIES",
    price: "Rp25.000",
    image: "https://placehold.co/600x750?text=Lanyard",
  },
];

export default function Home() {
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
            href="#"
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
            className="transition hover:text-[#D6087D]"
          >
            EVENT
          </a>

          <a
            href="#"
            className="text-[#2F83DD]"
          >
            MERCH
          </a>
        </div>

        <button
          className="rounded-full border border-[#2F83DD] px-5 py-2 text-sm font-medium text-white transition hover:bg-[#2F83DD] hover:border-[#2F83DD]"
        >
          CONTACT
        </button>
      </nav>

      {/* HERO */}
      <section className="relative overflow-hidden px-6 pb-20 pt-16 md:px-12 md:pb-28 md:pt-24">

        {/* BACKGROUND GLOW */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#D6087D] opacity-20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#2F83DD] opacity-20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          <p className="mb-5 text-sm font-medium tracking-[0.3em] text-[#2F83DD]">
            CREANOMIC 2026
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl">
            WEAR THE
            <br />

            <span className="font-light italic text-[#D6087D]">
              MOMENT.
            </span>
          </h2>

          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">

            <p className="max-w-md text-base leading-relaxed text-white/70">
              Bring the spirit of Creanomic wherever you go. Discover our
              official merchandise collection.
            </p>

            <a
              href="#merchandise"
              className="w-fit rounded-full bg-[#2F83DD] px-7 py-3 text-sm font-medium text-white shadow-lg shadow-[#2F83DD]/30 transition hover:bg-[#D6087D] hover:shadow-[#D6087D]/30"
            >
              SHOP MERCH →
            </a>

          </div>
        </div>
      </section>

      {/* MERCHANDISE */}
      <section
        id="merchandise"
        className="relative overflow-hidden bg-gradient-to-br from-[#17328F] via-[#592C98] to-[#D6087D] px-6 py-20 md:px-12 md:py-28"
      >

        {/* DECORATIVE GLOW */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full bg-[#2F83DD] opacity-20 blur-[120px]" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#D6087D] opacity-20 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl">

          {/* SECTION HEADER */}
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>
              <p className="mb-3 text-sm font-medium tracking-[0.25em] text-[#2F83DD]">
                OFFICIAL COLLECTION
              </p>

              <h3 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
                OUR MERCHANDISE
              </h3>
            </div>

            <p className="max-w-sm text-sm leading-relaxed text-white/70">
              Limited pieces created to keep your Creanomic experience alive.
            </p>

          </div>

          {/* PRODUCT GRID */}
          <div className="grid gap-6 md:grid-cols-3">

            {products.map((product, index) => (

              <div
                key={product.name}
                className="group rounded-2xl border border-white/10 bg-[#111B5E]/50 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-2 hover:border-[#2F83DD]/60"
              >

                {/* PRODUCT IMAGE */}
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
                    src={product.image}
                    alt={product.name}
                    className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* PRODUCT INFO */}
                <div className="flex items-start justify-between pt-5">

                  <div>
                    <p className="mb-2 text-xs tracking-[0.2em] text-[#2F83DD]">
                      {product.category}
                    </p>

                    <h4 className="text-lg font-semibold text-white">
                      {product.name}
                    </h4>
                  </div>

                  <p className="text-sm font-medium text-[#D6087D]">
                    {product.price}
                  </p>

                </div>

                {/* ORDER BUTTON */}
                <button
                  className="mt-5 w-full rounded-full border border-[#2F83DD] py-3 text-sm font-medium text-white transition hover:bg-[#2F83DD] hover:border-[#2F83DD] hover:shadow-lg hover:shadow-[#2F83DD]/30"
                >
                  ORDER NOW
                </button>

              </div>

            ))}

          </div>
        </div>
      </section>

    </main>
  );
}