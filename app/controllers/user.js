var Controller 	= require('../core/controller');
var config 			= require('../config/app');

console.log(Controller);

// Models
var models 			= require('../models');

var User = function() {
	Controller.call(this);
};

User.prototype = Object.create(Controller.prototype);
User.prototype.constructor = User;

User.getUsers = function(req, res) {
	console.log(User.prototype.authenticate());
	return res.status(200).send({"users":"hii so many users!! LOL :D "});
};

console.log(User);

module.exports = User;
