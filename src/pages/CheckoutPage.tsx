import { ArrowLeft, ClipboardCheck, CreditCard, MessageCircle, Rocket, ShieldAlert } from 'lucide-react';
import { formatPrice, siteConfig, whatsappUrl } from '@/config/siteConfig';
import CtaButton from '@/components/landing/CtaButton';
import { navigate } from '@/lib/router';

export default function CheckoutPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col justify-center px-5 py-16 sm:px-8">
      <button
        type="button"
        onClick={() => navigate('/')}
        className="inline-flex w-fit items-center gap-2 text-sm font-medium text-ink-300 transition-colors duration-200 hover:text-brand-300"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back to the guide
      </button>

      <div className="mt-8 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <section className="rounded-3xl border border-ink-700 bg-ink-900/70 p-8 shadow-card">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Checkout</p>
          <h1 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">Review your order</h1>
          <p className="mt-3 text-sm leading-relaxed text-ink-300">
            You are one step away from your first clear action plan.
          </p>

          <div className="mt-8 flex items-center gap-4 rounded-2xl border border-ink-700 bg-ink-950/60 p-5">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-400 text-ink-950">
              <Rocket className="h-6 w-6" aria-hidden="true" />
            </span>
            <div className="flex-1">
              <p className="text-sm font-semibold text-white">{siteConfig.productName}</p>
              {siteConfig.referencePrice && (
                <p className="text-xs text-ink-400 line-through">{formatPrice(siteConfig.referencePrice)}</p>
              )}
            </div>
            <p className="text-xl font-extrabold text-white">{formatPrice(siteConfig.price)}</p>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-ink-200">
            <li className="flex items-center gap-3"><CreditCard className="h-4 w-4 text-brand-400" aria-hidden="true" />One-time payment</li>
            <li className="flex items-center gap-3"><ClipboardCheck className="h-4 w-4 text-brand-400" aria-hidden="true" />Templates and checklists</li>
            <li className="flex items-center gap-3"><ShieldAlert className="h-4 w-4 text-brand-400" aria-hidden="true" />Educational guide. It does not guarantee earnings.</li>
          </ul>
        </section>

        <aside className="flex flex-col justify-between rounded-3xl border border-brand-400/40 bg-ink-900 p-8 shadow-glow">
          <div>
            <p className="text-sm font-medium text-ink-300">Total due today</p>
            <p className="mt-2 text-4xl font-extrabold text-white">{formatPrice(siteConfig.price)}</p>
            <p className="mt-2 text-xs text-ink-400">One-time price</p>
          </div>
          <div className="mt-8 space-y-4">
            <CtaButton className="w-full">GET THE EBOOK + BONUSES</CtaButton>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full bg-whatsapp-500 px-6 py-4 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-whatsapp-400 active:scale-[0.98]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Buy on WhatsApp
            </a>
            <p className="flex items-center justify-center gap-2 text-xs text-ink-300">
              <ShieldAlert className="h-4 w-4 text-brand-400" aria-hidden="true" />
              Questions? Message {siteConfig.whatsappDisplay}
            </p>
          </div>
        </aside>
      </div>
    </main>
  );
}
