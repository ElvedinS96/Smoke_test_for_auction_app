var homepage = require('../Pages/homePage');
var loginpage = require('../Pages/loginPage');
var fashionCategory = require ("../Pages/fashionCategoryPage");
var itemPage = require ("../Pages/itemPage");
describe ('001: Smoke test', function(){

    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    var EC = protractor.ExpectedConditions;

    it ("001: User is able to sign in, click on item and place a bid", function (){
        homepage.open("https://auct-app2-frontend.herokuapp.com/")
        .then(() => browser.wait(EC.presenceOf($(".header-text")), 5000))
        .then(() => homepage.clickOnLogin())
        .then(() => browser.wait(EC.presenceOf($("#email")), 5000))
        .then(() => loginpage.enterEmail("rafa@mail.com"))
        .then(() => loginpage.enterPassword("password"))
        .then(() => loginpage.clickOnLoginButton())
        .then(() => browser.wait(EC.presenceOf($(".category-item")), 5000))
        .then(() => homepage.clickOnFashionCategory())
        .then(() => browser.wait(EC.presenceOf($(".landing-product")), 5000))
        .then(() => fashionCategory.clickOnBrownJacket())
        .then(() => itemPage.clickOnImageSlider())
        .then(() => itemPage.enterBid(1003))
        .then(() => browser.wait(EC.presenceOf($(".bider-row")), 5000))
        .then(() => itemPage.getUserName())
        .then((data) => expect(data).toBe("Rafa Nadal"))
        .then(() => itemPage.getBidPrice())
        .then((data) => expect(data).toBe("$1003.00"))
        .then(() => itemPage.getBidDate())
        .then((data) => expect(data).toBe("6 November 2020"))
        .then(() => itemPage.getItemDetails())
        .then((data) => expect(data).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."))
        .then(() => itemPage.clickOnPlaceBidButton())
        .then(() => browser.wait(EC.presenceOf($(".status-success")), 5000))
        .then(() => itemPage.getBidConfirmationText())
        .then((data) => expect(data).toBe("Congrats! you are the higest bider!"))
        .then(() => homepage.clickOnLogoutButton())
    })

})