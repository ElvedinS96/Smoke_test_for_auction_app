var homePage = require('../Pages/homePage.js'),
    
    footer = require("../Pages/footer.js"),
    
    data = require("../Data/data.js");

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("005: Abouts Us", function (){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
        })
    it ("001: User is able to open 'About Us' section", function (){
        homePage.clickOnAboutUs()
            .then(() => footer.waitForParagraph())
            .then(() => footer.getParagraph())
            .then((aboutUsParagraph) => footer.validateTitleParagraph(aboutUsParagraph))
    })
});