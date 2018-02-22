const constants 	= require('./constants');
const statusCodes 	= require('../lib/status_codes');

var Config = function () {
    Config.loadServerConfig();
};

Config.loadServerConfig = function () {

    var defaultServer = 'http://localhost:3030';
    var serverIndex = Object.keys(constants).indexOf(process.env.NODE_ENV);

    if (serverIndex < 0) {

        Config.prototype.SERVER 	= constants.default.SERVER == undefined ? defaultServer : constants.default.SERVER;
    	Config.prototype.SECURITY 	= constants.default.SECURITY == undefined ? defaultServer : constants.default.SECURITY;;
    } else {

        Config.prototype.SERVER 	= constants[process.env.NODE_ENV].SERVER;
        Config.prototype.SECURITY 	= constants[process.env.NODE_ENV].SECURITY;
    }

    Config.prototype.SERVER.API_PATH 		= '/api/';
    Config.prototype.SECURITY.SALT_ROUNDS 	= 10;

    Config.prototype.INACTIVE               = 0;
    Config.prototype.ACTIVE                 = 1;
    Config.prototype.DISABLED               = 2;
}

Config.prototype.CODES = statusCodes;

var config = new Config();

module.exports = config;
