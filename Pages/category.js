const Page = require("./page");

var EC = protractor.ExpectedConditions;

class Category extends Page.Page{
    constructor(){
        super();
        this.title="Category"
    }

    // GETTERS
    get productLocator(){ return ".landing-product"; }
    productItem(item){ return browser.actions().mouseMove(element(by.xpath(`//*[@id='root']/div/div[1]/div[3]/div/div[${item}]/div/div/a/img`))); }

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