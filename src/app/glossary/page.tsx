import Link from "next/link";

const glossaryLinks = [
  { href: "/glossary/quotes", label: "クライミング名言集" },
  { href: "/glossary/moves", label: "ムーブ辞典" },
  { href: "/glossary/terms", label: "クライミング一般用語集" },
];

export default function GlossaryPage() {
  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-xl font-bold text-amber-700">クライミング用語辞典</h2>
      <ul className="mt-6 flex w-full flex-col gap-3">
        {glossaryLinks.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="block rounded-lg border border-zinc-200 px-4 py-3 font-semibold text-zinc-900 transition-colors hover:bg-zinc-50"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
