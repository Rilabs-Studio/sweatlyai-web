import type { Metadata, Viewport } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/i18n";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sweatlyai.app"),
  title: "SweatlyAI — A personal coach in your pocket",
  description:
    "AI training programs, live workout tracking, and honest feedback — all running on your device. Privacy-first and subscription-free, for iPhone and Apple Watch.",
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
  openGraph: {
    title: "SweatlyAI — A personal coach in your pocket",
    description:
      "On-device AI coaching, live workout tracking, and honest feedback. Privacy-first, subscription-free.",
    images: ["/icon.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SweatlyAI — A personal coach in your pocket",
    description:
      "On-device AI coaching, live workout tracking, and honest feedback. Privacy-first, subscription-free.",
    images: ["/icon.png"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0A0F",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${nunito.variable} h-full`} suppressHydrationWarning>
      <body className="flex min-h-full flex-col">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
