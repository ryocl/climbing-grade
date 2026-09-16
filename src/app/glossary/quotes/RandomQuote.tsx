"use client";

import { useState } from "react";
import { getRandomQuote } from "./quoteData";
import type { ClimbingQuote } from "./quoteData";

export function RandomQuote({ initialQuote }: { initialQuote: ClimbingQuote }) {
  const [quote, setQuote] = useState(initialQuote);

  const handleShuffle = () => {
    setQuote((current) => getRandomQuote(current.id));
  };

  return (
    <div className="w-full">
      <div
        className="flex min-h-36 w-full flex-col justify-center rounded-lg border border-zinc-200 bg-yellow-50 px-6 py-6"
        aria-live="polite"
      >
        <p className="text-lg font-semibold text-zinc-900">
          「{quote.text}」
        </p>
        <p className="mt-3 text-sm text-zinc-600">— {quote.author}</p>
      </div>

      <button
        type="button"
        onClick={handleShuffle}
        className="mt-4 rounded-lg bg-amber-600 px-4 py-2 font-semibold text-white transition-colors hover:bg-amber-700"
      >
        別の名言を見る
      </button>
    </div>
  );
}
