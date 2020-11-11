var dataJS = require("../Data/data");

class loginPage{
    constructor(){
        this.title="LoginPage",
        this.EC = protractor.ExpectedConditions
    }
    // GETTERS
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
    
    // ACTIONS
    waitForEmailInput(){
        console.log("This method waits for email input to load")
        browser.wait(this.EC.presenceOf($(this.emailLocator)), 5000)
    }
    enterEmail(data){
        console.log("This method enters data in email field")
        this.emailField.sendKeys(data);
    }
    enterPassword (data){
        console.log("This method enters data in password field")
        this.passwordField.sendKeys(data);
    }
    clickOnLoginButton (){
        console.log("This method click on Login button")
        this.loginButton.click();
    }
}
module.exports = new loginPage();