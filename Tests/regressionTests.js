var homePage = require('../Pages/homePage.js'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    registerPage = require ("../Pages/registerPage"),
    aboutUs = require("../Pages/aboutUs"),
    termsAndConditionsPage = require("../Pages/termsAndConditions"),
    privacyAndPolicyPage = require ("../Pages/privacyAndPolicy"),
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
describe("004: Bidding", function(){
    beforeEach(()=> {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnLogin())
            .then(() => loginPage.enterEmail(data.userRafaNadal))
            .then(() => loginPage.enterPassword(data.passwordUserRafaNadal))
            .then(() => loginPage.clickOnLoginButton())
            .then(() => homePage.waitForCategories())
    })
    afterEach(() =>{
        homePage.clickOnLogoutButton();
    })
     it ("001: User is able to make a bid with decimal values", function (){
         homePage.clickOnFashionCategory()
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.brownJacket))
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
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
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
            .then(() => fashionCategoryPage.clickOnItem(data.whiteJacket))
            .then(() => itemPage.enterBid(data.fiftyDollars))
            .then(() => itemPage.clickOnPlaceBidButton())
            .then(() => itemPage.waitForStatusInfo())
            .then(() => itemPage.getBidConfirmationText())
            .then((confirmationText) => itemPage.validateLowerThanStartingBid(confirmationText))
    }) 
})
 describe("005: Abouts Us", function (){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        })
    it ("001: User is able to open 'About Us' section", function (){
        homePage.clickOnAboutUs()
            .then(() => aboutUs.waitForAboutUsParagraph())
            .then(() => aboutUs.getAboutParagraph())
            .then((aboutUsParagraph) => aboutUs.validateAboutParagraph(aboutUsParagraph))
    })
});
describe("006: Terms and Conditions", function (){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        })
    it ("001: User is able to open 'Terms and Conditions' section", function (){
        homePage.clickOnTermsAndConditions()
            .then(() => termsAndConditionsPage.waitForAboutParagraph())
            .then(() => termsAndConditionsPage.getIntroductionParagraph())
            .then((introductionParagraph) => termsAndConditionsPage.validateTitleParagraph(introductionParagraph))
    })
})
describe("007: Privacy and Policy", function (){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        })
    it ("001: User is able to open 'Privacy and Policy' section", function (){
        homePage.clickOnPrivacyAndPolicy()
            .then(() => privacyAndPolicyPage.waitForHelperParagraph())
            .then(() => privacyAndPolicyPage.getSomeTitleParagraph())
            .then((titleParagraph) => privacyAndPolicyPage.validateTitleParagraph(titleParagraph))
    }) 
})
