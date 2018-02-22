var Controller 	= require('../core/controller');
var Config 		= require('../config/app');

// Models
var models 		= require('../models');

var User = function() {
	Controller.call(this);
};

User.prototype = Object.create(Controller.prototype);
User.prototype.constructor = User;

User.prototype.getUsers = function(req, res) {
	console.log(User.prototype.authenticate());
	// return res.status(200).send({"users":"hii so many users!! LOL :D "});
	return res.status(200).send(app.get('CONFIG').SERVER);
};

User.prototype.createUser = function(req, res) {

	// console.log(req.body);
	models.user.createNew(req.body, function(error, result) {

		if (error) {
			return res.status(Config.CODES.BAD_REQUEST).send(error);
		}

		return res.status(Config.CODES.CREATED).send("Success");
	});
};

module.exports = new User();
