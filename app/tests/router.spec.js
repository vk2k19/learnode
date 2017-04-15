/**
 * Name: router.spec.js
 * Use: test router redirects
 */

let router = require('../js/router');
let expect = require('chai').expect;
let sinon = require('sinon');

//get app
describe("Ensure router setup is correct", function () {
	beforeEach(function () {
		sinon.stub(console, 'info');
		sinon.stub(console, 'error');
	});

	afterEach(function () {
		console.info.restore();
		console.error.restore();
	});

	it('Router must exist', function () {
		expect(router).to.be.not.null;
		expect(router).to.be.an.instanceOf(Function);
	});

	it('Router must route to calculate', function () {
		let response = router({ url: '/calculate?add= add 1 2 add 3 4' });
		expect(response).to.be.not.null;
		expect(response).to.have.keys('totalRequest', 'result');
	});

	it('Router must return the error for other than calculate request', function () {
		let response = router({ url: '/calculateing?add= add 1 2 add 3 4' });
		expect(response).to.be.not.null;
		expect(response).to.be.an.instanceOf(Error);
	});
});
