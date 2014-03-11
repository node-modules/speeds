/**!
 * speeds - test/demo.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var speeds = require('../');
var fs = require('fs');

// read data 100 byte per second
var total = 0;
fs.createReadStream(__filename).pipe(speeds(100)).on('data', function (chunk) {
  total += chunk.length;
  console.log('%s %d/%d bytes', Date(), chunk.length, total);
}).on('end', function () {
  console.log('end, total %d bytes', total);
});
