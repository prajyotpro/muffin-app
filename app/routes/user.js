var User        = require('../controllers/user');
var express 		= require('express');
var router 			= express.Router();

router.get('/', User.getUsers);

module.exports = router;
