import { useEffect } from 'react';
import type { ComponentType } from 'react';
import { initAnalytics, trackPageView } from '@/lib/analytics';
import { usePathname } from '@/lib/router';
import LandingPage from '@/pages/LandingPage';
import CheckoutPage from '@/pages/CheckoutPage';
import ThankYouPage from '@/pages/ThankYouPage';

const ROUTES: Record<string, ComponentType> = {
  '/': LandingPage,
  '/checkout': CheckoutPage,
  '/thank-you': ThankYouPage,
};

export default function App() {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  const Page = ROUTES[pathname] ?? LandingPage;
  return <Page />;
}
