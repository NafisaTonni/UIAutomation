const{test,expect} = require('@playwright/test')

test("select Value from dropdown", async function ({page}) 
{
    await page.goto("https://freelance-learn-automation.vercel.app/signup")
    /******************** 
    1. label
    2. value
    3. index
    *********************/

    await page.locator("#state").selectOption({label:"Assam"})

    //await page.waitForTimeout(3000)

    await page.locator("#state").selectOption({value: "Kerala"})

    //await page.waitForTimeout(3000)

    await page.locator("#state").selectOption({index: 2})

   // await page.waitForTimeout(3000)

   /*
    const value = await page.locator('#state').textContent()
    console.log("All Dropdown values are: " +value);

    await expect(value.includes('Kerala')).toBeTruthy

  */
 
    let state = await page.$('#state')
    let Allelements = await page.$$('option')

    let findOption = false

    for(let i=0 ; i<Allelements.length ; i++)
    {
        let elements = Allelements[i]
        let values =  await elements.textContent()
        console.log("All value from dropdown are:  " +values)

        if(values.includes("Uttar Pradesh"))
        {
          //if condition er vitore jei value diya oi value pele se brk korbe nd then expected result er sathe match korbe
          findOption = true
          break
        }
    }
    await expect(findOption).toBeTruthy
    await page.locator('#hobbies').selectOption(['Playing','Dancing'])
    await page.waitForTimeout(3000)
})