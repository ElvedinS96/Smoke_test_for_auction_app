var myAccountPage = require("../Pages/myAccountPage"),
    homePage = require("../Pages/homePage"),
    loginPage = require('../Pages/loginPage'),
    data = require("../Data/data.js"),
    UITasks = require("../Tasks/UITasks"),
    itemPage = require("../Pages/itemPage");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("016: My Account", function(){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userTester2,data.passwordTester1))
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle));
    })
    it("001: User is able to open 'Profile' page", function(){
        myAccountPage.clickOnLinks(data.profileLinkTitle)
            .then(() => myAccountPage.validateElement(data.profileHeadingTitle))
    }) 
    it("002: User isn't able to check 'Profile' if he isn't logged in", function(){
        UITasks.checkMyAccountSection(data.profileLinkTitle)
    })
    it("003: User is able to open 'Your bids' page", function(){
        myAccountPage.clickOnLinks(data.yourBidsTitle)
            .then(() => myAccountPage.validateElement(data.yourBidsTable))
    })
    it("004: User isn't able to check 'Your bids' if he isn't logged in", function(){
        UITasks.checkMyAccountSection(data.yourBidsTitle)
    })
    it("005: User is able to open 'Settings' page", function(){
        myAccountPage.clickOnLinks(data.settingsTitle)
            .then(() => myAccountPage.validateElement(data.settingsTitle))
    })
    it("006: User isn't able to open 'Settings' page if he isn't logged in", function(){
        UITasks.checkMyAccountSection(data.settingsTitle)
    })
    it("007: User is able to open 'Profile' page from 'Your Bids' section", function(){
        myAccountPage.openAndValidateSections(data.yourBidsTitle,data.profileButton,data.profileHeadingTitle)
    })
    it("008: User is able to open 'Profile' page from 'Settings' section", function(){
        myAccountPage.openAndValidateSections(data.settingsTitle,data.profileButton,data.profileHeadingTitle)
    })
    it("009: User is able to open 'Your Bids' page from 'Profile' section", function(){
        myAccountPage.openAndValidateSections(data.profileLinkTitle,data.bidsButton,data.yourBidsTable)
    })
    it("010: User is able to open 'Your Bids' page from 'Settings' section", function(){
        myAccountPage.openAndValidateSections(data.settingsTitle,data.bidsButton,data.yourBidsTable)
    })
    it("011: User is able to open 'Settings' page from 'Profile' section", function(){
        myAccountPage.openAndValidateSections(data.profileLinkTitle,data.settingsButton,data.settingsTitle)
    })
    it("012: User is able to open 'Settings' page from 'Your Bids' section", function(){
        myAccountPage.openAndValidateSections(data.yourBidsTitle,data.settingsButton,data.settingsTitle)
    })
    it("013: User is able to see his bids in 'Your Bids' section", function(){
        myAccountPage.clickOnLinks(data.homePageLink)
            .then(() => UITasks.bidOnItemFromFashionCategory(data.blackJacket,data.bidWithDecimalPlaces))
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle))
            .then(() => myAccountPage.clickOnLinks(data.yourBidsTitle))
            .then(() => myAccountPage.validateElement(data.viewButton))
    })
    it("014: User is able to check options from 'Policy and Community' which is located in 'Settings' section", function(){
        myAccountPage.openAndValidateSections(data.settingsTitle,data.checkboxesTitle,data.checkboxesTitle)
    })
    it("015: User is able to open item's page from 'Your Bids' section", function(){
        myAccountPage.clickOnLinks(data.homePageLink)
            .then(() => UITasks.bidOnItemFromFashionCategory(data.blackJacket,data.bidWithDecimalPlaces))
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle))
            .then(() => myAccountPage.clickOnLinks(data.yourBidsTitle))
            .then(() => myAccountPage.clickOnElement(data.viewButton))
            .then(() => itemPage.validateBidElements(false))
    })
    it("017: User is able to change profile information", function(){
        myAccountPage.clickOnLinks(data.profileLinkTitle)
            .then(() => UITasks.updateProfileInformation())
    })
    afterEach(() => {
        homePage.clickOnLinks(data.logoutButtonTitle);
    })
})