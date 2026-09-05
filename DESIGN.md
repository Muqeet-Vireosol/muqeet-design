# Design System & Visual Direction (DESIGN.md)

## 1. Color Palette Tokens (Strict)
- **Primary Rust / Red**: `#C4622D` / `#991B1B` (Primary CTA & Brand Highlights)
- **Secondary Terracotta**: `#D4845A` (Warm Accent)
- **Sand / Divider**: `#E8B89A` (1px Section Dividers & Frame Borders)
- **Cream / Canvas**: `#F5DEC8` / `#F5ECD7` (Section 3 Background & Light Text)
- **Deep Oak Dark**: `#1A1008` (Page Background & Modal Dark Panels)
- **Taupe Grey**: `#3F3D3A` (Navigation Theme Reference)
- **Pure Crisp White**: `#FFFFFF` (Section 2 Background)

---

## 2. Typography Specification & Font Scale

### 1. `Cormorant Garamond` / `Playfair Display` (`font-serif`, `font-playfair`)
- **Source**: Google Fonts (`family=Cormorant+Garamond:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700`)
- **Tailwind Class**: `font-serif`, `font-playfair`
- **Characteristics**: Luxury neo-classical serif with high contrast, elegant ascenders/descenders, and editorial sophistication.
- **Usage Across Sections**:
  - **Section 1 (Hero)**:
    - Main hero intro headline: `EXPERIENCE A REFRESHING`, `GAME OF PADEL` (`text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold`)
    - Scroll sequence titles: `01 - BOOK YOUR PRIVATE COURT`, `02 - HOST YOUR PADEL TOURNAMENT`, `03 - SHOOT YOUR MARKETING CAMPAIGN` (`font-serif text-3xl sm:text-5xl font-bold`)
    - Final slide callout: `YOUR COURT IS READY / LETS PLAY !` (`font-serif text-3xl sm:text-5xl font-bold`)
  - **Section 2 (The Process)**:
    - Section header: `THE PROCESS` (`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[0.18em]`)
    - Step numbering: `01 -`, `02 -`, `03 -`, `04 -` (`font-serif text-lg sm:text-xl font-bold tracking-wider`)
    - Card overlay headlines: `SELECT YOUR COURT`, `SELECT YOUR DAY`, `SELECT YOUR SLOT`, `AND LETS PLAY !` (`font-serif text-2xl sm:text-3xl md:text-4xl xl:text-[2.85rem] font-bold`)
  - **Global / Branding**:
    - Logo Brand: `The Oak` (`font-serif text-2xl sm:text-3xl font-bold tracking-wider`)
    - Modal Headlines & Section Headers (`font-serif text-2xl sm:text-3xl`)

### 2. `Inter` (`font-sans`)
- **Source**: Google Fonts (`family=Inter:wght@300;400;500;600;700`)
- **Tailwind Class**: `font-sans`
- **Characteristics**: Clean, geometric modernist sans-serif with high legibility across all screen densities.
- **Usage Across Sections**:
  - **Navigation**:
    - Links: `LETS PADEL`, `EVENTS`, `CONTACT` (`font-sans uppercase text-[11px] sm:text-xs font-normal tracking-[0.25em]`)
    - CTA Button: `BOOK YOUR COURT` (`font-sans text-xs font-semibold tracking-widest`)
  - **Section 1 (Hero)**:
    - Hero subtitle copy (`font-sans text-sm sm:text-base font-light italic`)
    - Rotating circular indicator badge: `• SCROLL DOWN • SCROLL DOWN` (`font-sans text-[9px] uppercase tracking-[0.22em] font-semibold`)
    - Captions subtitle descriptions (`font-sans text-xs sm:text-sm font-light leading-relaxed`)
    - Button: `BOOK A COURT` (`font-sans text-xs sm:text-sm font-semibold tracking-wider`)
  - **Section 2 (The Process)**:
    - Scroll indicator label: `SCROLL` (`font-sans text-xs sm:text-sm font-medium tracking-[0.3em]`)
  - **Modals, Form Fields & Footer**:
    - Form inputs, labels, court options, time slots, and legal text (`font-sans text-xs sm:text-sm`)

### 3. `Trobosh` Handcrafted Woodcut Display Typography
- **Characteristics**: Bold, artisanal neo-classical serif with distinct woodcut letterforms.
- **Usage Across Sections**:
  - **Section 3 (Memories)**:
    - Title: `LETS CREATE SOME MEMORIES !` (+40% enlarged size, rendered with handcrafted SVG glyph vectors `scale(1.4)` for crisp cross-platform fidelity).

---

## 3. Motion & Layout Rules
- **Section 1 Canvas Scroll Scrub**: 181 WebP frame pipeline with `0.14` LERP interpolation driven by GSAP ScrollTrigger.
- **Spin Animation**: 360-degree linear infinite rotation on circular "SCROLL DOWN" badge.
- **Section 2 Split Stage**:
  - **Left Side**: Pinned high-resolution video player looping `ANIMATION.mp4` / `animation_opt.mp4` flush to left edge with zero margin/padding.
  - **Right Side**: Interactive UI/UX scrolling cards with +20% enlarged cards and bold serif overlays.
- **Section 3 Cursor Buffer**: Mouse/touch trailing photos with $-8^\circ$ to $+8^\circ$ tilt, capped at max 5 active items.
- **Dividers**: `1px solid #E8B89A` between sections.
- **Section Padding**: Generous spacing (`py-24 md:py-36`).


