import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Image from "next/image";
import Link from "next/link";
import { SiteNav } from "./SiteNav";
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
  title: "クライミング グレード早見帳",
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
          <header className="w-full bg-zinc-600">
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
          <nav className="w-full border-b border-sky-400 bg-sky-300">
            <div className="mx-auto w-full max-w-250 px-4 pt-3">
              <Link href="/" className="text-lg font-bold text-zinc-900">
                クライミング グレード早見帳
              </Link>
            </div>
            <SiteNav />
          </nav>
          <div className="mx-auto flex w-full max-w-250 bg-zinc-50">
            <main className="flex w-full flex-col items-center bg-white sm:items-start">
              {children}
            </main>
          </div>
          <footer className="w-full border-t border-zinc-200 bg-white">
            <div className="mx-auto flex w-full max-w-250 justify-center px-4 py-4">
              <a
                href="https://x.com/ryo_cl_lab"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-zinc-600 hover:text-zinc-900 hover:underline"
              >
                X (@ryo_cl_lab)
              </a>
            </div>
          </footer>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
