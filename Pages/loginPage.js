class loginPage {
    constructor(){
        this.title="LoginPage";
    }
    get emailField (){
        return browser.driver.findElement(by.id("email"));
    }
    get passwordField (){
        return browser.driver.findElement(by.id("password"));
    }
    get loginButton (){
        return browser.driver.findElement(by.className("btn-login"));
    }
    enterEmail(data){
        this.emailField.sendKeys(data);
    }
    enterPassword (data){
        this.passwordField.sendKeys(data);
    }
    clickOnLoginButton (){
        this.loginButton.click();
    }
}
module.exports = new loginPage();