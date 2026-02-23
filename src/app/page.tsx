import FeatureCourse from "@/components/FeatureCourse";
import HeroSection from "@/components/HeroSection";
import StickySection from "@/components/StickySection";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
      <HeroSection/>
      <FeatureCourse/>
      <StickySection/>
    </main>
  );
}