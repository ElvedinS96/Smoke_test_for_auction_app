const Category = require("./category");
var data = require("../Data/data.js");

class FashionCategoryPage extends Category.Category{
    constructor(){
        super();
        this.title ="Fashion Category"    
    }

    // ACTIONS
    
    validateCollectionURL(){
        console.log("This method validates collection URL");
        this.getPageURL()
        .then((URL) => { return expect(URL).toBe(data.featureCollectionLink) });
    }
}
module.exports = new FashionCategoryPage();