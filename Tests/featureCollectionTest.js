var homePage = require('../Pages/homePage.js'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    data = require("../Data/data.js");
    
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("012: Feature Collection", function(){
    it("001: User is able to open item from 'Feature Collection' section", function(){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnElement(data.featureCollectionCollectionTitle))
            .then(() => fashionCategoryPage.validateCollectionURL())
    })
})