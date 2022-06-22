var express = require("express");

const { userController } = require("../controller/user.controller");

const { userService } = require("../service/user.service");

const { verifyUser } = require("../middleware/auth");

var router = express.Router();
router.post("/register", userController.register);
router.get("/getUser", userController.getUser);
router.post("/login", userController.login);
router.post("/login", verifyUser, userController.login);
router.get("/verify-user/:token", userService.verifyUser);

module.exports = router;
