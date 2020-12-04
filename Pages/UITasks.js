var homePage = require('../Pages/homePage.js'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    data = require("../Data/data.js");

class UITasks {
    constructor(){
        this.title="UI Tasks";
    }
    // ACTIONS
    bidOnItemFromFashionCategory(item,bidPrice){
    console.log("This method clicks on item from Fashion category, enters and places bid, and validates elements");
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(item))
            .then(() => itemPage.enterBid(bidPrice))
    }

    userOverBid(){
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => homePage.clickOnLinks(data.logoutButtonTitle))
            .then(() => homePage.openPageURL(data.homepageLink))
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userTester1,data.passwordTester1))
            .then(() => this.bidOnItemFromFashionCategory(data.blueJacket,data.sixThousandDollars))
    }
}

module.exports = new UITasks();