# NAYAB CONSTRUCTION – Premium Luxury Architecture & Construction Website

> **Civil Engineers | Architects | Builders | Interior Designers | Real Estate Developers**  
> *"From Blueprint to Reality."*  
> **Brand Promise:** *"One Company. Every Building Solution."*  
> **Headquarters:** Opposite Court Complex, Near Gandhi Park, Ijoor, Ramanagara – 562159, Karnataka, India.

---

## 🏛️ Project Overview
This is a modern, high-performance website engineered for **NAYAB CONSTRUCTION** utilizing **Next.js 14**, **TypeScript**, and **Tailwind CSS**. Designed according to international luxury architectural standards, it features a warm ivory and champagne gold theme, comprehensive multidisciplinary service showcases, dynamic pricing estimator, interactive portfolio lightboxes, and executive leadership profiles.

---

## 💎 Brand & Design System

- **Primary Background:** `#F8F6F0` (Ivory / Warm Alabaster)
- **Secondary Background:** `#FFFFFF` (Pure Crisp White)
- **Warm Beige:** `#EFE7DA`
- **Champagne Gold:** `#C6A46A`
- **Soft Gold:** `#D8BC89`
- **Dark Charcoal:** `#282828`
- **Body Text:** `#66615B`
- **Border:** `#E9E2D7`
- **Typography:**
  - Headings: *Playfair Display* (Serif)
  - Body: *Inter* / *Plus Jakarta Sans* (Sans-serif)

---

## 📂 Architecture & Routing Structure

```text
├── app/
│   ├── globals.css                       # Luxury typography, variables & animations
│   ├── layout.tsx                        # Root layout, JSON-LD Schema (LocalBusiness)
│   ├── page.tsx                          # Luxury Villa Hero, 9 Services, Timeline, Estimator
│   ├── about/page.tsx                    # Detailed Heritage, Vision & Mission
│   ├── services/page.tsx                 # Master 9 Engineering Disciplines
│   ├── services/[slug]/page.tsx          # Dedicated Detail Pages for all 9 Services
│   ├── projects/page.tsx                 # Portfolio Showcase with Filter Tabs & Lightbox
│   ├── gallery/page.tsx                  # Dedicated Visual Gallery
│   ├── leadership/page.tsx               # Mr. Sadat Ulla Khan & Mr. Nayab Noor Mohammad Khan
│   ├── contact/page.tsx                  # Consultation Form, FAQs & Google Maps
│   ├── sitemap.ts                        # SEO XML Sitemap
│   ├── robots.ts                         # Robots.txt Rules
│   └── manifest.ts                       # PWA Web Manifest
├── components/
│   ├── BrandLogo.tsx                     # 3D Gold Logo & Typography Lockups
│   ├── Navbar.tsx                        # Sticky Header, 9 Services Mega-Menu, Mobile Drawer
│   ├── Footer.tsx                        # Light Luxury Footer with Ramanagara Office Info
│   ├── LeadershipSection.tsx             # Side-by-side Founders with verified experience
│   ├── CostEstimator.tsx                 # Real-time Construction Budget Calculator
│   ├── HomePortfolio.tsx                 # Categorized Project Grid
│   ├── ProjectsView.tsx                  # Filterable Portfolio Engine
│   ├── ProjectLightbox.tsx               # Modal Lightbox with Blueprint Specs
│   ├── GalleryView.tsx                   # Visual Masonry & Zoom Lightbox
│   ├── ContactForm.tsx                   # Validation & WhatsApp auto-fill integration
│   ├── GoogleMapEmbed.tsx                # Ramanagara Court Complex Map Embed
│   └── WhatsAppButton.tsx                # Floating Consultation Widget
├── lib/
│   └── data.ts                           # Single Source of Truth for Services, Projects & Founders
└── public/
    ├── images/
    │   ├── branding/nayab-logo.jpg       # Official 3D Gold Nayab Logo
    │   └── leadership/                   # Real Founder & Co-Founder Photographs
    └── favicon.svg                       # Luxury Monogram Favicon
```

---

## 🛠️ The 9 Specialized Engineering Disciplines

1. **Architectural Planning & Building Design** (`/services/architectural-design`)
2. **Structural Design & Detailing** (`/services/structural-design`)
3. **Construction Services** (`/services/construction`)
4. **Interior Design & Execution** (`/services/interior-design`)
5. **Elevation & Architectural Visualization** (`/services/3d-visualization`)
6. **Estimation & Quantity Surveying** (`/services/estimation`)
7. **Building Approvals & Documentation** (`/services/approvals-documentation`)
8. **Home Loans & Financial Assistance** (`/services/loan-assistance`)
9. **Real Estate & Property Development** (`/services/real-estate`)

---

## 🚀 Local Development Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run development server:**
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🌐 Deployment to GitHub & Vercel

### Step 1: Initialize Git and Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit: Nayab Construction luxury website"
git branch -M main
git remote add origin https://github.com/<your-username>/nayab-constructions.git
git push -u origin main
```

### Step 2: Deploy on Vercel
1. Log into your [Vercel Dashboard](https://vercel.com).
2. Click **Add New** &rarr; **Project**.
3. Import the `nayab-constructions` repository.
4. Framework Preset: **Next.js** (detected automatically).
5. Click **Deploy**.

### Step 3: Connect Custom Domain
Suggested domain choices:
- `nayabconstruction.com`
- `nayabconstructions.com`
- `nayabconstruction.in`

In Vercel:
1. Navigate to **Project Settings** &rarr; **Domains**.
2. Enter your purchased domain (e.g., `nayabconstruction.com`).
3. Add the DNS records provided by Vercel to your domain registrar (GoDaddy, Namecheap, Google Domains):
   - **A Record**: `@` &rarr; `76.76.21.21`
   - **CNAME**: `www` &rarr; `cname.vercel-dns.com`
4. Vercel automatically issues an SSL certificate (HTTPS) within minutes.
