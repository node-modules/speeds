'use strict';

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
