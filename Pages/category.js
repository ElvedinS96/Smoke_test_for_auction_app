const Page = require("./page");
var EC = protractor.ExpectedConditions;

class Category extends Page.Page{
    constructor(){
        super();
        this.title="Category"
    }

    // GETTERS
    get productLocator(){ return ".landing-product"; }
    productItem(item){ return browser.actions().mouseMove(element(by.css(`#home-feature-products-single:nth-child(${item})`))); }
                                                                        
    // ACTIONS
    clickOnItem(item){
        console.log(`This method clicks on ${item} item`)
        return this.productItem(item).click().perform();
    }

    waitForProductItem(){
        console.log("This method waits for Product Item to show up");
        return browser.wait(EC.presenceOf($(this.productLocator)), 7000)
    }

}
module.exports = {
    Category: Category
}