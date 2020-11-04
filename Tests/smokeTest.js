var homepage = require('../Pages/homePage');
var loginpage = require('../Pages/loginPage');
describe ('001: Smoke test', function(){

    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    browser.manage().window().maximize();
    var EC = protractor.ExpectedConditions;

    it ("001: Test Case", async function (){
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
        .then(() => homepage.clickOnBrownJacket())
        .then(() => homepage.enterBid(1001))
        .then(() => homepage.clickOnPlaceBidButton())
        .then(() => browser.sleep(3000))//browser.wait(EC.presenceOf($(".status-content")), 5000))
        .then(() => expect(loginpage.getBidConfirmationText()).toEqual("Congrats! you are the higest bider!"))
    })

})