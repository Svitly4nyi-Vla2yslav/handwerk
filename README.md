# Handwerk Hildesheim Demo

Responsive single-page website concept for a local SHK business (heating, plumbing and heat pumps) in the Hildesheim area.

The project demonstrates how a local service business can present its services clearly, build trust and guide visitors toward a phone call or structured enquiry.

> **Portfolio/demo project:** `Nordwärme SHK`, its address, phone number and email address are fictional placeholders used for demonstration purposes. They do not represent a real business or customer reference.

## Features

- Responsive React single-page layout
- Service sections for heating, heat pumps, plumbing, maintenance and repair
- Reusable enquiry presets that scroll visitors directly to the contact section
- Mobile call-to-action bar and floating phone link
- Local service-area section for Hildesheim and nearby towns
- FAQ, process, trust and project-gallery sections
- Dynamic document title and meta description
- Structured data component for local SEO
- Component-based styling with styled-components

## Tech stack

- React 18
- TypeScript
- styled-components
- Vite
- SWC via `@vitejs/plugin-react-swc`

## Getting started

### Requirements

- Node.js 18+ recommended
- npm

### Install and run

```bash
npm install
npm run dev
```

Vite will print the local development URL in the terminal.

### Production build

```bash
npm run build
```

The build command runs the TypeScript type check first and then creates the Vite production bundle.

### Preview the production build

```bash
npm run preview
```

## Project structure

```text
src/
├── assets/       # Images and static assets
├── components/   # Page sections and reusable UI components
├── data/         # Centralized demo company and service content
├── styles/       # Shared styled-components and layout primitives
├── types/        # TypeScript content types
├── App.tsx       # Page composition and enquiry-state handling
└── main.tsx      # React application entry point
```

Most business copy and placeholder contact details are centralized in `src/data/siteContent.ts`, which makes the demo easy to adapt to another local service company without scattering content across components.

## Notes

This repository is intended as a portfolio example and reusable frontend concept. Before using it for a real company, replace all fictional company data, review legal pages and consent requirements, connect the contact flow to a real backend or form provider, and validate production SEO/structured-data values for the actual business.

## License

See [LICENSE](LICENSE).
