var homePage = require('../Pages/homePage.js'),
    loginPage = require('../Pages/loginPage'),
    itemPage = require ("../Pages/itemPage"),
    UITasks = require("../Tasks/UITasks"),
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
        UITasks.bidOnItemFromFashionCategory(data.blackJacket2,data.bidWithDecimalPlaces)
            .then(() => itemPage.waitAndValidateElement(data.waitForUserImg))
    }); 
    it("002: User is able to make a bid with round values", function(){
        UITasks.bidOnItemFromFashionCategory(data.blackJacket2,data.fiveThousandDollars)
            .then(() => itemPage.waitAndValidateElement(data.waitForUserImg))
    }) 
    it("003: User isn't able to make bid which is lower than starting price", function(){
        UITasks.bidOnItemFromFashionCategory(data.blackJacket2,data.fiftyDollars)
            .then(() => itemPage.waitAndValidateElement(data.statusInfoTitle,false))
    })
    it("004: User is able to over-bid another User", function(){
        UITasks.userOverBid()
            .then(() => itemPage.waitAndValidateElement(data.waitForUserImg))
    })
    it("005: Non-logged User can't place bid", function(){
        homePage.clickOnLinks(data.logoutButtonTitle)
            .then(() => homePage.waitForLoginButton())
            .then(() => UITasks.bidOnItemFromFashionCategory(data.blackJacket2,data.fiveThousandDollars))
            .then(() => loginPage.waitForElement(data.formTitle))
            .then(() => loginPage.validateLoginPageURL())
    })
    afterEach(() =>{
        homePage.clickOnLinks(data.logoutButtonTitle);
    })
})