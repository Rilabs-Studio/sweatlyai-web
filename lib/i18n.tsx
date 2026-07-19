"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

export type Lang = "id" | "en";

/* ── Copy dictionary ────────────────────────────────────────────────────
   Both language objects share the same shape. Marketing phrases are reused
   verbatim from the app docs (EN) with faithful Indonesian translations.  */

const en = {
  nav: {
    features: "Features",
    ai: "On-device AI",
    privacy: "Privacy",
    faq: "FAQ",
    download: "Download",
  },
  hero: {
    eyebrow: "iOS + Apple Watch",
    titleA: "A personal coach",
    titleB: "in your pocket.",
    sub: "AI training programs, live workout tracking, and honest feedback — all running on your device. Privacy-first, and subscription-free.",
    ctaNote: "Requires iOS 26 · Free, no subscription",
    secondary: "See how it works",
  },
  pillars: {
    eyebrow: "Why SweatlyAI",
    items: [
      {
        title: "On-device & private",
        desc: "All the intelligence runs on your device with Apple Foundation Models. No SweatlyAI server ever sees your data.",
      },
      {
        title: "No subscription",
        desc: "No accounts, no recurring fees, no paywall. Your coach, your data — yours to keep.",
      },
      {
        title: "Works on every device",
        desc: "No Apple Intelligence? You still get expert-designed programs and rule-based feedback. Same gains.",
      },
    ],
  },
  features: {
    eyebrow: "Everything, in one app",
    title: "Train smarter, stay honest",
    sub: "From the first step to the finish line — SweatlyAI tracks, coaches, and keeps you moving.",
    items: {
      tracking: {
        title: "Live workout tracking",
        desc: "Record runs, rides, swims, walks, and hikes with live time, distance, pace, heart rate, and GPS route — from your iPhone or Apple Watch, always in sync.",
      },
      aiPrograms: {
        title: "AI training programs",
        desc: "A personalized multi-week program generated on-device, tuned to your last 4 weeks of training. Auto-linked to your real workouts and sent to your watch.",
      },
      coachFeedback: {
        title: "“Coach says” feedback",
        desc: "After any workout, get the breakdown — a headline, grounded observations, and one actionable suggestion. Encouraging, but always honest.",
      },
      gamification: {
        title: "Challenges, streaks & badges",
        desc: "Opt-in monthly challenges, day streaks for every session, and a trophy case of badges. Always recomputed from your real activities.",
      },
      progress: {
        title: "Progress dashboard",
        desc: "Weekly distance, pace trends with rolling averages, and heart-rate-zone breakdowns — visualized with beautiful, honest charts.",
      },
      integrations: {
        title: "One clean log, no duplicates",
        desc: "Consolidates workouts from the app, Apple Health, and Strava into a single de-duplicated log, identical across all your devices.",
      },
      widgets: {
        title: "Widgets & Live Activity",
        desc: "Five widgets across home and lock screen, plus a Live Activity in the Dynamic Island — pause, resume, or end right from the lock screen.",
      },
      heartRate: {
        title: "Heart rate from anywhere",
        desc: "Live HR from AirPods Pro, a paired Apple Watch, any HealthKit source, or a Bluetooth chest strap — even when tracking from just your phone.",
      },
    },
  },
  ai: {
    eyebrow: "On-device intelligence",
    title: "Your coach thinks on your device",
    sub: "SweatlyAI uses Apple Foundation Models — the same Apple Intelligence built into your iPhone — to plan and analyze your training. Nothing is sent to a server.",
    cards: [
      {
        tag: "Programs",
        title: "Cooking your plan…",
        desc: "Tell it your goal and SweatlyAI builds a 2–12 week program tuned to your profile and your last 4 weeks of training. No Apple Intelligence? Eight expert templates have you covered.",
      },
      {
        tag: "Feedback",
        title: "Grounded in your real numbers",
        desc: "Every observation is tied to your actual data — never invented. “Take 1–2 easy days; frequent sessions this hard raise injury risk.”",
      },
    ],
  },
  showcase: {
    eyebrow: "A closer look",
    title: "See it in action",
    sub: "Every screen, built in the same electric-night language — fast, focused, and honest.",
    items: {
      plan: {
        title: "The plan",
        desc: "Your active program and AI-built plans, made for you.",
      },
      feedback: {
        title: "Coach says",
        desc: "Heart-rate zones and grounded feedback after every workout.",
      },
      wins: {
        title: "Get that W",
        desc: "Streaks and monthly challenges to keep you going.",
      },
      log: {
        title: "The log",
        desc: "Your whole history, de-duplicated across every source.",
      },
      start: {
        title: "Start anything",
        desc: "Tap once to begin any sport — run, ride, swim, and more.",
      },
    },
  },
  privacy: {
    eyebrow: "Privacy-first",
    title: "Stays on your device and your iCloud — nowhere else.",
    sub: "There is no SweatlyAI backend. Your workouts, health data, and location never leave the Apple ecosystem. Strava is import-only — your workouts never get uploaded.",
    points: [
      "No accounts, no tracking, no ads",
      "Syncs through your own private iCloud",
      "On-device AI — not the cloud",
      "Strava import-only, nothing uploaded",
    ],
  },
  platform: {
    eyebrow: "Built for Apple",
    title: "iPhone, Apple Watch, and everything in between",
    sub: "SweatlyAI is built entirely on Apple frameworks — HealthKit, WorkoutKit, Foundation Models, CloudKit, and Swift Charts. No third-party backend.",
    items: [
      { title: "iPhone", desc: "Track workouts right from your phone, new in iOS 26." },
      { title: "Apple Watch", desc: "Standalone tracking and scheduled workouts with interval alerts." },
      { title: "Dynamic Island", desc: "A Live Activity with pause, resume, and end controls." },
      { title: "Widgets", desc: "Streak, stats, goals, challenges, and today's plan." },
    ],
  },
  faq: {
    eyebrow: "Questions",
    title: "Good to know",
    items: [
      {
        q: "Is SweatlyAI really free?",
        a: "Yes. There are no accounts, no subscriptions, and no server. You download the app and everything runs on your device.",
      },
      {
        q: "Where does my data go?",
        a: "It stays on your device and syncs through your own private iCloud. There is no SweatlyAI backend that can see your workouts, health data, or location.",
      },
      {
        q: "Do I need Apple Intelligence?",
        a: "No. On eligible devices the AI generates programs and feedback on-device. On other devices you get expert-designed templates and rule-based feedback — same gains.",
      },
      {
        q: "What devices are supported?",
        a: "iPhone on iOS 26 and Apple Watch on watchOS 26. Heart rate can come from AirPods Pro, a paired watch, any HealthKit source, or a Bluetooth chest strap.",
      },
      {
        q: "How does Strava work?",
        a: "Strava is import-only. SweatlyAI pulls in your activities and de-duplicates them against Apple Health and app-recorded workouts — nothing is ever uploaded.",
      },
    ],
  },
  finalCta: {
    title: "Your next workout starts now.",
    sub: "Download SweatlyAI and put a coach in your pocket — no subscription, no compromises.",
  },
  footer: {
    tagline: "A personal coach in your pocket.",
    rights: "All rights reserved.",
    madeWith: "Built entirely on Apple frameworks.",
    privacyPolicy: "Privacy Policy",
  },
  mockup: {
    greeting: "Good morning",
    streak: "12-day streak",
    weekEyebrow: "This week",
    distance: "Distance",
    workouts: "Workouts",
    start: "Start workout",
    sports: ["Run", "Ride", "Swim", "Walk"],
    todayPlan: "Today's plan",
    planTitle: "Easy run · 5 km",
  },
  appStore: "Download on the",
  appStoreName: "App Store",
};

const id: typeof en = {
  nav: {
    features: "Fitur",
    ai: "AI di Perangkat",
    privacy: "Privasi",
    faq: "FAQ",
    download: "Unduh",
  },
  hero: {
    eyebrow: "iOS + Apple Watch",
    titleA: "Pelatih pribadi",
    titleB: "di kantongmu.",
    sub: "Program latihan AI, pelacakan olahraga langsung, dan feedback jujur — semuanya berjalan di perangkatmu. Mengutamakan privasi, tanpa langganan.",
    ctaNote: "Butuh iOS 26 · Gratis, tanpa langganan",
    secondary: "Lihat cara kerjanya",
  },
  pillars: {
    eyebrow: "Kenapa SweatlyAI",
    items: [
      {
        title: "Di perangkat & privat",
        desc: "Semua kecerdasan berjalan di perangkatmu dengan Apple Foundation Models. Tidak ada server SweatlyAI yang melihat datamu.",
      },
      {
        title: "Tanpa langganan",
        desc: "Tanpa akun, tanpa biaya berulang, tanpa paywall. Pelatihmu, datamu — sepenuhnya milikmu.",
      },
      {
        title: "Jalan di semua perangkat",
        desc: "Tidak ada Apple Intelligence? Kamu tetap dapat program rancangan ahli dan feedback berbasis aturan. Hasil sama.",
      },
    ],
  },
  features: {
    eyebrow: "Semuanya, dalam satu app",
    title: "Latihan lebih cerdas, tetap jujur",
    sub: "Dari langkah pertama sampai garis finis — SweatlyAI melacak, melatih, dan menjagamu tetap bergerak.",
    items: {
      tracking: {
        title: "Pelacakan olahraga langsung",
        desc: "Rekam lari, sepeda, renang, jalan, dan hiking dengan waktu, jarak, pace, detak jantung, dan rute GPS langsung — dari iPhone atau Apple Watch, selalu sinkron.",
      },
      aiPrograms: {
        title: "Program latihan AI",
        desc: "Program multi-minggu yang dipersonalisasi dan dibuat di perangkat, disesuaikan dengan 4 minggu latihan terakhirmu. Otomatis terhubung ke olahraga nyatamu dan dikirim ke jam tanganmu.",
      },
      coachFeedback: {
        title: "Feedback “Coach says”",
        desc: "Setelah olahraga, dapatkan rinciannya — judul, observasi yang berdasar, dan satu saran yang bisa langsung dilakukan. Menyemangati, tapi selalu jujur.",
      },
      gamification: {
        title: "Tantangan, streak & badge",
        desc: "Tantangan bulanan opsional, streak harian untuk tiap sesi, dan koleksi badge. Selalu dihitung ulang dari aktivitas nyatamu.",
      },
      progress: {
        title: "Dasbor progres",
        desc: "Jarak mingguan, tren pace dengan rata-rata bergerak, dan rincian zona detak jantung — divisualisasikan dengan grafik yang indah dan jujur.",
      },
      integrations: {
        title: "Satu log rapi, tanpa duplikat",
        desc: "Menggabungkan olahraga dari app, Apple Health, dan Strava jadi satu log tanpa duplikat, identik di semua perangkatmu.",
      },
      widgets: {
        title: "Widget & Live Activity",
        desc: "Lima widget di layar utama dan layar kunci, plus Live Activity di Dynamic Island — jeda, lanjut, atau akhiri langsung dari layar kunci.",
      },
      heartRate: {
        title: "Detak jantung dari mana saja",
        desc: "Detak jantung langsung dari AirPods Pro, Apple Watch, sumber HealthKit apa pun, atau chest strap Bluetooth — bahkan saat melacak hanya dengan ponselmu.",
      },
    },
  },
  ai: {
    eyebrow: "Kecerdasan di perangkat",
    title: "Pelatihmu berpikir di perangkatmu",
    sub: "SweatlyAI memakai Apple Foundation Models — Apple Intelligence yang sama di iPhone-mu — untuk merancang dan menganalisis latihanmu. Tidak ada yang dikirim ke server.",
    cards: [
      {
        tag: "Program",
        title: "Meracik rencanamu…",
        desc: "Sebutkan tujuanmu dan SweatlyAI menyusun program 2–12 minggu sesuai profil dan 4 minggu latihan terakhirmu. Tanpa Apple Intelligence? Delapan template ahli siap membantu.",
      },
      {
        tag: "Feedback",
        title: "Berdasar angka nyatamu",
        desc: "Setiap observasi terhubung ke data aslimu — tidak pernah dikarang. “Ambil 1–2 hari santai; sesi sekeras ini terlalu sering menaikkan risiko cedera.”",
      },
    ],
  },
  showcase: {
    eyebrow: "Lihat lebih dekat",
    title: "Lihat langsung aksinya",
    sub: "Setiap layar dibangun dengan bahasa electric-night yang sama — cepat, fokus, dan jujur.",
    items: {
      plan: {
        title: "Rencana latihan",
        desc: "Program aktifmu dan rencana buatan AI, khusus untukmu.",
      },
      feedback: {
        title: "Coach says",
        desc: "Zona detak jantung dan feedback berdasar setelah tiap olahraga.",
      },
      wins: {
        title: "Raih kemenangan",
        desc: "Streak dan tantangan bulanan agar kamu terus melaju.",
      },
      log: {
        title: "Riwayat lengkap",
        desc: "Seluruh riwayatmu, tanpa duplikat dari semua sumber.",
      },
      start: {
        title: "Mulai apa saja",
        desc: "Satu ketukan untuk memulai olahraga apa pun — lari, sepeda, renang, dan lainnya.",
      },
    },
  },
  privacy: {
    eyebrow: "Mengutamakan privasi",
    title: "Tetap di perangkat & iCloud-mu — bukan di tempat lain.",
    sub: "Tidak ada backend SweatlyAI. Olahraga, data kesehatan, dan lokasimu tidak pernah keluar dari ekosistem Apple. Strava hanya untuk impor — olahragamu tidak pernah diunggah.",
    points: [
      "Tanpa akun, tanpa pelacakan, tanpa iklan",
      "Sinkron lewat iCloud pribadimu sendiri",
      "AI di perangkat — bukan di cloud",
      "Strava hanya impor, tidak ada yang diunggah",
    ],
  },
  platform: {
    eyebrow: "Dibuat untuk Apple",
    title: "iPhone, Apple Watch, dan semua di antaranya",
    sub: "SweatlyAI dibangun sepenuhnya di atas framework Apple — HealthKit, WorkoutKit, Foundation Models, CloudKit, dan Swift Charts. Tanpa backend pihak ketiga.",
    items: [
      { title: "iPhone", desc: "Lacak olahraga langsung dari ponselmu, baru di iOS 26." },
      { title: "Apple Watch", desc: "Pelacakan mandiri dan olahraga terjadwal dengan alarm interval." },
      { title: "Dynamic Island", desc: "Live Activity dengan kontrol jeda, lanjut, dan akhiri." },
      { title: "Widget", desc: "Streak, statistik, target, tantangan, dan rencana hari ini." },
    ],
  },
  faq: {
    eyebrow: "Pertanyaan",
    title: "Baik untuk diketahui",
    items: [
      {
        q: "Apakah SweatlyAI benar-benar gratis?",
        a: "Ya. Tidak ada akun, tidak ada langganan, dan tidak ada server. Kamu unduh app-nya dan semuanya berjalan di perangkatmu.",
      },
      {
        q: "Ke mana data saya pergi?",
        a: "Tetap di perangkatmu dan sinkron lewat iCloud pribadimu sendiri. Tidak ada backend SweatlyAI yang bisa melihat olahraga, data kesehatan, atau lokasimu.",
      },
      {
        q: "Apakah saya butuh Apple Intelligence?",
        a: "Tidak. Di perangkat yang mendukung, AI membuat program dan feedback di perangkat. Di perangkat lain kamu dapat template rancangan ahli dan feedback berbasis aturan — hasil sama.",
      },
      {
        q: "Perangkat apa yang didukung?",
        a: "iPhone dengan iOS 26 dan Apple Watch dengan watchOS 26. Detak jantung bisa dari AirPods Pro, Apple Watch, sumber HealthKit apa pun, atau chest strap Bluetooth.",
      },
      {
        q: "Bagaimana Strava bekerja?",
        a: "Strava hanya untuk impor. SweatlyAI menarik aktivitasmu dan menghapus duplikat terhadap Apple Health dan olahraga yang direkam app — tidak ada yang pernah diunggah.",
      },
    ],
  },
  finalCta: {
    title: "Olahraga berikutnya dimulai sekarang.",
    sub: "Unduh SweatlyAI dan taruh pelatih di kantongmu — tanpa langganan, tanpa kompromi.",
  },
  footer: {
    tagline: "Pelatih pribadi di kantongmu.",
    rights: "Seluruh hak cipta dilindungi.",
    madeWith: "Dibangun sepenuhnya di atas framework Apple.",
    privacyPolicy: "Kebijakan Privasi",
  },
  mockup: {
    greeting: "Selamat pagi",
    streak: "Streak 12 hari",
    weekEyebrow: "Minggu ini",
    distance: "Jarak",
    workouts: "Olahraga",
    start: "Mulai olahraga",
    sports: ["Lari", "Sepeda", "Renang", "Jalan"],
    todayPlan: "Rencana hari ini",
    planTitle: "Lari santai · 5 km",
  },
  appStore: "Unduh di",
  appStoreName: "App Store",
};

export const dictionaries = { en, id };
export type Dict = typeof en;

/* ── Context / provider ─────────────────────────────────────────────── */

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };
const LangContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "sweatly-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id");

  useEffect(() => {
    // Sync the persisted preference from localStorage after mount (avoids an
    // SSR hydration mismatch by starting from the default "id" on the server).
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "id" || stored === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(stored);
    }
    document.documentElement.lang = stored ?? "id";
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    window.localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  };

  const value: Ctx = { lang, setLang, t: dictionaries[lang] };
  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LanguageProvider");
  return ctx;
}
