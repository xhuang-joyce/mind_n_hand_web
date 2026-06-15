import HeroSection from '@/components/HeroSection';
import DiscoverSection from '@/components/DiscoverSection';
import StagesSection from '@/components/StagesSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import AboutSection from '@/components/AboutSection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <DiscoverSection />
      <StagesSection />
      <HowItWorksSection />
      <AboutSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
