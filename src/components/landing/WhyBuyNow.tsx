import { Clock, AlertTriangle, CheckCircle2 } from 'lucide-react';

const REASONS = [
  {
    icon: Clock,
    title: 'Start today, not next month',
    body: 'Your 30-day action planner gives you clear daily steps. The sooner you start, the sooner you learn what actually works.',
  },
  {
    icon: CheckCircle2,
    title: 'Everything locked in for ₹499',
    body: 'One-time payment with no monthly subscription. When the bonus pack updates, your access and value only grow.',
  },
  {
    icon: AlertTriangle,
    title: 'The cost of waiting',
    body: 'Every month you postpone is a month of lost customers, missed momentum, and another year of saying "someday".',
  },
];

export default function WhyBuyNow() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-8 sm:grid-cols-3">
          {REASONS.map((item) => (
            <div key={item.title} className="rounded-2xl border border-ink-700/80 bg-ink-950/60 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-semibold text-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-300">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}