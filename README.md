speeds
=======

[![Build Status](https://secure.travis-ci.org/fengmk2/speeds.png)](http://travis-ci.org/fengmk2/speeds) [![Dependency Status](https://gemnasium.com/fengmk2/speeds.png)](https://gemnasium.com/fengmk2/speeds)

[![NPM](https://nodei.co/npm/speeds.png?downloads=true&stars=true)](https://nodei.co/npm/speeds/)

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

[MIT](LICENSE.txt)
