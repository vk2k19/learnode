/**
 * Name: index.spec.js
 * Use: test app bootsrtapping
 */

let add = require('../js/index');
let expect = require('chai').expect;

describe("Ensure application setup is correct", function () {
	it('Unit tests are running', function () {
		return true;
	});

	it('Code is accessible to mocha for testing', function () {
		expect(add).to.be.not.null;
		expect(add).to.be.an.instanceOf(Function);
	});
});
