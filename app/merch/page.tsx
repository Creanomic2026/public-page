import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import PitBanner from "@/components/ui/PitBanner";

export const metadata = {
  title: "Merchandise",
  description:
    "Koleksi merchandise eksklusif CREANOMIC 2026 dengan desain unik dan kualitas premium.",
};

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
    <>
      <PageHero
        preTitle="What's in the"
        title="CREANOMIC STORE?"
        titleClassName="text-3xl sm:text-5xl md:text-7xl"
      />

      <PageSection paddingTop={240}>
        {/* Judul section — outline putih + pink, mengikuti mockup */}
        <div className="mb-10 text-center md:mb-14">
          <h2
            className="text-3xl text-white sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-slackey)",
              WebkitTextStroke: "2px #F849C1",
              textShadow: "3px 3px 0px #0B24F3",
            }}
          >
            OUR MERCHANDISE
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-sm font-bold leading-relaxed text-[#0B0F19] md:text-base"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            Koleksi merchandise eksklusif CREANOMIC dengan desain unik dan
            kualitas premium.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="pop-card group p-3 transition-transform duration-200 hover:-translate-y-1"
            >
              <div className="overflow-hidden rounded-[16px] border-[3px] border-[#FFD43D] bg-[#0B1E66]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="aspect-square w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="px-3 pb-3 pt-5 text-center">
                <p
                  className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD43D]"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  {product.category}
                </p>
                <h3
                  className="mt-2 text-xl text-white"
                  style={{
                    fontFamily: "var(--font-slackey)",
                    textShadow: "2px 2px 0px #0B0F19",
                  }}
                >
                  {product.name}
                </h3>
                <span className="tag-y2k mt-3">{product.price}</span>

                <button className="btn-primary-y2k mt-5 w-full justify-center">
                  PESAN SEKARANG
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
