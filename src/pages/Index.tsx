import CustomCursor from '@/components/CustomCursor';
import GalaxyBackground from '@/components/GalaxyBackground';
import FloatingMemes from '@/components/FloatingMemes';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import EcosystemSection from '@/components/EcosystemSection';
import RoadmapSection from '@/components/RoadmapSection';
import MemeGalaxySection from '@/components/MemeGalaxySection';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background overflow-x-hidden">
      {/* Navigation Bar */}
      <Navbar />

      {/* Custom Cursor */}
      <CustomCursor />

      {/* Background Effects */}
      <GalaxyBackground />

      {/* Floating Meme Icons */}
      <FloatingMemes />

      {/* Main Content */}
      <main className="relative z-10 pt-20"> {/* Added pt-20 to account for fixed navbar */}
        <HeroSection />
        <AboutSection />
        <EcosystemSection />
        <RoadmapSection />
        <MemeGalaxySection />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
