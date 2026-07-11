import Featured from "@/components/home/Featured/Featured";
import Faq from "@/components/home/FAQ/Faq";
import HeroSlider from "@/components/shared/HeroSlider";
import Categories from "@/components/home/Categories/Categories";
import Testimonials from "@/components/home/Tesimonials/Testimonials";
import Statistics from "@/components/home/Statistics/Statistics";
import Brands from "@/components/home/Brands/Brands";
import CallToAction from "@/components/shared/CallToAction";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Featured />
      <Categories/>
      <Testimonials/>
      <Statistics/>
      <Brands/>
      <CallToAction/>
      <Faq />
    </div>
  );
}
