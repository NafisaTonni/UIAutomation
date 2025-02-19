const{expect} = require("@playwright/test")


class HomePage
{
    // all locator
    constructor(page)
    {
        this.page  = page
        this.ManageOption = "//span[normalize-space()='Manage']"
        this.menu = "//img[@alt='menu']"
        this.SignoutButton = "//button[normalize-space()='Sign out']"
    }


    //Assertions

    async verifyManageOption()
    {
        await expect(this.page.locator(this.ManageOption)).toBeVisible();
    }


    //all action
    async LogoutApplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.SignoutButton)
    }

}
module.exports = HomePage