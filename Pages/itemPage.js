const Page = require("./page");
var EC = protractor.ExpectedConditions, 
    data = require("../Data/data.js");

class ItemPage extends Page.Page{
    constructor(){
        super();
        this.title = "ItemPage"    
    }
    
    // GETTERS
    get bidMessage(){ return browser.driver.findElement(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div")); }
    get bidField(){ return browser.driver.findElement(by.className("bid-input")); }
    get itemTitle(){ return browser.driver.findElement(by.css(".product-right h2")); }
    get placeBidButton(){ return browser.driver.findElement(by.className("bid-arrow")); }
    get imageSlider(){ return browser.driver.findElement(by.className("default-nav")); }
    get itemDetails(){ return browser.driver.findElement(by.css("div.product-details p")); }
    get itemDetailsLocator(){ return "div.product-details p"; }
    get placeBidButtonLocator(){ return ".basic-button"; }
    get userName(){ return browser.driver.findElement(by.css("#single-product-table table tr:last-child td:nth-child(2)")); }
    get bidPrice(){ return browser.driver.findElement(by.css("#single-product-table table tr:last-child td:nth-child(3)")); }
    get bidDate(){ return browser.driver.findElement(by.css("#single-product-table table tr:last-child td:nth-child(4)")); }
    get userImgLocator(){ return ".bider-name-img"; }
    get statusSuccessLocator(){ return ".status-success"; }
    get statusInfoLocator(){ return ".status-info"; }

    // ACTIONS
    waitForElement(element){
        console.log("This method waits for element");
        switch(element){
            case data.itemDetailsTitle:
                return browser.wait(EC.presenceOf($(this.placeBidButtonLocator)), 7000);
            case data.statusInfoTitle:
                return browser.wait(EC.presenceOf($(this.statusInfoLocator)), 7000);
            case data.successMessage:
                return browser.wait(EC.presenceOf($(this.statusSuccessLocator)), 10000);
            case data.waitForUserImg:
                return browser.wait(EC.presenceOf($(this.userImgLocator)), 7000);
        }
    }

    getElementValidation(element){
        console.log(`This method gets ${element} title`);
        switch(element){
            case data.itemTitle:
                return this.itemTitle.getText();

            case data.bidDateTitle:
                return this.bidDate.getText();

            case data.bidPriceTitle:
                return this.bidPrice.getText();

            case data.userNameTitle:
                return this.userName.getText();

            case data.itemDetailsTitle:
                return this.itemDetails.getText();

            case data.bidConfirmationTextTitle:
                return this.bidMessage.getText();
        }
    }
    
    validateBidElements(bidStatus=true){
    //bidStatus=data.booleanTrue means that in the bid table there is at least one bid, and we can get User's name, price and bid date, and if bidStatus=data.booleanFalse is set, that means there is no bid in the table, and method getElementValidation() shouldn't try to get those elements
        return this.getElementValidation(data.bidConfirmationTextTitle)
            .then((elementValidation) => this.validateHighestBidder(elementValidation))
            .then(() => { return this.getElementValidation(data.bidConfirmationTextTitle)})
            .then((elementValidation) => this.validateLowerThanStartingBid(elementValidation))
            .then(() => { if(bidStatus) return this.getElementValidation(data.userNameTitle)})
            .then((elementValidation) => this.validateUsersName(elementValidation))
            .then(() => { if(bidStatus) return this.getElementValidation(data.bidPriceTitle)})
            .then((elementValidation) => this.validateBid(elementValidation))
            .then(() => { if(bidStatus) return this.getElementValidation(data.bidDateTitle)})
            .then((elementValidation) => this.validateDateOfBid(elementValidation))
            .then(() => { return this.getElementValidation(data.itemDetailsTitle)})
            .then((elementValidation) => this.validateItemDetails(elementValidation))
    }

    waitAndValidateElement(elementToWait,boolean){
        return this.waitForElement(elementToWait)
            .then(() => this.validateBidElements(boolean))
    }

    clickOnElement(element){
        if(element === data.bidButtonTitle){
            console.log("This method clicks on button to place bid");
            return this.placeBidButton.click();
        }else if(element === data.imageSliderTitle){
            console.log("This method clicks on image slider and changes image");
            return this.imageSlider.click();
        }
    }

    validateHighestBidder(bidConfirmationText){
        if(bidConfirmationText === data.highestBidderMessage){
            console.log("This method validates if User is the highest bidder")
            return expect(bidConfirmationText).toBe(data.highestBidderMessage)
        }
    }

    validateLowerThanStartingBid(confirmationText){
        if(confirmationText === data.notHighestBidMessage){
            console.log("This method validates that bid is lower than starting");
            return expect(confirmationText).toBe(data.notHighestBidMessage)
        } 
    }

    validateUsersName(userName){
        if(userName === data.userAssert){
            console.log("This method validates User's name after placed bid");
            return expect(userName).toBe(data.userAssert);    
        }
    }

    validateBid(userBid){
        if(userBid === data.bidAssert){
            console.log("This method validates User's bid price after placed bid");
            return expect(userBid).toBe(data.bidAssert);
        }
    }

    validateDateOfBid(bidDate){
        if(bidDate === `${super.getDate().getDate()} ${data.months[super.getDate().getMonth()]} ${super.getDate().getFullYear()}`){
            console.log("This method validates User's bid date after placed bid")
            return expect(bidDate).toBe(`${super.getDate().getDate()} ${data.months[super.getDate().getMonth()]} ${super.getDate().getFullYear()}`);
        }
    }

    validateItemDetails(itemDetails){
        if(itemDetails === data.itemDetailsAssert){
            console.log("This method validates Item details");
            return expect(itemDetails).toBe(data.itemDetailsAssert);
        }
    }

    enterBid(bid,addValueOnBidPrice=true){
        console.log("This method enters bid in input field");
        data.collectedTime = (super.getDate().getHours())*3600 + (super.getDate().getMinutes())*60 + super.getDate().getSeconds();
        if(addValueOnBidPrice){ data.finalBidPrice=bid+data.collectedTime}else{data.finalBidPrice=bid;}
        data.bidAssert=`$${data.finalBidPrice}`
        return this.bidField.sendKeys(data.finalBidPrice)
            .then(() => this.clickOnElement(data.bidButtonTitle))
    }
}

module.exports = new ItemPage();