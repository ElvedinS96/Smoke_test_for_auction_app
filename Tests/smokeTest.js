var homePage = require('../Pages/homePage'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    dataJS = require("../Data/data");;

describe ('001: Smoke test', function(){
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    
    it ("001: User is able to sign in, click on item and place a bid", function (){
        homePage.openPageURL(dataJS.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnLogin())
            .then(() => loginPage.waitForEmailInput())
            .then(() => loginPage.enterEmail(dataJS.userRafaNadal))
            .then(() => loginPage.enterPassword(dataJS.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
            .then(() => homePage.clickOnFashionCategory())
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(dataJS.whiteJacket))
            .then(() => itemPage.clickOnImageSlider())
            .then(() => itemPage.enterBid(dataJS.bidForSmokeTest))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => itemPage.waitForUserImg())
            .then(() => itemPage.getUserName())
            .then((data) => itemPage.validateUsersName(data))
            .then(() => itemPage.getBidPrice())
            .then((data) => itemPage.validateUsersBid(data))
            .then(() => itemPage.getBidDate())
            .then((data) => itemPage.validateDateOfBid(data))
            .then(() => itemPage.getItemDetails())
            .then((data) => itemPage.validateItemDetails(data))
            .then(() => itemPage.waitForSuccessMessage())
            .then(() => itemPage.getBidConfirmationText())
            .then((data) => itemPage.validateHighestBidder(data))
            .then(() => homePage.clickOnLogoutButton())
    })
})