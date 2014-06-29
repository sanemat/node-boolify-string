/*
 * boolify-string
 * https://github.com/sanemat/node-boolify-string
 *
 * Copyright (c) 2014 sanemat
 * Licensed under the MIT license.
 */

'use strict';

var boolifyString = require('../boolify-string.js');

boolifyString.awesome(); // "awesome"
//value type result
//{} オブジェクト true
//"hoge" 文字列 true
//"" 文字 false
//1 数値 true
//-1 数値 true
//0 数値 false
//  [] 配列 true
//true 真偽値 true
//false 真偽値 false
//undefined undefined false
//null null false
