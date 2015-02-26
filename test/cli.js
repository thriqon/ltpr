
var chai = require('chai'),
    expect = chai.expect;

var exec = require('child_process').exec;

describe('the cli', function () {
	it('should process a fixture to standard output', function (done) {
		exec('bin/ltpr test/fixtures/unnamedblock.js.md', function (err, stdout) {
			expect(stdout).to.be.eql(
				"this.doesSomething();\nthis.doesSomethingElse();\n"
			);
			done();
		});
	});
});
