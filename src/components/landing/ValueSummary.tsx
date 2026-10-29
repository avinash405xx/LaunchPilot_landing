import { CheckCircle2, Lock } from 'lucide-react';
import { SectionHeading } from '@/components/landing/ProblemSection';

const ITEMS = [
  'Business idea exploration',
  'Product and offer planning',
  'Landing page prompts',
  'Marketing preparation',
  'Action planning',
  'Practical templates and checklists',
];

export default function ValueSummary() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="What you receive"
          title="One Toolkit."
          accent="A Clearer Starting Point."
          subtitle="Explore business ideas, compare opportunities, plan your product, organise your offer, create your landing page, and prepare your marketing workflow using the practical resources included with LaunchPilot."
        />

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ITEMS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm text-ink-200">
              <CheckCircle2
                className="mt-0.5 h-5 w-5 shrink-0 text-success-400"
                aria-hidden="true"
              />
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-10 flex items-start gap-3 rounded-xl border border-ink-700/80 bg-ink-950/60 p-5">
          <Lock className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-ink-200">
            LaunchPilot is an educational toolkit: prompts, worksheets, templates, and
            checklists you work through yourself. It does <strong className="font-medium">not</strong>{' '}
            include a working AI app, an automated business finder, a live ad manager, or a
            fully built e-commerce system.
          </p>
        </div>
      </div>
    </section>
  );
}
