/**
 * Name: addNumbers.js
 * Use: add given numbers
 */
'use strict';

module.exports = (a, b) => a && b ? parseInt(a,10) + parseInt(b,10) : new Error(`invalid input ${a} and ${b}. We expect mandatorily two numbers to be provided.`);
