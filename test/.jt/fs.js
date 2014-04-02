var fileSystem = {
	'string': [
		{	
			processor: 'jt-seajs',
			value: 'string',
			'jt-seajs': {
				name: 'string',
				type: 'string'
			}
		}
	],
	'function': [
		{
			processor: 'jt-seajs',
			file: 'function.js',
			'jt-seajs': {
				name: 'fn',
				type: 'function'
			}
		}
	]
};

module.exports = fileSystem;