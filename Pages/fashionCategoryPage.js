const Category = require("./category");
var data = require("../Data/data.js"),
    EC = protractor.ExpectedConditions;

class FashionCategoryPage extends Category.Category{
    constructor(){
        super();
        this.title ="Fashion Category"    
    }

    // ACTIONS
    validateCollectionURL(){
        console.log("This method validates collection URL");
        this.getPageURL()
        .then((URL) => { return expect(URL).toBe(data.featureCollectionLink) });
    }

    waitForProductItem(){
        console.log("This method waits for Product Item to show up");
        return browser.wait(EC.presenceOf($(this.productLocator)), 7000)
    }
}

module.exports = new FashionCategoryPage();