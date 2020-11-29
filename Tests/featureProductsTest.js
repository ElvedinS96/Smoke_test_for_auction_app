var homePage = require('../Pages/homePage.js'),
    
    itemPage = require ("../Pages/itemPage"),
    
    data = require("../Data/data.js");

    browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("011: Feature Products", function(){
    it("001: User is able to open item from 'Feature Products' section", function(){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnElement(data.featureCollectionProductsTitle))
            .then(() => itemPage.validateBidElements(data.booleanFalse))

    })
})