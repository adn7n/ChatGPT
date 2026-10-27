import { test, expect } from "@playwright/test";

test("Portuguese content and supplied typography and data colors", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator("html")).toHaveAttribute("lang", "pt-PT");
  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "conhecer",
  );
  const heading = page.getByRole("heading", { level: 1 });
  await expect(heading).toHaveCSS("text-transform", "uppercase");
  await expect(heading).toHaveCSS("font-weight", "700");
  expect(
    await heading.evaluate((el) => {
      const css = getComputedStyle(el);
      return Math.round(
        (100 * parseFloat(css.letterSpacing)) / parseFloat(css.fontSize),
      );
    }),
  ).toBe(10);
  await expect(page.locator(".benefit-step").first()).toHaveCSS(
    "font-weight",
    "600",
  );
  await expect(page.locator(".price-value")).toHaveCSS("font-weight", "700");
  expect(
    await page
      .locator(".price-value")
      .evaluate((el) => getComputedStyle(el).fontFamily),
  ).toContain("DINPro");
  await expect(page.locator(".signal-bar").first()).toHaveCSS(
    "background-color",
    "rgb(123, 161, 187)",
  );
  await expect(page.locator(".visual-recovery .signal-line")).toHaveCSS(
    "stroke",
    "rgb(103, 174, 230)",
  );
  await expect(page.locator(".reading-progress")).toHaveCSS(
    "background-color",
    "rgb(0, 241, 159)",
  );
  const text = await page.locator("body").innerText();
  expect(text).not.toMatch(
    /Chapitres|Mieux récupérer|Le budget|Plein écran|Comprendre aujourd’hui/,
  );
  for (const el of await page.locator("h1,h2,h3").all())
    expect(
      await el.evaluate((el) => el.scrollWidth <= el.clientWidth + 1),
    ).toBe(true);
});
