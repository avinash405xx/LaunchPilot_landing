import { ArrowRight, MessageCircle, Rocket } from 'lucide-react';
import { siteConfig, whatsappUrl } from '@/config/siteConfig';
import CtaButton from '@/components/landing/CtaButton';

const FAQS = [
  {
    question: 'Is this suitable for complete beginners?',
    answer: 'Yes. The guide starts from the basics and is written for people who are just exploring online business ideas.',
  },
  {
    question: 'Will it guarantee income?',
    answer: 'No. LaunchPilot gives you a clear plan and tools to work through, but results depend on your effort, market, and execution.',
  },
  {
    question: 'Do I need a laptop?',
    answer: 'Not necessarily. The eBook can be read on any device, though a laptop makes it easier to work through the templates.',
  },
  {
    question: 'Which bonuses are included?',
    answer: 'Every bonus card above shows its current status. Included means it comes with your purchase. Prompt kit means it is a set of prompts you use with your own AI assistant, not a live chatbot. In development means it is not included yet.',
  },
  {
    question: 'What will I receive after purchase?',
    answer: 'The LaunchPilot eBook plus every bonus marked Included above. Automatic delivery is not set up yet, so for now our WhatsApp support sends your files after your payment is confirmed.',
  },
  {
    question: 'How do I pay?',
    answer: 'Payment is a single one-time purchase. Our checkout is still being connected, so message our WhatsApp support if you want to buy today.',
  },
];

export function SupportStrip() {
  return (
    <section className="border-y border-whatsapp-500/25 bg-gradient-to-r from-whatsapp-900 via-ink-900 to-whatsapp-900">
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-5 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-4">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-whatsapp-500 text-ink-950">
            <MessageCircle className="h-6 w-6" aria-hidden="true" />
          </span>
          <div>
            <p className="text-base font-semibold text-white">Questions? Reach us on WhatsApp.</p>
            <p className="text-sm text-ink-300">Need help understanding the guide or choosing your next step? Send a message to our support number.</p>
          </div>
        </div>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-full bg-whatsapp-500 px-6 py-3 text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-whatsapp-400 hover:shadow-lg active:scale-[0.98]"
        >
          Chat on WhatsApp
          <span className="font-bold">{siteConfig.whatsappDisplay}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

export function FaqAndFinalCta() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Good to know</p>
          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Frequently asked <span className="text-brand-400">questions.</span>
          </h2>
          <div className="mt-8 divide-y divide-ink-700 border-y border-ink-700">
            {FAQS.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-white transition-colors duration-200 hover:text-brand-300 [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ArrowRight className="h-4 w-4 shrink-0 rotate-90 text-brand-400 transition-transform duration-300 group-open:-rotate-90" aria-hidden="true" />
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-ink-300">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

        <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl border border-brand-400/30 bg-gradient-to-br from-accent-900 via-ink-900 to-ink-950 p-8 text-center shadow-violet">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand-400/20 blur-3xl" aria-hidden="true" />
          <span className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-300 to-brand-500 text-ink-950 shadow-glow-lg" aria-hidden="true">
            <Rocket className="h-8 w-8 -rotate-12" />
          </span>
          <p className="relative mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-brand-400">Your first step starts here</p>
          <h3 className="relative mt-4 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Your Future Is Built <span className="text-brand-400">One Step at a Time.</span>
          </h3>
          <p className="relative mt-4 text-sm leading-relaxed text-ink-200">
            Give your ideas a chance. Build new skills, explore digital opportunities, and take the next step towards the future you imagine.
          </p>
          <div className="relative mt-8 flex justify-center">
            <CtaButton>START YOUR JOURNEY</CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
