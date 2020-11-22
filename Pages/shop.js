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

    clickOnFashionFilter(number){
        return this.filterNumber(number).click();
    }
    moveLeftSlider(number){
        this.leftSliderButton.click();
        for(let i=0;i<number;i++){
           this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
        }
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