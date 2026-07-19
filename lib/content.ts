import type { Dict } from "./i18n";

/* Static per-feature meta (icon + accent color). Text lives in the i18n
   dictionary, keyed by `key`, so the two stay decoupled and translatable. */
export type FeatureKey = keyof Dict["features"]["items"];

export const FEATURE_META: { key: FeatureKey; icon: string; accent: string }[] = [
  { key: "tracking", icon: "📍", accent: "var(--color-running)" },
  { key: "aiPrograms", icon: "✨", accent: "var(--color-volt)" },
  { key: "coachFeedback", icon: "💬", accent: "var(--color-flame)" },
  { key: "gamification", icon: "🏆", accent: "var(--color-yoga)" },
  { key: "progress", icon: "📈", accent: "var(--color-cycling)" },
  { key: "integrations", icon: "🔗", accent: "var(--color-swimming)" },
  { key: "widgets", icon: "📲", accent: "var(--color-strength)" },
  { key: "heartRate", icon: "❤️", accent: "var(--color-hr5)" },
];

/* App screenshots for the showcase gallery. `src` points at the processed,
   transparent-background PNGs in /public/screens. */
export type ShowcaseKey = keyof Dict["showcase"]["items"];

export const SHOWCASE_META: { key: ShowcaseKey; src: string; accent: string }[] = [
  { key: "plan", src: "/screens/app-plan.png", accent: "var(--color-volt)" },
  { key: "feedback", src: "/screens/app-feedback.png", accent: "var(--color-flame)" },
  { key: "wins", src: "/screens/app-wins.png", accent: "var(--color-running)" },
  { key: "log", src: "/screens/app-log.png", accent: "var(--color-cycling)" },
  { key: "start", src: "/screens/app-start.png", accent: "var(--color-swimming)" },
];
