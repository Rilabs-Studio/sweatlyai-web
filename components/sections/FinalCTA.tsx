"use client";

import { useLang } from "@/lib/i18n";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Logo } from "@/components/ui/Logo";

export function FinalCTA() {
  const { t } = useLang();
  return (
    <section className="relative mx-auto max-w-6xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-surface px-6 py-16 text-center sm:py-20">
        <div className="volt-glow pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-2xl" />
        <Reveal className="relative">
          <div className="mb-6 flex justify-center">
            <Logo size={64} />
          </div>
          <h2 className="mx-auto max-w-2xl text-balance text-4xl font-black tracking-tight sm:text-5xl">
            {t.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-dim">{t.finalCta.sub}</p>
          <div className="mt-9 flex justify-center">
            <AppStoreBadge />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
