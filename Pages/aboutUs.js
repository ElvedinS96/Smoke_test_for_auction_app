const Page = require("./page");
var data = require("../Data/data.js");
    
class AboutUs extends Page.Page{
    constructor(){
        super();
        this.title = "About Us"
    }

    // ACTIONS

    validateAboutParagraph(aboutParagraph){
        console.log("This method validates about paragraph")
        return expect(aboutParagraph).toBe(data.aboutUsParagraph)
    }
}
module.exports = new AboutUs ();
