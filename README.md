# Elektrikáři FM - Modern Website

Professional electrician services website built with modern web technologies.

## 🚀 Technology Stack

- **[Astro](https://astro.build)** - Modern static site generator
- **[Tailwind CSS](https://tailwindcss.com)** - Utility-first CSS framework
- **[TypeScript](https://www.typescriptlang.org)** - Type-safe JavaScript
- **[Lucide Icons](https://lucide.dev)** - Beautiful, consistent icons

## 🏗️ Project Structure

```
/
├── public/              # Static assets (images, favicons, etc.)
├── src/
│   ├── components/      # Reusable Astro components
│   ├── data/           # Data files (menu items, references)
│   ├── layouts/        # Page layouts
│   ├── pages/          # Page routes (becomes URLs)
│   └── styles/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.mjs # Tailwind CSS configuration
└── package.json        # Dependencies and scripts
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |

## 📄 Pages

- **/** - Homepage with hero and service overview
- **/o-nas/** - About us page
- **/elektroinstalace/** - Electrical installations service
- **/hromosvody/** - Lightning rods service
- **/revize/** - Inspections service
- **/reference/** - Project gallery with lightbox
- **/kontakt/** - Contact page with form

## 🎨 Design Features

- Clean, modern, professional aesthetic
- Mobile-first responsive design
- Smooth animations and transitions
- Custom color palette optimized for electrical services
- Interactive image gallery with custom lightbox
- Form validation and submission
- SEO optimized with meta tags and sitemap

## 📝 Content Management

### Menu Items
Edit navigation menu in `src/data/menuItems.ts`

### Project References
Add or modify project galleries in `src/data/references.ts`

### Service Pages
Update service descriptions in `src/pages/` directory

## 🔧 Configuration

### Tailwind Colors
Custom color palette defined in `tailwind.config.mjs`:
- **Primary** (Blue) - Professional, trustworthy
- **Accent** (Amber) - Energy, electricity theme

### Google Analytics
Analytics ID configured in `src/layouts/BaseLayout.astro`

### Contact Form
Form submission handled via StaticForms API in `src/pages/kontakt.astro`

## 🚀 Deployment

The site builds to static HTML/CSS/JS:

```bash
npm run build
```

Output will be in the `dist/` directory, ready to deploy to any static hosting service.

## 📞 Contact

- **Phone:** +420 773 477 006
- **Email:** Filip.koval@seznam.cz
- **Location:** Frýdek-Místek, Czech Republic

## 📄 License

© 2025 Elektrikáři FM. All rights reserved.
