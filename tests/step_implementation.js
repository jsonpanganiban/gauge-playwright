const playwright = require("playwright");
const assert = require("assert");

step("betlog", async function () {
  const browser = await playwright.chromium.launch();
  const page = await browser.newPage();
  await page.goto("https://www.m88.com/");
  const pageTitle = await page.title();
  assert.strictEqual(pageTitle, "M88");
  await browser.close();
});
