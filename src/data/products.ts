import { Product } from "@/types";

const unsplash = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

export const products: Product[] = [
  {
    id: "1",
    slug: "shadow-protocol-hoodie",
    name: "Shadow Protocol Hoodie",
    price: 185,
    category: "hoodies",
    description:
      "Premium heavyweight fleece hoodie with oversized fit. Embroidered MMTW crest on chest. Built for those who move in silence.",
    images: [
      unsplash("photo-1556821840-3a63f95609a7"),
      unsplash("photo-1620799140408-edc6dcb086d8"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Charcoal"],
    featured: true,
    bestSeller: true,
    tags: ["new"],
  },
  {
    id: "2",
    slug: "empire-boxy-tee",
    name: "Empire Boxy Tee",
    price: 68,
    category: "tees",
    description:
      "280gsm boxy cut tee with dropped shoulders. Minimal front branding, bold back graphic. The foundation of every fit.",
    images: [
      unsplash("photo-1521572163474-6864f9cf17ab"),
      unsplash("photo-1583743814966-8936f5b7be1a"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["White", "Black", "Stone"],
    featured: true,
    bestSeller: true,
    tags: ["essentials"],
  },
  {
    id: "3",
    slug: "midnight-velocity-sweatsuit",
    name: "Midnight Velocity Sweatsuit",
    price: 245,
    category: "sweatsuits",
    description:
      "Two-piece premium tracksuit in brushed cotton blend. Tapered joggers with zip pockets. For the grind, day to night.",
    images: [
      unsplash("photo-1515886657613-9f3515b0c78f"),
      unsplash("photo-1591047139829-d91aecb6caea"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Navy"],
    featured: true,
    bestSeller: false,
    tags: ["new", "set"],
  },
  {
    id: "4",
    slug: "architect-bomber-jacket",
    name: "Architect Bomber Jacket",
    price: 320,
    category: "jackets",
    description:
      "Structured nylon bomber with satin lining. Ribbed cuffs and hem. Statement piece for the ones building empires.",
    images: [
      unsplash("photo-1591047139829-d91aecb6caea"),
      unsplash("photo-1551028719-00167b16eac5"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Olive"],
    featured: true,
    bestSeller: true,
    tags: ["limited"],
  },
  {
    id: "5",
    slug: "grind-mode-hoodie",
    name: "Grind Mode Hoodie",
    price: 165,
    category: "hoodies",
    description:
      "Relaxed fit hoodie with tonal embroidery. French terry interior. Your uniform for late nights and early mornings.",
    images: [
      unsplash("photo-1578587018453-892bacefd3f2"),
      unsplash("photo-1509941943105-10c9325b6b9f"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Heather Grey", "Black"],
    featured: false,
    bestSeller: true,
    tags: ["essentials"],
  },
  {
    id: "6",
    slug: "purpose-oversized-tee",
    name: "Purpose Oversized Tee",
    price: 72,
    category: "tees",
    description:
      "Oversized silhouette with raw-edge hem. Screen-printed manifesto on back. Wear your ambition.",
    images: [
      unsplash("photo-1618354691373-d851c5c3a990"),
      unsplash("photo-1576566588028-4147f3842f27"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Cream"],
    featured: false,
    bestSeller: true,
    tags: [],
  },
  {
    id: "7",
    slug: "legacy-track-jacket",
    name: "Legacy Track Jacket",
    price: 195,
    category: "jackets",
    description:
      "Full-zip track jacket with contrast piping. Lightweight yet structured. Street to studio versatility.",
    images: [
      unsplash("photo-1594938298603-c8148c4dae35"),
      unsplash("photo-1544022613-e87ca75a784a"),
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "White"],
    featured: false,
    bestSeller: false,
    tags: ["new"],
  },
  {
    id: "8",
    slug: "hustle-core-sweatsuit",
    name: "Hustle Core Sweatsuit",
    price: 220,
    category: "sweatsuits",
    description:
      "Essential two-piece in premium fleece. Relaxed hoodie and straight-leg pants. Comfort meets conviction.",
    images: [
      unsplash("photo-1620799140408-edc6dcb086d8"),
      unsplash("photo-1515886657613-9f3515b0c78f"),
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Charcoal", "Black"],
    featured: false,
    bestSeller: true,
    tags: ["essentials"],
  },
];

export const featuredProducts = products.filter((p) => p.featured);
export const bestSellers = products.filter((p) => p.bestSeller);

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "all") return products;
  return products.filter((p) => p.category === category);
}

export const categories = [
  { label: "All", value: "all" },
  { label: "Hoodies", value: "hoodies" },
  { label: "Tees", value: "tees" },
  { label: "Sweatsuits", value: "sweatsuits" },
  { label: "Jackets", value: "jackets" },
];

export const navLinks = [
  { label: "Shop", href: "/shop" },
  { label: "Campaign", href: "/campaign" },
  { label: "Lookbook", href: "/lookbook" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "FAQ", href: "/faq" },
];

export const faqItems = [
  {
    question: "What is your shipping policy?",
    answer:
      "We offer free standard shipping on orders over $150. Express shipping is available at checkout. Domestic orders typically arrive within 3–7 business days.",
  },
  {
    question: "How do MMTW pieces fit?",
    answer:
      "Our silhouettes run oversized by design. We recommend sizing down for a regular fit, or staying true to size for the intended boxy, street-luxury look. Size guides are available on each product page.",
  },
  {
    question: "What is your return policy?",
    answer:
      "Unworn items with tags attached may be returned within 14 days of delivery. Initiate a return through your order confirmation email or contact our team.",
  },
  {
    question: "Are your products limited edition?",
    answer:
      "Select drops are produced in limited quantities and marked accordingly. Core essentials are restocked regularly — subscribe to our newsletter for drop alerts.",
  },
  {
    question: "Do you ship internationally?",
    answer:
      "Yes. International shipping rates and delivery times are calculated at checkout based on your destination.",
  },
];

export const cmsContent = {
  hero: {
    headline: "Money Moves The World",
    subheadline: "Premium streetwear for those who chase purpose, not permission.",
    ctaText: "Shop Collection",
    ctaLink: "/shop",
  },
  mission: {
    title: "Built Different",
    body: "MMTW. is more than clothing — it's a mindset. We create pieces for the ambitious, the relentless, the ones who understand that every move matters. Luxury craftsmanship meets underground culture. No shortcuts. No excuses. Just purpose-driven design for a new generation of builders.",
  },
};
