const{expect} = require('@playwright/test')

class selector
{
    constructor(page) 
    {  
        this.page = page;
    }

     // Define locators using this.page
    get headerTxt()
    {
        return this.page.locator("//h2[normalize-space()='Sign In']")
    }
    get UserEmail()
    {
        return this.page.locator("//input[@id='email1']")
    }
    get Password()
    {
        return this.page.locator("//input[@id='password1']")
    }
    get SigninButton()
    {
        return this.page.locator("//button[normalize-space()='Sign in']")
    }
    get ManageOption()
    {
        return this.page.locator("//span[normalize-space()='Manage']")
    }
    get Menu()
    {
        return this.page.locator("//img[@alt='menu']")
    }
    get SignoutButton()
    {
        return this.page.locator("//button[normalize-space()='Sign out']")
    }
}

module.exports = selector

