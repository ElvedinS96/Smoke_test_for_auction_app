var dataJS = require("../data");

class HomePage {
    constructor() {
        this.title= "HomePage";
    }
    // GETTERS
    get loginButton (){
        return browser.driver.findElement(by.className("header-text"));
    }
    get loginButtonLocator(){
        return ".header-text";
    }
    get CategoryLocator(){
        return ".category-item"
    }
    get fashionCategory(){
        return browser.driver.findElement(by.css("div.category-item a"));
    }
    get logoutButton (){
        return browser.driver.findElement(by.css("div.login-acccount button"));
    }
    
    // ACTIONS
    // This method waits for Category to show
    waitForCategories(){
        browser.wait(dataJS.EC.presenceOf($(this.CategoryLocator)), 5000)
    }
    // This method waits for link Login to show
    waitForLoginButton(){
        return browser.wait(dataJS.EC.presenceOf($(this.loginButtonLocator), 5000))
    }
    // This method clicks on link Login
    clickOnLogin() {
        this.loginButton.click();
    };
    // This method clicks on logout button
    clickOnLogoutButton(){
        this.logoutButton.click();
    }
    // This method clicks on Category link
    clickOnFashionCategory(){
        this.fashionCategory.click();
    };
    // This method opens URL
    open (url){
        return browser.get(url);
    };
}
module.exports = new HomePage ();