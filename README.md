seajs wrapper for jt-cli 
====
![travis](https://api.travis-ci.org/wyicwx/jt-seajs.png)
jt的seajs处理器。

#####示例

配置

```shell
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
处理结果
```shell
define('wrapperJs', ['a.js','b.js'], function(require, export, module){
        // toWrapper.js
});

```

#####可选参数
* name

模块名称，可为空

* depend

依赖模块，可以传入数组或字符串，字符串用','分隔依赖模块名称

* type 

type支持string和function


##LICENSES

The MIT License (MIT)

Copyright (c) 2014 wyicwx<[wyicwx@gmail.com](mailto:wyicwx@gmail.com)>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.