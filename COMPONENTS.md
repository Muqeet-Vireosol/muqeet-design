# Interactive Component Catalog (COMPONENTS.md)

This document details all interactive UI components, their expected state management, props, and behaviors across Sections 1, 2, and 3.

---

## 1. `Navbar`
- **Location**: Top of viewport (fixed / sticky).
- **Behaviors**:
  - Transparent overlay on initial hero state.
  - Transitions to glassmorphic frosted background (`backdrop-blur-md bg-stone-900/60` or `bg-amber-950/70`) upon scrolling > 50px.
  - Smooth anchor scrolling to `#hero-story`, `#process`, `#memories`.
  - Primary button "BOOK YOUR COURT" opens the global `BookingModal`.
  - Mobile hamburger toggle for screen widths < 768px.

---

## 2. `SectionHeroStory` (Section 1)
- **Location**: Section 1
- **Interactive Elements**:
  - **Rotating SVG Badge**: "SCROLL DOWN • SCROLL DOWN •" with continuous CSS spin animation.
  - **Scroll Story Slides**:
    - 4 distinct slides with high-resolution imagery transitions (`1.png` -> `5.png`).
    - Pagination indicators (dots and numbered markers `01`, `02`, `03`, `04`).
    - Clickable Next / Previous slide controls.
    - Keyboard arrow keys navigation (Left/Right arrow).
    - Auto-pause when user is hovering.
  - **Slide 04 CTA**: "BOOK A COURT" button triggers court selection in Section 2 or opens `BookingModal`.

---

## 3. `SectionProcess` (Section 2)
- **Location**: Section 2
- **Interactive Elements**:
  - **Sticky Architectural Showcase (Left Pane)**:
    - Fixed presentation image of "OUR PREMIUM COURTS" with architectural details and subtle zoom hover effect.
  - **Interactive 4-Step Booking Wizard (Right Pane)**:
    - **Step Tracker**: Clickable stepper `01 Court` -> `02 Day` -> `03 Slot` -> `04 Play` with progress line.
    - **Step 1 - Select Court**: Interactive court cards with live active state, court badges, and image previews.
    - **Step 2 - Select Day**: Interactive mini calendar where users can click dates (Today, Tomorrow, or pick from next 14 days).
    - **Step 3 - Select Slot**: Time chip selector highlighting morning, afternoon, and golden hour slots with availability indicators.
    - **Step 4 - And Lets Play**: Interactive summary card displaying selected court, date, and slot with a prominent "Confirm & Book Court" button.

---

## 4. `SectionMemories` (Section 3)
- **Location**: Section 3
- **Interactive Elements**:
  - **Cursor Follower & Image Reveal Trail**:
    - Tracks mouse coordinates (`clientX`, `clientY`) within the canvas.
    - Spawns floating thumbnail previews of the 9 high-res atmosphere images along the cursor path with subtle rotation and smooth fade-out.
  - **Dual CTAs**:
    - "Book Your Court": Opens `BookingModal`.
    - "Host Event": Opens `EventModal`.
  - **Interactive Atmosphere Gallery Grid**:
    - 9 architectural cards arranged in a refined responsive masonry/grid.
    - Hover zoom and caption reveal.
    - Click on any image opens the `LightboxModal`.

---

## 5. `BookingModal` & `EventModal`
- **Location**: Global Overlay Dialogs
- **Behaviors**:
  - Accessible via ESC key or clicking outside backdrop.
  - Smooth scale-in / fade-in animation.
  - Controlled form inputs with validation and instant booking confirmation state.
  - Confetti burst / success toast on booking submission.

---

## 6. `LightboxModal`
- **Location**: Global Image Preview
- **Behaviors**:
  - Full-screen high-res preview of selected gallery photo.
  - Keyboard navigation (ESC to close, Left/Right arrow for previous/next image).
