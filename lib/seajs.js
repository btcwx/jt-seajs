var through = require('through2');
var path = require('path');

function escape(data) {
	data = data.toString();
	return data.replace(/'/g, "\\'").replace(/"/g, '\\"');
}

module.exports = function(opt) {
	return through(function(chunk, encoding, callback) {
		var buffer = [];
		buffer.push(new Buffer('define('));
		if(opt.name) {
			buffer.push(new Buffer('"'+escape(opt.name)+'",'));
		}
		if(opt.depend) {
			var depend = opt.depend.toString().split(/\s*,\s*/).map(function(value) {
				return escape(value);
			});
			buffer.push(new Buffer('["'+depend.join('","')+'"],'));
		}
		if(opt.type == 'string') {
			buffer.push(new Buffer('"'+escape(chunk)+'");\n'));
		} else {
			buffer.push(new Buffer('function(require, exports, module) {\n'));
			buffer.push(chunk);
			buffer.push(new Buffer('\n});\n'));
		}

		callback(null, Buffer.concat(buffer));
	});
};