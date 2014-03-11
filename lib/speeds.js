/**!
 * speeds - lib/speeds.js
 *
 * Copyright(c) 2014 fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

"use strict";

/**
 * Module dependencies.
 */

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
  var timer = setInterval(function () {
    var end = pos + this._speed;
    var buf = chunk.slice(pos, end);
    this.push(buf);
    pos = end;
    if (pos >= chunk.length) {
      clearInterval(timer);
      timer = null;
      callback();
    }
  }.bind(this), 1000);
};

module.exports = SpeedStream;
