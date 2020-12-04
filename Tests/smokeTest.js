var homePage = require('../Pages/homePage'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    data = require("../Data/data");

describe ("001: Smoke test", function(){
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    
    it ("001: User is able to sign in, click on item and place a bid", function (){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.waitForElement(data.emailInputTitle))
            .then(() => loginPage.logIn(data.userRafaNadal,data.passwordUserRafaNadal))
            .then(() => homePage.clickOnCategory(data.fashionCategory))
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.whiteJacket))
            .then(() => itemPage.clickOnElement(data.imageSliderTitle))
            .then(() => itemPage.enterBid(data.bidForSmokeTest))
            .then(() => itemPage.waitForElement(data.waitForUserImg))
            .then(() => itemPage.validateBidElements())
            .then(() => homePage.clickOnLinks(data.logoutButtonTitle))
    })
})
