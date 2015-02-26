
var yargs = require('yargs'),
    fs = require('fs'),
    ltpr = require('./index.js');

module.exports = function () {
	var argv = yargs
		.usage('Usage: $0 [options] FILE')
		.demand(1)
		.alias('o', 'output')
		.describe('o', 'Outputs to this file. - means standard output')
		.default('o', '-')
		.argv;

	if (argv._.length === 0) {
		return argv.showHelp();
	}

	process.stdout.write(ltpr.extractCode(fs.readFileSync(argv._[0]).toString()));
};
