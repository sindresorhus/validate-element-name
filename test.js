'use strict';
var assert = require('assert');
var validate = require('./index');

it('should validate Custom Element names', function () {
	assert.throws(function () {
		validate('');
	});

	assert.throws(function () {
		validate('foo');
	});

	assert.throws(function () {
		validate('annotation-xml');
	});

	assert.throws(function () {
		validate('0-foo');
	});

	assert.throws(function () {
		validate('-foo');
	});

	assert.throws(function () {
		validate('foo-$');
	});

	assert.doesNotThrow(function () {
		validate('foo-bar');
	});

	assert.doesNotThrow(function () {
		validate('FOO-BAR');
	});

	assert.doesNotThrow(function () {
		validate('não-tém');
	});

	assert.throws(function () {
		validate('polymer-');
	});

	assert.throws(function () {
		validate('x-');
	});
});
