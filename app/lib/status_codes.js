const Codes = function() {};

// 200
Codes.prototype.SUCCESS 		= 200;
Codes.prototype.CREATED 		= 201;

// 400
Codes.prototype.BAD_REQUEST 	= 400;
Codes.prototype.UNAUTHORIZED	= 401;
Codes.prototype.PAYMENT_REQUIRED= 402;
Codes.prototype.FORBIDDEN 		= 403;
Codes.prototype.NOT_FOUND 		= 404;
Codes.prototype.NOT_ALLOWED 	= 405;

module.exports = new Codes();