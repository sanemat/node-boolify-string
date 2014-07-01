'use strict';

var boolifyString = require('../lib/boolify-string.js');
var assert = require('power-assert');

describe('boolifyString', function () {
  describe('truthy strings', function(){
    it('true should be true', function () {
      assert.equal(boolifyString('true'), true);
    });
    it('TRUE should be true', function () {
      assert.equal(boolifyString('TRUE'), true);
    });
    it('True should be true', function () {
      assert.equal(boolifyString('True'), true);
    });
    it('{} should be true', function () {
      assert.equal(boolifyString('{}'), true);
    });
    it('some string should be true', function () {
      assert.equal(boolifyString('some string'), true);
    });
    it('1 should be true', function () {
      assert.equal(boolifyString('1'), true);
    });
    it('-1 should be true', function () {
      assert.equal(boolifyString('-1'), true);
    });
    it('[] should be true', function () {
      assert.equal(boolifyString('[]'), true);
    });
  });

  describe('falsy string', function(){
    it('false should be false', function () {
      assert.equal(boolifyString('false'), false);
    });
    it('(empty string) should be false', function () {
      assert.equal(boolifyString(''), false);
    });
    it('0 should be false', function () {
      assert.equal(boolifyString('0'), false);
    });
    it('undefined should be false', function () {
      assert.equal(boolifyString('undefined'), false);
    });
    it('null should be false', function () {
      assert.equal(boolifyString('null'), false);
    });
  });

  it('actual true should be true', function(){
    assert.equal(boolifyString(true), true);
  });
  it('actual false should be false', function(){
    assert.equal(boolifyString(false), false);
  });
});
