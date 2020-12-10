var homePage = require('../Pages/homePage.js'),
    itemPage = require ("../Pages/itemPage"),
    data = require("../Data/data.js");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("010: Last Chance", function(){
    it("001: User is able to open item from 'Last Chance' section", function(){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnElement(data.lastChanceTitle))
            .then(() => homePage.clickOnElement(data.firstItemForLinksTitle))
            .then(() => itemPage.validateBidElements(false))

    })
})