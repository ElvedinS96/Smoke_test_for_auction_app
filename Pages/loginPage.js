const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js"),
    homePage = require('../Pages/homePage.js');

class LoginPage extends Page.Page{
    constructor(){
        super();
        this.title="LoginPage"    
    }

    // GETTERS
    get emailField(){ return browser.driver.findElement(by.id("email")); }
    get formTitleLocator(){ return ".form-title"; }
    get passwordField(){ return browser.driver.findElement(by.id("password")); }
    get emailLocator(){ return "#email"; }
    get loginButton(){ return browser.driver.findElement(by.className("btn-login")); }
    get validationMessage(){ return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/small/label")); }
    
    // ACTIONS
    validateLoginMessage(){
        console.log("This method validates login message")
        return this.validationMessage.getText()
            .then((field) => expect(field).toBe(data.invalidUsernameOrEmail))
    }

    waitForElement(element){
        if(element === data.emailInputTitle){
            console.log("This method waits for email input to load");
            return browser.wait(EC.presenceOf($(this.emailLocator)), 7000);
        }else if(element === data.formTitle){
            console.log("This method wait for Form title");
            return browser.wait(EC.presenceOf($(this.formTitleLocator), 7000));
        }
    }

    logIn(email,password,waitForCategories=data.booleanTrue){
    // waitForCategories=data.booleanTrue means that this method should wait for Categories to load on lading page, if log in is successsful, and if log in isn't successfull, then method shoulnd't wait for Categories, because they won't show
        console.log("This method sends data do Email, Password and clicks on login button");
        return this.emailField.sendKeys(email)
            .then(() => this.passwordField.sendKeys(password))
            .then(() => this.loginButton.click())
            .then(() => { if(waitForCategories) homePage.waitForCategories()} )
    }

    validateLoginPageURL(){
        console.log("This method validates Login page URL");
        this.getPageURL()
            .then((URL) => { return expect(URL).toBe(data.loginpageLink) });
    }
}
module.exports = new LoginPage()