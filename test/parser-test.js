
var chai = require('chai'),
    expect = chai.expect;

var fixtures = require('./fixtures.js');
var parser = require('../lib/parser.js');


describe('the parser', function () {
	it('should exist', function () {
		expect(parser).to.not.be.null;
	});

	it('should parse a simple document', function () {
		expect(parser(fixtures['simple.js.md'])).to.not.be.null;
	});
	it('should recognize all code blocks in the simple fixture (none)', function () {
		expect(parser(fixtures['simple.js.md'])).to.be.eql([]);
	});

	it('should recognize all unnamed code blocks', function () {
		expect(parser(fixtures['unnamedblock.js.md'])).to.be.eql([
			'this.doesSomething();',
			'this.doesSomethingElse();'
		]);
	});
});
