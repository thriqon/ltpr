var chai = require('chai'),
    expect = chai.expect;

var fixtures = require('./fixtures.js');
var ltpr = require('../index.js');

describe('the whole tool', function () {
	it('has an extract code method', function () {
		expect(ltpr.extractCode).to.be.a.Function;
	});
	it('extracts and combines code correctly', function () {
		expect(ltpr.extractCode(fixtures['unnamedblock.js.md'])).to.be.eql(
				"this.doesSomething();\nthis.doesSomethingElse();\n"
		);
	});
});

