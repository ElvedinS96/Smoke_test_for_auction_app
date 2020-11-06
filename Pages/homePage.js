class HomePage {
    constructor() {
        this.title= "HomePage";
    }
    get loginButton (){
        return browser.driver.findElement(by.className("header-text"));
    }
    get fashionCategory(){
        return browser.driver.findElement(by.css("div.category-item a"));
    }
    get logoutButton (){
        return browser.driver.findElement(by.css("div.login-acccount button"));
    }
    clickOnLogin() {
        this.loginButton.click();
    };
    clickOnLogoutButton(){
        this.logoutButton.click()
    }
    clickOnFashionCategory(){
        this.fashionCategory.click();
    };
    open (url){
        return browser.get(url);
    };
}
module.exports = new HomePage ();