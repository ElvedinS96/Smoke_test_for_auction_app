var homePage = require('../Pages/homePage.js'),
    itemPage = require ("../Pages/itemPage"),
    data = require("../Data/data.js");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("010: Last Chance", function(){
    it("001: User is able to open item from 'Last Chance' section", function(){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnLastChanceButton())
            .then(() => homePage.clickonFirstItemForLinks())
            .then(() => itemPage.getItemDetails())
            .then((itemDetails)=> itemPage.validateItemDetails(itemDetails))

    })
})