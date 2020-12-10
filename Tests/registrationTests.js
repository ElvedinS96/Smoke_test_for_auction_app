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
        .then(() => homePage.clickOnLinks(data.createAnAccountTitle))
    })

    it("001: User is able to create account with valid credentials", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.emailTitle,data.passwordTester,data.passwordTester)
            .then(() => itemPage.waitForElement(data.successMessage))
            .then(() => registerPage.validateInputMessages()) 
    }) 
    it("002: User isn't able to create account with invalid credentials", function(){
        registerPage.registrateAnAccount(data.fiveSpaces,data.fiveSpaces,data.emailTitle,data.fiveSpaces,data.fiveSpaces)
    })
    it("003: User isn't able to create account with invalid characters", function(){
        registerPage.registrateAnAccount(data.dataWithInvalidCharacters,data.dataWithInvalidCharacters,data.emailTitle,data.fivePercentSigns,data.fivePercentSigns)
    }) 
    it("004: User isn't able to create account with empty field for 'First Name'", function(){
        registerPage.registrateAnAccount(data.emptyString,data.lastNameTester,data.emailTitle,data.fivePercentSigns,data.fivePercentSigns)
    });
    it("005: User isn't able to create account with empty field for 'Last Name'", function (){
        registerPage.registrateAnAccount(data.firstNameTester,data.emptyString,data.emailTitle,data.fivePercentSigns,data.fivePercentSigns)
    });
    it("006: User isn't able to create account with empty field for 'Email'", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.emptyString,data.fivePercentSigns,data.fivePercentSigns)
    });
    it("007: User isn't able to create account with empty field for 'Password'", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.emailTitle,data.passwordTester,data.passwordTester)
    });
    it("008: User isn't able to create account with empty field for 'Confirm Pasword'", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.emailTitle,data.passwordTester,data.emptyString)
    }) 
    it("009: User isn't able to create account with email which ends without '.com'", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.makeEmailWithoutDomain,data.passwordTester,data.passwordTester)
    })
    it("010: User isn't able to create account with email which doesn't contain '@'", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.emailWithoutat,data.passwordTester,data.passwordTester)
    })
    it("011: User isn't able to registrate without matching passwords", function(){
        registerPage.registrateAnAccount(data.firstNameTester,data.lastNameTester,data.emailTitle,data.password1,data.password2)
    })
});