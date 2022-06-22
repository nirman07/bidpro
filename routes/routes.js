var express = require('express');
var router = express.Router();
var masterRouter = require('./master');
var usersRouter=require('./users');
var itemRouter=require('./item');
var bidRouter=require('./bid');
/* GET home page. */

// Master Routes
router.use('/master',masterRouter)
router.use('/users',usersRouter)
router.use('/items',itemRouter)
router.use('/bid',bidRouter)
module.exports = router;               