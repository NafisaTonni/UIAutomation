const{test, expect} = require('@playwright/test')

test("verify file upload:",async function({page})
{
    await page.goto("https://the-internet.herokuapp.com/upload")
    // //take from desktop
    // await page.locator("#file-upload").setInputFiles("/Users/nafisayeasmin/Desktop/image.png")

    //take from project folder

    await page.locator('#file-upload').setInputFiles("./upload/image.png")
    await page.waitForTimeout(3000)
    await page.locator("//input[@id='file-submit']").click()

    expect(await page.locator("//h3")).toHaveText("File Uploaded!")
})