const{test,expect} = require('@playwright/test')

test.skip("Handle Alert",async ({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
/*-----------lissener--------*/
        page.on('dialog',async(d) => 
        {
            expect(d.type()).toContain("alert")

            expect(d.message()).toContain("I am a JS Alert")

            await d.accept()
        })
        await page.locator("//button[normalize-space()='Click for JS Alert']").click()

    })





test.skip("Handle Confirm Box",async ({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
/*-----------lissener--------*/
        page.on('dialog',async (dialogWindow) => 
        {
            expect(dialogWindow.type()).toContain("confirm")

            expect(dialogWindow.message()).toContain("I am a JS Confirm")

           // await dialogWindow.accept()

           await dialogWindow.dismiss()
        })
        await page.locator("//button[normalize-space()='Click for JS Confirm']").click()

    })



test("Handle Prompt Box",async ({page})=>
    {
        await page.goto("https://the-internet.herokuapp.com/javascript_alerts")
/*-----------lissener--------*/
page.on('dialog', async (dialogWindow) => {

    expect(dialogWindow.type()).toContain("prompt"); // Fix case issue
    expect(dialogWindow.message()).toContain("I am a JS prompt"); // Validate prompt message
    
    await dialogWindow.accept("Test Input"); // Accept with input or use dismiss()
});
        await page.locator("//button[normalize-space()='Click for JS Prompt']").click()

        await page.waitForTimeout(5000)
    });