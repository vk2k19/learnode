/**
 * Name: index.js
 * Use: app bootsrtapping
 */
'use strict';
const ReqProcessor = require('./requestProcessor');


let rp = new ReqProcessor();

let requests = rp.getRequests(process.argv);
rp.processRequests(requests);

module.exports = (name = 'lEarNode') => this.name = name;
