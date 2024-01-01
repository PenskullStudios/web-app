import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import BrandBuilding from "./BrandBuilding";
import Faqs from "./Faqs";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import MarketingSales from "./Marketing&Sales";
import ITServices from "./ITServices";

export default function Home() {
  return (
    <div className="bg-[#281549] text-white">
      <div className="bg-gradient-to-r from-custom-purple to-custom-pink h-5"></div>
      <HeroSection />
      <ProductSection />
      <BrandBuilding />
      <MarketingSales />
      <ITServices />
      <Faqs />
      <AboutUs />
      <ContactUs />
      <div className="h-5 bg-black"></div>
    </div>
  );
}
