var express = require("express");
const { verifyUser } = require("../middleware/auth");
const { itemController } = require("../controller/item.controler");
var router = express.Router();

/* GET users listing. */

router.post("/item",  verifyUser,itemController.item);


module.exports = router;
