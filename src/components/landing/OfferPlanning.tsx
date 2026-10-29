import { ClipboardCheck, ShoppingCart } from 'lucide-react';
import { SectionHeading } from '@/components/landing/ProblemSection';

const STEPS = [
  { title: 'Define the intended customer', desc: 'Describe who the product is for and why they care.' },
  { title: 'Identify the problem addressed', desc: 'State the problem in the customer’s own words, not your solution.' },
  { title: 'Plan product contents or specifications', desc: 'List the concrete deliverables a buyer actually receives.' },
  { title: 'Decide how it will be delivered', desc: 'Choose delivery method and format (download, link, physical dispatch, or service).' },
  { title: 'Estimate production and operating costs', desc: 'Include build time, platform fees, payment fees, packaging, shipping, returns, and support.' },
  { title: 'Research alternatives and competitor pricing', desc: 'Check what similar offers charge; do not copy, compare honestly.' },
  { title: 'Choose a price to test', desc: 'Pick a single price to validate, with a clear refund and support policy.' },
  { title: 'Prepare product messaging and a landing page', desc: 'Write one clear value claim and map it to your page structure.' },
];

export default function OfferPlanning() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="From idea to offer"
          title="Turn Your Idea"
          accent="Into an Offer"
          subtitle="Work through a practical sequence from a chosen idea to a prepared offer, using guided prompts and worksheets."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li
              key={step.title}
              className="relative rounded-2xl border border-ink-700/80 bg-ink-950/60 p-5"
            >
              <span
                aria-hidden="true"
                className="text-xs font-extrabold text-brand-400/90"
              >
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-base font-semibold text-white">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-ink-300">{step.desc}</p>
            </li>
          ))}
        </ol>

        <div className="mt-10 grid gap-4 rounded-xl border border-ink-700/80 bg-ink-950/60 p-5 sm:grid-cols-2">
          <div className="flex items-start gap-3">
            <ShoppingCart className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink-200">
              <span className="font-semibold text-white">Physical products:</span> account for
              product cost, packaging, shipping, payment fees, returns, and other direct
              expenses alongside inventory and sourcing effort.
            </p>
          </div>
          <div className="flex items-start gap-3">
            <ClipboardCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
            <p className="text-sm leading-relaxed text-ink-200">
              <span className="font-semibold text-white">Digital products:</span> account for
              production time, platform or hosting fees, delivery cost, and customer support
              alongside the value you create.
            </p>
          </div>
        </div>

        <p className="mt-6 text-xs text-ink-400">
          The toolkit helps you <strong className="font-medium text-ink-300">plan</strong> your
          offer and pricing with guided prompts and worksheets — it does not auto-calculate
          profit. No price or cost estimate here is a guarantee of success.
        </p>
      </div>
    </section>
  );
}
