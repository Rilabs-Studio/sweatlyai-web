"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLang } from "@/lib/i18n";
import { AppStoreBadge } from "@/components/ui/AppStoreBadge";

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      {/* volt glow, mirrors the app icon */}
      <div className="volt-glow pointer-events-none absolute left-1/2 top-[-6rem] h-[560px] w-[560px] -translate-x-1/2 rounded-full blur-2xl sm:top-[-4rem]" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(212,255,63,0.06),transparent_60%)]" />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-ink-dim"
          >
            <span className="h-2 w-2 rounded-full bg-volt" />
            {t.hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-balance text-5xl font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl"
          >
            {t.hero.titleA}{" "}
            <span className="text-volt">{t.hero.titleB}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-dim lg:mx-0"
          >
            {t.hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row lg:items-start"
          >
            <AppStoreBadge />
            <a
              href="#ai"
              className="rounded-2xl border border-white/15 px-6 py-3.5 font-bold text-ink transition-colors hover:bg-white/5"
            >
              {t.hero.secondary}
            </a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 text-sm text-ink-dim"
          >
            {t.hero.ctaNote}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="flex justify-center"
        >
          <div className="animate-floaty drop-shadow-2xl">
            <Image
              src="/screens/app-today.png"
              alt="SweatlyAI — Today screen"
              width={820}
              height={1505}
              priority
              className="h-auto w-[260px] sm:w-[300px] lg:w-[320px]"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
