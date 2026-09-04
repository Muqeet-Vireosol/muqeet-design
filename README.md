# The Oak — Padel House (Neo-Classical Web Experience)

An architectural, neo-classical web experience built for **The Oak Padel House**, showcasing world-class courts, bespoke booking flow, and luxury atmosphere. Designed in a palette of warm terracotta, light cream, sand, and rich oak.

---

## 🌟 Project Overview

This repository implements the first 3 primary sections inspired by the architectural design presentation:
1. **Section 1: Hero & Scroll Story** — Cinematic visual narrative with sticky header, elegant serif branding, circular rotating badge, and scroll-linked slides (01 Book Private Court, 02 Host Tournament, 03 Shoot Campaign, 04 Ready to Play).
2. **Section 2: The Process (Interactive Booking Experience)** — Split-screen layout pairing a pinned showcase of "Our Premium Courts" with an interactive 4-step booking workflow (Court selection, Date picker, Slot picker, and Final reservation summary).
3. **Section 3: Interactive Cursor Memories & Atmosphere Gallery** — A cream-toned interactive playground featuring dual CTAs ("Book Your Court" & "Host Event") with a cursor-following fluid photo reveal trail showcasing 9 high-resolution architectural court and lounge moments.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/) + [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Typography**: Neo-classical serifs (`Cormorant Garamond`, `Cinzel`, `Playfair Display`) and modern sans-serif (`Plus Jakarta Sans`)
- **Animations**: [Framer Motion](https://www.framer.com/motion/) + Canvas effects
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.0.0 or higher recommended)
- npm or yarn

### Installation
```bash
# Clone or navigate to the repository directory
cd /home/muqeet/Desktop/Estate_Workers/Reaslestate/site2

# Install dependencies
npm install
```

### Local Development
```bash
# Start the local development server with hot module replacement (HMR)
npm run dev
```
Open your browser at the displayed local URL (typically `http://localhost:5173`).

### Production Build
```bash
# Compile and optimize assets for production
npm run build

# Preview production build locally
npm run preview
```

---

## 📁 Repository Structure

```
site2/
├── README.md               # Project overview, run/build commands, deploy steps
├── SPEC.md                 # Functional & UX specifications for Sections 1–3
├── DESIGN.md               # Design tokens, color system, typography & motion rules
├── CONTENT.md              # Decoupled copy deck for all sections & modals
├── COMPONENTS.md           # Interactive component catalog & behaviors
├── TASKS.md                # Build checklist and implementation progress
├── index.html              # HTML entry with Google Font imports
├── package.json            # Node.js dependencies and scripts
├── vite.config.js          # Vite build configuration
├── tailwind.config.js      # Tailwind configuration with custom theme tokens
├── src/
│   ├── main.jsx            # React root mount
│   ├── App.jsx             # Main container orchestration
│   ├── index.css           # Custom styles, font faces & utility classes
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky neo-classical navigation bar
│   │   ├── SectionHero.jsx     # Section 1: Hero & Cinematic Story Showcase
│   │   ├── SectionProcess.jsx  # Section 2: Split-screen interactive 4-step booking
│   │   ├── SectionMemories.jsx # Section 3: Interactive cursor trail & gallery
│   │   ├── BookingModal.jsx    # Reservation modal dialog
│   │   └── EventModal.jsx      # Private event inquiry modal dialog
│   └── data/
│       └── content.js      # Centralized copy deck sourced from CONTENT.md
├── public/
│   └── assets/             # Section 1, 2, and 3 media assets
├── Section 1/              # Original Section 1 assets
├── Section 2/              # Original Section 2 assets
└── Section 3/              # Original Section 3 assets
```

---

## 🌐 Deployment Steps

### Vercel / Netlify
1. Connect the repository to your hosting provider.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Set Install Command: `npm install`
5. Deploy.
