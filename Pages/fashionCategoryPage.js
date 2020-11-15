var EC = protractor.ExpectedConditions;

class FashionCategoryPage{
    constructor(){
        this.title ="Fashion Category"    
    }
    
    // GETTERS

    productItem(item){
        return browser.actions().mouseMove(element(by.xpath(`//*[@id='root']/div/div[1]/div[3]/div/div[${item}]/div/div/a/img`)))
    }

    get productLocator(){
        return ".landing-product";
    }
    
    // ACTIONS

    waitForProductItem(){
        console.log("This method waits for Product Item to show up");
        return browser.wait(EC.presenceOf($(this.productLocator)), 5000)
    }
    
    clickOnItem(item){
        console.log("This method receives desired class item, and clicks on it");
        return this.productItem(item).click().perform();
    }
}
module.exports = new FashionCategoryPage();