/**
 * Name: router.js
 * Use: route given controllers
 */
'use strict';

const URL = require('url');

let requestProcessor = require('./requestProcessor');
requestProcessor = new requestProcessor();
let count = 0;
module.exports = (req) => {
	let reqUrl = URL.parse(req.url);
	switch (reqUrl.pathname) {
		case "/calculate": {
			let requests = requestProcessor.getRequests(decodeURI(reqUrl.query).split(' '));

			return requestProcessor.processRequests(requests);
		}
		default: {
			return Error('Invalid request for '+ reqUrl.pathname);
		}
	}
};
