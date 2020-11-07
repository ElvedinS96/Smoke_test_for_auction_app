class FashionCategoryPage{
    constructor(){
        this.title ="Fashion Category"
    }
    get brownJacket(){
        return browser.actions().mouseMove(element(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div[1]/div/div/a/img")));
    }
    clickOnBrownJacket(){
        this.brownJacket.click().perform();
    }
    
}
module.exports = new FashionCategoryPage ();