"use client";

import { useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

export function Privacy() {
  const { t } = useLang();
  return (
    <section id="privacy" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div
        className="overflow-hidden rounded-[32px] border p-8 sm:p-14"
        style={{
          background: "linear-gradient(135deg, rgba(212,255,63,0.10), var(--color-surface))",
          borderColor: "rgba(212,255,63,0.28)",
        }}
      >
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>{t.privacy.eyebrow}</Eyebrow>
            <h2 className="text-balance text-3xl font-black leading-tight tracking-tight sm:text-4xl">
              {t.privacy.title}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-dim">{t.privacy.sub}</p>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {t.privacy.points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black/20 p-4"
                >
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-volt text-xs font-black text-black">
                    ✓
                  </span>
                  <span className="text-sm font-semibold leading-snug">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
