var jt = require('jt-cli'),
	path = require('path');

jt.cwd = __dirname;
jt.config = require('./.jt/config.js');
jt.config.base = path.resolve(__dirname);
jt.init();
describe('seajs', function() {
	it('type = string', function(done) {
		jt.fs.readComboFile('string', function(data) {
			var str = data.toString();
			if(str == 'define("string","string");\n') {
				done();
			} else {
				done(false);
			}
		});
	});

	it('type = function', function(done) {
		jt.fs.readComboFile(['function'], function(data) {
			var str = data.toString();
			var result = 'define("fn",function(require, export, module) {\n'
						+'//coding\n'
						+'});\n';
			if(str == result) {
				done();
			} else {
				done(false);
			}
		});
	});

	it('depend 依赖 数组', function(done) {
		jt.fs.readComboFile(['depend'], function(data) {
			var str = data.toString();
			var result = 'define("fn",["a","b","c"],function(require, export, module) {\n'
						+'//coding\n'
						+'});\n';
			if(str == result) {
				done();
			} else {
				done(false);
			}
		});
	});

	it('depend 依赖 字符串', function(done) {
		jt.fs.readComboFile(['dependStr'], function(data) {
			var str = data.toString();
			var result = 'define("fn",["a","b","c"],function(require, export, module) {\n'
						+'//coding\n'
						+'});\n';
			if(str == result) {
				done();
			} else {
				done(false);
			}
		});
	});
});