import { Cloud, Package } from 'lucide-react';
import { SectionHeading } from '@/components/landing/ProblemSection';

export default function ProductModels() {
  return (
    <section className="border-t border-ink-800 bg-ink-900/40 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Build your business"
          title="Choose the Kind of Business"
          accent="You Want to Build"
          subtitle="Different ideas suit different people. Explore possible business models and choose an approach that fits your interests, resources, and goals."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-700/80 bg-ink-950/60 p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
              <Cloud className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-white">Digital Products</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              eBooks and guides · Templates and planners · Educational resources ·
              Design assets · Digital toolkits · Online courses
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              "Explore products that can be delivered digitally, without the need to ship a
              physical item for every order."
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink-400">
              Digital products avoid shipping and inventory, but success still depends on
              solving a real customer problem. Production time, platform fees, and customer
              support are real costs to plan for — no model is automatically profitable.
            </p>
          </div>

          <div className="rounded-2xl border border-ink-700/80 bg-ink-950/60 p-7">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-400/15 text-brand-300">
              <Package className="h-6 w-6" aria-hidden="true" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-white">Physical Products</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">
              Home and lifestyle products · Accessories · Handmade products · Useful everyday
              items · Niche physical products
            </p>
            <p className="mt-3 text-sm leading-relaxed text-ink-200">
              "Explore physical product opportunities and learn how online landing pages and
              advertising can support a product-selling strategy."
            </p>
            <p className="mt-2 text-xs leading-relaxed text-ink-400">
              Physical products often involve inventory, sourcing, packaging, shipping,
              returns, and other operating costs. Suitability depends on demand, costs,
              product quality, logistics, and your target audience. Running Meta Ads does not
              guarantee sales.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
