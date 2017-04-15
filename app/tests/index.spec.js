/**
 * Name: index.spec.js
 * Use: test app bootsrtapping
 */

let learNode = require('../js/index');
let expect = require('chai').expect;
let sinon = require('sinon');

before(function () {
	app = new learNode();
});

describe("Ensure application setup is correct", function () {
	beforeEach(function () {
		sinon.stub(console, 'info');
		sinon.stub(console, 'error');
	});

	afterEach(function () {
		console.info.restore();
		console.error.restore();
	});

	it('Unit tests are running', function () {
		return true;
	});

	it('Code is accessible to mocha for testing', function () {
		expect(app).to.be.not.null;
		expect(app).to.be.an.instanceOf(learNode);
	});
});


after(function () {
	app.server.close();
});
