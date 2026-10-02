"use client";

const products = [
  {
    name: "Event T-Shirt",
    category: "PAKAIAN",
    price: "Rp85.000",
    image: "https://placehold.co/600x750?text=T-Shirt",
  },
  {
    name: "Event Tote Bag",
    category: "AKSESORIS",
    price: "Rp45.000",
    image: "https://placehold.co/600x750?text=Tote+Bag",
  },
  {
    name: "Event Lanyard",
    category: "AKSESORIS",
    price: "Rp25.000",
    image: "https://placehold.co/600x750?text=Lanyard",
  },
];

export default function MerchPage() {
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
          <h2 className="font-display max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight md:text-8xl" style={{ color: "var(--on-surface)" }}>
            PAKAI
            <br />
            <span className="text-gradient font-light italic">MOMENNYA.</span>
          </h2>
          <div className="mt-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md font-body text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Bawa semangat Creanomic ke mana pun kamu pergi. Temukan koleksi merchandise resmi kami.
            </p>
            <a
              href="#merchandise"
              className="w-fit rounded-full px-7 py-3 font-label text-sm font-medium text-white shadow-lg transition hover:opacity-90"
              style={{ backgroundColor: "var(--brand-sky-blue)", boxShadow: "0 4px 20px rgba(42,130,231,0.3)" }}
            >
              LIHAT MERCH →
            </a>
          </div>
        </div>
      </section>

      {/* MERCHANDISE */}
      <section
        id="merchandise"
        className="relative overflow-hidden px-6 py-20 md:px-12 md:py-28"
        style={{ backgroundColor: "var(--card-bg-subtle)" }}
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[450px] w-[450px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-sky-blue)" }} />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]" style={{ backgroundColor: "var(--brand-magenta)" }} />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 font-label text-sm font-medium tracking-[0.25em]" style={{ color: "var(--brand-sky-blue)" }}>
                KOLEKSI RESMI
              </p>
              <h3 className="font-display text-4xl font-bold tracking-tight md:text-6xl" style={{ color: "var(--on-surface)" }}>
                MERCHANDISE KAMI
              </h3>
            </div>
            <p className="max-w-sm font-body text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
              Koleksi terbatas yang dibuat untuk menjaga pengalaman Creanomic kamu tetap hidup.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {products.map((product, index) => (
              <div
                key={product.name}
                className="group rounded-2xl border p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-2"
                style={{
                  borderColor: "var(--card-border)",
                  backgroundColor: "var(--card-bg-subtle)",
                }}
              >
                <div
                  className="overflow-hidden rounded-xl"
                  style={{
                    backgroundColor: index === 0 ? "var(--brand-deep-blue)" : index === 1 ? "var(--brand-magenta)" : "var(--brand-purple)",
                  }}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-start justify-between pt-5">
                  <div>
                    <p className="mb-2 font-label text-xs tracking-[0.2em]" style={{ color: "var(--brand-sky-blue)" }}>
                      {product.category}
                    </p>
                    <h4 className="font-display text-lg font-semibold" style={{ color: "var(--on-surface)" }}>
                      {product.name}
                    </h4>
                  </div>
                  <p className="font-label text-sm font-medium" style={{ color: "var(--brand-magenta)" }}>
                    {product.price}
                  </p>
                </div>
                <button
                  className="mt-5 w-full rounded-full border py-3 font-label text-sm font-medium text-white transition hover:shadow-lg"
                  style={{
                    borderColor: "var(--brand-sky-blue)",
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "var(--brand-sky-blue)";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = "transparent";
                  }}
                >
                  PESAN SEKARANG
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

    </section>
  );
}
