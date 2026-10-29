import { CheckCircle2, CreditCard, Sparkles, ClipboardCheck, ShieldAlert } from 'lucide-react';
import { discountPercent, formatPrice, siteConfig } from '@/config/siteConfig';
import CtaButton from '@/components/landing/CtaButton';

const BENEFITS = [
  'Beginner-friendly business model overview',
  'Idea research and validation checklist',
  'AI prompts for planning and brainstorming',
  'Launch checklist and step-by-step planner',
  'WhatsApp support for guide-related questions',
];

const ROADMAP = [
  'Find a business direction',
  'Understand your audience',
  'Validate the problem',
  'Shape your first offer',
  'Plan your launch',
  'Improve with feedback',
];

export default function OfferSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_1fr_0.95fr] lg:items-stretch">
        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">What you'll get</p>
          <h2 className="mt-3 text-3xl font-extrabold leading-[1.2] text-white sm:text-4xl">
            A guide you can <span className="text-brand-400">put into action.</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-300">
            Designed to help you move beyond endless research and start working towards a realistic goal.
          </p>
          <ul className="mt-6 space-y-3">
            {BENEFITS.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-sm text-ink-100">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success-400" aria-hidden="true" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <CtaButton variant="ghost">Get the eBook + Bonuses</CtaButton>
          </div>
        </div>

        <div className="rounded-3xl border border-ink-700 bg-ink-900/70 p-7 shadow-card transition-transform duration-300 hover:-translate-y-1">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Inside the playbook</p>
            <Sparkles className="h-4 w-4 text-brand-400" aria-hidden="true" />
          </div>
          <h3 className="mt-3 text-2xl font-bold text-white">Your launch roadmap</h3>
          <ol className="mt-6 space-y-2">
            {ROADMAP.map((step, index) => (
              <li
                key={step}
                className="flex items-center gap-4 rounded-xl border border-ink-700/70 bg-ink-950/60 px-4 py-3 transition-colors duration-200 hover:border-brand-400/50"
              >
                <span className="text-sm font-bold text-brand-400">{String(index + 1).padStart(2, '0')}</span>
                <span className="flex-1 text-sm text-ink-100">{step}</span>
                <CheckCircle2 className="h-4 w-4 text-success-400" aria-hidden="true" />
              </li>
            ))}
          </ol>
          <p className="mt-6 rounded-xl bg-ink-800/80 px-4 py-3 text-center text-xs font-medium text-brand-300">
            Learn the basics. Take the next step. Repeat.
          </p>
        </div>

        <div className="relative flex flex-col rounded-3xl border border-accent-400/40 bg-gradient-to-b from-ink-800 to-ink-950 p-7 shadow-violet">
          <span className="inline-flex w-fit rounded-full bg-error-500 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
            One-time purchase
          </span>
          <h3 className="mt-4 text-2xl font-extrabold leading-tight text-white">Your next step can be simple.</h3>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            Get the LaunchPilot eBook and begin working through your online business plan.
          </p>

          <div className="mt-6 flex items-end gap-3">
            {siteConfig.referencePrice && (
              <span className="text-base font-medium text-ink-400 line-through">
                {formatPrice(siteConfig.referencePrice)}
              </span>
            )}
            <span className="text-4xl font-extrabold text-white">
              {formatPrice(siteConfig.price)}
            </span>
            {discountPercent && (
              <span className="mb-1 rounded-full bg-brand-400 px-2.5 py-1 text-xs font-bold text-ink-950 shadow-glow">
                {discountPercent}% OFF
              </span>
            )}
          </div>

          <div className="mt-6">
            <CtaButton className="w-full">Get the eBook + Bonuses</CtaButton>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-ink-200">
            <li className="flex items-center gap-3"><CreditCard className="h-4 w-4 text-brand-400" aria-hidden="true" />One-time payment</li>
            <li className="flex items-center gap-3"><ClipboardCheck className="h-4 w-4 text-brand-400" aria-hidden="true" />Templates and checklists</li>
            <li className="flex items-center gap-3"><ShieldAlert className="h-4 w-4 text-brand-400" aria-hidden="true" />Educational guide. It does not guarantee earnings.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
