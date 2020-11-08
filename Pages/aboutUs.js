class AboutUs {
    constructor(){
        this.title = "About Us"
    }
    get aboutParagraph(){
        return browser.driver.findElement(by.css(".helper div h2"));
    }
    getAboutParagraph(){
        return this.aboutParagraph.getText();
    }
}
module.exports = new AboutUs ();