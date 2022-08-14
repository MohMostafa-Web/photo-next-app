import Hero from "../components/Hero";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";
import { slidesData } from "../data/slidesData";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <Hero
        heading="Captur Photography"
        paragraph="I capture moments in nature and keep them alive."
      />
      {/* Slider Section */}
      <Slider slides={slidesData} />
      {/* Instagram Section */}
      <Instagram />
    </div>
  );
}
