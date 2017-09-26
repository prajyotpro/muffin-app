var models = require('../models');
var config = require('../config/app');

module.exports = function (sequelize, DataTypes) {

	const user = sequelize.define('user', {
		'full_name': {
			type: DataTypes.STRING,
			validate: {
				notEmpty: {
					msg: "Name cannot be empty."
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
	});

	return user;
}
