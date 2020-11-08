class PrivacyAndPolicy{
    constructor(){
        this.title = "Privacy And Policy"
    }
    get someTitleParagraph(){
        return browser.driver.findElement(by.css(".helper div h2"));
    }
    getSomeTitleParagraph(){
        return this.someTitleParagraph.getText();
    }
}
module.exports = new PrivacyAndPolicy();