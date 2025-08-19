# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Czech electrician company website built with Eleventy (11ty) static site generator. The site showcases electrical services including installations, lightning rods, and electrical inspections.

## Development Commands

### Local Development
- `npm run start` - Start development server with live reload (runs SASS watcher and Eleventy serve in parallel)
- `docker compose up` - Alternative development using Docker, serves at http://localhost:8080

### Build Commands
- `npm run build` - Build the complete site for production (compiles SASS and builds Eleventy in parallel)
- `npm run build:sass` - Compile SASS to compressed CSS with source maps
- `npm run build:eleventy` - Build Eleventy static site

### Watch Commands
- `npm run watch:sass` - Watch SASS files for changes and compile automatically
- `npm run watch:start` - Start Eleventy development server with live reload

## Project Architecture

### Directory Structure
- `src/` - Source files
  - `_includes/layout.njk` - Base HTML layout template with navigation and footer
  - `_data/` - JSON data files for dynamic content
    - `menuItems.json` - Navigation menu structure
    - `references.json` - Project portfolio images and descriptions
  - `*.njk` - Nunjucks page templates (index, kontakt, o-nas, reference, etc.)
  - `styles/main.scss` - SASS entry point, imports Webpixels CSS framework
  - `images/` - Static images and thumbnails
  - `favicon/` - Favicon and web app manifest files

- `_site/` - Generated output directory (Eleventy builds here)
- `node_modules/` - Dependencies copied to output via passthrough

### Template System
- Uses Nunjucks templating (.njk files)
- Single layout template (`layout.njk`) with Czech content
- Dynamic navigation from `menuItems.json`
- Portfolio gallery from `references.json` with GLightbox integration

### Styling Architecture
- SASS-based styling with `@webpixels/css` framework
- Bootstrap 5.3.2 for components and utilities
- Custom styles in `main.scss` for branding and layout
- Responsive design with mobile navigation

### Static Assets
- Images automatically copied from `src/images/` to `_site/images/`
- Bootstrap JS and GLightbox library copied from node_modules
- Favicon and manifest files copied to site root
- Sitemap, robots.txt, and humans.txt included

### Content Management
- Czech language content throughout
- SEO-optimized with meta descriptions and keywords
- Google Analytics integration (GA4)
- Contact information and service descriptions in footer

### Build Process
- Eleventy processes Nunjucks templates and data files
- SASS compiles with Bootstrap and Webpixels CSS dependencies
- All assets copied via Eleventy passthrough configuration
- Production builds create compressed CSS with source maps