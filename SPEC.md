# Functional & Technical Specification (SPEC.md)

## 1. Project Objectives & Scope
The application delivers a luxury neo-classical architectural web experience for **The Oak Padel House**, strictly adhering to the design specifications:
1. **Section 1: Hero Canvas Scroll Sequence**:
   - Pinned high-resolution `<canvas>` rendering 181 WebP frames preloaded for liquid-smooth 60fps scrubbing with LERP interpolation (`0.14`) via GSAP ScrollTrigger.
   - Screen 1 (Intro Hero): Centered layout with `EXPERIENCE A REFRESHING`, `GAME OF PADEL`, and italic subtitle, accompanied by a bottom-centered constantly rotating circular `• SCROLL DOWN • SCROLL DOWN` indicator badge.
   - Screens 2–4 (01 Book Your Private Court, 02 Host Your Padel Tournament, 03 Shoot Your Marketing Campaign): Left-aligned captions with sequential windowed cross-fading.
   - Screen 5 (04 Your Court is Ready / LETS PLAY !): Right-aligned headline with crimson red `BOOK A COURT` button.

2. **Section 2: The Process (Interactive Booking Experience)**:
   - Full section stage filled with a single widescreen composite card (`max-w-[94vw]`, `flex-1`), top-right `THE PROCESS` label, and dynamic bottom captions swapping across 4 stages: `1. BOOK YOUR COURT`, `2. MEET YOUR PRO`, `3. LET'S STAY A WHILE`, `4. AND LET'S PLAY`.

3. **Section 3: Memories CTA & Atmosphere Archive**:
   - Warm cream `#F5ECD7` background with `MOVE YOUR CURSOR` sub-label.
   - `LETS CREATE SOME MEMORIES !` rendered with handcrafted Trobosh display typography (+40% enlarged size).
   - Dual action pill buttons: Terracotta-filled `Book Your Court` and crisp white `Host Event`.
   - Interactive mouse/touch cursor trail with random $-8^\circ$ to $+8^\circ$ tilt, strict maximum 5 active items, and auto fade-out.
   - 9-photo atmospheric court & lounge gallery with interactive lightbox modal.

---

## 2. Global Rules & Technical Architecture
- **Animation Engine**: Canvas frame render loop with LERP interpolation + GSAP ScrollTrigger.
- **Typography**: `Cormorant Garamond` / `Playfair Display` for headlines, `Inter` for body and nav, and custom `Trobosh` display typography.
- **Strict Color Palette**: `#C4622D`, `#D4845A`, `#E8B89A`, `#F5DEC8`, `#F5ECD7`, `#1A1008`, `#3F3D3A`, `#991B1B`.
- **Dividers**: Thin 1px horizontal rules in `#E8B89A` between sections.
- **Padding**: Generous section breathing room (`py-24 md:py-36`).
- **Navbar**: Full-width transparent header with crimson red "The Oak" logo, centered uppercase links (`LETS PADEL | EVENTS | CONTACT`) with 0.25s hover transitions, and solid crimson "BOOK YOUR COURT" CTA button.
