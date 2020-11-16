var homePage = require('../Pages/homePage.js'),
    aboutUs = require("../Pages/aboutUs"),
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
            .then(() => aboutUs.waitForAboutUsParagraph())
            .then(() => aboutUs.getAboutParagraph())
            .then((aboutUsParagraph) => aboutUs.validateAboutParagraph(aboutUsParagraph))
    })
});