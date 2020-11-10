var dataJS = require("../data");

class FashionCategoryPage{
    constructor(){
        this.title ="Fashion Category"
    }
    // GETTERS
    productItem(data){
        return browser.actions().mouseMove(element(by.xpath(`//*[@id='root']/div/div[1]/div[3]/div/div[${data}]/div/div/a/img`)))
    }
    get productLocator(){
        return ".landing-product";
    }
    
    // ACTIONS
    // This method waits for Product Item to show up
    waitForProductItem(){
        browser.wait(dataJS.EC.presenceOf($(this.productLocator)), 5000)
    }
    //This method receives desired class item, and clicks on it
    ClickOnItem(data){
        return this.productItem(data).click().perform();
    }
}
module.exports = new FashionCategoryPage ();