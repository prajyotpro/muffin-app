const models 	= require('../models');
const config 	= require('../config/app');
const validator	= require('../lib/validator');
const async 	= require('async');


module.exports 	= function (sequelize, DataTypes) {

	const tableDefination = {
		'user_id': {
			type: DataTypes.INTEGER,
			validate: {
				notEmpty: {
					msg: "User Id cannot be empty."
				}
			}
		},
		'token': {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: "Token cannot be empty."
				}
			}
		}
	};

	const userToken = sequelize.define('user_token', tableDefination);

	userToken.createNew = function(inputData, callback) {

		let insertData = {user_id: inputData.id, token: inputData.token};

    	userToken.upsert(insertData)
			.then(function (result) {

				return callback(null, inputData);
			})
			.catch(function (error) { 

				return callback(error, false);
			});
	};


	return userToken;
}
