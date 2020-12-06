const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js"),
    itemPage = require ("../Pages/itemPage");

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
    get leftSliderButton(){ return browser.driver.findElement(by.className("rc-slider-handle-1")); }
    get rightSliderButton(){ return browser.driver.findElement(by.className("rc-slider-handle-2")); }
    get jacketShopFilter(){ return browser.driver.findElement(by.css("#shop-filter-sub-list-inside :last-child")); }
    get dressShopFilter(){ return browser.driver.findElement(by.css("#shop-filter-sub-list-inside :first-child")) }
    get labelPricesFromFilterByPrice(){ return browser.driver.findElement(by.css("#shop-filters-price-prices label")); }
    get selectedFilterPopUp(){ return browser.driver.findElement(by.className("active-name")) }
    filterNumber(number){ return browser.driver.findElement(by.css(`#shop-filter-cat-single:nth-child(${number})`)); }
    
    // ACTIONS
    getElement(element){
        switch(element){
            case data.textFromFilterPopUp:
                return this.selectedFilterPopUp.getText();
            
            case data.pricesFromFilterByPrice:
                return this.labelPricesFromFilterByPrice.getText();

            case data.listViewButtonAttribute:
                return this.listButton.getAttribute("class");
        }
    }

    searchAndValidateElements(itemTitle,searchType){
        return this.searchForItems(itemTitle,searchType)
            .then(() => this.validateElements())
    }

    validateElements(){
        return this.getElement(data.textFromFilterPopUp)
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

    validatePricesFromFilterByPrice(prices){
        console.log("This method validates prices from Filter by Price");
        if(prices.split(" ")[0] === data.twoHundredDolars && prices.split(" ")[2] === data.nineHundredDolars){
            return expect(true).toBe(true);
        } else{
            return expect(true).toBe(false);
        }
    }

    clickOnElement(element){
        switch(element){
            case data.bidButtonShopTitle:
                return this.bidButton.click();
            
            case data.listViewButton:
                return this.listButton.click();
            
            case data.dressShopFilter:
                return this.dressShopFilter.click()
                    .then(() => browser.sleep(2000));
            
            case data.jacketShopFilter:
                return this.jacketShopFilter.click()
                    .then(() => browser.sleep(2000));
            
            case data.categoriesFilterTitle:
                return this.filterNumber(1).click()
        }
    }

    testCategoriesFilters(){
        for(let i=1;i<=10;i++){
            console.log("This method clicks on Category Filters");
            this.filterNumber(i).click();
            for(let j=i;j<i+1;j++){
                this.filterNumber(j).click();
            }
        }
    }

    clickAndMoveSlider(slider,number){
        console.log("This method clicks and moves both sliders on filter by price")
        if (slider === data.leftSlider){
            return this.leftSliderButton.click()
                .then(() =>{
                    for(let i=1;i<number;i++){
                        this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
                    }
                    return this.leftSliderButton.sendKeys(protractor.Key.ARROW_RIGHT)
                })
        }else if(slider === data.rightSlider){
            return this.rightSliderButton.click()
                .then(() =>{
                    for(let i=1;i<number;i++){
                        this.rightSliderButton.sendKeys(protractor.Key.ARROW_LEFT)
                     }
                    return this.rightSliderButton.sendKeys(protractor.Key.ARROW_LEFT)
                })
        }
    }
    
    waitForElement(element){
        console.log("This method waits for element to load")
        switch(element){
            case data.waitForShopTitle:
                return browser.wait(EC.presenceOf($(this.shopGrid)), 7000); 
            
            case data.bidButtonTitle:
                return browser.wait(EC.presenceOf($(this.bidButtonLocator)), 7000); 
        }
    }

    validateShopPageURL(URL){
        console.log("This method validates shop page URL");
        return expect(URL).toBe(data.shopPageLink);
    }

    validateItemAttribute(attribute){
        console.log("This method validates attribute");
        return expect(attribute).toBe(data.listViewButtonAttribute);
    }
}

module.exports = new Shop();