const Category = require("./category");

class FashionCategoryPage extends Category.Category{
    constructor(){
        super();
        this.title ="Fashion Category"    
    }

    // ACTIONS

    waitForProductItem(){
        return super.waitForProductItem();
    }
    
    clickOnItem(item){
        return super.clickOnItem(item);
    }
}
module.exports = new FashionCategoryPage();