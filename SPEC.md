# Functional & Technical Specification (SPEC.md)

## 1. Project Objectives & Scope
The application delivers a neo-classical architectural web experience for **The Oak Padel House**, strictly adhering to the design specifications:
1. **Section 1: Hero Scroll Sequence** (Pinned GSAP ScrollTrigger scrub through 5 court/venue images with fading "LET'S PLAY" overlay and bouncing "DOWN SCROLL" vertical text).
2. **Section 2: Our Premium Courts + The Process** (Pinned left column image with "OUR PREMIUM COURTS" heading overlaid, right column 4-image swap scrub with captions: 1. BOOK YOUR COURT, 2. MEET YOUR PRO, 3. LET'S STAY A WHILE, 4. AND LET'S PLAY, and right-aligned "THE PROCESS" label).
3. **Section 3: Memories CTA** (Cream `#F5DEC8` background, sub-label "Items At The Kitchen Woods", main headline "LET'S CREATE SOME MEMORIES!", and two side-by-side buttons: one filled dark, one outline).

---

## 2. Global Rules & Technical Architecture
- **Animation Engine**: GSAP + ScrollTrigger with `scrub: 1.5`.
- **Typography**: `Cormorant Garamond` / `Playfair Display` for headlines, `Inter` for body and nav.
- **Strict Color Palette**: `#C4622D`, `#D4845A`, `#E8B89A`, `#F5DEC8`, `#1A1008`.
- **Shadows**: No drop shadows — clean borders (`1px solid #E8B89A`) and generous whitespace.
- **Dividers**: Thin 1px horizontal rules in `#E8B89A` between sections.
- **Padding**: Minimum vertical padding of 96px (`py-24`).
- **Navbar**: Sticky on all sections, transparent over hero, transitions to dark `#1A1008` after scrolling 80px. Links: `Lazy Padel | Events | Go Kart | BOOK YOUR COURT` (Red pill CTA).
