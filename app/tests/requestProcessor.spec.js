

let reqProcessor = require('../js/requestProcessor');
const expect = require('chai').expect;
const sinon = require('sinon');
let spiedConsole;

describe('As a user I want to dynamically request add, whthout doing a mannually edit of files', function () {
	before(function () {
		reqProcessor = new reqProcessor();
	});

	after(function () {
		delete reqProcessor;
	});

	it('Module to exist', function () {
		expect(reqProcessor).to.be.not.null;
		expect(reqProcessor).to.be.an.instanceof(Object);
	});

	describe('get request from arguments', function () {
		it('Should have an argument processor', function () {
			expect(reqProcessor.getRequests).to.be.not.null;
			expect(reqProcessor.getRequests).to.be.an.instanceof(Function);
		});

		it('Given no user input should return error', function () {
			let result = reqProcessor.getRequests(['alpha', 'julpha']);
			expect(result.length).to.be.equal(0);
		});

		it('Given other than add must be ignored', function () {
			let result = reqProcessor.getRequests(['alpha', 'julpha']);
			expect(result.length).to.be.equal(0);
		});

		it('Given add request should be logged and other must be ignored', function () {
			let req = ["add", 10 ,20, "sub" ,10, 20, 20, "add", 30, 30];
			let result = reqProcessor.getRequests(req);
			expect(result.length).to.equal(2);
			expect(result).to.deep.equal([[10, 20],[30,30]]);
		});
	});

	describe('process all request', function () {
		let stubbedProcess;
		beforeEach(function () {
			spiedConsole = sinon.stub(reqProcessor, 'log');
			stubbedProcess = sinon.stub(reqProcessor, 'process');
		});

		afterEach(function () {
			reqProcessor.log.restore();
			reqProcessor.process.restore();
		});

		it('Should provide a request processor', function () {
			expect(reqProcessor.processRequests).to.be.not.null;
			expect(reqProcessor.processRequests).to.be.an.instanceof(Function);
		});

		it('Given no user input should log error and message on how to add', function () {
			let result = reqProcessor.processRequests([]);

			expect(result).to.have.keys('totalRequest', 'result');
			expect(result).to.have.property('totalRequest', 0);
			expect(result.result).to.be.instanceOf(Array);
			expect(result.result).to.have.lengthOf(0);
			expect(spiedConsole.calledTwice).to.be.true;
		});

		it('Given requests must be logged add dealt with it', function () {
			let req = [[10 ,20]];
			reqProcessor.processRequests(req);
			expect(spiedConsole.calledTwice).to.be.true;
			expect(stubbedProcess.calledOnce).to.be.true;
			expect(stubbedProcess.calledWith([10,20])).to.be.true;
		});
	});

	describe('process each user request', function () {
		beforeEach(function () {
			spiedConsole = sinon.stub(reqProcessor, 'log');
		});

		afterEach(function () {
			reqProcessor.log.restore();
		});

		it('Given no user input should return error', function () {
			let result = reqProcessor.process();
			expect(result).to.be.an.instanceof(Error);
			expect(spiedConsole.calledOnce).to.be.true;
		});

		it('Given user input must be logged to show user that what was his request', function () {
			let req = [10 ,20];
			reqProcessor.process(req);
			expect(spiedConsole.calledOnce).to.be.true;
		});

		it('should fetch summation result and display result', function () {
			let req = [10 ,20];
			let result = reqProcessor.process(req);
			expect(result).to.be.not.null;
			expect(result).to.be.equal(30);
		});
	});

	describe('logging messages', function () {
		let infoLog, errorLog, msg;
		beforeEach(function () {
			infoLog = sinon.stub(console, 'info');
			errorLog = sinon.stub(console, 'error');
			msg = "Test message";
		});

		afterEach(function () {
			console.info.restore();
			console.error.restore();
			delete msg;
		});

		it('Given no message should log error', function () {
			reqProcessor.log();
			expect(infoLog.notCalled).to.be.true;
			expect(errorLog.calledOnce).to.be.true;
			expect(errorLog.calledWith(msg)).to.be.false;
		});

		it('Given error message should log error', function () {
			reqProcessor.log(msg, true);
			expect(infoLog.notCalled).to.be.true;
			expect(errorLog.calledOnce).to.be.true;
			expect(errorLog.calledWith(msg)).to.be.true;
		});

		it('Given input must log message', function () {
			reqProcessor.log(msg, false);
			expect(infoLog.calledOnce).to.be.true;
			expect(errorLog.notCalled).to.be.true;
			expect(infoLog.calledWith(msg)).to.be.true;
		});
	})
});
