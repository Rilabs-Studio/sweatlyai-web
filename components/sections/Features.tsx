"use client";

import { useLang } from "@/lib/i18n";
import { FEATURE_META } from "@/lib/content";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

export function Features() {
  const { t } = useLang();
  return (
    <section id="features" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <Reveal className="mx-auto mb-14 max-w-2xl text-center">
        <Eyebrow>{t.features.eyebrow}</Eyebrow>
        <h2 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
          {t.features.title}
        </h2>
        <p className="mt-4 text-lg text-ink-dim">{t.features.sub}</p>
      </Reveal>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURE_META.map((meta, i) => {
          const copy = t.features.items[meta.key];
          const wide = meta.key === "tracking" || meta.key === "aiPrograms";
          return (
            <Reveal
              key={meta.key}
              delay={(i % 4) * 0.06}
              className={wide ? "sm:col-span-2" : ""}
            >
              <article
                className="group h-full rounded-[24px] border p-6 transition-transform duration-300 hover:-translate-y-1"
                style={{
                  background: `linear-gradient(135deg, color-mix(in srgb, ${meta.accent} 16%, transparent), var(--color-surface))`,
                  borderColor: `color-mix(in srgb, ${meta.accent} 32%, transparent)`,
                }}
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                  style={{ background: `color-mix(in srgb, ${meta.accent} 20%, transparent)` }}
                >
                  {meta.icon}
                </div>
                <h3 className="mb-2 text-xl font-black">{copy.title}</h3>
                <p className="leading-relaxed text-ink-dim">{copy.desc}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
