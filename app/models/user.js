const models 	= require('../models');
const config 	= require('../config/app');
const validator	= require('../lib/validator');
const async 	= require('async');
const authenticator = require('../lib/authenticator');


module.exports 	= function (sequelize, DataTypes) {

	const tableDefination = {
		'first_name': {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: "Name cannot be empty."
				}
			}
		},
		'last_name': {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: "Name cannot be empty."
				}
			}
		},
		'password': {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: "Password cannot be empty."
				}
			}
		},
		'email': {
			type: DataTypes.STRING,
			unique: {
				args: true,
				msg: 'Email address already exists.',
				fields: [sequelize.fn('lower', sequelize.col('email'))]
			},
			validate: {
				isEmail: {
					msg: "Invalid email address."
				},
			}
		},
		'type': {
			type: DataTypes.INTEGER,
			defaultValue: 1,
		},
		'facebook_id': {
			type: DataTypes.STRING,
			unique: true,
		},
		'dob': {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		'instagram_handle': {
			type: DataTypes.STRING
		},
		'gender': {
			type: DataTypes.STRING(2),
			allowNull: true,
			validate: {
				isIn: {
					args: [['M', 'F', 'm', 'f']],
					msg: "Must be M or F"
				}
			}
		},
		'height': {
			type: DataTypes.STRING,
			allowNull: true,
		},
		'country': {
			type: DataTypes.STRING
		},
		'city': {
			type: DataTypes.STRING
		},
		'school': {
			type: DataTypes.STRING
		},
		'other_school': {
			type: DataTypes.STRING
		},
		'job': {
			type: DataTypes.STRING
		},
		'company': {
			type: DataTypes.STRING
		},
		'religion': {
			type: DataTypes.STRING
		},
		'ethnicity': {
			type: DataTypes.STRING
		},
		'bio': {
			type: DataTypes.STRING(1000)
		},
		'is_hidden': {
			type: DataTypes.INTEGER
		},
		'is_active': {
			type: DataTypes.INTEGER,
			defaultValue: '1'
		}
	};

	const user = sequelize.define('user', tableDefination);

	user.createNew = function(inputData, callback) {

		// let required = ['first_name', 'last_name', 'email', 'password'];
		// validator.validate(inputData, tableDefination, function(error, result) {

		// });
		// let password = req.body.password;

		async.waterfall([

		    function(callback) { callback(null, inputData.password); },

		    authenticator.generatePassword, 

		    function(password, callback) {

		    	inputData.password = password;

		    	user.create(inputData)
					.then(function (result) {

						return callback(null, result);
					})
					.catch(function (error) { 

						return callback(error, false);
					});
		    }
		], function (err, result) {
		    
			return callback(err, result);
		});
	};


	return user;
}
