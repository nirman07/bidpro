var express = require("express");
const { itemController } = require("../controller/item.controler");

const { verifyUser } = require("../middleware/auth");
var router = express.Router();

/* GET users listing. */

router.post("/item", verifyUser, itemController.item);

module.exports = router;
