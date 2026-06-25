import Hero from "@/components/home/Hero";
import Marquee from "@/components/home/Marquee";
import CategoryShowcase from "@/components/home/CategoryShowcase";
import FeaturedCollection from "@/components/home/FeaturedCollection";
import BrandMission from "@/components/home/BrandMission";
import BestSellers from "@/components/home/BestSellers";
import LifestyleGallery from "@/components/home/LifestyleGallery";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />
      <CategoryShowcase />
      <FeaturedCollection />
      <BrandMission />
      <BestSellers />
      <LifestyleGallery />
      <Newsletter />
    </>
  );
}
