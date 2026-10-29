import { Layout, Megaphone, Search, BarChart3, ClipboardCheck } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { SectionHeading } from '@/components/landing/ProblemSection';

type Item = { icon: LucideIcon; label: string };

const LANDING = [
  { icon: Layout, label: 'Plan the page structure and section order' },
  { icon: Megaphone, label: 'Write a headline and product copy' },
  { icon: Megaphone, label: 'Present the product and its benefits' },
  { icon: Megaphone, label: 'Place a clear call to action and checkout' },
  { icon: ClipboardCheck, label: 'Follow a go-live checklist' },
] satisfies Item[];

const MARKETING = [
  { icon: Search, label: 'Research the intended audience' },
  { icon: Megaphone, label: 'Develop creative concepts and copy variations' },
  { icon: Megaphone, label: 'Prepare a campaign plan and budget' },
  { icon: BarChart3, label: 'Set up tracking and review performance' },
  { icon: ClipboardCheck, label: 'Check advertising-policy compliance' },
] satisfies Item[];

function ItemList({ items, title }: { items: Item[]; title: string }) {
  return (
    <div className="rounded-2xl border border-ink-700/80 bg-ink-950/60 p-6">
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <ul className="mt-4 space-y-3 text-sm text-ink-200">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <li key={item.label} className="flex items-start gap-3">
              <Icon
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-400"
                aria-hidden="true"
              />
              {item.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function MarketingWorkflow() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Your marketing"
          title="Create Your Page."
          accent="Prepare Your Marketing."
          subtitle="Use structured prompts and checklists to move from a blank page to a planned campaign."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <ItemList items={LANDING} title="Landing page preparation" />
          <ItemList items={MARKETING} title="Meta Ads preparation" />
        </div>

        <p className="mt-10 text-xs text-ink-400">
          These are prompts, templates, and instructions you work through yourself — not a
          functioning landing-page builder and not automatic Meta Ads setup or campaign
          management. Meta changes its tools and policies often; always verify against the
          current Meta Business Help Centre before you act.
        </p>
      </div>
    </section>
  );
}
