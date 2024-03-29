const { itemService } = require("../service/item.service");
const BaseController = require("./base.controller");

class ItemController extends BaseController {

      item = async (req, res, next) => {
        try {
            let { item_name,item_age,item_description,item_prize,category_id,users_id,item_image, bid_start_time } = req.body;
            let data = {
                item_name,
                item_age,
                item_description,
                item_prize,
                category_id,
                users_id,
            }
            let itemData = await itemService.addItem(data);
            this.renderJSON(req,res,itemData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
    
};


    module.exports = {
        itemController: new ItemController()
    }