const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");
    
class RegisterPage extends Page.Page{
    constructor(){
        super();
        this.title="Register Page";
    }

    // GETTERS

    get firstName(){ return browser.driver.findElement(by.id("firstName")); }
    get lastName(){ return browser.driver.findElement(by.id("lastName")); }
    get emailField(){ return browser.driver.findElement(by.id("email")); }
    get passwordField(){ return browser.driver.findElement(by.id("password")); }
    get confirmPasswordField(){ return browser.driver.findElement(by.id("confirmPassword")); }
    get registerButton(){ return browser.driver.findElement(by.className("btn-submit")); }
    get registrationMessage(){ return browser.driver.findElement(by.css("div.status-content div")); }
    get hereLinkForLogin(){ return browser.driver.findElement(by.css("div.status-content div button")); }
    get firstNameValidationMessage(){ return browser.driver.findElement(by.css("div.form div:nth-child(2) small label")); }
    get lastNameValidationMessage(){ return browser.driver.findElement(by.css("div.form div:nth-child(3) small label")); }
    get emailValidationMessage(){ return browser.driver.findElement(by.css("div.form div:nth-child(4) small label")); }
    get passwordValidationMessage(){ return browser.driver.findElement(by.css("div.form div:nth-child(5) small label")); }
    get confirmPasswordMessage(){ return browser.driver.findElement(by.css("div.form div:nth-child(6) small label")); }
    get wordLogin(){ return browser.driver.findElement(by.className("login-word")); }
    get wordLoginLocator(){ return ".login-word" }
    get statusErrorLocator(){ return ".status-error"; }

    // ACTIONS

    makeRandomEmail(){
        console.log("This method makes random email");
        return  `${data.email1}${Math.round(Math.random()*100)}6${Math.round(Math.random()*100)}${data.emailDomain}`;
    }

    makeRandomEmailWithoutdomain(dataEmail){
        console.log("This method makes random email without domain");
        return  `${data.email1}${Math.round(Math.random()*100)}${dataEmail}`;
    }

    waitForElement(element){
        console.log("This method waits for element from Registration page");
        switch(element){
            case data.wordLoginTitle:
                return browser.wait(EC.presenceOf($(this.wordLoginLocator)), 7000);

            case data.statusErrorTitle:
                return browser.wait(EC.presenceOf($(this.statusErrorLocator)), 7000);   
        }
    }
    
    clickOnElement(element){
        console.log("This method clicks on element from Registration page");
        switch(element){
            case data.wordLoginTitle:
                return this.wordLogin.click();

            case data.hereLinkTitle:
                return this.hereLinkForLogin.click();

            case data.registerButtonTitle:
                return this.registerButton.click();
        }
    }

    validateInputMessages(){
        console.log("This method validates input messages");
        return this.getValidationMessage(data.firstNameTitle)
            .then((invalidFirstName) => this.validateFirstName(invalidFirstName))
            .then(() => { return this.getValidationMessage(data.lastNameTitle)})
            .then((invalidLastName) => this.validateLastName(invalidLastName))
            .then(() => { return this.getValidationMessage(data.passwordTitle)})
            .then((invalidPassword) => this.validateInvalidPassword(invalidPassword))
            .then(() => { return this.getValidationMessage(data.confirmPasswordTitle)})
            .then((invalidConfirmPassword) => this.validateConfirmPassword(invalidConfirmPassword))
            .then(() => this.getValidationMessage(data.registrationMessageTitle))
            .then((registrationMessage) => { return this.validateRegistrationMessage(registrationMessage)})
    }

    getValidationMessage(field){
        console.log(`This method gets ${field} field message`)
        switch(field){
            case data.passwordTitle:
                return this.passwordValidationMessage.getText();

            case data.confirmPasswordTitle:
                return this.confirmPasswordMessage.getText();

            case data.emailTitle:
                return this.emailValidationMessage.getText();

            case data.lastNameTitle:
                return this.lastNameValidationMessage.getText();

            case data.firstNameTitle:
                return this.firstNameValidationMessage.getText();
            
            case data.registrationMessageTitle:
                return this.registrationMessage.getText();
        }
    }

    registrateAnAccount(firstNameData,lastNameData,email,passwordData,confirmPasswordData){
        console.log("This method enters data in First Name, Last Name, Email, Password and Confirm Password")
        return this.firstName.sendKeys(firstNameData)
            .then(() => this.lastName.sendKeys(lastNameData))
            .then(() => {
                if(email === data.makeEmailWithoutDomain){
                    return this.emailField.sendKeys(this.makeRandomEmailWithoutdomain(data.emailWithoutDomain));

                }else if(email === data.sendStaticEmail){
                    console.log(`This method sends ${data.email2} to email field`);
                    return this.emailField.sendKeys(data.email2);

                }else if(email === data.emailWithoutat){
                    return this.emailField.sendKeys(this.makeRandomEmailWithoutdomain(data.emailWithoutAt));

                }else if(email === data.emailTitle){
                    return this.enterEmail(data.emptyString);
                }
            })
            .then(() => this.passwordField.sendKeys(passwordData))
            .then(() => this.confirmPasswordField.sendKeys(confirmPasswordData))
            .then(() => this.clickOnElement(data.registerButtonTitle))
    }

    enterEmail(email){
        if(email===data.email2){
            console.log(`This method sends ${email2} to email field`);
            return this.emailField.sendKeys(email2);

        }else{
            console.log("This method sends data to email field");
            return this.emailField.sendKeys(this.makeRandomEmail());
        }
    }

    validateRegistrationMessage(registrationMessage){
        if (registrationMessage === data.successfullRegistrationMessage){
            console.log("This method validates Registration message");
            return expect(registrationMessage).toBe(data.successfullRegistrationMessage);
        }
    }

    validateInvalidRegistrationMessage(invalidRegistrationMessage){
        console.log("This method validates invalid Registration message");
        return expect(invalidRegistrationMessage).toBe(data.usedEmailMessage);
    }

    validateFirstName(invalidFirstName){
        console.log("This method validates invalid od required name message")
        if(invalidFirstName === data.firstNameWithSpecialCharacters){
            return expect(invalidFirstName).toBe(data.firstNameWithSpecialCharacters);
        } else if (invalidFirstName === data.firstNameRequiredMessage){
            return expect(invalidFirstName).toBe(data.firstNameRequiredMessage);
        }
    }

    validateConfirmPassword(invalidConfirmPassword){
        if(invalidConfirmPassword === data.invalidConfirmPasswordValidationMessage){
            console.log("This method validates invalid (empty) Confirm Password");
            return expect(invalidConfirmPassword).toBe(data.invalidConfirmPasswordValidationMessage);
        }
    }

    validateInvalidEmail(invalidEmail){
        console.log("This method validates invalid (empty) Email");
        return expect(invalidEmail).toBe(data.emailRequiredMessage);
    }
    
    validateLastName(invalidLastName){
        console.log("This method validates Last Name field")
        if(invalidLastName === data.lastNameWithSpecialCharacters){
            return expect(invalidLastName).toBe(data.lastNameWithSpecialCharacters);
        } else if(invalidLastName === data.lastNameRequiredMessage){
            return expect(invalidLastName).toBe(data.lastNameRequiredMessage);
        }
    }

    validateInvalidPassword(invalidPassword){
        if(invalidPassword === "invalidPassword"){
            console.log("This method validates invalid (empty) Password");
            return expect(invalidPassword).toBe(data.passwordValidationMessage);
        }
    }

    validateRegisterPageURL(URL){
        console.log("This method validated entered URL");
        return expect(URL).toBe(data.registerpageLink);
    }
}
module.exports = new RegisterPage();