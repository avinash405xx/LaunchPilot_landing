import Hero from '@/components/landing/Hero';
import OfferSection from '@/components/landing/OfferSection';
import ProblemSection from '@/components/landing/ProblemSection';
import BusinessJourney from '@/components/landing/BusinessJourney';
import ProductModels from '@/components/landing/ProductModels';
import NicheSelection from '@/components/landing/NicheSelection';
import OfferPlanning from '@/components/landing/OfferPlanning';
import MarketingWorkflow from '@/components/landing/MarketingWorkflow';
import ValueSummary from '@/components/landing/ValueSummary';
import SiteFooter from '@/components/landing/SiteFooter';
import { FaqAndFinalCta, SupportStrip } from '@/components/landing/SupportAndFaq';
import ToolkitSection from '@/components/landing/ToolkitSection';

export default function LandingPage() {
  return (
    <main>
      <Hero />
      <BusinessJourney />
      <ProblemSection />
      <ProductModels />
      <NicheSelection />
      <OfferPlanning />
      <MarketingWorkflow />
      <OfferSection />
      <ToolkitSection />
      <ValueSummary />
      <SupportStrip />
      <FaqAndFinalCta />
      <SiteFooter />
    </main>
  );
}
