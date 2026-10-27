import { test, expect } from "@playwright/test";

test("order matches provided screenshot and trader content is removed", async ({
  page,
}) => {
  await page.goto("/");
  await expect(page.locator(".role")).toHaveCount(3);
  await expect(page.locator(".benefit-step")).toHaveCount(15);
  const text = await page.locator("body").innerText();
  expect(text).not.toMatch(/Trader|Negociar|ANTES DA SESSÃO|quatro dimensões/i);
  await expect(page.locator(".people-roster")).toContainText(
    "Cristiano Ronaldo",
  );
  await expect(page.locator(".people-roster")).toContainText("Michael Phelps");
  await expect(page.locator(".people-roster")).toContainText("Patrick Mahomes");
  await expect(page.locator(".order-item")).toHaveCount(6);
  await expect(page.locator(".included-price")).toHaveCount(4);
  await expect(page.locator(".order-details")).toContainText("219,00");
  await expect(page.locator(".order-details")).toContainText("48,00");
  await expect(page.locator(".order-total")).toContainText("293,99");
  await expect(page.locator(".order-vat")).toContainText("22,03");
  await expect(page.locator(".order-totals")).toContainText("267,00");
  await expect(page.locator(".order-totals")).toContainText("26,99");
  await expect(page.locator(".daily")).toContainText("0,81");
});

test("product images have transparent backgrounds", async ({ page }, info) => {
  test.skip(info.project.name !== "desktop", "Image pixels are checked once.");
  await page.goto("/");
  const result = await page.evaluate(async () => {
    const manifest = await (await fetch("/media/manifest.json")).json();
    return Promise.all(
      ["black", "white", "pack"].map(async (key) => {
        const image = new Image();
        image.src = manifest[key];
        await image.decode();
        const canvas = document.createElement("canvas");
        canvas.width = image.naturalWidth;
        canvas.height = image.naturalHeight;
        const ctx = canvas.getContext("2d")!;
        ctx.drawImage(image, 0, 0);
        const data = ctx.getImageData(0, 0, canvas.width, canvas.height).data;
        let transparent = 0;
        for (let i = 3; i < data.length; i += 4)
          if (data[i] === 0) transparent++;
        return {
          key,
          cornerAlpha: data[3],
          transparentRatio: transparent / (canvas.width * canvas.height),
        };
      }),
    );
  });
  for (const image of result) {
    expect(image.cornerAlpha).toBe(0);
    expect(image.transparentRatio).toBeGreaterThan(0.1);
  }
});
