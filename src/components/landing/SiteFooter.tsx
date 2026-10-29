import { siteConfig, whatsappUrl } from '@/config/siteConfig';
import BrandLogo from '@/components/landing/BrandLogo';

export default function SiteFooter() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3 px-5 text-center sm:px-8">
        <BrandLogo />
        <p className="text-sm text-ink-300">Practical guidance for your online business journey.</p>
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-brand-300 transition-colors duration-200 hover:text-brand-200"
        >
          WhatsApp support: {siteConfig.whatsappDisplay}
        </a>
        <p className="mt-2 text-xs text-ink-400">&copy; 2026 LaunchPilot. All rights reserved.</p>
      </div>
    </footer>
  );
}
