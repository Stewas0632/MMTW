import type { Metadata } from "next";
import CampaignPageClient from "./CampaignPageClient";

export const metadata: Metadata = {
  title: "Campaign",
  description:
    "MMTW. official campaign and promotional imagery — Money Moves The World streetwear.",
};

export default function CampaignPage() {
  return <CampaignPageClient />;
}
