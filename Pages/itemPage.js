class ItemPage {
    constructor (){
        this.title = "ItemPage";
    }
    get bidMessage (){
        return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div"));
    }
    get bidField (){
        return browser.driver.findElement(by.className("bid-input"));
    }
    get placeBidButton (){
        return browser.driver.findElement(by.className("bid-arrow"));
    }
    get imageSlider (){
        return browser.driver.findElement(by.className("default-nav"));
    }
    get itemDetails (){
        return browser.driver.findElement(by.css("div.product-details p"));
    }
    get userName(){
        return browser.driver.findElement(by.className("bider-name-text"));
    }
    get bidPrice(){
        return browser.driver.findElement(by.css("tr.bider-row td:nth-child(4)"));
    }
    get bidDate(){
        return browser.driver.findElement(by.css("tr.bider-row td:nth-child(3)"));
    }
    getBidDate(){
        return this.bidDate.getText();
    }
    getBidPrice(){
        return this.bidPrice.getText();
    }
    getUserName(){
        return this.userName.getText();
    }
    getItemDetails(){
        return this.itemDetails.getText();
    }
    getBidConfirmationText(){
        return this.bidMessage.getText();
    }
      enterBid(bid){
        this.bidField.sendKeys(bid);
    }
    clickOnPlaceBidButton(){
        this.placeBidButton.click()
    }
    clickOnImageSlider(){
        this.imageSlider.click();
    }
}

module.exports = new ItemPage ();