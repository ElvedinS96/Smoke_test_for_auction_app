var homePage = require('../Pages/homePage.js'),
    
    loginPage = require('../Pages/loginPage'),
    
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    
    itemPage = require ("../Pages/itemPage"),
    
    data = require("../Data/data.js");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("004: Bidding", function(){
    beforeEach(()=> {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnLogin())
            .then(() => loginPage.enterEmail(data.userRafaNadal))
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
    })
    it("001: User is able to make a bid with decimal values", function (){
         homePage.clickOnFashionCategory()
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blackJacket))
            .then(() => itemPage.enterBid(data.bidWithDecimalPlaces))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => itemPage.waitForUserImg())
            .then(() => itemPage.getUserName())
            .then((userName) => itemPage.validateUsersName(userName))
            .then(() => itemPage.getBidPrice())
            .then((bidPrice) => itemPage.validateBidWithDecimalPlaces(bidPrice))
            .then(() => itemPage.getBidDate())
            .then((bidDate) => itemPage.validateDateOfBid(bidDate)) 
    });
    it("002: User is able to make a bid with round values", function(){
        homePage.clickOnFashionCategory()
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blackJacket2))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => itemPage.waitForUserImg())
            .then(() => itemPage.getUserName())
            .then((userName) => itemPage.validateUsersName(userName))
            .then(() => itemPage.getBidPrice())
            .then((bidPrice) => itemPage.validateHigherBid(bidPrice))
            .then(() => itemPage.getBidDate())
            .then((bidDate) => itemPage.validateDateOfBid(bidDate))
    }) 
    it("003: User isn't able to make bid which is lower than starting price", function(){
        homePage.clickOnFashionCategory()
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.brownJacket))
            .then(() => itemPage.enterBid(data.fiftyDollars))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => itemPage.waitForStatusInfo())
            .then(() => itemPage.getBidConfirmationText())
            .then((confirmationText) => itemPage.validateLowerThanStartingBid(confirmationText))
    })
    it("004: User is able to over-bid another User", function(){
        homePage.clickOnFashionCategory()
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => homePage.clickOnLogoutButton())
            .then(() => homePage.openPageURL(data.homepageLink))
            .then(() => homePage.clickOnLogin())
            .then(() => loginPage.enterEmail(data.userTester1))
            .then(() => loginPage.enterPassword(data.passwordTester1))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
            .then(() => homePage.clickOnFashionCategory())
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.sixThousandDollars))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => browser.sleep(3000))
            .then(() => itemPage.getBidConfirmationText())
            .then((confirmationMessage) => itemPage.validateHighestBidder(confirmationMessage))
    })
    it("005: Non-logged User can't place bid", function(){
        homePage.clickOnLogoutButton()
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnFashionCategory())
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => loginPage.waitForFormTitle())
            .then(() => loginPage.getPageURL())
            .then((loginURL) => loginPage.validateLoginPageURL(loginURL))
    })
    afterEach(() =>{
        homePage.clickOnLogoutButton();
    })
})