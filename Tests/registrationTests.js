var homePage = require('../Pages/homePage.js'),
    itemPage = require ("../Pages/itemPage"),
    registerPage = require ("../Pages/registerPage"),
    data = require("../Data/data.js");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

var homePage = require('../Pages/homePage.js'),
    itemPage = require ("../Pages/itemPage"),
    registerPage = require ("../Pages/registerPage"),
    data = require("../Data/data.js");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("002: Registration", function(){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        .then(() => homePage.clickOnCreateAnAccount())
    })

    it ("001: User is able to create account with valid credentials", function(){
        registerPage.enterFirstName(data.firstNameTester)
            .then(() => registerPage.enterLastName(data.lastNameTester))
            .then(() => registerPage.enterEmail())
            .then(() => registerPage.enterPassword(data.passwordTester))
            .then(() => registerPage.enterConfirmPassword(data.passwordTester))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => itemPage.waitForSuccessMessage())
            .then(() => registerPage.getRegistrationMessage())
            .then((registrationMessage) => registerPage.validateRegistrationMessage(registrationMessage))
    }) 

    it ("002: User isn't able to create account with invalid credentials", function (){
        registerPage.enterFirstName(data.fiveSpaces)
            .then(() => registerPage.enterLastName(data.fiveSpaces))
            .then(() => registerPage.enterEmail())
            .then(() => registerPage.enterPassword(data.fiveSpaces))
            .then(() => registerPage.enterConfirmPassword(data.fiveSpaces))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getFirstNameValidationMessage())
            .then((invalidFirstName) => registerPage.validateRequiredFirstName(invalidFirstName))
            .then(() => registerPage.getLastNameValidationMessage())
            .then((invalidLastName) => registerPage.validateRequiredLastName(invalidLastName))
            .then(() => registerPage.getPasswordValidationMessage())
            .then((invalidPassword) => registerPage.validateInvalidPassword(invalidPassword))
    })

    it ("003: User isn't able to create account with invalid characters", function (){
        registerPage.enterFirstName(data.dataWithInvalidCharacters)
            .then(() => registerPage.enterLastName(data.dataWithInvalidCharacters))
            .then(() => registerPage.enterEmail())
            .then(() => registerPage.enterPassword(data.fivePercentSigns))
            .then(() => registerPage.enterConfirmPassword(data.fivePercentSigns))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getFirstNameValidationMessage())
            .then((invalidFirstName) => registerPage.validateInvalidFirstName(invalidFirstName))
            .then(() => registerPage.getLastNameValidationMessage())
            .then((invalidLastName) => registerPage.validateInvalidLastName(invalidLastName))
    })
    it ("004: User isn't able to create account with empty field for 'First Name'", function(){
        registerPage.enterLastName(data.lastNameTester)
            .then(() => registerPage.enterEmail())
            .then(() => registerPage.enterPassword(data.fivePercentSigns))
            .then(() => registerPage.enterConfirmPassword(data.fivePercentSigns))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getFirstNameValidationMessage())
            .then((invalidFirstName) => registerPage.validateRequiredFirstName(invalidFirstName))
    });
    it ("005: User isn't able to create account with empty field for 'Last Name'", function (){
        registerPage.enterFirstName(data.firstNameTester)
            .then(() => registerPage.enterEmail())
            .then(() => registerPage.enterPassword(data.fivePercentSigns))
            .then(() => registerPage.enterConfirmPassword(data.fivePercentSigns))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getLastNameValidationMessage())
            .then((invalidLastName) => registerPage.validateRequiredLastName(invalidLastName))
    });
    it ("006: User isn't able to create account with empty field for 'Email'", function(){
        registerPage.enterFirstName(data.firstNameTester)
            .then(() => registerPage.enterLastName(data.lastNameTester))
            .then(() => registerPage.enterPassword(data.fivePercentSigns))
            .then(() => registerPage.enterConfirmPassword(data.fivePercentSigns))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getEmailValidationMessage())
            .then((invalidEmail) => registerPage.validateInvalidEmail(invalidEmail))
    });
    it ("007: User isn't able to create account with empty field for 'Password'", function(){
        registerPage.enterFirstName(data.firstNameTester)
            .then(() => registerPage.enterLastName(data.lastNameTester))
            .then(() => registerPage.enterConfirmPassword(data.fivePercentSigns))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getPasswordValidationMessage())
            .then((invalidPassword) => registerPage.validateInvalidPassword(invalidPassword))
    });
    it("008: User isn't able to create account with empty field for 'Confirm Pasword'", function(){
        registerPage.enterFirstName(data.firstNameTester)
            .then(() => registerPage.enterLastName(data.lastNameTester))
            .then(() => registerPage.enterEmail())
            .then(() => registerPage.enterPassword(data.fivePercentSigns))
            .then(() => registerPage.clickOnRegisterButton())
            .then(() => registerPage.getConfirmPasswordMessage())
            .then((invalidConfirmPassword) => registerPage.validateInvalidConfirmPassword(invalidConfirmPassword))
    }) 
});