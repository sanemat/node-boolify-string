'use strict';

var boolifyString = require('../lib/boolify-string.js');
var assert = require('power-assert');

describe('boolifyString', function () {

  it('should be true', function () {
    assert.equal(boolifyString('true'), true);
  });
  it('should be true', function () {
    assert.equal(boolifyString('TRUE'), true);
  });
  it('should be true', function () {
    assert.equal(boolifyString('True'), true);
  });
  it('should be false', function () {
    assert.equal(boolifyString('false'), false);
  });
  it('should be true', function(){
    assert.equal(boolifyString(true), true);
  });
  it('should be false', function(){
    assert.equal(boolifyString(false), false);
  });
});
