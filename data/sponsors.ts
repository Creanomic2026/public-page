import type { Sponsor } from "@/types";

export const SPONSORS: Sponsor[] = [
  {
    id: "hotways",
    name: "Hotway's",
    logo: "/images/sponsors/official/hotways.png",
  },
  {
    id: "dazzle-me",
    name: "Dazzle Me",
    logo: "/images/sponsors/official/dazzle-me.png",
    dark: true,
  },
  {
    id: "panda-lovely",
    name: "Panda Lovely",
    logo: "/images/sponsors/official/panda-lovely.png",
  },
  {
    id: "barenbliss",
    name: "Barenbliss",
    logo: "/images/sponsors/official/barenbliss.png",
  },
  {
    id: "lavojoy",
    name: "Lavojoy",
    logo: "/images/sponsors/official/lavojoy.jpg",
  },
  {
    id: "meltd",
    name: "MELTD",
    logo: "/images/sponsors/official/meltd.png",
  },
  {
    id: "esme",
    name: "ESME Beads and Chains",
    logo: "/images/sponsors/official/esme.png",
  },
  {
    id: "oyi",
    name: "OYI Buttermilk Chicken",
    logo: "/images/sponsors/official/oyi.png",
  },
  {
    id: "pesenkopi",
    name: "Pesenkopi",
    logo: "/images/sponsors/official/pesenkopi.jpg",
  },
  {
    id: "you",
    name: "Y.O.U",
    logo: "/images/sponsors/official/you.jpg",
  },
  {
    id: "bca",
    name: "BCA",
    logo: "/images/sponsors/official/bca.jpg",
  },
  {
    id: "grab",
    name: "Grab",
    logo: "/images/sponsors/official/grab.jpg",
  },
];

export const MEDIA_PARTNERS: Sponsor[] = [
  {
    id: "event-jatim",
    name: "Event Jatim",
    logo: "/images/sponsors/media/event-jatim.png",
    tier: "media-partner",
  },
  {
    id: "himapolitik-ub",
    name: "Himapolitik UB",
    logo: "/images/sponsors/media/himapolitik-ub.png",
    tier: "media-partner",
  },
  {
    id: "event-kampus",
    name: "Event Kampus",
    logo: "/images/sponsors/media/event-kampus.png",
    tier: "media-partner",
  },
  {
    id: "hmsa",
    name: "HMSA",
    logo: "/images/sponsors/media/hmsa.png",
    tier: "media-partner",
  },
  {
    id: "acara-kampus-malang",
    name: "Acara Kampus Malang",
    logo: "/images/sponsors/media/acara-kampus-malang.png",
    tier: "media-partner",
  },
  {
    id: "filkom-ub",
    name: "Filkom UB",
    logo: "/images/sponsors/media/filkom-ub.png",
    tier: "media-partner",
  },
  {
    id: "hima-humas-fikom-unpad",
    name: "Hima Humas Fikom Unpad",
    logo: "/images/sponsors/media/hima-humas-fikom-unpad.png",
    tier: "media-partner",
  },
  {
    id: "fisip-ub",
    name: "FISIP UB",
    logo: "/images/sponsors/media/fisip-ub.jpg",
    tier: "media-partner",
  },
  {
    id: "event-nation",
    name: "Event Nation",
    logo: "/images/sponsors/media/event-nation.png",
    tier: "media-partner",
    dark: true,
  },
  {
    id: "edaran-event",
    name: "Edaran Event",
    logo: "/images/sponsors/media/edaran-event.png",
    tier: "media-partner",
  },
  {
    id: "fia-ub",
    name: "FIA UB",
    logo: "/images/sponsors/media/fia-ub.png",
    tier: "media-partner",
  },
  {
    id: "lomba-nation",
    name: "Lomba Nation",
    logo: "/images/sponsors/media/lomba-nation.png",
    tier: "media-partner",
    dark: true,
  },
  {
    id: "info-event-jatim",
    name: "Info Event Jatim",
    logo: "/images/sponsors/media/info-event-jatim.png",
    tier: "media-partner",
  },
  {
    id: "fh-ub",
    name: "FH UB",
    logo: "/images/sponsors/media/fh-ub.png",
    tier: "media-partner",
  },
  {
    id: "info-event",
    name: "Info Event",
    logo: "/images/sponsors/media/info-event.png",
    tier: "media-partner",
  },
  {
    id: "bem-ftab-ub",
    name: "BEM FTAB UB 2026",
    logo: "/images/sponsors/media/bem-ftab-ub.png",
    tier: "media-partner",
  },
  {
    id: "bem-teknik-ub",
    name: "BEM Teknik UB",
    logo: "/images/sponsors/media/bem-teknik-ub.png",
    tier: "media-partner",
  },
  {
    id: "hmps-keubank",
    name: "HMPS Keubank",
    logo: "/images/sponsors/media/hmps-keubank.jpg",
    tier: "media-partner",
  },
  {
    id: "eventhunter",
    name: "Eventhunter.id",
    logo: "/images/sponsors/media/eventhunter.png",
    tier: "media-partner",
  },
  {
    id: "katalog-event",
    name: "Katalog Event Indonesia",
    logo: "/images/sponsors/media/katalog-event.png",
    tier: "media-partner",
  },
];

// Group sponsors by tier for easy rendering
export const SPONSOR_TIERS = {
  platinum: SPONSORS.filter((s) => s.tier === "platinum"),
  gold: SPONSORS.filter((s) => s.tier === "gold"),
  silver: SPONSORS.filter((s) => s.tier === "silver"),
  mediaPartner: MEDIA_PARTNERS,
} as const;
