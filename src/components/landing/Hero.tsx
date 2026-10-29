import {
  BookOpen,
  Bot,
  ClipboardCheck,
  CreditCard,
  FileText,
  Lock,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Target,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { discountPercent, formatPrice, siteConfig } from '@/config/siteConfig';
import CtaButton from '@/components/landing/CtaButton';
import SiteHeader from '@/components/landing/SiteHeader';

const FEATURES: { icon: LucideIcon; line1: string; line2: string }[] = [
  { icon: CreditCard, line1: 'One-Time', line2: 'Purchase' },
  { icon: ClipboardCheck, line1: 'Templates &', line2: 'Checklists' },
  { icon: Sparkles, line1: 'Beginner', line2: 'Friendly' },
  { icon: MessageCircle, line1: 'WhatsApp', line2: 'Support' },
];

const TRUST_POINTS: { icon: LucideIcon; line1: string; line2: string }[] = [
  { icon: Rocket, line1: 'Starter Toolkit', line2: 'for Beginners' },
  { icon: BookOpen, line1: 'Practical &', line2: 'Easy to Follow' },
  { icon: ClipboardCheck, line1: 'Worksheets &', line2: 'Checklists' },
  { icon: ShieldCheck, line1: 'Honest Guidance', line2: 'No Income Promises' },
];

const FLOATING_CARDS: { icon: LucideIcon; title: string; body: string; position: string; iconClass: string }[] = [
  {
    icon: Bot,
    title: 'AI Coach Prompts',
    body: 'Explore ideas and plan your next steps',
    position: 'left-0 top-4 sm:left-2',
    iconClass: 'bg-accent-500/25 text-accent-300',
  },
  {
    icon: Target,
    title: 'Clear Action Steps',
    body: 'Organise your next move',
    position: 'right-0 top-[38%] sm:right-0',
    iconClass: 'bg-brand-400/15 text-brand-300',
  },
  {
    icon: FileText,
    title: 'Practical Templates',
    body: 'Resources for your business journey',
    position: 'bottom-6 right-2 sm:right-6',
    iconClass: 'bg-brand-400/15 text-brand-300',
  },
];

function PriceBlock() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col leading-none">
        {siteConfig.referencePrice && (
          <span className="text-sm font-semibold text-ink-300 line-through">{formatPrice(siteConfig.referencePrice)}</span>
        )}
        <span className="mt-1 text-4xl font-extrabold text-white">{formatPrice(siteConfig.price)}</span>
      </div>
      {discountPercent && (
        <span className="flex h-14 w-14 flex-col items-center justify-center rounded-full bg-success-500 text-center text-xs font-extrabold leading-tight text-white shadow-card">
          {discountPercent}%
          <span>OFF</span>
        </span>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-[640px] w-[640px] rounded-full bg-accent-500/35 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-accent-900/60 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 h-64 w-64 rounded-full bg-accent-400/20 blur-3xl" aria-hidden="true" />

      <SiteHeader />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-10 pt-6 sm:px-8 md:pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div className="relative z-10 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/60 bg-ink-900/70 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-brand-300 sm:text-xs">
            <Rocket className="h-3.5 w-3.5" aria-hidden="true" />
            Your online business starting point
          </div>

          <h1 className="mt-6 text-[2.15rem] font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-[3.6rem]">
            Stop Guessing.
            <span className="block text-brand-400">Start Building</span>
            Your Online Business.
          </h1>

          <p className="mt-5 text-xl font-bold leading-snug text-white sm:text-2xl">
            Your Next Chapter <span className="text-brand-400">Starts Here.</span>
          </p>

          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-200">
            Explore digital business ideas, plan your next steps, create your online presence, and learn how to reach your audience with the LaunchPilot Digital Business Starter Toolkit.
          </p>

          <ul className="mt-6 grid max-w-xl grid-cols-2 gap-4 sm:grid-cols-4">
            {FEATURES.map(({ icon: Icon, line1, line2 }) => (
              <li key={line1} className="flex items-center gap-2.5 text-xs leading-tight text-ink-200 sm:text-sm">
                <Icon className="h-5 w-5 shrink-0 text-brand-400" aria-hidden="true" />
                <span>
                  {line1}
                  <span className="block">{line2}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <CtaButton>Get the eBook + Bonuses</CtaButton>
            <PriceBlock />
          </div>

          <p className="mt-5 flex items-center gap-2 text-sm text-ink-200">
            <Lock className="h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
            One-Time Payment <span className="text-ink-500" aria-hidden="true">&bull;</span> No Monthly Fees
          </p>
          <p className="mt-2 text-sm text-ink-300">Your digital business journey starts here.</p>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up-delayed lg:max-w-none">
          <div className="relative mx-auto aspect-[475/701] w-[72%] max-w-[360px]">
            <div className="pointer-events-none absolute inset-x-4 inset-y-8 rounded-full bg-accent-500/50 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-4 left-1/2 h-10 w-[85%] -translate-x-1/2 rounded-[100%] bg-brand-400/25 blur-2xl" aria-hidden="true" />
            <img
              src="/playbook-cover-purple.webp"
              alt={`${siteConfig.productName} eBook cover`}
              width={475}
              height={701}
              fetchPriority="high"
              decoding="async"
              className="relative h-full w-full object-contain drop-shadow-[0_30px_40px_rgba(0,0,0,0.6)] animate-float"
            />
          </div>

          {FLOATING_CARDS.map(({ icon: Icon, title, body, position, iconClass }) => (
            <div
              key={title}
              className={`absolute flex max-w-[11.5rem] items-center gap-3 rounded-2xl border border-accent-400/40 bg-ink-900/85 px-3 py-2.5 shadow-violet backdrop-blur sm:max-w-[14rem] sm:px-4 sm:py-3 ${position}`}
            >
              <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${iconClass}`}>
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
              <div>
                <p className="text-xs font-semibold text-white sm:text-sm">{title}</p>
                <p className="mt-0.5 text-[11px] leading-snug text-ink-300 sm:text-xs">{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-16 sm:px-8 lg:pb-20">
        <ul className="grid grid-cols-2 gap-x-4 gap-y-5 rounded-2xl border border-accent-400/25 bg-ink-900/60 px-5 py-5 backdrop-blur md:grid-cols-4 md:px-8">
          {TRUST_POINTS.map(({ icon: Icon, line1, line2 }) => (
            <li key={line1} className="flex items-center gap-3 text-xs leading-tight text-ink-200 sm:text-sm">
              <Icon className="h-6 w-6 shrink-0 text-brand-400" aria-hidden="true" />
              <span>
                {line1}
                <span className="block text-ink-300">{line2}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
