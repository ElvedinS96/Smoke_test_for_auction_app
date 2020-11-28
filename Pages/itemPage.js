const Page = require("./page");
var EC = protractor.ExpectedConditions, 
    data = require("../Data/data.js");

class ItemPage extends Page.Page{
    constructor(){
        super();
        this.title = "ItemPage"    
    }
    
    // GETTERS

    get bidMessage(){
        return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div"));
    }

    get bidField(){
        return browser.driver.findElement(by.className("bid-input"));
    }

    get itemTitle(){
        return browser.driver.findElement(by.css(".product-right h2"));
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

    get itemDetailsLocator(){
        return "div.product-details p"
    }

    get placeBidButtonLocator(){
        return ".basic-button"
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
    get statusInfoLocator(){
        return ".status-info";
    }


    // ACTIONS

    waitForItemDetails(){
        return browser.wait(EC.presenceOf($(this.placeBidButtonLocator)), 7000);
    }
    getItemTitle(){
        console.log("This method gets Item title");
        return this.itemTitle.getText();
    }

    validateTitleJacket(title){
        return expect(title.split(" ")[1]).toBe(data.titleJacket);
    }

    waitForStatusInfo(){
        console.log("This method waits for info status to show up")
        return browser.wait(EC.presenceOf($(this.statusInfoLocator)), 7000);
    }

    validateHighestBidder(bidConfirmationText){
        console.log("This method validates if User is the highest bidder")
        return expect(bidConfirmationText).toBe(data.highestBidderMessage)
    }

    validateLowerThanStartingBid(confirmationText){
        console.log("This method validates that bid is lower than starting");
        return expect(confirmationText).toBe(data.notHighestBidMessage)
    }

    waitForSuccessMessage(){
        console.log("This method waits for Success Bid Message to show up");
        return browser.wait(EC.presenceOf($(this.statusSuccessLocator)), 10000);
    }

    validateUsersName(userName){
        console.log("This method validates User's name after placed bid");
        return expect(userName).toBe(data.userAssert);
    }

    validateUsersBid(userBid){
        console.log("This method validates User's bid price after placed bid");
        return expect(userBid).toBe(data.bidAssert);
    }

    validateHigherBid(userBid){
        console.log("This method validates User's bid price after placed bid");
        return expect(userBid).toBe(data.bidAssertFiveThousandDollars);
    }

    validateBidWithDecimalPlaces(userBid){
        console.log("This method validates User's bid price with decimal places after placed bid");
        return expect(userBid).toBe(data.bidAssertWithDecimalPlaces);
    }

    validateDateOfBid(bidDate){
        console.log("This method validates User's bid date after placed bid")
        return expect(bidDate).toBe(`${super.getDate().getDate()} ${data.months[super.getDate().getMonth()]} ${super.getDate().getFullYear()}`);
    }

    validateItemDetails(itemDetails){
        console.log("This method validates Item details");
        return expect(itemDetails).toBe(data.itemDetailsAssert);
    }

    waitForUserImg(){
        console.log("This method waits for User's image to show up");
        return browser.wait(EC.presenceOf($(this.userImgLocator)), 7000);
    }

    getBidDate(){
        console.log("This method gets date from User's placed bid");
        return this.bidDate.getText();
    }

    getBidPrice(){
        console.log("This method gets price from User's placed bid");
        return this.bidPrice.getText();
    }

    getUserName(){
        console.log("This method gets name from User's placed bid");
        return this.userName.getText();
    }

    getItemDetails(){
        console.log("This method gets Item's details");
        return this.itemDetails.getText();
    }

    getBidConfirmationText(){
        console.log("This method gets message that User placed a bid");
        return this.bidMessage.getText();
    }

    enterBid(bid){
        console.log("This method enters bid in input field");
        return this.bidField.sendKeys(bid);
    }

    clickOnPlaceBidButton(){
        console.log("This method clicks on button to place bid");
        return this.placeBidButton.click()
    }
    
    clickOnImageSlider(){
        console.log("This method clicks on image slider and changes image");
        return this.imageSlider.click();
    }

}

module.exports = new ItemPage();