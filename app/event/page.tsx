import React from "react";

// Menambahkan metadata untuk SEO halaman ini
export const metadata = {
  title: "Our Events - CREANOMIC",
  description: "Rangkaian acara Creanomic termasuk Market Days, Exhibition, Entertainment, Talkshow, dan Competition.",
};

// Data array untuk menyimpan daftar acara agar lebih rapi (Clean Code)
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
    
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-20 px-6 sm:px-12 lg:px-24">

      {/* --- EFEK VISUAL: Dekorasi Glow Latar Belakang --- */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-pulse rounded-full bg-[#522A92] opacity-20 mix-blend-screen blur-[120px]"></div>
      <div className="absolute bottom-1/4 right-1/4 h-[500px] w-[500px] rounded-full bg-[#0D2680] opacity-30 mix-blend-screen blur-[150px]"></div>

      <div className="max-w-6xl mx-auto">
        
        {/* Judul Halaman */}
        <h1 className="mb-6 font-['Oswald'] text-5xl font-bold leading-[1.1] tracking-tight text-[#FFFFFF] md:text-[72px] text-center" >
          Our <span className="bg-gradient-to-br from-[#0D2680] via-[#522A92] to-[#E025CE] bg-clip-text text-transparent">
            Events 
          </span>
        </h1>

        {/* List Acara */}
        <div className="flex flex-col gap-20">
          {events.map((event, index) => (
            <div
              key={event.id}
              className={`flex flex-col md:flex-row gap-10 items-center ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Kotak Gambar (Placeholder) */}
              <div className="w-full md:w-1/2 aspect-[4/3] bg-zinc-200 dark:bg-zinc-800 rounded-3xl flex flex-col items-center justify-center shadow-lg transition-transform hover:scale-105 duration-300">
                <span className="text-zinc-500 font-medium text-lg">
                  [ Gambar {event.title} ]
                </span>
                <span className="text-zinc-400 text-sm mt-2">
                  (Ganti dengan tag &lt;img&gt; nanti)
                </span>
              </div>

              {/* Teks Deskripsi */}
              <div className="w-full md:w-1/2 flex flex-col">
                <span className="text-sm font-semibold tracking-widest text-zinc-500 mb-2">
                  EVENT #{event.id}
                </span>
                <h2 className="font-['Oswald'] text-3xl font-bold leading-[1.2] tracking-tight text-[#FFFFFF]">
                  {event.title}
                </h2>
                <p className="mx-auto mb-[48px] max-w-2xl font-['Noto_Sans'] text-[18px] leading-[28px] text-[#E1E3E4]">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}