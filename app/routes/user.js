var User        	= require('../controllers/user');
var express 		= require('express');
var router 			= express.Router();

// router.get('/', User.getUsers);

router.post('/signup', User.createUser);
router.post('/signin', User.signIn);

module.exports = router;
