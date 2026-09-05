# Interactive Component Catalog (COMPONENTS.md)

This document details all interactive UI components, their expected state management, props, and behaviors across Sections 1, 2, and 3.

---

## 1. `Navbar`
- **Location**: Fixed at top of viewport.
- **Behaviors**:
  - Full-width transparent background (`bg-transparent`).
  - Brand: Left-aligned crimson red `"The Oak"` with `"PADEL HOUSE"` sub-label.
  - Centered navigation links (`LETS PADEL`, `EVENTS`, `CONTACT`) with light grey default state (`#B0B0B0`) and smooth hover transition to pure white (`#FFFFFF`) via `transition: all 0.25s ease-in-out`.
  - Active section highlight tracked dynamically via scroll position.
  - Primary button `"BOOK YOUR COURT"` (crimson red `#991B1B`) opens global `BookingModal`.
  - Mobile slide-out drawer for screens < 768px.

---

## 2. `SectionHero` (Section 1)
- **Location**: Section 1
- **Interactive Elements**:
  - **181-Frame Canvas Scrub**: Preloaded WebP frame sequence rendered to `<canvas>` with device pixel ratio scaling and `0.14` LERP smoothing driven by GSAP ScrollTrigger.
  - **Centered Intro Title**: Screen 1 displays centered `EXPERIENCE A REFRESHING`, `GAME OF PADEL`, and italic subtitle.
  - **Rotating Circular Badge**: Constantly rotating circular SVG `• SCROLL DOWN • SCROLL DOWN` badge centered at the bottom of the screen.
  - **Sequential Left-Aligned Captions**:
    - `01 - BOOK YOUR PRIVATE COURT`
    - `02 - HOST YOUR PADEL TOURNAMENT`
    - `03 - SHOOT YOUR MARKETING CAMPAIGN`
  - **Right-Aligned CTA (Screen 5)**: `YOUR COURT IS READY / LETS PLAY !` with a solid red `"BOOK A COURT"` button that triggers `onOpenBooking`.

---

## 3. `SectionProcess` (Section 2)
- **Location**: Section 2
- **Interactive Elements**:
  - **Split-Screen Layout**: 2-column grid (`1440px` max-width) against clean white canvas.
  - **Left Side Ambiance Video**: Pinned high-resolution video player looping `ANIMATION.mp4` / `animation_opt.mp4` showcasing the luxury court and lounge with "OUR PREMIUM COURTS".
  - **Right Side Scroll-Scrubbed UI/UX Cards**:
    - Initial state: Centered `THE PROCESS`, vertical divider line, and `SCROLL` indicator.
    - Scroll progress transitions sequentially through the 4 steps with high-resolution photography and bold serif typography overlays:
      1. `01 -` + `SELECT YOUR COURT`
      2. `02 -` + `SELECT YOUR DAY`
      3. `03 -` + `SELECT YOUR SLOT`
      4. `04 -` + `AND LETS PLAY !`

---

## 4. `SectionMemories` (Section 3)
- **Location**: Section 3
- **Interactive Elements**:
  - **Warm Cream Canvas**: `#F5ECD7` background with `MOVE YOUR CURSOR` sub-label.
  - **Trobosh Display Title**: `LETS CREATE SOME MEMORIES !` with handcrafted typography (+40% enlarged size).
  - **Interactive Cursor Buffer**:
    - Spawns floating photo cards (9 atmosphere images) at cursor / touch coordinates.
    - Random $-8^\circ$ to $+8^\circ$ rotation with pop-in scale animation.
    - Strict maximum limit of 5 active items concurrently on screen.
    - Automatic fade-out after 2.2 seconds.
  - **Enlarged Dual Action Pill Buttons**:
    - `"Book Your Court"`: Terracotta filled pill (`#A84A25`).
    - `"Host Event"`: Crisp white elevated pill button with subtle shadow.
  - **Atmosphere Gallery Grid**:
    - 9 architectural court and lounge moment cards.
    - Click on any image opens the `LightboxModal`.

---

## 5. `BookingModal` & `EventModal`
- **Location**: Global Overlay Dialogs
- **Behaviors**:
  - Accessible via ESC key or backdrop click.
  - Controlled inputs for court selection, date/time, guests, and contact details.
  - Confetti burst on successful booking confirmation.

---

## 6. `LightboxModal`
- **Location**: Global Image Preview Dialog
- **Behaviors**:
  - Full-screen high-res preview of selected gallery photo.
  - Keyboard navigation (ESC to close, Left/Right arrow keys for navigation).

