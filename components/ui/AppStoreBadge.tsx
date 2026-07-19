"use client";

import { APP_STORE_URL } from "@/lib/config";
import { useLang } from "@/lib/i18n";

/* Official Apple "Download on the App Store" badge (black lockup). Links to
   APP_STORE_URL — a placeholder until the listing is live. Per Apple's
   guidelines the artwork itself is used unmodified. */
export function AppStoreBadge({ className = "" }: { className?: string }) {
  const { t } = useLang();
  const label = `${t.appStore} ${t.appStoreName}`;
  return (
    <a
      href={APP_STORE_URL}
      aria-label={label}
      className={`inline-block transition-transform duration-200 hover:scale-[1.04] active:scale-[0.98] ${className}`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/app-store-badge.svg" alt={label} className="h-[52px] w-auto" />
    </a>
  );
}
