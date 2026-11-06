/**
 * Data untuk Carousel Kilas Balik CREANOMIC.
 * Anda dapat dengan mudah menambah, mengedit, atau menghapus card event di sini.
 */

export interface KilasBalikItem {
  id: string | number;
  title: string;
  category?: string;
  year?: string;
  image?: string; // Path gambar jika ada, misal: "/images/events/opening.jpg"
  description?: string;
}

export const KILAS_BALIK_DATA: KilasBalikItem[] = [
  {
    id: 1,
    title: "Opening Ceremony & Expo",
    category: "OPENING CEREMONY",
    year: "2025",
    image: "/images/documentation/opening-ceremony.jpg",
    description: "Pembukaan meriah dengan pameran karya inovasi dan expo UMKM kreatif se-Jawa Timur.",
  },
  {
    id: 2,
    title: "National Business Competition",
    category: "COMPETITION",
    year: "2025",
    image: "/images/documentation/business-competition.jpg",
    description: "Ajang kompetisi ide bisnis mahasiswa berskala nasional dengan dewan juri praktisi industri.",
  },
  {
    id: 3,
    title: "Awarding Night & Exhibition",
    category: "CLOSING",
    year: "2025",
    image: "/images/documentation/awarding-night.jpg",
    description: "Malam penganugerahan pemenang kompetisi diiringi pameran karya terbaik dan pertunjukan musik.",
  },
  {
    id: 4,
    title: "Talkshow & Mentoring Session",
    category: "TALKSHOW",
    year: "2025",
    image: "/images/documentation/talkshow-mentoring.jpg",
    description: "Sesi diskusi interaktif bersama para founder startup dan pakar ekonomi kreatif.",
  },
  {
    id: 5,
    title: "Creative Workshop & Showcase",
    category: "WORKSHOP",
    year: "2025",
    image: "/images/documentation/creative-showcase.jpg",
    description: "Workshop hands-on peningkatan skill kreatif dan showcase produk unggulan mahasiswa.",
  },
  {
    id: 6,
    title: "Talkshow: Empowering Young Innovators",
    category: "TALKSHOW",
    year: "2025",
    image: "/images/documentation/talkshow-empowering-innovators.jpg",
    description:
      "Sesi inspiratif bersama Ali Said, Konsultan PT Indonesia Asahan Aluminium, tentang semangat kewirausahaan generasi muda.",
  },
  {
    id: 7,
    title: "Exhibition & Tenant Booths",
    category: "EXHIBITION",
    year: "2025",
    image: "/images/documentation/expo-tenant-booths.jpg",
    description:
      "Deretan booth pameran karya mahasiswa dan tenant kreatif yang ramai dikunjungi pengunjung.",
  },
  {
    id: 8,
    title: "Awarding Business Case",
    category: "AWARDING",
    year: "2025",
    image: "/images/documentation/awarding-business-case.jpg",
    description:
      "Momen pemberian penghargaan kepada para pemenang Business Case dengan total hadiah jutaan rupiah.",
  },
  {
    id: 9,
    title: "Homeband Performance",
    category: "ENTERTAINMENT",
    year: "2025",
    image: "/images/documentation/homeband-performance.jpg",
    description:
      "Penampilan homeband mahasiswa yang memeriahkan panggung CREANOMIC.",
  },
  {
    id: 10,
    title: "Crowd & Community Vibes",
    category: "ATMOSPHERE",
    year: "2025",
    image: "/images/documentation/crowd-interaction.jpg",
    description:
      "Antusiasme pengunjung dan peserta saat mengikuti rangkaian acara CREANOMIC.",
  },
];
