import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import PitBanner from "@/components/ui/PitBanner";
import { NEWS_POSTS, getNewsPost } from "@/data/news";
import type { NewsTalentGroup } from "@/types";

interface NewsDetailPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return NEWS_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: NewsDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    return { title: "Berita tidak ditemukan" };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

function TalentTable({ group }: { group: NewsTalentGroup }) {
  const hasProdi = group.talents.some((talent) => talent.prodi);
  const hasAngkatan = group.talents.some((talent) => talent.angkatan);
  const hasType = group.talents.some((talent) => talent.type);

  return (
    <div className="overflow-hidden rounded-2xl border-[3px] border-[#0B0F19] shadow-[5px_5px_0px_#0B0F19]">
      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] border-collapse text-left">
          <thead>
            <tr
              className="bg-[#0B24F3] text-white"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              <th className="w-14 px-3 py-3 text-center text-[11px] font-bold uppercase tracking-wider md:text-xs">
                No.
              </th>
              <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider md:text-xs">
                Nama
              </th>
              {hasProdi && (
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider md:text-xs">
                  Prodi
                </th>
              )}
              {hasAngkatan && (
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider md:text-xs">
                  Angkatan
                </th>
              )}
              {hasType && (
                <th className="px-4 py-3 text-[11px] font-bold uppercase tracking-wider md:text-xs">
                  Jenis Talent
                </th>
              )}
            </tr>
          </thead>
          <tbody style={{ fontFamily: "var(--font-work-sans)" }}>
            {group.talents.map((talent, index) => (
              <tr
                key={`${talent.no}-${talent.name}`}
                className={
                  index % 2 === 0
                    ? "bg-white text-[#0B0F19]"
                    : "bg-[#FFF6D6] text-[#0B0F19]"
                }
              >
                <td className="border-t-2 border-[#0B0F19]/10 px-3 py-3 text-center text-xs font-bold md:text-sm">
                  {talent.no}
                </td>
                <td className="border-t-2 border-[#0B0F19]/10 px-4 py-3 text-xs font-semibold md:text-sm">
                  {talent.name}
                </td>
                {hasProdi && (
                  <td className="border-t-2 border-[#0B0F19]/10 px-4 py-3 text-xs md:text-sm">
                    {talent.prodi ?? "—"}
                  </td>
                )}
                {hasAngkatan && (
                  <td className="border-t-2 border-[#0B0F19]/10 px-4 py-3 text-xs md:text-sm">
                    {talent.angkatan ?? "—"}
                  </td>
                )}
                {hasType && (
                  <td className="border-t-2 border-[#0B0F19]/10 px-4 py-3 text-xs md:text-sm">
                    {talent.type ?? "—"}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default async function NewsDetailPage({ params }: NewsDetailPageProps) {
  const { slug } = await params;
  const post = getNewsPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        preTitle="Berita Acara"
        title={post.shortTitle}
        subtitle={`${post.category} resmi CREANOMIC 2026 — ${post.dateLabel}`}
        titleClassName="text-3xl sm:text-5xl md:text-6xl"
      />

      <PageSection paddingTop={240} width="narrow">
        <div className="mx-auto w-full max-w-[820px]">
          {/* Meta */}
          <div className="mb-8 flex flex-wrap items-center justify-center gap-3">
            <span className="tag-y2k">{post.category}</span>
            <span
              className="text-xs font-bold uppercase tracking-wider text-[#0B24F3]"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              {post.dateLabel}
            </span>
          </div>

          {/* Official document card */}
          <article className="pop-card-white relative px-5 py-10 sm:px-8 md:px-12 md:py-14">
            {/* Letterhead */}
            <div
              className="text-center text-[#0B0F19]"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              <p className="text-[10px] font-bold uppercase leading-relaxed tracking-[0.14em] text-[#0B24F3] sm:text-xs">
                Kementerian Pendidikan Tinggi, Sains, dan Teknologi
              </p>
              <p className="mt-1 text-sm font-bold uppercase leading-tight sm:text-base">
                Universitas Brawijaya — Fakultas Vokasi
              </p>
              <p className="mt-1 text-[10px] font-semibold text-[#0B0F19]/70 sm:text-xs">
                Jl. Veteran 12–16 Malang 65145 · bemvokasibrawijaya@gmail.com
              </p>
            </div>

            <div className="my-6 h-[3px] w-full bg-[#0B0F19]" />

            {/* Title */}
            <div className="text-center">
              <p
                className="text-sm font-bold uppercase tracking-[0.24em] text-[#0B24F3] sm:text-base"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                Berita Acara
              </p>
              <h1
                className="mx-auto mt-3 max-w-[640px] text-2xl leading-tight text-[#0B0F19] sm:text-3xl md:text-4xl"
                style={{
                  fontFamily: "var(--font-slackey)",
                  textShadow: "2px 2px 0px #FFD43D",
                }}
              >
                {post.title}
              </h1>
              {post.number && (
                <p
                  className="mt-4 text-[11px] font-semibold text-[#0B0F19]/70 sm:text-xs"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  Nomor: {post.number}
                </p>
              )}
            </div>

            {/* Body */}
            <div
              className="mt-8 space-y-4 text-sm leading-relaxed text-[#0B0F19] md:text-[15px]"
              style={{ fontFamily: "var(--font-work-sans)", lineHeight: "1.85" }}
            >
              {post.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-left md:text-justify">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Talent list */}
            {post.talentGroups && post.talentGroups.length > 0 && (
              <div className="mt-10 space-y-9">
                {post.talentGroups.map((group) => (
                  <section key={group.id}>
                    <div className="mb-4 flex items-center gap-3">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-[3px] border-[#0B0F19] bg-[#FFD43D] text-sm font-bold text-[#0B0F19] shadow-[2px_2px_0px_#0B0F19]"
                        style={{ fontFamily: "var(--font-work-sans)" }}
                      >
                        {group.id}
                      </span>
                      <h2
                        className="text-lg leading-tight text-[#0B0F19] sm:text-xl"
                        style={{ fontFamily: "var(--font-slackey)" }}
                      >
                        {group.title}
                      </h2>
                    </div>
                    <TalentTable group={group} />
                  </section>
                ))}
              </div>
            )}

            {/* Closing */}
            {post.closing && (
              <p
                className="mt-9 text-sm leading-relaxed text-[#0B0F19] md:text-[15px]"
                style={{ fontFamily: "var(--font-work-sans)", lineHeight: "1.85" }}
              >
                {post.closing}
              </p>
            )}

            {/* Signature */}
            {post.signatory && (
              <div className="mt-12 flex justify-end">
                <div
                  className="w-full max-w-[320px] text-left text-[#0B0F19]"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  <p className="text-sm">
                    {post.signatory.place}, {post.signatory.date}
                  </p>
                  <p className="mt-1 text-sm">{post.signatory.role}</p>
                  <div className="h-20" aria-hidden />
                  <p className="text-sm font-bold underline decoration-2 underline-offset-4">
                    {post.signatory.name}
                  </p>
                  {post.signatory.nim && (
                    <p className="mt-1 text-xs font-semibold text-[#0B0F19]/70">
                      NIM {post.signatory.nim}
                    </p>
                  )}
                </div>
              </div>
            )}
          </article>

          {/* Actions */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {post.pdf && (
              <a
                href={post.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary-y2k"
              >
                LIHAT DOKUMEN PDF →
              </a>
            )}
            <Link href="/news" className="btn-outline-y2k">
              ← KEMBALI KE NEWS
            </Link>
          </div>
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
