var homePage = require('../Pages/homePage'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    data = require("../Data/data");

describe ('001: Smoke test', function(){
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    
    it ("001: User is able to sign in, click on item and place a bid", function (){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnLogin())
            .then(() => loginPage.waitForEmailInput())
            .then(() => loginPage.enterEmail(data.userRafaNadal))
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
            .then(() => homePage.clickOnFashionCategory())
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.clickOnImageSlider())
            .then(() => itemPage.enterBid(data.bidForSmokeTest))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => itemPage.waitForUserImg())
            .then(() => itemPage.getUserName())
            .then((userName) => itemPage.validateUsersName(userName))
            .then(() => itemPage.getBidPrice())
            .then((bidPrice) => itemPage.validateUsersBid(bidPrice))
            .then(() => itemPage.getBidDate())
            .then((bidDate) => itemPage.validateDateOfBid(bidDate))
            .then(() => itemPage.getItemDetails())
            .then((itemDetails) => itemPage.validateItemDetails(itemDetails))
            .then(() => itemPage.waitForSuccessMessage())
            .then(() => itemPage.getBidConfirmationText())
            .then((bidConfirmationText) => itemPage.validateHighestBidder(bidConfirmationText))
            .then(() => homePage.clickOnLogoutButton())
    })
})
