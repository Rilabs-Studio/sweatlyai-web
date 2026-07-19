"use client";

import { useEffect, useState } from "react";
import { useLang } from "@/lib/i18n";
import { APP_STORE_URL } from "@/lib/config";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";

export function Nav() {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#features", label: t.nav.features },
    { href: "#ai", label: t.nav.ai },
    { href: "#privacy", label: t.nav.privacy },
    { href: "#faq", label: t.nav.faq },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300 ${
          scrolled ? "glass shadow-lg shadow-black/30" : "border border-transparent"
        }`}
      >
        <a href="#top" className="flex items-center gap-2.5">
          <Logo size={34} />
          <Wordmark className="text-lg" />
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-bold text-ink-dim transition-colors hover:text-ink"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <LanguageToggle />
          <a
            href={APP_STORE_URL}
            className="hidden rounded-full bg-volt px-4 py-2 text-sm font-extrabold text-black transition-transform hover:scale-105 active:scale-95 sm:inline-block"
          >
            {t.nav.download}
          </a>
        </div>
      </nav>
    </header>
  );
}
