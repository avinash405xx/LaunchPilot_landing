import { ArrowRight } from 'lucide-react';
import type { ReactNode } from 'react';
import { siteConfig } from '@/config/siteConfig';
import { trackEvent } from '@/lib/analytics';
import { navigate } from '@/lib/router';

type CtaButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'compact' | 'ghost';
  className?: string;
};

export default function CtaButton({ children, variant = 'primary', className = '' }: CtaButtonProps) {
  const handleClick = () => {
    trackEvent('InitiateCheckout', {
      value: siteConfig.price,
      currency: siteConfig.currency,
      content_name: siteConfig.productName,
    });
    if (siteConfig.checkoutUrl) {
      window.open(siteConfig.checkoutUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate('/checkout');
    }
  };

  const base =
    'group inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 active:scale-[0.98]';
  const gold = 'cta-pulse bg-gradient-to-r from-brand-300 via-brand-400 to-brand-500 text-ink-950 shadow-glow hover:brightness-110';
  const styles = {
    primary: `${gold} px-6 py-4 text-center text-sm uppercase tracking-wide sm:px-7 sm:text-base`,
    compact: `${gold} px-4 py-2.5 text-xs sm:px-5 sm:text-sm`,
    ghost: 'border border-ink-600 bg-ink-900/60 px-6 py-3 text-sm text-ink-100 hover:border-brand-400 hover:text-brand-300',
  }[variant];
  const iconSize = variant === 'compact' ? 'h-4 w-4' : 'h-5 w-5';

  return (
    <button type="button" onClick={handleClick} className={`${base} ${styles} ${className}`}>
      {children}
      <ArrowRight className={`${iconSize} shrink-0 transition-transform duration-300 group-hover:translate-x-1`} aria-hidden="true" />
    </button>
  );
}
