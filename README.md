seajs wrapper for jt-cli 
====

```
var fs = {
	'sea.js': [
		processor: ['jt-seajs'],
		file: './toWrapper.js'
		'jt-seajs': {
			name: 'wrapperJs',
			depend: ['a.js', 'b.js'],
			type: 'function'
		}
	]
}
```

