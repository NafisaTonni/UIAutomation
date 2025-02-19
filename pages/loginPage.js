const{expect} = require('@playwright/test')

class LoginPage
{
    // all locator
    constructor(page)
    {
        this.page      = page
        this.header = "//h2[normalize-space()='Sign In']"
        this.UserEmail = "#email1"
        this.Password  = "#password1"
        this.SigninButton = "//button[normalize-space()='Sign in']"

    }

    //Assertions
    async verifyHeaderText()
    {
        await expect(this.page.locator(this.header)).toBeVisible();
    }

    //all action
    async LoginToApplication(user,pass)
    {
        await this.page.fill(this.UserEmail,"admin@email.com") 
        await this.page.fill(this.Password, "admin@123") 

        await this.page.click(this.SigninButton)

    }
}

module.exports = LoginPage