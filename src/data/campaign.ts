export interface CampaignImage {
  src: string;
  alt: string;
  title: string;
  tagline: string;
  featured?: boolean;
  span?: string;
}

export const campaignImages: CampaignImage[] = [
  {
    src: "/campaign/money-moves-back.png",
    alt: "MMTW Money Moves The World tee in graffiti tunnel",
    title: "Money Moves The World",
    tagline: "Wear the movement. Live the mission.",
    featured: true,
    span: "col-span-2 row-span-2",
  },
  {
    src: "/campaign/mmtw-duo-pink-tee.png",
    alt: "Two models wearing MMTW pink heart logo tees",
    title: "Built Together",
    tagline: "MMTW EST. 2024 — street luxury for the ambitious.",
    featured: true,
    span: "col-span-1 row-span-2",
  },
  {
    src: "/campaign/graffiti-trio.png",
    alt: "Three models in MMTW streetwear inside graffiti tunnel",
    title: "The Culture",
    tagline: "Underground energy. Premium execution.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/campaign/born-to-win.png",
    alt: "Model in Born to Win MMTW tee in graffiti tunnel",
    title: "Born To Win",
    tagline: "Purpose in every stitch.",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/campaign/heart-tee-studio.png",
    alt: "MMTW heart logo tee studio editorial",
    title: "Heart Of The Brand",
    tagline: "Details that define MMTW.",
    span: "col-span-2 row-span-1",
  },
];

export const campaignContent = {
  headline: "The Campaign",
  subheadline:
    "Official MMTW promotional imagery. Pure brand energy — not tied to individual product listings.",
  ctaText: "Shop Collection",
  ctaLink: "/shop",
};
