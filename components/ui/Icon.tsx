import { type SVGProps, type ReactElement } from "react";

// ─── Icon Name Registry ───────────────────────────────────────────────────────
export type IconName =
  | "star"
  | "bolt"
  | "eye"
  | "target"
  | "arrow-right"
  | "check"
  | "chevron-left"
  | "chevron-right"
  | "menu"
  | "x"
  | "sun"
  | "moon"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "email"
  | "sparkle"
  | "trophy"
  | "users"
  | "calendar"
  | "map-pin"
  | "external-link"
  | "image-placeholder"
  | "heart"
  | "zap";

interface IconProps extends SVGProps<SVGSVGElement> {
  name: IconName;
  size?: number;
}

// ─── Icon Component ───────────────────────────────────────────────────────────
export default function Icon({ name, size = 20, className, ...props }: IconProps) {
  const baseProps = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    ...props,
  };

  const paths: Record<IconName, ReactElement> = {
    star: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    bolt: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    sparkle: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <path d="M12 2C12 2 12.5 6.5 14 8C15.5 9.5 20 10 20 10C20 10 15.5 10.5 14 12C12.5 13.5 12 18 12 18C12 18 11.5 13.5 10 12C8.5 10.5 4 10 4 10C4 10 8.5 9.5 10 8C11.5 6.5 12 2 12 2Z" />
      </svg>
    ),
    eye: (
      <svg {...baseProps}>
        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
    target: (
      <svg {...baseProps}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    "arrow-right": (
      <svg {...baseProps}>
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    ),
    check: (
      <svg {...baseProps}>
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
    "chevron-left": (
      <svg {...baseProps}>
        <polyline points="15 18 9 12 15 6" />
      </svg>
    ),
    "chevron-right": (
      <svg {...baseProps}>
        <polyline points="9 18 15 12 9 6" />
      </svg>
    ),
    menu: (
      <svg {...baseProps}>
        <line x1="3" y1="6" x2="21" y2="6" />
        <line x1="3" y1="12" x2="21" y2="12" />
        <line x1="3" y1="18" x2="21" y2="18" />
      </svg>
    ),
    x: (
      <svg {...baseProps}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    ),
    sun: (
      <svg {...baseProps}>
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    moon: (
      <svg {...baseProps}>
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    instagram: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
    tiktok: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.73a8.18 8.18 0 004.78 1.52V6.8a4.86 4.86 0 01-1.01-.11z" />
      </svg>
    ),
    youtube: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
      </svg>
    ),
    email: (
      <svg {...baseProps}>
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    trophy: (
      <svg {...baseProps}>
        <polyline points="8 8 12 3 16 8" />
        <path d="M12 3C12 3 7 3 5 8c0 4 3 6 7 7 4-1 7-3 7-7-2-5-7-5-7-5z" />
        <path d="M8 21v-2a2 2 0 012-2h4a2 2 0 012 2v2" />
        <line x1="8" y1="21" x2="16" y2="21" />
      </svg>
    ),
    users: (
      <svg {...baseProps}>
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    calendar: (
      <svg {...baseProps}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    "map-pin": (
      <svg {...baseProps}>
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    "external-link": (
      <svg {...baseProps}>
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
      </svg>
    ),
    "image-placeholder": (
      <svg {...baseProps}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    ),
    heart: (
      <svg {...baseProps}>
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    ),
    zap: (
      <svg {...baseProps} fill="currentColor" stroke="none">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  };

  return paths[name] ?? null;
}
