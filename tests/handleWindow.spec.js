const { test, expect } = require('@playwright/test');

test("handle Multiple tab in browser", async ({ browser }) => {
    const context = await browser.newContext(); // Corrected variable name to lowercase
    const page = await context.newPage();

    await page.goto("https://freelance-learn-automation.vercel.app/login");

    const [newPage] = await Promise.all([
        context.waitForEvent("page"), // Listen for the new tab
        page.locator("//a[contains(@href ,'facebook')]").first().click() // Click action that opens a new tab
    ]);

    await newPage.waitForTimeout(5000);
});

//npx playwright test ./tests/handleWindow.spec.js --headed