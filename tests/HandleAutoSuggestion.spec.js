const{test, expect} = require('@playwright/test');
const { waitForDebugger } = require('inspector');
const { text } = require('stream/consumers');

// test("verify Application Title Using Keyboard", async ({page})=>
//     {
//         await page.goto("https://www.google.com/");
//         await page.waitForTimeout(3000);

//         await page.locator('#APjFqb').type("playwrighty",{delay:200})
//         await page.waitForSelector("//li[@role='presentation']")
//         await page.keyboard.press("ArrowDown")
//         await page.keyboard.press("ArrowDown")
//         await page.keyboard.press("Enter")
//         //await page.waitForTimeout(5000)

//     })

test.only("verify Application Title Using loop", async ({page})=>
    {
        await page.goto("https://www.google.com/");
        await page.waitForTimeout(3000);
    
        await page.locator('#APjFqb').type("playwrighty",{delay:200})
        await page.waitForSelector("//li[@role='presentation']")
        const element = await page.$$("//li[@role='presentation']")

        for(let i=0 ; i<element.length ; i++)
        {
           const text = await element[i].textContent()
           

           if(text.includes('python'))
            break
        }
        console.log("text",+text)
    
    })