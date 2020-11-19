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
        return browser.wait(EC.presenceOf($(this.categoryLocator)), 7000);
    }

    validateHomePageURL(URL){
        console.log("This method validates home page URL");
        return expect(URL).toBe(data.homepageLink);
    }

    waitForLoginButton(){
        console.log("This method waits for link Login to show")
        return browser.wait(EC.presenceOf($(this.loginButtonLocator), 7000))
    }

    clickOnFashionCategory(){
        console.log("This method clicks on Fashion Category");
        return super.clickOnCategory(data.fashionCategory);
    }
    
}
module.exports = new HomePage();