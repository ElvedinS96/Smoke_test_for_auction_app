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
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userRafaNadal,data.passwordUserRafaNadal))
    })
    it("001: User is able to make a bid with decimal values", function (){
         homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blackJacket))
            .then(() => itemPage.enterBid(data.bidWithDecimalPlaces))
            .then(() => itemPage.waitForElement(data.waitForUserImg))
            .then(() => itemPage.validateBidElements()) 
    }); 
    it("002: User is able to make a bid with round values", function(){
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blackJacket2))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => itemPage.waitForElement(data.waitForUserImg))
            .then(() => itemPage.validateBidElements())
    }) 
    it("003: User isn't able to make bid which is lower than starting price", function(){
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.brownJacket))
            .then(() => itemPage.enterBid(data.fiftyDollars))
            .then(() => itemPage.waitForElement(data.statusInfoTitle))
            .then(() => itemPage.validateBidElements(data.booleanFalse))
    })
    it("004: User is able to over-bid another User", function(){
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => itemPage.clickOnElement(data.bidButtonTitle))
            .then(() => homePage.clickOnLinks(data.logoutButtonTitle))
            .then(() => homePage.openPageURL(data.homepageLink))
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userTester1,data.passwordTester1))
            .then(() => homePage.clickOnElement(data.fashionCategoryTitle))
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.sixThousandDollars))
            .then(() => browser.sleep(3000))
            .then(() => itemPage.validateBidElements())
    })
    it("005: Non-logged User can't place bid", function(){
        homePage.clickOnLinks(data.logoutButtonTitle)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnElement(data.fashionCategoryTitle))
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => loginPage.waitForElement(data.formTitle))
            .then(() => loginPage.validateLoginPageURL())
    })
    afterEach(() =>{
        homePage.clickOnLinks(data.logoutButtonTitle);
    })
})