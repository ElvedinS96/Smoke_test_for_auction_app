const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js")

class LoginPage extends Page.Page{
    constructor(){
        super();
        this.title="LoginPage"    
    }

    // GETTERS

    get emailField(){
        return browser.driver.findElement(by.id("email"));
    }

    get formTitleLocator(){
        return ".form-title"
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

    get validationMessage(){
        return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/small/label"));
    }
    
    // ACTIONS

    getLoginValidationMessage(){
        console.log("This method gets Login validation message");
        return this.validationMessage.getText();
    }

    waitForFormTitle(){
        console.log("This method wait for Form title");
        return browser.wait(EC.presenceOf($(this.formTitleLocator), 7000));
    }

    validateMissingField(field){
        console.log("This method validates missing field");
        return expect(field).toBe(data.invalidUsernameOrEmail);
    }
    waitForEmailInput(){
        console.log("This method waits for email input to load");
        return browser.wait(EC.presenceOf($(this.emailLocator)), 7000);
    }

    enterEmail(email){
        console.log("This method enters data in email field");
        return this.emailField.sendKeys(email);
    }

    enterPassword(password){
        console.log("This method enters data in password field");
        return this.passwordField.sendKeys(password);
    }
    
    clickOnLoginButton(){
        console.log("This method clicks on Login button");
        return this.loginButton.click();
    }

    validateLoginPageURL(URL){
        console.log("This method validates Login page URL");
        return expect(URL).toBe(data.loginpageLink);
    }
}
module.exports = new LoginPage()