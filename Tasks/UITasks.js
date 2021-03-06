var homePage = require('../Pages/homePage.js'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    myAccountPage = require("../Pages/myAccountPage"),
    data = require("../Data/data.js"),
    shopPage= require("../Pages/shop");

class UITasks {
    constructor(){
        this.title="UI Tasks";
    }
    // ACTIONS
    bidOnItemFromFashionCategory(item,bidPrice,addValueOnBidPrice){
    console.log("This method clicks on item from Fashion category, enters and places bid, and validates elements");
        return homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(item))
            .then(() => itemPage.enterBid(bidPrice,addValueOnBidPrice))
    }

    userOverBid(){
        console.log("This method checks that User can overbid another User")
        return homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blackJacket2))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => homePage.clickOnLinks(data.logoutButtonTitle))
            .then(() => homePage.openPageURL(data.homepageLink))
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userTester1,data.passwordTester1))
            .then(() => this.bidOnItemFromFashionCategory(data.blackJacket2,data.sixThousandDollars))
    }

    filterAndClickOnItem(viewButton,category,categoryFilter,button,bidButton,itemDetails,boolean){
        console.log("This method clicks on category on shop page, clicks on filter, waits for elements to filter, click on bid button, and verifies that item is opened")
        return shopPage.clickOnElement(viewButton)
            .then(() => shopPage.clickOnElement(category))
            .then(() => shopPage.clickOnElement(categoryFilter))
            .then(() => shopPage.waitForElement(button))
            .then(() => shopPage.clickOnElement(bidButton))
            .then(() => itemPage.waitForElement(itemDetails))
            .then(() => itemPage.validateBidElements(boolean))
    }

    checkMyAccountSection(section){
        console.log("This method tries to open parts of 'My Account' section when User isn't logged in")
        return homePage.clickOnLinks(data.logoutButtonTitle)
            .then(() => homePage.waitForCategories())
            .then(() => myAccountPage.clickOnLinks(data.myAccountTitle))
            .then(() => myAccountPage.clickOnLinks(section))
            .then(() => loginPage.waitForElement(data.emailInputTitle))
            .then(() => loginPage.validateLoginPageURL())
    }
}

module.exports = new UITasks();