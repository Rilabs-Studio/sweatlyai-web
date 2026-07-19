"use client";

import { useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

const ICONS = ["📱", "⌚️", "🏝️", "🧩"];

export function Platform() {
  const { t } = useLang();
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-24">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <Eyebrow>{t.platform.eyebrow}</Eyebrow>
        <h2 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
          {t.platform.title}
        </h2>
        <p className="mt-4 text-lg text-ink-dim">{t.platform.sub}</p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        {t.platform.items.map((item, i) => (
          <Reveal key={item.title} delay={(i % 4) * 0.07}>
            <div className="card h-full p-6 text-center sm:text-left">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl sm:mx-0">
                {ICONS[i]}
              </div>
              <h3 className="mb-1.5 text-lg font-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-dim">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
