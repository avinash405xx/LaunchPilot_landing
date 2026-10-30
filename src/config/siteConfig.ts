// Public business settings only. Secret keys (payment, server APIs) belong in server-side environment variables, never here.

export type BonusStatus = 'ready' | 'prompt-based' | 'in-development';

export const siteConfig = {
  brandName: 'LaunchPilot',
  productName: 'The Complete Online Business Playbook',
  productDescription:
    'A practical beginner guide to exploring digital business ideas, choosing a direction, creating a first offer, and learning to launch and market it step by step.',

  price: 499,
  // Strike-through comparison price. Only show it if the product was genuinely sold at this price; set to null to hide it.
  referencePrice: null,
  currency: 'INR',
  currencySymbol: '₹',

  whatsappNumber: '918797391885',
  whatsappDisplay: '+91-8797391885',

  // Hosted payment page (SuperProfile). Purchase CTAs open it in a new tab.
  // Leave empty to fall back to the built-in /checkout page.
  checkoutUrl: 'https://superprofile.bio/vp/launchpilot-%E2%80%93-complete-online-business-starter-toolkit',

  analytics: {
    metaPixelId: '1679738466427185',
    clarityProjectId: 'z5cupx4cdk',
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

  // --- Bonus pricing treatment (rendered on "ready" / "prompt-based" cards only) ---
  //
  // PRICE-ACCURACY FLAG:
  // The values in `bonusProposedValues` are PROPOSED reference values supplied for display
  // only. They are NOT verified former selling prices and must NOT be advertised as genuine
  // savings or former resale prices until each is substantiated by the product team.
  // The only historical price on record is the main product `referencePrice` (₹1,499); that
  // is the MAIN product's price and is NOT a bonus's standalone resale value — do NOT reuse it.
  // TODO(price-accuracy): confirm the genuine standalone value of each bonus.
  bonusPricesStatus: 'proposed-pending-confirmation' as 'proposed-pending-confirmation' | 'verified',
  // Proposed original (strike-through) value for each bonus, per bonus key. Shown ONLY on
  // bonuses that are genuinely complete and included ("ready" or "prompt-based"). In-
  // development bonuses are never shown with a price. Edit a number here to update a bonus.
  bonusProposedValues: {
    aiBusinessCoach: 1497,
    landingPagePromptKit: 1997,
    metaAdsLaunchKit: 1497,
    actionPlanner: 997,
    aiPromptCollection: 1297, // not displayed: Bonus 5 is incomplete (not included)
    businessIdeasLibrary: 1997, // not displayed: Bonus 6 is a framework only (not included)
  },
  // Offer price shown on each included bonus card. 0 means the bonus ships with the
  // purchase at no extra cost (it does NOT make the main LaunchPilot product free).
  bonusOfferPrice: 0,
};

export const whatsappUrl = `https://wa.me/${siteConfig.whatsappNumber}`;

export const discountPercent = siteConfig.referencePrice
  ? Math.round((1 - siteConfig.price / siteConfig.referencePrice) * 100)
  : null;

export function formatPrice(amount: number) {
  return `${siteConfig.currencySymbol}${amount.toLocaleString('en-IN')}`;
}
