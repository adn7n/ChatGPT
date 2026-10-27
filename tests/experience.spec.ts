import { test, expect } from "@playwright/test";

test("chapters, navigation, budget, references and mobile layout", async ({
  page,
}, testInfo) => {
  const errors: string[] = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const failed: string[] = [];
  page.on("response", (r) => {
    if (r.status() >= 400) failed.push(r.url());
  });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(page.locator("[data-chapter]")).toHaveCount(8);
  await page.getByRole("button", { name: "Capítulos" }).click();
  await page
    .getByRole("navigation")
    .getByRole("link", { name: "07 O orçamento" })
    .click();
  await expect(page.getByRole("navigation")).toBeHidden();
  await expect(
    page.getByRole("heading", { name: "293 francos suíços e 99 cêntimos" }),
  ).toBeInViewport();
  await expect(page.locator(".price-value")).toHaveText("293,99", {
    timeout: 5000,
  });
  await page.getByRole("button", { name: "Sobre e referências" }).click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await expect(page.getByRole("dialog")).toContainText("293,99 CHF");
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  for (let i = 0; i < 8; i++) {
    await page.locator(`#chapter-${i}`).scrollIntoViewIfNeeded();
    await page.waitForTimeout(120);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.screenshot({
    path: `test-results/${testInfo.project.name}.png`,
    fullPage: true,
  });
  expect(errors).toEqual([]);
  expect(failed).toEqual([]);
});

test("original product images load and scroll scenes reverse", async ({
  page,
}, testInfo) => {
  await page.goto("/");
  await expect(page.locator(".hero-product")).toHaveAttribute(
    "src",
    "/media/cutouts/whoop-black.png",
  );
  for (const selector of [".hero-product", ".white-photo", ".pack-photo"]) {
    const photo = page.locator(selector);
    await photo.scrollIntoViewIfNeeded();
    await expect
      .poll(() =>
        photo.evaluate(
          (el: HTMLImageElement) => el.complete && el.naturalWidth > 0,
        ),
      )
      .toBe(true);
  }
  const reduced = testInfo.project.name === "reduced-motion";
  const measureIntro = async (progress: number) => {
    await page.evaluate((p) => {
      const el = document.querySelector(".intro")!;
      const top = el.getBoundingClientRect().top + scrollY;
      window.scrollTo({
        top: top + (el.clientHeight - innerHeight) * p,
        behavior: "instant",
      });
    }, progress);
    await page.waitForTimeout(900);
  };
  await measureIntro(0);
  if (!reduced) {
    await expect(page.locator(".intro-question")).toHaveCSS("opacity", "1");
    await measureIntro(1);
    await expect(page.locator(".intro-question")).toHaveCSS("opacity", "0");
    await expect(page.locator(".intro-product")).toHaveCSS("opacity", "1");
  }
  await page.screenshot({
    path: `test-results/${testInfo.project.name}-product.png`,
  });
  if (!reduced) {
    await measureIntro(0);
    await expect(page.locator(".intro-question")).toHaveCSS("opacity", "1");
    const pack = page.locator(".pack-study");
    const position = await pack.evaluate((el) => ({
      top: el.getBoundingClientRect().top + scrollY,
      range: el.clientHeight - innerHeight,
    }));
    await page.evaluate(
      (p) => window.scrollTo({ top: p.top, behavior: "instant" }),
      position,
    );
    await page.waitForTimeout(900);
    const start = await page
      .locator(".pack-layer-band")
      .evaluate((el) => el.getBoundingClientRect().x);
    await page.evaluate(
      (p) =>
        window.scrollTo({ top: p.top + p.range * 0.5, behavior: "instant" }),
      position,
    );
    await page.waitForTimeout(900);
    const separated = await page
      .locator(".pack-layer-band")
      .evaluate((el) => el.getBoundingClientRect().x);
    expect(Math.abs(separated - start)).toBeGreaterThan(5);
    await page.screenshot({
      path: `test-results/${testInfo.project.name}-pack.png`,
    });
    await page.evaluate(
      (p) => window.scrollTo({ top: p.top, behavior: "instant" }),
      position,
    );
    await page.waitForTimeout(900);
    expect(
      await page
        .locator(".pack-layer-band")
        .evaluate((el) => el.getBoundingClientRect().x),
    ).toBeCloseTo(start, 1);
  }
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});

test("five benefits per activity and small-screen navigation", async ({
  page,
}, testInfo) => {
  test.skip(
    testInfo.project.name !== "desktop",
    "Viewport variation is covered once using desktop Chromium.",
  );
  await page.goto("/");
  await expect(page.locator(".role")).toHaveCount(3);
  for (const role of await page.locator(".role").all())
    await expect(role.locator(".benefit-step")).toHaveCount(5);
  await expect(page.locator(".role-visual")).toHaveCount(3);
  for (const size of [
    { width: 320, height: 568 },
    { width: 390, height: 844 },
    { width: 844, height: 390 },
  ]) {
    await page.setViewportSize(size);
    await page.getByRole("button", { name: "Capítulos" }).click();
    await page
      .getByRole("navigation")
      .getByRole("link", { name: "07 O orçamento" })
      .click();
    await expect(
      page.getByRole("heading", { name: "293 francos suíços e 99 cêntimos" }),
    ).toBeInViewport();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await page.screenshot({ path: `test-results/budget-${size.width}.png` });
  }
});
