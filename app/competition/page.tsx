"use client";

import { useState } from "react";
import { IconType } from "react-icons";
import { FaPenNib, FaChartLine, FaProjectDiagram, FaPalette, FaFileAlt, FaIdCard, FaMobileAlt, FaUserAlt, FaEnvelope, FaUsers, FaBullhorn, FaInfoCircle, FaCalendarAlt } from "react-icons/fa";

// ─── Types ─────────────────────────────────────────────────────────────────────

interface CompetitionRequirement {
  babak: string;
  detail: string;
}

interface Competition {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  Icon: IconType;
  techMeeting: string;
  colorHex: string;
  description: string;
  rounds: CompetitionRequirement[];
  tags: string[];
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const competitions: Competition[] = [
  {
    id: "01",
    slug: "kti",
    name: "Karya Tulis Ilmiah",
    shortName: "KTI",
    Icon: FaPenNib,
    techMeeting: "5 Oktober 2026",
    colorHex: "#2A82E7",
    description:
      "Unjuk kemampuan riset dan penulisan ilmiah berkualitas tinggi. Kompetisi ini mengundang mahasiswa untuk menyajikan inovasi dan temuan akademis yang berdampak nyata bagi masyarakat.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah dokumen full paper atau karya tulis dalam format PDF sesuai dengan pedoman penulisan yang telah ditentukan.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan karyanya menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
    tags: ["Riset", "Akademik", "Inovasi"],
  },
  {
    id: "02",
    slug: "financial-planner",
    name: "Financial Planner",
    shortName: "Financial Planner",
    Icon: FaChartLine,
    techMeeting: "4 Oktober 2026",
    colorHex: "#D20A81",
    description:
      "Uji kemampuan analisis dan perencanaan keuangan dalam menghadapi tantangan ekonomi modern. Kompetisi ini dirancang untuk melatih pemikiran strategis peserta dalam pengelolaan keuangan.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah berkas esai analisis keuangan dalam format PDF sesuai dengan panduan yang telah ditetapkan.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan hasil analisis keuangannya menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
    tags: ["Keuangan", "Analisis", "Strategi"],
  },
  {
    id: "03",
    slug: "bmc",
    name: "Business Model Canvas",
    shortName: "BMC",
    Icon: FaProjectDiagram,
    techMeeting: "4 Oktober 2026",
    colorHex: "#522A92",
    description:
      "Rancang model bisnis inovatif yang berkelanjutan menggunakan kerangka Business Model Canvas. Tunjukkan kemampuanmu dalam membangun strategi bisnis yang komprehensif dan visioner.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah proposal bisnis yang disatukan dengan rancangan Business Model Canvas (BMC) dalam satu berkas berformat PDF.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan proposal dan rancangan BMC menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
    tags: ["Bisnis", "Inovasi", "Strategi"],
  },
  {
    id: "04",
    slug: "uiux",
    name: "UI/UX Design",
    shortName: "UI/UX Design",
    Icon: FaPalette,
    techMeeting: "5 Oktober 2026",
    colorHex: "#6A38C8",
    description:
      "Wujudkan desain antarmuka yang intuitif dan estetis menggunakan prinsip-prinsip UX terkini. Kompetisi ini menantang kreativitas dan kepekaan desainmu dalam menciptakan produk digital yang berdampak.",
    rounds: [
      {
        babak: "Babak Penyisihan",
        detail:
          "Peserta mengunggah proposal dalam format PDF. Tautan (link) prototipe serta file rancangan komponen UI/UX harus disertakan pada bagian lampiran proposal.",
      },
      {
        babak: "Babak Final",
        detail:
          "Peserta terpilih wajib mempresentasikan konsep dan prototipe karyanya menggunakan media presentasi (PPT) dilanjutkan dengan sesi tanya jawab bersama dewan juri.",
      },
    ],
    tags: ["Desain", "Prototipe", "UX"],
  },
];

const generalRequirements = [
  { Icon: FaFileAlt, text: "Surat pernyataan pendaftaran" },
  { Icon: FaIdCard, text: "Salinan KTM atau KTP" },
  { Icon: FaMobileAlt, text: "Bukti screenshot sudah mengikuti akun Instagram dan TikTok Creanomic" },
  { Icon: FaUserAlt, text: "Biodata lengkap: Nama lengkap, NIM, Program Studi, Fakultas, Institusi" },
  { Icon: FaEnvelope, text: "Email aktif dan nomor WhatsApp" },
  { Icon: FaUsers, text: "Nama tim, jumlah anggota, dan daftar nama anggota" },
  { Icon: FaBullhorn, text: "Bukti screenshot telah membagikan poster Creanomic ke grup WhatsApp" },
];

// ─── Badge Component ───────────────────────────────────────────────────────────

function CompetitionBadge({
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
      id={`badge-${competition.slug}`}
      className="group relative flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 focus:outline-none"
      style={{ zIndex: isActive ? 10 : 1 }}
    >
      <div
        className="relative w-24 h-24 sm:w-28 sm:h-28 flex items-center justify-center transition-all duration-300"
        style={{
          filter: isActive
            ? `drop-shadow(0 0 20px ${competition.colorHex}90)`
            : "drop-shadow(0 4px 8px rgba(0,0,0,0.5))",
          transform: isActive ? "scale(1.1)" : "scale(1)",
        }}
      >
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          <polygon
            points="50,5 90,25 90,75 50,95 10,75 10,25"
            fill={isActive ? competition.colorHex : "var(--surface-container)"}
            stroke={competition.colorHex}
            strokeWidth="2.5"
            className="transition-all duration-300 pointer-events-none"
          />
        </svg>
        <div
          className="relative z-10 pointer-events-none text-2xl sm:text-3xl transition-transform duration-300 group-hover:scale-110"
          style={{ color: isActive ? "#FFFFFF" : competition.colorHex }}
        >
          <competition.Icon />
        </div>
      </div>
      <span
        className="pointer-events-none text-[10px] sm:text-xs font-bold uppercase tracking-widest text-center leading-tight transition-colors duration-300"
        style={{
          fontFamily: "var(--font-label)",
          color: isActive ? competition.colorHex : "var(--text-secondary)",
          maxWidth: "96px",
        }}
      >
        {competition.shortName}
      </span>
    </button>
  );
}

// ─── Detail Panel ──────────────────────────────────────────────────────────────

function CompetitionDetail({ competition }: { competition: Competition }) {
  return (
    <section 
      className="relative overflow-hidden rounded-3xl border px-6 py-12 md:px-12 md:py-16 backdrop-blur-sm animate-fade-in-up"
      style={{
        backgroundColor: "var(--card-bg-subtle)",
        borderColor: "var(--card-border)",
      }}
    >
      {/* Glow */}
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-[400px] w-[400px] rounded-full opacity-20 blur-[120px]"
        style={{ backgroundColor: competition.colorHex }}
      />
      <div
        className="pointer-events-none absolute -left-20 -bottom-20 h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{ backgroundColor: competition.colorHex }}
      />
      
      {/* Header */}
      <div className="relative z-10 mb-12">
        <p
          className="mb-4 text-xs font-medium tracking-[0.25em] uppercase"
          style={{ color: competition.colorHex }}
        >
          CABANG LOMBA #{competition.id}
        </p>
        <h3 
          className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl mb-6"
          style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)" }}
        >
          {competition.name}
        </h3>
        <p 
          className="max-w-2xl text-base leading-relaxed md:text-lg"
          style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
        >
          {competition.description}
        </p>
      </div>

      <div 
        className="relative z-10 grid gap-12 border-t pt-12 lg:grid-cols-2"
        style={{ borderColor: "var(--card-border)" }}
      >
        
        {/* Left: Mechanism & TM */}
        <div>
           <div className="mb-10">
             <p 
               className="mb-4 text-xs font-medium tracking-[0.2em] uppercase"
               style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
             >
                TECHNICAL MEETING
             </p>
             <div 
               className="flex items-center gap-3 text-lg font-medium"
               style={{ color: "var(--on-surface)" }}
             >
                <FaCalendarAlt className="text-2xl" style={{ color: competition.colorHex }} />
                <span>{competition.techMeeting}</span>
             </div>
           </div>

           <div>
             <p 
               className="mb-6 text-xs font-medium tracking-[0.2em] uppercase"
               style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
             >
                MEKANISME KOMPETISI
             </p>
             <div className="flex flex-col gap-6">
                {competition.rounds.map((round, idx) => (
                  <div key={round.babak} className="group">
                    <p 
                      className="text-lg font-semibold mb-2 flex items-center gap-3"
                      style={{ color: "var(--on-surface)" }}
                    >
                       <span 
                          className="text-xs font-bold w-7 h-7 rounded-full flex items-center justify-center border" 
                          style={{ 
                            color: competition.colorHex, 
                            borderColor: competition.colorHex,
                            backgroundColor: `${competition.colorHex}15`
                          }}
                       >
                          {idx+1}
                       </span>
                       {round.babak}
                    </p>
                    <p 
                      className="text-sm leading-relaxed pl-10"
                      style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
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
           <p 
             className="mb-6 text-xs font-medium tracking-[0.2em] uppercase"
             style={{ fontFamily: "var(--font-label)", color: "var(--text-muted)" }}
           >
              SYARAT PENDAFTARAN UMUM
           </p>
           <ul className="flex flex-col gap-5 mb-10">
              {generalRequirements.map((req, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <req.Icon className="text-xl shrink-0 mt-0.5" style={{ color: competition.colorHex }} />
                  <span 
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
                  >
                    {req.text}
                  </span>
                </li>
              ))}
           </ul>
           
           <p 
             className="text-xs italic mb-10"
             style={{ fontFamily: "var(--font-body)", color: "var(--text-muted)" }}
           >
             * Semua berkas dikumpulkan melalui Google Form yang disediakan oleh divisi kompetisi.
           </p>

           <a
              href="/registrasi"
              className="inline-flex w-fit items-center gap-3 rounded-full px-8 py-3.5 text-sm font-bold shadow-lg transition hover:scale-105"
              style={{ 
                backgroundColor: competition.colorHex, 
                color: "#FFFFFF", 
                boxShadow: `0 4px 20px ${competition.colorHex}40` 
              }}
            >
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
        if (el) el.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 50);
    }
  };

  return (
    <section
      id="competition"
      className="min-h-screen relative overflow-x-hidden"
      style={{ backgroundColor: "var(--surface)" }}
    >
      {/* Background glows */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(13,38,128,0.6) 0%, transparent 70%)",
          transform: "translate(-30%, -30%)",
          opacity: 0.25,
        }}
      />
      <div
        className="absolute bottom-1/3 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(82,42,146,0.6) 0%, transparent 70%)",
          transform: "translateX(30%)",
          opacity: 0.18,
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(210,10,129,0.5) 0%, transparent 70%)",
          transform: "translateX(-50%) translateY(30%)",
          opacity: 0.12,
        }}
      />

      {/* Floating accents */}
      <div
        className="absolute top-36 right-8 md:right-20 opacity-50 animate-float pointer-events-none"
        style={{ color: "var(--brand-sky-blue)" }}
        aria-hidden="true"
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      </div>
      <div
        className="absolute top-56 left-8 md:left-20 opacity-35 animate-float pointer-events-none"
        style={{ color: "var(--brand-magenta)", animationDelay: "1.2s" }}
        aria-hidden="true"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      </div>
      <div
        className="absolute top-1/2 right-4 md:right-8 opacity-25 animate-float pointer-events-none"
        style={{ color: "var(--brand-purple)", animationDelay: "2.5s" }}
        aria-hidden="true"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
        </svg>
      </div>

      {/* Page Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-4 md:px-8 lg:px-16 pt-28 pb-24">

        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-[0.12em] mb-5"
            style={{
              fontFamily: "var(--font-label)",
              backgroundColor: "rgba(42,130,231,0.12)",
              color: "var(--brand-sky-blue)",
              border: "1px solid rgba(42,130,231,0.3)",
            }}
          >
            CREANOMIC 2026
          </span>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)", letterSpacing: "-0.02em" }}
          >
            <span className="text-gradient">Bidang &amp; Tangkai</span>
            <br />
            <span style={{ color: "var(--on-surface)" }}>Lomba</span>
          </h1>
          <p
            className="text-base md:text-lg max-w-xl mx-auto"
            style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
          >
            Berikut adalah cabang lomba yang dikompetisikan dalam gelaran{" "}
            <strong style={{ color: "var(--brand-sky-blue)" }}>CREANOMIC 2026</strong>.
            Pilih lomba dan pelajari detail serta syarat pendaftarannya.
          </p>
        </div>

        {/* Badge List */}
        <div
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-16 animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
          role="tablist"
          aria-label="Daftar Cabang Lomba"
        >
          {competitions.map((comp) => (
            <CompetitionBadge
              key={comp.id}
              competition={comp}
              isActive={activeId === comp.id}
              onClick={() => handleSelect(comp.id)}
            />
          ))}
        </div>

        {/* Divider */}
        <div
          className="w-full h-px mb-10"
          style={{
            background: "linear-gradient(90deg, transparent, var(--card-border), transparent)",
          }}
        />

        {/* Detail Panel */}
        <div id="competition-detail" className="scroll-mt-24 mb-10">
          <CompetitionDetail key={activeId} competition={activeCompetition} />
        </div>

        {/* Info Banner */}
        <div
          className="rounded-[var(--radius-xl)] border p-6 md:p-8 animate-fade-in-up"
          style={{
            backgroundColor: "var(--card-bg-subtle)",
            borderColor: "var(--card-border)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            animationDelay: "0.3s",
          }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 text-center md:text-left">
            <div
              className="w-14 h-14 rounded-[var(--radius-xl)] flex items-center justify-center text-3xl flex-shrink-0"
              style={{
                backgroundColor: "rgba(42,130,231,0.15)",
                border: "1px solid rgba(42,130,231,0.3)",
                color: "#2A82E7"
              }}
            >
              <FaInfoCircle />
            </div>
            <div className="flex-1">
              <h3
                className="text-lg md:text-xl font-semibold mb-2"
                style={{ fontFamily: "var(--font-display)", color: "var(--on-surface)" }}
              >
                Informasi Penting
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: "var(--font-body)", color: "var(--text-secondary)" }}
              >
                Syarat pendaftaran berlaku untuk{" "}
                <strong style={{ color: "var(--brand-sky-blue)" }}>semua cabang lomba</strong>.
                Pastikan seluruh berkas telah disiapkan sebelum mengisi Google Form pendaftaran.
                Untuk informasi lebih lanjut, hubungi panitia CREANOMIC 2026 melalui media sosial resmi kami.
              </p>
            </div>
            <a
              href="/registrasi"
              className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold whitespace-nowrap transition-all duration-300 hover:opacity-90"
              style={{
                fontFamily: "var(--font-label)",
                background: "linear-gradient(135deg, #522A92, #D20A81)",
                color: "#FFFFFF",
                boxShadow: "0 4px 20px rgba(82,42,146,0.4)",
              }}
            >
              Daftar Sekarang
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
