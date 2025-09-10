import RMoneyHeader from '@/components/RMoneyHeader';
import LiveTicker from '@/components/LiveTicker';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CalculatorSection from '@/components/CalculatorSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FooterSection from '@/components/FooterSection';
import WhatsAppChatbot from '@/components/WhatsAppChatbot';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <RMoneyHeader />
      <LiveTicker />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CalculatorSection />
        <TestimonialsSection />
        <PricingSection />
      </main>
      <FooterSection />
      <WhatsAppChatbot />
    </div>
  );
};

export default Index;
