// Public business settings only. Secret keys (payment, server APIs) belong in server-side environment variables, never here.

export type BonusStatus = 'ready' | 'prompt-based' | 'in-development';

export const siteConfig = {
  brandName: 'LaunchPilot',
  productName: 'The Complete Online Business Playbook',
  productDescription:
    'A practical beginner guide to exploring digital business ideas, choosing a direction, creating a first offer, and learning to launch and market it step by step.',

  price: 499,
  // Strike-through comparison price. Only show it if the product was genuinely sold at this price; set to null to hide it.
  referencePrice: 1499 as number | null,
  currency: 'INR',
  currencySymbol: '₹',

  whatsappNumber: '918797391885',
  whatsappDisplay: '+91-8797391885',

  // Hosted PhonePe (or other provider) payment page. Leave empty to use the built-in /checkout page.
  checkoutUrl: '',

  analytics: {
    metaPixelId: '',
    clarityProjectId: '',
  },

  seo: {
    title: 'LaunchPilot | The Complete Online Business Playbook',
    description:
      'A practical beginner guide plus bonus toolkit to explore digital business ideas, validate demand, create your first offer, and learn to launch and market it.',
    canonicalUrl: '',
    shareImage: '',
  },

  bonuses: {
    aiBusinessCoach: 'prompt-based' as BonusStatus,
    landingPagePromptKit: 'ready' as BonusStatus,
    metaAdsLaunchKit: 'ready' as BonusStatus,
    actionPlanner: 'ready' as BonusStatus,
    aiPromptCollection: 'in-development' as BonusStatus,
    businessIdeasLibrary: 'in-development' as BonusStatus,
  },
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const discountPercent = siteConfig.referencePrice
  ? Math.round((1 - siteConfig.price / siteConfig.referencePrice) * 100)
  : null;

export function formatPrice(amount: number) {
  return `${siteConfig.currencySymbol}${amount.toLocaleString('en-IN')}`;
}
