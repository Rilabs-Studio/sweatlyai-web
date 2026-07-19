"use client";

import Link from "next/link";
import { useLang } from "@/lib/i18n";
import { privacyDoc, type Block } from "@/lib/privacy";
import { Logo, Wordmark } from "@/components/ui/Logo";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { Footer } from "@/components/sections/Footer";

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        b.type === "p" ? (
          <p key={i} className="mt-4 leading-relaxed text-ink-dim">
            {b.text}
          </p>
        ) : (
          <ul key={i} className="mt-4 flex flex-col gap-3">
            {b.items.map((item, j) => (
              <li key={j} className="flex items-start gap-3 leading-relaxed text-ink-dim">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-volt" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )
      )}
    </>
  );
}

export function PrivacyPolicy() {
  const { lang } = useLang();
  const doc = privacyDoc[lang];

  return (
    <>
      {/* header */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-3">
        <nav className="glass flex w-full max-w-4xl items-center justify-between rounded-full px-4 py-2.5 shadow-lg shadow-black/30">
          <Link href="/" className="flex items-center gap-2.5">
            <Logo size={34} />
            <Wordmark className="text-lg" />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden text-sm font-bold text-ink-dim transition-colors hover:text-ink sm:inline"
            >
              ← {doc.backHome}
            </Link>
            <LanguageToggle />
          </div>
        </nav>
      </header>

      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-6 pb-24 pt-32 sm:pt-40">
          {/* volt glow */}
          <div className="volt-glow pointer-events-none absolute left-1/2 top-16 -z-10 h-[360px] w-[360px] -translate-x-1/2 rounded-full opacity-50 blur-2xl" />

          <p className="eyebrow mb-3">SweatlyAI</p>
          <h1 className="text-balance text-4xl font-black tracking-tight sm:text-5xl">
            {doc.title}
          </h1>
          <p className="mt-4 text-sm text-ink-dim">
            {doc.updatedLabel}: <span className="font-semibold text-ink">{doc.updated}</span>
          </p>

          <div className="mt-8 border-t hairline pt-8">
            <Blocks blocks={doc.intro} />
          </div>

          {doc.sections.map((section) => (
            <section key={section.id} id={section.id} className="mt-12 scroll-mt-28">
              <h2 className="text-2xl font-black tracking-tight">{section.title}</h2>
              <Blocks blocks={section.blocks} />
            </section>
          ))}

          <div className="mt-16 flex justify-center sm:hidden">
            <Link
              href="/"
              className="rounded-full border border-white/15 px-6 py-3 font-bold transition-colors hover:bg-white/5"
            >
              ← {doc.backHome}
            </Link>
          </div>
        </article>
      </main>

      <Footer />
    </>
  );
}
