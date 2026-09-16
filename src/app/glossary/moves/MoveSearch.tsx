"use client";

import { useId, useState } from "react";
import type { MoveTerm } from "./moveData";

export function MoveSearch({ moves }: { moves: MoveTerm[] }) {
  const [query, setQuery] = useState("");
  const inputId = useId();

  const normalizedQuery = query.trim().toLowerCase();
  const filteredMoves = normalizedQuery
    ? moves.filter((move) =>
        [move.name, move.kana, move.description]
          .join(" ")
          .toLowerCase()
          .includes(normalizedQuery),
      )
    : moves;

  return (
    <div className="w-full">
      <label htmlFor={inputId} className="block text-sm font-semibold text-zinc-700">
        ムーブを検索
      </label>
      <input
        id={inputId}
        type="search"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="例: ヒールフック、でっどぽいんと"
        className="mt-2 w-full rounded-lg border border-zinc-300 px-4 py-2 text-base focus:border-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-200"
      />

      <p className="mt-3 text-sm text-zinc-500" role="status">
        {filteredMoves.length}件ヒット
      </p>

      <ul className="mt-4 flex w-full flex-col gap-3">
        {filteredMoves.map((move) => (
          <li
            key={move.id}
            className="w-full overflow-hidden rounded-lg border border-zinc-200"
          >
            <div className="bg-yellow-100 px-4 py-2 font-semibold text-zinc-900">
              {move.name}
            </div>
            <div className="px-4 py-3 text-sm text-zinc-800">
              {move.description}
            </div>
          </li>
        ))}
      </ul>

      {filteredMoves.length === 0 && (
        <p className="mt-4 text-sm text-zinc-500">
          該当するムーブが見つかりませんでした。
        </p>
      )}
    </div>
  );
}
