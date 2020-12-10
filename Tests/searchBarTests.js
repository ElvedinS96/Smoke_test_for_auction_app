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
        shop.searchAndValidateElements(data.colorToSearch,data.searchByClickOnIcon)
    })
    it("002: User is able to search for items by item title", function(){
        shop.searchAndValidateElements(data.titleJacket,data.searchByClickOnIcon)
    })
    it("003: User is able to search data by pressing 'ENTER'", function(){
        shop.searchAndValidateElements(data.titleJacket,data.searchByKeyEnter)
    })
    it("004: User isn't able to see items when entering invalid input", function(){
        shop.searchAndValidateElements(data.dataWithInvalidCharacters,data.searchByKeyEnter)
    })
})