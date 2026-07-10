import Featured from "@/components/home/Featured/Featured";
import HeroSlider from "@/components/shared/HeroSlider";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <HeroSlider />
      <Featured/>
    </div>
  );
}
