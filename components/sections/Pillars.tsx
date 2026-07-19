"use client";

import { useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

const ICONS = ["🔒", "🎁", "📱"];

export function Pillars() {
  const { t } = useLang();
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-20">
      <Reveal className="mb-10 text-center">
        <Eyebrow>{t.pillars.eyebrow}</Eyebrow>
      </Reveal>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
        {t.pillars.items.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <div className="card h-full p-7">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 text-2xl">
                {ICONS[i]}
              </div>
              <h3 className="mb-2 text-xl font-black">{item.title}</h3>
              <p className="leading-relaxed text-ink-dim">{item.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
