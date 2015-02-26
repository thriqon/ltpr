
var parser = require('./lib/parser.js'),
    combiner = require('./lib/combiner.js');

module.exports = {
	extractCode: function (str) {
		return combiner(parser(str));
	}
};
