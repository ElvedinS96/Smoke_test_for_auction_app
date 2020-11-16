const Page = require("./page");
var EC = protractor.ExpectedConditions;

class Category extends Page.Page{
    constructor(){
        super();
        this.title="Category"
    }

    // GETTERS

    get productLocator(){
        return ".landing-product";
    }

    productItem(item){
        return browser.actions().mouseMove(element(by.xpath(`//*[@id='root']/div/div[1]/div[3]/div/div[${item}]/div/div/a/img`)))
    }

    // ACTIONS

    clickOnItem(item){
        return this.productItem(item).click().perform();
    }

    clickOnLogin(){
        return super.clickOnLogin();
    }

    clickOnLogoutButton(){
      return super.clickOnLogoutButton();
    }

    waitForProductItem(){
        console.log("This method waits for Product Item to show up");
        return browser.wait(EC.presenceOf($(this.productLocator)), 5000)
    }

    clickOnCreateAnAccount(){
        return super.clickOnCreateAnAccount();
    }

    clickOnPrivacyAndPolicy(){
       return super.clickOnPrivacyAndPolicy()
    }

    clickOnTermsAndConditions(){
        return super.clickOnTermsAndConditions();
    }

    clickOnAboutUs(){
        return super.clickOnAboutUs();
    }
}
module.exports = {
    Category: Category
 }