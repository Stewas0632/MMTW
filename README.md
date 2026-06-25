# MMTW. — Money Moves The World

Premium streetwear e-commerce built with Next.js, Tailwind CSS, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Tech Stack

- **Next.js 15** — App Router, SSR, SEO optimization
- **Tailwind CSS** — Utility-first styling
- **Framer Motion** — Animations and page transitions
- **TypeScript** — Type safety

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/
│   ├── cart/         # Cart drawer
│   ├── home/         # Homepage sections
│   ├── layout/       # Header, Footer, Nav
│   ├── product/      # Product cards & grids
│   └── ui/           # Reusable UI components
├── context/          # React context (Cart)
├── data/             # Product data (CMS-ready)
├── lib/              # Utilities
└── types/            # TypeScript types
```

## Pages

- `/` — Homepage
- `/shop` — Product listing with category filters
- `/product/[slug]` — Product detail with image gallery
- `/about`, `/contact`, `/lookbook`, `/cart`, `/checkout`, `/faq`

## CMS & Integrations

Product data lives in `src/data/products.ts`. Replace with Sanity, Contentful, or Shopify. Checkout is Stripe-ready. Newsletter form is ready for Mailchimp/Klaviyo/Resend.
