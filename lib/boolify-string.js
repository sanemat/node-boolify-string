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
    case 'true':
      bool = true;
      break;
    case 'false':
      bool = false;
      break;
  }
  return bool;
};
