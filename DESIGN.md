# Design System & Visual Direction (DESIGN.md)

## 1. Color Palette Tokens (Strict)
- **Primary Rust / Red**: `#C4622D` / `#991B1B` (Primary CTA & Brand Highlights)
- **Secondary Terracotta**: `#D4845A` (Warm Accent)
- **Sand / Divider**: `#E8B89A` (1px Section Dividers & Frame Borders)
- **Cream / Canvas**: `#F5DEC8` / `#F5ECD7` (Section 3 Background & Light Text)
- **Deep Oak Dark**: `#1A1008` (Page Background & Modal Dark Panels)
- **Taupe Grey**: `#3F3D3A` (Navigation Theme Reference)

## 2. Typography Scale
- **Headlines & Display**: `Cormorant Garamond` & `Playfair Display`
- **Body, Nav & Microcopy**: `Inter`
- **Artistic Memories Display**: `Trobosh` Handcrafted Woodcut Display

## 3. Motion & Layout Rules
- **Canvas Scroll Scrub**: 181 WebP frame pipeline with `0.14` LERP interpolation driven by GSAP ScrollTrigger.
- **Spin Animation**: 360-degree linear infinite rotation on circular "SCROLL DOWN" badge.
- **Section 2 Frame**: Widescreen `2:1` container filling `max-w-[94vw]`, `flex-1` with dynamic cross-fading captions.
- **Section 3 Cursor Buffer**: Mouse/touch trailing photos with $-8^\circ$ to $+8^\circ$ tilt, capped at max 5 active items.
- **Dividers**: `1px solid #E8B89A` between all sections.
- **Section Padding**: Generous spacing (`py-24 md:py-36`).

