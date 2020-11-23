const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");

class Shop extends Page.Page{
    constructor(){
        super();
        this.title="Shop"
    }

    // GETTERS

    get shopGrid(){
        return ".shop-page-grid";
    }
    elementsInGridView(itemNumber){
        return browser.driver.findElement(by.css(`.shop-page-grid :nth-child(${itemNumber})`))
    }

    get bidButton(){
        return browser.driver.findElement(by.className("shop-bid-button"))
    }

    get bidButtonLocator(){
        return ".shop-bid-button";
    }

    get listButton(){
        return browser.driver.findElement(by.css(".shop-header-view span:last-child"));
    }

    get gridBidButton(){
        return browser.driver.findElement(by.css(".overlay div"))
    }

    filterNumber(number){
        return browser.driver.findElement(by.xpath(`//*[@id='root']/div/div[1]/div[4]/div/div[1]/div[1]/div[2]/div[${number}]/div[1]`))
    }

    get leftSliderButton(){
        return browser.driver.findElement(by.className("rc-slider-handle-1"));
    }

    get rightSliderButton(){
        return browser.driver.findElement(by.className("rc-slider-handle-2"));
    }

    

    // ACTIONS

    clickOnBidButton(){
        return this.bidButton.click();
    }

    clickOnFashionFilter(number){
        return this.filterNumber(number).click();
    }

    clickOnLeftSlider(){
        console.log("This method clicks on left slider")
        return this.leftSliderButton.click();
    }

    clickOnRightSlider(){
        console.log("This method clicks on right slider")
        return this.rightSliderButton.click();
    }

    moveLeftSlider(number){
        for(let i=1;i<number;i++){
           this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
        }
        return this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
    }

    moverightSlider(number){
        for(let i=1;i<number;i++){
           this.rightSliderButton.sendKeys(protractor.Key.ARROW_LEFT)
        }
        return this.rightSliderButton.sendKeys(protractor.Key.ARROW_LEFT)
    }

    hoverOnItemInGridView(itemNumber){
        return browser.actions().mouseMove(this.elementsInGridView(itemNumber)).perform();
    }

    clickOnHoveredItem(){
        return this.gridBidButton.click()
    }

    clickOnListViewButton(){
        return this.listButton.click();
    }
    waitForShop(){
        console.log("This method wait for Shop to load")
        return browser.wait(EC.presenceOf($(this.shopGrid)), 7000); 
    }

    waitForBidButton(){
        return browser.wait(EC.presenceOf($(this.bidButtonLocator)), 7000); 
    }

    validateShopPageURL(URL){
        console.log("This method validates shop page URL");
        return expect(URL).toBe(data.shopPageLink);
    }

    getListViewButtonAttribute(){
        console.log("This method gets item attribute")
        return this.listButton.getAttribute("class");
    }

    validateItemAttribute(attribute){
        console.log("This method validates ites attribute");
        return expect(attribute).toBe(data.listViewButtonAttribute);
    }


}

module.exports = new Shop();