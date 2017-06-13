speeds
=======

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![npm download][download-image]][download-url]
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)

[npm-image]: https://img.shields.io/npm/v/speeds.svg?style=flat-square
[npm-url]: https://npmjs.org/package/speeds
[travis-image]: https://img.shields.io/travis/node-modules/speeds.svg?style=flat-square
[travis-url]: https://travis-ci.org/node-modules/speeds
[download-image]: https://img.shields.io/npm/dm/speeds.svg?style=flat-square
[download-url]: https://npmjs.org/package/speeds

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
