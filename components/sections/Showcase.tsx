"use client";

import Image from "next/image";
import { useLang } from "@/lib/i18n";
import { SHOWCASE_META } from "@/lib/content";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

export function Showcase() {
  const { t } = useLang();

  return (
    <section id="screens" className="relative scroll-mt-24 overflow-hidden py-24">
      <div className="volt-glow pointer-events-none absolute right-1/4 top-1/3 h-[420px] w-[420px] rounded-full opacity-40 blur-2xl" />

      <Reveal className="mx-auto mb-14 max-w-2xl px-6 text-center">
        <Eyebrow>{t.showcase.eyebrow}</Eyebrow>
        <h2 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
          {t.showcase.title}
        </h2>
        <p className="mt-4 text-lg text-ink-dim">{t.showcase.sub}</p>
      </Reveal>

      {/* horizontal scroll strip — swipe on mobile, drag/scroll on desktop */}
      <div className="scrollbar-none flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 sm:gap-8 sm:px-[max(1.5rem,calc((100vw-72rem)/2))]">
        {SHOWCASE_META.map((meta, i) => {
          const copy = t.showcase.items[meta.key];
          return (
            <Reveal
              key={meta.key}
              delay={(i % 3) * 0.08}
              className="w-[220px] shrink-0 snap-center sm:w-[248px]"
            >
              <figure className="group">
                <div className="relative">
                  <div
                    className="absolute inset-x-8 bottom-8 top-12 -z-10 rounded-[40px] opacity-25 blur-2xl transition-opacity duration-300 group-hover:opacity-45"
                    style={{ background: meta.accent }}
                  />
                  <Image
                    src={meta.src}
                    alt={copy.title}
                    width={820}
                    height={1505}
                    className="h-auto w-full drop-shadow-2xl transition-transform duration-300 group-hover:-translate-y-1.5"
                  />
                </div>
                <figcaption className="mt-5 px-1">
                  <h3 className="text-lg font-black">{copy.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-ink-dim">{copy.desc}</p>
                </figcaption>
              </figure>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
