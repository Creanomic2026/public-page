---
name: Vibrant Kinetic — CREANOMIC 2026 Unified Design System
version: '2.0.0'
tokens:
  colors:
    # Base Surfaces & Backgrounds
    background: '#0B0C10'
    surface: '#111415'
    surface-dim: '#0C0F10'
    surface-container-low: '#161722'
    surface-container: '#1D2021'
    surface-container-high: '#282A2B'
    surface-container-highest: '#323536'
    surface-glass: 'rgba(30, 31, 43, 0.6)'
    
    # Brand Core Accents
    brand-deep-blue: '#0D2680'
    brand-magenta: '#E025CE'
    brand-magenta-alt: '#D20A81'
    brand-purple: '#522A92'
    brand-violet: '#6A38C8'
    brand-sky-blue: '#2A82E7'
    brand-blue: '#4A60E8'

    # Text & Neutrals
    text-main: '#FFFFFF'
    text-primary: '#E1E3E4'
    text-secondary: '#C5C5D4'
    text-muted: '#94A3B8'
    border: '#2A2C3D'
    border-subtle: 'rgba(82, 42, 146, 0.35)'
    border-hover: 'rgba(224, 37, 206, 0.5)'

    # Gradients
    gradient-primary: 'linear-gradient(135deg, #522A92 0%, #E025CE 100%)'
    gradient-hero: 'linear-gradient(135deg, #0D2680 0%, #522A92 50%, #E025CE 100%)'
    gradient-sky: 'linear-gradient(135deg, #2A82E7 0%, #522A92 100%)'
    gradient-text: 'linear-gradient(135deg, #B9C3FF 0%, #D4BBFF 40%, #FFB0CE 100%)'
    gradient-text-bold: 'linear-gradient(135deg, #2A82E7 0%, #522A92 50%, #E025CE 100%)'

  typography:
    display-xl:
      fontFamily: Oswald
      fontSize: 72px
      fontWeight: '700'
      lineHeight: 80px
      letterSpacing: -0.02em
      usage: Hero / Title Halaman Utama Desktop
    display-lg:
      fontFamily: Rum Raisin
      fontSize: 48px
      fontWeight: '400'
      lineHeight: 56px
      usage: Hero Statement & Sub-Brand Accents
    headline-lg:
      fontFamily: Oswald
      fontSize: 40px
      fontWeight: '600'
      lineHeight: 48px
      usage: Judul Seksi (H2) Desktop
    headline-lg-mobile:
      fontFamily: Oswald
      fontSize: 32px
      fontWeight: '600'
      lineHeight: 38px
      usage: Judul Seksi (H2) Mobile
    headline-md:
      fontFamily: Oswald
      fontSize: 24px
      fontWeight: '600'
      lineHeight: 32px
      usage: Card Title / Subheading (H3)
    body-lg:
      fontFamily: Noto Sans
      fontSize: 18px
      fontWeight: '400'
      lineHeight: 28px
      usage: Lead Paragraph
    body-md:
      fontFamily: Noto Sans
      fontSize: 16px
      fontWeight: '400'
      lineHeight: 24px
      usage: Main Paragraph
    body-sm:
      fontFamily: Noto Sans
      fontSize: 14px
      fontWeight: '400'
      lineHeight: 22px
      usage: Form Input, Card Body, Navigation Links
    label-md:
      fontFamily: Montserrat
      fontSize: 14px
      fontWeight: '600'
      lineHeight: 20px
      letterSpacing: 0.05em
      usage: Buttons, Tabs, Meta Labels
    caption-sm:
      fontFamily: Montserrat
      fontSize: 12px
      fontWeight: '700'
      lineHeight: 16px
      letterSpacing: 0.05em
      usage: Badges, Status Pills, Micro Meta
    accent-callout:
      fontFamily: Dancing Script
      fontSize: 24px
      fontWeight: '600'
      lineHeight: 32px
      usage: Handwritten Decorative Callout

  rounded:
    sm: '8px'
    md: '12px'
    lg: '16px'
    xl: '24px'
    full: '9999px'

  spacing:
    unit: '8px'
    container-max: '1280px'
    gutter: '24px'
    margin-mobile: '16px'
    margin-tablet: '32px'
    margin-desktop: '64px'

  effects:
    glow-magenta: '0 0 30px rgba(224, 37, 206, 0.35)'
    glow-blue: '0 0 30px rgba(74, 96, 232, 0.35)'
    glow-sky: '0 0 20px rgba(42, 130, 231, 0.5), 0 0 40px rgba(42, 130, 231, 0.2)'
    glow-purple: '0 0 25px rgba(82, 42, 146, 0.5), 0 0 50px rgba(82, 42, 146, 0.2)'
    backdrop-blur: 'blur(12px)'
---

# CREANOMIC 2026 — Unified Design System & UI Specification

Dokumen ini merupakan integrasi menyeluruh dari spesifikasi teknis `design.md` dan `DESIGN_TOKENS.md`. Sistem desain ini dirancang untuk seluruh platform web dan ekosistem digital **CREANOMIC 2026**.

---

## 1. Brand Identity & Visual Theme

* **Theme Concept:** **Vibrant Kinetic & Futuristic Cyberpunk Glassmorphism**
* **Atmosphere:** High-tech, Dynamic, High-Contrast, Creative, Festival Prestige.
* **Narrative:** "Blooming Innovation" — menggabungkan struktur profesional event ekonomi kreatif dengan energi eksplosif, aksen neon cyberpunk, kedalaman glassmorphism, serta motif celestial (*stars* dan *bolts*).
* **Default Mode:** **Dark Mode** (mengoptimalkan pendaran neon glow dan kontras teks).

---

## 2. Color Palette & CSS Tokens

### A. Background & Surface Hierarchy
Lapisan kedalaman disusun secara bertingkat untuk menciptakan efek kedalaman dimensional:

| Token CSS | Hex / Value | Deskripsi & Penggunaan |
| :--- | :--- | :--- |
| `--color-bg-primary` | `#0B0C10` | Base background terdalam di seluruh halaman |
| `--color-bg-surface` | `#161722` | Surface container dasar untuk kartu dan section |
| `--color-surface-dim` | `#0C0F10` | Background alternatif untuk kontras section |
| `--color-surface-elevated` | `#1D2021` | Background elevated / inner card |
| `--color-bg-glass` | `rgba(30, 31, 43, 0.6)` | Surface transparan dengan backdrop blur untuk efek glassmorphism |
| `--brand-deep-blue` | `#0D2680` | Pondasi tonal brand / hero base container |

### B. Brand Accents & Gradients
Aksen neon berenergi tinggi yang merepresentasikan semangat "Blooming Innovation":

| Token CSS | Hex / Gradient | Karakter & Fungsi |
| :--- | :--- | :--- |
| `--color-accent-pink` / `--brand-magenta` | `#E025CE` / `#D20A81` | Aksen primer, tombol utama, pendaran hero |
| `--color-accent-violet` / `--brand-purple` | `#6A38C8` / `#522A92` | Sekunder, transisi gradien, glow tonal |
| `--color-accent-blue` / `--brand-sky-blue` | `#4A60E8` / `#2A82E7` | Highlight interaktif, info badge, icon highlight |
| `--gradient-primary` | `linear-gradient(135deg, #522A92 0%, #E025CE 100%)` | Gradien tombol primer & kartu unggulan |
| `--gradient-hero` | `linear-gradient(135deg, #0D2680 0%, #522A92 50%, #E025CE 100%)` | Gradien hero background & header besar |
| `--gradient-sky` | `linear-gradient(135deg, #2A82E7 0%, #522A92 100%)` | Aksen teknologi dan navigasi aktif |
| `--gradient-text` | `linear-gradient(135deg, #B9C3FF 0%, #D4BBFF 40%, #FFB0CE 100%)` | Shimmer text & typography highlight |

### C. Text & Neutrals

| Token CSS | Value | Penggunaan |
| :--- | :--- | :--- |
| `--color-text-main` | `#FFFFFF` | Heading utama dan teks kontras tinggi |
| `--color-text-primary` | `#E1E3E4` | Teks paragraf utama |
| `--color-text-secondary` | `rgba(225, 227, 228, 0.7)` | Paragraf sekunder / deskripsi pendukung |
| `--color-text-muted` | `#94A3B8` | Caption, sub-label, meta info |
| `--color-border` | `#2A2C3D` | Border container standar |
| `--color-border-subtle` | `rgba(82, 42, 146, 0.35)` | Border card dengan nuansa ungu |
| `--color-border-hover` | `rgba(224, 37, 206, 0.5)` | Border saat hover (glow magenta) |

---

## 3. Typography Hierarchy & Scale

Sistem tipografi menggunakan perpaduan 5 font terkurasi:
1. **Oswald:** Heading struktural, kokoh, dan berkarakter festival/event.
2. **Rum Raisin:** Display ekspresif untuk hero headline & kata kunci "Blooming Innovation".
3. **Noto Sans:** Teks tubuh utama dengan tingkat legibilitas prima di latar gelap.
4. **Montserrat:** Label tombol, navigasi, form, dan badge bernuansa geometris modern.
5. **Dancing Script (Tages-Schrift):** Aksen tulisan tangan dekoratif untuk callout personal.

| Scale Token | Font Family | Size (px/rem) | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Display XL** | `Oswald` | `72px` (4.5rem) | 700 (Bold) | `80px` (1.1) | Headline utama Hero Desktop |
| **Display LG** | `Rum Raisin` | `48px` (3rem) | 400 (Regular) | `56px` (1.2) | Sub-headline artistik Hero / Slogan |
| **Heading H1** | `Oswald` | `48px` - `64px` | 700 (Bold) | `1.2` | Title halaman / Section besar |
| **Heading H2** | `Oswald` | `32px` - `40px` | 600 (SemiBold) | `1.3` | Judul Seksi (Mobile: 32px, Desktop: 40px) |
| **Subheading H3** | `Oswald` | `20px` - `24px` | 600 (SemiBold) | `1.4` | Judul Card, Modal Header |
| **Body Large** | `Noto Sans` | `18px` (1.125rem) | 400 (Regular) | `28px` (1.6) | Lead paragraph, intro seksi |
| **Body Regular** | `Noto Sans` | `16px` (1rem) | 400 (Regular) | `24px` (1.5) | Paragraf teks utama |
| **Body Small** | `Noto Sans` | `14px` (0.875rem) | 400 (Regular) | `22px` (1.5) | Isi tabel, input, card caption |
| **Label / Button** | `Montserrat` | `14px` (0.875rem) | 600 (SemiBold) | `20px` | Tombol CTA, navigation item |
| **Badge / Caption**| `Montserrat` | `12px` (0.75rem) | 700 (Bold) | `16px` (1.4) | Pill status, tags, micro-labels |
| **Callout Accent** | `Dancing Script` | `24px` (1.5rem) | 600 (SemiBold) | `32px` | Anotasi tulisan tangan dekoratif |

---

## 4. UI Component Library

### A. Buttons
* **Primary Pill Button:**
  * **Visual:** Background solid magenta (`#E025CE`) atau gradien `--gradient-primary` (`#522A92` -> `#E025CE`).
  * **Bentuk:** Pill (`border-radius: 9999px` / `50px`).
  * **Tipografi:** Montserrat 14px SemiBold/Bold, warna putih (`#FFFFFF`).
  * **Interaksi:** Saat hover mendapatkan outer glow cyan/sky blue (`--glow-sky`) atau magenta glow (`--glow-magenta`), scale `1.03`.
* **Secondary Glass Button:**
  * **Visual:** Background semi-transparan `rgba(30, 31, 43, 0.5)`, border 1px - 2px subtle (`#2A82E7` atau `#2A2C3D`).
  * **Interaksi:** Hover memicu backdrop glow dan border warna aksen.
* **Icon Button:**
  * **Bentuk:** Circular `40px` x `40px`, border-radius `50%`.
  * **Visual:** Dark surface `#161722`, border 1px `#2A2C3D`, icon tengah warna putih/sky blue.

### B. Cards & Containers
* **Standard Card:**
  * **Surface:** Background `--color-bg-surface` (`#161722`) atau navy base.
  * **Border:** `1px solid --color-border` (`#2A2C3D`).
  * **Radius:** `16px` - `24px` (`--radius-lg` hingga `--radius-xl`).
  * **Padding:** `24px` (Desktop) / `16px` (Mobile).
* **Glow Card / Bloom Card:**
  * **Surface:** Standard Card dilapisi `backdrop-filter: blur(12px)`.
  * **Efek Khusus:** Radial gradient glow tersembunyi di sudut kartu (Magenta/Purple) yang memendarkan cahaya saat kursor melintas.

### C. Badges, Tags & Status Pills
* **Status Pill:**
  * **Bentuk:** Rounded pill penuh (`9999px`).
  * **Ukuran:** Padding `6px 16px`, font Montserrat `12px` Bold Uppercase, tracking `0.05em`.
  * **Variasi Semantik:**
    * *Innovation Tag:* Border & text Sky Blue (`#2A82E7`), background `rgba(42, 130, 231, 0.15)`.
    * *Creative Tag:* Border & text Magenta (`#E025CE`), background `rgba(224, 37, 206, 0.15)`.
    * *Event Meta:* Neutral border `#2A2C3D`, text `#94A3B8`.

### D. Input Fields & Form Controls
* **Background:** Surface gelap `#1D2021`.
* **Border:** 1px Sky Blue bottom border (`#2A82E7`) atau subtle outline `#2A2C3D`.
* **Radius:** `8px` - `12px`.
* **Focus State:** Memicu underglow magenta: `box-shadow: 0 2px 15px rgba(224, 37, 206, 0.5)`.

### E. Floating Decorative Accents
* **Motif Simbol:** Ikon Bintang (*Star*), Kilat (*Lightning Bolt*), dan Sparkle Dots.
* **Peletakan:** Ditempatkan mengambang (*floating*) di sudut kontainer atau sebagai pemecah grid untuk menegaskan kesan kinetis dan eksplosif.

---

## 5. Visual Effects & Spacing System

### A. Border Radius Tokens
* **Small (`--radius-sm` / `--radius-md`):** `8px` - `12px` (Inputs, Badges, Tooltips)
* **Medium / Large (`--radius-lg` / `--radius-xl`):** `16px` - `24px` (Cards, Modals, Section Panels)
* **Full (`--radius-full`):** `9999px` (Pill Buttons, Status Pills, Avatars)

### B. Elevation, Shadows & Neon Glows
Kedalaman visual diciptakan bukan dengan bayangan hitam konvensional, melainkan lapisan tonal dan pendaran neon:
* `--glow-magenta`: `0 0 30px rgba(224, 37, 206, 0.35)`
* `--glow-blue`: `0 0 30px rgba(74, 96, 232, 0.35)`
* `--glow-sky`: `0 0 20px rgba(42, 130, 231, 0.5), 0 0 40px rgba(42, 130, 231, 0.2)`
* `--glow-purple`: `0 0 25px rgba(82, 42, 146, 0.5), 0 0 50px rgba(82, 42, 146, 0.2)`
* `--backdrop-blur`: `backdrop-filter: blur(12px)`

### C. Layout Grid & Spacing (8px System)
* **Base Unit:** `8px` (`--space-1: 8px`, `--space-2: 16px`, `--space-3: 24px`, `--space-4: 32px`, `--space-6: 48px`, `--space-8: 64px`, `--space-10: 80px`, `--space-15: 120px`).
* **Container Max Width:** `1280px`.
* **Grid Margin:**
  * Desktop: `64px` (12-column fluid grid).
  * Tablet: `32px` (8-column grid).
  * Mobile: `16px` (4-column grid).
* **Section Gap:** `80px` - `120px` antar seksi utama untuk memberikan ruang bernapas pada efek pendaran visual.
