'use strict';

var fs = require('fs');
var path = require('path');
var test = require('ava');
var hashFile = require('../');

test('return a hashed file name from a string', function (t) {
	var src = path.join(__dirname, 'fixtures/test.jpg');

	hashFile(src, function (err, hash) {
		t.assert(!err, err);
		t.assert(hash === 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c');
	});
});

test('return a hashed file name from a Buffer', function (t) {
	var src = new Buffer(fs.readFileSync(path.join(__dirname, 'fixtures/test.jpg')));

	hashFile(src, function (err, hash) {
		t.assert(!err, err);
		t.assert(hash === 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c');
	});
});

test('synchronously return a hashed file name from a string', function (t) {
	var src = path.join(__dirname, 'fixtures/test.jpg');
	t.assert(hashFile.sync(src) === 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c');
	t.end();
});

test('synchronously return a hashed file name from a Buffer', function (t) {
	var src = new Buffer(fs.readFileSync(path.join(__dirname, 'fixtures/test.jpg')));
	t.assert(hashFile.sync(src) === 'ac8b2c4b75b2d36988c62b919a857f1baacfcd4c');
	t.end();
});
