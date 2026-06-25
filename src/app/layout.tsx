import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CartDrawer from "@/components/cart/CartDrawer";
import LoadingScreen from "@/components/ui/LoadingScreen";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://mmtw.co"
  ),
  title: {
    default: "MMTW. | Money Moves The World",
    template: "%s | MMTW.",
  },
  description:
    "Premium streetwear for the ambitious. Luxury fashion meets underground culture. Hoodies, tees, sweatsuits, and jackets built for purpose.",
  keywords: [
    "streetwear",
    "luxury fashion",
    "MMTW",
    "Money Moves The World",
    "hoodies",
    "premium clothing",
  ],
  openGraph: {
    title: "MMTW. | Money Moves The World",
    description:
      "Premium streetwear for the ambitious. Purpose-driven design for a new generation of builders.",
    type: "website",
    locale: "en_US",
    siteName: "MMTW.",
    images: [{ url: "/logo/mmtw-logo.png", width: 1200, height: 1200, alt: "MMTW Logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMTW. | Money Moves The World",
    description: "Premium streetwear for the ambitious.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bebas.variable} ${dmSans.variable}`}>
      <body className="min-h-screen antialiased">
        <CartProvider>
          <LoadingScreen />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  );
}
