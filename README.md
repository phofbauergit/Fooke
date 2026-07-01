# FOOKE — 3-Concept Homepage

Three fully-developed homepage concepts for [FOOKE GmbH](https://www.fooke-machines.com/), switchable from a single page. Built with Next.js, Tailwind v4, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
# Open http://localhost:3000 (or next available port)
```

## Concept selector

The homepage (`/`) is the concept selector. Use the floating pill at the bottom or press **1**, **2**, **3**:

| Key | Concept | Inspiration | Aesthetic |
|-----|---------|-------------|-----------|
| 1 | **Cinema** | Breton | Dark cinematic hero, amber accent, product finder bar, kinetic headline |
| 2 | **Editorial** | Grenzebach | Light editorial, bento portfolio, STIRlytics FSW monitor, animated metrics |
| 3 | **Industrial** | Zimmermann | Blueprint grid, spec explorer, cyan-on-abyss, magnetic cards |

URL persistence: `/?c=cinema|editorial|industrial`

## Easter eggs

- **Cinema:** Konami code (↑↑↓↓←→←→BA) — reveals FOOKE's secret trade-show exhibit
- **Editorial:** Click the STIRlytics waveform 5× — unlocks FSW cross-section view
- **Industrial:** Press **B** — toggles full blueprint overlay with machine specs

## Content

All copy sourced from fooke-machines.com via `lib/content.ts` — products, industries, use cases (50%/35%/43%), testimonials, contact.

## Structure

```
app/page.tsx              → concept selector + renderer
components/ConceptSwitcher.tsx
components/ConceptRenderer.tsx
components/concepts/cinematic/
components/concepts/editorial/
components/concepts/industrial/
lib/content.ts
public/images/            → generated concept imagery
docs/competitive-analysis.md
```

## 2026 trends applied

- Dark-mode-as-design-system (Cinema, Industrial)
- Kinetic typography (Cinema hero)
- Motion micro-interactions + scroll reveals (all)
- Bento capability matrix (Editorial)
- `prefers-reduced-motion` honored globally
