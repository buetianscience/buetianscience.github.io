# BUETian Science Website

A modern, mobile-first single-page application for BUETian Science - a coaching center run by BUETian teachers for science students.

## Features

- ✨ **Modern Design**: Clean, professional UI built with Material UI v7
- 🌐 **Bilingual**: Full support for English and Bangla (বাংলা)
- 🌓 **Dark Mode**: Theme toggle with persistent preference
- 📱 **Mobile-First**: Fully responsive design optimized for all devices
- 🎨 **Smooth Animations**: Framer Motion animations with reduced-motion support
- ♿ **Accessible**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- 🚀 **Fast**: Built with Vite and React Router v7
- 📧 **Google Forms Integration**: Easy enrollment via Google Forms

## Tech Stack

### Core
- **React 19** - UI library
- **TypeScript** - Type safety
- **React Router v7** - Routing and SSR
- **Vite** - Build tool

### UI & Styling
- **Material UI v7** - Component library
- **@mui/icons-material** - Icons
- **Emotion** - CSS-in-JS

### Internationalization
- **react-i18next** - i18n framework
- **i18next-browser-languagedetector** - Language detection

### Animations
- **Framer Motion** - Animation library

### Forms & Validation
- **react-hook-form** - Form management
- **zod** - Schema validation
- **@hookform/resolvers** - Resolver integration

### Additional Libraries
- **Swiper** - Carousel/slider
- **react-helmet-async** - SEO meta tags
- **notistack** - Snackbar notifications
- **dayjs** - Date utilities

## Project Structure

```
app/
├── components/          # Shared components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── ThemeToggle.tsx
│   ├── LanguageSwitcher.tsx
│   ├── Section.tsx
│   ├── FeatureCard.tsx
│   └── TestimonialCard.tsx
├── features/           # Feature-based sections
│   ├── home/
│   ├── about/
│   ├── courses/
│   ├── testimonials/
│   ├── contact/
│   ├── faq/
│   └── blog/
├── i18n/              # Internationalization
│   ├── index.ts
│   └── locales/
│       ├── en/
│       └── bn/
├── theme/             # Theme configuration
│   ├── index.ts
│   └── ColorSchemeProvider.tsx
├── utils/             # Utilities
│   └── motionVariants.ts
├── routes/            # Route files
│   └── home.tsx
├── root.tsx           # Root component
└── app.css           # Global styles
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd buetianscience
```

2. Install dependencies:
```bash
pnpm install
```

3. Start development server:
```bash
pnpm dev
```

The app will be available at `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

This creates an optimized production build in the `build/` directory.

### Preview Production Build

```bash
pnpm start
```

### Type Checking

```bash
pnpm typecheck
```

## Design Tokens

### Colors

**Primary (Blue)**
- Main: `#1565C0` (Blue 800)
- Used for: Headers, primary buttons, branding

**Secondary (Teal)**
- Main: `#00BFA5` (Teal A700)
- Used for: Accents, secondary buttons, highlights

**Warning (Lime)**
- Main: `#C6FF00` (Lime A700)
- Used for: Call-to-action highlights, special emphasis

### Typography

**Fonts**
- English: Inter
- Bangla: Noto Sans Bengali

**Weights**
- Headings: 600-700 (Semi-bold to Bold)
- Body: 400 (Regular)
- Emphasis: 500-600 (Medium to Semi-bold)

### Spacing
- Base unit: 8px
- Border radius: 8px
- Section padding: 64px (vertical)

## Key Sections

### 1. Home
Hero section with brand messaging, value propositions, and CTAs.

### 2. About
Information about BUETian teachers and teaching philosophy.

### 3. Courses & Programs
Tabbed interface showing Physics, Chemistry, and Mathematics courses.

### 4. Testimonials
Swiper carousel with student reviews and success stories.

### 5. Contact
Google Form enrollment link, contact details, WhatsApp integration, and Google Maps.

### 6. FAQ
Accordion-style frequently asked questions.

### 7. Blog & Resources
Study tips and educational content cards.

## Contact Information

- **Address**: 48/48/2, Moneshwar Road, Hazaribagh (Beside Bitobi Furniture)
- **Phone**: +8801790394788
- **Enrollment**: [Google Form](https://forms.gle/3DAwMcLbEaLXPft68)

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `pnpm build`
2. Deploy the `build/` directory

### Manual/Self-hosted
1. Build: `pnpm build`
2. Serve the `build/` directory with any static server

## Accessibility

- Semantic HTML5 elements
- ARIA labels for all interactive elements
- Keyboard navigation support
- High contrast ratios (WCAG AA)
- Focus indicators
- Reduced motion support via `prefers-reduced-motion`

## Browser Support

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Performance

- Code splitting for optimal bundle sizes
- Lazy loading for images and heavy components
- Lighthouse scores target: Performance ≥90, Accessibility ≥95

## License

© 2025 BUETian Science. All rights reserved.

## Contributing

For updates or issues, please contact the development team.
