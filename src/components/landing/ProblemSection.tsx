import { Compass, Brain, Cog, MessageCircle, Layers, Lightbulb, HelpCircle, ArrowRight } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Card = { icon: LucideIcon; title: string; body: string };

const PROBLEMS: Card[] = [
  { icon: Layers, title: 'Too many options', body: 'Freelancing, digital products, services, and more. Choosing a starting point can feel overwhelming.' },
  { icon: Lightbulb, title: 'Scattered information', body: 'You keep learning from different sources, but still need a practical plan to follow.' },
  { icon: HelpCircle, title: 'Fear of getting it wrong', body: 'You want to make thoughtful decisions before committing your time and money.' },
];

const FEATURES: Card[] = [
  { icon: Compass, title: 'Find your direction', body: 'Explore beginner-friendly online business models that match your skills and interests.' },
  { icon: Brain, title: 'AI-guided next steps', body: 'Use AI planning prompts to organise your ideas and decide what to do next.' },
  { icon: Cog, title: 'Practical action plan', body: 'Turn ideas into a simple roadmap with clear steps, checklists, and launch tasks.' },
  { icon: MessageCircle, title: 'WhatsApp support', body: 'Send your questions about the guide to our WhatsApp support number.' },
];

const STEPS = [
  { number: '01', title: 'Choose', body: 'Discover business models and niches that fit your situation.' },
  { number: '02', title: 'Validate', body: 'Research the audience, validate an idea, and compare competition easily.' },
  { number: '03', title: 'Build', body: 'Use the templates and AI prompts to prepare your first offer.' },
  { number: '04', title: 'Launch', body: 'Follow the checklist to publish your offer and learn from real feedback.' },
];

export function SectionHeading({ eyebrow, title, accent, subtitle }: { eyebrow: string; title: string; accent: string; subtitle?: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-extrabold leading-[1.2] text-white sm:text-4xl">
        {title} <span className="text-brand-400">{accent}</span>
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-300">{subtitle}</p>}
    </div>
  );
}

function IconCard({ icon: Icon, title, body }: Card) {
  return (
    <div className="group rounded-2xl border border-ink-700/80 bg-ink-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/60 hover:shadow-card">
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300 transition-colors duration-300 group-hover:bg-brand-400 group-hover:text-ink-950">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-300">{body}</p>
    </div>
  );
}

export default function ProblemSection() {
  return (
    <>
      <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Sounds familiar?" title="You Want to Start Online." accent="But Where Do You Begin?" subtitle="Too many options. Too much scattered information. Not enough clarity on what to do first." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROBLEMS.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="Meet LaunchPilot" title="Less Confusion." accent="More Purposeful Action." subtitle="Use one practical guide to explore options, validate an idea, and organise your first steps." />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map((item) => (
              <IconCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="A simple framework" title="From idea to launch." accent="One step at a time." />
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {STEPS.map((step, index) => (
              <li key={step.number} className="relative rounded-2xl border border-ink-700/80 bg-ink-950/60 p-6">
                <span className="text-3xl font-extrabold text-brand-400/90">{step.number}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-300">{step.body}</p>
                {index < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-4 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-brand-400/70 md:block" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
