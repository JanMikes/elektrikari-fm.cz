# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Czech electrician company website built with **Astro**, a modern static site generator. The site showcases electrical services including installations, lightning rods, and electrical inspections with a clean, modern design.

## Development Commands

### Local Development
- `npm run dev` - Start Astro development server at http://localhost:4321 with hot reload
- `npm run preview` - Preview production build locally before deployment

### Build Commands
- `npm run build` - Build the complete site for production (outputs to `dist/`)
- `npm run astro ...` - Run Astro CLI commands

## Project Architecture

### Directory Structure
- `src/` - Source files
  - `layouts/` - Page layouts (BaseLayout.astro)
  - `components/` - Reusable Astro components
    - Header.astro, Footer.astro - Navigation and footer
    - ServiceCard.astro, CallToAction.astro - UI components
    - ImageGallery.astro - Custom gallery with lightbox
  - `data/` - TypeScript data files
    - `menuItems.ts` - Navigation menu structure
    - `references.ts` - Project portfolio images and descriptions
  - `pages/` - Page routes (become URLs)
    - index.astro, o-nas.astro, kontakt.astro, etc.
  - `styles/` - Global styles
    - `global.css` - Tailwind CSS and custom styles

- `public/` - Static assets (images, favicons, sitemap, etc.)
- `dist/` - Generated output directory (build artifacts)

### Template System
- Uses Astro component syntax (.astro files)
- TypeScript for data files and type safety
- Component-based architecture with props
- Dynamic navigation from `menuItems.ts`
- Portfolio gallery from `references.ts` with custom lightbox

### Styling Architecture
- **Tailwind CSS** - Utility-first CSS framework
- Custom color palette (Primary: Blue, Accent: Amber)
- Responsive design with mobile-first approach
- Inter font family for modern typography
- Custom components defined in global.css

### Static Assets
- All static files in `public/` directory
- Images organized in `public/images/` and `public/images/thumbnails/`
- Favicons and manifest files in public root
- Sitemap.xml, robots.txt, and humans.txt included

### Content Management
- Czech language content throughout
- SEO-optimized with meta descriptions and keywords per page
- Google Analytics integration (GA4)
- Contact form with validation and StaticForms API integration

### Build Process
- Astro builds to static HTML/CSS/JS in `dist/` directory
- Tailwind CSS processes utility classes
- TypeScript compiles with strict mode
- All assets optimized for production
- Output ready for any static hosting service