import { expect, test } from "@playwright/test";

test("shows the grade comparison table on the home page", async ({ page }) => {
  await page.goto("/");

  await expect(page).toHaveTitle("クライミングノート");
  await expect(page.getByRole("heading", { name: "グレード表" })).toBeVisible();

  const table = page.getByRole("table", { name: "クライミンググレード対応表" });
  await expect(table.getByRole("columnheader", { name: "日本" })).toBeVisible();
  await expect(table.getByRole("columnheader", { name: "USA" })).toBeVisible();
  await expect(table.getByRole("columnheader", { name: "French" })).toBeVisible();
});
