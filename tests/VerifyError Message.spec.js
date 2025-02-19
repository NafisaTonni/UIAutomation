const{test, expect} = require('@playwright/test')

test("Verify Login Page Error Message", async function({page})
{
    //go to url
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("//input[@placeholder='Username']").type("Admin",{delay:200})

    await page.locator("//input[@placeholder='Password']").type("aaaaaaa",{delay:200})

    await page.locator("//button[normalize-space()='Login']").click()

    const ErrorMessage = await page.locator("//div[@role='alert']").textContent()

    console.log("Error Message is: " +ErrorMessage);

    await page.waitForTimeout(3000)
    //expect(ErrorMessage.includes("Invalid")).toBeTruthy()

    expect(ErrorMessage.includes("abcd")).toBeFalsy
})
