# boolify-string
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Appveyor Status][appveyor-image]][appveyor-url] [![Dependency Status][daviddm-url]][daviddm-image]

Check a string whether truthy or falsy.

## Use case
  Read from environment variable, sometimes these are 'True', 'false', '1', '', undefined, etc.

```javascript
if (boolifyString(process.env.CI)){
  something_do();
}
```

## Install

```bash
$ npm install --save boolify-string
```


## Usage

```javascript
var boolifyString = require('boolify-string');

boolifyString('true');// #=> true
boolifyString('TRUE');// #=> true
boolifyString('True');// #=> true
boolifyString('false');// #=> false

boolifyString('{}');// #=> true
boolifyString('foo');// #=> true
boolifyString('');// #=> false
boolifyString('1');// #=> true
boolifyString('-1');// #=> true
boolifyString('0');// #=> false
boolifyString('[]');// #=> true
boolifyString('undefined');// #=> false
boolifyString('null');// #=> false

// primitive values as is
boolifyString(true);// #=> true
boolifyString(false);// #=> false
boolifyString({});// #=> true
boolifyString(1);// #=> true
boolifyString(-1);// #=> true
boolifyString(0);// #=> false
boolifyString([]);// #=> true
boolifyString(undefined);// #=> false
boolifyString(null);// #=> false

// string constructor
boolifyString(new String('true'));// #=> true
boolifyString(new String('false'));// #=> false
```


## License

Copyright (c) 2014-2015 sanemat. Licensed under the MIT license.


[npm-url]: https://npmjs.org/package/boolify-string
[npm-image]: https://badge.fury.io/js/boolify-string.svg
[travis-url]: https://travis-ci.org/sanemat/node-boolify-string
[travis-image]: https://travis-ci.org/sanemat/node-boolify-string.svg?branch=master
[daviddm-url]: https://david-dm.org/sanemat/node-boolify-string.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/sanemat/node-boolify-string
[appveyor-url]: https://ci.appveyor.com/project/sanemat/node-boolify-string/branch/master
[appveyor-image]: https://img.shields.io/appveyor/ci/sanemat/node-boolify-string/master.svg?style=flat-square&label=appveyor
