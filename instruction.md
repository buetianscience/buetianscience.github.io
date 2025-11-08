## ✅ Goal

Build an elegant, performant, and accessible **single‑page application (SPA)** for **BUETian Science**—a coaching program run by BUETian teachers for science students—optimized for mobile‑first usage, bilingual (Bangla/English), with delightful but purposeful motion design and a modern Material UI theme.

- Tagline highlights: “Learning Made Simple” and “Coaching Center”    
- Focus: Conceptual mastery over memorization; strong problem‑solving & analytical skills    
- Taught by BUETian teachers; Physics, Chemistry & Mathematics    
- Target classes: Class 8 → Intermediate First Year    
- Regular tests, mock exams, small batches for personal attention    
- Address: **48/48/2, Moneshwar Road, Hazaribagh (Beside Bitobi Furniture)**    
- Phone: **+8801790394788**    
- Primary CTA: **Enroll Now / Join Now**  

---

## 🧱 Tech Stack & Libraries (use libraries liberally)

- **Build**: React 18+, Vite, TypeScript, React Router (for hash/section routing)
- **UI**: Material UI (MUI v6+), @mui/icons-material, MUI System
- **Themes**: Centralized theme (light/dark) with persistent preference (localStorage)
- **i18n**: react‑i18next + i18next‑browser‑languagedetector (English & Bangla)
- **Animations**: Framer Motion (page transitions, scroll‑reveal, micro‑interactions)
- **Forms & Validation**: react‑hook‑form + zod; notistack (snackbars)
- **Media & Carousels**: Swiper (testimonials carousel)
- **SEO**: react‑helmet‑async (meta/OG), sitemap generation script
- **PWA (optional)**: vite‑plugin‑pwa for offline shell
- **Maps**: Google Maps embed (static iframe) generated from the address  
- **Date & Utils**: dayjs
- **Package Manager**: pnpm

---

## 📁 Project Structure

```
/src
  /assets
  /components
    Header.tsx
    Footer.tsx
    LanguageSwitcher.tsx
    ThemeToggle.tsx
    Section.tsx               // shared section wrapper with motion variants
    FeatureCard.tsx
    TestimonialCard.tsx
  /features
    home/
    about/
    courses/
    testimonials/
    contact/
    faq/
    blog/
  /i18n
    index.ts
    locales/
      en/common.json
      bn/common.json
  /theme
    index.ts                  // createTheme + shape, palette, typography
    ColorSchemeProvider.tsx   // persists and exposes color mode
  /routes
    AppRoutes.tsx             // one-page with hash/section navigation
  App.tsx
  main.tsx
  seo.ts                      // shared SEO tags
```

---

## 🎨 Design System

- **Brand Feel**: Clean science aesthetic; confidence + clarity → blues/teals with accent lime.
- **Palette**
  - Primary: `#1565C0` (blue 800), Secondary: `#00BFA5` (teal A700), Accent: `#C6FF00` (lime A700)
  - High‑contrast text; dark mode auto‑tunes with MUI palette mode.
- **Typography**
  - English: “Inter” or “Roboto Flex”
  - Bangla: “Noto Sans Bengali”
- **Components**
  - Rounded corners (8px), subtle elevation, motion‑enhanced hover states.
- **Icons**
  - MUI Icons (Science, Calculate, Biotech, Schedule, Group, Place, Phone).

---

## 🗺️ Navigation & Sections (Single‑page)

Use a sticky **AppBar** with logo + navigation items anchoring to sections: `Home, About, Courses & Programs, Testimonials, Contact, FAQ, Blog & Resources`. Include **ThemeToggle** and **LanguageSwitcher** in the header.

Implement **hash‑based scroll** (e.g., `#about`) with **smooth scroll** and **focus management** after navigation.

---

## 🧩 Content (from Flyer) — to seed i18n resources

**English seeds**
- Hero heading: “BUETIAN SCIENCE”    
- Subhead: “For students aiming for strong conceptual mastery and who prefer understanding deeply instead of just memorizing.”    
- Tagline chips: “#Personal Care · #Mock Tests · #Increase Analytical Skills”    
- CTA buttons: “Enroll Now”, “Join Now”    
- Highlights: Physics, Chemistry & Math coverage; From basics to advanced problems; Class 8 to Intermediate First Year; Regular tests, mock exams & feedback; Small batches for personal attention    
- Address: 48/48/2, Moneshwar Road, Hazaribagh (Beside Bitobi Furniture)    
- Phone: +8801790394788    

**Bangla seeds** (from flyer)
- “বুয়েটিয়ান সায়েন্স সম্পর্কে… বিজ্ঞান শিক্ষার্থীদের জন্য BUETian শিক্ষক দ্বারা পরিচালিত বিশেষ কোচিং…” (keep essence; refine for grammar as needed in UI)
- Key benefits in Bangla mirroring the English bullets above  

---

## 📑 Page/Section Specifications

> **All sections have:** section heading, brief copy, relevant imagery/illustrations (static SVGs or Lottie optional), and **Framer Motion** scroll‑reveal (fade/slide + stagger).

### 1) **Home**
**Purpose:** Immediate value proposition + fast paths to Enroll and to Courses.  
**Layout:**
- **Hero** with big title “BUETIAN SCIENCE” and subhead; chips for #PersonalCare, #MockTests, #AnalyticalSkills; two CTAs: “Enroll Now” (scroll to Contact) and “See Courses” (scroll to Courses).  
- **Value tiles** (4): “BUETian Teachers”, “Concept First”, “Regular Mock Tests”, “Small Batches”.
- **Announcement ribbon** (optional): “Join Now!”  
**Motion:**
- Hero enters with subtle spring; chips stagger in; floating science motif parallax.

### 2) **About Us / Our Story**
**Purpose:** Establish credibility and teaching philosophy.  
**Content:**
- “Expert coaching by BUETian teachers for higher‑class science students.”    
- “Build strong concepts, improve problem‑solving, and develop analytical thinking.”    
- Timeline: “From basics to advanced problems.”    
- Micro‑copy in Bangla mirroring the flyer.  
**Motion:**
- Cards spring‑in; on hover, tilt/scale with reduced motion respected.

### 3) **Courses & Programs / Our Offerings**
**Purpose:** Present subjects and target classes with clarity.  
**Content:**
- Subjects: **Physics, Chemistry, Mathematics**    
- Levels: **Class 8 → HSC First Year**    
- Pillars: **Concept → Practice → Mock → Feedback**    
**UI:**
- **MUI Tabs** by subject; inside each, cards for “Foundation”, “Advanced”, “Exam Prep”.
- Infobar: “Regular tests & mock exams with feedback”  
**Motion:**
- Tab content cross‑fade + scale; list items stagger‑reveal.

### 4) **Testimonials & Success Stories / Reviews**
**Purpose:** Social proof and outcomes.  
**UI:**
- **Swiper** carousel with 6 testimonial slots (placeholder content to be replaced later).
- Each slide: star rating, short quote, grade/board or target exam (editable).
**Motion:**
- Slide transitions; card lift on hover; counter for “Students Mentored” (react‑countup).

### 5) **Contact Us / Inquiry Form / Location & Hours**
**Purpose:** Convert interest to inquiries/enrollments.  
**Content:**
- Address block with **map embed** for: “48/48/2, Moneshwar Road, Hazaribagh (Beside Bitobi Furniture)”    
- Phone: **+8801790394788** with click‑to‑call action  Whatsapp (send message with default message i want to be addmitted in Buetian Science) 

**Motion:**
- Form reveals; success state confetti (discreet) in light mode only.

### 6) **FAQ**
- 10 accordion items (seed 5; leave 5 empty for CMS growth).  
- Examples: “Who teaches the classes?” → “BUETian teachers with strong subject expertise.”    
- “Do you run mock tests?” → “Yes—regular tests, mock exams & feedback.”  

### 7) **Blog & Resources / Study Tips & Insights**
- Renders Markdown/MDX posts from `/content`.  
- Cards with subject tag, estimated read time, and “Study Tip” label.  
- Single post view uses large readable typography, code/pre styles for equations (KaTeX optional).

---

## 🌐 Internationalization (react‑i18next)

- **Languages**: `en`, `bn`.  
- **Detection**: Browser + query param `?lang=bn` override + saved user choice.  
- **Namespace**: `common`.  

**Seed `en/common.json` keys:**
```json
{
  "brand": "BUETian Science",
  "tagline": "Learning Made Simple",
  "nav": { "home": "Home", "about": "About Us", "courses": "Courses & Programs", "testimonials": "Testimonials", "contact": "Contact Us", "faq": "FAQ", "blog": "Blog & Resources" },
  "cta": { "enrollNow": "Enroll Now", "joinNow": "Join Now", "seeCourses": "See Courses" },
  "hero": { "headline": "For students aiming for strong conceptual mastery and deep understanding.", "chips": ["#Personal Care", "#Mock Tests", "#Increase Analytical Skills"] },
  "about": {
    "lead": "Expert coaching by BUETian teachers for higher-class science students.",
    "benefits": ["Build strong concepts", "Improve problem-solving", "Develop analytical thinking", "From basics to advanced"]
  },
  "courses": {
    "subjects": ["Physics", "Chemistry", "Mathematics"],
    "levels": "Class 8 to Intermediate First Year",
    "track": ["Concept → Practice", "Mock Exams → Feedback"]
  },
  "contact": {
    "addressLabel": "Address",
    "addressValue": "48/48/2, Moneshwar Road, Hazaribagh (Beside Bitobi Furniture)",
    "phoneLabel": "Phone",
    "phoneValue": "+8801790394788"
  }
}
```
> Facts here come from the flyer text.  

**Seed `bn/common.json` keys (sample):**
```json
{
  "brand": "বুয়েটিয়ান সায়েন্স",
  "tagline": "লার্নিং মেড সিম্পল",
  "nav": { "home": "হোম", "about": "আমাদের সম্পর্কে", "courses": "কোর্স ও প্রোগ্রাম", "testimonials": "রিভিউ", "contact": "যোগাযোগ", "faq": "প্রশ্নোত্তর", "blog": "ব্লগ ও রিসোর্স" },
  "hero": {
    "headline": "যারা মুখস্থ নয়, গভীরভাবে বুঝে শক্ত ধারণা গড়তে চায়—তাদের জন্য।",
    "chips": ["#ব্যক্তিগত যত্ন", "#মক টেস্ট", "#বিশ্লেষণী দক্ষতা বৃদ্ধি"]
  },
  "about": {
    "lead": "বুয়েটিয়ান শিক্ষকদের দ্বারা উচ্চশ্রেণীর বিজ্ঞান শিক্ষার্থীদের জন্য বিশেষ কোচিং।",
    "benefits": ["শক্তিশালী ধারণা তৈরি", "সমস্যা সমাধান দক্ষতা বৃদ্ধি", "বিশ্লেষণী চিন্তাধারা", "বেসিক থেকে অ্যাডভান্সড"]
  },
  "courses": {
    "subjects": ["ফিজিক্স", "কেমিস্ট্রি", "ম্যাথমেটিক্স"],
    "levels": "ক্লাস ৮ থেকে ইন্টারমিডিয়েট প্রথম বর্ষ",
    "track": ["ধারণা → অনুশীলন", "মক পরীক্ষা → ফিডব্যাক"]
  },
  "contact": {
    "addressLabel": "ঠিকানা",
    "addressValue": "৪৮/৪৮/২, মনেশ্বর রোড, হাজারীবাগ (বিটোবি ফার্নিচারের পাশে)",
    "phoneLabel": "ফোন",
    "phoneValue": "+৮৮০১৭৯০৩৯৪৭৮৮"
  }
}
```
> Bangla copy aligns with the flyer’s Bangla section and address/phone.  

---

## 🧭 Routing & Section Anchors

- Use React Router with a single “/” route; internal nav uses `#home`, `#about`, `#courses`, etc.
- On hash change, smooth‑scroll and **set keyboard focus to the section heading** for accessibility.

---

## 🧱 Theming & Toggles

- Implement `ColorSchemeProvider` to expose `mode: 'light' | 'dark'`, toggle stored in `localStorage`.
- MUI’s theme customizations: palette (above), typography (load EN + BN fonts), shape (8), shadows tuned for clarity.
- Ensure focus states visible in both modes.

**Example Theme Toggle (TSX)**
```tsx
// ThemeToggle.tsx
import { IconButton, Tooltip } from '@mui/material';
import { LightMode, DarkMode } from '@mui/icons-material';
import { useColorScheme } from '../theme/ColorSchemeProvider';

export default function ThemeToggle() {
  const { mode, toggleMode } = useColorScheme();
  return (
    <Tooltip title={mode === 'light' ? 'Dark mode' : 'Light mode'}>
      <IconButton onClick={toggleMode} aria-label="Toggle color scheme">
        {mode === 'light' ? <DarkMode /> : <LightMode />}
      </IconButton>
    </Tooltip>
  );
}
```

---

## 🎞️ Motion & Interaction Spec (Framer Motion)

- **Global page transition**: fade + slideY(8) at mount; respect `prefers-reduced-motion`.
- **Scroll‑reveal**: sections animate when `20%` in view (IntersectionObserver).
- **Hero**: headline spring from y‑16; chips stagger (120ms); CTA pulse on idle.
- **Cards**: hover elevate with subtle scale (1.02) and shadow; tap reduces.
- **Counters**: “Years Teaching”, “Students Mentored”, etc. (configurable).
- **Map Card**: reveal via scaleIn when scrolled into view.

**Shared variants:**
```ts
export const fadeSlideUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
};
export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};
```

---

## 🧾 Forms & Validation

- **react‑hook‑form** + **zod** schema; error messages localized via i18n.
- Success state shows snackbar + scroll to top; failures show inline helper texts.
- Add a **“Call Now”** button (tel link) as a secondary quick action with the provided phone  .

---

## 🧭 Map & Contact Details

- Embed Google Maps (iframe) using the exact address from the flyer. Ensure map card shows **address** and a **“Directions”** button, plus click‑to‑call **+8801790394788**.  

---

## 🔐 Accessibility, SEO & Performance

- **A11y**: Semantic headings, label all inputs, `aria-expanded` for accordions, skip‑to‑content, proper color contrast.
- **SEO**: `react-helmet-async` for title/description; Open Graph & Twitter cards; structured data (Organization + Course).
- **Perf**: Vite code‑splitting for Swiper and Blog; lazy‑load images; responsive `srcset`.

---

## 🔧 Implementation Steps (for the Builder Agent)

1. **Scaffold** with Vite (React + TS). Install libraries listed above.  
2. **Fonts**: Add “Inter/Roboto Flex” and “Noto Sans Bengali” via `<link>` in `index.html`.  
3. **Theme**: Implement `ColorSchemeProvider` + MUI theme with palette/typography.  
4. **i18n**: Configure `react-i18next` with `en` and `bn` namespaces and language detector. Seed content from flyer (above).    
5. **Layout**: Build `Header` (logo text), `Footer` (address, phone, quick links), `Section` wrapper with motion variants.  
6. **Sections**: Implement Home, About, Courses, Testimonials, Contact, FAQ, Blog according to specs.  
7. **Contact Form**: Hook up provider adapter; validate with zod. Add click‑to‑call using +8801790394788.    
8. **Map Embed**: Load address card + iframe with pin/title.    
9. **Animations**: Add scroll‑reveal + hover interactions, respect reduced motion.  
10. **SEO & A11y**: Helmet meta; alt text; keyboard navigation; focus rings.  
11. **Testing**: Validate on mobile (360px), tablet (768px), desktop (1440px).  
12. **Build/Deploy**: Provide `npm run build` output and a static hosting guide.

---

## ✅ Acceptance Criteria

- Single‑page layout with smooth scroll between sections; header remains sticky.
- Fully functional **Bangla/English** toggle; language persists across reloads.
- **Theme toggle** persists and updates all components.
- **Home** shows the flyer’s key promises (conceptual mastery, mock tests, personal care) and dual CTAs.  
- **About** references BUETian teachers and concept/problem‑solving focus.  
- **Courses** clearly lists **Physics/Chemistry/Math** and **Class 8 → Intermediate First Year** levels.  
- **Contact** shows the exact **address** and **phone**, with map and click‑to‑call.  
- Framer Motion animations are tasteful, performant, and reduced for users who prefer less motion.
- Lighthouse (mobile) Performance ≥ 90, A11y ≥ 95.

---

## ✨ Sample Code Seeds

**i18n setup (`/src/i18n/index.ts`)**
```ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './locales/en/common.json';
import bn from './locales/bn/common.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    resources: { en: { common: en }, bn: { common: bn } },
    ns: ['common'],
    defaultNS: 'common',
    interpolation: { escapeValue: false }
  });

export default i18n;
```

**Header with Language & Theme**
```tsx
import { AppBar, Toolbar, Button, Stack, Link as MLink } from '@mui/material';
import ThemeToggle from '../components/ThemeToggle';
import LanguageSwitcher from '../components/LanguageSwitcher';

export default function Header() {
  const items = [
    { labelKey: 'nav.home', href: '#home' },
    { labelKey: 'nav.about', href: '#about' },
    { labelKey: 'nav.courses', href: '#courses' },
    { labelKey: 'nav.testimonials', href: '#testimonials' },
    { labelKey: 'nav.contact', href: '#contact' },
    { labelKey: 'nav.faq', href: '#faq' },
    { labelKey: 'nav.blog', href: '#blog' }
  ];
  return (
    <AppBar position="sticky" color="default" elevation={1}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        #home
          BUETian Science
        </MLink>
        <Stack direction="row" spacing={1} alignItems="center">
          {items.map(i => (
            <Button key={i.href} href={i.href} size="small">{/* t(i.labelKey) in real code */}</Button>
          ))}
          <LanguageSwitcher />
          <ThemeToggle />
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
```

---

## 📦 Deliverables

- Full source code (TypeScript) with clear README.
- `en` and `bn` JSONs with seeded flyer content and placeholders.
- Exported production build (dist/) and deployment notes.
- Design tokens (colors/typography/spacing) documented in README.
- A short report showing interactions ss (optional).

---

## 🧠 Notes for the Agent

- Keep the brand honest to the flyer: emphasize **conceptual mastery**, **mock tests**, **small batches**, **BUETian teachers**, the **three subjects**, **target classes**, and the **exact contact details**.    
- Where copy needs smoothing, preserve meaning and tone in both languages.

