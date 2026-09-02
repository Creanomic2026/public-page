// ─── Site Metadata ────────────────────────────────────────────────────────────
export const SITE_NAME = "CREANOMIC 2025";
export const SITE_DESCRIPTION =
  "Creative Economic Expo — Festival ekonomi kreatif tahunan Fakultas Vokasi Universitas Brawijaya. Blooming Innovation, Creating Impact.";
export const SITE_URL = "https://creanomic.com";
export const SITE_TAGLINE = "Shaping Innovation, Creating Impact";
export const SITE_EYEBROW = "A Festival of Innovation & Creativity";

// ─── Organization ─────────────────────────────────────────────────────────────
export const ORGANIZER = "Fakultas Vokasi Universitas Brawijaya";
export const ORGANIZER_SHORT = "FV UB";

// ─── Event Info ───────────────────────────────────────────────────────────────
export const EVENT_YEAR = 2025;
export const EVENT_DATE = "Oktober 2025";
export const EVENT_LOCATION = "Malang, Jawa Timur";
export const EVENT_DURATION = "3 Hari";

// ─── Social Links ─────────────────────────────────────────────────────────────
export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/creanomic/",
  twitter:   "https://twitter.com/creanomic",
  youtube:   "https://www.youtube.com/@creanomic",
  email:     "mailto:creanomic@ub.ac.id",
  tiktok:    "https://www.tiktok.com/@creanomic",
} as const;

// ─── Vibrant Kinetic Color Palette ────────────────────────────────────────────
export const COLORS = {
  // Brand constants
  deepBlue:  "#0D2680",
  magenta:   "#D20A81",
  purple:    "#522A92",
  skyBlue:   "#2A82E7",

  // Dark theme surface
  surface:          "#111415",
  surfaceContainer: "#1d2021",
  onSurface:        "#e1e3e4",

  // Gradients (as CSS strings)
  gradientPrimary:  "linear-gradient(135deg, #522A92, #D20A81)",
  gradientHero:     "linear-gradient(135deg, #0D2680, #522A92, #D20A81)",
  gradientText:     "linear-gradient(135deg, #b9c3ff, #d4bbff, #ffb0ce)",
} as const;

// ─── Typography Scale Reference ────────────────────────────────────────────────
export const TYPE_SCALE = {
  displayXl:  { fontFamily: "Oswald",      fontSize: "72px", fontWeight: "700", lineHeight: "80px",  letterSpacing: "-0.02em" },
  displayLg:  { fontFamily: "Rum Raisin",  fontSize: "48px", fontWeight: "400", lineHeight: "56px" },
  headlineLg: { fontFamily: "Oswald",      fontSize: "40px", fontWeight: "600", lineHeight: "48px" },
  bodyLg:     { fontFamily: "Noto Sans",   fontSize: "18px", fontWeight: "400", lineHeight: "28px" },
  bodyMd:     { fontFamily: "Noto Sans",   fontSize: "16px", fontWeight: "400", lineHeight: "24px" },
  labelMd:    { fontFamily: "Montserrat",  fontSize: "14px", fontWeight: "600", lineHeight: "20px", letterSpacing: "0.05em" },
  accentCallout: { fontFamily: "Dancing Script", fontSize: "24px", fontWeight: "400", lineHeight: "32px" },
} as const;
