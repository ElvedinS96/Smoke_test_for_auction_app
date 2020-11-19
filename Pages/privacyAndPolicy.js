const Page = require("./page");
var  data = require("../Data/data.js");


class PrivacyAndPolicy extends Page.Page{
    constructor(){
        super();
        this.title = "Privacy And Policy"
    }

    // ACTIONS

    validateTitleParagraph(titleParagraph){
        console.log("This method validates Title paragraph");
        return expect(titleParagraph).toBe(data.someTitleHere);
    }
}
module.exports = new PrivacyAndPolicy();