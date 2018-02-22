const validatorLib = require('validator');

const Validator = function() {};

Validator.prototype.validate = function(fieldObject, definationObject, callback) {

	console.log(fieldObject);	

	// for (var i = defination.length - 1; i >= 0; i--) {
	// 	defination[i]
	// }

	for(val in fieldObject) {
		// console.log(val);
		if (definationObject[val] != undefined) {
			console.log(definationObject[val]);
		}
	}
}

module.exports = new Validator();