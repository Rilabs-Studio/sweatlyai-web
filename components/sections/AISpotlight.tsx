"use client";

import { useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

export function AISpotlight() {
  const { t } = useLang();
  return (
    <section id="ai" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="volt-glow pointer-events-none absolute left-1/4 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full opacity-60 blur-2xl" />
      <div className="relative mx-auto max-w-6xl px-6">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <Eyebrow>{t.ai.eyebrow}</Eyebrow>
          <h2 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
            {t.ai.title}
          </h2>
          <p className="mt-4 text-lg text-ink-dim">{t.ai.sub}</p>
        </Reveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {t.ai.cards.map((card, i) => (
            <Reveal key={card.tag} delay={i * 0.1}>
              <div
                className="h-full rounded-[24px] border p-8"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,255,63,0.14), var(--color-surface))",
                  borderColor: "rgba(212,255,63,0.30)",
                }}
              >
                <span className="inline-block rounded-full bg-volt px-3 py-1 text-xs font-extrabold uppercase tracking-wide text-black">
                  {card.tag}
                </span>
                <h3 className="mt-5 text-2xl font-black">{card.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-dim">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
