"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "グレード表" },
  { href: "/perceived-grade", label: "グレード(体感)" },
];

export function SiteNav() {
  const pathname = usePathname();

  return (
    <ul className="mx-auto flex w-full max-w-250 flex-row gap-2 px-4 py-3">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`block rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-white text-stone-900 shadow-sm"
                  : "text-stone-700 hover:bg-white/60"
              }`}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
