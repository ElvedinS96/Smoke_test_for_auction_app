const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");
    
class AboutUs extends Page.Page{
    constructor(){
        super();
        this.title = "About Us"
    }

    // ACTIONS

    waitForAboutUsParagraph(){
        console.log("This method waits for About Us paragraph");
        return super.waitForParagraph();
    }

    getAboutParagraph(){
        console.log("This method gets text from paragraph");
        return super.getParagraph();
    }

    validateAboutParagraph(aboutParagraph){
        console.log("This method validates about paragraph")
        return expect(aboutParagraph).toBe(data.aboutUsParagraph)
    }
}
module.exports = new AboutUs ();
