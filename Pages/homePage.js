const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");


class HomePage extends Page.Page{
    constructor(){
        super();
        this.title= "HomePage"
    }
    
    // GETTERS
    get newArrivalsButton(){ return browser.driver.findElement(by.css(".home-nav button:nth-child(1)")); }
    get topRatedButton(){ return browser.driver.findElement(by.css(".home-nav button:nth-child(2)")); }
    get lastChanceButton(){ return browser.driver.findElement(by.css(".home-nav button:nth-child(3)")); }
    get firstItemForLinks(){ return browser.driver.findElement(by.css(".arrivals div div div div a")); }
    get featureCollectionItems(){ return browser.driver.findElement(by.css("#home-feature-single-collection div div a")); }
    get featureCollectionProduct(){ return browser.driver.findElement(by.css("#feature-products-list div div")); }
    get categoryLocator(){ return ".category-item"; }
    
    // ACTIONS
    clickOnElement(element){
        console.log(`This method clicks on ${element} title`)
        switch (element){
            case data.featureCollectionProductsTitle:
                return this.featureCollectionProduct.click();

            case data.featureCollectionCollectionTitle:
                return this.featureCollectionItems.click();

            case data.firstItemForLinksTitle:
                return this.firstItemForLinks.click();

            case data.newArrivalsTitle:
                return this.newArrivalsButton.click();

            case data.topRatedTitle:
                return this.topRatedButton.click();

            case data.lastChanceTitle:
                return this.lastChanceButton.click();
                
            case data.fashionCategoryTitle:
                return super.clickOnCategory(data.fashionCategory);
        }
    }

    waitForCategories(){
        console.log("This method waits for Category to show");
        return browser.wait(EC.presenceOf($(this.categoryLocator)), 7000);
    }

    validateHomePageURL(){
        console.log("This method validates home page URL");
        this.getPageURL()
        .then((URL) => { return expect(URL).toBe(data.homepageLink) });
    }
}

module.exports = new HomePage();