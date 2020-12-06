var homePage = require('../Pages/homePage.js'),
    loginPage = require('../Pages/loginPage'),
    fashionCategoryPage = require ("../Pages/fashionCategoryPage"),
    itemPage = require ("../Pages/itemPage"),
    myAccountPage = require("./myAccountPage"),
    data = require("../Data/data.js");

class UITasks {
    constructor(){
        this.title="UI Tasks";
    }
    // ACTIONS
    bidOnItemFromFashionCategory(item,bidPrice){
    console.log("This method clicks on item from Fashion category, enters and places bid, and validates elements");
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(item))
            .then(() => itemPage.enterBid(bidPrice))
    }

    userOverBid(){
        homePage.clickOnElement(data.fashionCategoryTitle)
            .then(() => fashionCategoryPage.waitForProductItem())
            .then(() => fashionCategoryPage.clickOnItem(data.blueJacket))
            .then(() => itemPage.enterBid(data.fiveThousandDollars))
            .then(() => homePage.clickOnLinks(data.logoutButtonTitle))
            .then(() => homePage.openPageURL(data.homepageLink))
            .then(() => homePage.clickOnLinks(data.loginLinkTitle))
            .then(() => loginPage.logIn(data.userTester1,data.passwordTester1))
            .then(() => this.bidOnItemFromFashionCategory(data.blueJacket,data.sixThousandDollars))
    }

    updateProfileInformation(){
        console.log("This method updates First Name, Last Name, Date of birth, Phone Number")
        return myAccountPage.firstNameProfileInformation.sendKeys(data.lastNameTester)
            .then(() => myAccountPage.lastNameProfileInformation.sendKeys(data.lastNameTester))
            .then(() => myAccountPage.genderDropdown.click())
            .then(() => myAccountPage.otherValueFromGenderDropdown.click())
            .then(() => myAccountPage.monthBirthDropdown.click())
            .then(() => myAccountPage.phoneNumber.sendKeys(data.phoneNumber))
            .then(() => myAccountPage.februaryBirthDropdown.click())
            .then(() => myAccountPage.dayBirthDropdown.click())
            .then(() => myAccountPage.thirdBirthDropdown.click())
            .then(() => myAccountPage.yearBirthDropdown.click())
            .then(() => myAccountPage.twoThousandBirthDropdown.click())
            .then(() => myAccountPage.saveInfoButton.click())
            .then(() => itemPage.waitForElement(data.successMessage))
    }
}

module.exports = new UITasks();