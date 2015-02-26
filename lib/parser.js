
var marked = require('marked'),
    util = require('util');

function CodeBlockOnlyRenderer() {
	this.blocks = [];
};
util.inherits(CodeBlockOnlyRenderer, marked.Renderer);

CodeBlockOnlyRenderer.prototype.code = function(code, language) {
	this.blocks.push(code);
};

module.exports = function (str) {
	var renderer = new CodeBlockOnlyRenderer();
	marked(str, {
		renderer: renderer
	});
	return renderer.blocks;
};
