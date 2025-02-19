const{test, expect} =require('@playwright/test');
const { type } = require('os');

test("Keyboard Event in Playwright",async ({page})=>
{
    await page.goto("https://www.google.com/");
    await page.waitForTimeout(2000)

    // await page.locator('#APjFqb').type("playwright",{delay:100} )
    // //await page.keyboard.press("Enter")

    /*------------------------------multiple selection-------------*/
    // await page.keyboard.press("Meta+A")
    // await page.keyboard.press("Backspace")
    // await page.keyboard.press("Meta+C")
    // await page.keyboard.press("Meta+V")

    /*-----------------------another way---------------------*/
    await page.locator('#APjFqb').focus()

    await page.keyboard.type("Playwright Keyboard",{delay:100})
    await page.keyboard.press("ArrowLeft")
    await page.keyboard.down("Shift")
    await page.waitForTimeout(1000)

    // for(let i=0; i<7 ; i++)
    // {
    //     await page.keyboard.press("ArrowLeft")
    // }

    for( let i=0; i<'keyboard'.length; i++)
    {
        await page.keyboard.press("ArrowLeft")
    }
    await page.waitForTimeout(1000)
    await page.keyboard.up("Shift")
    await page.keyboard.press("Backspace")
})