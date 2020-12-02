const Page = require("./page");

var EC = protractor.ExpectedConditions,

    data = require("../Data/data.js");

class Shop extends Page.Page{
    constructor(){
        super();
        this.title="Shop"
    }

    // GETTERS

    get shopGrid(){ return ".shop-page-grid"; }
    
    elementsInGridView(itemNumber){ return browser.driver.findElement(by.css(`.shop-page-grid :nth-child(${itemNumber})`)); }

    get bidButton(){ return browser.driver.findElement(by.className("shop-bid-button")); }

    get bidButtonLocator(){ return ".shop-bid-button"; }

    get listButton(){ return browser.driver.findElement(by.css(".shop-header-view span:last-child")); }

    get gridBidButton(){ return browser.driver.findElement(by.css(".overlay div")); }
    
    filterNumber(number){
        var value;
        switch(number){
            case 1:
                value= browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(1)"));
                return value;
            case 2:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(2)"));
            case 3:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(3)"));
            case 4:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(4)"));
            case 5:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(5)"));
            case 6:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(6)"));
            case 7:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(7)"));
            case 8:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(8)"));
            case 9:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(9)"));
            case 10:
                return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(10)"));
            
            default:  return browser.driver.findElement(by.css("#shop-filter-cat-single:nth-child(2)"));
            }
    }

    get leftSliderButton(){ return browser.driver.findElement(by.className("rc-slider-handle-1")); }

    get rightSliderButton(){ return browser.driver.findElement(by.className("rc-slider-handle-2")); }

    get jacketShopFilter(){ return browser.driver.findElement(by.css("#shop-filter-sub-list-inside :last-child")); }

    get dressShopFilter(){ return browser.driver.findElement(by.css("#shop-filter-sub-list-inside :first-child")) }

    get labelPricesFromFilterByPrice(){ return browser.driver.findElement(by.css("#shop-filters-price-prices label")); }

    get selectedFilterPopUp(){ return browser.driver.findElement(by.className("active-name")) }

    

    // ACTIONS

    getTextFromSelectedFilterPopUp(){
        console.log("This method gets text from selected filter pop up");
        return this.selectedFilterPopUp.getText();
    }
    validateElements(){
        return this.getTextFromSelectedFilterPopUp()
            .then((filterText) => this.validateTextFromSelectedFilterPopUp(filterText))
    }
    validateTextFromSelectedFilterPopUp(filterText){
        console.log("This method validates text from selected filter pop up");
        if(filterText === data.titleJacket){
            return expect(filterText).toBe(data.titleJacket)
        }else if(filterText === data.colorToSearch){
            return expect(filterText).toBe(data.colorToSearch)
        }   
    }

    clickOnDressShopFilter(){
        console.log("This method clicks on Dress filter from Product categories filter");
        return this.dressShopFilter.click();
    }

    clickOnJacketShopFilter(){
        console.log("This method clicks on jacket filter in Shop");
        return this.jacketShopFilter.click();
    }

    getPricesFromFilterByPrice(){
        console.log("This method gets prices bellow slider in Filter by Price");
        return this.labelPricesFromFilterByPrice.getText();
    }

    validatePricesFromFilterByPrice(prices){
        console.log("This method validates prices from Filter by Price");
        if(prices.split(" ")[0] === data.twoHundredDolars && prices.split(" ")[2] === data.nineHundredDolars){
            return expect(true).toBe(true);
        } else{
            return expect(true).toBe(false);
        }
    }

    clickOnBidButton(){
        console.log("This method clicks on bid button");
        return this.bidButton.click();
    }

    clickOnCategoryFilter(number){
        console.log("This method clicks on Fashion Filter");
        return this.filterNumber(number).click();
    }

    clickOnLeftSlider(){
        console.log("This method clicks on left slider");
        return this.leftSliderButton.click();
    }

    clickOnRightSlider(){
        console.log("This method clicks on right slider");
        return this.rightSliderButton.click();
    }

    moveLeftSlider(number){
        console.log("This method moves left price slider to the right");
        for(let i=1;i<number;i++){
           this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
        }
        return this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
    }

    moverightSlider(number){
        console.log("This method moves right price slider to the left");

        for(let i=1;i<number;i++){
           this.rightSliderButton.sendKeys(protractor.Key.ARROW_LEFT)
        }
        return this.rightSliderButton.sendKeys(protractor.Key.ARROW_LEFT)
    }

    clickOnListViewButton(){
        console.log("This method clicks on List view button");
        return this.listButton.click();
    }

    waitForShop(){
        console.log("This method wait for Shop to load");
        return browser.wait(EC.presenceOf($(this.shopGrid)), 7000); 
    }

    waitForBidButton(){
        console.log("This method wait for Bid button");
        return browser.wait(EC.presenceOf($(this.bidButtonLocator)), 7000); 
    }

    validateShopPageURL(URL){
        console.log("This method validates shop page URL");
        return expect(URL).toBe(data.shopPageLink);
    }

    getListViewButtonAttribute(){
        console.log("This method gets item attribute");
        return this.listButton.getAttribute("class");
    }

    validateItemAttribute(attribute){
        console.log("This method validates attribute");
        return expect(attribute).toBe(data.listViewButtonAttribute);
    }


}

module.exports = new Shop();