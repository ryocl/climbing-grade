import { existsSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { moveTable } from "./moveData";

describe("moveTable", () => {
  it("has unique ids", () => {
    const ids = moveTable.map((move) => move.id);

    expect(new Set(ids).size).toBe(ids.length);
  });

  it.each(
    moveTable.flatMap((move) =>
      (move.images ?? []).map((image) => [move.name, image.src]),
    ),
  )("%s image exists at %s", (_name, src) => {
    expect(existsSync(path.join(process.cwd(), "public", src))).toBe(true);
  });
});
