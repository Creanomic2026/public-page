# Design System & UI Specification: CREANOMIC 2026

Dokumen ini berisi spesifikasi sistem desain (Design Tokens, Komponen UI, dan Aturan Visual) untuk digunakan di seluruh platform CREANOMIC 2026.

---

## 1. Brand Identity & Visual Style
* **Theme:** Modern Dark Mode, Futuristic Cyberpunk Accent, Minimalist Glassmorphism.
* **Atmosphere:** High-tech, Premium, Creative, Dynamic.

---

## 2. Color Tokens

### Primary & Backgrounds
* `--color-bg-primary`: `#0B0C10` (Dark Base)
* `--color-bg-surface`: `#161722` (Card / Section Surface)
* `--color-bg-glass`: `rgba(30, 31, 43, 0.6)` (Glassmorphism effect)

### Brand Accents
* `--color-accent-pink`: `#E025CE` (Primary Action / Hero Accent)
* `--color-accent-violet`: `#6A38C8` (Secondary Action / Glow)
* `--color-accent-blue`: `#4A60E8` (Info / Icon Highlight)

### Text & Neutral
* `--color-text-main`: `#FFFFFF`
* `--color-text-muted`: `#94A3B8`
* `--color-border`: `#2A2C3D`

---

## 3. Typography Tokens

* **Font Family:** `Oswald`, `Noto Sans`, `Rum Raisin`, atau Sans-Serif modern.
* **Font Weights:** `400` (Regular), `500` (Medium), `600` (SemiBold), `700` (Bold), `800` (ExtraBold).

| Scale | Size | Line Height | Usage |
| :--- | :--- | :--- | :--- |
| **Display / H1** | `48px` - `64px` | `1.2` | Title halaman utama |
| **Heading / H2** | `32px` - `40px` | `1.3` | Judul seksi / Modal Title |
| **Subheading / H3** | `20px` - `24px` | `1.4` | Card Title, Subtitle |
| **Body Large** | `16px` | `1.6` | Paragraphs utama |
| **Body Regular** | `14px` | `1.5` | Form Input, Card Body, Navigation |
| **Caption / Badge** | `12px` | `1.4` | Tags, Meta Info, Sub-labels |

---

## 4. UI Components Library

### A. Buttons
* **Primary Pill Button:** Solid Magenta (`#E025CE`), Border Radius `50px`, Text Bold White.
* **Secondary Glass Button:** Border Subtle Gray, Background Semi-Transparent, Hover Glow Effect.
* **Icon Button:** Circular `40px` x `40px`, Dark Surface.

### B. Cards & Containers
* **Standard Card:** Background `--color-bg-surface`, Border Radius `16px` - `24px`, Border `1px solid --color-border`.
* **Glow Card:** Standard Card + Radial Gradient Background Blur di belakang kartu.

### C. Badges & Tags
* **Status Pill:** Rounded Pill, Font `12px` Bold Uppercase, Padding `6px 16px`.

---

## 5. Visual Effects & Tokens

* **Border Radius:**
  * Small (Badges, Inputs): `8px` - `12px`
  * Medium (Cards, Modals): `16px` - `24px`
  * Full (Buttons, Avatars): `9999px`

* **Glow & Shadow Effects:**
  * `glow-magenta`: `0 0 30px rgba(224, 37, 206, 0.3)`
  * `glow-blue`: `0 0 30px rgba(74, 96, 232, 0.3)`
  * `backdrop-blur`: `backdrop-filter: blur(12px)`