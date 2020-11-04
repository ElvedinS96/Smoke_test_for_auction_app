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
    get bidMessage (){
        return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div"));
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
    getBidConfirmationText(){
      return this.bidMessage.getText();
    }
}
module.exports = new loginPage();