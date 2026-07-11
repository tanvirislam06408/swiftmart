import Featured from "@/components/home/Featured/Featured";
import Faq from "@/components/home/FAQ/Faq";
import HeroSlider from "@/components/shared/HeroSlider";
import Image from "next/image";
import Categories from "@/components/home/Categories/Categories";
import Testimonials from "@/components/home/Tesimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Featured />
      <Categories/>
      <Testimonials/>
      <Faq />
    </div>
  );
}
