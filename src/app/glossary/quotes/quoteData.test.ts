import { describe, expect, it } from "vitest";
import { getRandomQuote, quoteList } from "./quoteData";

describe("getRandomQuote", () => {
  it("returns a quote from the list", () => {
    expect(quoteList).toContain(getRandomQuote());
  });

  it("never returns the excluded quote", () => {
    const excludedId = quoteList[0].id;

    for (let i = 0; i < 100; i++) {
      expect(getRandomQuote(excludedId).id).not.toBe(excludedId);
    }
  });
});

describe("quoteList", () => {
  it("has unique ids", () => {
    const ids = quoteList.map((quote) => quote.id);

    expect(new Set(ids).size).toBe(ids.length);
  });
});
