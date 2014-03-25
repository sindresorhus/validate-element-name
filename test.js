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

	assert.doesNotThrow(function () {
		validate('foo-bar');
	});
});
