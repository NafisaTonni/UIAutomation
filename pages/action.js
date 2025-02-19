const selector = require("./selector")
//const Locator = require("../pages/selector")

const{expect} = require('@playwright/test')


    class action 
    {
        constructor(page) 
        {
            this.page = page;
            this.locators = new selector(page); // Initialize locators
        }

    async VerifyHeaderText()
    {
        await expect(this.locators.headerTxt).toBeVisible();
    }

    async LoginToApplication() 
    {
        await this.locators.UserEmail.fill("admin@email.com");
        await this.locators.Password.fill("admin@123");
        await this.locators.SigninButton.click();


        // await selector.UserEmail.fill("admin@email.com");
        // await selector.Password.fill("admin@123");
        // await selector.SigninButton.click();
       
    }
    

    async verifyManageOption() 
    {
        await expect(this.locators.ManageOption).toBeVisible();
    }

    async LogoutApplication()
     {
        await this.locators.Menu.click();
        await this.locators.SignoutButton.click();
    }

    // async UserEmail()
    // {
    //     await this.UserEmail.fill("admin@email.com")
    // }

    // async Password()
    // {
    //     await this.Password.fill("admin@123");
    // }

    // async SigninButton()
    // {
    //     await this.SigninButton.click();
    // }
    // async ManageOption()
    // {
    //     await expect(this.ManageOption).toBeVisible();
    // }
    // async Menu()
    // {
    //     await this.Menu.click()
    // }
    // async SignoutButton()
    // {
    //     await this.SignoutButton.click()
    // }
}


module.exports = action;