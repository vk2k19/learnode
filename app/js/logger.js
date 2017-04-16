/**
 * Name: logger.js
 * Use: log requests and responses to debug log file
 */
'use strict';
const fs = require('fs');
const filename = 'debug.log';

console.log(`Please view log at ${process.env.PWD}/${filename}`);

module.exports = (data) => {

	if (data instanceof Array) {
		data = data.join('\n');
	}

	fs.appendFile(filename, data, { encoding: 'utf8' }, function (error) {
		if (error) {
			console.log('error writing ', data);
		}
	});
};
