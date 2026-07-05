---
name: Industrial Integrity
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#44474d'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#75777e'
  outline-variant: '#c5c6ce'
  surface-tint: '#4e5f7c'
  primary: '#00030a'
  on-primary: '#ffffff'
  primary-container: '#0a1d37'
  on-primary-container: '#7586a5'
  inverse-primary: '#b6c7e9'
  secondary: '#78583f'
  on-secondary: '#ffffff'
  secondary-container: '#fdd2b2'
  on-secondary-container: '#785840'
  tertiary: '#000302'
  on-tertiary: '#ffffff'
  tertiary-container: '#002218'
  on-tertiary-container: '#53907a'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#b6c7e9'
  on-primary-fixed: '#081c36'
  on-primary-fixed-variant: '#364763'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#e8bea0'
  on-secondary-fixed: '#2c1604'
  on-secondary-fixed-variant: '#5d4029'
  tertiary-fixed: '#b0f0d6'
  tertiary-fixed-dim: '#95d3ba'
  on-tertiary-fixed: '#002117'
  on-tertiary-fixed-variant: '#0b513d'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  display-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  title-md:
    fontFamily: Hanken Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
  body-lg:
    fontFamily: Public Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Public Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

This design system is built for an established Indian paper trading enterprise, emphasizing reliability, scale, and the physical nature of the commodity. The brand personality is **authoritative and grounded**, bridging the gap between traditional industrial operations and modern digital efficiency.

The design style is **Modern Corporate with Tactile accents**. It utilizes a structured, high-end aesthetic characterized by:
- **Industrial Precision:** Clean lines and a strict grid reflecting the efficiency of logistics and supply chains.
- **Materiality:** Subtle use of "Paper" textures (fine grain) on secondary surfaces to reinforce the core product.
- **Sophistication:** A "High-End" feel achieved through generous whitespace and a restricted, prestigious color palette.
- **Trust:** A heavy emphasis on legibility and clear information hierarchy to ensure professional confidence.

## Colors

The palette is rooted in a sense of history and permanence.
- **Deep Navy (#0A1D37):** The anchor color. Used for headers, primary actions, and critical text. It evokes the feeling of corporate stability and ink on paper.
- **Kraft Brown (#8C6A50):** An earthy, industrial accent inspired by raw paper materials. Used for secondary call-outs, progress indicators, or highlights.
- **Emerald Green (#064E3B):** Used sparingly for success states, growth indicators, or "In Stock" markers, providing a high-contrast professional pop.
- **Paper White (#FFFFFF) & Soft Grey (#F9FAFB):** The primary background colors, mimicking clean, high-grade bond paper.

## Typography

The typography system is designed for maximum clarity in B2B transactions.
- **Hanken Grotesk (Headlines):** A sharp, contemporary sans-serif that communicates modern professionalism. Used for all headings to provide a "premium industrial" look.
- **Public Sans (Body):** An institutional, highly readable font designed for clarity. It handles long-form inventory lists and technical specifications with ease.
- **Geist (Data & Labels):** A monospaced/technical font used for SKUs, GSM values, paper dimensions, and logistical timestamps, reinforcing the "precision" aspect of the trade.

## Layout & Spacing

The layout follows a **Fixed-Width Centered Grid** on desktop to maintain an editorial, high-end feel, and a **Fluid Grid** on mobile.

- **Grid:** A 12-column system is used for desktop (1280px max-width) to allow for complex data layouts like inventory tables and order tracking.
- **Rhythm:** An 8px baseline grid ensures vertical consistency.
- **Margins:** Generous margins are used to create "breathing room," preventing the industrial aesthetic from feeling cluttered or "cheap."
- **Mobile:** Breakpoint at 768px. Content reflows to a single column with 20px side margins. Large data tables should switch to card-based views or allow horizontal scrolling with sticky headers.

## Elevation & Depth

To maintain the "Industrial Modern" aesthetic, depth is achieved through **Tonal Layering and Low-Contrast Outlines** rather than heavy shadows.

- **Surface Levels:** 
  - Level 0: Background (Paper White).
  - Level 1: Cards and Containers (White with a 1px border in #E5E7EB).
  - Level 2: Interactive elements (Subtle 4px blur shadow, 5% opacity Navy).
- **Texture:** Secondary surfaces (like sidebars or footers) may use a subtle, non-tiled noise overlay to mimic the tactile feel of heavy-duty paper.
- **Borders:** Use crisp, 1px solid borders for all container divisions to reinforce the "grid" and "cut" nature of paper processing.

## Shapes

The shape language is **Soft yet Structured**. 
- **Roundedness:** A setting of `1` (0.25rem / 4px) is applied to most UI elements (buttons, inputs, cards). This provides enough softness to feel modern while maintaining the rigid, "cut" edges associated with paper reams and industrial machinery.
- **Specifics:** `rounded-lg` (8px) should be reserved for large image containers or decorative elements. Avoid pill-shaped buttons; use rectangular buttons with slight rounding to maintain a corporate profile.

## Components

### Buttons
- **Primary:** Solid Deep Navy (#0A1D37) with White text. Rectangular with 4px corner radius.
- **Secondary:** Transparent with a Kraft Brown (#8C6A50) border and text.
- **Tertiary:** Text-only in Navy with a subtle underline on hover.

### Input Fields
- Use a white background with a light grey border. Upon focus, the border shifts to Deep Navy. Labels should use the **Geist** font in uppercase for a "form-entry" feel.

### Cards & Paper Lists
- **Inventory Cards:** Use a subtle background grain. Include a "GSM" badge in the top right using the Emerald Green accent.
- **Lists:** Clean rows separated by 1px light grey lines. Ensure high contrast for numerical data (quantities, prices).

### Status Chips
- **In Stock:** Emerald Green background (low opacity) with Emerald Green text.
- **Special Order:** Kraft Brown background (low opacity) with Kraft Brown text.
- **Out of Stock:** Neutral Grey background with Navy text.

### Industrial Imagery
- Use high-quality, desaturated photography of paper rolls, warehouses, or printing presses. Apply a subtle Navy color wash to hero images to ensure text legibility.