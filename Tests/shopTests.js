var homePage = require('../Pages/homePage.js'),
    data = require("../Data/data.js"),
    itemPage = require ("../Pages/itemPage"),
    shopPage= require("../Pages/shop");

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("013: Shop", function(){
    beforeEach(()=> {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnShop())
            .then(() => shopPage.waitForShop())
    });
    it("001: User is able to open 'Shop'", function(){
        shopPage.getPageURL()
            .then((shopURL) => shopPage.validateShopPageURL(shopURL));
    });
    it("002: User is able to see item in list view", function(){
        shopPage.clickOnListViewButton()
            .then(() => shopPage.getListViewButtonAttribute())
            .then((attribute) => shopPage.validateItemAttribute(attribute))
        })
     it("003: User is able to open item in grid view", function(){
        shopPage.hoverOnItemInGridView(data.itemNumber)
            .then(() => shopPage.clickOnHoveredItem())
            .then(() => itemPage.getItemDetails())
            .then((itemDetails) => itemPage.validateItemDetails(itemDetails))
    }) 
    it("005: User is able to open and close filters from 'Product categories'", function(){
        shopPage.clickOnFashionFilter(data.fashionFilter)
            .then(() => shopPage.clickOnFashionFilter(data.fashionFilter))
            .then(() => shopPage.clickOnFashionFilter(data.accessoriesFilter))
            .then(() => shopPage.clickOnFashionFilter(data.accessoriesFilter))
            .then(() => shopPage.clickOnFashionFilter(data.jewelryFilter))
            .then(() => shopPage.clickOnFashionFilter(data.jewelryFilter))
            .then(() => shopPage.clickOnFashionFilter(data.shoesFilter))
            .then(() => shopPage.clickOnFashionFilter(data.shoesFilter))
            .then(() => shopPage.clickOnFashionFilter(data.sportsWearFilter))
            .then(() => shopPage.clickOnFashionFilter(data.sportsWearFilter))
            .then(() => shopPage.clickOnFashionFilter(data.homeFilter))
            .then(() => shopPage.clickOnFashionFilter(data.homeFilter))
            .then(() => shopPage.clickOnFashionFilter(data.electronicsFilter))
            .then(() => shopPage.clickOnFashionFilter(data.electronicsFilter))
            .then(() => shopPage.clickOnFashionFilter(data.mobileFilter))
            .then(() => shopPage.clickOnFashionFilter(data.mobileFilter))
            .then(() => shopPage.clickOnFashionFilter(data.comuputerFilter))
            .then(() => shopPage.clickOnFashionFilter(data.comuputerFilter))
            .then(() => shopPage.clickOnFashionFilter(data.gardenFilter))
            .then(() => shopPage.clickOnFashionFilter(data.gardenFilter))
    });
    it("007: User is able to filter by Price", function(){
        shopPage.moveLeftSlider(200)
    })

})