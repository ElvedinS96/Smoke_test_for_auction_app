var homePage = require('../Pages/homePage.js'),

    shop = require("../Pages/shop")
    
    data = require("../Data/data.js");

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("015: Search bar", function(){
    beforeEach(() => {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnLinks(data.shopTitle))
    })
    it("001: User is able to search for items by color", function(){
            shop.searchForItems(data.colorToSearch,data.searchByClickOnIcon)
            .then(() => shop.validateElements())
    })
    it("002: User is able to search for items by item title", function(){
            shop.searchForItems(data.titleJacket,data.searchByClickOnIcon)
            .then(() => shop.validateElements())
    })

})