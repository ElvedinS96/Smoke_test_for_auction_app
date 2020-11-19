const Page = require("./page");
var data = require("../Data/data.js")


class TermsAndConditions extends Page.Page{
    
    constructor(){
        super();
        this.title="Terms and Conditions"
    }

    // ACTIONS

    validateTitleParagraph(introductionParagraph){
        console.log("This method validates Introduction paragraph");
        return expect(introductionParagraph).toBe(data.introductionParagraph);
    }
}
module.exports = new TermsAndConditions();