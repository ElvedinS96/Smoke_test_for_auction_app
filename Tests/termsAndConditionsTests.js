var homePage = require('../Pages/homePage.js'),
    termsAndConditionsPage = require("../Pages/termsAndConditions"),
    data = require("../Data/data.js");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("006: Terms and Conditions", function (){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        })
    it ("001: User is able to open 'Terms and Conditions' section", function (){
        homePage.clickOnTermsAndConditions()
            .then(() => termsAndConditionsPage.waitForParagraph())
            .then(() => termsAndConditionsPage.getParagraph())
            .then((introductionParagraph) => termsAndConditionsPage.validateTitleParagraph(introductionParagraph))
    })
})