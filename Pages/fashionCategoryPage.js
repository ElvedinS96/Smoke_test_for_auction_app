class FashionCategoryPage{
    constructor(){
        this.title ="Fashion Category"
    }
    get brownJacket(){
        return browser.actions().mouseMove(element(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div[1]/div/div/a/img")));
    }
    get blueJacket(){
        return browser.actions().mouseMove(element(by.xpath(" //*[@id='root']/div/div[1]/div[3]/div/div[3]/div/div/a/img")));
    }
    get whiteJacket(){
        return browser.actions().mouseMove(element(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div[6]/div/div/a/img")));
    }
    get whiteJacket2(){
        return browser.actions().mouseMove(element(by.xpath("//*[@id='root']/div/div[1]/div[3]/div/div[5]/div/div/a/img")));
    }
    clickOnWhiteJacket2(){
        this.whiteJacket2.click().perform();
    }
    clickOnWhiteJacket(){
        this.whiteJacket.click().perform();
    }
    clickOnBlueJacket(){
        this.blueJacket.click().perform();
    }
    clickOnBrownJacket(){
        this.brownJacket.click().perform();
    }
    
}
module.exports = new FashionCategoryPage ();