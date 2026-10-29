import { FileCheck, Filter, ListChecks } from 'lucide-react';
import { SectionHeading } from '@/components/landing/ProblemSection';

const CRITERIA = [
  'Personal interests and skills',
  'Target customer',
  'Problem being addressed',
  'Existing alternatives and competitors',
  'Evidence of customer demand',
  'Estimated product and operating costs',
  'Potential pricing structure',
  'Delivery or fulfilment requirements',
  'Marketing suitability',
  'Risks and validation steps',
];

const CSV_COLUMNS = [
  'category',
  'business_model',
  'target_customer',
  'skills_required',
  'startup_cost_level',
  'demand_validation_approach',
  'first_offer_concept',
  'monetisation_method',
  'main_risks',
  'status',
];

export default function NicheSelection() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Choose with confidence"
          title="Find a Business Idea"
          accent="That Fits You"
          subtitle="Compare opportunities using practical criteria instead of choosing an idea at random."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <ListChecks className="h-5 w-5 text-brand-400" aria-hidden="true" />
              Evaluation criteria
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              Score each option against the same questions before you commit time or money.
            </p>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2 text-sm text-ink-200">
              {CRITERIA.map((criterion) => (
                <li key={criterion} className="flex items-start gap-2">
                  <FileCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                  {criterion}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-ink-700/80 bg-ink-950/60 p-6">
            <h3 className="flex items-center gap-2 text-lg font-semibold text-white">
              <Filter className="h-5 w-5 text-brand-400" aria-hidden="true" />
              Your guided selection process
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              The toolkit provides a guided, score-card based process — not a live
              filtering app. Use the AI Business Coach prompts to generate and score ideas,
              then compare them with the Niche Selection scorecard.
            </p>
            <ul className="mt-3 space-y-1 text-sm text-ink-200">
              <li>
                • 10-criterion{' '}
                <span className="font-medium text-white">Niche Selection Scorecard</span>{' '}
                (1 to 5 per criterion).
              </li>
              <li>
                •{' '}
                <span className="font-medium text-white">Demand validation methods</span>{' '}
                (customer interviews, competitor research, small experiments).
              </li>
              <li>
                • A{' '}
                <span className="font-medium text-white">filterable spreadsheet</span>{' '}
                template (`idea-library-template.csv`) you can sort and filter by any column:
              </li>
            </ul>
            <ul className="mt-2 flex flex-wrap gap-1.5 text-xs text-ink-400">
              {CSV_COLUMNS.map((col) => (
                <li key={col} className="rounded border border-ink-700 px-1.5 py-0.5">
                  {col}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-ink-700/80 bg-ink-950/60 px-4 py-3.5">
          <p className="text-xs leading-relaxed text-ink-400">
            Honest status: the Ideas Library is a framework in development. At launch it
            provides the <strong className="font-medium text-ink-300">method</strong> to evaluate
            ideas and a <strong className="font-medium text-ink-300">blank, filterable</strong>{' '}
            spreadsheet, but it does <strong className="font-medium text-ink-300">not</strong>{' '}
            yet contain a list of ready-made business ideas. No idea in this toolkit is
            described as validated or profitable merely because it passes a checklist.
          </p>
        </div>
      </div>
    </section>
  );
}
