import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/config/siteConfig';
import BrandLogo from '@/components/landing/BrandLogo';
import CtaButton from '@/components/landing/CtaButton';

export default function SiteHeader() {
  return (
    <header className="relative z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-5 sm:px-8">
        <BrandLogo />
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp support"
            className="flex items-center gap-2 text-sm font-semibold text-ink-100 transition-colors duration-200 hover:text-whatsapp-400"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-whatsapp-500 text-ink-950">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="hidden md:inline">WhatsApp Support</span>
          </a>
          <span className="hidden h-6 w-px bg-ink-700 md:block" aria-hidden="true" />
          <CtaButton variant="compact" className="hidden sm:inline-flex">
            Get the eBook + Bonuses
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
