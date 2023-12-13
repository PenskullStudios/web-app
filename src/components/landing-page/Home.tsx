import HeroSection from "./HeroSection";
import ProductSection from "./ProductSection";
import InternetPlans from "./InternetPlans";
import Bundles from "./Bundles";
import Accessories from "./Accessories";
import Faqs from "./Faqs";
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";

export default function Home() {
  return (
    <div className="bg-[#281549] text-white">
      <div className="bg-gradient-to-r from-custom-purple to-custom-pink h-5"></div>
      <HeroSection />
      <ProductSection />
      <InternetPlans />
      <Bundles />
      <Accessories />
      <Faqs />
      <AboutUs />
      <ContactUs />
      <div className="h-5 bg-black"></div>
    </div>
  );
}
