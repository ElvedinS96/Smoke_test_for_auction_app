var homePage = require('../Pages/homePage.js'),
    itemPage = require ("../Pages/itemPage"),
    data = require("../Data/data.js");
browser.waitForAngularEnabled(false);
browser.ignoreSynchronization = true;
browser.manage().window().maximize();

describe("008: New Arrivals", function(){
    it("001: User is able to open item from 'New Arrivals' section", function(){
        homePage.openPageURL(data.homepageLink)
            .then(() => homePage.waitForLoginButton())
            .then(() => homePage.clickOnNewArrivalsButton())
            .then(() => homePage.clickonFirstItemForLinks())
            .then(() => itemPage.getItemDetails())
            .then((itemDetails)=> itemPage.validateItemDetails(itemDetails))

    })
})