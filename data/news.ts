import type { NewsPost } from "@/types";

/**
 * Konten berita & pengumuman resmi CREANOMIC 2026.
 * Urutkan dari yang terbaru — post pertama tampil sebagai headline di /news.
 */
export const NEWS_POSTS: NewsPost[] = [
  {
    slug: "hasil-seleksi-talent-creanomic-2026",
    title: "Pengumuman Hasil Seleksi Talent CREANOMIC 2026",
    shortTitle: "HASIL SELEKSI TALENT",
    excerpt:
      "Panitia CREANOMIC 2026 resmi mengumumkan talent yang lolos seleksi untuk Main Event pada 10 November 2026 di Gazebo Raden Wijaya, Universitas Brawijaya.",
    category: "Pengumuman",
    date: "2026-11-03",
    dateLabel: "3 November 2026",
    number: "010/PU.i.3/CREA/DAGRI/BEMVOKASIUB/XI/2026",
    pdf: "/documents/hasil-seleksi-talent-creanomic-2026.pdf",
    paragraphs: [
      "Pada hari ini Selasa, 3 bulan November tahun 2026, Panitia CREANOMIC 2026 Fakultas Vokasi Universitas Brawijaya telah melaksanakan proses seleksi talent untuk Main Event CREANOMIC 2026 yang diselenggarakan pada hari Selasa, 10 November 2026, bertempat di Gazebo Raden Wijaya, Universitas Brawijaya.",
      "Berdasarkan hasil seleksi yang telah dilakukan oleh panitia, dengan ini diumumkan bahwa peserta yang dinyatakan lolos sebagai talent CREANOMIC 2026 adalah sebagai berikut:",
    ],
    talentGroups: [
      {
        id: "A",
        title: "Musik Vokal dan Tari",
        talents: [
          {
            no: 1,
            name: "Muhammad Alif Hasan",
            prodi: "Manajemen Perhotelan",
            angkatan: "2026",
            type: "Musik & Vokal",
          },
          {
            no: 2,
            name: "Nisfaturrofiah",
            prodi: "Administrasi Bisnis",
            angkatan: "2026",
            type: "Musik & Vokal",
          },
          {
            no: 3,
            name: "Sophia Adelia Nabila",
            prodi: "Teknologi Informasi",
            angkatan: "2026",
            type: "Musik & Vokal",
          },
          {
            no: 4,
            name: "Amira Salma Nafisa",
            prodi: "Teknologi Informasi",
            angkatan: "2025",
            type: "Tari Tradisional",
          },
          {
            no: 5,
            name: "Nadia Salwa Oktavia",
            prodi: "Teknologi Informasi",
            angkatan: "2025",
            type: "Tari Tradisional",
          },
        ],
      },
      {
        id: "B",
        title: "Band",
        talents: [
          { no: 1, name: "Band Keunband", type: "Musik Band" },
          { no: 2, name: "Band Twinfield", type: "Musik Band" },
          { no: 3, name: "Band Wifi-UB-X", type: "Musik Band" },
        ],
      },
      {
        id: "C",
        title: "MC dan Moderator",
        talents: [
          {
            no: 1,
            name: "Ardli Miftachul Ulum Maghribi",
            prodi: "Teknologi Informasi",
            angkatan: "2025",
            type: "Master of Ceremony (MC)",
          },
          {
            no: 2,
            name: "Febriana Nur Azizah Bahri Pellu",
            prodi: "Administrasi Bisnis",
            angkatan: "2025",
            type: "Master of Ceremony (MC)",
          },
          {
            no: 3,
            name: "Gusti Putri Tyarawardani",
            prodi: "Penilaian Properti dan Bisnis",
            angkatan: "2026",
            type: "Moderator",
          },
        ],
      },
      {
        id: "D",
        title: "Model Fashion Show",
        talents: [
          {
            no: 1,
            name: "Muhammad Hafizh Fajariyanto",
            prodi: "Teknologi Informasi",
            angkatan: "2025",
          },
          {
            no: 2,
            name: "Amirul Zacky Wahyutama",
            prodi: "Administrasi Bisnis",
            angkatan: "2025",
          },
          {
            no: 3,
            name: "Muhamad Gilang Setiawan",
            prodi: "Manajemen Perhotelan",
            angkatan: "2025",
          },
          {
            no: 4,
            name: "Andhika Ahmad Ghazali",
            prodi: "Teknologi Informasi",
            angkatan: "2025",
          },
          {
            no: 5,
            name: "Rehan Arya Dinata",
            prodi: "Keuangan dan Perbankan",
            angkatan: "2026",
          },
          {
            no: 6,
            name: "Syahda Sayyida Sakhi",
            prodi: "Administrasi Bisnis",
            angkatan: "2026",
          },
          {
            no: 7,
            name: "Nabilla Azzahra",
            prodi: "Keuangan dan Perbankan",
            angkatan: "2025",
          },
          {
            no: 8,
            name: "Nonita Nafitri Andriyanto",
            prodi: "Manajemen Perhotelan",
            angkatan: "2024",
          },
          {
            no: 9,
            name: "Shafa Shalsabila Rahma Ramadani",
            prodi: "Manajemen Perhotelan",
            angkatan: "2025",
          },
          {
            no: 10,
            name: "Inzaghita Putri Wiby Sutanto",
            prodi: "Administrasi Bisnis",
            angkatan: "2025",
          },
        ],
      },
    ],
    closing:
      "Demikian berita acara ini dibuat dengan sebenarnya untuk dipergunakan sebagaimana mestinya. Talent yang dinyatakan lolos diharapkan dapat mengikuti seluruh rangkaian kegiatan sesuai arahan panitia.",
    signatory: {
      place: "Malang",
      date: "3 November 2026",
      role: "Ketua Pelaksana CREANOMIC 2026",
      name: "Putri Firyal Atshilla Mumtaza",
      nim: "253140507111025",
    },
  },
];

export function getNewsPost(slug: string): NewsPost | undefined {
  return NEWS_POSTS.find((post) => post.slug === slug);
}
