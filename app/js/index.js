/**
 * Name: index.js
 * Use: app bootsrtapping
 */
'use strict';
const server = require('./server');

if (server.listening === false) {
	server.listen({
		port: 8002
	});
}

console.log(`App server is running at ${JSON.stringify(server.address())}`);

module.exports = class app {
	constructor(name = 'learNode') {
		this.name = name;
		this.server = server;
	}
	getServer() {
		return this.server;
	}
	closeServer() {
		this.server.close();
	}
}
