const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");


class HomePage extends Page.Page{
    constructor(){
        super();
        this.title= "HomePage"
    }
    
    // GETTERS

    get newArrivalsButton(){
        return browser.driver.findElement(by.css(".home-nav button:nth-child(1)"));
    }

    get topRatedButton(){
        return browser.driver.findElement(by.css(".home-nav button:nth-child(2)"));
    }

    get lastChanceButton(){
        return browser.driver.findElement(by.css(".home-nav button:nth-child(3)"));
    }

    get categoryLocator(){
        return ".category-item"
    }

    get firstItemForLinks(){
        return browser.driver.findElement(by.css(".arrivals div div div div a"));
    }

    get featureCollectionItems(){
        return browser.driver.findElement(by.css("#home-feature-single-collection div div a")); 
    }

    get featureCollectionProduct(){
        return browser.driver.findElement(by.css("#feature-products-list div div"))
}
    
    // ACTIONS
    
    clickOnFeatureCollectionProduct(){
        return this.featureCollectionProduct.click();
    }
    clickonFeatureCollectionItem(){
        console.log("This method clicks on first item of Feature Collection");
        return this.featureCollectionItems.click();
    }

    clickonFirstItemForLinks(){
        console.log("This method clicks on first item of New Arrival, Top Rated, Last Chance links");
        return this.firstItemForLinks.click();
    }

    clickOnNewArrivalsButton(){
        console.log("This method clicks on New Arrivals button");
        return this.newArrivalsButton.click();
    }

    clickOnTopRatedButton(){
        console.log("This method clicks on Top Rated button");
        return this.topRatedButton.click();
    }

    clickOnLastChanceButton(){
        console.log("This method clicks on Last Chance button");
        return this.lastChanceButton.click();
    }

    waitForCategories(){
        console.log("This method waits for Category to show");
        return browser.wait(EC.presenceOf($(this.categoryLocator)), 7000);
    }

    validateHomePageURL(URL){
        console.log("This method validates home page URL");
        return expect(URL).toBe(data.homepageLink);
    }

    clickOnFashionCategory(){
        console.log("This method clicks on Fashion Category");
        return super.clickOnCategory(data.fashionCategory);
    }
    
}
module.exports = new HomePage();