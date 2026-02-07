# KANSHO.TECH

> Privacy & Network Security Hardware — Corporate Cyberpunk Console Interface

A static Next.js 15 website with a late-90s/early-2000s Japanese corporate cyberpunk aesthetic. Built with TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick Start

### Prerequisites

- **Node.js** 18.17 or later — [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)

### Setup

```bash
# 1. Navigate into the project folder
cd kansho-tech

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Create static export in /out directory
npm run build
```

The `out/` folder contains the complete static site ready for deployment.

---

## Deploy to Vercel (Recommended — Free)

### Option A: GitHub Integration (Easiest)

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign up with GitHub
3. Click **"New Project"** → Import your repository
4. Vercel auto-detects Next.js — click **"Deploy"**
5. Your site is live! Every push to `main` auto-deploys

### Option B: Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

### Custom Domain

1. In Vercel dashboard → your project → **Settings** → **Domains**
2. Add `kansho.tech`
3. Update your domain's DNS:
   - **A Record**: `76.76.21.21`
   - **CNAME**: `cname.vercel-dns.com`

---

## Project Structure

```
kansho-tech/
├── app/
│   ├── layout.tsx          # Root layout — SEO, fonts, persistent console frame
│   ├── page.tsx            # Homepage — ACCESS menu + product viewer
│   ├── globals.css         # Tailwind base + cyberpunk custom CSS
│   ├── classified/
│   │   └── page.tsx        # Login gate + prototype dashboard
│   └── terms/
│       └── page.tsx        # Terms of Service
├── components/
│   ├── ConsoleFrame.tsx    # Persistent metallic beveled border
│   ├── ProductPanel.tsx    # Product detail view with carousel
│   ├── ImageCarousel.tsx   # Mobile-swipeable image gallery
│   ├── GlitchText.tsx      # Animated text with hover glitch effect
│   ├── BackgroundEffect.tsx # Canvas-based circuit trace animation
│   └── DisclaimerBanner.tsx # Legal disclaimer component
├── lib/
│   ├── products.ts         # All product data (verbatim copy)
│   └── store.ts            # Zustand state management
├── public/images/          # SVG product placeholder images
├── next.config.js          # Static export configuration
├── tailwind.config.ts      # Cyberpunk theme colors & animations
└── package.json
```

## Features

- **Static Export** — 100% static HTML/CSS/JS, no server required
- **Console Frame** — Persistent beveled metallic border with CRT scanlines
- **Glitch Animations** — Framer Motion transitions with hue-rotate distortion
- **Mobile-First** — Responsive at 375px, 640px, 768px, 1024px, 1440px
- **Accessibility** — WCAG AA focus indicators, semantic HTML, ARIA labels, reduced-motion support
- **SEO** — Meta tags, Open Graph, semantic structure
- **Classified Section** — Login: `operator` / `kansho2026`

## Stripe Integration (Future)

The "ACQUIRE ASSET" buttons are currently disabled with a "COMING SOON — Q3 2026" overlay. Stripe Checkout implementation code is included as comments in `ProductPanel.tsx`. To enable:

1. Install Stripe: `npm install @stripe/stripe-js`
2. Create products in [Stripe Dashboard](https://dashboard.stripe.com)
3. Replace placeholder price IDs in ProductPanel.tsx
4. Remove the disabled state and CSS overlay from the acquire button

---

## Test Credentials

**Classified Section** (`/classified`):
- Username: `operator`
- Password: `kansho2026`

---

## License

All rights reserved. © 2026 Kansho.tech
