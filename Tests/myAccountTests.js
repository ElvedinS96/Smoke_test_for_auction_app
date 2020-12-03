var myAccountPage = require("../Pages/myAccountPage"),

    homePage = require("../Pages/homePage"),

    EC = protractor.ExpectedConditions,

    loginPage = require('../Pages/loginPage'),
    
    data = require("../Data/data.js");

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("016: My Account", function(){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userRafaNadal,data.passwordUserRafaNadal))
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle));
    })
    it("001: User is able to open 'Profile' page", function(){
        myAccountPage.clickOnLinks(data.profileLinkTitle)
            .then(() => myAccountPage.validateElement(data.profileHeadingTitle))
    }) 
    it("002: User isn't able to check 'Profile' if he isn't logged in", function(){
        homePage.clickOnLinks(data.logoutButtonTitle)
            .then(() => homePage.waitForCategories())
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle))
            .then(() => myAccountPage.clickOnLinks(data.profileLinkTitle))
            .then(() => loginPage.waitForElement(data.emailInputTitle))
            .then(() => loginPage.validateLoginPageURL())
    })
    it("003: User is able to open 'Your bids' page", function(){
        myAccountPage.clickOnLinks(data.yourBidsTitle)
            .then(() => myAccountPage.validateElement(data.yourBidsTable))
    })
    it("004: User isn't able to check 'Your bids' if he isn't logged in", function(){
        homePage.clickOnLinks(data.logoutButtonTitle)
            .then(() => homePage.waitForCategories())
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle))
            .then(() => myAccountPage.clickOnLinks(data.yourBidsTitle))
            .then(() => loginPage.waitForElement(data.emailInputTitle))
            .then(() => loginPage.validateLoginPageURL())
    })
    it("005: User is able to open 'Settings' page", function(){
        myAccountPage.clickOnLinks(data.settingsTitle)
            .then(() => myAccountPage.validateElement(data.settingsTitle))
    })
    it("006: User isn't able to open 'Settings' page if he isn't logged in", function(){
        homePage.clickOnLinks(data.logoutButtonTitle)
            .then(() => homePage.waitForCategories())
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle))
            .then(() => myAccountPage.clickOnLinks(data.settingsTitle))
            .then(() => loginPage.waitForElement(data.emailInputTitle))
            .then(() => loginPage.validateLoginPageURL())
    })
    it("007: User is able to open 'Profile' page from 'Your Bids' section", function(){
        myAccountPage.clickOnLinks(data.yourBidsTitle)
            .then(() => myAccountPage.clickOnElement(data.profileButton))
            .then(() => myAccountPage.validateElement(data.profileHeadingTitle))
    })
    it("008: User is able to open 'Profile' page from 'Settings' section", function(){
        myAccountPage.clickOnLinks(data.settingsTitle)
            .then(() => myAccountPage.clickOnElement(data.profileButton))
            .then(() => myAccountPage.validateElement(data.profileHeadingTitle))
    })
    it("009: User is able to open 'Your Bids' page from 'Profile' section", function(){
        myAccountPage.clickOnLinks(data.profileLinkTitle)
            .then(() => myAccountPage.clickOnElement(data.bidsButton))
            .then(() => myAccountPage.validateElement(data.yourBidsTable))
    })
    it("010: User is able to open 'Your Bids' page from 'Settings' section", function(){
        myAccountPage.clickOnLinks(data.settingsTitle)
            .then(() => myAccountPage.clickOnElement(data.bidsButton))
            .then(() => myAccountPage.validateElement(data.yourBidsTable))
    })
    it("011: User is able to open 'Settings' page from 'Profile' section", function(){
        myAccountPage.clickOnLinks(data.profileLinkTitle)
            .then(() => myAccountPage.clickOnElement(data.settingsButton))
            .then(() => myAccountPage.validateElement(data.settingsTitle))
    })
    it("012: User is able to open 'Settings' page from 'Your Bids' section", function(){
        myAccountPage.clickOnLinks(data.yourBidsTitle)
            .then(() => myAccountPage.clickOnElement(data.settingsButton))
            .then(() => myAccountPage.validateElement(data.settingsTitle))
    })
})