var dataJS = require("../data");

class ItemPage {
    constructor (){
        this.title = "ItemPage";
    }
    //Getters
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
    get userImgLocator(){
        return ".bider-name-img";
    }
    get statusSuccessLocator(){
        return ".status-success";
    }

    // Actions
    // This method validates if User is the highest bidder
    validateHighestBidder(data){
        return expect(data).toBe(dataJS.highestBidderMessage)
    }
    // This method waits for Success Bid Message to show up
    waitForSuccessMessage(){
        return browser.wait(dataJS.EC.presenceOf($(this.statusSuccessLocator)), 5000);
    }
    // This method validates User's name after placed bid
    validateUsersName(data){
        return expect(data).toBe(dataJS.userAssert);
    }
    // This method validates User's bid price after placed bid
    validateUsersBid(data){
        return expect(data).toBe(dataJS.bidAssert);
    }
    // This method validates User's bid date after placed bid
    validateDateOfBid(data){
        return expect(data).toBe(`${dataJS.d.getDate()} ${dataJS.months[dataJS.d.getMonth()]} ${dataJS.d.getFullYear()}`)
    }
    // This method validates Item details
    validateItemDetails(data){
        return expect(data).toBe(dataJS.itemDetailsAssert)
    }
    // This method wait for User's image to show up
    waitForUserImg(){
        return browser.wait(dataJS.EC.presenceOf($(this.userImgLocator)), 5000);
    }
    // This method gets date from User's placed bid
    getBidDate(){
        return this.bidDate.getText();
    }
    // This method gets price from User's placed bid
    getBidPrice(){
        return this.bidPrice.getText();
    }
    // This method gets name from User's placed bid
    getUserName(){
        return this.userName.getText();
    }
    // This method gets Item's details
    getItemDetails(){
        return this.itemDetails.getText();
    }
    // This method gets message that User placed a bid
    getBidConfirmationText(){
        return this.bidMessage.getText();
    }
    // This method enters bid in input field
    enterBid(bid){
        this.bidField.sendKeys(bid);
    }
    // This method click on button to place bid
    clickOnPlaceBidButton(){
        this.placeBidButton.click()
    }
    // This method clicks on image slider and changes image
    clickOnImageSlider(){
        this.imageSlider.click();
    }
}

module.exports = new ItemPage ();