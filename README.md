# boolify-string
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image] [![Coverage Status][coveralls-image]][coveralls-url]

Check a string whether truthy or falsy.

## Use case
  Read from environmental variable, e.g. process.env.CI = (TRUE/(empty))
```
if (boolifyString(process.env.CI)){ something_do(); }
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
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [gulp](http://gulpjs.com/).


## License

Copyright (c) 2014 sanemat. Licensed under the MIT license.



[npm-url]: https://npmjs.org/package/boolify-string
[npm-image]: https://badge.fury.io/js/boolify-string.svg
[travis-url]: https://travis-ci.org/sanemat/node-boolify-string
[travis-image]: https://travis-ci.org/sanemat/node-boolify-string.svg?branch=master
[daviddm-url]: https://david-dm.org/sanemat/node-boolify-string.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/sanemat/node-boolify-string
[coveralls-url]: https://coveralls.io/r/sanemat/node-boolify-string
[coveralls-image]: https://coveralls.io/repos/sanemat/node-boolify-string/badge.png
