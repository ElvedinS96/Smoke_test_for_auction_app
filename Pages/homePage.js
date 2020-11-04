class HomePage {
    constructor() {
        this.title= "HomePage";
    }
    get loginButton (){
        return browser.driver.findElement(by.className("header-text"));
    }
    get fashionCategory(){
        return browser.driver.findElement(by.css("div.category-item a"));
    }

    get brownJacket(){
        return browser.actions().mouseMove(element(by.css("div.product-preview div a img")));
    }
    get bidField (){
        return browser.driver.findElement(by.className("bid-input"));
    }
    get placeBidButton (){
        return browser.driver.findElement(by.className("bid-arrow"));
    }
    clickOnPlaceBidButton(){
        this.placeBidButton.click()
    }
    enterBid(bid){
        this.bidField.sendKeys(bid);
    }
    clickOnLogin() {
        this.loginButton.click();
    };

    
    clickOnFashionCategory(){
        this.fashionCategory.click();
    }
    clickOnBrownJacket(){
        this.brownJacket.click().perform();
    }


    open (url){
        return browser.get(url);
    };
}
module.exports = new HomePage ();