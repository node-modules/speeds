speeds
=======

[![Build Status](https://secure.travis-ci.org/node-modules/speeds.png)](http://travis-ci.org/node-modules/speeds)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

Speeds controllable stream.

You can control the downstream speed on your own.

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

[MIT](LICENSE.txt)
