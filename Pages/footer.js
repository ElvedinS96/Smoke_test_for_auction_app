const Page = require("./page");
var  data = require("../Data/data.js");

class Footer extends Page.Page{
    constructor(){
        super();
        this.title="Footer";
    }

    // ACTIONS

    validateTitleParagraph(titleParagraph){
        console.log("This method validates Title paragraph");
        return expect(titleParagraph).toBe(data.someTitleHere);
    }

    validateTitleParagraph(introductionParagraph){
        console.log("This method validates Introduction paragraph");
        return expect(introductionParagraph).toBe(data.introductionParagraph);
    }

    validateAboutParagraph(aboutParagraph){
        console.log("This method validates about paragraph")
        return expect(aboutParagraph).toBe(data.aboutUsParagraph)
    }
}
module.exports = new Footer();