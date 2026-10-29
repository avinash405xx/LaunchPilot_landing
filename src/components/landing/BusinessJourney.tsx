import { Compass, Layout, Megaphone, Package, Target, TrendingUp } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/landing/ProblemSection';

type Stage = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const STAGES: Stage[] = [
  {
    icon: Compass,
    title: 'Find Your Niche',
    description:
      'Explore business categories, audience needs, and potential opportunities that match your interests and capabilities.',
  },
  {
    icon: Target,
    title: 'Choose Your Product',
    description:
      'Compare possible products and offers, research the target customer, and decide what you want to test.',
  },
  {
    icon: Package,
    title: 'Build Your Offer',
    description:
      'Organise your product idea, identify its benefits, and plan a clear offer and pricing structure.',
  },
  {
    icon: Layout,
    title: 'Create Your Landing Page',
    description:
      'Plan the page structure, communicate your offer, write persuasive copy, and create a clear call to action.',
  },
  {
    icon: Megaphone,
    title: 'Prepare Your Marketing',
    description:
      'Develop creative concepts, identify the intended audience, and prepare a marketing campaign.',
  },
  {
    icon: TrendingUp,
    title: 'Launch, Measure and Improve',
    description:
      'Learn to review campaign performance, understand available metrics, and identify opportunities to improve your approach.',
  },
];

export default function BusinessJourney() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Your business journey"
          title="Your Business Journey,"
          accent="Step by Step"
          subtitle="Move from exploring an idea to preparing an offer and learning how to reach your audience, with practical resources for each stage."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage, index) => {
            const Icon = stage.icon;
            return (
              <li
                key={stage.title}
                className="relative rounded-2xl border border-ink-700/80 bg-ink-950/60 p-6 transition-colors duration-200 hover:border-brand-400/40"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-accent-300">
                      Stage {index + 1}
                    </span>
                    <h3 className="mt-1 text-lg font-semibold text-white">{stage.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ink-300">{stage.description}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        <p className="mt-10 text-center text-xs text-ink-400">
          Each stage is backed by worksheets, scoring tables, and prompts in the
          LaunchPilot resource kit — practical guides, not automated software.
        </p>
      </div>
    </section>
  );
}
