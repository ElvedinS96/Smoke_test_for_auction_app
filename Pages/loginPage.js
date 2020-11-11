var EC = protractor.ExpectedConditions;

class loginPage{
    constructor(){
        this.title="LoginPage"    
    }

    // GETTERS

    get emailField(){
        return browser.driver.findElement(by.id("email"));
    }

    get passwordField(){
        return browser.driver.findElement(by.id("password"));
    }

    get emailLocator(){
        return "#email";
    }

    get loginButton(){
        return browser.driver.findElement(by.className("btn-login"));
    }
    
    // ACTIONS

    waitForEmailInput(){
        console.log("This method waits for email input to load")
        browser.wait(EC.presenceOf($(this.emailLocator)), 5000)
    }

    enterEmail(email){
        console.log("This method enters data in email field")
        this.emailField.sendKeys(email);
    }

    enterPassword(password){
        console.log("This method enters data in password field")
        this.passwordField.sendKeys(password);
    }
    
    clickOnLoginButton(){
        console.log("This method click on Login button")
        this.loginButton.click();
    }
}
module.exports = new loginPage();