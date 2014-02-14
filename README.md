# hash-file [![Build Status](https://secure.travis-ci.org/kevva/hash-file.png?branch=master)](http://travis-ci.org/kevva/hash-file)

Create a hashed file name with Node.js.

## Getting started

Install with [npm](https://npmjs.org/package/hash-file): `npm install hash-file`

## Examples

```js
var hashfile = require('hash-file');

hashfile('test.jpg');
// => ac8b2c4b75b2d36988c62b919a857f1baacfcd4c
```

## API

### hashfile(src)

Create a hashed file name from a files content.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](http://kevinmartensson.com)
