var homePage = require('../Pages/homePage.js'),
    privacyAndPolicyPage = require ("../Pages/privacyAndPolicy"),
    data = require("../Data/data.js");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

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