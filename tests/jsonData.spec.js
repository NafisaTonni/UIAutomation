const {test, expect} = require('@playwright/test')
const TestData = JSON.parse(JSON.stringify(require("../testData.json")))

test("page data load from json file: ",async ({page})=>
{
    await page.goto("https://freelance-learn-automation.vercel.app/login");

    await page.locator("//input[@id='email1']").fill(TestData.UserEmail);

    await page.locator("//input[@id='password1']").fill(TestData.Password)

    await page.pause();
})