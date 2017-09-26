var config 		= require('../config/app');
var models		= require('../models');
var jwt         = require('jwt-simple');

module.exports = {

	authenticate: 	function(headers, callback) {

		var token = getToken(headers);

		if (!token) {
			return callback(false);
		}

		try {
		    var decodedToken = jwt.decode(token, config.security.salt);
		}
		catch(err) {
		    return callback(false);
		}

		var userId = getUserIdFromDecodedToken(decodedToken);

		models.token.findAll({where: {
			user_id	: userId,
			token 	: token
		}}).then(function(user) {
			if (user.length == 0) {
				return callback(false);
			}
			return callback(user[0].user_id);
		});
	}
}
// ========================================== FUNCTIONS ==========================================
var getToken = function (headers) {

	if (headers && headers.authorization) {
		var parted = headers.authorization.split(' ');
	
		if (parted.length != 2) {
			return null;
		}

		if (parted[0] != 'Bearer') {
			return null;
		}
	  	
	  	return parted[1];
		
	} else {
		return null;
	}
};

var getUserIdFromDecodedToken = function (decodedToken) {

	var parted = decodedToken.split('_');
	return parted[0];
}