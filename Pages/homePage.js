var dataJS = require("../Data/data");

class HomePage{
    constructor(){
        this.title= "HomePage",
        this.EC = protractor.ExpectedConditions
    }
    // GETTERS

    get loginButton (){
        return browser.driver.findElement(by.className("header-text"));
    }
    get loginButtonLocator(){
        return ".header-text";
    }
    get categoryLocator(){
        return ".category-item"
    }
    get fashionCategory(){
        return browser.driver.findElement(by.css("div.category-item a"));
    }
    get logoutButton (){
        return browser.driver.findElement(by.css("div.login-acccount button"));
    }
    
    // ACTIONS
    waitForCategories(){
        console.log("This method waits for Category to show")
        browser.wait(this.EC.presenceOf($(this.categoryLocator)), 5000)
    }
    waitForLoginButton(){
        console.log("This method waits for link Login to show")
        return browser.wait(this.EC.presenceOf($(this.loginButtonLocator), 5000))
    }
    clickOnLogin(){
        console.log("This method clicks on link Login")
        this.loginButton.click();
    };
    clickOnLogoutButton(){
        console.log("This method clicks on logout button")
        this.logoutButton.click();
    }
    clickOnFashionCategory(){
        console.log("This method clicks on Category link")
        this.fashionCategory.click();
    };
    clickOnLogin(){
        console.log("This method clicks on link Login")
        this.loginButton.click();
    };
    openPageURL (url){
        console.log("This method opens URL")
        return browser.get(url);
    };
    
}
module.exports = new HomePage();