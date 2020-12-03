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
    get bidsTableLocator(){ return browser.driver.findElement(by.id("user-page-header-bids")); }
    get bidsButtonLocator(){ return ".user-bids-item"; }
    get settingsButton(){ return browser.driver.findElement(by.id("user-page-header-settings")); }



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
        }
    }

    validateElement(elementToValidate){
        if(elementToValidate === data.profileHeadingTitle){
            return this.getElementValidation(elementToValidate)
                .then((profileText) => this.validateProfilePage(profileText))
        }else if(elementToValidate === data.yourBidsTable){
            return  this.getElementValidation(elementToValidate)
                .then((yourBidText) => this.validateYourBidsPage(yourBidText))
        }else if(elementToValidate === data.settingsTitle){
            return  this.getElementValidation(elementToValidate)
                .then((settingsTitle) => this.validateSettingsPage(settingsTitle))
        }
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
        switch(element){
            case data.profileButton:
                return this.profileButton.click()
                    .then(() => browser.wait(EC.presenceOf($(this.profileHeadingLocator)), 7000))
            
            case data.bidsButton:
                return this.bidsButton.click()
                    .then(() => browser.wait(EC.presenceOf($(this.bidsTableLocator)), 7000))
            
            case data.settingsButton:
                return this.settingsButton.click()
                    .then(() => browser.wait(EC.presenceOf($(this.settingsFormLocator)), 7000))
        }
    }
}

module.exports = new MyAccountPage();