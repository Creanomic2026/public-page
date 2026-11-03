import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import PitBanner from "@/components/ui/PitBanner";
import { NEWS_POSTS } from "@/data/news";

export const metadata = {
  title: "News",
  description:
    "Kabar terbaru, pengumuman resmi, dan informasi penting seputar CREANOMIC 2026.",
};

export default function NewsPage() {
  const [featured, ...others] = NEWS_POSTS;

  return (
    <>
      <PageHero
        preTitle="Latest Updates"
        title="NEWS & ANNOUNCEMENTS"
        subtitle="Kabar terbaru, pengumuman resmi, dan informasi penting seputar CREANOMIC 2026."
        titleClassName="text-3xl sm:text-5xl md:text-6xl"
      />

      <PageSection paddingTop={240}>
        <div className="mx-auto w-full max-w-[980px]">
          {/* Section heading */}
          <div className="mb-12 flex flex-col items-center gap-3 text-center">
            <div className="ribbon-trapezoid-wrapper">
              <div className="ribbon-trapezoid">
                <h2
                  className="text-center text-2xl uppercase leading-tight sm:text-3xl md:text-4xl"
                  style={{
                    fontFamily: "var(--font-slackey)",
                    color: "#0B24F3",
                    letterSpacing: "0.04em",
                    textShadow: "2px 2px 0px #FFFFFF, 3px 3px 0px #0B0F19",
                  }}
                >
                  Berita Terbaru
                </h2>
              </div>
            </div>
            <p
              className="max-w-xl text-sm font-semibold leading-relaxed text-[#0B0F19] md:text-base"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              Semua pengumuman resmi dan kabar terbaru dari panitia CREANOMIC
              2026 ada di sini.
            </p>
          </div>

          {/* Featured post */}
          {featured && (
            <article className="pop-card relative px-6 pb-9 pt-11 md:px-10 md:pb-11 md:pt-12">
              <span className="tag-y2k absolute -top-4 left-6 md:left-10">
                TERBARU
              </span>

              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border-2 border-[#0B0F19] bg-[#0B24F3] px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  {featured.category}
                </span>
                <span
                  className="text-xs font-semibold uppercase tracking-wider text-white/80"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  {featured.dateLabel}
                </span>
              </div>

              <h3
                className="mt-4 text-2xl leading-tight text-white sm:text-3xl md:text-4xl"
                style={{
                  fontFamily: "var(--font-slackey)",
                  textShadow: "2px 2px 0px #0B24F3",
                }}
              >
                {featured.title}
              </h3>

              <span className="mt-5 block h-[6px] w-24 -skew-x-12 rounded-full bg-[#FFD43D]" />

              <p
                className="mt-5 max-w-2xl text-sm leading-relaxed text-white md:text-base"
                style={{ fontFamily: "var(--font-work-sans)", lineHeight: "1.8" }}
              >
                {featured.excerpt}
              </p>

              <Link
                href={`/news/${featured.slug}`}
                className="btn-primary-y2k mt-7"
              >
                BACA SELENGKAPNYA →
              </Link>
            </article>
          )}

          {/* Other posts */}
          {others.length > 0 && (
            <div className="mt-10 flex flex-col gap-8">
              {others.map((post) => (
                <article
                  key={post.slug}
                  className="pop-card px-6 pb-8 pt-9 md:px-8"
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="tag-y2k">{post.category}</span>
                    <span
                      className="text-xs font-semibold uppercase tracking-wider text-white/80"
                      style={{ fontFamily: "var(--font-work-sans)" }}
                    >
                      {post.dateLabel}
                    </span>
                  </div>
                  <h3
                    className="mt-4 text-xl leading-tight text-white md:text-2xl"
                    style={{
                      fontFamily: "var(--font-slackey)",
                      textShadow: "2px 2px 0px #0B24F3",
                    }}
                  >
                    {post.title}
                  </h3>
                  <p
                    className="mt-4 text-sm leading-relaxed text-white/90"
                    style={{ fontFamily: "var(--font-work-sans)" }}
                  >
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/news/${post.slug}`}
                    className="btn-outline-y2k mt-6"
                  >
                    BACA SELENGKAPNYA →
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
