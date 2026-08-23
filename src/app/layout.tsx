import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";
import { SITE_URL } from "@/lib/siteUrl";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "クライミンググレード表",
  description: "クライミングのグレードの解説です",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <header className="w-full">
            <div className="relative mx-auto aspect-3968/1056 w-full h-25 max-w-250 overflow-hidden">
              <Image
                src="/images/header-image.png"
                alt=""
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1000px) 100vw, 1000px"
              />
            </div>
          </header>
          <nav className="w-full border-b border-zinc-200 bg-white">
            <ul className="mx-auto flex w-full max-w-250 flex-row gap-4 px-4 py-3">
              <li>
                <Link
                  href="/"
                  className="text-sm font-medium text-zinc-900 hover:underline"
                >
                  グレード表
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mx-auto flex min-h-screen w-full max-w-250 bg-zinc-50">
            <main className="flex min-h-screen w-full flex-col items-center justify-between bg-white sm:items-start">
              {children}
            </main>
          </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
