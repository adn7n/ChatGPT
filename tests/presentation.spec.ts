import { test, expect } from "@playwright/test";

test("desktop scenes fit laptops and full HD, with chapter keys and fullscreen", async ({
  page,
}, info) => {
  test.skip(info.project.name !== "desktop", "Desktop presentation coverage.");
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await page.evaluate(() => document.fonts.ready);
  for (const size of [
    { width: 1366, height: 768 },
    { width: 1440, height: 900 },
    { width: 1920, height: 1080 },
  ]) {
    await page.setViewportSize(size);
    await page.evaluate(() => window.scrollTo({ top: 0, behavior: "instant" }));
    await page.waitForTimeout(500);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(
      page.getByRole("button", { name: "Afficher en plein écran" }),
    ).toBeVisible();
    await page.evaluate(() => {
      const intro = document.querySelector(".intro")!;
      scrollTo({ top: intro.clientHeight - innerHeight, behavior: "instant" });
    });
    await page.waitForTimeout(800);
    const hero = await page.locator(".intro-product").boundingBox();
    expect(hero!.x).toBeGreaterThanOrEqual(0);
    expect(hero!.x + hero!.width).toBeLessThanOrEqual(size.width);
    expect(hero!.y).toBeGreaterThanOrEqual(88);
    expect(hero!.y + hero!.height).toBeLessThanOrEqual(size.height);
    await page.screenshot({
      path: `test-results/desktop-${size.width}-intro.png`,
    });
    await page.evaluate(() => {
      const el = document.querySelector(".role-0")!;
      scrollTo({
        top: el.getBoundingClientRect().top + scrollY,
        behavior: "instant",
      });
    });
    await page.waitForTimeout(800);
    const content = await page.locator(".role-0 .role-content").boundingBox();
    expect(content!.y).toBeGreaterThanOrEqual(88);
    expect(content!.y + content!.height).toBeLessThanOrEqual(size.height);
    await page.screenshot({
      path: `test-results/desktop-${size.width}-routine.png`,
    });
  }
  await page.evaluate(() => {
    (document.activeElement as HTMLElement)?.blur();
    window.scrollTo({ top: 0, behavior: "instant" });
  });
  await page.waitForTimeout(800);
  await page.keyboard.press("ArrowRight");
  await expect
    .poll(() =>
      page
        .locator("#chapter-1")
        .evaluate((el) => Math.round(el.getBoundingClientRect().top)),
    )
    .toBeLessThan(100);
  await page.getByRole("button", { name: "Afficher en plein écran" }).click();
  await expect
    .poll(() => page.evaluate(() => Boolean(document.fullscreenElement)))
    .toBe(true);
  await page.getByRole("button", { name: "Quitter le plein écran" }).click();
  await expect
    .poll(() => page.evaluate(() => Boolean(document.fullscreenElement)))
    .toBe(false);
});
