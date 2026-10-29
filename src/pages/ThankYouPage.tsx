import { MessageCircle } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/config/siteConfig';
import { navigate } from '@/lib/router';

export default function ThankYouPage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-5 py-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Thank you</p>
      <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">Thanks for your interest.</h1>
      <p className="mt-4 text-base leading-relaxed text-ink-300">
        Have a question about the guide or how to get it? Our WhatsApp support can help.
      </p>

      <div className="mt-8 w-full rounded-2xl border border-ink-700 bg-ink-900/70 p-6 text-left">
        <p className="text-sm font-semibold text-white">Talk to us on WhatsApp</p>
        <p className="mt-1 text-sm text-ink-300">Send your question any time.</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-full bg-whatsapp-500 px-5 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-whatsapp-400 active:scale-[0.98]"
        >
          <MessageCircle className="h-4 w-4" aria-hidden="true" />
          Chat on WhatsApp {siteConfig.whatsappDisplay}
        </a>
      </div>

      <button
        type="button"
        onClick={() => navigate('/')}
        className="mt-8 text-sm font-medium text-ink-300 transition-colors duration-200 hover:text-brand-300"
      >
        Back to home
      </button>
    </main>
  );
}
