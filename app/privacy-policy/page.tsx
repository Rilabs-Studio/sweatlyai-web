import type { Metadata } from "next";
import { PrivacyPolicy } from "@/components/sections/PrivacyPolicy";

export const metadata: Metadata = {
  title: "Privacy Policy — SweatlyAI",
  description:
    "How SweatlyAI handles your data: local-first and serverless, on-device AI, synced only through your own private iCloud. No accounts, no tracking, no ads.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return <PrivacyPolicy />;
}
