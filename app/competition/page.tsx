"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import {
  FaPenNib,
  FaChartLine,
  FaProjectDiagram,
  FaMicrochip,
  FaBookOpen,
  FaFileAlt,
  FaIdCard,
  FaMobileAlt,
  FaUserAlt,
  FaEnvelope,
  FaUsers,
  FaBullhorn,
  FaCalendarAlt,
  FaInfoCircle,
} from "react-icons/fa";
import PageHero from "@/components/ui/PageHero";
import PageSection from "@/components/ui/PageSection";
import RibbonTitle from "@/components/ui/RibbonTitle";
import PitBanner from "@/components/ui/PitBanner";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface CompetitionRequirement {
  babak: string;
  detail: string;
}

interface Competition {
  id: string;
  slug: string;
  name: string;
  Icon: IconType;
  techMeeting: string;
  colorHex: string;
  description: string;
  rounds: CompetitionRequirement[];
  individual?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const competitions: Competition[] = [
  {
    id: "01",
    slug: "karya-tulis-ilmiah",
    name: "Karya Tulis Ilmiah",
    Icon: FaPenNib,
    techMeeting: "17 Oktober 2026",
    colorHex: "#2A82E7",
    description:
      "Unjuk kemampuan riset dan penulisan ilmiah berkualitas tinggi. Kompetisi ini mengundang mahasiswa untuk menyajikan inovasi dan temuan akademis yang berdampak nyata bagi masyarakat.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah judul, karya tulis ilmiah (full paper) dalam format PDF, serta surat pernyataan orisinalitas sesuai pedoman penulisan yang telah ditentukan.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan karyanya menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
  },
  {
    id: "02",
    slug: "financial-planner",
    name: "Financial Planner",
    Icon: FaChartLine,
    techMeeting: "17 Oktober 2026",
    colorHex: "#D20A81",
    description:
      "Uji kemampuan analisis dan perencanaan keuangan dalam menghadapi tantangan ekonomi modern. Kompetisi ini dirancang untuk melatih pemikiran strategis peserta dalam pengelolaan keuangan.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah judul karya, file karya Financial Planner dalam format PDF, serta surat pernyataan orisinalitas sesuai panduan yang telah ditetapkan.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan hasil analisis keuangannya menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
  },
  {
    id: "03",
    slug: "business-model-canvas",
    name: "Business Model Canvas",
    Icon: FaProjectDiagram,
    techMeeting: "16 Oktober 2026",
    colorHex: "#522A92",
    description:
      "Rancang model bisnis inovatif yang berkelanjutan menggunakan kerangka Business Model Canvas. Tunjukkan kemampuanmu dalam membangun strategi bisnis yang komprehensif dan visioner.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah judul karya, proposal bisnis (PDF), rancangan Business Model Canvas (PDF/PNG/JPG), serta surat pernyataan orisinalitas.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan proposal dan rancangan BMC menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
  },
  {
    id: "04",
    slug: "internet-of-things",
    name: "Internet of Things (IoT)",
    Icon: FaMicrochip,
    techMeeting: "16 Oktober 2026",
    colorHex: "#E025CE",
    description:
      "Inovasi teknologi berbasis perangkat yang saling terhubung. Rancang solusi IoT yang fungsional dan berdampak, lengkap dengan dokumentasi proses pembuatan serta demo alat.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah judul karya, surat pernyataan orisinalitas, bukti tahap pembuatan alat (PDF/PNG/JPG), serta tautan video demo alat melalui Instagram dengan akun yang tidak dikunci (private).",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mendemonstrasikan alat IoT secara langsung dan mempresentasikannya, dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
  },
  {
    id: "05",
    slug: "comic-strip",
    name: "Comic Strip",
    Icon: FaBookOpen,
    techMeeting: "17 Oktober 2026",
    colorHex: "#FF8C00",
    description:
      "Wujudkan cerita dalam format komik strip yang kreatif dan komunikatif. Kompetisi ini menantang kemampuan bercerita, ilustrasi, dan penyusunan panel — diikuti secara individu.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah judul karya, surat pernyataan orisinalitas, bukti tahap pembuatan (sketsa, line art, pewarnaan), serta file karya komik strip (JPG/PNG/PDF).",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan konsep dan karya komik stripnya, dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
    individual: true,
  },
];

const generalRequirements = [
  { Icon: FaFileAlt, text: "Surat pernyataan pendaftaran" },
  { Icon: FaIdCard, text: "Salinan KTM atau KTP" },
  {
    Icon: FaMobileAlt,
    text: "Bukti screenshot sudah mengikuti akun Instagram dan TikTok Creanomic",
  },
  {
    Icon: FaUserAlt,
    text: "Biodata lengkap: Nama lengkap, NIM, Program Studi, Fakultas, Institusi",
  },
  { Icon: FaEnvelope, text: "Email aktif dan nomor WhatsApp" },
  { Icon: FaUsers, text: "Nama tim, jumlah anggota, dan daftar nama anggota" },
  {
    Icon: FaBullhorn,
    text: "Bukti screenshot telah membagikan poster Creanomic ke grup WhatsApp",
  },
];

// ─── Competition Card ──────────────────────────────────────────────────────────

function CompetitionCard({
  competition,
  isActive,
  onClick,
}: {
  competition: Competition;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={isActive}
      id={`card-${competition.slug}`}
      className={`pop-card group flex h-full w-full cursor-pointer flex-col items-center px-5 pb-6 pt-7 text-center transition-all duration-200 hover:-translate-y-1 focus:outline-none ${
        isActive ? "ring-4 ring-[#0B24F3] ring-offset-4 ring-offset-white" : ""
      }`}
    >
      <div
        className="mb-2 flex h-12 w-12 items-center justify-center rounded-full border-[3px] border-[#FFD43D] bg-[#0B0F19] text-xl text-[#FFD43D] shadow-[2px_2px_0px_#FFD43D]"
      >
        <competition.Icon />
      </div>

      <h3
        className="mt-2 text-lg leading-tight text-white md:text-xl"
        style={{
          fontFamily: "var(--font-slackey)",
          textShadow: "2px 2px 0px #0B24F3",
        }}
      >
        {competition.name}
      </h3>

      <span className="mx-auto mt-3 block h-[5px] w-14 -skew-x-12 rounded-full bg-[#FFD43D]" />

      <p
        className="mt-4 flex-1 text-center text-sm leading-relaxed text-white"
        style={{ fontFamily: "var(--font-work-sans)" }}
      >
        {competition.description}
      </p>

      <span className="tag-y2k mt-5">
        {isActive ? "SEDANG DILIHAT" : "LIHAT DETAIL →"}
      </span>
    </button>
  );
}

// ─── Detail Panel ──────────────────────────────────────────────────────────────

function CompetitionDetail({ competition }: { competition: Competition }) {
  return (
    <section className="pop-card animate-fade-in-up relative mt-10 px-6 pb-10 pt-12 md:px-10 md:pt-14">
      <RibbonTitle
        title="DETAIL LOMBA"
        className="absolute -top-1 left-1/2 z-10 -translate-x-1/2"
      />

      <div className="mb-8 mt-2">
        <span className="tag-y2k">CABANG LOMBA #{competition.id}</span>
        <h2
          className="mt-4 text-3xl text-white sm:text-4xl md:text-5xl"
          style={{
            fontFamily: "var(--font-slackey)",
            textShadow: "3px 3px 0px #0B24F3",
          }}
        >
          {competition.name}
        </h2>
      </div>

      <div className="grid gap-10 border-t-2 border-dashed border-white/40 pt-8 lg:grid-cols-2">
        {/* Left: Mechanism & TM */}
        <div>
          <div className="mb-8">
            <span className="tag-y2k">Technical Meeting</span>
            <div
              className="mt-4 flex items-center gap-3 text-base font-bold text-white md:text-lg"
              style={{ fontFamily: "var(--font-work-sans)" }}
            >
              <FaCalendarAlt className="text-xl text-[#FFD43D]" />
              <span>{competition.techMeeting}</span>
            </div>
          </div>

          <div>
            <span className="tag-y2k">Mekanisme Kompetisi</span>
            <div className="mt-5 flex flex-col gap-6">
              {competition.rounds.map((round, idx) => (
                <div key={round.babak}>
                  <p
                    className="mb-2 flex items-center gap-3 text-base font-bold text-white md:text-lg"
                    style={{ fontFamily: "var(--font-work-sans)" }}
                  >
                    <span
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#FFD43D] bg-[#0B0F19] text-xs font-bold text-[#FFD43D]"
                    >
                      {idx + 1}
                    </span>
                    {round.babak}
                  </p>
                  <p
                    className="pl-10 text-sm leading-relaxed text-white/90"
                    style={{ fontFamily: "var(--font-work-sans)" }}
                  >
                    {round.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Requirements */}
        <div>
          <span className="tag-y2k">Syarat Pendaftaran</span>
          <ul className="mb-6 mt-5 flex flex-col gap-4">
            {(competition.individual
              ? generalRequirements.filter(
                  (req) => !req.text.toLowerCase().includes("tim")
                )
              : generalRequirements
            ).map((req, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <req.Icon className="mt-0.5 shrink-0 text-lg text-[#FFD43D]" />
                <span
                  className="text-sm leading-relaxed text-white"
                  style={{ fontFamily: "var(--font-work-sans)" }}
                >
                  {req.text}
                </span>
              </li>
            ))}
          </ul>

          <p
            className="mb-6 text-xs italic text-white/80"
            style={{ fontFamily: "var(--font-work-sans)" }}
          >
            {competition.individual
              ? "* Comic Strip bersifat individu (tanpa tim). Semua berkas dikumpulkan sesuai arahan divisi kompetisi."
              : "* Semua berkas dikumpulkan melalui Google Form yang disediakan oleh divisi kompetisi."}
          </p>

          <a href="/registrasi" className="btn-primary-y2k">
            DAFTAR SEKARANG →
          </a>
        </div>
      </div>
    </section>
  );
}

// ─── Main Page ─────────────────────────────────────────────────────────────────

export default function CompetitionPage() {
  const [activeId, setActiveId] = useState<string>(competitions[0].id);
  const activeCompetition = competitions.find((c) => c.id === activeId)!;

  const handleSelect = (id: string) => {
    setActiveId(id);
    if (typeof window !== "undefined") {
      setTimeout(() => {
        const el = document.getElementById("competition-detail");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 50);
    }
  };

  return (
    <>
      <PageHero preTitle="Ready to Take" title="the CHALLENGE?" />

      <PageSection paddingTop={240} width="wide">
        <p
          className="mx-auto mb-12 max-w-3xl text-center text-sm font-semibold leading-relaxed text-[#0B0F19] md:text-base"
          style={{ fontFamily: "var(--font-work-sans)" }}
        >
          Berikut adalah Bidang dan Tangkai Lomba yang dikompetisikan dalam
          gelaran{" "}
          <strong className="text-[#0B24F3]">CREANOMIC 2026</strong>. Pilih
          lomba untuk melihat detail serta syarat pendaftarannya.
        </p>

        {/* Competition cards */}
        <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
          {competitions.map((comp) => (
            <div
              key={comp.id}
              className="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1.34rem)]"
            >
              <CompetitionCard
                competition={comp}
                isActive={activeId === comp.id}
                onClick={() => handleSelect(comp.id)}
              />
            </div>
          ))}
        </div>

        {/* Detail */}
        <div id="competition-detail" className="scroll-mt-28">
          <CompetitionDetail key={activeId} competition={activeCompetition} />
        </div>

        {/* Info */}
        <div className="mt-12 rounded-[24px] border-[3px] border-[#0B0F19] bg-[#FFD43D] p-6 shadow-[8px_8px_0px_#0B0F19] md:p-8">
          <div className="flex flex-col items-center gap-5 text-center md:flex-row md:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[3px] border-[#0B0F19] bg-white text-2xl text-[#0B24F3] shadow-[3px_3px_0px_#0B0F19]">
              <FaInfoCircle />
            </div>
            <div className="flex-1">
              <h3
                className="text-xl text-[#0B24F3]"
                style={{ fontFamily: "var(--font-slackey)" }}
              >
                INFORMASI PENTING
              </h3>
              <p
                className="mt-2 text-sm leading-relaxed text-[#0B0F19]"
                style={{ fontFamily: "var(--font-work-sans)" }}
              >
                Syarat pendaftaran berlaku untuk{" "}
                <strong>semua cabang lomba</strong>. Pastikan seluruh berkas
                telah disiapkan sebelum mengisi Google Form pendaftaran. Untuk
                informasi lebih lanjut, hubungi panitia CREANOMIC 2026 melalui
                media sosial resmi kami.
              </p>
            </div>
            <a
              href="/registrasi"
              className="btn-outline-y2k shrink-0 whitespace-nowrap"
            >
              DAFTAR SEKARANG →
            </a>
          </div>
        </div>
      </PageSection>

      <PitBanner />
    </>
  );
}
