"use client";

import { useState } from "react";
import { useLang } from "@/lib/i18n";
import { Reveal, Eyebrow } from "@/components/ui/Reveal";

export function FAQ() {
  const { t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative mx-auto max-w-3xl scroll-mt-24 px-6 py-24">
      <Reveal className="mb-12 text-center">
        <Eyebrow>{t.faq.eyebrow}</Eyebrow>
        <h2 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
          {t.faq.title}
        </h2>
      </Reveal>

      <div className="flex flex-col gap-3">
        {t.faq.items.map((item, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={item.q} delay={i * 0.04}>
              <div className="card overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-lg font-bold">{item.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-lg font-black transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-volt text-black" : "bg-white/5 text-ink-dim"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 leading-relaxed text-ink-dim">{item.a}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
