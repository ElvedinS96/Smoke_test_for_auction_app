class FashionCategoryPage{
    constructor(){
        this.title ="Fashion Category"
    }
    get brownJacket(){
        return browser.actions().mouseMove(element(by.css("div.product-preview div a img")));
    }
    clickOnBrownJacket(){
        this.brownJacket.click().perform();
    }
    
}
module.exports = new FashionCategoryPage ();