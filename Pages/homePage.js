const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");


class HomePage extends Page.Page{
    constructor(){
        super();
        this.title= "HomePage"
    }
    
    // GETTERS

    get loginButtonLocator(){
        return ".header-text";
    }

    get categoryLocator(){
        return ".category-item"
    }

    get logoutButton(){
        return browser.driver.findElement(by.css("div.login-acccount button"));
    }

    get createAnAccount(){
        return browser.driver.findElement(by.css("a.header-text"));
    }
    
    // ACTIONS

    waitForCategories(){
        console.log("This method waits for Category to show");
        return browser.wait(EC.presenceOf($(this.categoryLocator)), 5000);
    }
    
    clickOnCreateAnAccount(){
        console.log("This method clicks on Create Account link");
        return super.clickOnCreateAnAccount();
    }

    clickOnPrivacyAndPolicy(){
        console.log("This method clicks on Privacy and Policy link");
        return super.clickOnPrivacyAndPolicy();
    }

    clickOnTermsAndConditions(){
        console.log("This method clicks on Terms and Conditions links");
        return super.clickOnTermsAndConditions();
    }

    clickOnAboutUs(){
        console.log("This method clicks on About Us link");
        return super.clickOnAboutUs();
    }

    getHomePageURL(){
        console.log("This method gets HomePage URL");
        return super.getPageURL();
    }

    validateHomePageURL(URL){
        console.log("This method validates home page URL");
        return expect(URL).toBe(data.homepageLink);
    }

    waitForLoginButton(){
        console.log("This method waits for link Login to show")
        return browser.wait(EC.presenceOf($(this.loginButtonLocator), 5000))
    }

    clickOnFashionCategory(){
        console.log("This method clicks on Fashion Category");
        return super.clickOnCategory(data.fashionCategory);
    }

    clickOnLogin(){
        console.log("This method clicks on Login link");
        return super.clickOnLogin();
    }

    openPageURL(URL){
        console.log("This method opens Home Page");
        return super.openPageURL(URL);
    }
    
}
module.exports = new HomePage();