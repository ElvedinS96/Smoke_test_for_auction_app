const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");
    
class RegisterPage extends Page.Page{
    constructor(){
        super();
        this.title="Register Page";
    }

    // GETTERS
    get firstName(){
        return browser.driver.findElement(by.id("firstName"));
    }

    get lastName(){
        return browser.driver.findElement(by.id("lastName"));
    }

    get emailField(){
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
        return browser.driver.findElement(by.css("div.status-content div button"));
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

    get wordLoginLocator(){
        return ".login-word"
    }
    
    get statusErrorLocator(){
        return ".status-error";
    }

    // ACTIONS

    makeRandomEmail(){
        console.log("This method makes random email");
        return  `${data.email1}${Math.round(Math.random()*100)}6${Math.round(Math.random()*100)}${data.emailDomain}`;
    }
    makeRandomEmailWithoutdomain(dataEmail){
        console.log("This method makes random email without domain");
        return  `${data.email1}${Math.round(Math.random()*100)}${dataEmail}`;
    }

    waitForLoginWord(){
        console.log("This method wait for word Login");
        return browser.wait(EC.presenceOf($(this.wordLoginLocator)), 7000);
    }

    waitForStatusError(){
        console.log("This method wait for status error");
        return browser.wait(EC.presenceOf($(this.statusErrorLocator)), 7000);
    }

    clickOnWordLogin(){
        console.log("This method clicks on word Login");
        this.wordLogin.click();
    }

    clickOnHereLink(){
        console.log("This method clicks on 'Here link'");
        this.hereLinkForLogin.click();
    }

    getConfirmPasswordMessage(){
        console.log("This method gets Confirm Password message");
        return this.confirmPasswordMessage.getText();
    }

    getPasswordValidationMessage(){
        console.log("This method validates Password message");
        return this.passwordValidationMessage.getText();
    }

    getEmailValidationMessage(){
        console.log("This method gets Email");
        return this.emailValidationMessage.getText();
    }

    getLastNameValidationMessage(){
        console.log("This method gets Last name");
        return this.lastNameValidationMessage.getText();
    }

    getFirstNameValidationMessage(){
        console.log("This method gets First name");
        return this.firstNameValidationMessage.getText();
    }

    getRegistrationMessage(){
        console.log("This method gets Registration message");
        return this.registrationMessage.getText();
    }

    validateRegistrationMessage(registrationMessage){
        console.log("This method validates Registration message");
        return expect(registrationMessage).toBe(data.successfullRegistrationMessage)
    }

    validateInvalidRegistrationMessage(invalidRegistrationMessage){
        console.log("This method validates invalid Registration message");
        return expect(invalidRegistrationMessage).toBe(data.usedEmailMessage);
    }

    validateRequiredFirstName(invalidFirstName){
        console.log("This method validates invalid (empty) First Name");
        return expect(invalidFirstName).toBe(data.firstNameRequiredMessage);
    }

    validateInvalidFirstName(invalidFirstName){
        console.log("This method validates invalid (special characters) First Name");
        return expect(invalidFirstName).toBe(data.firstNameWithSpecialCharacters);
    }

    validateInvalidConfirmPassword(invalidConfirmPassword){
        console.log("This method validates invalid (empty) Confirm Password");
        return expect(invalidConfirmPassword).toBe(data.invalidConfirmPasswordValidationMessage);
    }
    validateInvalidEmail(invalidEmail){
        console.log("This method validates invalid (empty) Email");
        return expect(invalidEmail).toBe(data.emailRequiredMessage);
    }

    validateRequiredLastName(invalidLastName){
        console.log("This method validates invalid (empty) Last Name");
        return expect(invalidLastName).toBe(data.lastNameRequiredMessage);
    }

    validateInvalidLastName(invalidLastName){
        console.log("This method validates invalid (special characters) Last Name");
        return expect(invalidLastName).toBe(data.lastNameWithSpecialCharacters);
    }

    validateInvalidPassword(invalidPassword){
        console.log("This method validates invalid (empty) Password");
        return expect(invalidPassword).toBe(data.passwordValidationMessage);
    }

    validateRegisterPageURL(URL){
        console.log("This method validated entered URL");
        return expect(URL).toBe(data.registerpageLink);
    }

    clickOnRegisterButton(){
        console.log("This method clicks on Register button");
        return this.registerButton.click();
    }

    enterConfirmPassword(data){
        console.log("This method enters data to Confirm Password field");
        return this.confirmPasswordField.sendKeys(data);
    }

    enterPassword(data){
        console.log("This method enters data to Password field");
        return this.passwordField.sendKeys(data);
    }

    enterEmail(){
        console.log("This method sends data to email field");
        return this.emailField.sendKeys(this.makeRandomEmail());
    }
    enterEmailWithoutDomain(emailData){
        console.log("This method sends email without domain to email field");
        return this.emailField.sendKeys(this.makeRandomEmailWithoutdomain(emailData));
    }

    enterDataEmail(email2){
        // This method had to be developed this way, because data sent through registration is used for the login, and data is static
        console.log("This method sends us@mail.com to email field");
        return this.emailField.sendKeys(email2);
    }

    enterFirstName(data){
        console.log("This method enters data in First Name");
        return this.firstName.sendKeys(data);
    }

    enterLastName(data){
        console.log("This method enter data in Last Name");
        return this.lastName.sendKeys(data);
    }

}
module.exports = new RegisterPage();