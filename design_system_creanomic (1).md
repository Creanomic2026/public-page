---
name: Y2K Pop Art — CREANOMIC 2026 Unified Design System
version: '2.0.0'
tokens:
  colors:
    # Base Surfaces & Backgrounds
    background-main: '#FFFFFF'
    background-dot: '#E6E6FA'
    surface-card: '#F849C1'
    surface-navbar: '#FFD43D'
    surface-ribbon: '#FFD43D'
    
    # Brand Core Accents
    brand-primary: '#0B24F3'
    brand-secondary: '#F849C1'
    brand-tertiary: '#FFD43D'
    brand-neutral: '#0B0F19'

    # Text
    text-main: '#0B0F19'
    text-light: '#FFFFFF'
    text-primary: '#0B24F3'
    
    # Borders & Shadows
    border-thick: '#FFD43D'
    border-dark: '#0B0F19'
    shadow-solid-dark: '#0B0F19'
    shadow-solid-primary: '#0B24F3'

  typography:
    display-xl:
      fontFamily: Slackey
      fontSize: 72px
      fontWeight: '400'
      lineHeight: 80px
      usage: Hero / Title Halaman Utama Desktop
    display-lg:
      fontFamily: Slackey
      fontSize: 48px
      fontWeight: '400'
      lineHeight: 56px
      usage: Hero Statement & Main Titles
    headline-lg:
      fontFamily: Slackey
      fontSize: 40px
      fontWeight: '400'
      lineHeight: 48px
      usage: Judul Seksi (H2) Desktop dalam Ribbon
    headline-md:
      fontFamily: Work Sans
      fontSize: 24px
      fontWeight: '700'
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
      usage: Form Input, Card Body
    label-md:
      fontFamily: Work Sans
      fontSize: 16px
      fontWeight: '600'
      lineHeight: 24px
      letterSpacing: 0.02em
      usage: Buttons, Navbar Links, Tabs

  rounded:
    sm: '8px'
    md: '12px'
    lg: '16px'
    xl: '24px'
    full: '9999px'
    wobbly: '255px 15px 225px 15px / 15px 225px 15px 255px' # Organik/Comic style

  spacing:
    unit: '8px'
    container-max: '1280px'
    gutter: '24px'
    margin-mobile: '16px'
    margin-tablet: '32px'
    margin-desktop: '64px'

  effects:
    shadow-solid-sm: '4px 4px 0px #0B0F19'
    shadow-solid-md: '8px 8px 0px #0B24F3'
    shadow-solid-lg: '12px 12px 0px #0B0F19'
---

# CREANOMIC 2026 — Unified Design System & UI Specification

Dokumen ini merupakan integrasi menyeluruh dari spesifikasi teknis desain untuk platform web dan ekosistem digital **CREANOMIC 2026**.

---

## 1. Brand Identity & Visual Theme

- **Theme Concept:** **Y2K / Retro-Futurism / Pop Art**
- **Atmosphere:** Ceria, Playful, Bersemangat, Kontras Tinggi, dan Ekspresif.
- **Narrative:** Menghadirkan energi anak muda yang kreatif melalui paduan warna mencolok, bentuk geometris tak beraturan (wobbly), dan elemen 3D retro (sphere & stars).
- **Default Mode:** **Light Mode** (memaksimalkan kontras warna cerah dan solid shadow).

---

## 2. Color Palette & CSS Tokens

### A. Background & Surface Hierarchy

| Token CSS | Hex / Value | Deskripsi & Penggunaan |
| :--- | :--- | :--- |
| `--color-bg-main` | `#FFFFFF` | Base background terdalam di seluruh halaman |
| `--color-bg-dot` | `#E6E6FA` | Warna titik-titik (dot grid) pada background putih |
| `--color-surface-card` | `#F849C1` | Surface dasar untuk kartu konten |
| `--color-surface-navbar`| `#FFD43D` | Background solid untuk area navigasi atas |

### B. Brand Accents

| Token CSS | Hex / Value | Karakter & Fungsi |
| :--- | :--- | :--- |
| `--brand-primary` | `#0B24F3` | Aksen dominan, garis vertikal hero, teks kontras, solid shadow |
| `--brand-secondary` | `#F849C1` | Warna dasar kartu, elemen dekoratif Y2K |
| `--brand-tertiary` | `#FFD43D` | Bingkai organik (wobbly border), pita judul (ribbons) |
| `--brand-neutral` | `#0B0F19` | Teks utama, garis tepi (outline) tegas, bayangan solid |

---

## 3. Typography Hierarchy & Scale

Sistem tipografi memadukan kesan *playful* dengan keterbacaan tinggi:
1. **Slackey:** Font display yang *chunky* dan asimetris untuk headline dan logo.
2. **Work Sans:** Font navigasi dan label yang bersih untuk mengimbangi keramaian visual.
3. **Noto Sans:** Teks tubuh utama yang sangat legible untuk paragraf dan deskripsi.

| Scale Token | Font Family | Size (px) | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Display XL** | `Slackey` | `72px` | 400 (Regular) | Headline utama Hero Desktop |
| **Heading H2** | `Slackey` | `40px` | 400 (Regular) | Judul Seksi (di dalam Ribbon) |
| **Subheading H3** | `Work Sans` | `24px` | 700 (Bold) | Judul Card / Info section |
| **Body Regular** | `Noto Sans` | `16px` | 400 (Regular) | Paragraf teks utama |
| **Label / Nav** | `Work Sans` | `16px` | 600 (SemiBold)| Menu navigasi, Tombol CTA |

---

## 4. UI Component Library

### A. Buttons
- **Primary Action Button:**
  * **Visual:** Background solid `--brand-tertiary` (`#FFD43D`).
  * **Bentuk:** Rounded tebal dengan border 2px solid `--brand-neutral` (`#0B0F19`).
  * **Tipografi:** Work Sans 16px SemiBold, warna `--brand-neutral`.
  * **Interaksi:** Hover memicu efek tombol ditekan (translasi Y dan shadow solid mengecil).

### B. Cards & Containers
- **Pop-Art Card:**
  * **Surface:** Background `--brand-secondary` (`#F849C1`).
  * **Border:** Garis tebal organik/tidak beraturan (`wobbly radius`) warna `--brand-tertiary` (`#FFD43D`).
  * **Shadow:** Solid drop-shadow (tanpa blur) warna `--brand-neutral` atau `--brand-primary` (`--shadow-solid-md`).

### C. Section Titles (Ribbons)
- **Visual:** Wadah berbentuk pita trapesium (Trapezoid).
- **Background:** `--brand-tertiary` (`#FFD43D`).
- **Teks:** Font Slackey dengan efek outline atau 3D text menggunakan bayangan solid `--brand-primary` (`#0B24F3`).

### D. Floating Decorative Accents (Y2K Elements)
- **Motif:** 3D Metallic Spheres, 3D Stars (Chrome/Pink/Blue), Tribal/Swirl vectors.
- **Peletakan:** Mengambang di sudut-sudut kontainer, pemisah antar section, menimpa (overlap) kartu untuk kesan dinamis.

---

## 5. Visual Effects & Spacing System

### A. Border & Radius Tokens
- Desain ini menghindari sudut membulat yang terlalu sempurna (kecuali untuk tombol kecil). Penggunaan `--radius-wobbly` (`255px 15px 225px 15px / 15px 225px 15px 255px`) disarankan untuk elemen dekoratif agar terlihat seperti potongan kertas stiker bergaya komik.

### B. Shadows (Solid & Hard)
Berbeda dengan efek glassmorphism yang mengandalkan blur, tema ini menggunakan bayangan pekat:
- `--shadow-solid-sm`: `4px 4px 0px #0B0F19`
- `--shadow-solid-md`: `8px 8px 0px #0B24F3`
- `--shadow-solid-lg`: `12px 12px 0px #0B0F19`

### C. Background Patterns
- **Hero Area:** Stripe background vertical bergantian (`#0B24F3` dan `#F849C1`).
- **Body Area:** Menggunakan teknik CSS radial-gradient untuk menciptakan `--color-bg-dot` berulang (Dot grid) di atas `--color-bg-main` putih.