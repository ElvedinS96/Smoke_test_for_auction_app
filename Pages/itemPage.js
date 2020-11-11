var data = require("../Data/data"),
    EC = protractor.ExpectedConditions;

class ItemPage{
    constructor(){
        this.title = "ItemPage"    
    }
    
    // GETTERS

    get bidMessage(){
        return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div"));
    }

    get bidField(){
        return browser.driver.findElement(by.className("bid-input"));
    }

    get placeBidButton(){
        return browser.driver.findElement(by.className("bid-arrow"));
    }

    get imageSlider(){
        return browser.driver.findElement(by.className("default-nav"));
    }

    get itemDetails(){
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

    // ACTIONS

    validateHighestBidder(bidConfirmationText){
        console.log("This method validates if User is the highest bidder")
        return expect(bidConfirmationText).toBe(data.highestBidderMessage)
    }

    waitForSuccessMessage(){
        console.log("This method waits for Success Bid Message to show up")
        return browser.wait(EC.presenceOf($(this.statusSuccessLocator)), 5000);
    }

    validateUsersName(userName){
        console.log("This method validates User's name after placed bid")
        return expect(userName).toBe(data.userAssert);
    }

    validateUsersBid(userBid){
        console.log("This method validates User's bid price after placed bid")
        return expect(userBid).toBe(data.bidAssert);
    }

    validateDateOfBid(bidDate){
        console.log("This method validates User's bid date after placed bid")
        return expect(bidDate).toBe(`${data.d.getDate()} ${data.months[data.d.getMonth()]} ${data.d.getFullYear()}`)
    }

    validateItemDetails(itemDetails){
        console.log("This method validates Item details")
        return expect(itemDetails).toBe(data.itemDetailsAssert)
    }

    waitForUserImg(){
        console.log("This method waits for User's image to show up")
        return browser.wait(EC.presenceOf($(this.userImgLocator)), 5000);
    }

    getBidDate(){
        console.log("This method gets date from User's placed bid")
        return this.bidDate.getText();
    }

    getBidPrice(){
        console.log("This method gets price from User's placed bid")
        return this.bidPrice.getText();
    }

    getUserName(){
        console.log("This method gets name from User's placed bid")
        return this.userName.getText();
    }

    getItemDetails(){
        console.log("This method gets Item's details")
        return this.itemDetails.getText();
    }

    getBidConfirmationText(){
        console.log("This method gets message that User placed a bid")
        return this.bidMessage.getText();
    }

    enterBid(bid){
        console.log("This method enters bid in input field")
        this.bidField.sendKeys(bid);
    }

    clickOnPlaceBidButton(){
        console.log("This method click on button to place bid")
        this.placeBidButton.click()
    }
    
    clickOnImageSlider(){
        console.log("This method clicks on image slider and changes image")
        this.imageSlider.click();
    }
}

module.exports = new ItemPage();