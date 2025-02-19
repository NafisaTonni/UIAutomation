const{test,expect} = require('@playwright/test')

//const Selector =  require("../pages/selector")
const Action = require("../pages/action")

test("Login To Application using POM=> ", async ({page})=>
{

    await page.goto("https://freelance-learn-automation.vercel.app/login")

    //----------login-----------//
    const loginAction = new Action(page)
    //await Action.VerifyHeaderText()
    //await loginPage.LoginToApplication()
    //await Action.LogoutApplication();
    await loginAction.LoginToApplication();


    //------------ Verify & Logout -----------//
    // const homePage = new Action(page)

    // await homePage.verifyManageOption()
    // console.log("shown")
    // await homePage.LogoutApplication()

    // await loginPage.verifyHeaderText()
    // console.log("Sign in text show") 


    // await loginPage.verifyManageOption();
    // console.log("Manage option is visible");

    // await loginPage.LogoutApplication();
    // await loginPage.verifyHeaderText();
    // console.log("Sign-in text is visible again");
});