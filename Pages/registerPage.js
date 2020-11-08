class RegisterPage {
    constructor(){
        this.title="Register Page";
    }
    get firstName (){
        return browser.driver.findElement(by.id("firstName"));
    }
    get lastName (){
        return browser.driver.findElement(by.id("lastName"));
    }
    get emailField (){
        return browser.driver.findElement(by.id("email"));
    }
    get passwordField(){
        return browser.driver.findElement(by.id("password"));
    }
    get confirmPasswordField(){
        return browser.driver.findElement(by.id("confirmPassword"));
    }
    get registerButton(){
        return browser.driver.findElement(by.className("btn-submit"));
    }
    get registrationMessage(){
        return browser.driver.findElement(by.css("div.status-content div"))
    }
    get hereLinkForLogin(){
        return browser.driver.findElement(by.css("div.status-content div a"));
    }
    get firstNameValidationMessage(){
        return browser.driver.findElement(by.css("div.form div:nth-child(2) small label"));
    }
    get lastNameValidationMessage(){
        return browser.driver.findElement(by.css("div.form div:nth-child(3) small label"));
    }
    get emailValidationMessage(){
        return browser.driver.findElement(by.css("div.form div:nth-child(4) small label"));
    }
    get passwordValidationMessage(){
        return browser.driver.findElement(by.css("div.form div:nth-child(5) small label"));
    }
    get confirmPasswordMessage(){
        return browser.driver.findElement(by.css("div.form div:nth-child(6) small label"));
    }
    get wordLogin(){
        return browser.driver.findElement(by.className("login-word"));
    }
    clickOnWordLogin(){
        this.wordLogin.click();
    }
    getRegisterURL(){
        return browser.getCurrentUrl();
    }
    clickOnHereLink(){
        this.hereLinkForLogin.click();
    }
    getConfirmPasswordMessage(){
        return this.confirmPasswordMessage.getText();
    }
    getPasswordValidationMessage(){
        return this.passwordValidationMessage.getText();
    }
    getEmailValidationMessage(){
        return this.emailValidationMessage.getText();
    }
    getLastNameValidationMessage(){
        return this.lastNameValidationMessage.getText();
    }
    getFirstNameValidationMessage(){
        return this.firstNameValidationMessage.getText();
    }
    getRegistrationMessage(){
        return this.registrationMessage.getText();
    }
    clickOnRegisterButton(){
        this.registerButton.click();
    }
    enterConfirmPassword(data){
        return this.confirmPasswordField.sendKeys(data);
    }
    enterPassword(data){
        return this.passwordField.sendKeys(data);
    }
    enterEmail(data){
        return this.emailField.sendKeys(data);
    }
    enterFirstName(data){
        return this.firstName.sendKeys(data);
    }
    enterLastName(data){
        return this.lastName.sendKeys(data);
    }

}
module.exports = new RegisterPage();