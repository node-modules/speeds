speeds
=======

[![Build Status](https://secure.travis-ci.org/fengmk2/speeds.png)](http://travis-ci.org/fengmk2/speeds) [![Dependency Status](https://gemnasium.com/fengmk2/speeds.png)](https://gemnasium.com/fengmk2/speeds)

[![NPM](https://nodei.co/npm/speeds.png?downloads=true&stars=true)](https://nodei.co/npm/speeds/)

![logo](https://raw.github.com/fengmk2/speeds/master/logo.png)

Speeds controllable stream. Uou can control the downstream speed on your own.

## Install

```bash
$ npm install speeds
```

## Usage

```js
var speeds = require('speeds');
var fs = require('fs');

// read data 1 byte per second
var total = 0;
fs.createReadStream(__filename).pipe(speeds(1)).on('data', function (chunk) {
  total += chunk.length;
  console.log('%s %d/%d bytes', Date(), chunk.length, total);
});
```

## License

(The MIT License)

Copyright (c) 2014 fengmk2 &lt;fengmk2@gmail.com&gt; and other contributors

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
