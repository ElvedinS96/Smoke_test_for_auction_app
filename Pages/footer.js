const Page = require("./page");

var  data = require("../Data/data.js");

class Footer extends Page.Page{
    constructor(){
        super();
        this.title="Footer";
    }

    // ACTIONS

    validateTitleParagraph(titleParagraph){
        console.log("This method validates title paragraph");
        switch(titleParagraph){

            case "Some title here":
                return expect(titleParagraph).toBe(data.someTitleHere);

            case "Introduction":
                return expect(titleParagraph).toBe(data.introductionParagraph);

            case "About Us":
                return expect(titleParagraph).toBe(data.aboutUsParagraph);
        }
    }



}
module.exports = new Footer();