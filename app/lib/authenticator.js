const config 		= require('../config/app');
const models		= require('../models');
const jwt         	= require('jwt-simple');
const bcrypt 		= require('bcrypt');


const Authenticator = function() {};


Authenticator.prototype.authenticate = function(req, res, next) {

	var token = getToken(headers);

	if (!token) {
		return res.status(config.CODES.UNAUTHORIZED).send("Unauthorized");
	}

	try {
	    var decodedToken = jwt.decode(token, config.SECURITY.SALT);
	}
	catch(err) {
	    return res.status(config.CODES.UNAUTHORIZED).send("Unauthorized");
	}

	var userId = getUserIdFromDecodedToken(decodedToken);

	models.token.findAll({where: {
		user_id	: userId,
		token 	: token
	}}).then(function(user) {
		if (user.length == 0) {
			return res.status(config.CODES.UNAUTHORIZED).send("Unauthorized");
		}

		req.user_info = user[0].user_id;
		return next();
	});
};


Authenticator.prototype.generatePassword = function(passwordText, callback) { 
	
	bcrypt.hash(passwordText.trim(), config.SECURITY.SALT_ROUNDS, function(err, hash) {
	  	
	  	if (err) {
	  		console.log(err);
	  		return callback("Error generating password.", false);
	  	}

	  	return callback(false, hash);
	});
};


Authenticator.prototype.comparePassword = function(comparisionObject, callback) { 

	if (typeof comparisionObject != 'object') {
		return callback('Invalid input', false);
	}

	if (comparisionObject.password == undefined) {
		return callback('Invalid input', false);
	}

	if (comparisionObject.hash == undefined) {
		return callback('Invalid input', false);
	}

	bcrypt.compare(comparisionObject.password.trim(), 
		comparisionObject.hash.trim(), 
		function(err, res) {
	    
	    return callback(err, res);
	});
};


Authenticator.prototype.generateToken = function(userInfo, callback) {

	if (typeof userInfo != 'object') {
		return callback('Invalid user data.');
	}

	if (userInfo.id == undefined) {
		return callback('Invalid user data.');
	}

	// ** Generating current date to randomise token
    let now = new Date();
    let generatedToken = jwt.encode(userInfo.id + '_' + now, config.SECURITY.SALT);

    userInfo.token = generatedToken;

    return callback(false, userInfo);
};


module.exports = new Authenticator();


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