
var fs = require('fs'),
    path = require('path');

fs.readdirSync(path.join(__dirname, 'fixtures')).map(function (x) {
	module.exports[x] = fs.readFileSync(path.join(__dirname, 'fixtures', x)).toString();
});

