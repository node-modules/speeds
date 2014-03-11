/**!
 * speeds - test/speeds.test.js
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

var should = require('should');
var fs = require('fs');
var speeds = require('../');

describe('speeds.test.js', function () {
  it('should control 500 bytes per second', function (done) {
    var chunks = [];
    fs.createReadStream(__filename).pipe(speeds(500)).on('data', function (chunk) {
      chunks.push(chunk);
      should.ok(chunk.length <= 500);
    }).on('end', function () {
      chunks.length.should.above(1);
      Buffer.concat(chunks).toString().should.equal(fs.readFileSync(__filename, 'utf8'));
      done();
    });
  });

  it('should control with default speed', function (done) {
    var chunks = [];
    fs.createReadStream(__filename).pipe(speeds()).on('data', function (chunk) {
      chunks.push(chunk);
    }).on('end', function () {
      Buffer.concat(chunks).toString().should.equal(fs.readFileSync(__filename, 'utf8'));
      done();
    });
  });

  it('should control 10000000 bytes per second', function (done) {
    var chunks = [];
    fs.createReadStream(__filename).pipe(speeds({speed: 10000000})).on('data', function (chunk) {
      chunks.push(chunk);
      should.ok(chunk.length <= 10000000);
    }).on('end', function () {
      chunks.should.length(1);
      Buffer.concat(chunks).toString().should.equal(fs.readFileSync(__filename, 'utf8'));
      done();
    });
  });
});
