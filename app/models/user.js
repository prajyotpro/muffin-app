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
		'dob': {
			type: DataTypes.DATEONLY,
			allowNull: true
		},
		'status': {
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
		    
			return callback(err, result.dataValues);
		});
	};

	user.getByEmail = function(email, callback) {

		user.findAll({
			where: {
				email: email.trim(),
				status: config.ACTIVE
			}
		})
		.then(function(result) {

			if (result.length == 0) {
				return callback('Invalid login credentials.', false);
			}

			return callback(false, result[0].dataValues);
		})
		.catch(function(error) {

			return callback(error, false);
		});
	};


	return user;
}
