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

## 2. Technology Architecture: Pure Static (No Frameworks)

The entire website is built strictly using browser-native technologies:
- **HTML5:** Semantic markup, accessible labels, structured hierarchy.
- **CSS3:** Custom design tokens (`css/style.css`), responsive media rules (`css/responsive.css`), flexible CSS grids, zero utility framework overhead.
- **Vanilla JavaScript (ES6+):** Pure browser scripts (`js/main.js`, `js/navigation.js`, `js/animations.js`), zero npm dependencies, zero build steps.
- **Hosting Portability:** 100% static; runs natively on GitHub Pages, Cloudflare Pages, Netlify, Vercel, or by double-clicking `index.html`.

---

## 3. Visual Design System

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
- **Restraints:** Zero AI gradients, zero glowing borders, zero fake testimonials, zero inflated statistics.

---

## 4. Website Structure & Navigation

### Main Agency Pages
1. **Home (`index.html`)**: Sticky navigation with transparent logo lockup, hero with browser mockup, agency philosophy, 8 services preview, selected work, 5-stage development process, 4 why blocks, pricing preview, CTA, and editorial footer.
2. **Services (`services.html`)**: Full technical breakdown of all 8 services with clear distinction between **Core Services** and **Advanced Custom Assessment**:
   - Business Website Development
   - E-commerce Development
   - Custom Web Applications
   - Landing Page Development
   - UI/UX Design
   - SEO & Generative Engine Optimization (GEO)
   - Website Maintenance & Support
   - SaaS Product Development
3. **Pricing (`pricing.html`)**: Transparent fixed-investment packages matching existing pricing:
   - **PLAN 01 — ESSENTIAL: BASIC WEBSITE** (`₹20,000`)
   - **PLAN 02 — MOST POPULAR: ONLINE BOOKING** (`₹34,500`)
   - **PLAN 03 — ENTERPRISE: COMPLETE ONLINE SYSTEM** (`₹89,999`)
   - Complete 15-point side-by-side comparison table.
   - Transparent third-party fees disclaimer (domains, hosting, and payment gateways).
   - Custom architectural quotation flow.
4. **Our Work / Project Studio (`work.html` and `work/index.html`)**:
   - Industry filters: All, Business, E-commerce, Healthcare, Hospitality, Real Estate.
   - Interactive live concept previews.
   - Portfolio integrity disclaimer clearly stating concept demonstrations.
5. **About (`about.html`)**: Genuine agency story, mission, working principles, technology stack capabilities, and structured team roles.
6. **Contact (`contact.html`)**: Complete inquiry experience with budget tier selection, service selection, and pre-formatted WhatsApp handoff.

---

## 5. Internal Portfolio Demonstration Websites

Built directly inside the project with unique branding, color palettes, and full interactivity:

1. **Flagship Real Estate Website (`work/real-estate/index.html`)**:
   - *Brand:* **ESTATE & CO.** (Prime Residences & Architectural Estates)
   - *Features:* Editorial luxury aesthetic, live multi-parameter property search engine (Location, Property Type, Buy/Rent, Bedrooms, Price sorting), 8 curated listings, interactive specifications modal, and WhatsApp concierge handoff.
2. **Textile Business Website (`work/textile/index.html` & `work/textile-demo/index.html`)**:
   - *Brand:* Aura Weaves & Jacquards (Surat Mills, Est. 1998)
   - *Features:* Fabric catalogue, technical specification sheets modal, GSM & loom metrics, bulk export swatch request form.
3. **Restaurant Website (`work/restaurant/index.html` & `work/restaurant-demo/index.html`)**:
   - *Brand:* Saffron & Sage Dining
   - *Features:* Hearth culinary philosophy, multi-course seasonal tasting menu with dietary tags, interactive table reservation booking engine (date, time, seating area, guests).
4. **Healthcare / Clinic Website (`work/healthcare/index.html` & `work/healthcare-demo/index.html`)**:
   - *Brand:* PulseCare Multi-Speciality Clinic
   - *Features:* Doctor profiles with qualifications and consulting hours, departments, interactive digital OPD slot reservation form with immediate confirmation tokens.
5. **Bespoke Real Estate Website (`work/real-estate-demo/index.html`)**:
   - *Brand:* Apex Horizons Realty (Surat Prime)
   - *Features:* Penthouses, villas, and sky residences with bed/bath/sqft specs, interactive floor plan and amenity modal, private VIP walkthrough booking form.
6. **PhysioCare Website (`work/physiocare/index.html` & `work/physiocare-demo/index.html`)**:
   - *Brand:* Kinetic Sports Physio & Rehab
   - *Features:* Targeted rehabilitation programs, certified therapist profiles, in-clinic vs home-visit slot scheduler, transparent sample content notice.
7. **Housekeeping Service Website (`work/housekeeping/index.html` & `work/housekeeping-demo/index.html`)**:
   - *Brand:* SparkleClean Facility Care
   - *Features:* Live interactive cleaning cost estimator based on BHK size and intensity, Surat locality coverage checker (Vesu, Adajan, Pal, Piplod, etc.), dispatch booking form.

---

## 6. Local Testing & Execution

No build step or Node.js environment is required.

### Method 1: Local HTTP Server (Python)
```bash
python -m http.server 8080
# Open http://localhost:8080/ in your browser
```

### Method 2: Direct File Open
Double-click `index.html` in Windows Explorer or open `file:///c:/NEXUSLM/index.html` in Chrome/Edge.

---

## 7. GitHub Pages Deployment

The repository uses strict relative paths (`./` and `../../`), ensuring seamless hosting on GitHub Pages:
1. Push repository commits to the `master` or `main` branch.
2. Go to **Repository Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch**.
4. Select `master` (or `main`) and `/ (root)` folder.
5. Save. The site is live globally with zero build pipelines.

---

## 8. License & Credits

© 2026 NEXUS LM. Web Development Services. All rights reserved.  
Surat, Gujarat, India.
