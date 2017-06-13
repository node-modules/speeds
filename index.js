'use strict';

var debug = require('debug')('speeds');
var util = require('util');
var Transform = require('stream').Transform;

/**
 * Speed controllable stream.
 *
 * @params {Object|Number} options
 *   - {Number} speed bytes per second, default is 1024 bytes/second
 */
function SpeedStream(options) {
  if (!(this instanceof SpeedStream)) {
    return new SpeedStream(options);
  }

  if (typeof options === 'number') {
    options = { speed: options };
  } else {
    options = options || {};
  }

  this._speed = options.speed || 1024;

  Transform.call(this, options);
}

util.inherits(SpeedStream, Transform);

var proto = SpeedStream.prototype;

proto._transform = function (chunk, encoding, callback) {
  debug('_transform %d bytes', chunk.length);
  var pos = 0;
  var self = this;
  function limit() {
    var end = pos + self._speed;
    var buf = chunk.slice(pos, end);
    self.push(buf);
    pos = end;
    if (pos >= chunk.length) {
      self = null;
      return callback();
    }
    setTimeout(limit, 1000);
  }
  limit();
};

module.exports = SpeedStream;
