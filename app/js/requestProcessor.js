/**
 * Name: requestProcessor.js
 * Use: Process user request and call appropriate request handler
**/

'use strict';

const adder = require('./addNumbers'); // our addd module


module.exports = class requestProcessor {
	constructor(name = 'requestProcessor') {
		this.name = name;
		return this;
	}
	processRequests(requests) {
		if (requests.length === 0) {
			this.log(`No input provided. Expecting input while execution of program.`, true);
			this.log(`npm start add num1 num2 [add num1 num2, [...]], We can do multiple two number addition for you.`, true);
		} else {
			this.log(`Processing your requests. Got ${requests.length } add requests`);
			requests.forEach((request) => {
				let result = this.process(request);
				this.log(`${request.join(' + ')} = ${result}`);
			});
		}
	}
	getRequests(processArgs) {
		let requests = [], addRequestFound = false,
		 	previousArgument;

		processArgs.forEach((arg, index) => {

			if (arg === 'add') {
				addRequestFound = true;
			} else if (addRequestFound) {
				if (previousArgument) {
					requests.push([previousArgument, arg]);

					previousArgument = addRequestFound = false;
				} else {
					previousArgument = arg;
				}
			}

		});

		return requests;
	}
	process(args = []) {
		let [num1, num2] = args;
		if (Boolean(num1) === false || Boolean(num2) === false) {
			this.log(`Invalid request to add ${num1} and ${num2}.`, true);
			return new Error('Invalid request');
		} else {
			this.log(`Add ${num1} and ${num2}.`, false);
			return adder(num1, num2);
		}
	}
	log(message, isError) {
		if (isError === false) {
			console.info(message);
		} else {
			console.error(message);
		}
	}
}
