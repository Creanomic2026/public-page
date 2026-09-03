// ─── Navigation ───────────────────────────────────────────────────────────────
export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

// ─── Sponsor ──────────────────────────────────────────────────────────────────
export type SponsorTier = "platinum" | "gold" | "silver" | "media-partner";

export interface Sponsor {
  id: string;
  name: string;
  logo: string; // path to image in /public/images/sponsors/
  website?: string;
  tier?: SponsorTier; // optional — no longer required for display
}

// ─── Event / Portfolio ────────────────────────────────────────────────────────
export interface EventHighlight {
  id: string;
  title: string;
  description: string;
  image: string; // path to image in /public/images/events/
  year?: number;
  category?: string;
}

// ─── Timeline / Agenda ────────────────────────────────────────────────────────
export interface TimelineItem {
  id: string;
  date: string;
  title: string;
  description?: string;
  isHighlight?: boolean;
}

// ─── Service / Feature Card ───────────────────────────────────────────────────
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string; // SVG icon name or emoji
}

// ─── Section Props (shared) ───────────────────────────────────────────────────
export interface SectionProps {
  className?: string;
}

// ─── Button ───────────────────────────────────────────────────────────────────
export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

// ─── Filosofi / About Tab ─────────────────────────────────────────────────────
export interface FilosofiItem {
  id: string;
  title: string;
  subtitle?: string;
  content: string;
  image?: string;
}
