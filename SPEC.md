# Functional & Technical Specification (SPEC.md)

## 1. Project Objectives & Scope
The application delivers an ultra-luxury, neo-classical web experience for **The Oak Padel House**, built on the architecture demonstrated in `site1.1`:
1. **Section 1: Hero Frame Scroll Scrub**
2. **Section 2: The Oak Padel House Way (About, Video, Stats, & The Process)**
3. **Section 3: Style Selector / Picture Buffer (Cursor Buffer)**

---

## 2. Section Specifications

### Section 1: Hero Frame Scroll Scrub (`#hero`)
- **Stage Container**: Sticky stage (`height: 480vh` with `position: sticky; top: 0; height: 100vh`).
- **Canvas Scrub**: 181-frame high-resolution WebP sequence extracted from `Section 1/Interactive Animation.mp4`.
- **Interpolation Engine**: `HERO_LERP = 0.12` smoothing scroll delta to current target frame.
- **Windowed Captions** (`win(p, a, b)` with translation and opacity curves):
  - `p: 0.00 - 0.12`: Intro (`EXPERIENCE A REFRESHING`, `GAME OF PADEL`, `In Our Tranquil Nature Inspired Court`) + `scrollcue`.
  - `p: 0.18 - 0.38`: Stage 1 (`01 — BOOK YOUR`, `PRIVATE COURT`, description).
  - `p: 0.42 - 0.62`: Stage 2 (`02 — HOST YOUR`, `PADEL TOURNAMENT`, description).
  - `p: 0.65 - 0.85`: Stage 3 (`03 — SHOOT YOUR`, `MARKETING CAMPAIGN`, description).
  - `p: 0.88 - 1.00`: Stage 4 / CTA (`YOUR COURT IS READY`, `LETS PLAY !`, CTA button `BOOK A COURT →`).

### Section 2: The Oak Padel House Way (`#about` & `#process`)
- **About Grid**:
  - `lead-card`: Glassmorphism headline: `A court is where passion meets prestige — crafted once, played for generations.`
  - `about-media`: Video player streaming `/assets/section2/ANIMATION.mp4` with autoplay loop.
  - `copy-card`: Bespoke joinery and acoustic batten architecture details.
  - `stat-card`s: `3+` Championship Courts, `100%` Acoustic Oak Slats, `14-days` Advance Booking.
- **The Process Steps**:
  - 4 interactive glass steps (`01 Select Court`, `02 Select Day`, `03 Select Slot`, `04 And Lets Play !`).
  - Active step panel with interactive court picker, 7-day calendar, and slot chips.

### Section 3: Style Selector / Picture Buffer (`#buffer`)
- **Architecture**: Exact replica of `site1.1` Section 3 cursor buffer.
- **Stage**: `#bufferStage` on Light Beige backdrop (`#F5ECD7`).
- **Cursor Trail Engine**:
  - Strict maximum of 5 active trail cards (`MAX_TRAIL_ITEMS = 5`).
  - Distance check (`dist > 75px`) and touchmove check (`dist > 65px`).
  - Spawns floating cards with randomized tilt (`-8deg` to `+8deg`), white borders (`3px solid rgba(255,255,255,0.95)`), and smooth cubic-bezier transitions.
  - Automatic fade-out after 2.2 seconds.
- **Centered Content**:
  - Eyebrow: `MOVE YOUR CURSOR`
  - Title: `LETS CREATE SOME MEMORIES !`
  - Buttons: `Book Your Court` (primary) and `Host Event` (secondary).
- **Atmosphere Archive**: 9 curated photograph cards with full-screen `LightboxModal`.

---

## 3. Global Enhancements
- **Preloader**: Brand mark with smooth loading bar that scrubs up to 100% as frames load.
- **Silk Canvas Cursor**: Physics-driven harmonic silk cursor trail (`#belgrade-cursor-canvas`).
