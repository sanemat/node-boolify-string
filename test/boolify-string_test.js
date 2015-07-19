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

  describe('primitive values as is', function () {
    it('true should be true', function(){
      assert.equal(boolifyString(true), true);
    });
    it('false should be false', function(){
      assert.equal(boolifyString(false), false);
    });
    it('object should be true', function(){
      assert.equal(boolifyString({}), true);
    });
    it('1 should be true', function(){
      assert.equal(boolifyString(1), true);
    });
    it('-1 should be true', function(){
      assert.equal(boolifyString(-1), true);
    });
    it('0 should be false', function(){
      assert.equal(boolifyString(0), false);
    });
    it('array should be true', function(){
      assert.equal(boolifyString([]), true);
    });
    it('undefined should be false', function(){
      assert.equal(boolifyString(undefined), false);
    });
    it('null should be false', function(){
      assert.equal(boolifyString(null), false);
    });
  });

  describe('new String("")', function (){
    it('new String("true") should be true', function(){
      var target = new String('true'); // jshint ignore:line
      assert.equal(boolifyString(target), true);
    });
    it('new String("false") should be false', function(){
      var target = new String('false'); // jshint ignore:line
      assert.equal(boolifyString(target), false);
    });
  });
  describe('yaml specification', function (){
    it('y should be true', function(){
      assert.equal(boolifyString('y'), true);
    });
    it('Y should be true', function(){
      assert.equal(boolifyString('Y'), true);
    });
    it('yes should be true', function(){
      assert.equal(boolifyString('yes'), true);
    });
    it('Yes should be true', function(){
      assert.equal(boolifyString('Yes'), true);
    });
    it('YES should be true', function(){
      assert.equal(boolifyString('YES'), true);
    });
    it('n should be false', function(){
      assert.equal(boolifyString('n'), false);
    });
    it('N should be false', function(){
      assert.equal(boolifyString('N'), false);
    });
    it('no should be false', function(){
      assert.equal(boolifyString('no'), false);
    });
    it('No should be false', function(){
      assert.equal(boolifyString('No'), false);
    });
    it('NO should be false', function(){
      assert.equal(boolifyString('NO'), false);
    });
    it('true should be true', function(){
      assert.equal(boolifyString('true'), true);
    });
    it('True should be true', function(){
      assert.equal(boolifyString('True'), true);
    });
    it('TRUE should be true', function(){
      assert.equal(boolifyString('TRUE'), true);
    });
    it('false should be false', function(){
      assert.equal(boolifyString('false'), false);
    });
    it('False should be false', function(){
      assert.equal(boolifyString('False'), false);
    });
    it('FALSE should be false', function(){
      assert.equal(boolifyString('FALSE'), false);
    });
    it('on should be true', function(){
      assert.equal(boolifyString('on'), true);
    });
    it('On should be true', function(){
      assert.equal(boolifyString('On'), true);
    });
    it('ON should be true', function(){
      assert.equal(boolifyString('ON'), true);
    });
    it('off should be false', function(){
      assert.equal(boolifyString('off'), false);
    });
    it('Off should be false', function(){
      assert.equal(boolifyString('Off'), false);
    });
    it('OFF should be false', function(){
      assert.equal(boolifyString('OFF'), false);
    });
  });
});
