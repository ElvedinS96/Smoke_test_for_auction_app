var homePage = require('../Pages/homePage.js'),
    data = require("../Data/data.js");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("007: Privacy and Policy", function (){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        })
    it ("001: User is able to open 'Privacy and Policy' section", function(){
        homePage.clickOnLinks(data.privacyAndPolictyTitle)
            .then(() => homePage.validateTitleParagraph())
    }) 
})