# LaunchPilot Landing Page

A single-product sales funnel for **The Complete Online Business Playbook** (LaunchPilot eBook).

Funnel: Landing page -> Checkout -> Thank you page.

---

## 1. Setup you must complete

| What | Where | Status |
| --- | --- | --- |
All public business settings live in `src/config/siteConfig.ts`. Never put secret keys there.

| What | Key in `siteConfig` | Status |
| --- | --- | --- |
| Meta Pixel ID | `analytics.metaPixelId` | Empty (tracking off) |
| Microsoft Clarity project ID | `analytics.clarityProjectId` | Empty (tracking off) |
| WhatsApp support number | `whatsappNumber`, `whatsappDisplay` | Set to +91-8797391885 |
| Price | `price` | Rs 499 |
| Reference (strike-through) price | `referencePrice` | null (no comparison price shown). Set a value only if the product was genuinely sold at this price before |
| Hosted checkout page | `checkoutUrl` | SuperProfile link. Purchase CTAs open it in a new tab. Leave empty to use the built-in `/checkout` page |
| Bonus status labels | `bonuses.*` (`ready`, `prompt-based`, `in-development`) | See section 3 |
| SEO | `seo.*` | Canonical URL and share image not set |
| Payment gateway | SuperProfile | Purchase CTA opens the SuperProfile payment page in a new tab |

Leaving an ID empty disables that tracker completely. No script is loaded.

---

## 2. Pages and routing

Routing is handled by a small built-in helper (`src/lib/router.ts`). No routing library is installed.

| Path | Page | Purpose |
| --- | --- | --- |
| `/` | Landing page | Sells the eBook |
| `/checkout` | Checkout | Order summary. The primary button opens the SuperProfile payment page in a new tab; a WhatsApp option is also available |
| `/thank-you` | Thank you | Thanks message and WhatsApp support link. It does not confirm a purchase |

Any unknown path shows the landing page.

### CTA behaviour

Every CTA button (`src/components/landing/CtaButton.tsx`) does two things on click:

1. Sends a Meta Pixel `InitiateCheckout` event with value, currency, and product name.
2. If `siteConfig.checkoutUrl` is set, opens it in a new tab (SuperProfile); otherwise navigates to `/checkout`.

Each CTA also sends the same event name to Microsoft Clarity as a custom event.

### Tracking events

| Event | When it fires |
| --- | --- |
| `PageView` (Meta Pixel) | Every time a page loads or the route changes |
| `InitiateCheckout` (Meta Pixel + Clarity) | Any "GET THE EBOOK + BONUSES" click |

Not yet implemented: `Purchase`. It should fire on the thank-you page only after a real payment is confirmed.

---

## 3. Landing page structure

Sections appear in this order (`src/pages/LandingPage.tsx`):

1. **Header and Hero** (`SiteHeader.tsx`, `Hero.tsx`): compact header (logo, WhatsApp support, "GET THE EBOOK + BONUSES"; no navigation bar), the "From Business Idea to Your First Online Offer." headline, supporting headline, description, price, the purple eBook cover with three floating cards, and a trust strip.
2. **Business Journey** (`BusinessJourney.tsx`): six-stage roadmap from niche selection to launch-and-improve.
3. **Problem** (`ProblemSection.tsx`): "Sounds familiar?" pain points.
4. **Solution / Features** (`ProblemSection.tsx`): "Meet LaunchPilot" four benefit cards.
5. **Framework** (`ProblemSection.tsx`): four-step Choose, Validate, Build, Launch.
6. **Product models** (`ProductModels.tsx`): digital vs physical business types.
7. **Niche selection** (`NicheSelection.tsx`): scorecard and filterable spreadsheet workflow.
8. **Offer planning** (`OfferPlanning.tsx`): turning an idea into a priced offer.
9. **Marketing workflow** (`MarketingWorkflow.tsx`): landing-page and Meta Ads preparation.
10. **Offer** (`OfferSection.tsx`): benefit checklist, launch roadmap, pricing card.
11. **Your Complete Digital Business Toolkit** (`ToolkitSection.tsx`): six bonus cards with illustrations from `public/bonuses/`. Each card's badge comes from `siteConfig.bonuses`; included cards show a transparent "FREE / Included with your purchase / ₹0 extra" treatment, and in-development cards list "Planned contents".
12. **Value summary** (`ValueSummary.tsx`): checklist of verified contents.
13. **WhatsApp support strip** (`SupportAndFaq.tsx`).
14. **FAQ and final CTA** (`SupportAndFaq.tsx`): six expandable questions and the "Your Future Is Built One Step at a Time" closing card.
15. **Footer** (`SiteFooter.tsx`).

All copy lives inside these component files. To change wording, edit the text in the relevant file.

Not included: testimonials and countdown timers. Add testimonials only with real customer permission.

Bonus content lives in `resources/` (see `resources/00-inventory.md`). These files are deliberately not in `public/`, so they cannot be downloaded without paying. They need a delivery step after confirmed payment.

---

## 4. Design system

Tailwind tokens are defined in `tailwind.config.js`. Use these names in class names (for example `text-brand-400`, `bg-ink-950`).

### Colour ramps

| Token | Role | Shades |
| --- | --- | --- |
| `ink` | Neutral navy backgrounds and text | 50 `#F5F7FC`, 100 `#E4E8F5`, 200 `#C9D0E8`, 300 `#A3ADD0`, 400 `#7782B0`, 500 `#4B5690`, 600 `#323C74`, 700 `#22295A`, 800 `#141A40`, 900 `#0C1030`, 950 `#070A1F` |
| `brand` | Primary accent (yellow-amber): CTAs, highlights, headings | 200 `#FFE98A`, 300 `#FFD84D`, 400 `#FFC21F`, 500 `#F5A524`, 600 `#D97706` |
| `accent` | Violet glow and feature glow behind the hero and offer card | 300 `#C4B5FD`, 400 `#A78BFA`, 500 `#7C3AED`, 900 `#2E1065` |
| `success` | Checkmarks and success states | 300 `#86EFAC`, 400 `#4ADE80`, 500 `#16A34A`, 900 `#052E16` |
| `whatsapp` | WhatsApp support strip and buttons | 400 `#34E07A`, 500 `#25D366`, 900 `#0B3B2A` |
| `error` | "Limited time offer" badge | 300 `#FCA5A5`, 500 `#DC2626` |

### Typography

- Font: Plus Jakarta Sans (weights 400, 600, 800), loaded in `index.html`.
- Headings: line height about 120%. Body: about 150%.

### Spacing and layout

- Spacing follows an 8px rhythm using Tailwind's default scale.
- Content width is capped at `max-w-6xl`. Layouts stack on mobile and split into columns from `md` / `lg` breakpoints.

### Shadows and motion

- `cta-pulse` (in `src/index.css`): continuous gold glow and 2% pulse on every primary CTA, 2.2s cycle. Turned off for visitors who prefer reduced motion. Applied automatically by `CtaButton` (primary and compact variants), so the header, hero and closing CTAs all pulse.
- `shadow-glow` and `shadow-glow-lg`: yellow glow on buttons and icons.
- `shadow-violet`: violet glow on the pricing card.
- `shadow-card`: soft dark shadow on cards.
- `animate-fade-up` and `animate-float`: hero entrance and gentle floating of the eBook cover.

Note: the colours above are close visual matches to the reference screenshot, estimated by eye. Fine-tune any token in `tailwind.config.js`; every component picks up the change automatically.

---

## 5. Assets

- `public/playbook-cover-purple.webp`: eBook cover mockup used in the hero (purple cover, gold title). It is a generated stand-in. Replace it with the original cover, keeping the same name or updating the path in `Hero.tsx`.
- `public/bonuses/*.webp` (720x402): AI-generated, representative illustrations for the six bonus cards. They contain no third-party logos and are not screenshots of the actual files.

---

## 6. Project layout

```
src/
  App.tsx                       Routes and page-view tracking
  config/
    siteConfig.ts               Price, product, WhatsApp, checkout URL, tracking IDs, SEO, bonus status
  lib/
    analytics.ts                Loads trackers, sends events
    router.ts                   Navigation helper and current-path hook
  pages/
    LandingPage.tsx
    CheckoutPage.tsx
    ThankYouPage.tsx
  components/landing/
    BrandLogo.tsx               Rocket mark + brand name (header and footer)
    SiteHeader.tsx              Compact landing header
    CtaButton.tsx               Shared CTA; fires InitiateCheckout, goes to checkout
    ToolkitSection.tsx          Bonus cards
    Hero.tsx
    ProblemSection.tsx
    OfferSection.tsx
    SupportAndFaq.tsx
    SiteFooter.tsx
```

---

## 7. Open items

1. Provide the Meta Pixel ID and Clarity project ID to enable tracking.
2. Connect a payment provider so checkout can take payment. Until then the checkout button is disabled and buyers are sent to WhatsApp.
3. Once payment is live, fire `Purchase` only after a confirmed payment.
4. Bonus 5 (AI Prompt Collection) and Bonus 6 (Digital Business Ideas Library) are not written yet and show as "In development". Do not advertise "100+ prompts" or "1,000+ ideas" until they exist and are counted.
5. Build paid delivery for the files in `resources/` (needs confirmed payment first).
6. Add real testimonials or proof only with real customer permission and data.
7. Replace the placeholder eBook cover with the original approved mockup.
8. ~~Confirm the Rs 1,499 reference price is genuine, or set `referencePrice` to `null`.~~ Resolved: `referencePrice` is now `null` to avoid showing an unverified comparison price or discount.
