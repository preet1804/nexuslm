# NEXUS LM — Web Development Services

> **Modern Websites. Real Results.**  
> *Building websites that work. Grow. Inspire.*

Production-ready digital agency website and interactive project studio built for **NEXUS LM**, based in Surat, Gujarat, India.

---

## 1. Brand Identity & Overview

- **Brand Name:** NEXUS LM
- **Business:** Web Development Services
- **Headquarters:** Surat, Gujarat, India
- **Market Coverage:** India & International Clients
- **Direct WhatsApp:** [+91 63550 49071](https://wa.me/916355049071)
- **Direct Phone:** [+91 87340 09367](tel:+918734009367)
- **Official Instagram:** [@nexuslm05](https://instagram.com/nexuslm05)
- **Official Email:** `contact@nexuslm.in`
- **Official Logo:** Preserves the authentic geometric M-style symbol and wordmark proportions from the brand assets.

---

## 2. Visual Design System

The visual design system strictly reflects the warm editorial aesthetic:

| Token | Hex Code | Purpose |
|---|---|---|
| **Primary Background** | `#F7F5F0` | Warm off-white page canvas |
| **Secondary Background** | `#FFFFFF` | Crisp white cards & surface containers |
| **Primary Text** | `#17191B` | Deep charcoal for headlines & primary typography |
| **Secondary Text** | `#66686A` | Balanced neutral grey for body & descriptions |
| **Muted Text** | `#929292` | Subtle mono labels & breadcrumbs |
| **Primary Border** | `#DCDAD4` | Thin, refined borders |
| **Dark Section Background** | `#171A1D` | Premium dark contrast sections & footer |
| **Dark Section Text** | `#F7F5F0` | Warm off-white text on dark backgrounds |
| **Accent Tone** | `#A9A99F` | Restrained neutral accent |

- **Typography:** `Manrope` / `Montserrat` for headings, `Inter` for body text.
- **Iconography:** Lucide Icons.
- **Restraints:** Zero AI gradients, zero glowing borders, zero fake testimonials, zero inflated statistics.

---

## 3. Website Structure & Navigation

### Main Agency Pages
1. **Home (`/`)**: Sticky navigation with transparent logo lockup, hero with browser mockup, agency philosophy, 8 services preview, selected work, 5-stage development process, 4 why blocks, pricing preview, CTA, and editorial footer.
2. **Services (`/services`)**: Full technical breakdown of all 8 services with clear distinction between **Core Services** and **Advanced Custom Assessment**:
   - Business Website Development
   - E-commerce Development
   - Custom Web Applications
   - Landing Page Development
   - UI/UX Design
   - SEO & Generative Engine Optimization (GEO)
   - Website Maintenance & Support
   - SaaS Product Development
3. **Pricing (`/pricing`)**: Transparent fixed-investment packages matching existing pricing:
   - **PLAN 01 — ESSENTIAL: BASIC WEBSITE** (`₹20,000`)
   - **PLAN 02 — MOST POPULAR: ONLINE BOOKING** (`₹34,500`)
   - **PLAN 03 — ENTERPRISE: COMPLETE ONLINE SYSTEM** (`₹89,999`)
   - Complete 15-point side-by-side comparison table.
   - Transparent third-party fees disclaimer (domains, hosting, and payment gateways).
   - Custom architectural quotation flow.
4. **Our Work / Project Studio (`/work`)**:
   - Industry filters: All, Business & B2B, Hospitality, Healthcare, Real Estate.
   - Interactive live sandbox preview.
   - Portfolio integrity disclaimer clearly stating concept demonstrations.
5. **About (`/about`)**: Genuine agency story, mission, working principles, technology stack capabilities, and structured team roles.
6. **Contact (`/contact`)**: Complete inquiry experience with budget tier selection, service selection, and pre-formatted WhatsApp handoff.

---

## 4. Internal Portfolio Demonstration Websites

Built directly inside the project with unique branding, color palettes, and full interactivity:

1. **Textile Business Website (`/work/textile-demo`)**:
   - *Brand:* Aura Weaves & Jacquards (Surat Mills, Est. 1998)
   - *Features:* Fabric catalogue (Jacquards, Silk, Linen, Georgette, Viscose), technical specification sheets modal, GSM & loom metrics, bulk export swatch request form.
2. **Restaurant Website (`/work/restaurant-demo`)**:
   - *Brand:* Saffron & Sage Dining
   - *Features:* Hearth culinary philosophy, multi-course seasonal tasting menu with dietary tags, interactive table reservation booking engine (date, time, seating area, guests).
3. **Healthcare / Clinic Website (`/work/healthcare-demo`)**:
   - *Brand:* PulseCare Multi-Speciality Clinic
   - *Features:* Doctor profiles with qualifications and consulting hours, departments, interactive digital OPD slot reservation form with immediate confirmation tokens.
4. **Real Estate Website (`/work/real-estate-demo`)**:
   - *Brand:* Apex Horizons Realty (Surat Prime)
   - *Features:* Penthouses, villas, and sky residences with bed/bath/sqft specs, interactive floor plan and amenity modal, private VIP walkthrough booking form.
5. **PhysioCare Website (`/work/physiocare-demo`)**:
   - *Brand:* Kinetic Sports Physio & Rehab
   - *Features:* Targeted rehabilitation programs, certified therapist profiles, in-clinic vs home-visit slot scheduler, transparent sample content notice.
6. **Housekeeping Service Website (`/work/housekeeping-demo`)**:
   - *Brand:* SparkleClean Facility Care
   - *Features:* Live interactive cleaning cost estimator based on BHK size and intensity, Surat locality coverage checker (Vesu, Adajan, Pal, Piplod, etc.), dispatch booking form.

---

## 5. Technology Stack

- **Framework:** React 18 + Vite 6
- **Routing:** React Router DOM (HashRouter for universal GitHub Pages & static server compatibility)
- **Styling:** Tailwind CSS + Custom CSS variables
- **Icons:** Lucide React + Custom SVG icons
- **SEO & Meta:** Open Graph, Twitter Cards, Schema.org ProfessionalService JSON-LD, sitemap.xml, robots.txt

---

## 6. Installation & Local Development

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Setup Steps
```bash
# Clone the repository
git clone <repository-url>
cd NEXUSLM

# Install dependencies
npm install

# Start local development server
npm run dev
# The website will be available at http://localhost:3000/

# Build for production
npm run build
# Production files will be generated in dist/

# Preview production build locally
npm run preview
# Preview server runs on http://localhost:4173/
```

---

## 7. Deployment Instructions

### Deploy to GitHub Pages
1. The project is configured with relative base paths (`base: './'`) in `vite.config.js` and `HashRouter` in `App.jsx`, ensuring seamless loading of all deep demo paths.
2. Build the project:
   ```bash
   npm run build
   ```
3. Push the `dist/` directory contents to your `gh-pages` branch, or configure GitHub Actions to build and deploy automatically from the `main` branch.

### Deploy to Vercel / Netlify
- Connect the Git repository to Vercel or Netlify.
- Framework preset: **Vite**
- Build command: `npm run build`
- Output directory: `dist`

---

## 8. Backend Requirements & External Credentials

The website is engineered as a static frontend with direct WhatsApp API handoffs. To connect persistent backend services:

1. **Email Delivery Service:** If automated server-side email notifications are desired (instead of the WhatsApp handoff), integrate a transactional provider such as Resend, SendGrid, or AWS SES.
2. **Payment Gateway Credentials:** For Plan 03 (Enterprise), integrate live Razorpay or Stripe API keys (`RAZORPAY_KEY_ID`, `RAZORPAY_KEY_SECRET`).
3. **Database / CRM Webhook:** Connect a backend webhook (Supabase, PostgreSQL, or Zapier) to record lead submissions directly into your CRM.

---

## 9. License & Credits

© 2026 NEXUS LM. Web Development Services. All rights reserved.
Surat, Gujarat, India.

