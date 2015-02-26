
var chai = require('chai'),
    expect = chai.expect;

var combiner = require('../lib/combiner.js');

describe('the combiner', function () {
	it('exists', function () {
		expect(combiner).to.not.be.null;
	});
	it('combines an array of strings', function () {
		expect(combiner(['asd();', 'dsa();'])).to.be.eql("asd();\ndsa();\n");
	});
});

