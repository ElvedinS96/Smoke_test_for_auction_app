const Page = require("./page");
var EC = protractor.ExpectedConditions,
    data = require("../Data/data.js");


class PrivacyAndPolicy extends Page.Page{
    constructor(){
        super();
        this.title = "Privacy And Policy"
    }

    // ACTIONS

    waitForHelperParagraph(){
        console.log("This method waits for Helper paragraph");
        return super.waitForParagraph();
    }

    getSomeTitleParagraph(){
        console.log("This method gets title paragraph");
        return super.getParagraph();
    }

    validateTitleParagraph(titleParagraph){
        console.log("This method validates Title paragraph");
        return expect(titleParagraph).toBe(data.someTitleHere);
    }
}
module.exports = new PrivacyAndPolicy();