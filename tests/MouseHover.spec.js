const{test,expect} = require('@playwright/test')

test("Verify Mouse Hover perfectly work or not", async function({page})
{
    await page.goto("https://freelance-learn-automation.vercel.app/login")

    await page.getByPlaceholder('Enter Email').type('admin@email.com',{delay:200})
    await page.getByPlaceholder('Enter Password').fill('admin@123',{delay:200})
    //await page.locator("//button[normalize-space()='Sign in']").click()
    await page.getByRole("button",{name: 'Sign in'}).click()
    await page.waitForTimeout(2000)

    await page.locator("//span[normalize-space()='Manage']").hover()
    await page.locator("//a[normalize-space()='Manage Courses']").click()
    await page.waitForTimeout(1000)
    //await page.getByPlaceholder("Search by course name, instructor name or category").type('a')
    //await page.locator("//select[@name='sortField']").selectOption({value:"Instructor Name"})

    await expect(page).toHaveURL(/manage/)
})

