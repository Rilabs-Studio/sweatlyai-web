"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { Logo, Wordmark } from "@/components/ui/Logo";

export function Footer() {
  const { t } = useLang();
  const year = 2026;
  return (
    <footer className="border-t hairline">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="flex items-center gap-3">
          <Logo size={36} />
          <div>
            <Wordmark className="text-base" />
            <p className="text-sm text-ink-dim">{t.footer.tagline}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center text-sm text-ink-dim sm:items-end sm:text-right">
          <Link
            href="/privacy-policy"
            className="font-bold text-ink-dim transition-colors hover:text-volt"
          >
            {t.footer.privacyPolicy}
          </Link>
          <p>{t.footer.madeWith}</p>
          <p>
            © {year} SweatlyAI. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
