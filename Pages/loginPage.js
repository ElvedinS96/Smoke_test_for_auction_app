var dataJS = require("../data");

class loginPage {
    constructor(){
        this.title="LoginPage";
    }
    // Getters
    get emailField (){
        return browser.driver.findElement(by.id("email"));
    }
    get passwordField (){
        return browser.driver.findElement(by.id("password"));
    }
    get emailLocator (){
        return "#email";
    }
    get loginButton (){
        return browser.driver.findElement(by.className("btn-login"));
    }
    // Actions
    // This method waits for email input to load
    waitForEmailInput(){
        browser.wait(dataJS.EC.presenceOf($(this.emailLocator)), 5000)
    }
    // This method enters data in email field
    enterEmail(data){
        this.emailField.sendKeys(data);
    }
    // This method enters data in password field
    enterPassword (data){
        this.passwordField.sendKeys(data);
    }
    // This method click on Login button
    clickOnLoginButton (){
        this.loginButton.click();
    }
}
module.exports = new loginPage();