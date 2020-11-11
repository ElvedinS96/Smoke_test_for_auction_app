var dataJS = require("../Data/data");

class FashionCategoryPage{
    constructor(){
        this.title ="Fashion Category",
        this.EC = protractor.ExpectedConditions
    }
    // GETTERS
    productItem(data){
        return browser.actions().mouseMove(element(by.xpath(`//*[@id='root']/div/div[1]/div[3]/div/div[${data}]/div/div/a/img`)))
    }
    get productLocator(){
        return ".landing-product";
    }
    
    // ACTIONS
    waitForProductItem(){
        console.log("This method waits for Product Item to show up");
        browser.wait(this.EC.presenceOf($(this.productLocator)), 5000)
    }
    ClickOnItem(data){
        console.log("This method receives desired class item, and clicks on it");
        return this.productItem(data).click().perform();
    }
}
module.exports = new FashionCategoryPage();