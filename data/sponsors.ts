import type { Sponsor } from "@/types";

export const SPONSORS: Sponsor[] = [
  // Tambahkan data sponsor di sini
  // {
  //   id: "sponsor-1",
  //   name: "Nama Sponsor",
  //   logo: "/images/sponsors/sponsor-1.png",
  //   website: "https://example.com",
  //   tier: "platinum",
  // },
];

export const MEDIA_PARTNERS: Sponsor[] = [
  // Tambahkan data media partner di sini
  // {
  //   id: "mp-1",
  //   name: "Nama Media Partner",
  //   logo: "/images/sponsors/mp-1.png",
  //   website: "https://example.com",
  //   tier: "media-partner",
  // },
];

// Group sponsors by tier for easy rendering
export const SPONSOR_TIERS = {
  platinum: SPONSORS.filter((s) => s.tier === "platinum"),
  gold: SPONSORS.filter((s) => s.tier === "gold"),
  silver: SPONSORS.filter((s) => s.tier === "silver"),
  mediaPartner: MEDIA_PARTNERS,
} as const;
