---
name: Vibrant Kinetic
colors:
  surface: '#111415'
  surface-dim: '#111415'
  surface-bright: '#373a3b'
  surface-container-lowest: '#0c0f10'
  surface-container-low: '#191c1d'
  surface-container: '#1d2021'
  surface-container-high: '#282a2b'
  surface-container-highest: '#323536'
  on-surface: '#e1e3e4'
  on-surface-variant: '#c5c5d4'
  inverse-surface: '#e1e3e4'
  inverse-on-surface: '#2e3132'
  outline: '#8f909d'
  outline-variant: '#454652'
  surface-tint: '#b9c3ff'
  primary: '#b9c3ff'
  on-primary: '#0c2680'
  primary-container: '#0d2680'
  on-primary-container: '#8093f0'
  inverse-primary: '#4457b0'
  secondary: '#ffb0ce'
  on-secondary: '#64003a'
  secondary-container: '#cd007e'
  on-secondary-container: '#ffe6ed'
  tertiary: '#d4bbff'
  on-tertiary: '#3f117f'
  tertiary-container: '#3f127f'
  on-tertiary-container: '#ab84f0'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dde1ff'
  primary-fixed-dim: '#b9c3ff'
  on-primary-fixed: '#001257'
  on-primary-fixed-variant: '#2a3f97'
  secondary-fixed: '#ffd9e5'
  secondary-fixed-dim: '#ffb0ce'
  on-secondary-fixed: '#3e0022'
  on-secondary-fixed-variant: '#8c0054'
  tertiary-fixed: '#ebdcff'
  tertiary-fixed-dim: '#d4bbff'
  on-tertiary-fixed: '#270058'
  on-tertiary-fixed-variant: '#562f96'
  background: '#111415'
  on-background: '#e1e3e4'
  surface-variant: '#323536'
typography:
  display-xl:
    fontFamily: Oswald
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.02em
  display-lg:
    fontFamily: Rum Raisin
    fontSize: 48px
    fontWeight: '400'
    lineHeight: 56px
  headline-lg:
    fontFamily: Oswald
    fontSize: 40px
    fontWeight: '600'
    lineHeight: 48px
  headline-lg-mobile:
    fontFamily: Oswald
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 38px
  body-lg:
    fontFamily: Noto Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Noto Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Montserrat
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  accent-callout:
    fontFamily: Tages-Schrift
    fontSize: 24px
    fontWeight: '400'
    lineHeight: 32px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

This design system embodies the "Blooming Innovation" narrative through a high-energy, Maximalist aesthetic. It is designed for the creative economy, blending professional event standards with a playful, dynamic spirit. The visual language centers on growth and explosion, utilizing layered textures and celestial motifs (stars, bolts) to create a sense of constant forward motion.

The style is **High-Contrast & Bold**, leaning into a modern digital-first feel. It utilizes depth through layered UI elements and neon "blooming" glows that emerge from a dark, sophisticated base. The emotional goal is to evoke excitement, inspiration, and the feeling of a prestige creative festival.

## Colors

The palette is anchored by **Deep Blue (#0D2680)**, providing a stable, professional foundation. Energy is injected through **Magenta (#D20A81)** and **Purple (#522A92)**, which are primarily used in vibrant gradients and "blooming" neon glows. **Sky Blue (#2A82E7)** serves as a sharp accent for interactive elements and highlights.

The default mode is **Dark**, allowing the neon properties and gradients to pop. Neutral shades should be kept to high-contrast whites for legibility or very deep, desaturated versions of the primary blue for container backgrounds. Gradients should frequently transition from Purple to Magenta or Sky Blue to Deep Blue to maintain the dynamic "kinetic" feel.

## Typography

The typographic hierarchy is designed for impact and clarity. 
- **Oswald** is used for primary headings to give the system a structural, authoritative, and event-focused feel. 
- **Rum Raisin** is the creative wildcard, used for hero sections or key "Blooming" statements to inject personality.
- **Noto Sans** handles the heavy lifting for body copy, ensuring high readability against dark backgrounds.
- **Montserrat** provides a clean, geometric feel for secondary UI elements like buttons, navigation, and metadata labels.
- **Tages-Schrift** should be used sparingly as a "handwritten" annotation or decorative callout, adding a human, artistic touch to the rigid grid.

## Layout & Spacing

The layout utilizes a **fluid grid** with an underlying 8px spacing system. While the structure is systematic, the visual layer breaks the grid frequently with "floating" decorative elements (stars and bolts) that overlap container boundaries to create depth.

- **Desktop:** 12-column grid with wide 64px margins to allow "blooming" background textures to breathe.
- **Tablet:** 8-column grid with 32px margins.
- **Mobile:** 4-column grid with 16px margins. 

Vertical spacing should be generous between major sections (80px–120px) to represent "growth," while internal component padding remains tight and functional.

## Elevation & Depth

Depth is conveyed through **Neon Glows and Tonal Layers** rather than traditional drop shadows. 
- **Surface Level 0:** Deep Blue (#0D2680) background.
- **Surface Level 1:** Slightly lighter Navy cards with subtle Purple inner glows.
- **Active Elements:** Elements "bloom" from the surface using semi-transparent Magenta or Sky Blue backdrop blurs.
- **Overlays:** Use a subtle "grain" or "noise" texture on top of gradients to provide a tactile, high-end feel.

Shadows, when used, are tinted with the accent colors (e.g., a Magenta glow instead of a black shadow) to maintain the "high energy" vibe.

## Shapes

The shape language is a mix of **Rounded containers** and **Sharp geometric accents**.
- **Containers:** Main UI cards and buttons use a 0.5rem (Rounded) corner radius to feel approachable.
- **Decorative:** Stars, lightning bolts, and "sparkle" dots are used as background motifs. These should be sharp and high-angle to contrast the soft UI containers.
- **Motif:** Use "Pill-shaped" buttons for primary calls to action to stand out against the more structured rectangular cards.

## Components

### Buttons
- **Primary:** Magenta to Purple gradient background, white Montserrat bold text, pill-shaped. On hover, add a Sky Blue outer glow.
- **Secondary:** Ghost style with a Sky Blue 2px border and Montserrat text.

### Cards
- Deep Navy backgrounds with a 1px border using a subtle Purple-to-Transparent gradient. Ensure a slight backdrop-blur (10px) is applied if cards overlap background "blooms."

### Input Fields
- Dark backgrounds with a 1px Sky Blue bottom border. Focus state triggers a Magenta "glow" underneath the input field.

### Chips & Tags
- Small, uppercase Montserrat labels. Use Sky Blue for "Innovation" tags and Magenta for "Creative" tags.

### Decorative Accents
- Incorporate "Star" and "Bolt" icons as decorative bullets for list items or as floating elements in the corners of sections to reinforce the kinetic energy of the brand.
