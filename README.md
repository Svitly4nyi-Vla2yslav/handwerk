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

## Local SEO and conversion approach

This demo is intentionally structured around common needs of a local Handwerk business rather than around a generic landing-page template.

- service-specific sections give search visitors a direct path to the topic they need
- the local service-area section creates a clear geographic context for Hildesheim and nearby towns
- FAQ and process sections reduce uncertainty before a customer makes contact
- mobile call-to-action elements keep the main conversion action visible on smaller screens
- structured data and centralized company information provide a foundation for production local SEO
- enquiry presets reduce the effort required to submit a service request

The goal is not only to make the page visually modern, but to connect content structure, local search intent and a simple contact path.

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

## Verification before deployment

The current minimum production check is:

```bash
npm run build
```

This verifies TypeScript with `tsc --noEmit` before Vite creates the production bundle. The repository does not currently define dedicated lint or automated test scripts, so a successful build should be treated as the baseline check rather than a complete production-quality test suite.

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

The demo `index.html` intentionally includes `noindex, nofollow` so search engines do not index the fictional `Nordwärme SHK` business. Remove or replace that robots directive only when the site has verified production company data and a final public URL that is ready to be indexed.

## License

See [LICENSE](LICENSE).
