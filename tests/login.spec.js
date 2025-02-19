const{test,expect} = require('@playwright/test')

const { log } = require('node:console')

/// await operator is used to wait for a Promise and get its fulfillment value.
// It can only be used inside an async function or at the top level of a module

//only ei test er jonno browser manual edit kora
test.use({viewport:{width:1500, height:1000}})

 test("valid Login",async function({page}){

//Login

await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//browser er jei width seta bole dibe
console.log(await page.viewportSize().width)

// jei browser open hbe tar height bole dibe
console.log(await page.viewportSize().height)

// fillup user name field
await page.getByPlaceholder("Username").type("Admin",{delay:200})

// enter password
await page.locator("input[name='password']").type("admin123",{delay:200})

//click login button
await page.locator("//button[@type='submit']").click()

//debaging (wait the dashboard for 5 sec)
await page.waitForTimeout(5000)

//expected result
await expect(page).toHaveURL(/dashboard/);
//

//logout

//1st jei profile pic ache sei ta select korbe
 await page.getByAltText("profile picture").first().click() 
 //wait for 3s
 await page.waitForTimeout(3000)

 await page.getByText("Logout").click()
 //debaging (wait the dashboard for 5 sec)
await page.waitForTimeout(5000)

 //expected result
await expect(page).toHaveURL(/login/);
 })