const { brownJacket } = require("../Data/data");
const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data");

class MyAccountPage extends Page.Page{
    constructor(){
        super();
        this.title="My Account Page";
    }
    // GETTERS
    get profileHeading(){ return browser.driver.findElement(by.className("profile-heading")); }
    get yourBidsTable(){ return browser.driver.findElement(by.className("user-bids-item")); }
    get settingsForm(){ return browser.driver.findElement(by.className("settings-heading")); }
    get settingsFormLocator(){ return ".settings-heading"; }
    get profileButton(){ return browser.driver.findElement(by.id("user-page-header-profile")); }
    get profileHeadingLocator(){ return ".profile-heading"; }
    get bidsTableLocator(){ return ".user-bids"; }
    get bidButton(){ return browser.driver.findElement(by.id("user-page-header-bids")); }
    get bidsButtonLocator(){ return ".user-bids-item"; }
    get settingsButton(){ return browser.driver.findElement(by.id("user-page-header-settings")); }
    get notifEmail(){ return browser.driver.findElement(by.id("notf-email")); }
    get notifPush(){ return browser.driver.findElement(by.id("notf-push")); }
    get notifTextMessage(){ return browser.driver.findElement(by.id("notf-msg")); }
    get viewButtonFromYourBids(){ return browser.driver.findElement(by.className("user-bid-view")); }
    get changePhotoButton(){ return browser.driver.findElement(by.className("change-image-button")); }
    get firstNameProfileInformation(){ return browser.driver.findElement(by.id("firstName")); }
    get lastNameProfileInformation(){ return browser.driver.findElement(by.id("lastName")); }
    get genderDropdown(){ return browser.driver.findElement(by.className("Dropdown-control")); }
    get otherValueFromGenderDropdown(){ return browser.driver.findElement(by.css(".gender-dropdown-menu :nth-child(3)")); }
    get monthBirthDropdown(){ return browser.driver.findElement(by.css("#user-profile-birth-month div")); }
    get februaryBirthDropdown(){ return browser.driver.findElement(by.css(".birth-dropdown-menu :nth-child(2)")); }
    get dayBirthDropdown(){ return browser.driver.findElement(by.css("#user-profile-birth-day div")); }
    get thirdBirthDropdown(){ return browser.driver.findElement(by.css(".day-dropdown :nth-child(3)")); }
    get yearBirthDropdown(){ return browser.driver.findElement(by.css("#user-profile-birth-year div")); }
    get twoThousandBirthDropdown(){ return browser.driver.findElement(by.css("#user-profile-birth-year :nth-child(101)")); }
    get phoneNumber(){ return browser.driver.findElement(by.id("phoneNumber")); }
    get emailField(){ return browser.driver.findElement(by.id("email")); }
    get saveInfoButton(){ return browser.driver.findElement(by.css(".save-info-button button")); }
    get emailValidationMessage(){ return browser.driver.findElement(by.css("#user-page-personal :last-child :nth-child(6) small label")); }
    get phoneNumberValidationMessage(){ return browser.driver.findElement(by.css("#user-page-personal :last-child :nth-child(5) small label")); }
    get paypalCheckbox(){ return browser.driver.findElement(by.id("paypal")); }
    get creditCardCheckbox(){ return browser.driver.findElement(by.id("card")); }
    get nameOnCard(){ return browser.driver.findElement(by.id("nameOnCard")); }
    get cardNumber(){ return browser.driver.findElement(by.id("cardNumber")); }
    get cvc(){ return browser.driver.findElement(by.id("cvc")); }
    get yearCardExpiration(){ return browser.driver.findElement(by.id("user-card-exp-year")); }
    get year2020CardExpiration(){return browser.driver.findElement(by.css("#user-card-exp-year :nth-child(121)")); }
    get monthCardExpiration(){ return browser.driver.findElement(by.id("user-card-exp-month")); }
    get marchCardExpiration(){ return browser.driver.findElement(by.css("#user-card-exp-month :nth-child(3)")); }

    // ACTIONS
    getElementValidation(element){
        console.log(`This method gets ${element} title`);
        switch(element){
            case data.profileHeadingTitle:
                return this.profileHeading.getText();

            case data.yourBidsTable:
                return this.yourBidsTable.getText();
            
            case data.settingsTitle:
                return this.settingsForm.getText();
            
            case data.emailTitle:
                return this.emailValidationMessage.getText();

            case data.phoneNumberTitle:
                return this.phoneNumberValidationMessage.getText();
        }
    }

    validateElement(elementToValidate){
        console.log("This method gets and calls validation methods");
        if(elementToValidate === data.profileHeadingTitle){
            return this.getElementValidation(elementToValidate)
                .then((profileText) => this.validateProfilePage(profileText))
        }else if(elementToValidate === data.yourBidsTable){
            return this.getElementValidation(elementToValidate)
                .then((yourBidText) => this.validateYourBidsPage(yourBidText))
        }else if(elementToValidate === data.settingsTitle){
            return this.getElementValidation(elementToValidate)
                .then((settingsTitle) => this.validateSettingsPage(settingsTitle))
        }else if(elementToValidate === data.checkboxesTitle){
            return expect(this.notifEmail.isSelected()).toBe(true)
                .then(() => expect(this.notifPush.isSelected()).toBe(true))
                .then(() => expect(this.notifTextMessage.isSelected()).toBe(true))
        }else if(elementToValidate === data.viewButton){
            return expect(this.viewButtonFromYourBids.isDisplayed()).toBe(true);
        }else if(elementToValidate === data.emailTitle){
            return this.getElementValidation(elementToValidate)
                .then((invalidEmail) => this.validateInvalidEmail(invalidEmail))
        }else if(elementToValidate === data.phoneNumberTitle){
            return this.getElementValidation(elementToValidate)
                .then((invalidPhoneNumber) => this.validatePhoneNumber(invalidPhoneNumber))
        }
    }

    updateProfileInformation(phoneNumber){
        console.log("This method updates First Name, Last Name, Date of birth, Phone Number")
        return this.clickOnLinks(data.profileLinkTitle)
            .then(() => this.firstNameProfileInformation.sendKeys(data.lastNameTester))
            .then(() => this.lastNameProfileInformation.sendKeys(data.lastNameTester))
            .then(() => this.genderDropdown.click())
            .then(() => this.otherValueFromGenderDropdown.click())
            .then(() => this.monthBirthDropdown.click())
            .then(() => this.clearAndEnterPhoneNumber(phoneNumber))
            .then(() => this.februaryBirthDropdown.click())
            .then(() => this.dayBirthDropdown.click())
            .then(() => this.thirdBirthDropdown.click())
            .then(() => this.yearBirthDropdown.click())
            .then(() => this.twoThousandBirthDropdown.click())
            .then(() => this.saveInfoButton.click())
    }

    clearAndEnterPhoneNumber(phoneNumber){
        console.log("This method clears phone number field, and then enters new phone number");
        return this.emptyFields(data.phoneNumberTitle)
            .then(() => this.phoneNumber.sendKeys(phoneNumber))
    }

    validatePhoneNumber(phoneNumber){
        console.log("This method valites invalid phone number");
        return expect(phoneNumber).toBe(data.invalidPhoneNumberMessage)
    }

    validateInvalidEmail(invalidEmail){
        console.log("This method validates invalid email update");
        return expect(invalidEmail).toBe(data.emailRequiredMessage)
    }

    validateProfilePage(profileText){
        console.log("This method validates if Profile page is loaded");
        return expect(profileText).toBe(data.profileValidation);
    }

    validateYourBidsPage(yourBidText){
        console.log("This method validates if Your Bids page is loaded");
        return expect(yourBidText).toBe(data.yourBidsValidation);
    }

    validateSettingsPage(settingsTitle){
        console.log("This method validates if 'Settings' page is loaded");
        return expect(settingsTitle).toBe(data.settingsPageForm);
    }

    clickOnElement(element){
    console.log(`This method clicks on ${element}`)
        switch(element){
            case data.profileButton:
                return this.profileButton.click()
                    .then(() => browser.wait(EC.presenceOf($(this.profileHeadingLocator)), 7000))
            
            case data.bidsButton:
                return this.bidButton.click()
                    .then(() => browser.wait(EC.presenceOf($(this.bidsTableLocator)), 7000))
            
            case data.settingsButton:
                return this.settingsButton.click()
                    .then(() => browser.wait(EC.presenceOf($(this.settingsFormLocator)), 7000))
            
            case data.checkboxesTitle:
                return this.notifEmail.click()
                    .then(() => this.notifPush.click())
                    .then(() => this.notifTextMessage.click())
            
            case data.viewButton:
                return this.viewButtonFromYourBids.click();

            case data.paypalTitle:
                return this.paypalCheckbox.click();

            case data.creditCard:
                return this.creditCardCheckbox.click();
            
            case data.cardInfo:
                    return this.yearCardExpiration.click()
                        .then(() => this.year2020CardExpiration.click())
                        .then(() => this.monthCardExpiration.click())
                        .then(() => this.marchCardExpiration.click())
                        .then(() => this.saveInfoButton.click())
        }
    }
    
    openAndValidateSections(element1,element2,validateItem){
        return this.clickOnLinks(element1)
            .then(() => this.clickOnElement(element2))
            .then(() => this.validateElement(validateItem))
    }

    emptyFields(element){
        console.log("This method clears fields in 'Profile' information")
        if(element === data.phoneNumberTitle){
            for(let i=0;i<15;i++){
                this.phoneNumber.sendKeys(protractor.Key.BACK_SPACE)
            }
        return this.phoneNumber.sendKeys(protractor.Key.BACK_SPACE)
        }else if(element === data.emailTitle){
            for(let i=0;i<20;i++){
                this.emailField.sendKeys(protractor.Key.BACK_SPACE)
            }
            return this.emailField.sendKeys(protractor.Key.BACK_SPACE)
        }
    }

    updateEmailInformation(email,invalidEmail=false){
        console.log("This method updates User's email information")
        this.emptyFields(data.emailTitle)
            .then(() => this.emailField.sendKeys(email))
            .then(() => this.saveInfoButton.click())
            .then(() => {
                if(invalidEmail){ this.validateElement(data.emailTitle)
                }else{ itemPage.waitForElement(data.successMessage) }
            })
    }
}

module.exports = new MyAccountPage();