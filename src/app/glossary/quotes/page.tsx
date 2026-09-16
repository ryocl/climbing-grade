import { RandomQuote } from "./RandomQuote";
import { getRandomQuote } from "./quoteData";

export const dynamic = "force-dynamic";

export default function GlossaryQuotesPage() {
  const initialQuote = getRandomQuote();

  return (
    <div className="w-full px-4 py-8">
      <h2 className="text-xl font-bold text-amber-700">クライミング名言集</h2>
      <div className="mt-6">
        <RandomQuote initialQuote={initialQuote} />
      </div>
    </div>
  );
}
