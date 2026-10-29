import { CheckCircle2, Clock } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';
import type { BonusStatus } from '@/config/siteConfig';
import { SectionHeading } from '@/components/landing/ProblemSection';

type Bonus = {
  number: number;
  image: string;
  title: string;
  headline: string;
  body: string;
  includes: string[];
  status: BonusStatus;
};

const BONUSES: Bonus[] = [
  {
    number: 1,
    image: '/bonuses/bonus-ai-coach.webp',
    title: 'AI Business Coach Prompt Kit',
    headline: 'Find Your Direction',
    body: 'Explore business ideas and organise your next steps with prompts you use in your own AI assistant, tailored to your interests, skills, and goals.',
    includes: ['Personal profile sheet', '8 step-by-step coaching prompts', 'Idea scoring table', 'Beginner-friendly instructions'],
    status: siteConfig.bonuses.aiBusinessCoach,
  },
  {
    number: 2,
    image: '/bonuses/bonus-landing-page.webp',
    title: 'Landing Page Builder Prompt Kit',
    headline: 'Bring Your Idea Online',
    body: 'Use structured prompts to plan your website, write clear copy, organise your sections, and create a professional online presence.',
    includes: ['13 guided prompts', 'Business planning worksheet', 'Responsive layout and checkout prompts', 'Go-live checklist'],
    status: siteConfig.bonuses.landingPagePromptKit,
  },
  {
    number: 3,
    image: '/bonuses/bonus-ads-kit.webp',
    title: 'Meta Ads Launch Kit',
    headline: 'Learn to Reach Your Audience',
    body: 'Explore campaign planning, creative preparation, audience research, tracking, and optimisation with a beginner-friendly advertising guide.',
    includes: ['Facebook Page and Instagram set-up checklist', 'Campaign planning guide', 'Creative testing ideas', 'Tracking and optimisation steps'],
    status: siteConfig.bonuses.metaAdsLaunchKit,
  },
  {
    number: 4,
    image: '/bonuses/bonus-planner.webp',
    title: '30-Day Business Action Planner',
    headline: 'Turn Goals Into Daily Actions',
    body: 'Follow a structured 30-day plan to organise your priorities, work through key tasks, and build consistent momentum.',
    includes: ['Daily action steps', 'Weekly milestones', 'Customer validation tasks', 'Progress tracker and weekly reviews'],
    status: siteConfig.bonuses.actionPlanner,
  },
  {
    number: 5,
    image: '/bonuses/bonus-prompt-collection.webp',
    title: 'AI Prompt Collection',
    headline: 'Make AI Part of Your Workflow',
    body: 'Practical prompts to explore ideas, plan your offer, develop content, and organise your digital business workflow.',
    includes: ['Idea and niche research prompts', 'Content creation prompts', 'Marketing and growth prompts'],
    status: siteConfig.bonuses.aiPromptCollection,
  },
  {
    number: 6,
    image: '/bonuses/bonus-ideas-library.webp',
    title: 'Digital Business Ideas Library',
    headline: 'Explore New Possibilities',
    body: 'Discover different digital business models and identify opportunities that fit your interests, skills, and goals.',
    includes: ['Ideas organised by category', 'Skills, tools and first steps for each idea', 'Validation and monetisation notes'],
    status: siteConfig.bonuses.businessIdeasLibrary,
  },
];

const STATUS_LABEL: Record<BonusStatus, { text: string; className: string }> = {
  ready: { text: 'Included', className: 'bg-success-900 text-success-300' },
  'prompt-based': { text: 'Included: prompt kit', className: 'bg-success-900 text-success-300' },
  'in-development': { text: 'In development', className: 'bg-ink-800 text-ink-300' },
};

function BonusCard({ number, image, title, headline, body, includes, status }: Bonus) {
  const label = STATUS_LABEL[status];
  const available = status !== 'in-development';
  const ItemIcon = available ? CheckCircle2 : Clock;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-accent-900/60 via-ink-900 to-ink-950 transition-all duration-300 hover:-translate-y-1 hover:shadow-violet ${
        available ? 'border-brand-400/30 hover:border-brand-400/70' : 'border-dashed border-ink-600'
      }`}
    >
      <div className="relative aspect-[720/402] overflow-hidden">
        <img
          src={image}
          alt=""
          width={720}
          height={402}
          loading="lazy"
          decoding="async"
          className={`h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 ${available ? '' : 'opacity-60 saturate-50'}`}
        />
        <span className="absolute left-3 top-3 rounded-full bg-brand-400 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-ink-950 shadow-glow">
          Bonus {number}
        </span>
        <span className={`absolute right-3 top-3 rounded-full px-2.5 py-1 text-[11px] font-semibold ${label.className}`}>{label.text}</span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-tight text-white">{title}</h3>
        <p className="mt-1 text-sm font-semibold text-brand-400">{headline}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink-300">{body}</p>
        <div className="mt-auto pt-4">
          {!available && (
            <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">Planned contents</p>
          )}
          <ul className="mt-2 space-y-1.5 text-sm text-ink-100">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <ItemIcon className={`mt-0.5 h-4 w-4 shrink-0 ${available ? 'text-brand-400' : 'text-ink-400'}`} aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}

export default function ToolkitSection() {
  return (
    <section className="relative overflow-hidden border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-[640px] max-w-full -translate-x-1/2 rounded-full bg-accent-500/20 blur-3xl" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Bonuses"
          title="Your Complete"
          accent="Digital Business Toolkit"
          subtitle="Practical resources to help you explore ideas, organise your plans, create your online presence, and take your next steps."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {BONUSES.map((bonus) => (
            <BonusCard key={bonus.number} {...bonus} />
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-ink-400">
          Illustrations are representative. Bonuses are educational resources and do not guarantee results. The AI Business Coach is a prompt kit you use with an AI assistant of your choice; it is not a live chatbot. Items marked "In development" are not included yet.
        </p>
      </div>
    </section>
  );
}
