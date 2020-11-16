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
    afterEach(() => {
        homePage.clickOnLogoutButton();
    })
    it("001: User is able to log in after creating account", function(){
        homePage.clickOnCreateAnAccount()
            .then(() => registerPage.enterFirstName(data.firstNameTester))
            .then(() => registerPage.enterLastName(data.lastNameTester))
            .then(() => registerPage.enterDataEmail(data.email2))
            .then(() => registerPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => registerPage.enterConfirmPassword(data.passwordUserRafaNadal))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => itemPage.waitForSuccessMessage())
            .then(() => registerPage.clickOnHereLink())
            .then(() => loginPage.waitForFormTitle())
            .then(() => loginPage.enterEmail(data.email2))
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
            .then(() => homePage.getHomePageURL())
            .then((URL) => homePage.validateHomePageURL(URL))
        });   

    it("002: User is able to log in from 'Register' page", function(){
        homePage.clickOnCreateAnAccount()
            .then(() => registerPage.clickOnWordLogin())
            .then(() => loginPage.waitForFormTitle())
            .then(() => loginPage.enterEmail(data.userRafaNadal))
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => registerPage.waitForLoginWord())
            .then(() => registerPage.getRegisterURL())
            .then((URL) => registerPage.validateRegisterPageURL(URL))
    })
    it("003: User is able to log in from 'Create an account' form", function(){
       
        homePage.clickOnCreateAnAccount()
            .then (() =>homePage.clickOnLogin())
            .then(() => loginPage.enterEmail(data.userRafaNadal))
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
            .then(() => homePage.getHomePageURL())
            .then((URL) => homePage.validateHomePageURL(URL))
    })
    it("004: User isn't able to log in without password", function(){
        homePage.clickOnLogin()
            .then(() => loginPage.enterEmail(data.userRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => browser.sleep(2000))
            .then(() => loginPage.getLoginValidationMessage())
            .then((email) => loginPage.validateMissingField(email))
    })
    it("005: User isn't able to log in without email", function(){
        homePage.clickOnLogin()
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => browser.sleep(2000))
            .then(() => loginPage.getLoginValidationMessage())
            .then((password) => loginPage.validateMissingField(password))
    }) 
})