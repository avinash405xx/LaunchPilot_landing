import Hero from '@/components/landing/Hero';
import OfferSection from '@/components/landing/OfferSection';
import ProblemSection from '@/components/landing/ProblemSection';
import SiteFooter from '@/components/landing/SiteFooter';
import { FaqAndFinalCta, SupportStrip } from '@/components/landing/SupportAndFaq';
import ToolkitSection from '@/components/landing/ToolkitSection';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <ProblemSection />
      <OfferSection />
      <ToolkitSection />
      <SupportStrip />
      <FaqAndFinalCta />
      <SiteFooter />
    </main>
  );
}
