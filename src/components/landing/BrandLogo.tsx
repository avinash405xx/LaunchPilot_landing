import { Rocket } from 'lucide-react';
import { siteConfig } from '@/config/siteConfig';

export default function BrandLogo() {
  return (
    <span className="flex items-center gap-2 text-lg font-extrabold text-white">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-400 text-ink-950">
        <Rocket className="h-4 w-4" aria-hidden="true" />
      </span>
      {siteConfig.brandName}
    </span>
  );
}
