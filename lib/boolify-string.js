/*
 * boolify-string
 * https://github.com/sanemat/node-boolify-string
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

// http://qiita.com/Layzie/items/465e715dae14e2f601de
function is(type, obj) {
  // e.g. [object String]
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj !== undefined && obj !== null && clas === type;
}

module.exports = function(obj){
  if (!is('String', obj)) {
    return !!obj;
  }
  var value = obj.toLowerCase();
  var bool;
  switch (value){
    case 'false':
    case '0':
    case 'undefined':
    case 'null':
    case '':
      bool = false;
      break;
    default:
      bool = true;
      break;
  }
  return bool;
};
