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
    category: "CREANOMIC 2025",
    year: "2025",
    description: "Pembukaan meriah dengan pameran karya inovasi dan expo UMKM kreatif se-Jawa Timur.",
  },
  {
    id: 2,
    title: "National Business Competition",
    category: "COMPETITION",
    year: "2025",
    description: "Ajang kompetisi ide bisnis mahasiswa berskala nasional dengan dewan juri praktisi industri.",
  },
  {
    id: 3,
    title: "Awarding Night & Exhibition",
    category: "CLOSING",
    year: "2025",
    description: "Malam penganugerahan pemenang kompetisi diiringi pameran karya terbaik dan pertunjukan musik.",
  },
  {
    id: 4,
    title: "Talkshow & Mentoring Session",
    category: "TALKSHOW",
    year: "2025",
    description: "Sesi diskusi interaktif bersama para founder startup dan pakar ekonomi kreatif.",
  },
  {
    id: 5,
    title: "Creative Workshop & Showcase",
    category: "WORKSHOP",
    year: "2025",
    description: "Workshop hands-on peningkatan skill kreatif dan showcase produk unggulan mahasiswa.",
  },
];

