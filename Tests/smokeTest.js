var homepage = require('../Pages/homePage');
var loginpage = require('../Pages/loginPage');
var fashionCategory = require ("../Pages/fashionCategoryPage");
var itemPage = require ("../Pages/itemPage");
var dataJS = require("../Pages/data");
const { landingProductLocator } = require('../Pages/data');

describe ('001: Smoke test', function(){
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    
    it ("001: User is able to sign in, click on item and place a bid", function (){
        homepage.open(dataJS.homepageLink)
        .then(() => browser.wait(dataJS.EC.presenceOf($(dataJS.headerText)), 5000))
        .then(() => homepage.clickOnLogin())
        .then(() => browser.wait(dataJS.EC.presenceOf($(dataJS.emailLocator)), 5000))
        .then(() => loginpage.enterEmail(dataJS.userRafaNadal))
        .then(() => loginpage.enterPassword(dataJS.passwordUserRafaNadal))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.wait(dataJS.EC.presenceOf($(dataJS.categoryItemLocator)), 5000))
        .then(() => homepage.clickOnFashionCategory())
        .then(() => browser.wait(dataJS.EC.presenceOf($(dataJS.landingProductLocator)), 5000))
        .then(() => fashionCategory.clickOnWhiteJacket2())
        .then(() => itemPage.clickOnImageSlider())
        .then(() => itemPage.enterBid(dataJS.bidForSmokeTest))
        .then(() => itemPage.clickOnPlaceBidButton())
        .then(() => browser.wait(dataJS.EC.presenceOf($(dataJS.biderNameImgLocator)), 5000))
        .then(() => itemPage.getUserName())
        .then((data) => expect(data).toBe(dataJS.userAssert))
        .then(() => itemPage.getBidPrice())
        .then((data) => expect(data).toBe(dataJS.bidAssert))
        .then(() => itemPage.getBidDate())
        .then((data) => expect(data).toBe(`${dataJS.d.getDate()} ${dataJS.months[dataJS.d.getMonth()]} ${dataJS.d.getFullYear()}`))
        .then(() => itemPage.getItemDetails())
        .then((data) => expect(data).toBe(dataJS.itemDetailsAssert))
        .then(() => browser.wait(dataJS.EC.presenceOf($(dataJS.statusSuccessLocator)), 5000))
        .then(() => itemPage.getBidConfirmationText())
        .then((data) => expect(data).toBe(dataJS.highestBidderMessage))
        .then(() => homepage.clickOnLogoutButton())
    })
})