/**
 * Name: server.js
 * Use: app server
 */

const HTTP = require('http');
const router = require('./router');
const logs = require('./logger');
const URL = require('url');

const server = HTTP.createServer((req, res) => {
	let response = {
		url: req.url,
		status: 'success',
		message: 'We have following data for you',
		data: ''
	};

	let data = router(req);

	if (data instanceof Error) {
		response.status = 'Error';
		response.message = data.message;
		response.data = {}
	}

	response.data = JSON.stringify(data);
	/*create a log for complete request handling */
	logs([
		'\n',
		new Date(),
		'-----',
		`request for: ${req.url}`,
		JSON.stringify(req.headers),
		response.data,
		'======']
	);

	/* start sending data */
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(response));
});

module.exports = server;
