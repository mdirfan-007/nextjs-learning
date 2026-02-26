import FeatureCourse from "@/components/FeatureCourse";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructers from "@/components/Instructers";
import MovingCards from "@/components/MovingCards";
import StickySection from "@/components/StickySection";
import Webinar from "@/components/Webinar";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
     
      <HeroSection/>
      <FeatureCourse/>
      <StickySection/>
      <MovingCards/>
      <Webinar/>
      <Instructers/>
      <Footer/>
    </main>
  );
}