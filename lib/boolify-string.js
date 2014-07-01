/*
 * boolify-string
 * https://github.com/sanemat/node-boolify-string
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(obj){
  if (typeof obj !== 'string'){
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
