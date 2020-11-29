var homePage = require('../Pages/homePage.js'),
    
    itemPage = require ("../Pages/itemPage"),
    
    data = require("../Data/data.js");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("009: Top Rated", function(){
    it("001: User is able to open item from 'Top Rated' section", function(){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnElement(data.topRatedTitle))
            .then(() => homePage.clickOnElement(data.firstItemForLinksTitle))
            .then(() => itemPage.validateBidElements(data.booleanFalse))
    })
})