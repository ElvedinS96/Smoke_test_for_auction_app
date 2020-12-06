var homePage = require('../Pages/homePage.js'),
    loginPage = require('../Pages/loginPage'),
    itemPage = require ("../Pages/itemPage"),
    registerPage = require ("../Pages/registerPage"),
    data = require("../Data/data.js");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("003: Login", function(){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink);
    })
    it("001: User is able to log in after creating account", function(){
        homePage.clickOnLinks(data.createAnAccountTitle)
            .then(() => registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.sendStaticEmail,data.passwordUserRafaNadal,data.passwordUserRafaNadal))
            .then(() => itemPage.waitForElement(data.successMessage))
            .then(() => registerPage.clickOnElement(data.hereLinkTitle))
            .then(() => loginPage.waitForElement(data.formTitle))
            .then(() => loginPage.logIn(data.email2,data.passwordUserRafaNadal))
            .then(() => homePage.validateHomePageURL())
    }); 
    it("002: User is able to log in from 'Register' page", function(){
        homePage.clickOnLinks(data.createAnAccountTitle)
            .then(() => registerPage.clickOnElement(data.wordLoginTitle))
            .then(() => loginPage.waitForElement(data.formTitle))
            .then(() => loginPage.logIn(data.userRafaNadal,data.passwordUserRafaNadal))
            .then(() => homePage.validateHomePageURL())
    }) 
    it("003: User is able to log in from 'Create an account' form", function(){
        homePage.clickOnLinks(data.createAnAccountTitle)
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userRafaNadal,data.passwordUserRafaNadal))
            .then(() => homePage.validateHomePageURL())
    })
    it("004: User isn't able to log in without password", function(){
        homePage.clickOnLinks(data.loginLinkTitle)
            .then(() => loginPage.logIn(data.userRafaNadal,data.emptyString,false))
            .then(() => browser.sleep(2000))
            .then(() => loginPage.validateLoginMessage())
    })
    it("005: User isn't able to log in without email", function(){
        homePage.clickOnLinks(data.loginLinkTitle)
            .then(() => loginPage.logIn(data.emptyString,data.passwordUserRafaNadal,false))
            .then(() => browser.sleep(2000))
            .then(() => loginPage.validateLoginMessage())
    })
    it("006: User isn't able to log in with other User's password", function(){
        homePage.clickOnLinks(data.loginLinkTitle)
            .then(() => loginPage.logIn(data.userRafaNadal,data.password2,false))
            .then(() => browser.sleep(2000))
            .then(() => loginPage.validateLoginMessage())

    })
    afterEach(() => {
        homePage.clickOnLinks(data.logoutButtonTitle);
    })
})