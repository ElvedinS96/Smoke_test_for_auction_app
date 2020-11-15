var EC = protractor.ExpectedConditions;

class Page{
    constructor(){
        this.title="Page"
    }

    // GETTERS

    get aboutUs(){
        return browser.driver.findElement(by.linkText("About Us"))
    }

    get loginLink(){
        return browser.driver.findElement(by.className("header-text"));
    }

    get privacyAndPolicy(){
        return browser.driver.findElement(by.linkText("Privacy and Policy"));
    }

    get termsAndConditions(){
        return browser.driver.findElement(by.linkText("Terms and Conditions"));
    }

    get loginButtonLocator(){
        return ".header-text";
    }

    get logoutButton(){
        return browser.driver.findElement(by.css("div.login-acccount button"));
    }

    get createAnAccount(){
        return browser.driver.findElement(by.css("a.header-text"));
    }

    get helperLocator(){
        return ".helper";
    }

    get paragraph(){
        return browser.driver.findElement(by.css(".helper h2"));
    }
    // ACTIONS 
    
    getDate(){
        console.log("This method gets date");
        return new Date();
    }

    getParagraph(){
        console.log("This method gets text from paragraph");
        return this.paragraph.getText();
    }

    waitForParagraph(){
        console.log("This method wait for paragraph");
        return browser.wait(EC.presenceOf($(this.helperLocator)), 5000);
    }

    clickOnCreateAnAccount(){
        console.log("This method clicks on Create an account link");
        return this.createAnAccount.click();
    }

    clickOnPrivacyAndPolicy(){
        console.log("This method click on 'Privacy and Policy' link");
        return this.privacyAndPolicy.click();
    }

    clickOnTermsAndConditions(){
        console.log("This method click on 'Terms and Conditions' link");
        return this.termsAndConditions.click();
    }

    clickOnAboutUs(){
        console.log("This method click on 'About Us' link");
        return this.aboutUs.click();
    }

    openPageURL(url){
        console.log("This method opens URL");
        return browser.get(url);
    }
    
    getPageURL(){
        console.log("This method gets page URL");
        return browser.getCurrentUrl();
    }

    clickOnCategory(categoryNumber){
        console.log("This method clicks on chosen category");
        //Category number starts with 1
        return browser.driver.findElement(by.xpath(`//*[@id='root']/div/div[1]/div[2]/div[1]/div/div[1]/div/div[${categoryNumber}]/div/a`)).click();
    }

    clickOnLogin(){
        console.log("This method clicks on link Login");
        return this.loginLink.click();
    }

    clickOnLogoutButton(){
        console.log("This method clicks on logout button");
        return this.logoutButton.click();
    }
}

module.exports = {
    Page: Page
 }