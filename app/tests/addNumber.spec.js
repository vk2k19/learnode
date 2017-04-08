/**
 * Name: addNumbers.spec.js
 * Use: test adding of two numbers
 */

let add = require('../js/addNumbers');
let expect = require('chai').expect;

describe("Adding two numbers", function () {

	it('Adding two number is implemented', function () {
		expect(add).to.be.not.null;
		expect(add).to.be.an.instanceOf(Function);
	});

	it('Given two numbers (2 and 5), we expect their sum (7) as result', function () {
		let result = add(2, 5);
		expect(result).to.be.Number;
		expect(result).to.equal(7);
	});

	it('Given numbers as string ("2" and "5"), we expect their sum (7) as result', function () {
		let result = add("2", "5");
		expect(result).to.be.Number;
		expect(result).to.equal(7);
	});

	it('Given one number and one string (2 and "5"), we expect their sum (7) as result', function () {
		let result = add(2, "5");
		expect(result).to.be.Number;
		expect(result).to.equal(7);
	});

	it('Given invalid input ("alpha" and "charlie"), we expect Error to be thrown', function () {
		let result = add( "alpha", "charlie");
		expect(result).to.be.Error;
		expect(result).to.be.not.String;
	});

	it('Given only one number (2), we expect exception to be raised', function () {
		let result = add(2);
		expect(result).to.be.instanceOf(Error);
	});

	it('Given no input, we expect exception to be raised', function () {
		let result = add();
		expect(result).to.be.instanceOf(Error);
	});
});
