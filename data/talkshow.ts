export interface TalkshowSpeaker {
  id: string;
  name: string;
  role: string;
  organization: string;
  photo: string;
}

/**
 * Narasumber CREANOMIC Talkshow 2026.
 * Foto menggunakan potret transparan agar menyatu dengan kartu pop-art.
 */
export const TALKSHOW_SPEAKERS: TalkshowSpeaker[] = [
  {
    id: "brillyanes-sanawiri",
    name: "Brillyanes Sanawiri",
    role: "Managing Head, Centre for Leading Innovation",
    organization: "Universitas Brawijaya",
    photo: "/images/narsumtalkshow/brillyanes-sanawiri.png",
  },
  {
    id: "evan-haydar",
    name: "Evan Haydar",
    role: "Content Creator, Speaker & Author",
    organization: "Ex-Tesla",
    photo: "/images/narsumtalkshow/evan-haydar.png",
  },
];
