/**
 * Name: server.js
 * Use: app server
 */

const HTTP = require('http');
const router = require('./router');
const fs = require('fs');
const URL = require('url');

const server = HTTP.createServer((req, res) => {
	if (req.headers.accept.toLowerCase().indexOf('json') === -1 && req.headers.accept.toLowerCase().indexOf('*/*') === -1) {
		renderView(req, res);
	} else {
		respondWithJSON(req, res);
	}
});


function renderView(req, res) {
	let reqUrl = URL.parse(req.url);
	/* start sending data */
	res.writeHead(200, { 'Content-Type': 'text/html' });
	let data = fs.readFileSync(reqUrl.pathName);

	if (data) {
		res.end(data);
	} else {
		res.end('/view/404');
	}
};

function respondWithJSON(req, res) {
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
	/* start sending data */
	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify(response));
}

module.exports = server;
