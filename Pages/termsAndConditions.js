const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js")


class TermsAndConditions extends Page.Page{
    
    constructor(){
        super();
        this.title="Terms and Conditions"
    }

    // ACTIONS

    waitForAboutParagraph(){
        console.log("This method waits for About paragraph");
        return super.waitForParagraph();
    }

    getIntroductionParagraph(){
        console.log("This method gets Introduction paragraph");
        return super.getParagraph();
    }

    validateTitleParagraph(introductionParagraph){
        console.log("This method validates Introduction paragraph");
        return expect(introductionParagraph).toBe(data.introductionParagraph);
    }
}
module.exports = new TermsAndConditions();