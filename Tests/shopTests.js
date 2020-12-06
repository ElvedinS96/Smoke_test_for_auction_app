var homePage = require('../Pages/homePage.js'),
    data = require("../Data/data.js"),
    itemPage = require ("../Pages/itemPage"),
    shopPage= require("../Pages/shop"),
    UITasks = require("../Tasks/UITasks");

browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("013: Shop", function(){
    beforeEach(()=> {
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.clickOnLinks(data.shopTitle))
            .then(() => shopPage.waitForElement(data.waitForShopTitle))
    });
    it("001: User is able to open 'Shop'", function(){
        shopPage.getPageURL()
            .then((shopURL) => shopPage.validateShopPageURL(shopURL));
    });
    it("002: User is able to see item in list view", function(){
        shopPage.clickOnElement(data.listViewButton)
            .then(() => shopPage.getElement(data.listViewButtonAttribute))
            .then((attribute) => shopPage.validateItemAttribute(attribute))
    }) 
    it("003: User is able to open item in list view", function(){
        shopPage.clickOnElement(data.listViewButton)
            .then(() => shopPage.waitForElement(data.bidButtonTitle))
            .then(() => shopPage.clickOnElement(data.bidButtonShopTitle))
            .then(() => itemPage.waitForElement(data.itemDetailsTitle))
            .then(() => itemPage.validateBidElements(false))
    }) 
    it("005: User is able to open and close filters from 'Product categories'", function(){
        shopPage.testCategoriesFilters();
    }); 
    it("006: User isn't able to open two filters from 'Product categories'", function(){
        shopPage.clickOnElement(data.categoriesFilterTitle)
            .then(() => shopPage.clickOnElement(data.dressShopFilter))
            .then(() => shopPage.clickOnElement(data.jacketShopFilter))
            .then(() => shopPage.validateElements())
    })
    it("007: User is able to filter by Price", function(){
        shopPage.clickAndMoveSlider(data.leftSlider,data.hundred)
            .then(() => shopPage.clickAndMoveSlider(data.rightSlider,data.hundred))
    })
    it("008: User is able to use filter 'Fashion' from 'Product categories'", function(){
        UITasks.filterAndClickOnItem(data.listViewButton,data.categoriesFilterTitle,data.jacketShopFilter,data.bidButtonTitle,data.bidButtonShopTitle,data.itemDetailsTitle,false)
    })
})