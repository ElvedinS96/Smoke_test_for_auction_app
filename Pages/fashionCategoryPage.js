const Category = require("./category");

class FashionCategoryPage extends Category.Category{
    constructor(){
        super();
        this.title ="Fashion Category"    
    }
}
module.exports = new FashionCategoryPage();