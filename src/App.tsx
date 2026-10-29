import { lazy, Suspense, useEffect } from 'react';
import type { ComponentType } from 'react';
import { initAnalytics, trackPageView } from '@/lib/analytics';
import { usePathname } from '@/lib/router';
import LandingPage from '@/pages/LandingPage';

// Non-landing routes are code-split so their JS (icons, etc.) is never loaded on
// the landing page. LandingPage stays eagerly imported for instant first render.
const CheckoutPage = lazy(() => import('@/pages/CheckoutPage'));
const ThankYouPage = lazy(() => import('@/pages/ThankYouPage'));

const ROUTES: Record<string, ComponentType> = {
  '/': LandingPage,
  '/checkout': CheckoutPage,
  '/thank-you': ThankYouPage,
};

function PageLoader() {
  return (
    <div className="flex h-[60vh] w-full items-center justify-center">
      <span
        className="h-6 w-6 animate-spin rounded-full border-2 border-ink-700 border-t-brand-400"
        aria-label="Loading"
      />
    </div>
  );
}

export default function App() {
  const pathname = usePathname();

  useEffect(() => {
    initAnalytics();
  }, []);

  useEffect(() => {
    trackPageView();
  }, [pathname]);

  const Page = ROUTES[pathname] ?? LandingPage;
  return (
    <Suspense fallback={<PageLoader />}>
      <Page />
    </Suspense>
  );
}
