const Category = require("./category");
var data = require("../Data/data.js");

class FashionCategoryPage extends Category.Category{
    constructor(){
        super();
        this.title ="Fashion Category"    
    }
    validateCollectionURL(URL){
        console.log("This method validates collection URL");
        return expect(URL).toBe(data.featureCollectionLink);
    }
}
module.exports = new FashionCategoryPage();