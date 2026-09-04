# Design System & Visual Direction (DESIGN.md)

## 1. Aesthetic Direction: Neo-Classical Luxury
The visual identity fuses classical architectural symmetry, monumental typography, warm natural textures (oak, terracotta, clay, sandstone), and contemporary minimalist web layout.

---

## 2. Color Tokens

```css
:root {
  /* Brand Primary & Accents */
  --color-terracotta-primary: #9E1B1B; /* Primary CTA & Brand Accent */
  --color-terracotta-hover:   #7F1515; /* Hover state */
  --color-terracotta-soft:    #C8523A; /* Secondary warm terracotta */
  --color-terracotta-muted:   #E8D4CE; /* Soft tinted borders & badges */

  /* Neutrals & Architectural Finishes */
  --color-cream-bg:           #FBF8F3; /* Lightest warm cream page backdrop */
  --color-cream-card:         #F3EDE2; /* Section & card backgrounds */
  --color-sand:               #E6DCB8; /* Warm stone & sand tone */
  --color-oak-dark:           #2C1A14; /* Deep timber & text headers */
  --color-oak-medium:         #4A352B; /* Body typography & warm darks */
  --color-black-pure:         #110E0D; /* High contrast details */
  --color-white-pure:         #FFFFFF; /* White highlights & button cards */
  --color-border-subtle:      rgba(74, 53, 43, 0.12); /* Subtle borders */
}
```

---

## 3. Typography Scale & Fonts

- **Primary Display / Serif**: `Cormorant Garamond`, `Cinzel`, and `Playfair Display` (Classic Neo-Classical dignity, refined serifs, capital letters with subtle letter-spacing).
- **Secondary / Body**: `Plus Jakarta Sans` or `Inter` (Neutral, hyper-legible geometric sans for UI controls, inputs, and descriptions).

| Element | Font Family | Size | Weight | Line Height | Tracking |
|---------|-------------|------|--------|-------------|----------|
| Hero Title | Cormorant Garamond | 3.5rem - 5.5rem (56–88px) | 700 / Bold | 1.05 | +0.02em |
| Section Headline | Cormorant Garamond | 2.5rem - 4.0rem (40–64px) | 600 / SemiBold | 1.15 | +0.04em |
| Eyebrow / Label | Plus Jakarta Sans | 0.85rem - 1.0rem (14–16px) | 600 / Medium | 1.2 | +0.18em (Uppercase) |
| Card Title | Cormorant Garamond | 1.5rem - 2.0rem (24–32px) | 600 | 1.25 | +0.02em |
| Body Text | Plus Jakarta Sans | 1.0rem - 1.125rem (16–18px)| 400 / Regular | 1.6 | normal |
| Button CTA | Plus Jakarta Sans | 0.875rem - 1.0rem (14–16px)| 600 / SemiBold | 1.0 | +0.08em (Uppercase) |

---

## 4. Spacing Scale

- Base grid: `4px`
- Section Padding: `py-20 md:py-28 lg:py-36`
- Container Max Width: `max-w-7xl (1280px)` and full bleed `w-full`
- Content Gaps: `gap-6` (cards), `gap-12` (split sections)

---

## 5. Shadows & Borders

- **Border Radius**:
  - Buttons / Pills: `rounded-full` (capsule pill shape)
  - Cards: `rounded-2xl` or `rounded-3xl`
  - Badges: `rounded-full`
- **Box Shadows**:
  - `shadow-sm`: `0 1px 2px rgba(44, 26, 20, 0.05)`
  - `shadow-luxury`: `0 20px 40px -15px rgba(44, 26, 20, 0.12)`
  - `shadow-glow`: `0 0 30px rgba(158, 27, 27, 0.25)`

---

## 6. Motion & Animation Rules

1. **Easing**: Cubic bezier `cubic-bezier(0.16, 1, 0.3, 1)` for silky luxury dampening.
2. **Circular Badge**: Continuous slow rotation (`rotate 20s linear infinite`).
3. **Cursor Trail**: Spring-physics smoothed mouse follower with staggered opacity decay (`duration: 0.6s`, damping `25`).
4. **Card Transitions**: Subtle scale and elevation on hover (`scale: 1.02`, `translateY: -4px`).
