"use client";

import { useLang, type Lang } from "@/lib/i18n";

const OPTIONS: Lang[] = ["id", "en"];

export function LanguageToggle() {
  const { lang, setLang } = useLang();
  return (
    <div className="glass inline-flex items-center rounded-full p-1" role="group" aria-label="Language">
      {OPTIONS.map((opt) => {
        const active = lang === opt;
        return (
          <button
            key={opt}
            onClick={() => setLang(opt)}
            aria-pressed={active}
            className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
              active ? "bg-volt text-black" : "text-ink-dim hover:text-ink"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
