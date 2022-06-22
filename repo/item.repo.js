const ItemSchema = require("../schema/item.schema")


class ItemRepo {
    addItem = async(data)=>{
        let itemData = new ItemSchema(Object.assign({},data))
        return itemData.save(data)
        
    };
    getItem= async(cond)=>{
        return ItemSchema.find(cond)
        
    };
}


module.exports={
    itemRepo : new ItemRepo()
}