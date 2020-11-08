class TermsAndConditions{
    constructor(){
        this.title="Terms and Conditions"
    }
    get introductionParagraph(){
        return browser.driver.findElement(by.css(".helper div h2"));
    }
    getIntroductionParagraph(){
        return this.introductionParagraph.getText();
    }
}
module.exports = new TermsAndConditions();