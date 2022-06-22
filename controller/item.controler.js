const { itemService } = require("../service/item.service");
const BaseController = require("./base.controller");

class ItemController extends BaseController {

      item = async (req, res, next) => {
        try {
            let { item_name,item_age,item_description,item_prize,category_id,item_image,users_id, bid_start_time } = req.body;
            let data = {
                item_name,
                item_age,
                item_description,
                item_prize,
                item_image,
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
    getItem= async (req, res, next) => {
        try {
            let serData = await itemService.getItem();
            this.renderJSON(req,res,serData)
        }
        catch (err) {
            this.renderError(req,res,err)
        }
    }
    
};


    module.exports = {
        itemController: new ItemController()
    }