import { siteConfig } from '@/config/siteConfig';

const { metaPixelId: META_PIXEL_ID, clarityProjectId: CLARITY_PROJECT_ID } = siteConfig.analytics;

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: unknown;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] };
  }
}

let initialized = false;

function loadMetaPixel(pixelId: string) {
  if (window.fbq) return;
  const fbq = function (...args: unknown[]) {
    if (fbq.callMethod) {
      fbq.callMethod(...args);
    } else {
      fbq.queue.push(args);
    }
  } as FbqFn;
  fbq.queue = [];
  fbq.loaded = true;
  fbq.version = '2.0';
  fbq.push = fbq;
  window.fbq = fbq;
  window._fbq = fbq;

  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  document.head.appendChild(script);

  window.fbq('init', pixelId);
}

function loadClarity(projectId: string) {
  if (window.clarity) return;
  const clarity = Object.assign((...args: unknown[]) => {
    clarity.q.push(args);
  }, { q: [] as unknown[][] });
  window.clarity = clarity;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.clarity.ms/tag/${projectId}`;
  document.head.appendChild(script);
}

export function initAnalytics() {
  if (initialized) return;
  initialized = true;
  if (META_PIXEL_ID) {
    loadMetaPixel(META_PIXEL_ID);
    window.fbq?.('track', 'PageView');
  }
  if (CLARITY_PROJECT_ID) {
    loadClarity(CLARITY_PROJECT_ID);
  }
}

export function trackPageView() {
  window.fbq?.('track', 'PageView');
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (params) {
    window.fbq?.('track', name, params);
  } else {
    window.fbq?.('track', name);
  }
  window.clarity?.('event', name);
}
