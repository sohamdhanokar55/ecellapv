# APV E-Cell Website (Agnel Polytechnic Vashi)

An elegant, responsive website built for the E-Cell at Agnel Polytechnic Vashi. It showcases events (including Pitchnova), team, vision/mission, resources, and contact information in a modern, animated UI.

> This website was created for the Entrepreneurship Cell (E-Cell) of Agnel Polytechnic Vashi.

## Tech Stack

- Vite + React + TypeScript
- Tailwind CSS (utility-first styling)
- Lucide React (icons)
- React Router (routing)
- Swiper (sliders/carousels)

## Features

- Polished dark theme with glassmorphism and subtle animations
- Responsive navigation with mobile menu and active-route highlighting
- Home page with hero, Pitchnova highlight, about, vision/mission, team, and partner websites
- Dedicated Pitchnova page with timeline, video modal, judging criteria, resources, and CTA
- Events listing and event-specific registration page
- Contact page
- Asset management via `public/` for images, videos, and downloads

## Project Structure

```
apv-ecell/
  ├─ public/
  │  ├─ agenl.png
  │  ├─ logo.png
  │  ├─ roadmapt2.png
  │  ├─ PitchNova Ppt.pptx
  │  └─ ...other images/videos
  ├─ src/
  │  ├─ components/
  │  │  ├─ Navigation.tsx
  │  │  ├─ Hero.tsx
  │  │  ├─ Agnelabout.tsx
  │  │  ├─ VisionMission.tsx
  │  │  ├─ Team.tsx
  │  │  ├─ WebsitesSlider.tsx
  │  │  ├─ PitchnovaHighlight.tsx
  │  │  ├─ incubation.tsx
  │  │  ├─ VideoSection.tsx
  │  │  └─ ...others
  │  ├─ pages/
  │  │  ├─ PitchnovaPage.tsx
  │  │  ├─ EventsPage.tsx
  │  │  ├─ RegistrationPage.tsx
  │  │  └─ ContactPage.tsx
  │  ├─ App.tsx
  │  ├─ main.tsx
  │  └─ index.css
  ├─ tailwind.config.js
  ├─ vite.config.ts
  ├─ tsconfig.json
  └─ package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Install

```bash
npm install
```

### Development

```bash
npm run dev
```

The dev server runs on `http://localhost:5173` (also accessible on your LAN due to `host: 0.0.0.0` in `vite.config.ts`).

### Build

```bash
npm run build
```

### Preview (Serve the production build locally)

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Routing

Routes are defined in `src/App.tsx` using React Router:

- `/` — Home
- `/events` — Events listing
- `/events/pitch` — Pitch events (alias to EventsPage)
- `/events/register` — Registration page
- `/events/pitchnova` — Pitchnova event page
- `/contact` — Contact page

## Notable Components

- `Navigation.tsx`: Sticky, responsive navbar with scroll-aware styling
- `VideoSection.tsx`: Modal YouTube embed used on the Pitchnova page
- `PitchnovaPage.tsx`: Event timeline, video, judging criteria, resources, and CTAs
- `Team.tsx` + `WebsitesSlider.tsx`: Carousel/slider content powered by Swiper

## Styling

- Tailwind CSS with custom global styles in `src/index.css`
- Dark theme, gradients, subtle shadows, and animation utilities

## Assets

Static assets live in `public/` and are referenced by absolute paths (e.g. `/logo.png`). Replace or add your images/videos as needed.

## Deployment

- Any static hosting (Vercel, Netlify, GitHub Pages) will work. Build with `npm run build` and deploy the `dist/` folder.
- For SPAs, ensure a fallback to `index.html` for unknown routes (Vercel/Netlify handle this automatically with their defaults or a simple rewrites rule).

## Contributing

1. Create a new branch for your change
2. Make edits and ensure `npm run lint` passes
3. Open a pull request

## Acknowledgements

- Built with love for the E-Cell at Agnel Polytechnic Vashi
- Icons by Lucide
- Tooling by Vite, TypeScript, Tailwind CSS

## License

This project is provided for the official use of the E-Cell at Agnel Polytechnic Vashi. If you plan to reuse parts of this project externally, please request permission from the maintainers.
